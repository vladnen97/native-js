import {mult, split, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //data


    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);
    const result3 = sum(c, a);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(4);
})

test("multiply should be correct", () => {
    //data
    a = 3;
    b = 2;
    c = 4;

    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);
    const result3 = mult(c, a);

    //expect result
    expect(result1).toBe(6);
    expect(result2).toBe(8);
    expect(result3).toBe(12);
})

test("split should return only words", () => {
    //data
    let a = "hello my frIEnds!"
    let b = "work..   <haRd!"
    let c = "TEST //one"

    //action
    let result1 = split(a);
    let result2 = split(b);
    let result3 = split(c);

    //expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(2);
    expect(result2[0]).toBe("work");
    expect(result2[1]).toBe("hard");

    expect(result3.length).toBe(2);
    expect(result3[0]).toBe("test");
    expect(result3[1]).toBe("one");

})