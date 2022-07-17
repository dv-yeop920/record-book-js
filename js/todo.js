const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));

}


function DeletTodo(event) {
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(list.id));
    saveTodo();
}

function painTodo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click" , DeletTodo);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newTodo.text;
    list.id = newTodo.id;
    toDoList.appendChild(list);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObject);
    painTodo(newTodoObject);
    saveTodo();
}

toDoForm.addEventListener("submit" , handleTodoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(painTodo);
}

