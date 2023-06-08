const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

container1.addEventListener("dragstart", handleDragStart);
container2.addEventListener("dragover", handleDragOver);
container2.addEventListener("drop", handleDrop);
resetButton.addEventListener("click", resetContainers);

// handleDragStart funtion which allows content of container 1 to drag
function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.innerText);
  e.target.classList.add("dragging");
}

// handleDragOver funtion which allows container 2 to accept the dragged item
function handleDragOver(e) {
  e.preventDefault();
}


// handleDrag function allows container 2 to save the dragged item in the container 2
function handleDrop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  const newItem = document.createElement("div");
  newItem.innerText = data;
  container2.appendChild(newItem);
  message.style.display = "block";
  e.target.classList.remove("dragging");
}

// resetContainer function allows to reset container in the initial state
function resetContainers() {
  container1.innerHTML = `
        <div draggable="true">Item 1</div>
        <div draggable="true">Item 2</div>
        <div draggable="true">Item 3</div>
      `;
  container2.innerHTML = "";
  message.style.display = "none";
}
