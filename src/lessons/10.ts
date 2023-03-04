type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}
type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(user: UserWithLaptopType, power: number) {
    const copy: UserWithLaptopType= {
        ...user,
        hair: user.hair / power
    }
    return copy
}

export function moveUser(user: UserWithLaptopType, title: string) {
    const userCopy: UserWithLaptopType = {
        ...user,
        address: {
            ...user.address,
            title: title
        }
    }

    return userCopy
}

export function UpgradeUserLaptop(user: UserWithLaptopType, title: string) {
    const userCopy: UserWithLaptopType = {
        ...user,
        laptop: {
            ...user.laptop,
            title: title
        }
    }

    return userCopy
}

