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
    console.log("estado", state)
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
//GetState
const getState = () => JSON.parse(JSON.stringify(state))

function addToDo(e) {
    e.preventDefault();
    if (!e.target.matches("#todo-form")) return false;

    const $item = d.querySelector("#todo-item");
    const lastState = getState();
    lastState.todoList.push($item.value)
    setState({todoList: lastState.todoList});

    $item.value = "";
}

d.addEventListener("DOMContentLoaded", render)

d.addEventListener("submit", addToDo);
