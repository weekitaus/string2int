var str = 'Thi43s is352 my95047 stri32ng 120';
var concatString = "";
var string2Int = 0;

var getChar = str.split('');
for (var i = 0; i < getChar.length; i++) {
   if(getChar[i] == "0" ||  getChar[i] == "1" || getChar[i] == "2"||getChar[i] == "3" ||  getChar[i] == "4" || getChar[i] == "5"||getChar[i] == "6" ||  getChar[i] == "7" || getChar[i] == "8" || getChar[i] == "9"){
     concatString += getChar[i];
}
}
var numberString = concatString.split('');
for (var i = 0; i < numberString.length; i++) {
   string2Int +=  concatString[i] * (10 ** (concatString.length - (i+1)));
}

  console.log(typeof(string2Int), string2Int);
