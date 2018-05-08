var tasks = [ { text: "Sprawa 1", checked: false }, { text: "Sprawa 2", checked: false }, { text: "Sprawa 3", checked: false }];

function displayTasks() {
  document.getElementsByClassName("box")[0].innerHTML = "";
  for (var i = 0; i <= tasks.length; i++) {

    document.getElementsByClassName("box")[0].innerHTML +=
    "<div class=\"listEl\" ><input type=\"checkbox\" class=\"check\" onchange=\"selfCheck("+i+")\">" +
    tasks[i].text + "<input type=\"button\" value=\"X\" class=\"delete\" onclick=\"deleteTask("+i+")\"></div>\n";

  }
}

function checkChecker() {
  for (var i = 0; i <= tasks.length; i++) {
    document.getElementsByClassName("check")[i].checked=tasks[i].checked;
  }
}

function addTask(name) {
  tasks.push( { text: name, checked: false } )
  displayTasks();
  checkChecker();
}

function deleteTask(n) {
  if (n<=tasks.length && n>=0) {
    tasks.splice(n,1);
    displayTasks();
    checkChecker();
  }
}
