let addBtn = document.querySelector("#addBtn");
let delBtn = document.querySelector("#delBtn");
let inp = document.querySelector("#newTodo");
let list = document.querySelector("#list");


let todoItem = [];
function render(elements) {
    list.innerHTML = "";
    elements.forEach(e => {
        let todos = document.createElement("li");
        todos.innerHTML = e;
        list.appendChild(todos);
    });
}

addBtn.addEventListener("click", e => {
    if (inp.value !== null) {
        todoItem.push(inp.value);
        inp.value = null;
        render(todoItem);
        delBtn.style.display = "block";
        localStorage.setItem("31 sjı", JSON.stringify(todoItem));
    } else {
        alert("BİRADER GÖREV VERSENE AKU");
    }
});

let saved = localStorage.getItem("31 sjı");
if (saved) {
    todoItem = JSON.parse(localStorage.getItem("31 sjı"));
    render(todoItem);
} else {
    delBtn.style.display = "none";
}

delBtn.addEventListener("click", function() {
    localStorage.clear();
    list.innerHTML = null;
    todoItem = [];
    delBtn.style.display = "none";
});
