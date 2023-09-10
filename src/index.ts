// Variaveis
// Tipos primitivos: boolean, number, string
let ligado:boolean = false
let nome: string = 'Victor'
let idade: number = 24
let altura: number = 1.8
// Tipos especiais
let nulo: null = null
let indefinido: undefined = undefined
// Tipos abrangentes
let retorno: void //não aceita nenhum valor
let retornoview: any = "qualquer valor ou tipo"

// Objeto não especificado
let produto: object ={
    name: 'Victor',
    city: 'Sanja',
}
// Objeto shapado
type ProdutoLoja ={
    nome: string
    preco: number
    unidades: number
}

let meuProduto: ProdutoLoja ={
    nome: 'Shoes',
    preco: 400.00,
    unidades: 5,
}
// Arrays
let dados: string[] = ['Victor', 'Nicole', 'Linda']
let dados2: Array<string> = ['Victor', 'Nicole', 'Linda']
let infos: (string | number)[] = ['Victor', 2]
// Tupla
let boleto:[string, number, number] = ['cartão de creditos', 397.76, 1892479837390]

// Date
let aniversario: Date = new Date('2002-01-15 05:00')

// Funtions
function soma(x: number, y: number): number{
    return x + y
}

function addToHello(nome: string): string{
    return `Hello ${nome}!`
}
let somar: number = soma(2,3)

function callToPhone(phone: string | number): string | number{
    return phone
}

async function getDataBase(id: number): Promise<string>{
    return 'Victor'
}

// Interfaces x type
type robot ={
    readonly id: number | string
    name: string
}

interface robot2 {
    id: number | string
    name: string
    sayHello():string
}

const bot: robot ={
    id: 1,
    name: 'Megaman'
}


const bot2: robot2 = {
    id: 1,
    name: 'Megaman',
    sayHello: function (): string {
        return 'Done!'
    }
}
//console.log(bot.id = 'cutman') -> erro ao escrever em readonly, o valor só pode ser definido na hora de herdar
//console.log(bot2)

class Pessoa implements robot2{
    id: string | number
    name: string
    sayHello(): string {
        return `Hello ${this.name}`
    }

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }
}

//const p = new Pessoa(9, 'Nicole')
//console.log(p.sayHello())

//Class
class Character {
    protected name: string
    readonly stregth: number
    skill: number

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
    constructor(name: string, stregth: number, skill: number){
        this.name = name
        this.stregth = stregth
        this.skill = skill
    }
}
// Subclasses
class Magician extends Character{
    magicPoints: number
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill)
        this.magicPoints = magicPoints
    }
}
const p1 = new Character('Ryu', 10, 98)
const  p2 = new Magician('Mago', 9, 30, 100)
p1.skill = 12

// Generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [3])
const strArray = concatArray<string[]>(['Victor', 'Naruto'], ['Sasuke'])

// Decorators

function ExibirNome(target: any){
    console.log(target)
}

@ExibirNome //deixa o gatilho assim com o @nume da funcao
class Funcionario{}
