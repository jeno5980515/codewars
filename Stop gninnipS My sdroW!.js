function spinWords(str){
  return str.split(' ').map(function(el){
    if ( el.length >= 5 ) return el.split('').reverse().join('') ;
    return el ;
  }).join(' ');
}