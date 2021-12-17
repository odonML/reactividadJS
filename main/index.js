import Component from "./Component.js";

const d = document;
const app = new Component({
    el: "#todo-list",
    data: {
        todoList: [],
    },
    template: function (props) {
        if (props.todoList < 1) return `<p>No hay tareas</p>`;
        let todos = props.todoList.map((item) => `<li>${item}</li>`).join("");
        return todos;
    },
});
app.setState({
    todoList: ["hola"],
});

function addToDo(e) {
    e.preventDefault();
    if (!e.target.matches("#todo-form")) return false;
    
    const $item = d.querySelector("#todo-item");
    const lastState = app.getState();
    lastState.todoList.push($item.value);
    app.setState({ todoList: lastState.todoList });
    
    $item.value = "";
    console.log(app.getState());
}

d.addEventListener("DOMContentLoaded", app.render);

d.addEventListener("submit", addToDo);
