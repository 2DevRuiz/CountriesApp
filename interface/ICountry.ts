interface ICountry {
    name: {
        official:string
    },
    capital: string[],
    cca3:string;
    flags:{
        alt : string
        png: string
        svg: string
    }
    population:number
    region:string
    // id?:number,
    // title?:string,
    // body?:string
}

export default ICountry