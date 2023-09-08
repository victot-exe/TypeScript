type heroi={
    name: string
    vulgo: string
}

function printObject(pessoa: heroi): void{
    console.log(pessoa)
}

printObject({
    name: 'Bruce Wayne',
    vulgo: 'Batman'
})

console.log('Olá Mundo!')