function Player_function(){//binary function
    var age,Can_play;
    age = document.getElementById("age").value;
    Can_play = (age<12)?"You are too young ":"You are good ";
    document.getElementById("Play").innerHTML = Can_play + "to play.";
}

function Dog(Breed,Color,Size,) {
this.Dog_Breed = Breed;
this.Dog_Color = Color;
this.Dog_Size = Size;
}
var BarBar = new Dog ("Poodle","Brown","Small");
var Micky = new Dog ("Labrador","Black","Medium");
var Rocky = new Dog ("Pug","Sliver","Small");

function ThisFunction(){
    document.getElementById("This_and_New").innerHTML = 
    "BarBar is a "+ BarBar.Dog_Size + " size " + BarBar.Dog_Color + " color " + BarBar.Dog_Breed+" dog."
}

function nested_Function(){//nested function 
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        Starting_point = 5;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    
    }
}


















[]