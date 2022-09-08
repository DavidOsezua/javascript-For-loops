/* QUESTION 1. 
Write a program that prints your name 100 times*/

//SOLUTION
// for (let i = 0; i < 100; i++) {
//   console.log("David");
// }

/* QUESTION 2. 
Write a program to fill the screen horizontally and vertically with your name. */

// SOLUTION
// let s = "";
// for (let i = 0; i < 100; i++) {
//   s += "David" + " ";
// }
// console.log(s);

/* QUESTION 3. 
Write a program that outputs 100 lines, numbered 1 to 100, each with your name on it. The
output should look like the output below.
1 Your name
2 Your name
3 Your name
4 Your name
...
100 Your name*/

//SOLUTION
// for (let i = 1; i <= 100; i++) {
//   console.log(i + " David");
// }

/* QUESTION 4.
 Write a program that prints out a list of the integers from 1 to 20 and their squares. The output
should look like this:
1 --- 1
2 --- 4
3 --- 9
...
20 --- 400*/

// SOLUTION
// for (let i = 1; i <= 20; i++) {
//   result = i * i;
//   console.log(i + " --- " + result);
// }

/* QUESTION 5.
 Write a program that uses a for loop to print the numbers 8, 11, 14, 17, 20, . . . , 83, 86, 89.*/

//SOLUTION
// let s = "";
// for (let i = 8; i < 90; i += 3) {
//   s += i + ",";
// }
// console.log(s);

/* QUESTION 6. 
Write a program that uses a for loop to print the numbers 100, 98, 96, . . . , 4, 2. */

//SOLUTION
// let s = "";
// for (let i = 100; i > 1; i -= 2) {
//   s += i + ",";
// }
// console.log(s);

/* QUESTION7. 
Write a program that uses exactly four for loops to print the sequence of letters below.
AAAAAAAAAABBBBBBBCDCDCDCDEFFFFFFG*/

//SOLUTION
// let s = "";
// for (let i = 0; i < 10; i++) {
//   s += "A";
// }

// for (let i = 0; i < 8; i++) {
//   s += "B";
// }

// for (let i = 0; i < 4; i++) {
//   s += "CD";
// }
// console.log((s += "E"));

// for (let i = 0; i < 6; i++) {
//   s += "F";
// }
// console.log((s += "G"));

/* QUESTION 8.
 Write a program that asks the user for their name and how many times to print it. The program should print out the user’s name the specified number of times. */

//SOLUTION
// let n = prompt("enter number of times");
// n = parseInt(n);
// for (let i = 0; i < n; i++) {
//   console.log("David");
// }

/*  QUESTION 9. 
The Fibonacci numbers are the sequence below, where the first two numbers are 1, and each
number thereafter is the sum of the two preceding numbers. Write a program that asks the
user how many Fibonacci numbers to print and then prints that many.
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 .  */

//SOLUTION
// let user = prompt("Enter number of times");
// let a = 2;
// let b = 8;
// let c = a + b;
// let s = "";
// console.log(a);
// console.log(b);
// console.log(c);
// for (let i = 0; i < user; i++) {
//   a = b;
//   b = c;
//   c = a + b;
//   console.log(c);
// }

/* QUESTION 10.
 Use a for loop to print a box like the one below. Allow the user to specify how wide and how
high the box should be. [Hint: print('*'*10) prints ten asterisks.]
*******************
*******************
*******************
******************* */

//SOLUTION
// let high = prompt("Enter number of times");
// let wide = prompt("Enter number of times");
// let s = "";
// for (let i = 0; i < high; i++) {
//   for (let j = 0; j < wide; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

/* QUESTION 11. 
Use a for loop to print a box like the one below. Allow the user to specify how wide and how
high the box should be.
*******************
*                 *
*                 *
******************* */

//SOLUTION
// let high = prompt("Enter number of times");
// let wide = prompt("Enter number of times");
// let s = "";
// for (let i = 0; i < high; i++) {
//   for (let j = 0; j < wide; j++) {
//     if (i === 0 || i === high - 1) {
//       s += "*";
//     } else if (j === 0 || j === wide - 1) {
//       s += "*";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

/* QUESTION 12. 
Use a for loop to print a triangle like the one below. Allow the user to specify how high the
triangle should be.
*
**
***
**** */

// SOLUTION
// let high = prompt("Enter number of times");
// let s = "";
// for (let i = 1; i <= high; i++) {
//   for (let j = 0; j < i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

/* QUESTION 13. 
Use a for loop to print an upside down triangle like the one below. Allow the user to specify
how high the triangle should be.
****
***
**
* 
*/

// SOLUTION
// let high = prompt("Enter number of times");
// let s = "";
// for (let i = 1; i <= high; i++) {
//   for (let j = 0; j < high - i; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

/* QUESTION 14.
 Use for loops to print a diamond like the one below. Allow the user to specify how high the
diamond should be.
    *
   ***
  *****
 *******
  *****
   ***
    * 
*/

//SOLUTION
// let rows = prompt("enter the number of rows");
// rows = parseInt(rows);
// let s = "";
// for (let i = 0; i < rows; i++) {
//   for (let space = 0; space <= rows - i - 1; space++) {
//     s += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// for (let i = rows - 2; i >= 0; i--) {
//   for (let space = 0; space <= rows - i - 1; space++) {
//     s += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

/* QUESTION 15. 
Write a program that prints a giant letter A like the one below. Allow the user to specify how
large the letter should be.
    *
   * *
  *****
 *     *
*       *
*/

// SOLUTION
// let user = prompt("enter numbers of rows");
// user = parseInt(user);
// let s = "";
// let line = prompt("enter number of line");
// line = parseInt(line);
// for (let i = 0; i < user; i++) {
//   for (let space = 0; space < user - 1 - i; space++) {
//     s += " ";
//   }
//   for (let j = 0; j <= 2 * i; j++) {
//     if (i === 0) {
//       s += "*";
//     } else if (i === line) {
//       s += "*";
//     } else if (j === 0 || j === 2 * i) {
//       s += "*";
//     } else {
//       s += " ";
//     }
//   }
//   s += "\n";
// }
// console.log(s);

// function sum(a, b) {
//   let s = 2 * a + b;
//   return s;
// }
// let a = 2;
// let b = 5;
// b = sum(b, a);
// a = sum(b, a);
// console.log(a);

// let s = "";
// for (let i = 0; i < 4; i++) {
//   for (let space = 0; space <= 4 - i - 1; space++) {
//     s += " ";
//   }
//   for (let j = 0; j < i + 1; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);
