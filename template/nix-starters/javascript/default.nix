{ pkgs ? import <nixpkgs> { } }: {
  zero-to-nix-javascript = pkgs.buildNpmPackage {
    name = "zero-to-nix-javascript";

    buildInputs = with pkgs; [ nodejs_18 ];

    src = pkgs.nix-gitignore.gitignoreSource [ ] ./.;

    npmDepsHash = "sha256-nmLbPQpIvZdnAXZoFlj5SuA5XFXg4FHbXcsaM73YlhM=";

    npmBuild = "npm run build";

    installPhase = ''
      mkdir $out
      cp dist/index.html $out
    '';
  };
}
