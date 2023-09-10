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
