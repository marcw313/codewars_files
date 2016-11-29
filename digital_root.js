var num = 16;


function digital_root(n) {

  var numArray = n.toString().split(""); //split number into array of single digits
  if (numArray.length === 1){
    return Number(numArray[0]);
  }
  else{
    var total = 0; //re-init var each time you run function else block
    for (i = 0; i < numArray.length; i++){
      var val = Number(numArray[i]);
      total += val;
    }
  return digital_root(total); //recursive portion. Call digital_root again on previous total
  }
}


digital_root(num);
