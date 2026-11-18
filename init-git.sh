#!/bin/sh
# Cria um repositório git em cada tomada, com o estado inicial commitado.
# Depois de gravar, "git checkout ." dentro da pasta volta tudo ao ponto de partida.
set -e
cd "$(dirname "$0")"

for t in take-1 take-2; do
  cd "$t"
  git init -q -b main
  git add -A
  git commit -qm "Loja do Vale: estado inicial da demo"
  echo "$t pronto: $(git log --oneline)"
  cd ..
done

echo
echo "Para regravar, entre na pasta da tomada e rode: git checkout ."
