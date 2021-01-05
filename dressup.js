$(document).ready(function () {

    function ImageSwitcher(choices, i) {
        i = 0;

        this.Next = function () {
            hide_current_image();
            show_next_image();
        }

        var hide_current_image = function () {
            if (choices) {
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function () {
            if (choices) {
                if (i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }

    function BgSwitcher(choices, i) {

        i = 0;

        var bg = ["https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-simple-and-beautiful-pink-dress-up-background-image_211569.jpg",
            "https://cdn.pixabay.com/photo/2018/10/22/16/24/christmas-3765751_960_720.jpg", "image/clothes.png"]

        this.Next = function () {

            change_bg();

        }

        var change_bg = function () {

            if (i > bg.length) {
                i = 0;
            }

            $("body").css(
                {
                    "background-image": `url(${bg[i]})`,
                    "backgorund-size": "cover",
                    "width": "100%",

                    "background-color": "transparent"
                }
            );

            i = i + 1;



        }
    }

    var pants = $(".pant");
    var shirts = $(".shirt");
    var bg = $(".body");

    var shirt_picker = new ImageSwitcher(shirts);
    document.getElementById("shirt_button").onclick = function () { shirt_picker.Next(); };

    var pants_picker = new ImageSwitcher(pants);
    document.getElementById("pant_button").onclick = function () { pants_picker.Next(); };

    var bg_picker = new BgSwitcher(bg);
    document.getElementById("bg_button").onclick = function () { bg_picker.Next(); };



});

// $("#shirt_button").click(function () {
//     $("#shirt-menu").css("visibility", "visible");
// });