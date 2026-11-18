import { calcularPedido } from './pedido.js';

const carrinho = [
  { nome: 'Café em grãos 1kg', preco: 70, quantidade: 3 },
];

console.log(calcularPedido(carrinho, 0.1));
