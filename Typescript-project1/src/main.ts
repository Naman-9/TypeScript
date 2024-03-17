import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContatiner = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
e.preventDefault();

const todo: Todo = {
  title: "",
  isCompleted: false,
  id: String(Math.random() * 1000),
};

todos.push(todo);
todoInput.value = "";

renderTodo(todos);
};

const gegnerateTodoItem = (item: Todo) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  const checkBox:HTMLInputElement = document.createElement("input")
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = item.isCompleted;

  checkBox.onchange = () => {

    todos.find(todo => {
      if(todo.id === item.id) {
        item.isCompleted = checkBox.checked;
      }
    })

    para.className = checkBox.checked ? "textCut" : "";
  }
  

  // creating p title
  const para: HTMLParagraphElement = document.createElement("p");
  para.innerText = item.title;
  para.className = item.isCompleted ? "textCut" : "";
  const btn : HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deleteTodo(item.id);
  }

  // append all toDo
  todo.append(checkBox, para, btn);

  todosContatiner.append(todo);
}

const deleteTodo = (id: string) => {
const idx = todos.findIndex(item => item.id === id);

todos.splice(idx, 1);

renderTodo(todos);
} 

const renderTodo = (todos: Todo[]) => {
  todosContatiner.innerText = "";
  todos.forEach(item => {
    gegnerateTodoItem(item);
  })
}