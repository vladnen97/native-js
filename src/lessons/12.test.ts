import {checkStart, repeatString} from './12';


test('должна вернуть сроку, состоящую из указанного количества повторов подстроки с использованием разделителя. ', () => {

    const string1: string = repeatString("yo", 3, " ")
    const string2: string = repeatString("yo", 3, ",")
    const string3: string = repeatString("darova", 5, "/")

    expect(string1).toBe('yo yo yo')
    expect(string2).toBe('yo,yo,yo')
    expect(string3).toBe('darova/darova/darova/darova/darova')

})

test('возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.', () => {

    const checked1:boolean = checkStart("Incubator", "inc")
    const checked2:boolean = checkStart("JavaScript", "jav")
    const checked3:boolean = checkStart("JavaScript", "scr")
    const checked4:boolean = checkStart("Incubator", "yo")
    const checked5:boolean = checkStart("JavaScript", "jva")

    expect(checked1).toBe(true)
    expect(checked2).toBe(true)
    expect(checked3).toBe(false)
    expect(checked4).toBe(false)
    expect(checked5).toBe(false)

})