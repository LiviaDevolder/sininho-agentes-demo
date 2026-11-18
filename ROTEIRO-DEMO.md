# Roteiro das duas gravações (slide 15)

O projeto é o mesmo nas duas tomadas: uma lojinha com um bug no cálculo do frete grátis.
A única coisa que muda entre elas é a delegação. É esse o ponto da palestra.

O bug: o código aplica o desconto do cupom e **depois** pergunta se o pedido passou de R$ 200.
Quem tinha R$ 210 em produtos e usou um cupom de 10% cai para R$ 189 e perde o frete grátis.
A regra da loja é olhar o subtotal, antes do desconto.

Isso é de propósito: é uma ambiguidade real, das que aparecem em código de verdade.
Antes ou depois do desconto, as duas leituras são defensáveis. Só a regra de negócio decide.
Nenhum agente adivinha isso, e é exatamente por isso que a tomada 1 falha de forma honesta.

---

## Tomada 1: pedido solto (alvo: 40 a 50 segundos)

Pasta: `take-1/`
Ela não tem testes e não tem arquivo de instruções. É o repositório cru.

Cole exatamente isto:

```
o cálculo do pedido tá com problema, dá uma olhada aí
```

O que mostrar enquanto roda: o agente lê o arquivo, encontra algo, muda, e **declara que terminou**.
Pode ser que ele acerte a regra por sorte. Pode ser que mexa no arredondamento, que também tem cara de problema.
Nos dois casos o final é o mesmo e é o que importa: ele parou porque achou que estava pronto, não porque provou.

Frase para dizer em cima: "repara que ele terminou confiante. E eu não tenho como saber se está certo sem ler tudo de novo."

---

## Tomada 2: com a receita (alvo: 60 a 80 segundos)

Pasta: `take-2/`
Mesma lojinha, mas agora com `pedido.test.js` e `CLAUDE.md`.

Cole exatamente isto:

```
Contexto: Node puro, sem dependências. As regras de negócio estão no CLAUDE.md.

Tarefa: o cálculo do frete grátis está errado.

Critério de pronto: npm test passa inteiro.

Limites: não edite os arquivos de teste e não mexa em nenhum outro arquivo.
```

O que mostrar: ele roda `npm test`, vê 1 de 3 falhando, lê a regra, corrige uma linha, roda de novo, vê 3 de 3 verdes, e só então para.

Frase para dizer em cima: "é o mesmo agente e o mesmo bug. O que mudou foi que agora ele tem como saber que terminou."

---

## Checklist antes de gravar

- Terminal em fonte grande. O que importa é dar para ler o vermelho virando verde do fundo da sala.
- Rodar `npm test` uma vez antes de gravar a tomada 2, para a plateia ver o estado inicial.
- `git init` e um commit em cada pasta, para você conseguir desfazer e regravar quantas vezes quiser.
- Cortar qualquer espera longa na edição. Cada tomada deve caber em um minuto e pouco.
- Não editar a resposta do agente na tomada 1 para ele parecer pior. Se ele acertar, melhor ainda: o argumento continua de pé, porque acertar por sorte não é critério de pronto.

## Estado esperado

- `take-1/`: sem testes. `npm start` imprime o pedido com o frete cobrado errado.
- `take-2/`: `npm test` dá 2 passando e 1 falhando. Depois da correção certa, 3 passando.
