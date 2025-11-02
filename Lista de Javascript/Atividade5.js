function formatar(usuario){
    let formatado = "Bem-vindo(a) " + usuario.nome + "\n" + usuario.idade + "\n" + usuario.email
    return formatado 
}

let danielJuan = {
    nome: "Juan",
    idade: "20 anos",
    email: "tralalala@gmail.com"
}
console.log(formatar(danielJuan))