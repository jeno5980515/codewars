function filter_list(l) {
  return l.filter(function(el){
    if ( typeof el === 'number' ){
      return true ;
    }
  })
}