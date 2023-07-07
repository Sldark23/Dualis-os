function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateStartup() {
  console.log("========≈================");
  console.log("Iniciando o Dualis OS...");

  // Simula a animação de ligar o sistema operacional
  for (let i = 0; i < 5; i++) {
    await delay(500); // Aguarda 500 milissegundos entre cada frame da animação
    console.clear(); // Limpa o console antes de exibir o próximo frame
    console.log("Iniciando o Dualis OS" + ".".repeat(i));
  }
console.log("========≈================");
  console.clear(); // Limpa o console após a animação
  console.log("========≈================");
  console.log("Dualis OS ");
  console.log("========≈================");
}

animateStartup();
