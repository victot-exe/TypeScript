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