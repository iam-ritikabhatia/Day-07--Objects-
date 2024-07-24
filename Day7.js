// create an object representing a book with proprties like title, author, year.

  let Book ={
    title : "Think Again",
    author: "Adam Grant",
    Year: 2020,
    properties: "Adam Grant is book which is a fictious book",
    gettitleAndAuthor: function() {
        return `Title: ${this.title}, Author: ${this.author}, Year:${this.Year}`;
    }
};

console.table([Book]);
console.log(Book.gettitleAndAuthor());


// Access an log the title author properties of the book object

console.log(Book);
console.log("Title: " + Book.title);
console.log("Author:" + Book.author);




// nested object representing a library with properties like name and book of an array and log the library of the object

let library = {
    name : "CentralLibrary",
    Books: 
    {   
    Physics: "SL Arora",
    Chemistry: "Pradeep",
    Mathematics: "R.D Sharma"
    },
    title: ["BtechBooks", "Matriculation", "Immediate"]
}

console.log(library);
console.log("Books:" + library.Books);
console.log("title:" + library.title);
console.log("Name:" + library.name);





// Add a method to the book object that uses this keyword to return a string with the book's title and year, log the result of calling this method 

let books = {
    title: "Do Epic Shit",
    author: "Dr. Ankur Warikoo",
    year: 2021,
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, and Author is ${this.author}`;
    } ,  

    getTitleAndYear: function() {
        return `Title: ${this.title}, and Year is ${this.year}`;
    }
};

console.log(books.getTitleAndAuthor());
console.log(books.getTitleAndYear());






//  use forin loop to iterate over the properties of the book object and log each property and value

let book ={
    name: " Dr.Mahira Sharma",
    title: "Mathematics",
    Properties: "This books contain the subject mathematics in which trigonometry and Differentiation and Integration"
}

for (let property in book) {
    if (book.hasOwnProperty(property)) {
        console.log(`${property}: ${book[property]}`);
        
    }
}



// use Object.keys and Object.values method to log all the keys and value of all the object


let booke = {
title: "To Kill a Mongoose",
author: "Harry Potter",
year: 1960,
getTitleAndAuthor: function(){
    return `Title: ${this.title}, author: ${this.author} `;
},
getTitleAndYear: function(){
    return `Title: ${this.title}, and year: ${this.year}`;
}
};

console.log("Keys:", Object.keys(booke));
console.log("Values:", Object.values(booke));