// selectors
const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btns');

let currentSlide = 1;


// Js for images slider manual navigation

const manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        
        btns.forEach((btn) => {
        btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

//listeners
btns.forEach((btn, i) => {
  btn.addEventListener('click', ()=> {
    manualNav(i);
    currentSlide = i;
  });
});

//Js for autoplay nav
const repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    const repeater = () => {
        setTimeout(function(){
         [...active].forEach((activeSlide)=> {
             activeSlide.classList.remove('active');
         })


         slides[i].classList.add('active');
         btns[i].classList.add('active');
         i++;
         if(slides.length == i) {
             i = 0;
         }
         if(i >= slides.length){
             return
         }
         repeater();
        }, 10000);
    }
    repeater();
}
repeat();