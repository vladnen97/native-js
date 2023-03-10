// 14.Напишите функцию addFriends, которая принимает параметром массив students и возвращает новый массив, при этом добавляет в каждому студенту свойство .friends, значением которого является массив имён всех остальных студентов из массива, за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

export function addFriends(students: any) {
    return students.map((st: any) => ({
        ...st,
        friends: students.reduce((acc: any, el: any) => el.name !== st.name ? [...acc, el.name] : acc, [])
    }));

}
