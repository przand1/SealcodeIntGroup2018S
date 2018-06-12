document.getElementById("addNew").addEventListener("click",function(){
  var text = document.getElementById('newTaskText').value
  axios
    .post("http://vps487563.ovh.net:55555/api/v1/to_do/tasks",{
          user: "przand1",
          title: text
        })
    .then(function(response) {
      console.log(response);
      addTaskToBox(text,response.data.data._id)
    })
    .catch(function(error) {
      console.log(error);
      alert(error)
    })
})
