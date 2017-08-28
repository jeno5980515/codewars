var maxSequence = function(arr){
  var max = 0 ;
  var sum = 0 ;
  for ( var i = 0 ; i < arr.length ; i ++ ){
    sum += arr[i] ;
    if ( sum > max ){
      max = sum ;
    }
    if ( sum < 0 ){
      sum = 0 ;
    }
  }
  return max ;
}