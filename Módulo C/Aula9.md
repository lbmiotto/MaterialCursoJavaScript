# Aula 9

## Extenções do Visual Studio Code
* Node.js Exec
* Live Server

## DOM
Document Object Model (DOM), básicamente é um conjunto de objetos dentro do navegador, que vão dar acesso aos componentes internos do seu site.

OBS: O DOM não funciona com o Node.js

## Árvore DOM
A Árvore DOM é uma estrutura que explica o funcionamento do DOM dentro do JavaScript. Básicamente tudo dentro do JavaScript está dentro de uma objeto chamado window, ou seja, tudo que ta dentro do navegador está dentro do objeto window.

* Ancestralidade?

A Árvore DOM conta com um sistema de ancestralidade, ou seja, seguindo exemplo dado na imagem (Exemplo de Árvore DOM.png), tudo que está na parte de cima é um objeto pai ou objeto mãe, e o que está em baixo de cada um é um objeto filho ou objeto filha de cada um dos objetos apresentados

EXEMPLO:
Anteriormente vimos o seguinte comando:

window.document.write("Olá, Mundo")

window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
write -> Estou pedindo para usar o objeto write, que pode escrever alguma coisa na página.

## Selecionando Objetos pela Pesquisa da Árvore DOM
Tendo o conhecimento de como funciona a Árvore DOM, saiba que existem muitas maneiras de navegar por essa árvore, nessa aula vamos aprender os seguintes:

* Marca
* ID
* Nome
* Classe
* Seletor

### Marca
Utilizando o seguinte comando: getElementsByTagName(), podemos fazer uma pesquisa de marca

EXEMPLO:
var p1 = window.document.getElementsByTagName('p')[0]

var p1 -> Variável onde vou gardar minha informação.
window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
getElementsByTagName -> Estou pedindo para pegar um elemento HTML na página
('p')[0] -> Estou falando que o elemento HTML que eu quero é um elemento 'p' que se encontra na posição 0, ou seja, o primeiro elemento 'p' que aparece na minha estrutura HTML, casa eu queira o segundo que aparece, basta eu trocar esse 0 por 1.

### ID
Utilizando o seguinte comando: getElementsById('msg'), podemos fazer uma pesquisa de ID de algum elemento HTML que tenha um Id chamado 'msg'

EXEMPLO:
var p1 = window.document.getElementsById('msg')

var p1 -> Variável onde vou gardar minha informação.
window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
getElementsById -> Estou pedindo para pegar um elemento HTML na página por um Id.
('msg') -> Estou informando qual é o Id dentro dos elementos HTML que eu quero pegar

### Name
Utilizando o seguinte comando: getElementsByName('meunome'), podemos fazer uma pesquisa de nome de algum elemento HTML que tenha um nome chamado 'meunome'

EXEMPLO:
var p1 = window.document.getElementsByName('meunome')[0]

var p1 -> Variável onde vou gardar minha informação.
window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
getElementsByName -> Estou pedindo para pegar um elemento HTML na página por um nome.
('meunome') -> Estou informando qual é o Id dentro dos elementos HTML que eu quero pegar
[0] -> Estou falando que o elemento HTML que tenha um name="", que se encontra na posição 0, ou seja, o primeiro elemento name="" que aparece na minha estrutura HTML, casa eu queira o segundo que aparece, basta eu trocar esse 0 por 1.

### Class
Utilizando o seguinte comando: getElementsByClassName('minhaclass'), podemos fazer uma pesquisa de nome de algum elemento HTML que tenha um nome chamado 'minhaclass'

EXEMPLO:
var p1 = window.document.getElementsByClassName('minhaclass')[0]

var p1 -> Variável onde vou gardar minha informação.
window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
getElementsByClassName -> Estou pedindo para pegar um elemento HTML na página por um nome.
('minhaclass') -> Estou informando qual é o Id dentro dos elementos HTML que eu quero pegar

### Selector
Utilizando o seguinte comando: querySelector OU querySelectorAll, podemos fazer uma pesquisa de nome de algum elemento HTML que tenha seu nome colocado entre ("")

EXEMPLO:
var p2 = window.document.querySelector('div#msg')

P2 -> Variável onde vou gardar minha informação.
window -> Estou pedindo para pesquisar algo dentro do objeto window.
document -> Estou pedindo para pesquisar algo dentro do objeto document.
querySelector -> Estou pedindo para selecionar algo
("") -> Estou especificando o que eu quero que o querySelector pegue, no exemplo eu pedi para pegar todos os elementos que são uma div, que tenham um id msg
