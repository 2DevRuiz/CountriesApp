import IUser from "~/interface/IUser"

class UserService{
    private countries:Ref<Array<IUser> >
    private baseURL = "https://dummyjson.com/users"
    constructor() {
        this.countries = ref<Array<IUser> >([])
    }

    getUsers():Ref<Array<IUser>>{
        return this.countries
    }

    async fetchAll(comandurl:string = ''): Promise<void>{
        try {
            // const url = 'https://jsonplaceholder.typicode.com/post'
            const url = this.baseURL+comandurl
            const response = await fetch(url)
            const json = await response.json()
            this.countries.value = await json.users
        } catch (error) {
            console.log(error)
        }
    }
}


export default UserService