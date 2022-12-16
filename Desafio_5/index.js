const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => {return b-a})
  let maxGiftPerCity = giftsCities.slice(0,maxCities).reduce((a,b) => a + b)
  let giftsToGift = giftsCities.reduce((a,b) => a + b)
  let giftedGift = 0
    while (giftedGift <= (giftsToGift<maxGifts?giftsToGift:maxGifts) && giftedGift <= maxGiftPerCity) {
      console.log(giftedGift)
      giftedGift++
    }
    return giftedGift -1
}


getMaxGifts([50, 70], 100, 1) // 70