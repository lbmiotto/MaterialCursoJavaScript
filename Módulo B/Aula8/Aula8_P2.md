# Aula 8

## Divisão do tema (Operadores)
Como o JavaScript é rico em tipos de operadores, vamos dividir essa aula em duas partes, sendo a aula 7 falando sobre os tipos Aritméticos e de Atribuição, já a senda parte, vai ser na aula 8, a qual falaremos dos tipos Relacionais, Lógicos e Ternário

## Operadores Relacionais

* > (Maior)
* < (Menor)
* >= (Maior ou Igual)
* <= (Menor ou Igual)
* == (Igual)
* != (Diferente)

OBS: Exemplos feitos no arquivo Aula8_P2.js

### Identidade
O JavaScript não faz relacionamento entre tipos. Veja o exemplo a seguir:

5 == 5 -> VERDADE
5 == '5' -> VERDADE

Na segunda parte, veja que um dos 5 está entre '', mas o JavaScript reconhece essa valor não pelo seus tipo de dado, e sim pelo dado em si.

Em muitos casos, isso pode dar alguns problemas, pensando nisso, foi criado um operador de identidade, ou operador de igualdade restrita, que utiliza 3 vezes o sinal (=), Veja o exemplo a seguir:

5 == 5 -> VERDADE
5 == '5' -> VERDADE
5 === '5' -> FALSO

Veja que nesse caso ele reconhece que os dados são de tipos diferentes!

OBS: Exemplos feitos no arquivo Aula8_P2.js

## Operadores Lógicos

* ! (Negação)
* && (Conjunção / E)
* || (Disjunção / OU)

OBS: Exemplos feitos no arquivo Aula8_P2.js

### Ordem de Prioridade nos Operadores Lógicos

. !
. &&
. || 

## Operador Ternário

* ?
* :

O Operador Ternário é composto por dois sinais, e ele se chama ternário pois ele tem 3 partes, veja o exemplo a seguir:

Ternário

teste ? true : false

Exemplo:

Média >= 7.0 ? "Aprovado" : "Reprovado"

-> Veja no exemplo que se o teste lógico for uma nota maior do que 7.0, o aluno é aprovado, caso seja inferior, ele é reprovado!