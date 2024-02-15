const nav = document.querySelector('.menu-de-nav')

document.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        if(!nav.classList.contains('nav-sticky')) {
            nav.classList.add('nav-sticky');
        }
    } else {
        if(nav.classList.contains('nav-sticky')) {
            nav.classList.remove('nav-sticky');
        }
    }


    // nav.classList.add('nav-sticky');
    // nav.classList.remove('nav-sticky');
} )

// function myFunction() {
//     const element = document.querySelector(".menu-de-nav");
//     let y = element.scrollTop;
//     document. ("demo").innerHTML = Vertically: " + y.toFixed();
//     }

