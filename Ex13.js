function filtrarPalavras(palavras) {
    return palavras.filter(palavra => palavra.length > 3);
  }
  
  console.log(filtrarPalavras(['cachorro', 'gato', 'elefante', 'pato'])); 
  