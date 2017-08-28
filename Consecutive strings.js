function longestConsec(strarr, k) {
  if ( strarr.length < k ) return '' ;
  var maxIndex = -1 , maxLen = 0 ;
  for ( var i = 0 ; i < strarr.length - k + 1 ; i ++ ){
    for ( var j = i , nowLen = 0 ; j < k + i ; j ++ ){
      nowLen += strarr[j].length ; 
    }
    if ( nowLen > maxLen ){
      maxLen = nowLen ;
      maxIndex = i ;
    }
  }
  var str = '' ;
  for ( var i = maxIndex ; i < k + maxIndex ; i ++ ){
    str += strarr[i] ;
  }
  return str ;
}