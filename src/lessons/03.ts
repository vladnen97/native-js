import {CityType, GovernmentBuildingType, HousesType} from "./02";

export const addMoneyToBudget = (building: GovernmentBuildingType, addMoney: number) => {
    building.budget += addMoney;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (buiding: GovernmentBuildingType, fire: number) => {
    buiding.staffCount -= fire;
}

export const toHireStaff = (buildig: GovernmentBuildingType, hire: number) => {
    buildig.staffCount += hire;
}
export const demolishHousesOnTheStreet = (city: CityType, streetTORemove: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== streetTORemove);
}
