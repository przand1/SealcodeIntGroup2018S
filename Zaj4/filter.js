function filter(t,fnc) {

  var tab=[];
  for (var i = 0; i < t.length; i++) {
    if(fnc(t[i])) {
      tab.push(t[i]);
    }
  }

  return tab;

}

not_equal = function(x) {
  return x !== 3;
}

var a = filter([1,2,3,'3',4,5],not_equal);

console.log(a);
