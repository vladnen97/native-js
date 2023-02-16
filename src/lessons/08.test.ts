type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dima'},
        '1050': {id: 1050, name: 'Vlad'},
        '12125': {id: 12125, name: 'Natasha'},
        '122': {id: 122, name: 'Valera'},
        '3,': {id: 3, name: 'Katya'}
    }
})

test('should update corresponding user from obj', () => {
    users['3'].name = 'Ekaterina';

    expect(users['3'].name).toBe('Ekaterina');
    expect(users['3']).toEqual({id: 3, name: 'Ekaterina'});
})

test('should delete corresponding user from obj', () => {
    delete users['3'];

    expect(users['3']).toBeUndefined();
})