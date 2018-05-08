function selfCheck(n) {
  if (tasks[n].checked) {
    tasks[n].checked=false;
  } else {
    tasks[n].checked=true;
  }
}
