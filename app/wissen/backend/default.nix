{ pkgs ? import <nixpkgs> { } }:
let
  pname = "wissen-backend";
  scope = "@jon-zuka";
  hash = builtins.hashString src;
  src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;
  version = "0.0.0-alpha.4";
  app = pkgs.buildNpmPackage {
    inherit pname scope version src;
    nativeBuildInputs = [ pkgs.bun pkgs.nodejs ];
    npmDepsHash = "sha256-JkesYmGus0aVOBS/yJ8qObQfxEwx7uuche5A6XdRojY=";
    buildPhase = ''
      npm run build
    '';
    installPhase = ''
      local -r packageOut="$out/lib/node_modules/$scope/$pname"

      mkdir -p $packageOut
      mv dist/* $packageOut

      mkdir -p $out/bin
      ln -s $packageOut/main.js $out/bin/$pname
    '';
    meta = { mainProgram = pname; };
  };
  image = pkgs.dockerTools.buildLayeredImage {
    name = pname;
    tag = version;
    config.Env = [ "NODE_ENV=production" ];
    config.Cmd =
      [ (pkgs.lib.getExe pkgs.bun) (pkgs.lib.getExe app) pname ];
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

