function gerarSenha() {
  const caracteres = 'stuvwxyz0123456789!@#$%^&*()';
  let senha = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  return senha;
}

console.log(gerarSenha());
