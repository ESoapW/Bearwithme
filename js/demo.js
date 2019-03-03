$(document).ready(function () {


  //$(".header").fadeOut();
  var scroll = $(window).scrollTop();
  $(window).scroll(function () {
    //  console.log($(window).scrollTop()+" px");

    var scrollNow = $(window).scrollTop();
   // console.log("scroll=" + scroll);
 //   console.log("scrollNow=" + scrollNow);
    //下滑
    if (scrollNow > scroll) {
      if (scrollNow >= 101) {

        $("#section1").fadeOut("slow");

      }
    } else {
      if (scroll < 101) {
        if($(document).width()>600){
        $("#section1").fadeIn("slow");
       }
      }
    }
    scroll = $(window).scrollTop();


  });
  //alert($(window).scrollTop()+" px");
  $("#cebianlan").click(
    function () {
      $("html").CSS("color", "rgba(0,0,0,0.87)")
    }
  );
  $('#a1').hover(
    function () {
      $("#b1").css('display', 'block');
    },
    function () {
      $("#b1").css('display', 'none');
    }
  );
  $("#b1").hover(function () {
    $(this).css('display', 'block');;
  },
    function () {
      $(this).css('display', 'none');
    });
})
$(document).ready(function () {
  $('#a2').hover(function () {
    $("#b2").css('display', 'block');
  }, function () {
    $("#b2").css('display', 'none');
  });
  $("#b2").hover(function () {
    $(this).css('display', 'block');;
  }, function () {
    $(this).css('display', 'none');
  });
});

$(document).ready(function(){
  $('.tap-target').tapTarget();
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});


$(document).ready(function(){
  if($(document).width()<600){
  $("#img1").attr('src','img/background1mobile.jpg'); 
  }
});
