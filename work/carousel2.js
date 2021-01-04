const track2 = document.querySelector('.carousel_track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel_button--right2');
const prevButton2 = document.querySelector('.carousel_button--left2');
const dotsNav2 = document.querySelector('.carousel_nav2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

//arrange slides next to one another
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';
//functions
const setSlidePosition2 = (slide2, index) => {
    slide2.style.left = slideWidth2 * index + 'px';
};
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX( -' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current-slide2');
    targetSlide2.classList.add('current-slide2');
};

const updateDots2 = (currentDot2, targetDot2) => {
    //move dot
    currentDot2.classList.remove('current-slide2');
    targetDot2.classList.add('current-slide2');
}

const hideShowArrows2 = (targetIndex2, prevButton2, nextButton2, slides2) => {
    if (targetIndex2 === 0) {
        prevButton2.classList.add('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
    } else if (targetIndex2 === slides2.length - 1) {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.add('is-hidden2');
    } else {
        prevButton2.classList.remove('is-hidden2');
        nextButton2.classList.remove('is-hidden2');
    }

}
//when I click left, move slides to left
const prev = e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const prevSlide2 = currentSlide2.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const prevdot2 = currentDot2.previousElementSibling;
    const prevIndex2 = slides2.findIndex(slide => slide === prevSlide2);

    moveToSlide2(track2, currentSlide2, prevSlide2);
    updateDots2(currentDot2, prevdot2);
    hideShowArrows2(prevIndex2, prevButton2, nextButton2, slides2);
}
prevButton2.addEventListener('click', prev);
//when I click right, move slides to the right
const next = e => {
    const currentSlide2 = track2.querySelector('.current-slide2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const nextdot2 = currentDot2.nextElementSibling;
    const nextIndex2 = slides2.findIndex(slide => slide === nextSlide2);
    moveToSlide2(track2, currentSlide2, nextSlide2);
    updateDots2(currentDot2, nextdot2);
    hideShowArrows2(nextIndex2, prevButton2, nextButton2, slides2);
}
nextButton2.addEventListener('click', next);

//when I click nav indicator, move to that slide 
dotsNav2.addEventListener('click', e => {
    //what indicator was clicked
    const targetDot2 = e.target.closest('button');

    if (!targetDot2) return;

    const currentSlide2 = track2.querySelector('.current-slide2');
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const targetIndex2 = dots2.findIndex(dot => dot === targetDot2);
    const targetSlide2 = slides2[targetIndex2];

    moveToSlide2(track2, currentSlide2, targetSlide2);
    updateDots2(currentDot2, targetDot2);
    hideShowArrows2(targetIndex2, prevButton2, nextButton2, slides2);

});
function target(tarindex){
    tarindex = 0;
}
// for every 2 seconds the carousel moves to the right
    setInterval(() => {
        const currentSlide2 = track2.querySelector('.current-slide2');
        const nextSlide2 = currentSlide2.nextElementSibling;
        const currentDot2 = dotsNav2.querySelector('.current-slide2');
        const nextdot2 = currentDot2.nextElementSibling;
        let nextIndex2 = slides2.findIndex(slide => slide === nextSlide2);
        moveToSlide2(track2, currentSlide2, nextSlide2);
        updateDots2(currentDot2, nextdot2);
        hideShowArrows2(nextIndex2, prevButton2, nextButton2, slides2);
        track2.style.transition = '0.4s ease-in-out';

        if (nextIndex2 >= 4 ){
            setTimeout(()=>{
                const currentSlide2 = track2.querySelector('.current-slide2');
                const currentDot2 = dotsNav2.querySelector('.current-slide2');
                const firstslide2 = track2.querySelector('.first2');
                const targetIndex2 = slides2.findIndex(slide => slide === firstslide2);
                const targetSlide2 = slides2[targetIndex2];
                const targetDot2 = dots2[targetIndex2];
                track2.style.transition = '0.2s ease-in-out';
                moveToSlide2(track2, currentSlide2, targetSlide2);
                updateDots2(currentDot2, targetDot2);
                hideShowArrows2(targetIndex2, prevButton2, nextButton2, slides2);
            }, 4000)
        }  
    }, 8000);  

 