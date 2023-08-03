import ICountry from "~/interface/ICountry"

class CountriesService{
    private countries:Ref<Array<ICountry> >
    private baseURL = "https://restcountries.com/v3.1"
    constructor() {
        this.countries = ref<Array<ICountry> >([])
    }

    getCountries():Ref<Array<ICountry>>{
        return this.countries
    }

    async fetchAll(comandurl:string): Promise<void>{
        try {
            // const url = 'https://jsonplaceholder.typicode.com/post'
            const url = this.baseURL+comandurl
            const response = await fetch(url)
            const json = await response.json()
            this.countries.value = await json
        } catch (error) {
            console.log(error)
        }
    }
}


export default CountriesService