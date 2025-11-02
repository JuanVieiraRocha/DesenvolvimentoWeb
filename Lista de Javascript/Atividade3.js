function numerosPares(valores){
    let novoArray= []
    for(i = 0; i <= valores.length; i++){
        if(array[i] % 2 == 0){
            novoArray.push(valores[i])
        }
    }
    return novoArray
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numerosPares(array))
