import {
    agesPredicate,
    AgesType,
    cheapPredicate,
    CoursesType,
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen
} from './04';
import {CityType} from './02';

type TasksType = Array<{ id: number, title: string, isDone: boolean }>


let ages: AgesType;
let courses: CoursesType;
let tasks: TasksType;
let city: CityType

beforeEach(() => {
    ages = [18, 21, 1, 22, 8, 100, 90, 14];
    courses = [
        {title: 'CSS', price: 160},
        {title: 'JS', price: 250},
        {title: 'React', price: 400}
    ];
    tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'salt', isDone: false},
        {id: 4, title: 'sugar', isDone: true}
    ];
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        },{
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: "South Str"
                }
            }
        }],
        citizensNumber: 1000000
    }
})

test('should retrun grandpa older then 90y.', () => {

    const oldAges: AgesType = ages.filter(agesPredicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('should take courses cheaper then 260', () => {

    const cheapCourses: CoursesType = courses.filter(cheapPredicate);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].price).toBe(160);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].price).toBe(250);
    expect(cheapCourses[1].title).toBe('JS');
});

test('get only completed tasks', () => {
    const completedTasks: TasksType = tasks.filter(task => task.isDone);


    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
    expect(completedTasks[0].title).toBe('milk');
    expect(completedTasks[1].title).toBe('sugar');
    expect(completedTasks[0].isDone).toBe(true);
    expect(completedTasks[1].isDone).toBe(true);
});

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {

    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})

