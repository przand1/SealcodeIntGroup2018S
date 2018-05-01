function slowo(s,n) {
  var ss
  var wynik = ""
  for (var i = 0; i < n; i++) {
    ss=s
    if(!((i+1)%2)) {
      ss=s.split("").reverse().join("")
    }
    if(!((i+1)%3)) {
      ss=ss.toUpperCase()
    }
    wynik+=(ss + "\n")
  }
    console.log(wynik)
}
