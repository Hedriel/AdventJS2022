const giftsCities = [12, 3, 11, 5, 7, 50] //38
const maxGifts = 20
const maxCities = 3

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let sortedGiftsCities = giftsCities.sort((a, b) => b - a).filter(a => a <= maxGifts)
  let deliveredGifts = 0
  
  const giftsCity = sortedGiftsCities[0];
  const sortedGiftCitiesSlice = sortedGiftsCities.slice(1);
  let currentDeliveredGifts = giftsCity;
  
  for (let i = 0; i < sortedGiftCitiesSlice.length; i++) {
    if (sortedGiftsCities.length == 0) return 0
    if (sortedGiftsCities[0] == maxGifts || maxCities == 1 ) return sortedGiftsCities[0]

    const giftsToDeliver = sortedGiftCitiesSlice[i];    
    currentDeliveredGiftsWannaBe = currentDeliveredGifts + giftsToDeliver

    if (currentDeliveredGiftsWannaBe <= maxGifts) {
      deliveredGifts = currentDeliveredGiftsWannaBe
    }
   
  }
  return deliveredGifts
}

  /*   let giftsToGift = giftsCities.reduce((a,b) => a + b)
    let giftedGift = 0
  
      while (giftedGift <= (giftsToGift<maxGifts?giftsToGift:maxGifts) && giftedGift <= maxGiftPerCity) {
        console.log(giftedGift)
        giftedGift++
      }
      return giftedGift -1 */


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20