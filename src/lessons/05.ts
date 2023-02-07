import {GovernmentBuildingType, HousesType} from './02';

export function getStreetsTitlesOfGovernmentBuildings(govBuilds: Array<GovernmentBuildingType>) {
    return govBuilds.map(b => b.address.street.title);
}

export function getStreetsTitlesOfHouses(houses:Array<HousesType>) {
    return houses.map(h => h.address.street.title);
}