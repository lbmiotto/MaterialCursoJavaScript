# Aula 12

## Condições Aninhadas
Na aula anterior, foi mostrado dois tipos de condições, as simples e complexas. Já nessa aula, vamos retomar as condições, porem, no JavaScript e na maioria das outras linguagens existe as condições aninhadas, que básicamente é a contrução de um estrutura de condição dentro de outra estrutura de condição, assim, deixando o seu programa cada vez mais complexo e mais completo, dando a oportunidade fazer mais coisas com o seu código.

OBS: Veja o Arquivo de Imagem: Exemplo Condições Aninhadas.png

A seguir veja a sintaxe

SINTAXE:

if (condição 1) {

}else{
    if (condição 2) {

    }else{

    }
}

OBS: Veja o exemplo no arquivo Aula12_P1.js E Aula12_P2.js
DICA: No exemplo Aula12_P2.js é mostrado como pegar a hora atual do seu computador!

## Condição Múltipla
Direferente do que foi fisto até então, as estruturas de condições somente dão obções de blocos caso seja verdadeiro ou falso, porém, as condições múltplas dão uma serie de valores que são fixos.

OBS: Veja o Arquivo de Imagem: Exemplo Condições Múltiplas.png

A seguir veja a sintaxe

SINTAXE:

switch (expressão) {
    case valor 1:

        break
    case valor 2:

        break
    case valor 3:

        break
    default:
}

OBS: NÃO ESQUEÇA DE USAR O BREAK!!!
OBS: Veja o exemplo no arquivo Aula12_P3.js