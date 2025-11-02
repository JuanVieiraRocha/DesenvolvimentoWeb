function divisivel(num){
    if(num % 3 == 0 && num % 5 != 0){
        return "Fizz"
    }
    else if(num % 5 == 0 && num % 3 != 0){
        return "Buzz"
    }
    else{
        return "FizzBuzz"
    }
}

console.log(divisivel(3))
console.log(divisivel(5))
console.log(divisivel(15))