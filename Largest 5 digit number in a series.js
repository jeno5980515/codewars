function solution(digits){
  var max = -1 ;
  for ( var i = 0 ; i < digits.length - 4 ; i ++ ){
    var number = parseInt(digits.slice(i,i+5)) ;
    max = Math.max(number,max);
  }
  return max ;
}