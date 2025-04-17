function reorganizarData(data) {
    return data.split('-').reverse().join('/');
  }
  
  console.log(reorganizarData('2025-04-15')); // Saída: 15/04/2025
  