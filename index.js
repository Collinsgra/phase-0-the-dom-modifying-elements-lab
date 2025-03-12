// Write your code here!
// Remove the <main> element with id "main"
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the <h1> to "victory"
newHeader.id = "victory";

// Set the text content of the <h1> to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new <h1> to the body
document.body.appendChild(newHeader);
