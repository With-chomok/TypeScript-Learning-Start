// array destructure ------
// object destructure ------------- --

// const nmberArray = [78, 45, 65, 32 , 465, 87]


// nmberArray


const user = {
    name: "dipoldas",
    age: 25,
    friends: {
        names: "chomok",
        age: 22,
        bestfriends: {
            namebesst: "krshna",
            ages:5000
        }

    }
}


const {name, friends : {names, age , bestfriends: {namebesst, ages}}} = user
console.log(name, names, age,namebesst, ages);



// object destrucuring -------------

const allFinnan = ["rahim", "sahid", "kald"]
const [ ,,boltu] = allFinnan;
console.log(boltu);



const destructureArrayList = [ "one", "two", "three", "four"];

const [a,,b,c] = destructureArrayList;
console.log(a,b,c);