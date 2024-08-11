/*ex1*/
function showDate() {
   document.getElementById('s_date').innerHTML=Date();
}

function lightOn(){
   document.getElementById('myImg').src='images/pic_bulbon.gif';
}

function lightOff(){
   document.getElementById('myImg').src='images/pic_bulboff.gif';
}

function styleChange(){
   document.getElementById('demo').style.fontSize='35px';
}

function styleChange2() {
   document.getElementById('demo2').style.display='none';
}

function styleChange3() {
   document.getElementById('demo3').style.display='block';
}

function myFunction(){
   document.getElementById('demo4').innerHTML='Paragraph changed.';
}

function myFunction1(){
   document.getElementById("demo5").innerHTML = "My First JavaScript";
}

function myFunction2(){
   document.getElementById("demo6").innerHTML = 5 + 6;
}

function myFunction3(){
   document.write(7+7);
}

function myFunction4(){
   window.alert(7+7);
}

function myFunction5(){
   console.log(7+9);
}

function myFunction6(){
   window.print();
}

var x, y;
x=5+6;
y=x*10
document.getElementById('demo13').innerHTML = y;

try {
  const PI = 3.141592653589793;
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo14").innerHTML = err;
}

if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
document.getElementById("demo").innerHTML = typeof fruits;

let x = 9.656;
document.getElementById("demo15").innerHTML = 
  x.toPrecision() + "<br>" +
  x.toPrecision(2) + "<br>" +
  x.toPrecision(4) + "<br>" +
  x.toPrecision(6);