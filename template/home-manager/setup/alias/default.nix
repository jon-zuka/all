{ pkgs }: {
  shell = { k = "kubectl"; };
  git = import ./git.nix { inherit pkgs; };
}
