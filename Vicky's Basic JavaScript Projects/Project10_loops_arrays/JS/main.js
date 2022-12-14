function count_To_Ten() {
    var Digit = "";
    var X = 1 ;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Dogsname = ["Micky","Rocky","Bass","Dudu","Kiki","oliver"];
var Content = "";
var Y;
function for_Loop() { // function for for loop
    for (Y = 0; Y < Dogsname.length; Y++ ) {
    Content += Dogsname[Y] + "<br>";
    }
    document.getElementById("List_of_dogs").innerHTML = Content;
}

function cat_pics() { //Array for cat pics
    var Cat_picture = [];
    Cat_picture[0] = "sleeping";
    Cat_picture[1] = "playing";
    Cat_picture[2] = "eating";
    Cat_picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture,the cat is " + Cat_picture[2] + ".";
}

function let_Function() {//let function
    var X = 82;
    document.write(X);
{
    let X = 36;
    document.write("<br>"+ X);
}
document.write("<br>" + X);
}