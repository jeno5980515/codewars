function validatePIN (pin) {
  if ( /^[0-9]+$/.test(pin) === false ) return false ;
  if ( pin.length !== 4 && pin.length !== 6 ) return false ;
  return true ;
}