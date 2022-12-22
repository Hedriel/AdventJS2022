const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let citiesToDeliver = giftsCities
  .filter( city => city <= maxGifts)
  .sort((a, b) => {return b-a})
  let deliveredGifts = 0

  console.log(citiesToDeliver)

  citiesToDeliver.forEach(city => {
    if (city <= maxGifts &&  maxGifts >= city+deliveredGifts) {
      deliveredGifts = deliveredGifts + city
    }
  });
  return deliveredGifts
}


/* while (giftedGift <= (giftsToGift<maxGifts?giftsToGift:maxGifts) && giftedGift <= maxGiftPerCity) {
  console.log(giftedGift)
  giftedGift++
} */
console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))