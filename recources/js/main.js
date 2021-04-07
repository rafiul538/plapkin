/**
  menu
**/
function openMenu(){
    document.getElementById('navbar').style.width = '100%';
};

function closeMenu(){
    document.getElementById('navbar').style.width = '0%';
};

$('.next-section a, .menu-container ul li a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500)
    return false
});

// Mixitup

var mixer = mixitup('.portfolio-grid');

//wow
new WOW().init();