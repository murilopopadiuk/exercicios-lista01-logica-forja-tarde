function mostre(){
    var nome = document.getElementById("nome").value 
    var descricao = document.getElementById("desc").value 
    var idade = parseFloat(document.getElementById("idade").value) 
    var genero = document.getElementById("gen").value 
    var hobby = document.getElementById("hobby").value 

    var pnome = document.getElementById("pnome")
    var pdesc = document.getElementById("pdesc")
    var pidade = document.getElementById("pidade")
    var pgen = document.getElementById("pgen")
    var phobby = document.getElementById("phobby")

    pnome.textContent = nome
    pdesc.textContent = descricao
    pidade.textContent = idade
    pgen.textContent = genero
    phobby.textContent = hobby
    

}