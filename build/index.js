"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Funtions
function soma(x, y) {
    return x + y;
}
function addToHello(nome) {
    return `Hello ${nome}!`;
}
let somar = soma(2, 3);
function callToPhone(phone) {
    return phone;
}
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 'Victor';
    });
}
const bot = {
    id: 1,
    name: 'Megaman'
};
const bot2 = {
    id: 1,
    name: 'Megaman',
    sayHello: function () {
        return 'Done!';
    }
};
//console.log(bot.id = 'cutman') -> erro ao escrever em readonly, o valor só pode ser definido na hora de herdar
//console.log(bot2)
class Pessoa {
    sayHello() {
        return `Hello ${this.name}`;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
//const p = new Pessoa(9, 'Nicole')
//console.log(p.sayHello())
//Class
class Character {
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
}
// Subclasses
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago', 9, 30, 100);
p1.skill = 12;
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(['Victor', 'Naruto'], ['Sasuke']);
console.log(numArray);
