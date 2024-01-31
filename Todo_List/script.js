const inputBox = document.querySelector("#input-box");
const button = document.querySelector("button");
const ulList = document.querySelector(".list-container");

const addTask = () => {
  if (inputBox.value == "") {
    alert("Enter some text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ulList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
};

ulList.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    e.target.classList.toggle("checked");
    saveTask();
  } else if (e.target.nodeName == "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
});

const saveTask = () => {
  localStorage.setItem("data", ulList.innerHTML);
};

const showTask = () => {
  ulList.innerHTML = localStorage.getItem("data");
};

showTask();
