const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
  boxes.sort((a, b) => a.l - b.l)
  for (let i = 0; i < boxes.length-1; i++) {
    if (    
      boxes[i].l >= boxes[i+1].l ||
      boxes[i].w >= boxes[i+1].w ||
      boxes[i].h >= boxes[i+1].h) {
        return false
    }
  }
  return true 
}


console.error(fitsInOneBox(boxes))