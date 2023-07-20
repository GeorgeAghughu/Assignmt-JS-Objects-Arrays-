/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/
let grades1= 56;
let grades2= 87;
let grades3 = 99;
let grades4 = 40; 

let grades = [56, 87, 99, 40];
console.log(grades);

//2. Add another element at the end of the array with value: 68
grades.push(68);

// 3. Remove the 1st element of the array
 grades1= 56;
grades.shift();

//4. Change 40 to 60.
let forty = grades4.indexof(40)
console.log (60);

let scores = 100
for (let grades of grades){
    console.log ("4.", grades);
}

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

let car = {
    name: "Mercedes-Maybach",
    model: "4matic",
    yearOfMake: 2023,
    numberOfWheels: 4, 
    isEnvironmentalFriendly: "True",
    fuelType : "Electric", 

    }
     
    for(let key in car){
        console.log(car[key]);
    }
