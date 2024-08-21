// 1- Write a program that allow to user enter number then print it

var X = window.prompt(" Please enter any  Number ");

console.log("The Number is", X);

// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

var num = window.prompt(" Enter  Number ");
if (num % 3 == 0 && num % 4 == 0) {
    console.log("yes");
}
else {
    console.log("no");

}

//  3- Write a program that allows the user to insert 2 integers then print the max

var x = +window.prompt("Enter First Number ");
var y = +window.prompt("Enter second Number ");
if (x > y) {
    console.log("The maximum number is", x);
} else if (x < y) {
    console.log("The maximum number is", y);
} else {
    console.log("the two numbers are equal");
}


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
var Number = window.prompt("Enter The Number to Check if it + or - ");

if (Number < 0) {

    console.log(Number, "  is negative ")

}

else if (Number > 0) {
    console.log(Number, "  is positive ")


}
else {

    console.log(Number, " is zero ")

}



// 5- Write a program that take 3 integers from user then print the max element and the min element

var a, b, c;
a = +window.prompt("Enter the first number");
b = +window.prompt("Enter the sec number");
c = +window.prompt("Enter the third number");

// max
if (a > b && a > c) {
    console.log("the maximum number is   ", a);
}
else if (b > a && b > c) {
    console.log("the maximum number is   ", b);

}

else if (c > a && c > b) {

    console.log("the maximum number is   ", c);


}

else {
    console.log("Error please enter numbers!!");

}
// min
if (a < b && a < c) {
    console.log("the minimum number is   ", a);
}
else if (b < a && b < c) {
    console.log("the minimum number is   ", b);

}

else if (c < a && c < b) {

    console.log("the minimum number is   ", c);


}
else {
    console.log("Error please enter numbers!!");

}





// 6-Write a program that allows the user to insert integer number then check If a number is oven or odd

var numb = window.prompt("Please enter a number");

if (numb % 2 == 0) {
    console.log(numb, " the number is even");

}
else {

    console.log(numb, " the number is odd");

}



// 8. Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant


var ch = window.prompt("Please enter a character");

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'u') {
    console.log('vowel');


}

else {
    console.log('consonant');


}



// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

var m = window.prompt("Please enter a number");

for (var i = 1; i <= m; i++) {
    console.log(i);
}



// 10- Write a program that allows user to insert integer then print a multiplication table up to 12


var n = window.prompt("Please enter a number");
var res = 1
for (var i = 1; i <= 12; i++) {

    res = i * n;
    console.log(res);


}


// 11-Write a program that allows to user to insert number then print all even numbers between 1 to this number

var A = window.prompt("Please enter a number");

for (var i = 1; i <= A; i++) {

    if (i % 2 == 0) {
        console.log(i);

    }

}


// 12- Write a program that take two integers then print the power

var number = window.prompt("Please enter a number");
var power = window.prompt("Please enter a power number");
var res = number;

for (var i = 1; i < power; i++) {

    res *= number;


}
console.log(" =", res);





// 12- Write a program to enter marks of five subjects and calculate total, average and  percentage.

var sub1 = + window.prompt("Enter mark for subject 1");
var sub2 = +window.prompt("Enter mark for subject 2");
var sub3 = +window.prompt("Enter mark for subject 3");
var sub4 = +window.prompt("Enter mark for subject 4");
var sub5 = +window.prompt("Enter mark for subject 5");

var sum = +(sub1 + sub2 + sub3 + sub4 + sub5)

var average = (sum) / 5;

var percentage = average;

console.log(" Sum= ", sum);
console.log(" average= ", average);
console.log(" percentage= ", percentage);




// 13-Write a program to input month number and print number of days in that month.

var month = window.prompt("Enter month number");

if (month == 2) {
    console.log("28  days in month", month);


}

else if (month == 4 || month == 6 || month == 9 || month == 11) {


    console.log("30 days in month", month);

}

else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("31  days in month", month);


}
else {

    console.log("Error xxxxxxxxxxxxxxxxxxxxx");
}




// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade 
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F



var Physics = + window.prompt("Enter mark for Physics");
var Chemistry = +window.prompt("Enter mark for Chemistry");
var Physics = +window.prompt("Enter mark for Biology");
var Computer = +window.prompt("Enter mark for Computer");
var Mathematics = +window.prompt("Enter mark for Mathematics");

var percentage = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;
console.log("The percentage of the subjects is =  ", percentage, "%");

if (percentage >= 90) {
    console.log("Grade is A");
}
else if (percentage >= 80) {

    console.log("Grade is  B ");
}
else if (percentage >= 70) {
    console.log("Grade is  C ")
}
else if (percentage >= 60) {
    console.log("Grade is  D ")
}
else if (percentage >= 40) {
    console.log("Grade is  E ")
}
else {
    console.log("Grade is  f ")


}




// ******************************** Using switch case*******************************





// 15- Write a program to print total number of days in month 

var numberOfMonths = + window.prompt("Enter the number of month")

switch (numberOfMonths) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;



    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;

    case 2:
        console.log("28 days");
        break;



    default:
        console.log("Error: Unknown");


}






// 16.Write a program to check whether an alphabet is vowel (a,e,I,o,u)  or consonant  

var ch = window.prompt("enter one character");
switch (ch) {
    case "a":
    case "e":
    case "o":
    case "u":
    case "A":
    case "E":
    case "O":
    case "U":

        console.log("vowel");
        break;

    default:
        console.log("consonant");
}



// 17- Write a program to find maximum between two numbers 

var a = +window.prompt("Enter a first number");
var b = +window.prompt("Enter sec number");
switch (true) {
    case (a > b):
        console.log("the maximum number is ", a);
        break;
    case (a < b):
        console.log("the maximum number is ", b);
        break;

    default:
        console.log("the  numbers are equal");


}


// 18- Write a program to check whether a number is even or odd 

var X = +window.prompt("Enter a number");

switch (true) {
    case (X % 2 == 0):
        console.log(X, " is even");
        break;
    case (X % 2 == 1):

        console.log(X, " is odd");
        break;

    default:
        console.log("Eror xxxxxxxxx");

}


// 19- Write a program to check whether a number is positive or negative or zero 

var Y = +window.prompt("Enter a number");
switch (true) {
    case (Y > 0):
        console.log(Y, "is positive");
        break;
    case (Y < 0):
        console.log(Y, "is negative");
        break;
    case (Y == 0):
        console.log(Y, "is zero");
        break;

    default:

        console.log("Error xxxxxxxxxxx ");

}


// 20- Write a program to create Simple Calculator

var a = +window.prompt("Enter first number");
var b = +window.prompt("Enter Second number");
var op = window.prompt("Enter operation + ,- ,/, *");
switch (true) {
    case (op == '+'):
        console.log(a, op, b, "=", a + b);
        break;
    case (op == '-'):
        console.log(a, op, b, "=", a - b);
        break;
    case (op == '*'):
        console.log(a, op, b, "=", a * b);
        break;
    case (op == '/'):
        console.log(a, op, b, "=", a / b);
        break;

    default:
        console.log("Error xxxxxxxxxxxxxxxxxxxxxxxxx");


}






