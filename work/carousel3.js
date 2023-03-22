const track3 = document.querySelector('.carousel_track3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.carousel_button--right3');
const prevButton3 = document.querySelector('.carousel_button--left3');
const dotsNav3 = document.querySelector('.carousel_nav3');
const dots3 = Array.from(dotsNav3.children);

const slideWidth3 = slides3[0].getBoundingClientRect().width;

//arrange slides next to one another
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
//functions
const setSlidePosition3 = (slide3, index) => {
    slide3.style.left = slideWidth3 * index + 'px';
};
slides3.forEach(setSlidePosition3);

const moveToSlide3 = (track3, currentSlide3, targetSlide3) => {
    track3.style.transform = 'translateX( -' + targetSlide3.style.left + ')';
    currentSlide3.classList.remove('current-slide3');
    targetSlide3.classList.add('current-slide3');
};

const updateDots3 = (currentDot3, targetDot3) => {
    //move dot
    currentDot3.classList.remove('current-slide3');
    targetDot3.classList.add('current-slide3');
}

const hideShowArrows3 = (targetIndex3, prevButton3, nextButton3, slides3) => {
    if (targetIndex3 === 0) {
        prevButton3.classList.add('is-hidden3');
        nextButton3.classList.remove('is-hidden3');
    } else if (targetIndex3 === slides3.length - 1) {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.add('is-hidden3');
    } else {
        prevButton3.classList.remove('is-hidden3');
        nextButton3.classList.remove('is-hidden3');
    }

}
//when I click left, move slides to left
const prev2 = e => {
    const currentSlide3 = track3.querySelector('.current-slide3');
    const prevSlide3 = currentSlide3.previousElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const prevdot3 = currentDot3.previousElementSibling;
    const prevIndex3 = slides3.findIndex(slide => slide === prevSlide3);

    moveToSlide3(track3, currentSlide3, prevSlide3);
    updateDots3(currentDot3, prevdot3);
    hideShowArrows3(prevIndex3, prevButton3, nextButton3, slides3);
}
prevButton3.addEventListener('click', prev2);
//when I click right, move slides to the right
const next2 = e => {
    const currentSlide3 = track3.querySelector('.current-slide3');
    const nextSlide3 = currentSlide3.nextElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const nextdot3 = currentDot3.nextElementSibling;
    const nextIndex3 = slides3.findIndex(slide => slide === nextSlide3);
    moveToSlide3(track3, currentSlide3, nextSlide3);
    updateDots3(currentDot3, nextdot3);
    hideShowArrows3(nextIndex3, prevButton3, nextButton3, slides3);
}
nextButton3.addEventListener('click', next2);

//when I click nav indicator, move to that slide 
dotsNav3.addEventListener('click', e => {
    //what indicator was clicked
    const targetDot3 = e.target.closest('button');

    if (!targetDot3) return;

    const currentSlide3 = track3.querySelector('.current-slide3');
    const currentDot3 = dotsNav3.querySelector('.current-slide3');
    const targetIndex3 = dots3.findIndex(dot => dot === targetDot3);
    const targetSlide3 = slides3[targetIndex3];

    moveToSlide3(track3, currentSlide3, targetSlide3);
    updateDots3(currentDot3, targetDot3);
    hideShowArrows3(targetIndex3, prevButton3, nextButton3, slides3);

});
// for every 2 seconds the carousel moves to the right
    setInterval(() => {
        const currentSlide3 = track3.querySelector('.current-slide3');
        const nextSlide3 = currentSlide3.nextElementSibling;
        const currentDot3 = dotsNav3.querySelector('.current-slide3');
        const nextdot3 = currentDot3.nextElementSibling;
        let nextIndex3 = slides3.findIndex(slide => slide === nextSlide3);
        moveToSlide3(track3, currentSlide3, nextSlide3);
        updateDots3(currentDot3, nextdot3);
        hideShowArrows3(nextIndex3, prevButton3, nextButton3, slides3);
        track3.style.transition = '0.4s ease-in-out';

        if (nextIndex3 >= 1 ){
            setTimeout(()=>{
                const currentSlide3 = track3.querySelector('.current-slide3');
                const currentDot3 = dotsNav3.querySelector('.current-slide3');
                const firstslide3 = track3.querySelector('.first3');
                const targetIndex3 = slides3.findIndex(slide => slide === firstslide3);
                const targetSlide3 = slides3[targetIndex3];
                const targetDot3 = dots3[targetIndex3];
                track3.style.transition = '0.2s ease-in-out';
                moveToSlide3(track3, currentSlide3, targetSlide3);
                updateDots3(currentDot3, targetDot3);
                hideShowArrows3(targetIndex3, prevButton3, nextButton3, slides3);
            }, 4000)
        }  
    }, 8000);  

 