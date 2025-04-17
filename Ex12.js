function sorteadorDeNomes(nomes) {
    const listaNomes = nomes.split(', ');
    const indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    return listaNomes[indiceAleatorio];
  }
  
  console.log(sorteadorDeNomes('Ana, João, Maria, Pedro, Lucas')); // Saída: (Um nome aleatório.)
  