function calcular() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById('resultado').innerText = "Digite dois números válidos!";
    return;
  }

  const soma = n1 + n2;
  const resultadoFinal = soma - 5;

  document.getElementById('resultado').innerText = "Resultado final: " + resultadoFinal;

  // Também no console (opcional)
  console.log("Resultado final:", resultadoFinal);
}
