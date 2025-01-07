// Grab elements
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = () => buttonOnClick();

function buttonOnClick() {
  let inputValue = input.value;
  
  let newItem = document.createElement("li");
  let newSpan = document.createElement("span");
  newSpan.textContent = inputValue;
  let newButton = document.createElement("button");
  newButton.textContent = "Delete";
  newButton.addEventListener("click", () => {
    newItem.remove();
  })
  newItem.appendChild(newSpan);
  newItem.appendChild(newButton);
  list.appendChild(newItem);

  input.value = "";
  input.focus();
}
