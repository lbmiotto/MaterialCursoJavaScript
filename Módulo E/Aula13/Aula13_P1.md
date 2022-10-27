# Aula 13

## Estruturas de repetição (while)
Uma estrutura de repetição (Laço) começa exatamente como uma condição, ou seja, ele vai testar um expressão, sendo essa mesma expressão verdadeira ou falsa, porém, o comportamento é diferente. Veja bem, quando o teste lógico for verdade, ele não vai seguir uma sequência, ele vai voltar para um ponto específico, já se o teste lógico for falso, ele vai dar sequência no script.

OBS: Veja a imagem de Exemplo de Loop.png

SINTAXE:

while (condição) {

}

* while -> Tradução: Enquanto

OBS: Veja que enquanto a condição for verdade, os comandos dentro do {} vão ser executados infinitamente, até que a condição se torne falsa, assim, dando sequência ao script!

EXEMPLO:

Temos uma pizza de x pedaços!

fuction comerPizza(){
    while (aindaTemFatias()){
        comerFatia()
    }
}

Veja que não importa a quantidade de fatias, o programa vai ser "comer" uma fatia até não sobrar nenhuma

OBS: Veja mais no arquivo Aula13_P1.js

## Estrutura do
Na estrutura anterior, vemos que o laço faz um teste lógico, executa o que tem que executar e retorna para o teste lógico mais uma vez, porém, existe mais estruturas de laço no JavaScript, sendo uma delas o do, que primeiro executa o bloco, e depois faz o teste lógico!

SINTAXE:

dp{

}while (condição)

* do -> Tradução: Faça

OBS: Veja mais no arquivo Aula13_P1.js