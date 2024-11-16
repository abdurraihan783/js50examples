//Ex-1
function demo(){
	document.getElementById('text').innerHTML ="I am trying hard";
}
//Ex-2
function date(){
	document.getElementById('dt').innerHTML=Date();
}
//Ex-3
function font(){
	document.getElementById('size').style.fontSize ="40px";
}
//Ex-4
function HD(){
	document.getElementById('hide').style.display="none";
}
//Ex-5
function disnone(){
	document.getElementById('DN').style.display="block";
}
//Ex-6
function oDd(){
	document.getElementById('odd').innerHTML=5+6;
}
//Ex-7
function imG(){
	document.getElementById('img').src="images/img3.jpg";
}
//Ex-8
// document.write(8 + 7);
// Ex-9
	window.alert(12+13);
// Ex-10
	alert(30+20);
// Ex-11
	console.log(25+15);
// Ex-12
// window.print();
// Ex-13
function let(){
	let x, y, z;  
	x = 17;        
	y = 13;        
	z = x + y;
	document.getElementById('l_t').innerHTML="the value of z is " + z +".";
}
// Ex-14
function sT(){
	let a, b, c;
	a = 12;
	b = 23;
	c = a + b;
	document.getElementById('le_t').innerHTML = c;
}
// Ex-15
function myFunction() {
	document.getElementById('function1').innerHTML = "Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quas atque eius modi velit laudantium amet? Excepturi numquam repudiandae accusamus veritatis.";
	document.getElementById('function2').innerHTML = "Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quas atque eius modi velit laudantium amet? Excepturi numquam repudiandae accusamus veritatis.";
}
// Ex-16
function numBer(){
	document.getElementById("d_o").innerHTML = 10.50;
}
// Ex-17
function OperaTors(){
	document.getElementById("opera").innerHTML = (8+7) * 10;
}
// Ex-18
function OTors(){
	let x, y;
	x = 27;
	y = 23;
	document.getElementById("o_a").innerHTML = x + y;
}
// Ex-19
function OT(){
	document.getElementById("a").innerHTML = 10 * 12;
}
// Ex-20
function O(){
	let x;
	x = 9;
	document.getElementById("b").innerHTML = x * 10;
}
// Ex-21
function a(){
	document.getElementById("c").innerHTML = "Abdur" + " " + "Raihan";
}
// Ex-22
function b(){
	let x, y;
	x = 9 + 6;
	y = x * 12;
	document.getElementById("D").innerHTML = y;
}
// Ex-23
function c(){
	let lastName, lastname;
	lastName = "Abdur";
	lastname = "Raihan";
	document.getElementById("E").innerHTML = lastName;
}
// Ex-24
function d(){
	x = 9 ;
	y = x * 12;
	document.getElementById("F").innerHTML = y;
}
// Ex-25
function e(){
	const a = 10;
	const b = 12;
	const c = a + b;
	document.getElementById("G").innerHTML = c;
}
// Ex-26
function f(){
	const price1 = 16;
	const price2 = 14;
	let total = price1 + price2;
	document.getElementById("H").innerHTML = total;
}
// Ex-27
function g(){
	const pi = 16;
	let person = "Abdur Raihan";
	let answer = 'yes I am!';
	document.getElementById("I").innerHTML = pi + "<br>" + person + "<br>" + answer;
}
// Ex-28
function h(){
	let person = "Abdur Raihan", carname = "BMW", Price = "20m";
	document.getElementById("J").innerHTML = person;
}
// Ex-29
function i(){
	let  carName;
	document.getElementById("K").innerHTML = carName;
}
// Ex-30
function j(){
	let  x = 6 + 8 + 16;
	document.getElementById("L").innerHTML = x;
}
// Ex-31
function k(){
	let  x = "Abdur" + " " + "Raihan" ;
	document.getElementById("M").innerHTML = x;
}
// Ex-32
function l(){
	let  x = "5" + 2 + 3;
	document.getElementById("N").innerHTML = x;
}
// Ex-33
function m(){
	let  x = 20;
	{
	let  x = 3;
	}
	document.getElementById("O").innerHTML = x;
}
// Ex-34
function n(){
	let  x = 15;
	{
	let  x = 3;
	}
	{
	let  x = 7;
	}
	document.getElementById("P").innerHTML = x;
}
// Ex-35
function o(){
	const x = 5;
	document.getElementById("Q").innerHTML = x;
}
// Ex-36
function p(){
	const cars = ["Saab", "Volvo", "BMW"];
	cars[0] = "Toyota";
	cars.push("Audi");
	document.getElementById("R").innerHTML = cars;
}
// Ex-37
function q(){
	const car = {brand: "Audi", color: "black", serise: "8"};
	car.color = "red";
	car.owner = "Raihan";
	document.getElementById("S").innerHTML = "Car owner is" + " " + car.owner;
}
// Ex-38
function r(){
	let x = 12;
	let y = 32;
	let z = x * y;
	document.getElementById("T").innerHTML = z;
}
// Ex-39
function s(){
	let x = 12;
	let y = 32;
	let z = (12+32) * 5;
	document.getElementById("U").innerHTML = z;
}
// Ex-40
function t(){
	let x = 12;
	x+=38;
	document.getElementById("V").innerHTML = x;
}
// Ex-41
function u(){
	let x = 120;
	x-=38;
	document.getElementById("W").innerHTML = x;
}
// Ex-42
function v(){
	let x = 120;
	x*=12;
	document.getElementById("X").innerHTML = x;
}
// Ex-43
function w(){
	let x = 120;
	x/=12;
	document.getElementById("Y").innerHTML = x;
}
// Ex-44
function x(){
	let x = 120;
	x%=9;
	document.getElementById("Z").innerHTML = x;
}
// Ex-45
function y(){
	let x = 5;
	x**=3;
	document.getElementById("A").innerHTML = x;
}
// Ex-46
function z(){
	let x = 5;
	let y = 4;
	let result = 5 > 4;
	document.getElementById("B").innerHTML = result;
}
// Ex-47
function ab(){
	let x = "A";
	let y = "B";
	let result = A > B;
	document.getElementById("C").innerHTML = result;
}
// Ex-48
function y_z(){
	let x = 5 + 5;
	let y = "5" + 5;
	let z = "Hello" + 5;
	document.getElementById("x_y").innerHTML = x + "<br>" + y + "<br>" + z;
}
// Ex-49
function a_a(){
	let x = 225;
	let y = 77;
	let z = x - y;
	document.getElementById("b_b").innerHTML = z;
}
// Ex-50
function b_b(){
	let x = 225;
	let y = 77;
	let z = x % y;
	document.getElementById("c_c").innerHTML = z;
}


