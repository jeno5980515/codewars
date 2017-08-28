function isValidWalk(walk) {
  var x = 0 , y = 0 ;
  walk.forEach(function(el){
    switch ( el ){
      case 'n' :
        y ++ ;
        break ;
      case 's' :
        y -- ;
        break ;
      case 'w' :
        x -- ;
        break ;
      case 'e' :
        x ++ ;
        break ;
    }
  });
  if ( x === 0 && y === 0 && walk.length === 10 ){
    return true ;
  }
  return false ;
}