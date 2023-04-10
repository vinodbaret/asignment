// <!-- Data Types
// Operators
// Conditional Statement
// Loop Control Structure

// Assignments
// Write a program that prompts the user to enter their age. If the age is 
// greater than or equal to 18, the program should display "You are eligible 
// to vote", otherwise it should display "Sorry, you are not eligible to vote".

var age = parseFloat (prompt("enter your age"))

if (age>=18)
{
    document.write("You are eligible to vote")
}
else 
{
    document.write("Sorry, you are not eligible to vote")
}


// 2 Write a program that prompts the user to enter two numbers and displays the 
// larger number. Use an if statement to check which number is larger and then
//  display the result.

var firstnumber = parseInt(prompt("enter your no"));
var secondnumber = parseInt(prompt("enetr your no"));
if(firstnumber > secondnumber)
{
    document.write("first is greaterthan second");
}
   

else

    document.write("second is greaterthan first");

// 3     Write a program that prompts the user to enter their username and password. 
// If the username is "admin" and the password is "password123", the program 
// should display "Access granted", otherwise it should display "Access denied".
    
var db_user = "Admin";
var db_pass = "Password123";
var username = prompt("enter user name")
var password = prompt("enter your password")


var input_user = username;
var input_pass = password;


if (db_user == input_user && db_pass == input_pass)
{
    document.write("Access granted")
}
else
{
    document.write("Access denied")
}


// method 2


if (db_user == input_user && db_pass == input_pass)
{
    document.write("Access Granted")
}else if(db_user !== input_user){
    document.write("Wrong Username")
}else if(db_pass !== input_pass){
    document.write("Wrong Password")
}
else
{
    document.write("Access denied")
}


// 4 Write a program that prompts the user to enter a number. If the number is 
// even, the program should display "The number is even", otherwise it should
//  display "The number is odd". -->


let x = parseInt(prompt("please enter "));
if(x%2==0)
{
    document.write("even");
}
else
{
    document.write("odd");
}



// Loops: To execute repetitive instructions. 
// Functions

// 1. Write a logic to perform the sum of n numbers entered by the user, 
//    stop if the user enters a negative number.

let sum = 0;
let input;
do {
input = prompt("Enter the number: ");
const number = parseInt(input);
if (number >= 0) {
sum = sum + number;
} while (input>=0);
console.log("The sum of the entered numbers is: ", sum)





// 2. Write a logic to create a game called Guess the Number 
//    Computers generate a Random Number.
//    User will try to guess a number, if Guess is Correct, Print Msg 
//    "User Won" 
//    User has three change to guess the number, if Fails, Print Msg 
//    "User Lose" 
var userNumber;
var chance = 0;
var maxchances = 3; var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
while(chance < maxchances)
{
  userNumber = parseInt(prompt ("Guess the number between 1 to 10:"));
  if (userNumber === randomNumber){
     document.write("User Won");
     break;
}
 else
 chance++
 
  if(chance === maxchances) {
     document.write("User] Lose");
}
}




// 3.  Write code to create an Object containing information 
//    (Name, Age, Address(City, State, Pincode), Hobbies) and
//     also having function to display all information.

var data = {
    "name":"vinod",
    "age":25,
    "address":{
        "city":"mandsaur",
        "state":"mp",
        "pincode":458001,
        "hobbies":{"singing":"dancing","cricket":"travellingl"}
    }

}
console.log(data)
