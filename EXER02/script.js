function calcIdade(){

 var idade = parseFloat(document.getElementById("idade").value)
  var resposta = document.getElementById("res")


  if(idade <= 18){
    resposta.textContent = idade + " - " + "Menor de idade"
  }else {
    resposta.textContent = idade + " - " + "maior de idade"
  }
}