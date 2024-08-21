{ pkgs }:
pkgs.writeShellScriptBin "yarn2nix" ''
  package="yarn2nix"
  input="./yarn.lock"
  output="./yarn.nix"
  while test $# -gt 0; do
    case "$1" in
      -h|--help)
        echo "$package - converts yarn.lock into nix expression"
        echo " "
        echo "$package [options] application [arguments]"
        echo " "
        echo "options:"
        echo "-h, --help                      show brief help"
        echo "-i, --input=./yarn.lock         specify yarn.lock file"
        echo "-o, --output=./yarn.nix         specify a directory to store output in"
        exit 0
        ;;
      -i|--input)
        shift
        if test $# -gt 0; then
          input=$1
        else
          echo "no input specified"
          exit 1
        fi
        shift
        ;;
      -o|--output)
        shift
        if test $# -gt 0; then
          output=$1
        else
          echo "no output file specified"
          exit 1
        fi
        shift
        ;;
      *)
        break
        ;;
    esac
  done
  bun - $input $output <<'EOF'
  const input = process.argv[2]
  const output = process.argv[3]
  const yarnLock = await Bun.file(`''${input}`).text();
  let regex = new RegExp(/^[^#\s]"?(?<name>[@]?[^@]+).*\n^\s{2}version "(?<version>[^\n]+)"\n\s{2}resolved "(?<resolved>[^\n]+)"\n\s{2}integrity (?<integrity>[^\n]+)/gm)
  let match: RegExpExecArray
  const packages: {
    name: string;
    version: string;
    resolved: string;
    integrity: string;
  }[] = [];
  while ((match = regex.exec(yarnLock)) !== null) {
    const groups = match.groups;
    packages.push({
      name: `''${groups.name}@''${groups.version}`,
      version: groups.version,
      resolved: groups.resolved,
      integrity: groups.integrity,
    });
  }
  const str =
    packages.reduce((acc, val) => {
      const result = acc + `
    { 
      url = \"''${val.resolved}\"; 
      hash = \"''${val.integrity}\"; 
    }`;
      return result;
    }, "{ pkgs }:\n[") + "\n]";
  Bun.write(`''${output}`, str);
  EOF''