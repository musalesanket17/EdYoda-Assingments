//Q10. Write a program to find the smallest number using a stack.

class stack {
    constructor() {
      this.store = [];
    }
    push = (value) => this.store.push(value);
    min = () => Math.min(...this.store);
  }
  const minInArray = (arr) => {
    let a = new stack();
    for (let i of arr) {
      a.push(i);
    }
    console.log(a.min());
  };
  
  minInArray([5, 3, 8, 2, 9, 6, 4]);