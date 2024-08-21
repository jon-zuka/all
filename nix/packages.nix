{ pkgs }:
let
  solidjsUi = pkgs.callPackage ../lib/solidjs-ui { };
  wissenFrontend =
    pkgs.callPackage ../app/wissen/frontend { inherit solidjsUi; };
  wissenBackend = pkgs.callPackage ../app/wissen/backend { };
  ionica = pkgs.callPackage ../app/ionica { };
in { inherit solidjsUi wissenFrontend wissenBackend ionica; }
