var slideIndex = 1

function showSlides(n){
    var i;
    var  slide = document.getElementsByClassName("slide");

    for(i=0; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    if (n > slide.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slide.length;
    }

    slide[slideIndex -1].style.display = "block";


}

function plusSlides(n){
    slideIndex +=n;
    showSlides(slideIndex);
}

setInterval(plusSlides,3000,1);