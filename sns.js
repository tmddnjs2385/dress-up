$(window).ready(function () {

    $("a").click(function () {

        shareAct(this);

    });

});

function shareAct(a) {

    var snsCode = $(a).attr('id');

    var cUrl = "https://tmddnjs2385.github.io/dress-up/";

    switch (snsCode) {

        case "vIconTw":
            //트위터
            cUrl = 'https://twitter.com/intent/tweet?text=페이지제목:&url=' + cUrl;
            break;

        case "vIconTg":
            //텔레그램
            cUrl = 'https://telegram.me/share/url?url=' + cUrl;
            break;

        case "vIconFb":
            //페이스북
            cUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + cUrl;
            break;

        case "vIconKs":
            //카카오스토리
            cUrl = 'https://story.kakao.com/share?url=' + cUrl;
            break;

    }

    window.open(cUrl, '', 'width=600,height=300,top=100,left=100,scrollbars=yes');

}