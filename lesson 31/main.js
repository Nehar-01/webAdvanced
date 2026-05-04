// Do While Loop

var i = 0;
do{
    i = i + 1;
    console.log(i);
}while(1 < 5);

console.log("---------------");

var j = 0;

while(j < 5){
    j = j + 1;
    console.log(j);
}

console.log("---------------");


let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(n);
    console.log(x);
}

console.log("---------------");
  
//For loop

for(var i = 0; 1 < 5; i++){
    console.log("Value of i is: "+1)
}

console.log("---------------");

//for/in

var person = {firstname: "Nehar ", lastname: "Avdiu ", age: 15};

var text = '';

var z;

for (z in person){
    text  += person[z];
}
console.log(text);

console.log("---------------");


//for/of
var names = ['Nehar', 'Reis', 'Bardh'];

var y;

for (y of names){
    console.log(y);
}

console.log("---------------");


var txt = "JavaScript";

var l;

for(l of txt){
    console.log(l);
}