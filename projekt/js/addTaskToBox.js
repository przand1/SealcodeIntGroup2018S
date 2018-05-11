function addTaskToBox(text) {

  var box=document.getElementById('box');

  var el=document.createElement("div");
  el.className="listEl";
  el.textContent=text;

  var im=document.createElement("input");
  //im.src="img/checkOff.png";
  im.type="checkbox";
  im.className="check"
  im.addEventListener("click",function(){
    /*
    if(this.getAttribute("src")=="img/checkOff.png") {
        this.src="img/checkOn.png";
    } else {
      this.src="img/checkOff.png";
    }
    */
    if (this.getAttribute("checked")==true) {
      this.checked=false;
    } else {
      his.checked=true;
    }
  });


  var del=document.createElement("input");
  del.type="button";
  del.value="X";
  del.className="delete";
  del.addEventListener("click",function(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  })


  el.appendChild(im);
  el.appendChild(del);

  box.appendChild(el);
}
