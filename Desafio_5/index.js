const giftsCities = [50, 70, 30]
const maxGifts = 100
const maxCities = 2

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let citiesToDeliver = giftsCities
  .filter(city => city < maxGifts)
  .sort((a, b) => {return b-a})
  .slice(0, maxCities) 
  let deliveredGifts = 0

  citiesToDeliver.forEach(city => {
    if (city <= maxGifts &&  maxGifts >= city+deliveredGifts) {
      deliveredGifts = deliveredGifts+city
    }
  });
  return deliveredGifts
}


/* while (giftedGift <= (giftsToGift<maxGifts?giftsToGift:maxGifts) && giftedGift <= maxGiftPerCity) {
  console.log(giftedGift)
  giftedGift++
} */
getMaxGifts([50, 70, 30], 100, 2)
 // 70