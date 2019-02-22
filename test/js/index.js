//滚动
// function isTouchDevice() {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// function playMusic() {
//   if ($('#mc-play').hasClass('on')) {
//     $('#mc-play audio').get(0).pause();
//     $('#mc-play').attr('class', 'stop');
//   } else {
//     $('#mc-play audio').get(0).play();
//     document.addEventListener("WeixinJSBridgeReady", function () {
//       $('#mc-play audio').get(0).play();
//     }, false);
//     $('#mc-play').attr('class', 'on');
//   }
// }

function justPlay() {
  $('#mc-play audio').get(0).play();
  document.addEventListener("WeixinJSBridgeReady", function () {
    $('#mc-play audio').get(0).play();
  }, false);
  $('#mc-play').attr('class', 'on');
}

var playFilter = $('#music-control');
playFilter.on('click', function () {
  playMusic();
});
document.onreadystatechange = loadingChange;

function loadingChange() {
  if (document.readyState == "complete") {
    var loading = document.getElementById("loading");
    loading.style.display = "none";
    setTimeout(function () {
      $(".page1").addClass("active");
    }, 100);
    var page = new Mango($('#pagelist'), {
      dir: 'v',
      der: 0.3,
      page: 'section',
      isLoop: false,
      change: function (e) {
        var list = $("section").eq(e.cur);
        $("section").removeClass("active");
        list.addClass("active");

      },
      beforeChange: function (e) {
        if (e.next == 7) {
          $(document).off('touchmove').on('touchmove', function (e) {
            var obj = e.target;
            if ($(obj).hasClass('#swiperText')) {
              page.stop();
            } else {
              page.start();
            }
          });
        }
      }
    });
    var bodyHeight = $(".wp section");
    if (bodyHeight.height() < 1200) {
      $("#ZhStyle").attr("href", "css/index2.css");
    }
  }
}

$(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  })
})
