function calcularArea() {
  const lado = parseFloat(document.getElementById("lado").value);

  if (isNaN(lado) || lado <= 0) {
    document.getElementById("resultado").innerText = "Digite um valor válido para o lado!";
    return;
  }

  const area = lado * lado;

  document.getElementById("resultado").innerText = `Área do quadrado: ${area} cm²`;

  // Também exibe no console
  console.log("Área calculada:", area);
}
