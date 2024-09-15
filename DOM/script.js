//DOM :- It is a way to interact with the HTML elements using JavaScript.

// console.dir(document);         //if we want to see the document
// console.dir(document.body);    //if we want to see the body of the document
// console.dir(document.URL);     //if we want to see the URL of the document
// console.dir(document.head);    //if we want to see the head of the document
// console.dir(document.title);   //if we want to see the title of the document
// console.dir(document.all);     //if we want to see all the elements of the document

/*
let heading = document.getElementsByClassName('heading');
console.log(heading);
console.dir(heading); */

/*
let paragraph = document.getElementsByTagName('p');
console.log(paragraph); */


//QuerySelectors
/*
let firstEl = document.querySelector('p');  //It will select the first element of the document
console.log(firstEl);

let allEl = document.querySelectorAll('p');  //It will select all the elements of the document
console.log(allEl);

let allClass = document.querySelectorAll('.heading'); //It will select all the elements of the document with class name heading
console.log(allClass);

let id = document.querySelector('#abcd'); //It will select the element of the document with id name id
console.log(id);    */


//Childs and Parents
/*
let children = document.querySelector('.heading').children; //It will select the children of the element with class name heading
console.log(children);

let div = document.querySelector("div").children
console.dir(div); */


//innerText
                                                                         