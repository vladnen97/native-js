import {makeHairStyle, moveUser, UpgradeUserLaptop, UserWithLaptopType} from './10';

let user: UserWithLaptopType;

beforeEach(() => {
    user = {
        name: 'Name',
        hair: 32,
        address: {
            title: 'SPb'
        },
        laptop: {
            title: 'Asus'
        }
    }
})

test('change hairstyle', () => {

    const awesomeUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test('change adress', () => {

    const movedUser: UserWithLaptopType = moveUser(user, 'Moscow');


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address.title).toBe('SPb')
    expect(movedUser.address.title).toBe('Moscow')
})

test('change laptop', () => {

    const userCopy: UserWithLaptopType = UpgradeUserLaptop(user, 'Macbook');


    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop.title).toBe('Asus')
    expect(userCopy.laptop.title).toBe('Macbook')
})


