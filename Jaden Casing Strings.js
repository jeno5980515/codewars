String.prototype.toJadenCase = function () {
  return this.split(' ').map(function(el){
    return el[0].toUpperCase() + el.slice(1) ;
  }).join(' ')
};