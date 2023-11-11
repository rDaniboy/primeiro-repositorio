/* Elabore um algoritimo que calcule o valor a ser pago por um produto , considerando as condicoes de pagamento.
Ultilize os codigos da tabela abaixo para ler qual condicao escolhida e efetuar o calculo adequado.

Condicoes de pagamento:
- 1 A vista no debito, recebe 10% de desconto;
- 2 A vista no dinheiro ou pix 15% de desconto;
- 3 Em duas vezes no cartao, preco da etiqueta;
- 4 Acima de duas vezes, acrescimo de 10%;
*/
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100));
}
function adicaoJuros(valor, juros) {
    return (valor + (valor * juros / 100));
}

const precoProduto = 100
const formaDePagamento = 3;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoProduto, 15));
} else if (formaDePagamento === 3) {
    console.log(precoProduto);
} else {
    console.log(adicaoJuros(precoProduto, 10));
}
