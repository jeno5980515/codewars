function squareDigits(num){
  return parseInt(num.toString().split('').map(function(el){
    return el * el ;
  }).join(''));
}