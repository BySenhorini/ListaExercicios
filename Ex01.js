function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    return cpf.slice(0, 2) + '.' +
           cpf.slice(2, 4) + '.' +
           cpf.slice(6, 8) + '-' +
           cpf.slice(10, 12);
  }
  
  console.log(formatarCPF('00110001011')); // Saída: 001.100.010-11