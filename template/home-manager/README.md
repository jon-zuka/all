## Getting started

1. The first time, you need to install home manager
```sh
nix run nixpkgs#home-manager -- switch --flake .
```
2. From now on, you can use home-manager directly
```
home-manager switch --flake .
```