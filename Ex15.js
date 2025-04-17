function verificarEmail(email) {
    return email.includes('@') && email.includes('.');
  }
  
  console.log(verificarEmail('teste@dominio.com')); 
  console.log(verificarEmail('teste@dominio'));
  