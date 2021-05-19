// 배너 스크립트
//html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

// 전체메뉴 스크립트
$(".tit .btn").click(function(e){
  e.preventDefault();
  //$("#cont-nav").css("display","block");
  //$("#cont-nav").show(); - css("disply","block")과 같음
  //$("#cont-nav").fadeIn(); 서서히 나타남
  //$("#cont-nav").slideDown(); 슬라이드로 나타남
  //$("#cont-nav").toggle(); show와 hide가 합쳐진 것
  //$("#cont-nav").fadeToggle(); 서서히 나타났다 서서히 사라짐
  $("#cont-nav").slideToggle(200); //슬라이드로 나타났다 슬라이드로 사라짐
  $(this).toggleClass("on");
});

// 탭 메뉴 스크립트
var $tab_list = $(".tap_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
  e.preventDefault();
  var $this = $(this);
  $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

// 갤러리 스크립트
$(".gallery_img").slick({
  arrows: false,
  fade: true,
  pauseOnHover:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 1
});

$(".play").click(function(){
  $(".gallery_img").slick("slickPlay")
});

$(".pause").click(function(){
  $(".gallery_img").slick("slickPause")
});

$(".prev").click(function(){
  $(".gallery_img").slick("slickPrev")
});

$(".next").click(function(){
  $(".gallery_img").slick("slickNext")
});

// 레이어 팝업
$(".layer").click(function(e){
  e.preventDefault();
  //$("#layer").css("display","block");
  //$("#layer").show();
  $("#layer").fadeIn(500);
  //$("#layer").slideDown();
});

$("#layer .close").click(function(e){
  e.preventDefault();
  //$("#layer").css("display","none");
  //$("#layer").hide();
  $("#layer").fadeOut(500);
  //$("#layer").slideUp();
})

// 윈도우 팝업
$(".window").click(function(e){
  e.preventDefault();
  //window.open("파일명","팝업이름","옵션설정")
  // 옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
  window.open("sample_popup.html", "window_popup", "width=800, height=555, left=50, top=50, scrollbars=0, menubar=0, toolbar=0");
});

// 라이트박스
$(".lightgallery").lightGallery({
  thembnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true
});