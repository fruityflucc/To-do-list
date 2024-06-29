const inputBox = document.getElementById("inputBox");
const ListContent = document.getElementById("list-content");

function addtask() {
  if (inputBox.value === "") {
    alert("Please add something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContent.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
