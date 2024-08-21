{ pkgs }:
pkgs.writeShellScriptBin "push-images" ''
  skopeo copy --insecure-policy \
    --dest-creds="$REPOSITORY_USERNAME:$REPOSITORY_PASSWORD" \
    "docker-archive:${wissen.backend.image}" \
    "docker://$REPOSITORY_URL/${wissen.backend.name}:${wissen.backend.tag}"

  skopeo copy --insecure-policy \
    --dest-creds="$REPOSITORY_USERNAME:$REPOSITORY_PASSWORD" \
    "docker-archive:${wissen.frontend.image}" \
    "docker://$REPOSITORY_URL/${wissen.frontend.name}:${wissen.frontend.tag}"
''
