
export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function split(str: string) {
    let result = str.toLowerCase().match(/\w+/gm);
    return result ? result : [];
}

