$(function(){

$(window).scroll(function(){
  let top=$(this).scrollTop()
  if( top > 700){
    $('.arrow').fadeIn(300);
  }else{
    $('.arrow').fadeOut(300);
  }
})
$('.arrow').click(function(){
  $('body,html').animate({
    'scrollTop':0
  },500)
})

$('.humb').click(function(){
  $('.head').toggleClass('open');
})

$('a[href^="#"]').click(function(){
  $('.head').removeClass('open');
})
$('.nav-sns a').click(function(){
  $('.head').removeClass('open');
})
})