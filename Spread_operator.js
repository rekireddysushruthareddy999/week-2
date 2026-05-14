//Write a function that receives any number of arguments and return sum
/* const sum(...numbers)=>{
    return numbers.reduce((sum,ele)=>sum+else);
}
let r = sum(10,20,30,24)
console.log(r) */
  function find(a,...b)
{
  let sum=a
  for(let i of b){
    sum=sum+i;
  }
  console.log(sum)
}
find(10,20,30,40,50)