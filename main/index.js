const d = document;
const $item = d.querySelector("#todo-item");
const $list = d.querySelector("#todo-list");

function addToDo(e) {
    e.preventDefault();
    if(!e.target.matches("#todo-form")) return false;

    const $li = d.createElement("li");
    $li.textContent = $item.value;
    $list.appendChild($li)

    $item.value = '';
}   

d.addEventListener("submit", addToDo);