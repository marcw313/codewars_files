//find the shortest word given a string of words (i.e. a sentence)//


function findShort(s){
var vec = s.split(" ");
var ans = -1;
vec.forEach(function(x){
  if (ans === -1) { ans = x.length; }
  else if ( ans < x.length ) { }
  else { ans = x.length; }
});
return ans;
}

var sentence = "This is a test sentence to see if everything works properly";
findShort(sentence);  //should return 1
