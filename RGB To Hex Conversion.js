function rgb(r, g, b){
  r = fix(r);
  g = fix(g);
  b = fix(b);
  return pad(r.toString(16).toUpperCase()) + pad(g.toString(16).toUpperCase()) + pad(b.toString(16).toUpperCase())
}

function fix(n){
  if ( n >= 255 ){
    return 255 ;
  } 
  if ( n <= 0 ){
    return 0 ;
  }
  return n ;
}

function pad(s){
  var newS = s ;
  while ( newS.length < 2 ){
    newS = '0' + newS ;
  }
  return newS ;
}