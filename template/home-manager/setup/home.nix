{ pkgs, user, ... }:
{
  home = {
    username = user;
    homeDirectory = "/Users/${user}";
    stateVersion = "24.05";
    packages = import ./package.nix { inherit pkgs; };
    shellAliases = { k = "kubectl"; };
  };
  programs = import ./program.nix { inherit pkgs; };
}
