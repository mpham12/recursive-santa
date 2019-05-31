export function deliverPresents(houses) {
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    const middle = Math.round(houses.length / 2)

    const firstHalf = houses.slice(0, middle)
    const secondHalf = houses.slice(middle, houses.length)

    deliverPresents(firstHalf)
    deliverPresents(secondHalf)
  }
}
