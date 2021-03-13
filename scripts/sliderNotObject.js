let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let slideItemActive = document.getElementById('slideItemActive');

let images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg'
];

prevButton.disabled = true;
let iSlider = 0;
slideItemActive.src = images[iSlider];
prevButton.addEventListener('click', function(event){
    if (iSlider > 1){
        iSlider--;
        slideItemActive.src = images[iSlider];
        nextButton.disabled = false;
    }else if (iSlider==1){
        iSlider--;
        slideItemActive.src = images[iSlider];
        prevButton.disabled = true;
    }else{
        console.log('error');
    }

    
});
nextButton.addEventListener('click', function(event){
    if (iSlider<images.length-2){
        iSlider++;
        slideItemActive.src = images[iSlider];
        prevButton.disabled = false;
    }else if(iSlider === images.length-2){
        iSlider++;
        slideItemActive.src = images[iSlider];
        nextButton.disabled = true;
    }else{
        console.log('error');

    }
});