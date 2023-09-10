# TypeScript
## Superset do JavaScript
* Tunando o JavaScript
* Pode tipar as vars
* Consegue ver erros em tempo real enquanto está escrevendo  
* Pode ser usado em qualquer lugar que o JS é aceito  
#### Transpilação
* Translate + Compile
* Ele converte todo o código em JS (Node)

## Criando o arquivo node
* `npm init -y`
* ` npm install typescript -D` -> Apenas para desenvolvimento
* extensão .ts é de TypeScript
`node caminho/do/arquivo` -> no terminal para executar arquivo js
* `npx tsc src/caminho`-> traduz o .ts para .js assim o node pode entender
#### Criando arquivo de configuração do TypeScript
* `npx tsc --init` -> Cria tsconfig.json
* tsconfig.json é onde vc controla as opções do ts
* `rootDir` -> Diretório raiz quando não digitar nenhum caminho na conversão ele puxa esse por padrão
* `outputDir` -> pasta de saida da conversão
* [TipeScript](https://www.typescriptlang.org/) -> Consultar para tirar duvidas e ver sobre as configs de .ts
#### Criando um script
* em `package.json` na parte`"scrips"` vc cria o comeando e depois chama ele pelo nome no terminal   
~~~
"scripts": {
    "start":"npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
~~~
* No terminal é só escrever -> `npm run start`

## Tipando variáveis
* Para declarar as variáveis tipadas:  
`let variavel: tipo = valor` -> `let ligado: boolean = false`
### Tipos de variáveis
**Tipos primitivos**
* string
* number
* boolean
* Date  
  
**Tipos especiais**
* null
* undefined  
  
**Tipos abrangentes**
* any -> qualquer
* void
### Objetos
**Objeto sem previsibilidade**
* Cria um objeto mas não deixa especificado nem predefinido os seus tipos
~~~
let produto: object ={
    name: 'Victor',
    city: 'Sanja',
}
~~~
**Objeto shapado**
~~~
type ProdutoLoja ={
    nome: string
    preco: number
    unidades: number
}
let meuProduto: ProdutoLoja ={
    nome: 'Tênis',
    preco: 400.00,
    unidades: 5,
}
~~~  
* Cria um objeto e deixa seus tipos e atributos já definidos
### Array
* Duas formas de declarar
~~~
let dados: string[] = ['Victor', 'Nicole', 'Linda']
let dados2: Array<string> = ['Victor', 'Nicole', 'Linda']
~~~
* Array que aceita multiplos tipos -> `let infos: (string | number)[] = ['Victor', 2]`
### Tuplas
* Semelhante a `Array` só que;
* Aceita varios tipos e em uma ordem correta ->
`let boleto:[string, number, number] = ['cartão de creditos', 397.76, 1892479837390]`
## Funcions
* Funções como em JS só que tipadas
~~~
function soma(x: number, y: number): number{
    return x + y
}

function addToHello(nome: string): string{
    return `Hello ${nome}!`
}
let somar: number = soma(2,3)

console.log(addToHello('Victor'))

function callToPhone(phone: string | number): string | number{
    return phone
}
~~~
**async function** -> `async function getDataBase(id: number): Promise<string>{
    return 'Victor'
}`
* async functions Precisam de uma promisse já que elas aguardam algum retorno de outra fonte.  

## Interface x Type
* O type é usado para tipar um objeto
* Interface é mais utilizada para quando vamos utilizar classes
* Interface é um contrato que quem herda tem que segui-lo
* `readonly` -> apenas leitura - só pode ser definido na hora da criação, após não pode ser alterado;  
**Em JS não tem diferença entre interface e type, ele declara apenas os objetos que herdaram as caracteristicas**  
## Class
* formas de areia, faz varios objetos iguais
* Método `constructor(){}`-> método para instanciar a class e já serem passados os valores.
* Para declarar um atributo como opcional colocamos `?` após o nome -> `nome?:string`
#### Data modifers
* `public`-> é o default, publico
* `protected`-> dentro da classe e de classes filhas e da classe mãe  
* `private`-> só pode ser acessada dentro da propria classe  
#### Subclasses
* uma classe que herda de outra classe e que pode ter atributos e métodos diferentes
* `super()`-> método construtor da classe mãe

## Generics
* `<T>`
* Serve para que o tipo seja especificado na hora da implementação da function.   
~~~
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [3])
const strArray = concatArray<string[]>(['Victor', 'Naruto'], ['Sasuke'])

numArray.push('string') //Vai apontar um erro pois é diferente do tipo especificado
~~~

## Melhorando o script `start`
* `npm install ts-node-dev -D` -> Servidor local que entende TS e atualiza em tempo real a saida.
* `"start:dev": "ts-node-dev --respawn --traspile-only scr/index.ts"`

## Decorators
* Uma ação que vai acontecer quando uma determinada condição for cumprida
* Sempre que o leite estiver a 2 reais compra
~~~
function ExibirNome(target: any){
    console.log(target)
}

@ExibirNome //deixa o gatilho assim com o @nume da funcao
class Funcionario{}
~~~
