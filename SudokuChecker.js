
function doneOrNot(board){
  var amt = 45;
  var passed = false;
  var b = [].concat.apply([], board);
  for (var i = 0; i < 9; i++){
    var sum = board[i].reduce(function(a, b) {return a + b;}, 0);
    if (sum !== amt){return("Try again!");}
    if (b[i]+b[i+9]+b[i+18]+b[i+27]+b[i+36]+b[i+45]+b[i+54]+b[i+63]+b[i+72] !== amt){return("Try again!")}
  }
}



doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
           [6, 7, 2, 1, 9, 5, 3, 4, 8],
           [1, 9, 8, 3, 4, 2, 5, 6, 7],
           [8, 5, 9, 7, 6, 1, 4, 2, 3],
           [4, 2, 6, 8, 5, 3, 7, 9, 1],
           [7, 1, 3, 9, 2, 4, 8, 5, 6],
           [9, 6, 1, 5, 3, 7, 2, 8, 4],
           [2, 8, 7, 4, 1, 9, 6, 3, 5],
           [3, 4, 5, 2, 8, 6, 1, 7, 9]])
