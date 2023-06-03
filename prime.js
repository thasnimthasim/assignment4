var readlineSync = require("readline-sync");
let n=readlineSync.question("enter a number:");
n=parseInt(n);
if(n === 1)
{
  result = `${n} is not a prime no`;
console.log( result);
}
else 
 if(n > 1)
{
  for (let i = 2; i < n; i++){
    
  if(n % i === 0){
    result = `${n} not a prime no`;
    break;
  }
  else{
  
result = `${n} is a prime`;
  
}
  }
  console.log(result);
}