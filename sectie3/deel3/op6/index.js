const object = {
  appel: 'lekker',
  peer: 'ranzig',
  banaan: 'geen mening',
  getAppelPeerBanaan: function(){
      return `ik vind appels ${object.appel} maar uh ja idc`
  }
}

console.log(object.getAppelPeerBanaan);
