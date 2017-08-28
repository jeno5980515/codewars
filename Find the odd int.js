function findOdd(A) {
  var num = A[0] ;
  for ( var i = 1 ; i < A.length ; i ++ ){
    num ^= A[i] ;
  }
  return num;
}