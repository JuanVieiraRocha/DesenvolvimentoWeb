function stringInvertida(string = ""){
    novaString = ""
    for(i = string.length - 1; i >= 0; i--){
        novaString += string[i]
    }
    return novaString
}
function ePalindromo(string = ""){
    let stringDeTrasParaFrente = stringInvertida(string)
    if(string.replace(/\s+/g, "") == stringDeTrasParaFrente.replace(/\s+/g, "")){
        return "é palindromo"
    }
    else{
        return "não é palindromo"
    }
}

let string = "Ayrton Senna"

console.log(stringInvertida(string))
console.log(string.replace(/\s+/g, "")) // Não obtive uma forma diferente de fazer isso
console.log(ePalindromo(string))
