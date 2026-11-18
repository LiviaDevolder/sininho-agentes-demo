import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularPedido } from './pedido.js';

const tresPacotes = [{ nome: 'Café em grãos 1kg', preco: 70, quantidade: 3 }];
const doisPacotes = [{ nome: 'Café em grãos 1kg', preco: 70, quantidade: 2 }];

test('o frete grátis olha o subtotal, antes do desconto', () => {
  const pedido = calcularPedido(tresPacotes, 0.1);

  assert.equal(pedido.subtotal, 210);
  assert.equal(pedido.desconto, 21);
  assert.equal(pedido.frete, 0);
  assert.equal(pedido.total, 189);
});

test('abaixo de 200 o frete é cobrado', () => {
  const pedido = calcularPedido(doisPacotes, 0);

  assert.equal(pedido.subtotal, 140);
  assert.equal(pedido.frete, 19.9);
  assert.equal(pedido.total, 159.9);
});

test('sem cupom, o total é o subtotal mais o frete', () => {
  const pedido = calcularPedido(tresPacotes, 0);

  assert.equal(pedido.desconto, 0);
  assert.equal(pedido.frete, 0);
  assert.equal(pedido.total, 210);
});
