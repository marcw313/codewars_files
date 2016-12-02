
function doneOrNot(board){
  var amt = 45; //this is 1 + 2 + ... + 8 + 9
  var passed = false;
  var b = [].concat.apply([], board);
  for (var i = 0; i < 9; i++){
    var sum = board[i].reduce(function(a, b) {return a + b;}, 0); //sum up the rows
    if (sum !== amt){return("Try again!");}  //check the sum
    if (b[i]+b[i+9]+b[i+18]+b[i+27]+b[i+36]+b[i+45]+b[i+54]+b[i+63]+b[i+72] !== amt){return("Try again!");} // sum up each column and check against amount
  } 
//now analyze the blocks elements
  for (var j = 0; j < 7; j += 3){
    if (b[j]+b[j+1]+b[j+2]+b[j+9]+b[j+10]+b[j+11]+b[j+18]+b[j+19]+b[j+20] !== amt){return("Try again!");}
    if (b[j+27]+b[j+28]+b[j+29]+b[j+36]+b[j+37]+b[j+38]+b[j+45]+b[j+46]+b[j+47] !== amt){return("Try again!");}
    if (b[j+54]+b[j+55]+b[j+56]+b[j+63]+b[j+64]+b[j+65]+b[j+72]+b[j+73]+b[j+74] !== amt){return("Try again!");}
  }
  return("Finished!")
}

//run a finished sudoku to check//
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
           [6, 7, 2, 1, 9, 5, 3, 4, 8],
           [1, 9, 8, 3, 4, 2, 5, 6, 7],
           [8, 5, 9, 7, 6, 1, 4, 2, 3],
           [4, 2, 6, 8, 5, 3, 7, 9, 1],
           [7, 1, 3, 9, 2, 4, 8, 5, 6],
           [9, 6, 1, 5, 3, 7, 2, 8, 4],
           [2, 8, 7, 4, 1, 9, 6, 3, 5],
           [3, 4, 5, 2, 8, 6, 1, 7, 9]])
