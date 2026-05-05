// ? tenary operator : decision Making
// ?? : nulish operator
// ?. optional operator



const mariiedforEligible = (age: number) => {
    if (age >= 21){
    console.log('u r eligible');
}else{
    console.log('u r not eligible');
}
}

mariiedforEligible(2)


///ternary operator---------


const useTernary =( ages : number) => {
    const result = ages >= 21 ? 'u r eligible' : 'u are not eligible' 
    console.log(result); 
}

useTernary(20)
///nulish-----

// ----- optioal chaning