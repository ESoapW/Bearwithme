
$(document).ready(function(){
    $(document).ready(function(){
        $('.scrollspy').scrollSpy();
      });
});



var scroll = $(window).scrollTop();
$(window).scroll(function () {
  //  console.log($(window).scrollTop()+" px");

  var scrollNow = $(window).scrollTop();
 // console.log("scroll=" + scroll);
//   console.log("scrollNow=" + scrollNow);
  //下滑
  if (scrollNow > scroll) {
    if (scrollNow >= 2900) {

      $("#rightnav").fadeOut("slow");

    }
  } else {
    if (scroll < 2900) {
      $("#rightnav").fadeIn("slow");
    }
  }
  scroll = $(window).scrollTop();


});
