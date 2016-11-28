
var num = 493193;


function digital_root(n) {
  var total = 0;
  var numArray = n.toString().split("");
  if (numArray.length === 1){
    var newNum = n;
    return newNum;
  }
  else{
    for (i = 0; i < numArray.length; i++){
      var val = Number(numArray[i]);
      total += val;
    }
  return digital_root(total);
  }
}


digital_root(num);
