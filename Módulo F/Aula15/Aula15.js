// Escoplhendo um valor do array
let num = [5, 6, 7, 8,]
num[3] = 6 // -> Acabei de mudar o valor do vetor 3 para 6, sendo assim, a variável agora é: 5, 6, 7, 6
num.push(7)

console.log(`Nosso valor é o ${num}`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`Nosso array tem ${num.length} lugares`)

// Vetor na tela
let valores = [1, 2, 3, 8]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Outra maneira
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Buscar valores dentro de um vator
let pos = num.indexOf(5)
console.log(`O valor 5 está na chave: ${pos}`)