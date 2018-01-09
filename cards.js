let inputField = document.getElementById("userInput");
let createButton = document.getElementById("createButton");
let output = document.getElementById("output");

const printMessage = (userText) =>{
    let newCardElement = document.createElement("div");
    newCardElement.setAttribute("id", "newOutputDiv"); 
    console.log(newCardElement);
    let userOutput = document.createTextNode(`${inputField.value} `); 
    console.log(userOutput);
    newCardElement.appendChild(userOutput); 
    let deleteButton = document.createElement("button"); 
    deleteButton.setAttribute("id", "deleteUserInput") 
    deleteButton.innerHTML += `delete`; 
    newCardElement.appendChild(deleteButton); 
    console.log(deleteButton);

    output.appendChild(newCardElement); 
    inputField.value = ""; 
    const deleteCard = () => output.removeChild(newCardElement); 
    deleteButton.addEventListener("click", deleteCard);
};


createButton.addEventListener("click", printMessage);
