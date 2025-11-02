function factorial(valor){
    let valorDeRetorno = 1
    for(i = valor; i > 0; i--){
        valorDeRetorno *= valor
        valor--
    }

    return valorDeRetorno
}

console.log(factorial(5))