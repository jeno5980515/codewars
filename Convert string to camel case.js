function toCamelCase(str){
  if ( str.indexOf('-') !== -1 ){
    return str.split('-').map(function(el,index){
      if ( index !== 0 ){
        return el[0].toUpperCase() + el.slice(1) ;
      }
      return el ;
    }).join('') ;
  } else {
    return str.split('_').map(function(el,index){
      if ( index !== 0 ){
        return el[0].toUpperCase() + el.slice(1) ;
      }
      return el ;
    }).join('') ;
  }
}