window.onload=function() {
  var storage
  axios
  .get("http://vps487563.ovh.net:55555/api/v1/to_do/przand1/tasks")
  .then(function(response) {
    storage=response.data
    for (var i = 0; i < storage.length; i++) {
      addTaskToBox(storage[i].title,storage[i]._id,storage[i].done)
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}
