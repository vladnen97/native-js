
type studentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
}

let studentsArray2: Array<studentType>;

beforeEach(() => {
    studentsArray2 = [
        {
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85,
        },
        {
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            name: "Nick",
            age: 20,
            isMarried: false,
            scores: 120,
        },
        {
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100,
        },
        {
            name: "Helen",
            age: 20,
            isMarried: false,
            scores: 110,
        },
        {
            name: "Ann",
            age: 20,
            isMarried: false,
            scores: 105,
        },
    ];
})

test('Сформируйте массив студентов, у которых 100 и более баллов', () => {

    const moreThen100 = studentsArray2.filter(el => el.scores >= 100)

    expect(moreThen100.length).toBe(4)
})

test('Сформируйте массив холостых студентов', () => {

    const notMarried = studentsArray2.filter(el => !el.isMarried)

    expect(notMarried.length).toBe(4)
    expect(notMarried[0].isMarried).toBe(false)
    expect(notMarried[1].isMarried).toBe(false)
    expect(notMarried[2].isMarried).toBe(false)
    expect(notMarried[3].isMarried).toBe(false)
})


