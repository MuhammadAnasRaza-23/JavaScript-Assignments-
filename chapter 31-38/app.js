// // Chapter 31-38

// 31-35

// // Question 1
// let now = new Date();
// document.write(now); 

// // Question 2
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = months[new Date().getMonth()];
// alert("Current month: " + currentMonth); 

// // Question 3
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = days[new Date().getDay()];
// alert("Today is " + day); 

// // Question 4
// let dayIndex = new Date().getDay();
// if (dayIndex === 0 || dayIndex === 6) {
//     alert("It's Fun day"); 
// }

// // Question 5
// let date = new Date().getDate();
// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// // Question 6
// let date = new Date(); 
// let msSince1970 = date.getTime();
// let minSince1970 = msSince1970 / (1000 * 60);

// console.log("Current Date: " + date); 
// console.log("Elapsed milliseconds: " + msSince1970); 
// console.log("Elapsed minutes: " + minSince1970); 

// // Question 7
// let hour = new Date().getHours();
// if (hour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM"); 
// }

// // Question 8
// let laterDate = new Date("December 31, 2020");
// alert("Later date: " + laterDate); 

// // Question 9
// let ramadanStart = new Date("June 18, 2015"); 
// let today = new Date();
// let diff = today - ramadanStart;
// let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert(daysPassed + " days have passed since 1st Ramadan, 2015");

// // Question 10
// let refDate = new Date();
// let start2015 = new Date("January 1, 2015");
// let seconds = (refDate - start2015) / 1000;
// document.write("On reference date " + refDate + ", " + seconds + " seconds had passed since 2015"); 

// // Question 11
// let d = new Date();
// document.write("Current date: " + d + "<br>"); 
// d.setHours(d.getHours() - 1);
// document.write("1 hour ago, it was " + d); 

// // Question 12
// let d = new Date();
// alert("Current date: " + d); 
// d.setFullYear(d.getFullYear() - 100);
// alert("100 years back, it was " + d); 

// // Question 13
// let age = prompt("Enter your age");
// let birthYear = new Date().getFullYear() - age;
// document.write("Your age is " + age + "<br>Your birth year is " + birthYear); 

// // Question 14
// let customerName = "ABC Customer"; 
// let currentMonth = "February"; 
// let units = 410; 
// let chargesPerUnit = 16; 
// let lateSurcharge = 350; 

// let netAmount = units * chargesPerUnit; 
// let grossAmount = netAmount + lateSurcharge; 

// document.write("<h1>K-Electric Bill</h1>"); 
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + currentMonth + "<br>");
// document.write("Number of units: " + units + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>"); 
// document.write("Late payment surcharge: " + lateSurcharge.toFixed(2) + "<br>"); 
// document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2)); 


// // 35-38

// // Question 1
// function showDateTime() {
//     let now = new Date();
//     document.write(now); 
// }
// showDateTime();

// // Question 2
// function greetUser(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName);
// }
// greetUser("John", "Doe");

// // Question 3
// function addNumbers() {
//     let n1 = Number(prompt("Enter first number:"));
//     let n2 = Number(prompt("Enter second number:"));
//     return n1 + n2;
// }
// alert(addNumbers());

// // Question 4
// function calculator(num1, num2, operator) {
//     let result;
//     if (operator === "+") result = num1 + num2;
//     else if (operator === "-") result = num1 - num2;
//     else if (operator === "*") result = num1 * num2;
//     else if (operator === "/") result = num1 / num2;
    
//     document.write("Result: " + result); 
// }
// calculator(10, 5, "+");

// // Question 5
// function square(num) {
//     return num * num;
// }
// console.log(square(5));

// // Question 6
// function factorial(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res = res * i;
//     }
//     return res;
// }
// alert(factorial(5));

// // Question 7
// function displayCounting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + " ");
//     }
// }
// displayCounting(1, 10);

// // Question 8
// function calculateHypotenuse(base, perp) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     let hypo = Math.sqrt(calculateSquare(base) + calculateSquare(perp));
//     return hypo;
// }
// console.log(calculateHypotenuse(3, 4));

// // Question 9
// function calculateArea(width, height) {
//     return width * height;
// }
// console.log(calculateArea(5, 10));
// let w = 5, h = 10;
// console.log(calculateArea(w, h));

// // Question 10
// function checkPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     if (str === reversed) {
//         alert(str + " is a palindrome.");
//     } else {
//         alert(str + " is not a palindrome.");
//     }
// }
// checkPalindrome("madam");

// // Question 11
// function capitalize(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     return words.join(" ");
// }
// document.write(capitalize("the quick brown fox")); 

// // Question 12
// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longest = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// document.write(findLongestWord("Web Development Tutorial")); 

// // Question 13
// function countLetter(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countLetter("JSResourceS.com", "o"));

// // Question 14
// function calcCircumference(radius) {
//     let circum = 2 * Math.PI * radius;
//     document.write("The circumference is " + circum.toFixed(2)); 
// }
// function calcArea(radius) {
//     let area = Math.PI * (radius * radius);
//     document.write("The area is " + area.toFixed(2)); 
// }
// calcCircumference(5);
// calcArea(5);
