function stringInvertida(string = ""){
    novaString = ""
    for(i = string.length - 1; i >= 0; i--){
        novaString += string[i]
    }
    return novaString
}

console.log(stringInvertida("Soccoram me subi no ônibus em marrocos"))