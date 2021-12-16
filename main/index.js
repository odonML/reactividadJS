const d = document;
//Estado
let state = {
    todoList: [],
    nombre: ""
};
//Template
const template = () => {
    if (state.todoList < 1) return `<p>No hay tareas</p>`;
    let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");
    return todos;
};
//Render
const render = () => {
    const $list = d.querySelector("#todo-list");
    if (!$list) return;
    $list.innerHTML = template();
};

//SetState
const setState = (obj) => {
    for(let key in obj){
        if(state.hasOwnProperty(key)){
            state[key] = obj[key]
        }
    }
    render();
}

setState({
    todoList: ["item1","item2","item3"],
    nombre: "odon"
})

function addToDo(e) {
    e.preventDefault();
    if (!e.target.matches("#todo-form")) return false;

    const $item = d.querySelector("#todo-item");
    state.todoList.push($item.value)
    render();

    $item.value = "";
}

d.addEventListener("DOMContentLoaded", render)

d.addEventListener("submit", addToDo);
