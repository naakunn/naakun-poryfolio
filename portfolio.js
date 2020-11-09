// --------------------------------------------------------------
// ロード中画面
$(function () {
  let h = $(window).height();

  $('#wrap').css('display', 'none');
  $('#loader-bg ,#loader').height(h).css('display', 'block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(1800).fadeOut(1500);
  $('#loader').delay(1500).fadeOut(1500);
  $('#wrap').css('display', 'block');
});

// 10秒たったら強制的にロード画面を非表示
$(function () {
  setTimeout('stopload()', 1000);
});

function stopload() {
  $('#wrap').css('display', 'block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
};
// --------------------------------------------------------------

// --------------------------------------------------------------
// メイン画像フェードイン
$(function () {
  setTimeout(function () {
    $('#js-top').hide().fadeIn(2500);
  }, 1500)
});
// --------------------------------------------------------------

// --------------------------------------------------------------
// 文字ふっわと出てくる処理
$(function () {
  const $about = document.getElementById('about');
  const $product = document.getElementById('product');
  const $services = document.getElementById('services');
  const $contact = document.getElementById('contact');

  const all = [$about, $contact, $product, $services];

  $(all).css('visibility', 'hidden');
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $(all).each(function () {
      var targetPosition = $(this).offset().top;
      if (topWindow > targetPosition - windowHeight + 150) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});
// --------------------------------------------------------------

// --------------------------------------------------------------
// ページ内スクロール
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    let adjust = 0;
    // スクロールの速度
    let speed = 400; // ミリ秒
    // アンカーの値取得
    let href = $(this).attr("href");
    // 移動先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    let position = target.offset().top + adjust;
    // スムーススクロール
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
// --------------------------------------------------------------

// --------------------------------------------------------------