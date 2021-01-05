window.onload = function () {
    // ĸ�� ��ư Ŭ�� �̺�Ʈ ��� 
    document.getElementById("edit").addEventListener("click", function (e) {
        // ���콺 Ŀ�� ��� ���� (eidt_cursor Ŭ���� �߰�)
        document.querySelector("body").classList.add("edit_cursor");

        screenshot(e);
    });
}

function screenshot(e) {

    var startX, startY;
    var height = window.innerHeight;
    var width = window.innerWidth;

    var top = "0";
    var left = "0"
    var width = "1400";
    var height = "700";

    html2canvas(document.body).then(function (canvas) {
        //��ü ȭ�� ĸ�� // ���� ������ŭ crop 
        var img = canvas.getContext('2d').getImageData(left, top, width, height);
        var c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        c.getContext('2d').putImageData(img, 0, 0);
        save(c); // crop�� �̹��� ����
    });

    function save(canvas) {
        if (navigator.msSaveBlob) {
            var blob = canvas.msToBlob();
            return navigator.msSaveBlob(blob, 'KIMU STUDIO.jpg');
        } else {
            var el = document.getElementById("target");
            el.href = canvas.toDataURL("image/jpeg");
            el.download = 'KIMU STUDIO.jpg';
            el.click();
        }
    }

}
