{ pkgs }: {
  pushImage = { image, name, tag, repositoryUrl }:
    pkgs.runCommand "push-image" { buildInputs = [ pkgs.skopeo ]; } ''
      set -eu
      skopeo copy --dest-creds="$REPOSITORY_USERNAME:$REPOSITORY_PASSWORD" \
        "docker-archive:${image}" \
        "${repositoryUrl}/${name}:${tag}"
    '';
}
