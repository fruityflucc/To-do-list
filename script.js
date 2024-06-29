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
  saveData();
}

ListContent.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ListContent.innerHTML);
}

function loadData() {
  ListContent.innerHTML = localStorage.getItem("data");
}
loadData();
