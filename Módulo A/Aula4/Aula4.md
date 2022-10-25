# Aula 4

## Um pouco de HTML
Antes de começar a utilizar a linguagem JavaScript, é de extrema importância criar uma noção básica das linguagens HTML e CSS, e ver como funciona as suas estruturas.

## Estruturas
Veja a seguir a estrutura padrão de um arquivo HTML, e veja as funcionalidades de cada elemento básico

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

TAGS:
* DOCTYPE html: Responsável por informar que o tipo do documento é do tipo html.
* head: O elemento representa um contêiner para conteúdo introdutório (CSS) ou um conjunto de links de navegação.
* title: Título  da página
* body: Representa o conteúdo de um documento HTML

## Alguns elementos importantes

TAGS:

* h1: Representam o primeiro nivel dos seis níveis de título de seção
* h2: Representam o segundo nivel dos seis níveis de título de seção
* h3: Representam o terceiro nivel dos seis níveis de título de seção
* h4: Representam o quarto nivel dos seis níveis de título de seção
* h5: Representam o quinto nivel dos seis níveis de título de seção
* h6: Representam o sexto nivel dos seis níveis de título de seção
* p: Representa um parágrafo
* style: Essa tag é normalmente usada dentro da divisão <head><head>, onde é responsável pela definição do CSS (parte estética).

## Primeiro SCRIPT
Antes de começar a escrever os códigos do seu script, é necessário o uso de uma outra tag chamada <script><script>, sendo essa tag a reponsável por definir onde começa e termina o seu script.

## Primeiros Comandos
* window.alert('Meu primeiro script!')
Esse comando utiliza o window, que quer dizer janela, logo em seguida, é utilizado o alert, ou seja, esse comando cria uma janela no começo da página, a qual transmite a mensagem que está dentro dos ().

* window.confirm('Teste de msg!')
Esse comando utiliza o window, que quer dizer janela, logo em seguida, é utilizado o confirm, ou seja, esse comando cria uma janela no começo da página, a qual transmite a mensagem que está dentro dos (), e da opção de ok ou cancelar uma ação.

* window.prompt('qual é o seu nome?')
Esse comando utiliza o window, que quer dizer janela, logo em seguida, é utilizado o confirm, ou seja, esse comando cria uma janela no começo da página, a qual transmite a mensagem que está dentro dos (), e abre uma caixa de texto, dando a possibilidade do usuário escrever algo. 