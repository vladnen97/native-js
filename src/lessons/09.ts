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

//типизация для тасок в данном случае

type TasksType = {
    [key: string]: Array<{ id: string, name: string, isDone: boolean }>
}

const tasks: TasksType = {
    [TODOLIST_ID_1]: [ //[TODOLIST_ID_1] - вычисляемое свойтсво объекта -> square brackets notation
        {id: '12', name: 'HTML', isDone: true},
        {id: '13', name: 'JS', isDone: false}
    ],
    [TODOLIST_ID_2]: [
        {id: '22', name: 'Meat', isDone: false},
        {id: '23', name: 'Eggs', isDone: true}
    ]
}

//метод reduce

const studentsArray = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: 'John',
        age: 26,
        isMarried: false,
        scores: 100
    },
]

const shortInfo = studentsArray.map(el => ({id: el.id, name: el.name}))
const rabotaiBlyat = studentsArray.reduce((acc: any[], el) => [...acc, {id: el.id, name: el.name}], [])

//конвертация массива объектов в объект объектов

type newStudentsType = {
    [key: string]: { name: string, age: number, isMarried: boolean, scores: number }
}

const newStudents:newStudentsType = studentsArray.reduce((acc: any, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})

// const newStudents = {
//     '1': {
//         name: 'Bob',
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     '2': {
//         name: 'Alex',
//         age: 21,
//         isMarried: true,
//         scores: 89
//     }
// }