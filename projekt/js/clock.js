function clock() {

  var myDate=new Date();

  var month=myDate.getMonth()+1;
  var day=myDate.getDate();
  var hours=myDate.getHours();
  var minutes=myDate.getMinutes();
  var seconds=myDate.getSeconds();
  
  if (month<10) month="0"+month;
  if (day<10) day="0"+day;
  if (hours<10) hours="0"+hours;
  if (minutes<10) minutes="0"+minutes;
  if (seconds<10) seconds="0"+seconds;

  document.getElementById("currentDate").innerHTML="<h2>"+day
    +"."+month+"."+myDate.getFullYear()+"</h2>"
    +"<h3>"+hours+":"+minutes+":"+seconds+"</h3>";

    setTimeout("clock()",1000);
}
