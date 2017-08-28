function findNb(m) {
    var sum = 0 ;
    for ( var i = 1 ; sum <= m ; i ++ ){
      sum += i * i * i ;
      if ( sum === m ){
        return i ;
      } 
    }
    return (-1);
}