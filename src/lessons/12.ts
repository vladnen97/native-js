//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()


export function repeatString(word: string, times: number, devider: string): string {
    let stroka: Array<string> = [];
    for (let i = 0; i < times; i++) {
        stroka.push(word)
    }
    return stroka.join(devider)
}

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

export function checkStart(str: string, subStr: string): boolean {
    return new RegExp(`^${subStr}`).test(str.toLowerCase())
}


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

export function truncateString(str: string, maxLength: number): string {
    // return str.match(new RegExp(`\.{0,${maxLength}}`)) + '...'

    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;

}

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

export function getMinLengthWord(str: string): string | null {

    return str !== '' ? str.split(' ').reduce((acc, cur) => acc.length < cur.length ? acc : cur) : null;
}


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

export function setUpperCase(str: string): string {
    return str.toLowerCase().replace(/(^.)|(\s+.)/g, letter => letter.toUpperCase());
    // return str.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase());
}



// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

export function isIncludes(str: string, subStr: string): boolean {
    const array: Array<string> = subStr.toLowerCase().split('')
    // for (let i = 0; i < array.length; i++) {
    //     if (!str.toLowerCase().includes(array[i])) {
    //         return false
    //     }
    // }

    for (let i = 0; i < array.length; i++) {
        const index = str.toLowerCase().indexOf(array[i])
        if (index === -1) {
            return false;
        }
        str = str.slice(0,i) + str.slice(i+1)
    }

    return true;

}

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true




