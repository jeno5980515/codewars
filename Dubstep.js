function songDecoder(song){
  return song.split('WUB').filter(function(el){
    if ( el === 'WUB' || el === '' )
      return false ;
    return true ;
  }).join(' ');
}