let myName: string = "Mohammad Hasan";

let age: number;
age = 12;

let isHungry: boolean = false;

type StringOrNumber = number | string;

let studentId: StringOrNumber = 98153;
studentId = "web7-98153";


// object 

interface Person {
    name: string;
    age : number;
    hobby?: string;
}

type PersonType = {name: string, age: number, hobby: string}
let person: PersonType = {
    name: "Mohammad Hasan",
    age : 35,
    hobby: "play cricket"
}

let person2: PersonType = {
    name: "Jawwad Bin Hasan",
    age : 55,
    hobby: "reading"
}
//function
const greeting = (name: string) : void => {
    console.log('Hello ${name}')
}

const introduce = ({name, age} : Person) : void =>{
    console.log(`Hello, my name is ${name}, And I'm ${age}!`)
}

introduce({
    name: "Mohammad Hasan",
    age: 12,
    hobby: "Sleeping"
})

const getArray= <T>(arr: T[]): T[] =>{
    return arr
}

getArray<string>(['1fas']);
getArray<number>([1, 2, 45, 46]);

//enum
enum Week  {
    Sat = 'SAT', 
    Sun = 'SUN',
    Mon = "MON",
    Tue = "TUE", 
    Wed = "WED",
    Thur = "THUR",
    Fri= "FRI"
}