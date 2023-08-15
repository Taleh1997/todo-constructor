const todoInp = document.getElementById("todoInp")
const todoBtn = document.getElementById("todoBtn")
const todoList = document.getElementById("todoList")


const todoObj = {
    name: "Todo list",
    data: [],
    completed: [],
    addTodo: function (text) {
        this.data.push(text)
    },
    completedTodo: function (todoIndex) {
        this.completed.push(this.data[todoIndex])
        this.data = this.data.filter((item, index) => index !== todoIndex)
    },
    renderTodo: function (listEl) {
        console.log(this.completed);
        console.log(this.data);
        todoList.innerHTML = this.data.map((item) => `<li>${item}</li>`).join("")
    },

}

todoBtn.addEventListener('click', function () {
    const value = todoInp.value;

    todoObj.addTodo(value);
    todoObj.renderTodo(todoList);
    todoInp.value = ""
    // console.log(todoObj);
})
