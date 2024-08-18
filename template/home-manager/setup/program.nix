# programs
{ pkgs }: {
  home-manager = import ./program/home-manager/home-manager.program.nix;
  starship = import ./program/starship/starship.program.nix;
  zsh = import ./program/zsh/zsh.program.nix;
  vscode = import ./program/vscode/vscode.program.nix;
  git = import ./program/git/git.program.nix;
  gpg = import ./program/gpg/gpg.program.nix;
  direnv = import ./program/direnv/direnv.program.nix;
}
