// normal funtion ----------

function add(a: number, b:number):number {
    return a + b
}

const substraction = (a:number, b: number): number => {
    const total = a - b 
    return total;
}
const added = (a: number, b: number): number => {return a + b}


// funtion declare in object -------------

const user = {
    name: "dipol",
    age: 24,
    greet(){
        console.log(`how are you ${this.name}. welcome to new area and your age is ${this.age} thats very good.`);
    }
}
user.greet()