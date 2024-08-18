{
  enable = true;
  lfs = { enable = true; };
  extraConfig = {
    user.useConfigOnly = true;
    init.defaultBranch = "main";
    gpg = { program = "gpg2"; };
    commit.gpgsign = "true";
    pull.rebase = "false";
  };
  includes = [
    {
      contents = {
        user = {
          name = "YOUR_NAME";
          email = "YOUR_EMAIL";
          signingkey = "YOUR_SIGNING_KEY";
        };
        core = { sshCommand = "ssh -i ~/.ssh/YOUR_IDENTITY"; };
      };
      condition = "gitdir:~/dev/YOUR_DIRECTORY/**";
    }
  ];
}
