if (counter2 === slides.length -1){
const currentSlide2 = track2.querySelector('.current-slide2');
const currentDot2 = dotsNav2.querySelector('.current-slide2');
const targetIndex2 = dots2.findIndex(dot => dot=== 0);
const targetSlide2 = slides2[0];
const targetDot2 = slides2[0];
moveToSlide2(track2, currentSlide2, targetSlide2);
updateDots2(currentDot2, targetDot2);
hideShowArrows2(targetIndex2, prevButton2, nextButton2, slides2);
counter2 = 1;  
} else {
    setInterval(function(){
        const currentSlide2 = track2.querySelector('.current-slide2');
        const nextSlide2 = currentSlide2.nextElementSibling;
        const currentDot2 = dotsNav2.querySelector('.current-slide2');
        const nextdot2 = currentDot2.nextElementSibling;
        const nextIndex2 = slides2.findIndex(slide => slide === nextSlide2);
        moveToSlide2(track2, currentSlide2, nextSlide2);
        updateDots2(currentDot2, nextdot2);
        hideShowArrows2(nextIndex2, prevButton2, nextButton2, slides2);
        ++counter2
        console.log(counter2);
    }, 2000);
};


let counter2 = 1;
let currentIndex2 = slides2.findIndex(slide => slide === currentSlide2);
console.log(currentIndex2);
if (currentIndex2 = slides2.length -1){
        console.log(3);  
        const currentSlide2 = track2.querySelector('.current-slide2');
        const prevSlide2 = currentSlide2.previousElementSibling;
        const currentDot2 = dotsNav2.querySelector('.current-slide2');
        const prevdot2 = currentDot2.previousElementSibling;
        const prevIndex2 = slides2.findIndex(slide => slide === prevSlide2);
    
        moveToSlide2(track2, currentSlide2, prevSlide2);
        updateDots2(currentDot2, prevdot2);
        hideShowArrows2(prevIndex2, prevButton2, nextButton2, slides2);
        counter2 = 1;
    } else{
        setInterval(function(){
            const currentSlide2 = track2.querySelector('.current-slide2');
            const nextSlide2 = currentSlide2.nextElementSibling;
            const currentDot2 = dotsNav2.querySelector('.current-slide2');
            const nextdot2 = currentDot2.nextElementSibling;
            const nextIndex2 = slides2.findIndex(slide => slide === nextSlide2);
            moveToSlide2(track2, currentSlide2, nextSlide2);
            updateDots2(currentDot2, nextdot2);
            hideShowArrows2(nextIndex2, prevButton2, nextButton2, slides2);
            ++counter2
            console.log(counter2);
            console.log(slides2.length);
        }, 2000);  
    }

let targetIndex2 = 0;
const index = slides2.length -1;
while (targetIndex2 < 4 && targetIndex2 > 0) {
 
};
if (targetIndex2 = index){
    const targetDot2 = 0;
    const currentSlide2 = track2.querySelector('.current-slide2');
    const currentDot2 = dotsNav2.querySelector('.current-slide2');
    const targetIndex2 = dots2.findIndex(dot => dot === targetDot2);
    const targetSlide2 = slides2[targetIndex2];

    moveToSlide2(track2, currentSlide2, targetSlide2);
    updateDots2(currentDot2, targetDot2);
    hideShowArrows2(targetIndex2, prevButton2, nextButton2, slides2);
    console.log(targetDot2);
};

const targetDot2 = 0;
const currentSlide2 = track2.querySelector('.current-slide2');
const currentDot2 = dotsNav2.querySelector('.current-slide2');
const targetIndex2 = dots2.findIndex(dot => dot === targetDot2);
const targetSlide2 = slides2[targetIndex2];
track2.style.transition = 'none';
moveToSlide2(track2, currentSlide2, targetSlide2);
updateDots2(currentDot2, targetDot2);
hideShowArrows2(targetIndex2, prevButton2, nextButton2, slides2);