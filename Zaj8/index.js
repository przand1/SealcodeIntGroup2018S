
  var storage;

  function getData() {
  axios
  .get("http://vps487563.ovh.net:44444/api/v1/kwasy")
  .then(function(response) {
    storage=response.data

    var di = document.getElementById('di')
    for (var i = 0; i < storage.data.length; i++) {
      di.innerHTML += "<a href=" + storage.data[i].source + ">"+storage.data[i].title +"</a><br>"
    }
  })
  .catch(function(error) {
    console.log("Błąd!");
  })
}
