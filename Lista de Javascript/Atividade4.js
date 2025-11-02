function encontrarMaior(array){
    let maior = 0
    for(i = 0; i <= array.length; i++){
        if(maior < array[i]){
            maior = array[i]
        }
    }
    return maior
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(encontrarMaior(array))