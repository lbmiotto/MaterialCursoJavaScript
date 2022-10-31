# Aula 16

## Um pouco mais de Funções
Em aulas passadas já vimos como usar funções, porém, nessa aula vamos aprofundar um pouco mais nesse assunto! Então vamos relembrar a definição de funções no JavaScript.

### Funções:
São ações executadas assim que são chamadas ou em decorrência de algum evento!

Antes de qualquer coisa, vamos deixar bem claro como funciona o ciclo de uma função, segue o exemplo a seguir:

Sua mãe da dinheiro e fala para você ir no mercado comprar pão, então você vai no mercado, compra o pão, retorna a sua casa e entrega as comprar para sua mãe.

A partir do desse exemplo feito, podemos fazer uma alusão com os atores das funções que podemos encontrar em qualquer programa de JavaScript que utiliza funções, seja as mais simples, ou as mais complexas:

* Mãe = Chamada da Função
* Dinheiro e o Pão = Parâmetro
* Comprar = Ação
* Entrega das Compras = Retornos

AVISO: Nem todas funções tem parâmetros ou retorno, mas nas funções que vamos ver a seguir vão utilizar tudo que acabamos de usar de exemplo!

### Funções que usam parâmetros e retorna resultados

SINTAXE:

function ação(parametro){
    return res
}

ação(5)

* ação(5) = Chamada
* (parametro) = parâmetro
* return res = ação
* return = retorno

EXEMPLO:

function par_impar(n){
    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = par_impar(11)

-> No caso, minha chamada pede para ver se meu parâmetro 11 é par ou impar