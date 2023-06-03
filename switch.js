  var readlineSync = require("readline-sync");
  let n=readlineSync.question("select the operation:");
  n = parseInt(n);

  let x=readlineSync.question("enter the first no:");
  x=parseInt(x);

  let y=readlineSync.question("enter the second no:");
  y=parseInt(y);

  let result;

  switch(n)
  {
    case 1: let sum = x + y;
            result = `sum of ${x} and ${y} is ${sum}`;
            break;

    case 2: let sub  = x - y;
            result = `Subtraction of ${x} and ${y} is ${sub}`;
            break;
            
    case 3: let mul =x * y;
            result = `multiplication  of ${x} and ${y} is ${mul}`;
            break;
            
    case 4:    let div =x / y;
              result = `division  of ${x} and ${y} is ${div}`;
              break;
        
  }
  console.log(result);