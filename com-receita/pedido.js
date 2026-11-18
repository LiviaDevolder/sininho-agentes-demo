const FRETE = 19.9;
const LIMITE_FRETE_GRATIS = 200;

export function calcularPedido(itens, cupom = 0) {
  const subtotal = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  const desconto = subtotal * cupom;
  const comDesconto = subtotal - desconto;
  const frete = comDesconto >= LIMITE_FRETE_GRATIS ? 0 : FRETE;

  return {
    subtotal: arredondar(subtotal),
    desconto: arredondar(desconto),
    frete: arredondar(frete),
    total: arredondar(comDesconto + frete),
  };
}

function arredondar(valor) {
  return Math.round(valor * 100) / 100;
}
