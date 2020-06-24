let log = console.log

let arrows = document.querySelectorAll('.arrow')
let slider = document.querySelector('#slider')

let count = 0
log(count)
arrows.forEach(arrow => 
  arrow.addEventListener('click', function() {
    if ( arrow.id == 'left' ) {
      if (count == 0) {
        count = 2
      } else {
        count--
      }
    } else {
      if (count == 2) {
        count = 0
      } else {
        count ++
      }
    }
    slider.style.background = `url('images/cat_${count}.png') center no-repeat`
    slider.style.backgroundSize =  "100% 100%";
    
  })
  )