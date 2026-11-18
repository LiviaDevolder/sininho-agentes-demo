# Loja do Vale

Carrinho de compras de uma loja pequena. Node puro, sem dependências.

## Como rodar

- Testes: `npm test`
- Exemplo do carrinho: `npm start`

## Regras de negócio

- O cupom é um percentual e incide só sobre os produtos.
- Frete grátis a partir de R$ 200.
- **O frete grátis olha o subtotal, antes do desconto.** Quem passou de 200 em produtos não perde o frete grátis por usar cupom.
- Abaixo de 200, o frete é fixo: R$ 19,90.
- Dinheiro sempre arredondado em duas casas.

## O que não mexer

- Não edite os arquivos de teste. Eles são a definição do que é certo.
- Não adicione dependências.
