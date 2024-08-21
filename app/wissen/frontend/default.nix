{ pkgs ? import <nixpkgs> { }, solidjsUi }:
let
  pname = "wissen-frontend";
  scope = "@jon-zuka";
  version = "0.0.0-alpha.4";
  app = pkgs.buildNpmPackage {
    inherit pname scope version;
    nativeBuildInputs = [ pkgs.bun pkgs.nodejs solidjsUi ];
    src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;
    npmDepsHash = "sha256-NSJJMkcLvVYyk40ow1uIwAlBG63FsVLQedgQpUk/wlA=";
    buildPhase = ''
      cp -r ${solidjsUi}/lib/node_modules/* node_modules/.
      npm run build
    '';
    installPhase = ''
      local -r packageOut="$out/lib/node_modules/$scope/$pname"

      mkdir -p $packageOut
      cp -r dist/* $packageOut
      chmod +x $packageOut/server/index.mjs

      mkdir -p $out/bin
      ln -s $packageOut/server/index.mjs $out/bin/wissen-frontend
    '';
    meta = { mainProgram = "wissen-frontend"; };
  };
  image = pkgs.dockerTools.buildLayeredImage {
    name = pname;
    tag = version;
    config.Env = [ "NODE_ENV=production" ];
    config.Cmd =
      [ (pkgs.lib.getExe pkgs.bun) (pkgs.lib.getExe app) "wissen-frontend" ];
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

