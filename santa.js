function deliverPresents(houses) {
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var middle = Math.round(houses.length / 2)

    var firstHalf = houses.slice(0, middle)
    var secondHalf = houses.slice(middle, houses.length)

    deliverPresents(firstHalf)
    deliverPresents(secondHalf)
  }
}

module.exports = { deliverPresents }
