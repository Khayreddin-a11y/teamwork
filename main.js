function sumOfN(nb){
	var x=nb;
	while(x>0) {  nb = nb+(nb-1);
		x=x-1
	}
	return nb ;
}
 

var myArray=[1,2,3]
var array2=['dog','cat','fox','monkey']
var array3=[1, 2 ,3 ,4 ,5, 6, 7]
var array4=["the","quich","brown","fox","jumped","over","the lazy","dog"]
var array5=[true,false,'tru']

function emptyArray() {

	var empty=[];
	return empty;
}

function numbersArray(){

	var nums=[1,2,3,4,5];
	return nums;
}

function booleansArray (){

	var booleans=[true,true,true];
	return booleans;
}

function stringsArray(){

	var namearray=["khairy","chaabani"];
	return namearray;

}

function arrayLength(array){
 
 if(Array.isArray(array)){
return array.length
}
else return"please enter a valable array";
}
function firstElement(array){
	return array[0];
}

function lastElement(array){
	return array[array.length-1];
}

function getNthElement(array, number){
	return array[number];
}

function push(array, element){
	 array.push(element);
	 return array;
}

function pop(array){
	 array.pop();
	 return array;
}

function unshift(array, element){
	 array.unshift(element);
	 return array;
}

function shift(array){
	 array.shift();
	 return array;
}

function reassignLast(array, element){

array[array.length-1]=element;
	return array;
}

function reassignLast1(array, element){

array.pop()
array.push(element);
	return array;
}


function reassignNthElement(array, element,index){

array[index]=element;
	return array;
}


function indexOf(array, element){


return array.indexOf(element);
}

function addElement(array, index, element){

	array.splice(index,0,element);
	return array;
}

function removeElement(array, index){

	array.splice(index,1);
	return array;
}
function concatArrays(array1, array2){
return	array1.concat(array2);

}
function concat3Arrays(array1, array2, array3){
return	array1.concat(array2.concat(array3));

}

function joinStrings(array,string) {
	return array.join(string);
}


function applysplit(string,splitter) {
	return string.split(splitter);
}


function getElementsAfter(array, index){
var newarray=[];
for(var i=index+1;i<array.length;i++){
	newarray.push(array[i])
	
}return newarray;
}

function getElementsBefore(array, index){
var newarray=[];
for(var i=0;i<index;i++){
	newarray.push(array[i])
	
}return newarray;
}

function getAllElementsButFirst(array){
	var newarray=[];
	for (var i=1;i<array.length;i++){
		newarray.push(array[i])
	}
	return newarray;
}





function arrayFor(array) {

	for(var i=0;i<array.length;i++){

		console.log(array[i]);
	}
}

function arrayWhile(array) {
var i=0;
	while(i<array.length){


		console.log(array[i]);
		i++;
	}
}


function sum(array) {

var sum=0;
for(var i=0;i<array.length;i++){
	sum+=array[i];
}
return sum;

}


function sumEveryOther(array){
	var sum=0;
for(var i=0;i<array.length;i+=2){
	sum+=array[i];
}
return sum;

}



function sumStartAt(array, index){

	var sum=0;
for(var i=index;i<array.length;i++){
	sum+=array[i];
}
return sum;

}


function sumUntil(array, index){


var sum=0;
for(var i=0;i<=index;i++){
	sum+=array[i];
}
return sum;

}


function subtractReverse(array){

	var sub = array[array.length-1];
for(var i=array.length-2;i>=0;i--){
	// console.log(sub)
	sub -= array[i];
}
return sub;

}

function product(array){
	var multi=1;
	for (var i =0; i <= array.length-1; i++) {
		multi*=array[i];
	}
	return multi;
}

function average(array) {
	var sum=0;
	var average=0;
	for(var i=0;i<=array.length-1;i++){
		sum+=array[i];
		console.log(sum)
		average=sum/array.length;
	}
	return average;
}

function square(array){
	var newarray=[];
	for (var i=0;i<array.length;i++) {
		 newarray.push(array[i]*array[i])
	}
	return newarray;
}


function isArray(array){

	if (Array.isArray(array)){

	return true;
	}
	else return  false;
	
}

function min(array){

	var min=array[0];
	for(var i=0;i<array.length;i++){
		if(array[i]<=min){
			min=array[i];
		}
		else {min=min;

		}
	} return min;
	}

function max(array){

	var max=array[0];
	for(var i=0;i<array.length;i++){
		if(array[i]>=max){
			max=array[i];
		}
		else {max=max;

		}
	} return max;
	}	

function shortestString(array){
	var min=array[0];
	for(var i=0;i<array.length;i++){
		if(array[i].length<=min.length){
			min=array[i];
		}
	} 
	return min;
}


function longestString(array){
	var max=array[0];
	for(var i=0;i<array.length;i++){
		if(array[i].length>=max.length){
			max=array[i];
		}
	} 
	return max;
}

function shortestLongest(array){

	var newarray=[];
newarray.push(shortestString(array),longestString(array));


	// for (var i=0;i<array.length;i++){
	// 	if(shortestString(array)===array[i].length){
	// 		newarray.push(array[i])
	// 	}
	// 	else if (longestString(array)===array[i].length){
	// 	    newarray.push(array[i])
	// 	}
	// }
	return newarray;
}




function sumrecursion(number) {
	if(number===0){
		return 0;
	}
	return number+sumrecursion(number-1);
}


function factorial(number){

	if (number===0){
	return 1;}
	return number*factorial(number-1);
}


function repeatString(string, number){

	if (number===0){
		return "";
	}
	return string+repeatString(string,number-1);
}


function fibonacci(number){
	if(number===0){
		return 0;
	}
	if (number===1){
		return 1;
	}
	return fibonacci(number-2)+fibonacci(number-1);
}





function powerntimes(base,exponent){
	if (exponent===0){
		return 1;
	}
	return base*powerntimes(base,exponent-1);
}


function multiplyBy10(firstNumber, secondNumber){
if (secondNumber===0){
	return firstNumber;
} 
return 10*multiplyBy10(firstNumber,secondNumber-1)}


function sumBetween(start, end){
var x=start;
if(start>=end){
	  start=end
	  end=x
}
	if (start===end){
		return end;
	}if(end===start){return start;}
	return start+sumBetween(start+1,end);
}



 function inc(x) {
   return x + 1 
}  
function dec(x) {
   return x - 1 
}
function add(number1, number2){
	if(number1===0){
		return 0;
	}
	if(number2===0){
		return 0;
	}
return dec(number1)+inc(number2)
}

function add1(number1,number2){
	if (number2===0){
		return number1
	}
	return add1(inc(number1),dec(number2));
}

function isEven (number) {
	if(number === 0) {
		return true
	}
	if(number=== 1) {
		return false
	}
	return isEven(number-2)
}               

function multiply(num1, num2) {
	if(num2===1){
		return num1;
	}
   return num1+multiply(num1,num2-1)
}