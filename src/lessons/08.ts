


export const usersObj = {
    '0': 'Dima',
    '1': 'Vlad',
    '2': 'Natasha',
    '3': 'Valera',
    '4': 'Katya'
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dima'},
    '1050': {id: 1050, name: 'Vlad'},
    '12125': {id: 12125, name: 'Natasha'},
    '122': {id: 122, name: 'Valera'},
    '3,': {id: 3, name: 'Katya'}
}

const user = {id: 30571, name: 'Igor'};

users[user.id] = user;

export const usersArray = [{id: 101, name: 'Dima'},
    {id: 1050, name: 'Vlad'},
    {id: 12125, name: 'Natasha'},
    {id: 122, name: 'Valera'},
    {id: 3, name: 'Katya'}
]
