const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLenth =slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
slideLeft.style.top = `${(slidesLenth - 1) * 100}vh`

upButton.addEventListener('click', ()=> changeslide('up'))
downButton.addEventListener('click', ()=> changeslide('down'))