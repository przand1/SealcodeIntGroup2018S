var sentence = " Home sweet home ";

var par=document.getElementById('paragraph-one');

var length = sentence.length;
var upper = sentence.toUpperCase();
var pos = sentence.charAt(10);
var index = sentence.indexOf('ee');
var lastIndex = sentence.lastIndexOf('e');
var sub = sentence.substring(8,14);
var trim = sentence.trim();
var repl = sentence.replace("me","w");

par.innerHTML=
"Nasz ciąg ma długość: "+ length+".<br/>"+
"Jeśli zmienimy wszystkie znaki na wielkie ciąg będzie wyglądać tak: "+upper+".<br/>"+
"Na 10. pozycji znajduje się znak: "+pos+".<br/>"+
"Ciąg 'ee' znajduje się na miejscu: "+index+".<br/>"+
"Ostatni indeks znaku 'e' to: "+lastIndex+".<br/>"+
"Znaki od 8 do 14 to: "+sub+".<br/>"+
"Po usunięciu niepotrzebnych spacji nasz ciąg wygląda tak: "+trim+".<br/>"+
"Po zmianie 'me' na 'w' nasz ciąg wygląda tak: "+repl+".<br/>";
