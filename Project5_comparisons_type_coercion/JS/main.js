function type_of(){
    document.write(typeof"answer");}

function expression_combining(){
    document.write("The answer is:"+ 6);
}
function operator() {//function for operators except triple equal and not
    document.write(10==9);
    document.write(10>9);
    document.write(10<9);
    document.write(10>9&&10<9);
    document.write(10>9||10<9);
}

function Not_function(){
    document.getElementById("Not").innerHTML = ! (10 > 9);
}

function Triple_Equal(){ //function for triple equal
    A= 99;
    B= "99";
    document.write(A===B);
}