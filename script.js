const page = document.getElementById('page_style');

/*setInterval(spaceBack, 10);

function spaceBack() {
    const blackPoint = document.createElement('i');

    blackPoint.classList.add('fa-bowling-ball');
    blackPoint.style.width = (Math.random() * 7) + 'px';
    blackPoint.style.height = blackPoint.style.width;
    blackPoint.style.background = 'white';
    blackPoint.style.animationDuration = Math.random() * 4 + 's';
    blackPoint.style.top = Math.random() * window.innerHeight + 'px';


    page.appendChild(blackPoint)
    setTimeout(() => {
        blackPoint.remove();
    }, 3000)
}

/*Rotation navbar*/
    const $page = $('.moving-page');


$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});
$('.menu-item').on('click', function(){
  $page.removeClass('shazam');
})



// ========= Anim landing page ====== //
const titleSpan = document.querySelectorAll('h1 span');
const logo = document.getElementById('logo');
const logoSocial = document.querySelectorAll('.social-logo');
const l1 = document.querySelectorAll('.l1');
const l2 = document.querySelectorAll('.l2');

window.addEventListener('load', () => {
  
  const timeLine = gsap.timeline({paused: true});

  timeLine
    .staggerFrom(titleSpan, 0.4, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(l1, 1, {width: 0, ease: "power2.out"}) 
    .from(l2, 1, {width: 0, ease: "power2.out"}, "-=1") 

  timeLine.play();
});

