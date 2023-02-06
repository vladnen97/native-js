import {CityType, GovernmentBuildingType} from './02';

export type AgesType = Array<number>
export type CoursesType = Array<{title: string, price: number}>;
// вoзраст

export function agesPredicate(age: number) {
    return age > 90;
}
// курсы
export function cheapPredicate(course: {title: string, price: number}) {
    return course.price < 260;
}

// город
export function demolishHousesOnTheStreet(city: CityType, demolish: string) {
    city.houses = city.houses.filter(street => street.address.street.title !== demolish);
}

export function getBuildingsWithStaffCountGreaterThen(govBuilds: GovernmentBuildingType[], staffCount: number) {
    return govBuilds.filter( build => build.staffCount > staffCount);
}




