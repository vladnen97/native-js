//07 - Reference type, mutability, мутации

const user = {
    name: 'dima',
    age: 32
}

function increaseAge(user: {name: string, age: number}) {
    user.age++
}