//Q3. Write a program to check if two strings are a rotation of each other?

const inp1 = "hello",
  inp2 = "olleh";
if (inp1.length == inp2.length) {
  let i;
  for (i = 0; i < inp1.length; i++) {
    if (inp1[i] != inp2[inp2.length - 1 - i]) {
      console.log("Given Two Strings are a Not Rotation of Each Other");
    }
  }
  if (i == inp2.length) {
    console.log("Given Two Strings are The Rotation of Each Other");
  }
} else {
  console.log("Given Two Strings are a Not Rotation of Each Other");
}