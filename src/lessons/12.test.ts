import {repeatString} from './12';


test('должна вернуть сроку, состоящую из указанного количества повторов подстроки с использованием разделителя. ', () => {

    const string1: string = repeatString("yo", 3, " ")
    const string2: string = repeatString("yo", 3, ",")

    expect(string1).toBe('yo yo yo')
    expect(string2).toBe('yo,yo,yo')

})