//Question 01
// City Prompt

var city = prompt('Enter your favourite city name of Pakistan?');

if(city == "karachi"){
    alert('Welcome To The City Of Light ');
}


//Question 02
// Greeting Prompt

var gender = prompt('What is your gender?');

if(gender == 'male'){
    alert('Good Morning Sir!');
}

else if(gender == 'female'){
    alert("Good Morning Ma'm!");
}

//Question 03
// Road Signal Prompt


var signal_color = prompt (' Write the color road signal?');

if (signal_color == 'red'){
  alert ('Red : Must Stop');
}

else if (signal_color == 'yellow'){
    alert ('Yellow : Ready to Move');
  }

  else if (signal_color == 'Green'){
    alert ('Green : Move Now');
  }  


  //Question 04
// Car Fuel Prompt

var fuel = +prompt('How many fuel is remaining in your car?');

if (fuel >= 0.25){
    alert('Please refill the fuel in your car!');
}
else{
    alert('Have a great Journey!');
}


  //Question 05
// calculation Prompt

var a = 4;
if (++a === 5){     //true
    alert(' Given condition of variable a is true');
}

var b = 82;
if (b++ === 83){     //true
    alert(' Given condition of variable b is true');
}

var c = 12;
if (c++ === 13){     //true
    alert('Condition 1 is true');
}

if (c === 13){     //false
    alert('Condition 2 is true');
}

if (++c < 14){     //false
    alert('Condition 3 is true')
}

if (c === 14){    //true
    alert('Condition 4 is true')
}


var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;

if (totalCost === materialCost + labourCost){
    alert ('The Cost Equal');
}


if (true){
    alert('True');
}


if (false){
    alert('False');
}


if ( 'car' < 'cat'){
    alert('Car is smaller than cat')
}


//Question 06
// Marksheet Prompt

var sub1Marks = +prompt('How many marks do you get in English');
var sub2Marks = +prompt('How many marks do you get in Urdu');
var sub3Marks = +prompt('How many marks do you get in Math');
var subTotalMarks = sub1Marks + sub2Marks + sub3Marks ;

var totalMarks = +prompt('Write Total Marks');

var percentage = ( subTotalMarks / totalMarks) *100;
var percent = Math.floor(percentage);

document.write('<h1>Marksheet</h1>'  + '<br></br>');
document.write('Total Marks : ' + totalMarks  + '<br></br>');
document.write('Marks Obtained : ' + subTotalMarks + '<br></br>');
document.write('Percentage : ' + percent + '%' + '<br></br>');

if (percent >= 80){
  document.write('Grade : A-one' + '<br></br>' + 'Remarks : Excellant');
}
else if (percent >= 70){
  document.write('Grade : A' + '<br></br>' + 'Remarks : Good');
}
else if (percent >= 60){
  document.write('Grade : B' + '<br></br>' + 'Remarks : You Need To Improve');
}
else if (percent < 50){
  document.write('Grade : Fail' + '<br></br>' + 'Remarks : Sorry');
}


//Question 07
// secret number Prompt

var secretNumber = 5;
var userNumber = +prompt('Guess any number from 1 to 10?');

if (userNumber === secretNumber){
  alert( 'Bingo! Correct Answer');
}
else if(userNumber++ === 6 ){
       alert('Close enough to write answer');
}

else if (userNumber !== secretNumber){
  alert('Sorry! you can not guessed the right answer or not even closed');
}


//Question 08
// divide number Prompt


var number = +prompt('Write any number');

if (number / 3 ){
  alert(number + ' is divisable by 3 ');
}
else{
  alert(number + ' is not divisable by 3 ');

}


//Question 09
// odd or even number Prompt


var numberCheck = +prompt('Write any number for check the number is even or odd?');
var result = numberCheck % 2;
if (result === 0){
  alert( numberCheck + ' is even' );
}
else{
  alert( numberCheck + ' is odd');

}


//Question 10
// temperature Prompt

var temp = +prompt('how many temperature in your city?');

if (temp > 40){
  alert('It is too hot outside');
}

else if (temp > 30){
  alert('The weather today is normal');
}

else if (temp > 20){
  alert('Today weather is cool');
}

else if (temp > 10){
  alert('OMG! Today weather is so cool');
}


//Question 11
// Calculator Prompt

var num1 = +prompt('Write first number?');
var num2 = +prompt('Write second number?');
var operator = prompt('Write a operator which operation do you want to perform eg: + - * / %');

if ( operator === '+' ){
  alert ('Your answer is ' + (num1 + num2))
}

else if ( operator === '-' ){
  alert ('Your answer is ' + (num1 - num2))
}

else if ( operator === '*' ){
  alert ('Your answer is ' + (num1 * num2))
}

else if ( operator === '/' ){
  alert ('Your answer is ' + (num1 / num2))
}

else if ( operator === '%' ){
  alert ('Your answer is ' + (num1 % num2))
}