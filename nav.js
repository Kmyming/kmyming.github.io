// when menu is clicked, disappear and nav bar appears
let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar2');
let textselect = document.querySelector('.textselect');
let icon1 = document.getElementById('diamond1');
let icon2 = document.getElementById('diamond2');
let icon3 = document.getElementById('diamond3');
let icon4 = document.getElementById('diamond4');
let icon5 = document.getElementById('diamond5');
let lefticon = document.querySelector('.lefticon');

document.getElementById('menu').addEventListener('click', function(){
    menu.style.display = 'none';
    menu.style.transition = '0.2s ease-in-out';
    navbar.style.transform = 'translateX(+297px)';
    navbar.style.transition = '0.4s ease-in-out';
});
document.querySelector('.lefticon').addEventListener('click', function(){
    navbar.style.transform = 'translateX(-297px)';
    navbar.style.transition = '0.4s ease-in-out';
    menu.style.display = 'block';
    menu.style.transition = '0.2s ease-in-out';
});
// when text is hovered over, set diamond display to inline
document.getElementById('text1').addEventListener('mouseover', function (){
    icon1.style.display = 'inline';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
    icon1.style.transition = '0.2s ease-in-out'
});
document.getElementById('text2').addEventListener('mouseover', function (){
    icon2.style.display = 'inline';
    icon1.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
    icon2.style.transition = '0.2s ease-in-out'
});
document.getElementById('text3').addEventListener('mouseover', function (){
    icon3.style.display = 'inline';
    icon2.style.display = 'none';
    icon1.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
    icon3.style.transition = '0.2s ease-in-out'
});
document.getElementById('text4').addEventListener('mouseover', function (){
    icon4.style.display = 'inline';
    icon3.style.display = 'none';
    icon2.style.display = 'none';
    icon1.style.display = 'none';
    icon5.style.display = 'none';
    icon4.style.transition = '0.2s ease-in-out'
});
document.getElementById('text5').addEventListener('mouseover', function (){
    icon5.style.display = 'inline';
    icon4.style.display = 'none';
    icon3.style.display = 'none';
    icon2.style.display = 'none';
    icon1.style.display = 'none';
    icon5.style.transition = '0.2s ease-in-out'
});
document.getElementById('text1').addEventListener('mouseout', function (){
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
});
document.getElementById('text2').addEventListener('mouseout', function (){
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
});
document.getElementById('text3').addEventListener('mouseout', function (){
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
});
document.getElementById('text4').addEventListener('mouseout', function (){
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
});
document.getElementById('text5').addEventListener('mouseout', function (){
    icon1.style.display = 'none';
    icon2.style.display = 'none';
    icon3.style.display = 'none';
    icon4.style.display = 'none';
    icon5.style.display = 'none';
});