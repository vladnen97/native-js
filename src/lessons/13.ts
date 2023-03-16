// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    const max: number = Math.max(a, b, c)
    return max > a + b || max > a + c || max > b + c
        ? '00'
        : a === b && b === c
            ? '10'
            : a === b || b === c
                ? '01'
                : '11'


}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return `${number}`.split('').reduce((acc, el) => acc + +el, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    // let even = arr.reduce((acc, el, i) => i%2 === 0 ? acc + el : acc)
    // let odd = arr.reduce((acc, el, i) => i%2 === 1 ? acc + el : acc)
    let even: number = 0, odd: number = 0;

    arr.forEach((el, i) => i % 2 === 0 ? even += el : odd += el)

    return even > odd

}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(el => el > 0 && Number.isInteger(el)).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr.slice(0, N).reduce((acc, el) => acc + el, 0)
    // let sum: number = 0;
    // for (let i = 0; i < (N > arr.length ? arr.length : N); i++) {
    //     sum += arr[i];
    // }
    // return sum;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result: Array<number> = [], i: number = 0;
    while (i < banknotes.length) {
        if ((amountOfMoney - banknotes[i]) < 0) {
            i++
        } else {
            amountOfMoney -= banknotes[i]
            result.push(banknotes[i])
        }
    }
    return result;
}