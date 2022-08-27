$(function(){

  $('.ham').click(function(){
    $(this).toggleClass('active')
    $('nav, .back').toggleClass('active')
  })

  // 스크롤에 따라 텍스트가 움직임
  let subtext = document.querySelector(".main-img p:nth-child(1)")
  let subtext1 = document.querySelector(".main-img p:nth-child(2)")
  let subtext2 = document.querySelector(".main-img strong")

  window.addEventListener('scroll', function(){
    // 스크롤 높이 값 구하기
    let value = window.scrollY
    console.log("scrollY", value);

    if(value>350){
      subtext.style.animation='backani 0.7s ease-out forwards'
      subtext1.style.animation='backani2 0.7s ease-out forwards'
      subtext2.style.animation='backani2 0.7s ease-out forwards'
      // forward 하면 글씨가 끝까지 사라짐
    }else{
      subtext.style.animation='fontani 0.7s ease-out'
      subtext1.style.animation='fontani2 0.7s ease-out'
      subtext2.style.animation='fontani2 0.7s ease-out'
    }
  })

})