// Função de par ou impar
function par_impar(n){
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(par_impar(7))

// Função soma
function soma (n1=0, n2=0) {
    // -> nos parâmetros eu utilizei um =0, isso serve para quando o n1 ou o n2 não forem informados, assim, caso n1 fosse indefinido, o soma seria 0+n2, e não iria resultar em um NaN (Not a Number)
    return n1 + n2
}

console.log(soma(2,5))

//EXTRA:

// Função dentro de uma variável
let v = function(x){
    return x*2
}

console.log(v(5))

// Função fatorial recursiva

function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))