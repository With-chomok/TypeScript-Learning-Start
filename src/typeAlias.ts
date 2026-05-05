type User = {
    name: {
        firstName: string,
        lastName: string
    },
    gender: "male"| "female",
    contactNo: number,
    adreess: {
        city : string,
        division: string
    } 
}



const user1 : User = {
    name: {
        firstName: "Dipol",
        lastName: "Das"
    }
    ,
    gender: "male" ,
    contactNo: 1365468,
    adreess: {
        city: "dhaka",
        division: "Dhaka"
    }
}

const user2 : User = {
    name: {
        firstName: "x",
        lastName: "Das"
    }
    ,
    gender: "female" ,
    contactNo: 13654654645,
    adreess: {
        city: "dhaka",
        division: "Dhaka"
    }
}

type AddFunction = (firstNum : number , secondNum: number) => number

const add : AddFunction = (firstNum, secondNum) => firstNum + secondNum;
console.log(add(10,20));

type IsAdmin = true;
const isAdmin : IsAdmin = true;
type Name= string;
const myName : Name = "Dipol"

