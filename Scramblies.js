function scramble(str1, str2) {
  var num1 = new Array(26) ;
  var num2 = new Array(26) ;
  for ( var i = 0 ; i < 26 ; i ++ ){
    num1[i] = num2[i] = 0 ;
  }
  for ( var i = 0 ; i < str1.length ; i ++ ){
    num1[str1[i].charCodeAt()-97] ++ ;
  }
  for ( var i = 0 ; i < str2.length ; i ++ ){
    num2[str2[i].charCodeAt()-97] ++ ;
  }
  for ( var i = 0 ; i < num2.length ; i ++ ){
    if ( num2[i] > num1[i] )
      return false ;
  }
  return true ;
}