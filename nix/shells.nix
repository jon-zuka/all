{ pkgs }:
{
  default = pkgs.mkShell {
    packages = with pkgs; [
      bun
      nodejs
    ];
  };
}
