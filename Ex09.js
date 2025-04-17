function verificarPalindromo(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
  }
  
  console.log(verificarPalindromo('ameixa')); // Saída: true
  console.log(verificarPalindromo('olá')); // Saída: false
  