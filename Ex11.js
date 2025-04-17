function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',');
}

console.log(formatarPreco(14.5)); // Saída: R$ 14,50
