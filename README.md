# Demo da palestra "Sininho e os Agentes Autônomos"

Uma lojinha com um bug, usada para mostrar a diferença entre pedir uma coisa para um agente e delegar uma tarefa para ele.

É o mesmo código nas duas pastas. O que muda é o que o agente recebe junto.

## O bug

`pedido.js` aplica o desconto do cupom e **depois** pergunta se o pedido passou de R$ 200 para dar frete grátis.
Quem tinha R$ 210 em produtos e usou um cupom de 10% cai para R$ 189 e perde o frete grátis.

A regra da loja é olhar o subtotal, antes do desconto.

Repare que a ambiguidade é real: antes ou depois do desconto, as duas leituras se defendem. Só a regra de negócio decide qual é a certa. Nenhum agente adivinha isso, e é esse o ponto.

## As duas pastas

### `take-1/` — pedido solto

Sem testes e sem arquivo de instruções. O repositório cru.

Prompt usado:

```
o cálculo do pedido tá com problema, dá uma olhada aí
```

O agente lê, encontra algo, muda e declara que terminou. Pode até acertar por sorte. De qualquer jeito ele parou porque achou que estava pronto, não porque provou.

### `take-2/` — com a receita

Mesma lojinha, agora com `pedido.test.js` e `CLAUDE.md`.

Prompt usado:

```
Contexto: Node puro, sem dependências. As regras de negócio estão no CLAUDE.md.

Tarefa: o cálculo do frete grátis está errado.

Critério de pronto: npm test passa inteiro.

Limites: não edite os arquivos de teste e não mexa em nenhum outro arquivo.
```

O agente roda `npm test`, vê 1 de 3 falhando, lê a regra, corrige uma linha, roda de novo e para no verde.

## Como rodar

Precisa só de Node 18 ou mais novo. Não tem dependência para instalar.

```
cd take-2
npm test     # 2 passando, 1 falhando
npm start    # imprime o pedido com o frete errado
```

Para voltar ao estado inicial depois de deixar um agente mexer:

```
git checkout .
```

## A ideia que fica

O que separa um assistente de um agente autônomo é o critério de pronto: o agente precisa saber como ele mesmo descobre que terminou. Sem isso, ele só chuta mais rápido.

Palestra sobre orquestração de agentes com subagentes: https://github.com/LiviaDevolder/ratatouille-driven-development
