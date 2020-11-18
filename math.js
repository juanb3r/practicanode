

var math = {};

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if (x2==0) {
        console.log("Error, no se puede dividir por cero")
    }else{
        return x1 / x2;
    }
    
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

module.exports= math;
