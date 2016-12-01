// Change all letters at even locations to be Uppercase (i.e. "this is a string" -> "ThIs Is A StRiNg"

function toWeirdCase(string){
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++)
  {
    var word = words[i].split("");
    for (var j = 0; j < words[i].length; j++)
    {
      if (j%2 === 0)
      {
        word[j] = word[j].toUpperCase();
      }
    }
    words[i] = word.join("");
  }
  return (words.join(" "));
}

toWeirdCase("this is a string");
