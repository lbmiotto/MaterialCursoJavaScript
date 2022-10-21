# Aula 6

## Concatenação
OBS: O sinal + pode ser usado como adição, e para concatenação

Concatenar envolve unir o conteúdo de duas expressões "strings". No JavaScript, o operador para concatenar é o sinal de mais "+".

## Converção de Tipo de Dados
Muitas vezes, podemos encontrar uma situação onde devemos mudar o tipo de uma variável, para isso, existe alguns métodos que podem fazer isso. Veja a seguir uma situação onde essa converção é necessária:

Anteriormente, aprendemos o seguinte comando:
var nome = window.prompt('MSG')

O comando prompt por sua vez, ele transforma tudo que pega de informação e transforma em uma string (EXEMPLO: coloquei o número 1, então o prompt vai transformar essa valor na seguinte expressão: "1")

Com isso em mente, saiba que é póssivel alterar esse valor com os seguintes comandos.

COMANDOS:
* Number.parseInt(n)        //Transforma os valores em números inteiros.
* Number.parseFloat(n)      //Transforma os valores em números reais.
* Number(n)                 //Consegue identificar e alterar o tipo do número que foi informado.
* String(n)                 //Transforma o valor em uma string.
* n.toString()              //Transforma o valor em uma string.

Veja a Sintaxe nos arquivos HTML da aula 6 parte 1 e parte 2.

## Formatação das Strings
Formatação é uma método que pode substituir o uso da concatenação, pois em casos onde é necessário muitas concatenações, isso pode atrapalhar, então foi criado a formatação, onde utilizando os caracteres ($) Cifra e (``) Crase, é possivel facilitar a escrita dentro do código.

SINTAXE E EXEMPLO:

var nome = "Lucas"
var idade = 19

"O nome do aluno é ${`nome`} e ele tem ${`idade`}"

## Formatação dos Números
A manipulação de Números, como o nome sugere, consiste na moldagem dos números através de objetos, veja alguns exemplos:

SINTAXE E EXEMPLO:

var n1 = 11543.5
n1.toFixed(2)                                                           // Coloca o número com 2 valores depois da ,
ou          
n1.toFixed(2).replace('.',',')                                          // Coloca o número com 2 valores depois da , e troca o . por ,
ou
n1.toLocateSting('pt-BR', {style: 'currency', currency: 'BRL'})         // Transforma o valor e converte para a moeda real


# EXTRAS

## Manipulando Strings
A manipulação de strings, como o nome sugere, consiste na moldagem da string através de objetos, veja alguns exemplos:

var nome = "JavaScript"
* nome.length           // Faz a contagem de quantos caracteres a string tem.
* nome.toUpperCase()    // Trasforma todos os caracteres da string para CAPS LOCK.
* nome.toLowerCase()    // Transforma todos os caracteres da string em letras minúsculas.

## Comandos novos 
document.write(`MSG`)   // Esse comando permite escrever algo na tela da página.