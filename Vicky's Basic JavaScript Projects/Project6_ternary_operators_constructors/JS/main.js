function Player_function(){
    var age,Can_play;
    age = document.getElementById("age").value;
    Can_play = (age<12)?"You are too young ":"You are good ";
    document.getElementById("Play").innerHTML = Can_play + "to play.";


}