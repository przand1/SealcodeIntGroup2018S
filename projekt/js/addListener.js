document.getElementById("addNew").addEventListener("click",function(){
  var text = document.getElementById('newTaskText').value
  if (text=="") {
    window.alert("Nie wpisano treści zadania!")
  } else {
    axios
      .post("http://vps487563.ovh.net:55555/api/v1/to_do/tasks",{
            user: "przand1",
            title: text
          })
      .then(function(response) {
        console.log(response);
        addTaskToBox(text, response.data._id, response.data.done)
      })
      .catch(function(error) {
        console.log(error);
        alert(error)
      })
  }
})
document.getElementById("newTaskText").addEventListener("keyup",function(event){
  if (event.keyCode == 13) {
    var text = this.value
    if (text=="") {
      window.alert("Nie wpisano treści zadania!")
    } else {
      axios
        .post("http://vps487563.ovh.net:55555/api/v1/to_do/tasks",{
              user: "przand1",
              title: text
            })
        .then(function(response) {
          console.log(response);
          addTaskToBox(text, response.data._id, response.data.done)
        })
        .catch(function(error) {
          console.log(error);
          alert(error)
        })
    }
  }
})
