const gifts = ['cat', 'game', 'socks']
const wrapped_gifts = wrapping(gifts)

function wrapping(gifts) {
  return gifts.map(gift => {
    const wrap = '*'.repeat(gift.length + 2)
    return wrap + '\n*' + gift + '*\n' + wrap
  })
}

console.log(wrapped_gifts)
 