function addTodo() {
    var todoTask = document.getElementById("todo").value;

    if (todoTask === "") {
        return;
    }

    document.getElementById("todo").value = "";
    var todoList = document.getElementById("todolist");
    var listItemDiv = createListItemDiv(todoTask)
    var li = document.createElement('li');
    li.appendChild(listItemDiv)
    todoList.appendChild(li);
}

function editTodo(args) {
    var liItem = args.target.parentElement.parentElement;
    var todoTask = liItem.getElementsByClassName("todoLabel")[0].innerHTML;
    var editListItem = createEditListItemDiv(todoTask);
    liItem.innerHTML = ""
    liItem.appendChild(editListItem)
}

function deleteTodo(args) {
    var todoList = document.getElementById("todolist");
    let liItem = args.target.parentElement.parentElement;
    todoList.removeChild(liItem);
}

function saveEdit(args) {
    var liItem = args.target.parentElement.parentElement;
    var todoTask = liItem.getElementsByClassName("todoInputEdit")[0].value;
    if (todoTask === "") {
        return;
    }
    var listItemDiv = createListItemDiv(todoTask);
    liItem.innerHTML = ""
    liItem.appendChild(listItemDiv)
}

function cancelEdit(args) {
    var liItem = args.target.parentElement.parentElement;
    var todoTask = liItem.getElementsByTagName("input")[0].placeholder;
    var listItemDiv = createListItemDiv(todoTask);
    liItem.innerHTML = ""
    liItem.appendChild(listItemDiv)
}

function createListItemDiv(todoTask) {
    var div = document.createElement('div');
    var label = document.createElement('label')
    label.innerHTML = todoTask;
    label.classList.add("todoLabel");
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = editTodo;
    editButton.classList.add("editButton");
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = deleteTodo;
    deleteButton.classList.add("deleteButton");
    div.appendChild(label);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    return div;
}

function createEditListItemDiv(todoTask) {
    var div = document.createElement('div');
    var label = document.createElement('input')
    label.value = todoTask;
    label.placeholder = todoTask;
    label.classList.add("todoInputEdit");
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.onclick = saveEdit;
    saveButton.classList.add("saveButton");
    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.onclick = cancelEdit;
    cancelButton.classList.add("cancelButton");
    div.appendChild(label);
    div.appendChild(saveButton);
    div.appendChild(cancelButton);
    return div;
}