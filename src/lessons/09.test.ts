type StudentType = {
    id: number
    name: string
    age: number
    isMarried: boolean
    scores: number
}
type StudentsType = Array<StudentType>

let students: StudentsType;

beforeEach(() => {
    students= [
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
})

test('should match all expecties', () => {
    const highestScore = students.reduce((acc, el) => acc > el.scores ? acc : el.scores, 0);

    expect(highestScore).toBe(120);
})

