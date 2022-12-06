function my_Dictionary() {// function for dictionary
    var Book = {
        Auther:"David.Fulanklin",
        Publisher:"Kolins",
        Language:"English",
        Reviews:"3.8 out of 5 stars",
        Type:"paperback",
        Category:"fiction",
    };
    document.getElementById("Dictionary").innerHTML = Book.Category;
}

function my_DictionaryD() {// function for dictionary has delete part
    var Book = {
        Auther:"David.Fulanklin",
        Publisher:"Kolins",
        Language:"English",
        Reviews:"3.8 out of 5 stars",
        Type:"paperback",
        Category:"fiction",
    };
    delete Book.Type;
    document.getElementById("Dictionary").innerHTML = Book.Type;
}

