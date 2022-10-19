//Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr) {
    let stack = [];
  
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
  
      if (x == "(" || x == "[" || x == "{") {
        stack.push(x);
        continue;
      }
  
      if (stack.length == 0) return false;
  
      let check;
      switch (x) {
        case ")":
          check = stack.pop();
          if (check == "{" || check == "[") return false;
          break;
  
        case "}":
          check = stack.pop();
          if (check == "(" || check == "[") return false;
          break;
  
        case "]":
          check = stack.pop();
          if (check == "(" || check == "{") return false;
          break;
      }
    }
  
    return stack.length == 0;
  }
  
  let expr = "([{}])";
  
  if (areBracketsBalanced(expr)) console.log("Balanced ");
  else console.log("Not Balanced ");