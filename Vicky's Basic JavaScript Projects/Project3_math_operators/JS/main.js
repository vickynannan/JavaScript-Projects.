function addition_Function() { //function for add
    var  addition = 29 + 16 ;
    document.getElementById("Math").innerHTML = "29 + 16  ="+ addition ;
}
function multiplication() { // function for mul
    var simple_Math = 6*9;
    document.getElementById("Math1").innerHTML = "6*9="+ simple_Math;
}

function subtraction() { // function for sub
    var subtraction = 29-15;
    document.getElementById("Math2").innerHTML = "29-15="+ subtraction;
}

function To_increment() { //function for increment
    var X=8 ;
    X++;
    document.write(X);
}

function Decrement(){ //function for decrement
    var Y=6.25;
    Y--;
    document.write(Y);
}
function modulus_Operator(){ //not my expect
    var simple_Math = 25 % 7;
    document.getElementById("Math3").innerHTML= "When you divide 25 by 7 you have remainder of:"+ simple_Math;
}

function Random() { // my favorite
    window.alert(Math.random()*8);
}