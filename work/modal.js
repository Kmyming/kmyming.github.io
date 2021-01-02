//when slide is clicked, set display to flex
let display = document.querySelector('.bg-modal');
let street = document.getElementById('street-content');
let landscape = document.getElementById('landscape-content');
let travels = document.getElementById('travel-content');
let architecture = document.getElementById('architecture-content');
let events = document.getElementById('events-content');
let microbit = document.getElementById('microbit-content');
let website = document.getElementById('website-content');
let internship = document.getElementById('internships-content');
let vietnam = document.getElementById('vietnambg');
let usa = document.getElementById('usabg');
let vietnamwords = document.getElementById('vietnamnav');
let usawords = document.getElementById('usanav');
console.log('running');

document.getElementById('carousel1').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'flex';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel2').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'flex';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel3').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'flex';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel4').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'flex';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel5').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'flex';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel_coding1').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'flex';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('tinkertankerautolights').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'flex';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('tinkertankernoisemonitor').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'flex';
    website.style.display = 'none';
    internship.style.display = 'none';
})
document.getElementById('carousel_coding2').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'flex';
    internship.style.display = 'none';
})
document.getElementById('carousel_internships').addEventListener('click', function(){
    display.style.display = "flex";
    street.style.display = 'none';
    landscape.style.display = 'none';
    travels.style.display = 'none';
    architecture.style.display = 'none';
    events.style.display = 'none';
    microbit.style.display = 'none';
    website.style.display = 'none';
    internship.style.display = 'flex';
})
// when cross is clicked, set display to none
document.querySelector('.cross').addEventListener("click", function() {
    display.style.display = "none";
    console.log('close');
});
document.getElementById('vietnamnav').addEventListener("mouseover",function(){
    vietnam.style.opacity = 0.5;
    vietnamwords.style.color = 'maroon';
    vietnam.style.transition = '0.2s';
})
document.getElementById('usanav').addEventListener("mouseover",function(){
    usa.style.opacity = 0.5;
    usa.style.color = 'maroon';
    usa.style.transition = '0.2s';
})
document.getElementById('vietnamnav').addEventListener("mouseout",function(){
    vietnam.style.opacity = 0;
    vietnamwords.style.color = 'black';
    vietnam.style.transition = '0.2s';
})
document.getElementById('usanav').addEventListener("mouseout",function(){
    usa.style.opacity = 0;
    usa.style.color = 'black';
    usa.style.transition = '0.2s';
})