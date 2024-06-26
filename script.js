// question 1 and 2
// sum
const num1 = 5;
const num2 = 10;
const sum1 = num1 + num2;
console.log(sum1);
document.getElementById("sum").innerHTML = sum1;
// subtraction
const num3 = 5;
const num4 = 10;
const sub = num3 - num4;
console.log(sub);
document.getElementById("sub").innerHTML = sub;
// multiplication
const num5 = 5;
const num6 = 10;
const mul = num5 * num6;
console.log(mul);
document.getElementById("mul").innerHTML = mul;
// division
const num7 = 5;
const num8 = 10;
const div = num7 / num8;
console.log(div);
document.getElementById("div").innerHTML = div;
// modulus
const num9 = 5;
const num10 = 10;
const mod = num9 % num10;
console.log(mod);
document.getElementById("mod").innerHTML = mod;
// question 3 a & b
let variable;
document.getElementById("result").innerHTML += "Value after variable declaration is: " + variable + "<br>";
// c & d
variable = 5;
document.getElementById("result").innerHTML += "Initial value: " + variable + "<br>";
// e & f
variable ++;
document.getElementById("result").innerHTML += "Value after increment is: " + variable + "<br>";
// g & h
variable += 7;
document.getElementById("result").innerHTML += "Value after addition is: " + variable + "<br>";
// i & j
variable --;
document.getElementById("result").innerHTML += "Value after decrement is: " + variable + "<br>";
// k
variable = variable % 3;
document.getElementById("result").innerHTML += "The remainder after dividing is: " + variable + "<br>";
// l
variable = variable ** 2;
document.getElementById("result").innerHTML += "The remainder is: " + variable;
// task 4
const cost = 600;
const total = cost * 5;
document.getElementById("result").innerHTML += "Total cost to buy 5 tickets to a movie is: " + total;
// task 5
var table = 4;
for (var i = 1; i <= 10; i++) {
    document.getElementById("result").innerHTML += table + " x " + i + " = " + table * i + "<br>";
}
// task 6 The Temperature Converter
var  Celsius = 25;
var convert1 = Celsius * 9 / 5 + 32;
var fahrenheit = 70;
var convert2 = fahrenheit - 32 * 5 / 9;
console.log(Celsius + "°" + "is" + convert1);
console.log(fahrenheit + "°" + "is" + convert2);
document.getElementById("result").innerHTML += Celsius + "°" + "is" + convert1;
document.getElementById("result").innerHTML += fahrenheit + "°" + "is" + convert2 + "<br>";
// task 7
var item1 = 650;
var quantity1 = 3;
var item2 = 100;
var quantity2 = 7;
var shippingcharges = 100;
var last = item1 * quantity1 + item2 * quantity2 + shippingcharges;
console.log(last);
document.getElementById("result").innerHTML += "total costa of your order is" + last + "<br>";
// task 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
console.log(percentage);
document.getElementById("result").innerHTML += " your percentage is " + percentage + "<br>";
// task 9 
var dollars = 10;
var riyals = 25;
var sum = (dollars * 104) + (riyals * 28);
console.log(sum);
document.getElementById("result").innerHTML += " total currency in PKR: " + sum + "<br>";
//  task 10
var number =  5;
var result = number + 5 * 10 / 2;
console.log(result);
document.getElementById("result").innerHTML += " result is " + result + "<br>";
// task 11
var currentyear = 2024;
var birthyear = 2000;
var age = currentyear - birthyear;
console.log(age);
document.getElementById("result").innerHTML += " your age is " + age + "<br>";
// task 12 a & b 
var radius = 20;
var area = 3.142 * radius * radius;
console.log(area);
document.getElementById("result").innerHTML +="<h1> The Geometrizer </h1>" + "<br>" + "radius of a circle:" + radius + "<br>" + "the circumference:" + circumference + "<br>" + "the area is" + area + "<br>";
// task 13
var oreo = "biscut";
var age = 20;
var maximum = 70;
var estimated = 2;
var remaining = maximum - age;
var total1 = estimated * remaining;
console.log(total1);
 document.getElementById("result").innerHTML += " favourite snack:" + oreo + "<br>" + "current age:" + age + "<br>" + "estimated maximum age:" + maximum + "<br>" + "amount of snacks per day:" + estimated + "<br>" + total1 + " " + oreo + " to last you until the ripe old age of " + maximum
//end code