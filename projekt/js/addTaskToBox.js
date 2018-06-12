function addTaskToBox(text,_id,done) {//TODO argument:checked

  var box=document.getElementById('box');

  var el=document.createElement("div");
  el.className="listEl";
  el.id=_id

  var textbox=document.createElement("div");
  textbox.textContent=text
  textbox.className="text"

  var im=document.createElement("input");
  //im.src="img/checkOff.png";
  im.type="checkbox";
  im.className="check";
  im.checked=done
  im.addEventListener("click",function(){
    var checked = this.checked;
    var url = "http://vps487563.ovh.net:55555/api/v1/to_do/tasks/"+this.parentNode.parentNode.id
    axios
      .put(url,{
        done: checked
      })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  })


  var del=document.createElement("input");
  del.type="button";
  del.value="X";
  del.className="delete";
  del.addEventListener("click",function(){
    var url="http://vps487563.ovh.net:55555/api/v1/to_do/tasks/"+this.parentNode.parentNode.id
    var node = this
    axios
    .delete(url)
    .then(function(response) {
      console.log(response);
      node.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode)
    })
    .catch(function(error) {
      console.log(error);
    })
    // console.log(this.parentNode.id);
    // console.log(typeof this.parentNode.id);
  })


  textbox.appendChild(im);
  textbox.appendChild(del);
  el.appendChild(textbox)

  box.appendChild(el);
}
