import { utilService } from "./util.service"
import { storageService } from "./async-storage.service"

export const UserService = {
    getUser,
    signUp,
    login,
    update,
    getById,
    getLoggedinUser
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

getUsers()

async function getUser() {
    const user = getLoggedinUser()
    return saveLocalUser(user)
}

async function signUp(name) {
    console.log('name',name)
    const user = {
        _id: utilService.makeId(),
        name,
        coins: 100,
        moves: []
    }
    console.log('user',user)
    const addedUser = await storageService.post('user', user)
    return saveLocalUser(addedUser)
}


function getUsers() {
    let users = utilService.loadFromStorage('user')
    if(!users || !users.length){
        users = [
            {
                _id: 'u101',
                name: "Ochoa Hyde",
                coins: 100,
                moves: []
            }
        ]
        utilService.saveToStorage('user',users)
    }
    return users
    // return httpService.get(`user`)
}


 async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user
}
function remove(userId) {
    return storageService.remove('user', userId)
}

 async function update(userToUpdate) {
     const user = await storageService.put('user', userToUpdate)
    // let user = getById(_id)
    // await storageService.put('user', user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}


 async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.name === userCred)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
    // return await httpService.post('auth/logout')
}


function saveLocalUser(user) {
    user = { _id: user._id, name: user.name, coins: user.coins, moves: user.moves }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
