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
* No terminal é só escrever -> `start`
