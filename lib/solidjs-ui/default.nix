{ pkgs ? import <nixpkgs> { } }:
pkgs.buildNpmPackage {
  name = "solidjs-ui";
  scope = "@jon-zuka";
  version = "0.0.1";

  nativeBuildInputs = [ pkgs.bun pkgs.nodejs ];

  src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;

  npmDepsHash = "sha256-xXkPZdQQdYxfFbUnrrFx7TRnEexmPE/W2VbVDdYJv/A=";

  npmBuild = "npm run build";

  installPhase = ''
    mkdir -p $out/lib/node_modules/$scope
    mv dist $out/lib/node_modules/$scope/$name
  '';
}
