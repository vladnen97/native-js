import {addFriends} from './11';

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

test('массив студентов, у которых 100 и более баллов', () => {

    const moreThen100 = studentsArray2.filter(el => el.scores >= 100)

    expect(moreThen100.length).toBe(4)
})

test('массив холостых студентов', () => {

    const notMarried = studentsArray2.filter(el => !el.isMarried)

    expect(notMarried.length).toBe(4)
    expect(notMarried[0].isMarried).toBe(false)
    expect(notMarried[1].isMarried).toBe(false)
    expect(notMarried[2].isMarried).toBe(false)
    expect(notMarried[3].isMarried).toBe(false)
})

test('массив имён студентов', () => {

    const studentsNames = studentsArray2.map(el => el.name)

    expect(studentsNames.length).toBe(6)
    expect(studentsNames).toEqual(['Bob', 'Alex', 'Nick', 'John', 'Helen', 'Ann'])
})

test('строка из имён студентов, разделённых \' \'/\', \'', () => {

    const stringNamesBySpace = studentsArray2.map(el => el.name).join(' ')
    const stringNamesByZapyataya = studentsArray2.map(el => el.name).join(', ')

    expect(stringNamesBySpace).toBe('Bob Alex Nick John Helen Ann')
    expect(stringNamesByZapyataya).toBe('Bob, Alex, Nick, John, Helen, Ann')
})

test('студенты со свойством "isStudent" значением true', () => {

    const trueStudents = studentsArray2.map(el => ({...el, isStudent: true}))

    expect(trueStudents.length).toBe(6)
    expect(trueStudents[0].isStudent).toBe(true)
    expect(trueStudents[1].isStudent).toBe(true)
    expect(trueStudents[2].isStudent).toBe(true)
    expect(trueStudents[3].isStudent).toBe(true)
    expect(trueStudents[4].isStudent).toBe(true)
    expect(trueStudents[5].isStudent).toBe(true)
})

test('Nick женился.', () => {

    const studentsWithMarriedNick = studentsArray2.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el)

    expect(studentsWithMarriedNick.length).toBe(6)
    expect(studentsArray2[2].isMarried).toBe(false)
    expect(studentsWithMarriedNick[2].isMarried).toBe(true)
})

test('Студентка по имени Ann', () => {

    const studentAnn = studentsArray2.find(el => el.name === 'Ann')

    expect(studentAnn).toBe(studentsArray2[5])
    expect(studentAnn).toEqual(studentsArray2[5])
    expect(studentAnn?.name).toBe('Ann')
})

test('Студент с самым высоким баллом', () => {

    const highScoreStudent = studentsArray2.reduce((acc, el) => acc.scores > el.scores ? acc : el)

    expect(highScoreStudent).toEqual(studentsArray2[2])
    expect(highScoreStudent.scores).toBe(120)
})

test('2 студента с самым высоким баллом', () => {

    const twoHighScoreStudents = [...studentsArray2].sort((a, b) => b.scores - a.scores).slice(0,2)

    expect(twoHighScoreStudents.length).toBe(2)
    expect(twoHighScoreStudents[0]).toEqual(studentsArray2[2])
    expect(twoHighScoreStudents[1]).toEqual(studentsArray2[4])
    expect(twoHighScoreStudents[0].scores).toBe(120)
    expect(twoHighScoreStudents[1].scores).toBe(110)
})

test('Cуммa баллов всех студентов', () => {

    const sumStudentsScore =  studentsArray2.reduce((acc, el) => acc + el.scores, 0)

    expect(sumStudentsScore).toBe(610)
})

test('функция должна вернуть новый массив с объектами у которых появилось свойство friends из всех имен в массиве кроме собственного ', () => {

    const studentsWithFriends = addFriends(studentsArray2)

    expect(studentsWithFriends.length).toBe(6)
    expect(studentsWithFriends).not.toEqual(studentsArray2)

    expect(studentsWithFriends[0]).not.toEqual(studentsArray2[0])
    expect(studentsWithFriends[1]).not.toEqual(studentsArray2[1])
    expect(studentsWithFriends[2]).not.toEqual(studentsArray2[2])
    expect(studentsWithFriends[3]).not.toEqual(studentsArray2[3])
    expect(studentsWithFriends[4]).not.toEqual(studentsArray2[4])
    expect(studentsWithFriends[5]).not.toEqual(studentsArray2[5])

    expect(studentsWithFriends[0].friends).toEqual(['Alex', 'Nick', 'John', 'Helen', 'Ann'])
    expect(studentsWithFriends[1].friends).toEqual(['Bob', 'Nick', 'John', 'Helen', 'Ann'])
    expect(studentsWithFriends[2].friends).toEqual(['Bob', 'Alex', 'John', 'Helen', 'Ann'])
    expect(studentsWithFriends[3].friends).toEqual(['Bob', 'Alex', 'Nick', 'Helen', 'Ann'])
    expect(studentsWithFriends[4].friends).toEqual(['Bob', 'Alex', 'Nick', 'John', 'Ann'])
    expect(studentsWithFriends[5].friends).toEqual(['Bob', 'Alex', 'Nick', 'John', 'Helen'])
})




