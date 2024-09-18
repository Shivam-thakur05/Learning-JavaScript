let button = document.createElement("button"); //It will create a button element
button.innerHTML = "Click me"; //It will set the innerHTML of the button element
button.style.backgroundColor = "blue"; //It will set the background color of the button element
button.style.color = "white"; //It will set the color of the button element
document.body.append(button); //It will append the button element to the body

button.addEventListener("click", function() {
    alert("Button clicked!");
});

