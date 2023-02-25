//07 - Reference type, mutability, мутации || test
type UserType = {
    name: string,
    age: number
}

function increaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {
    const user = {
        name: 'dima',
        age: 32
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superMan = user;
    superMan.age = 1000;

    expect(user.age).toBe(1000);
})


test('array test', () => {
    const users = [
        {
            name: 'dima',
            age: 32
        },
        {
            name: 'misha',
            age: 32
        },
        {
            name: 'masha',
            age: 32
        },
    ]

    const admins = users;
    admins.push({name: 'vasya', age: 10})

    expect(users.length).toBe(4)
    expect(users[3]).toEqual({name: 'vasya', age: 10})
})