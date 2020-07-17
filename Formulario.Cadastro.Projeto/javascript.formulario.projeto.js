function registrar() {

    var nome = document.getElementById("txtnome")
    var telefone = document.getElementById("txttelefone")
    var email = document.getElementById("txte-mail")
    var senha = document.getElementById("txtsenha")
    var botao = document.getElementById("txtbotao")
    var dados = document.getElementById("dados")

    if (nome.value.length == 0 || telefone.value.length == 0 || email.value.length == 0 || senha.value.length == 0) {
        alert("ERRO FALTAM DADOS, POR FAVOR PREENCHA OS DADOS CORRETAMENTE!")
    } else {
        var tel = Number(telefone.value)
        var se = Number(senha.value)

        dados.innerHTML = `${nome.value} <br> ${tel} <br> ${email.value} <br> ${se} <br> `
        botao
        alert("CADASTRO FEITO COM SUCESSO!")
    }
}


function login() {
    var nome = document.getElementById("txtnome")
    var email = document.getElementById("txte-maillog")
    var senha = document.getElementById("txtsenhalog")
    var dados = document.getElementById("dados")
    var botao = document.getElementById("txtbotao")

    if (email.value.length == 0 || senha.value.length == 0) {
        alert("ERRO FALTAM DADOS, POR FAVOR PREENCHA OS DADOS CORRETAMENTE!")
    } else {

        botao
        alert("BEM VINDO!" + " " + `${dados.innerHTML = nome.value}`)
    }
}