const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"

let toDos = [];

function SaveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    SaveTodo();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",DeleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    SaveTodo();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

[1, 2, 3, 4].filter(sexyFilter)