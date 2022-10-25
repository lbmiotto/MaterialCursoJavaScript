// Exemplo do uso dos Operadores Relacionais

5 > 2
// Verdade

7 < 4
// Falso

8 >= 8
// Verdade

9 <= 7
// Falso

5 == 5
// Verdade

5 == '5'
// Verdade

4 != 4
// Falso

5 === '5'
// Falso

// Exemplo do uso dos Operadores Lógicos
var a = 5
var b = 8

a > b && b % 2 == 0
// Falso

a <= b || b / 2 == 2
// Verdadeiro

// Exemplo do uso dos Operadores Ternários
var média = 5.5
média > 7 ? "APROVADO":"REPROVADO"
// REPROVADO

var média = 9
média > 7 ? "APROVADO":"REPROVADO"
// APROVADO

var x = 8
var resultado = x % 2 == 0 ? 5:9
// A var resultado ganha o valor 5, pois x % 2 é igual a 0, sendo isso verdade, o resultado é igual a 5, se o teste fosse falso, o resultado seria igual a 9