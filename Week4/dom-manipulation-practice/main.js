// Your code goes here!
let todo = ["take class", "pass class", "crush interview", "code, code, code"];
let uList = document.getElementById("todo-list");

todo.forEach(function (todo) {
  uList.innerHTML += `<li> ${todo} </li>`;
});
