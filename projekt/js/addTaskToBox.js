function addTaskToBox(text,_id) {//TODO argument:checked

  var box=document.getElementById('box');

  var el=document.createElement("div");
  el.className="listEl";
  el.textContent=text;
  el.id=_id

  var im=document.createElement("input");
  //im.src="img/checkOff.png";
  im.type="checkbox";
  im.className="check";


  var del=document.createElement("input");
  del.type="button";
  del.value="X";
  del.className="delete";
  del.addEventListener("click",function(){
    var v="http://vps487563.ovh.net:55555/api/v1/to_do/tasks/"+this.parentNode.id
    console.log(v);
    axios
    .delete(v)
    .then(function(response) {
      console.log(response);
      this.parentNode.parentNode.removeChild(this.parentNode);
    })
    .catch(function(error) {
      console.log(error);
    })
    // console.log(this.parentNode.id);
    // console.log(typeof this.parentNode.id);
  })


  el.appendChild(im);
  el.appendChild(del);

  box.appendChild(el);
}
function deleteThis(d) {

  var v = "http://vps487563.ovh.net:55555/api/v1/to_do/tasks/"+d.toString()
  axios
    .delete(v)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
}
