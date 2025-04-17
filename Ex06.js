function primeiraLetraMaiuscula(frase) {
    return frase.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
  }
  
  console.log(primeiraLetraMaiuscula('olá mundo bonito')); // Saída: Olá Mundo Bonito
  