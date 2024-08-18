{ pkgs }: [
  pkgs.nixfmt
  (pkgs.google-cloud-sdk.withExtraComponents
    (with pkgs.google-cloud-sdk.components; [ gke-gcloud-auth-plugin ]))
  pkgs.awscli2
  pkgs.doctl
  pkgs.colima
  pkgs.docker
  pkgs.kubernetes-helm
  pkgs.kubectl
  pkgs.degit
  pkgs.bun
  pkgs.nodePackages.pnpm
  pkgs.nodejs_20
  pkgs.yarn-berry
  pkgs.ngrok
]