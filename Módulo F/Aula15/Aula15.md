# Aula 15

## Variáveis Compostas
Diferente das variáveis simples que so conseguem armazenar um valor por vez, as variáveis compostas são capazes de armazenar vários valores em uma mesma estrutura

SINTAXE:
var a = []

Exemplo:
Em um estacionamento, eu tenho muitas vagas para carros, fazendo um paralelo com um programa, cada vaga é uma variável simples, mas ae é que entra as variáveis compostar, como são todas vagas de carros, eu vou dar o nome de todas elas com a, e colocando seus identificadores entre []

var a = [carro1, carro2, carro3]

índice: carro1 = 0 | carro2 = 1 | carro3 = 2

OBS: No JavaScript, essa estrutura chamada vetor da array (array = variável composta) sempre começa na posição 0

### Trocar o valor de um vetor
Muitas vezes gostariamos de mudar algum valor dentro de um vetor, e para fazer isso, basta utilizar a seguinte sintaxe:

SINTAXE:

let num = [1, 2, 3, 4, 5]
num[3] = 6

* num -> Fala qual variável composta eu quero mudar
* 3 -> Fala a posição que eu quero mudar o valor
* 6 -> Novo valor

OBS: Caso não exista em seu array vetor, o JavaScript cria pra você

### Manipulando o Array
Existe muitas sintaxes que dão a chance de manipular os arrays, veja a seguir algumas delas:

* num.push(7)

-> Coloca o valor 7 no último vetor

* num.length

-> Conta quantos elementos tem o array

* num.sort()

-> Pega todos valores dos vetores e colocam em order crescente

### Mostrando o array sem sua estrutura
Utilizando as estruturas de repetição, podemos tirar as estruturas dos arrays quando vamos mostrar algum vetor na tela

Exemplo 1:

for (let pos = 0; pos < num.length; post++) {
    console.log('')
}

Exemplo 2: 

for (let pos in num) {
    console.log('')
}

* for (let pos in num) -> "Para cada posição em num"

### Buscando um valor dentro de um vetor
Utilizando a seguinte sintaxe, podemos buscar um valor dentro do vetor

SINTAXE:

num.indexOf(5)

* Essa função vai buscar dentro do vetor qual a chave tem o valor 5

OBS: Caso o vetor não tenha o conteudo da sua pesquisa, o JavaScript vai retornar um -1