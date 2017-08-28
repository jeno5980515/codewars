function iqTest(numbers){
  numbers = numbers.split(' ') ;
  var isOddIndex = -1 , isEvenIndex = -1 ;
  for ( var i = 0 ; i < numbers.length ; i ++ ){
    if ( numbers[i] % 2 === 0 ){
      if ( isEvenIndex !== -1 && isOddIndex !== -1 ){
        return isOddIndex + 1 ;
      }
      isEvenIndex = i ;
    } else {
      if ( isEvenIndex !== -1 && isOddIndex !== -1 ){
        return isEvenIndex + 1 ;
      }
      isOddIndex = i ;
    }
  }
  return numbers.length ;
}