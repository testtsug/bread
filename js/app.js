$(function () {
    // 上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    // クリックで上に戻るボタン
    topBtn.click(function (event) {
        event.preventDefault(); // ページ内リンクの挙動をキャンセル
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});



//文字左から右にフェードイン
function scrollChk() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height() - 50;

    $('.scroll-animation').not('.active').each(function () {
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight) {
            $(this).addClass("active");
        }
    });
}
$(window).scroll(function () {
    scrollChk();
});
$('body').on('touchmove', function () {
    scrollChk();
});


//要素をふわっと表示
$(function () {
    $(window).scroll(function () {
        $('.effect-fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect-scroll');
            }
        });
    });
});
