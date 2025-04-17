function contarPalavrasComLetra(frase, letra) {
    const palavras = frase.split(' ');
    return palavras.filter(palavra => palavra.toLowerCase().startsWith(letra.toLowerCase())).length;
  }
  
  console.log(contarPalavrasComLetra('Amazônia é a maior floresta do mundo', 'a')); 
  