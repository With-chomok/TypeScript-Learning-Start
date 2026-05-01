//array , object

// Array-----------------------
let bajarList: string[] = ["eggs", "vegetable", "milk", "suger"]
bajarList.push(true)
let mixedArr: (string | number)[] = ["vege", 12, "gusad"]
mixedArr.push(false )

let destination: [string, string] = ["dhaka", "mymenisngh"];
let couple: [ string, string] = ["wife", "husband"];

let nameAndroll: [string, number] = ["dipol", 45]
//  let nameAndroll:[string, number] = [12, "asdf"]



// Object---------------------referecnce type 

const user: {
    firstName: string,
    middleName: string,
    lastName: string
} = {
    firstName: "dipoldaschomok",
    middleName: "das",
    lastName : "chomok"
}

const arrObj: {
    objType:string,
    objArr: number,
    objThird?: null //optional typeee
    fixedPie: 3.1416
}
= {
    objType: "DataType",
    objArr: 1231,
    fixedPie: 3.1416
    
}
