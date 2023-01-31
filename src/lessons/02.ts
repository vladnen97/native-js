export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovBuildType[]
    citizensNumber: number
}

type GovBuildType = {
    type: string
    budget: number
    staffCount: number
    address: GovAddressType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: Address
}
type Address = {
    number: number
    street: StreetType
}
type StreetType = {
    title: string
}

type GovAddressType = {
    street: GovStreetType
}
type GovStreetType = {
    title: string
}