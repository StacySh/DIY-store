
$(function(){ 
    let navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 
 });

 $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  appendArrows:'.slick-list',
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1999,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        
        if (pageYOffset > 100) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});
  /* end begin Back to Top button  */