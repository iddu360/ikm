var slider = document.getElementById('slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');

line1.onclick = function(){
    slider.style.transform = 'translateX(0)';
    active.style.top ='0px';
}
line2.onclick = function(){
    slider.style.transform = 'translateX(-50%)';
    active.style.top ='100px';
}