// // ARRAYS AND LOOP,  17-20

// // Question 1
// Array[[], [], []];

// // Question 2
// Array [0,1,2,3];
// Array [1,0,1,2];
// Array [2,1,0,3];

// // Question 3
// alert( "now the counting from 1-10 will start");
// for( i = 0; i<=10; i++){
//     console.log(i)
// };

// // Question 4
// var table = prompt("Enter your table which you want to show");
// var tablelength = +prompt("Enter your table lenght which you want to show");

// for ( i = 1; i <= tablelength; i++){
//     document.writeln(
//         `
//         ${table} X ${i} = ${table * i} <br>
//         `
//     )
// };

// // Question 5
// var fruit = ["Apple","Banana","Mango","Orange","Strawberry" ];
// for( i = 0; i<5; i++){
//     document.writeln( "Element at index " + i +" is " + fruit[i] + "<br>" )
// };

// Question 6

// Part A
// document.writeln( "Counting : " + "<br>" + "<br>" )  
// for( i=1; i<=15; i++ ){
//     document.writeln(i + ",")
// };


// Part B
// document.writeln( "Counting : " + "<br>" + "<br>" )  
// for( i=10; i>=1; i-- ){
//      document.writeln(i + ",")
//  };

//  Part C 
// document.writeln( "Counting : " + "<br>" + "<br>" )  
// for( i=0; i<=20; i+=2){
//      document.writeln(i + ",")
//  };


// Part D
// document.writeln( "Counting : " + "<br>" + "<br>" )  
// for( i=1; i<=19; i+=2){
//      document.writeln(i + ",")
//  };


// Part E 
// document.writeln( "Series: " + "<br>" + "<br>" )  
// for( i=2; i<=20; i+=2){
//      document.writeln(i + "k,")
//  };

// Question 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var searchItem = userInput.toLowerCase();
// var index = A.indexOf(searchItem);

// if (index !== -1) {
//     document.write(searchItem + " is **available** at index " + index + " in our bakery");
// } else {
//     document.write("We are sorry. " + searchItem + " is **not available** in our bakery");
// }


// Question 8
// var A = [24, 53, 78, 91, 12];
// var largest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i]; 
//     }
// }
// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largest);

// Question 9
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0]; 
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + smallest);

// Question 10
// var multiples = [];

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         multiples.push(i);
//     }
// }
// document.write(multiples.join(", "));