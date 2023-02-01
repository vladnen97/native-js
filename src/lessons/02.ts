export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}

export type GovernmentBuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}

export type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type StreetType = {
    title: string
}

