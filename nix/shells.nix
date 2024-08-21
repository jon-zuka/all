{ pkgs }:
let
  # wissen = import ../app/wissen/nix { inherit pkgs; };

  # util = ./util.nix  { inherit pkgs; };

in {
  default = pkgs.mkShell {
    packages = [
      pkgs.bun
      pkgs.nodejs
      pkgs.skopeo
      pkgs.esbuild
    ];
  };
}
