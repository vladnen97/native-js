export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}

type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
type AddressType = {
    number?: number
    street: StreetType
}
type StreetType = {
    title: string
}

