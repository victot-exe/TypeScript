"use strict";
// Variaveis
// Tipos primitivos: boolean, number, string
let ligado = false;
let nome = 'Victor';
let idade = 24;
let altura = 1.8;
// Tipos especiais
let nulo = null;
let indefinido = undefined;
// Tipos abrangentes
let retorno; //não aceita nenhum valor
let retornoview = "qualquer valor ou tipo";
// Objeto não especificado
let produto = {
    name: 'Victor',
    city: 'Sanja',
};
let meuProduto = {
    nome: 'Shoes',
    preco: 400.00,
    unidades: 5,
};
// Arrays
let dados = ['Victor', 'Nicole', 'Linda'];
let dados2 = ['Victor', 'Nicole', 'Linda'];
let infos = ['Victor', 2];
// Tupla
let boleto = ['cartão de creditos', 397.76, 1892479837390];
// Date
let aniversario = new Date('2002-01-15 05:00');
// Funcions
function soma(x, y) {
    return x + y;
}
function addToHello(nome) {
    return `Hello ${nome}!`;
}
let somar = soma(2, 3);
console.log(addToHello('Victor'));
