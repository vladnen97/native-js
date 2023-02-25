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
