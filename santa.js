module.exports.deliverPresents = function (houses) {
  if (!houses.length ){ return 0 }
  
  var [first, ... rest] = houses

  console.log('Delivering presents to ' + first)
  module.exports.deliverPresents(rest)}



