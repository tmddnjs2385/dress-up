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
            //Ʈ����
            cUrl = 'https://twitter.com/intent/tweet?text=����������:&url=' + cUrl;
            break;

        case "vIconTg":
            //�ڷ��׷�
            cUrl = 'https://telegram.me/share/url?url=' + cUrl;
            break;

        case "vIconFb":
            //���̽���
            cUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + cUrl;
            break;

        case "vIconKs":
            //īī�����丮
            cUrl = 'https://story.kakao.com/share?url=' + cUrl;
            break;

    }

    window.open(cUrl, '', 'width=600,height=300,top=100,left=100,scrollbars=yes');

}