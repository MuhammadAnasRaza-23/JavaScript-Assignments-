// Chapter # 14-16

// Ans 1
var studentNames = [];

// Ans 2
var studentNames = new Array();

// Ans 3
var fruitNames = ["Apple", "Mango", "Banana"];

// Ans 4
var scores = [85, 92, 78, 65];

// Ans 5
var booleanValues = [true, false, true, true];

// Ans 6
var mixedData = ["John", 25, true, null];

// Ans 7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
document.write(
    `
    <li> 1) ${qualifications[0]}</li>
    <li> 2) ${qualifications[1]}</li>
    <li> 3) ${qualifications[2]}</li>
    <li> 4) ${qualifications[3]}</li>
    <li> 5) ${qualifications[4]}</li>
    <li> 6) ${qualifications[5]}</li>
    <li> 7) ${qualifications[6]}</li>
    <li> 8) ${qualifications[7]}</li>
    `
);

// Ans 8
var students = ["Tom", "John", "Jorden"]
var marks = [360, 400, 480]

var totalMarks = 500

var tom = (360 / 500) * 100
var John = (400 / 500) * 100
var Jorden = (480 / 500) * 100

document.writeln(
    `Score of Tom is ${tom} % <br>
Score of John is ${John} % <br>
Score of Jorden is ${Jorden} % <br>
`
)

// Ans 9

// Part A
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColour = prompt("what colour do you want to add in the beginning of the array?")

var userUpdatedColour =  colourarr.unshift(userColour)
console.log( colourarr)

// Part B
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColour = prompt("what colour do you want to add in the end of the array?")

var userUpdatedColour =  colourarr.push(userColour)
console.log( colourarr)

// Part C
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColour1 = prompt("what  first colour do you want to add in the end of the array?")
var userColour2 = prompt("what  second colour do you want to add in the end of the array?")

var userUpdatedColour =  colourarr.unshift(userColour1 + userColour2)
console.log( colourarr)

// Part D
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColour = prompt("what colour do you want to delete in the beginning of the array?")

var userUpdatedColour =  colourarr.shift(userColour)
console.log( colourarr)

// Part E
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColour = prompt("what colour do you want to delete in the beginning of the array?")

var userUpdatedColour =  colourarr.pop(userColour)
console.log( colourarr)

// Part F
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColourindex = prompt("what colour do you want to add  with the index of the array?")
var userColourpara = prompt("what colour do you want to add  in the array?")


var userUpdatedColour =  colourarr.splice(userColourindex,userColourpara)
console.log( colourarr)

// Part G
var colourarr = [" Blue", "Green", "Red", "Black", "Orange", "Purple"]
var userColourindex = prompt("what colour do you want to add  with the index of the array?")
var userColourpara = prompt("what colour do you want to delete  in the array?")

var userUpdatedColour =  colourarr.splice(userColourindex,userColourpara)
console.log( colourarr)

// Ans 10
var studentScores = [320, 230, 480, 120];
studentScores.sort(function(a, b){return a - b});
document.writeln(
`
Scores of Students: 320, 230, 480, 120 <br>
Ordered Scores of Students: ${studentScores}
`
);

// Ans 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4); 
document.writeIn("Cities list: " + cities + "<br>");
document.writeIn("Selected cities list: " + selectedCities);

// Ans 12
var arr = ["This ", " is ", " my ", " cat"];
var singleStringarr = arr.join("");
document.writeIn("Array: " + arr + "<br>");
document.writeIn("String: " + singleStringarr);

// Ans 13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.writeIn("Devices: " + devices + "<br>");
document.writeIn("Out: " + devices.shift() + "<br>");
document.writeIn("Out: " + devices.shift() + "<br>");
document.writeIn("Out: " + devices.shift() + "<br>");
document.writeIn("Out: " + devices.shift() + "<br>");
document.writeIn("Out: " + devices.shift());

// Ans 14
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.writeIn("Devices: " + devices + "<br>");
document.writeIn("Out: " + devices.pop() + "<br>");
document.writeIn("Out: " + devices.pop() + "<br>");
document.writeIn("Out: " + devices.pop() + "<br>");
document.writeIn("Out: " + devices.pop());

// Ans 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeIn("<select>");

document.writeIn("<option>" + manufacturers[0] + "</option>"); 
document.writeIn("<option>" + manufacturers[1] + "</option>"); 
document.writeIn("<option>" + manufacturers[2] + "</option>"); 
document.writeIn("<option>" + manufacturers[3] + "</option>"); 
document.writeIn("<option>" + manufacturers[4] + "</option>"); 
document.writeIn("<option>" + manufacturers[5] + "</option>"); 
document.writeIn("</select>");



