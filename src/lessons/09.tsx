/*associated array*/


//вынесли список задач из каждого тудулиста
const TODOLIST_ID_1 = 'id123456789';
const TODOLIST_ID_2 = 'id234567890';

const todoLists = [
    {
        id: TODOLIST_ID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: TODOLIST_ID_2,
        title: 'What to buy',
        filter: 'active',
    }
]

const tasks = {
    [TODOLIST_ID_1]: [ //[TODOLIST_ID_1] - вычисляемое свойтсво объекта 
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'JS', isDone: false}
    ],
    [TODOLIST_ID_2]: [
        {id: '22', name: 'Meat', isDone: false},
        {id: '23', name: 'Eggs', isDone: true}
    ]
}