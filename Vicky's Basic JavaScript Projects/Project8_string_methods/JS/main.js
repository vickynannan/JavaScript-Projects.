function full_Sentence () {
    var part_1 = "I have ";
    var Part_2 = " 50 books ";
    var part_3 = " about dogs ";
    var part_4 = " and cats.";
    var whole_sentence = part_1.concat(Part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;//It is gooes full sentence
}

function slice_Method() {
    var Sentence = "I have 50 books about dogs and cats.";//It's goes to show "dogs"
    var section = Sentence.slice(22,27);
    document.getElementById("Slice").innerHTML = section;
}

function string_Method() {
    var X = 123;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();// string 123
}

function precision_Method() {
    var X = 132729.83662345;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);//It's goes 132729.8366
}