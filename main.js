const header = document.querySelector(".page-header");
// const toggleClass = "is-sticky";

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset;
  // console.log(currentScroll);
  if (currentScroll > 150) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
});
// --------------------slide--------------
$('.scrollTo').click(function() {

  var getElem = $(this).attr('href');

  var targetDistance = 10;
 
  if ($(getElem).length) {
   
      var getOffset = $(getElem).offset().top;

      $('html').animate({
          scrollTop:getOffset - targetDistance
      },500);
  }

  return false;
});

$('body').append('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = $(window).height();
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
  } else {
      $('a.back-to-top').fadeOut('slow');
  }
});
$('a.back-to-top').click(function(){
  $('html').animate({scrollTop:0},500);
  return false;
});

// ......nav animation...
const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');


  const navLinks = document.querySelectorAll('.nav-links li');
  // Show and hide side menu.
  burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
  // Animate the links.
  // link will hold each li.
  // index will hold the index number of array elements.
  navLinks.forEach((link, index)=>{  if(link.style.animation){
          link.style.animation='';
      }else{
          link.style.animation=`navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
  });


  // burger menu animation.
  burger.classList.toggle('toggle');
  });


}
navSlide();
// -----------portfolio text animation----------

console.clear();
new SplitText("h4", { type: "lines", linesClass: "lineChild" });
new SplitText("h4", { type: "lines", linesClass: "lineParent" });
var tl = new TimelineMax({repeat:-1, repeatDelay:0.5, yoyo:true});
// tl.staggerFrom(".lineChild", 0.75, {y:50}, 0.25);
tl.from(".lineChild", 2, {y:-50}, 0.1);
//  --------------------slide--------------
$('.scrollTo').click(function() {

  var getElem = $(this).attr('href');

  var targetDistance = 10;
 
  if ($(getElem).length) {
   
      var getOffset = $(getElem).offset().top;

      $('html').animate({
          scrollTop:getOffset - targetDistance
      },500);
  }

  return false;
});

$('body').append('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = $(window).height();
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
      $('a.back-to-top').fadeIn('slow');
  } else {
      $('a.back-to-top').fadeOut('slow');
  }
});
$('a.back-to-top').click(function(){
  $('html').animate({scrollTop:0},500);
  return false;
});


// --------------About style...-----
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}
// ----------------porfolio--------
document.getElementById("year").innerHTML = (new Date().getFullYear());
// -----------about text------------

var tl = gsap.timeline({repeat: -1});
var mySplitText = new SplitText("#quote", { type: "words,chars" });
chars = mySplitText.chars; //an array of all the divs that wrap each character

// The animation
tl.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.05
});
tl.restart();
  

// ---------------text design---------
var tl = gsap.timeline({repeat: -1});
var mySplitText = new SplitText("#quote2", { type: "words,chars" });
chars = mySplitText.chars; //an array of all the divs that wrap each character

// The animation
tl.fromTo(
  chars,
  { 
    y: -100,
    x: 0,
    opacity: 0
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    stagger: 0.01,
    duration: 2,
    ease: 'power4.out',
  }
)
tl.restart();