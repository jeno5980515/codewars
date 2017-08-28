function array_diff(a, b) {
  return a.filter(function(el){
    for ( var i = 0 ; i < b.length ; i ++ ){
      if ( el === b[i] )
        return false ;
    }
    return true ;
  });
}