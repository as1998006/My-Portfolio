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

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
 
    navLinks.forEach((link, index)=>{  if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });


   
    burger.classList.toggle('toggle');
    });


}
navSlide();
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
