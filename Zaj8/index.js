
  var storage;

  function getData() {
  axios
  .get("http://vps487563.ovh.net:44444/api/v1/kwasy")
  .then(function(response) {
    storage=response.data

    var di = document.getElementById('di')
    di.innerHTML = ""
    for (var i = 0; i < storage.data.length; i++) {
      di.innerHTML += "<a href=" + storage.data[i].source + ">"+storage.data[i].title +"</a><br>"
    }
  })
  .catch(function(error) {
    console.log(error);
  })
}

function postData() {
  var usr = document.getElementById("user").value
  var src = document.getElementById("source").value
  var ttl = document.getElementById("title").value
  var tg = document.getElementById("tag").value
  var srctp = document.getElementById("source_type").value
  axios
  .post("http://vps487563.ovh.net:44444/api/v1/kwasy",{
          user: usr,
          title: ttl,
          source: src,
          source_type: srctp,
          tag: tg
          })
  .then(function(response) {
    console.log(response);
    document.getElementById('id').value=response.data.data._id
    alert("Dodano nowy kwas.")
  })
  .catch(function(error) {
    console.log(error);
    alert("Błąd.")
  })

}

function deleteData() {
  var id = document.getElementById("id").value
  axios
    .delete("http://vps487563.ovh.net:44444/api/v1/kwasy/"+id)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })

}
