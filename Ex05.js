function limparEspacos(frase) {
    return frase.split(' ').filter(Boolean).join(' ');
  }
  
  console.log(limparEspacos('Olá   mundo   bonito')); // Saída: Olá mundo bonito
  