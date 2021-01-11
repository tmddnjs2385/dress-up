window.onload = function () {
    // 캡쳐 버튼 클릭 이벤트 등록 
    document.getElementById("edit").addEventListener("click", function (e) {
        // 마우스 커서 모양 변경 (eidt_cursor 클래스 추가)
        document.querySelector("body").classList.add("edit_cursor");

        screenshot(e);
    });
}

function screenshot(e) {


    var height = window.innerHeight;
    var width = window.innerWidth;

    console.log(width);
    console.log(height);

    var top = "5";
    var left = "5";

    width = "2000";
    height = "3200";

    html2canvas(document.body).then(function (canvas) {
        //전체 화면 캡쳐 // 선택 영역만큼 crop 

        var context = canvas.getContext('2d');

        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        var img = canvas.getContext('2d').getImageData(left, top, width, height);
        var c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        c.getContext('2d').putImageData(img, 0, 0);
        save(c); // crop한 이미지 저장
    });

    function save(canvas) {
        if (navigator.msSaveBlob) {
            var blob = canvas.msToBlob();
            return navigator.msSaveBlob(blob, 'KIMU STUDIO.png');
        } else {
            var el = document.getElementById("target");
            el.href = canvas.toDataURL("image/png");
            el.download = 'KIMU STUDIO.png';
            el.click();


        }

    }

}
