export class Animal {
    constructor(private name:string,private age:number){

    }
    get Name():string{
        return this.name;
    }
    // getName():string{
    //     return this.name;
    // }
    getAge():number{
        return this.age;
    }
}
