// * * * * HAMBURGER ICON HOVER EFFECTS
$('.burgerIcon').hover(function() {
    TweenMax.to('.burgerLine:first-child', 0.2, {x: -10});
    TweenMax.to('.burgerLine:last-child', 0.2, {x: 10});
},

function() {
    TweenMax.to('.burgerLine:first-child', 0.2, {x: 0});
    TweenMax.to('.burgerLine:last-child', 0.2, {x: 0});
});

// * * * * NAV MENU TOGGLE - triggered by hamburger icon
// Note: autoAlpha makes an item that is declared "visibility: hidden" visible instead of opacity controls

var tlmenu = new TimelineMax({paused: true});

tlmenu.to('nav', 0.3, {autoAlpha: 1})
.staggerFromTo('nav li', 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1}, 0.1);

$('.burgerIcon').click(function() {
    tlmenu.play(0);
});

$('.closeButton').click(function() {
    tlmenu.reverse(0);
});

// * * * * HERO
TweenMax.fromTo('#hero h1', 0.6, { y: 80, opacity: 0}, { y: 0, opacity: 1, delay: 1});

TweenMax.fromTo('#hero .learnMoreButton', 0.6, { y: 80, opacity: 0}, { y: 0, opacity: 1, delay: 1.6, ease: Back.easeOut});