{ pkgs ? import <nixpkgs> { } }:
let
  pname = "ionica";
  scope = "@jon-zuka";
  src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;
  version = "0.0.0-alpha.5";
  app = pkgs.buildNpmPackage {
    inherit pname scope version;
    name = pname;
    nativeBuildInputs = [ pkgs.bun pkgs.nodejs ];
    src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;
    npmDepsHash = "sha256-L91kCONK/JQj0U+g+kQE/rgdeJJ5Mv+TI9FlpYKMRCs=";
    buildPhase = ''
      npm run build
    '';
    installPhase = ''
      local -r packageOut="$out/lib/node_modules/$scope/$pname"
      mkdir -p $packageOut

      mv dist/standalone/* $packageOut/.
      mv dist/static $packageOut/dist/.

      chmod +x $packageOut/server.js
      mkdir -p $out/bin
      ln -s $packageOut/server.js $out/bin/$pname
    '';
    meta = { mainProgram = pname; };
  };
  image = pkgs.dockerTools.buildLayeredImage {
    name = pname;
    tag = version;
    config.Env = [ "NODE_ENV=production" ];
    config.Cmd = [ (pkgs.lib.getExe pkgs.bun) (pkgs.lib.getExe app) pname ];
    contents = [ pkgs.bun app ];
  };
in {
  inherit app image;
  push = pkgs.writeShellScriptBin "push-${pname}" ''
    skopeo copy --insecure-policy \
      --dest-creds="$REPOSITORY_USERNAME:$REPOSITORY_PASSWORD" \
      "docker-archive:${image}" \
      "docker://$REPOSITORY_URL/${pname}:${version}"
  '';
}
