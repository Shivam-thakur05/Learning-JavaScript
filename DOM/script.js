//DOM :- It is a way to interact with the HTML elements using JavaScript.

//DoM Properties
// console.dir(document);         //if we want to see the document
// console.dir(document.body);    //if we want to see the body of the document
// console.dir(document.URL);     //if we want to see the URL of the document
// console.dir(document.head);    //if we want to see the head of the document
// console.dir(document.title);   //if we want to see the title of the document
// console.dir(document.all);     //if we want to see all the elements of the document

/*
//findig HTML elements

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




//Change the HTML elements
document.getElementById("demo").innerHTML = "This is a billi"; //It will change the innerHTML of the element with id name demo
document.getElementById("1220").id = "newId"; //It will change the id of the element with id name 1220 to newId
document.getElementById("newId").style.backgroundColor = "yellow"; //It will change the background color of the element with id name abcd to yellow
document.getElementById("abcd").setAttribute("disabled", "true"); //It will disable the element with id name abcd




//Adding and Deleting Elements

// Create an HTML element
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is a new div element";
document.body.appendChild(newDiv);
console.log(newDiv);

// Add an event handler to the new div
newDiv.addEventListener("click", function() {
    alert("New div element clicked!");
});

// Delete an HTML element
let remove = document.getElementById("newId");
if (remove) {
    remove.parentNode.removeChild(remove);
}

// Replace an HTML element
let replace = document.getElementById("abcd");
if (replace) {
    let newChild = document.createElement("div");
    newChild.innerHTML = "This is a replacement div element";
    
    // Add an event handler to the new child
    newChild.addEventListener("click", function() {
        alert("Replacement div element clicked!");
    });

    replace.parentNode.replaceChild(newChild, replace);
}