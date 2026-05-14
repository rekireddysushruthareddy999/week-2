// ASSIGNMENT:1

/* Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
 */
const temparetures = [32,35,38,40,38,30,42]
let r1 = temparetures.filter(data => data >35)
console.log("tempertures above 35 :",r1)
let r2 = temparetures.map(d=>d*(9/5)+32)
console.log("celsius -> fahrenheit : ",r2)
let r3 = temparetures.reduce((a,b)=> {
    let s=a+b;
   return s/temparetures.length;
}
)
console.log(r3)
let r4 = temparetures.find((c) =>c > 40)
console.log(r4)
let r5 = temparetures.findIndex((d) => d===28)
console.log(r5)