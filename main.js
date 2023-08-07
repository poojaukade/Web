// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled");

    }
}

/*document.addEventListener("DOMContentLoaded", function() {*/
    const navbarTogglerBtn = document.getElementById("navbar-toggler-btn");
    const navbarSvg = document.getElementById("navbar-svg");
    const navbarCollapse = document.getElementById("navbarNav");

    navbarTogglerBtn.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
/*});*/

//nav Hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a)
{
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show"); /*in bootstrap show is bydefault property of collapse class */
    })
})




//Owl Carousel
jquery
$(document).ready(function()
{
    $('.client-slider-section').owlCarousel({
       items: 4,
        loop:true,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6  
            }
        }
    });

});
