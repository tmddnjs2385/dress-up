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

        var bg = ["image/bg1.jpg", "image/bg2.jpg"]

        this.Next = function () {

            change_bg();

        }

        var change_bg = function () {

            if (i > bg.length - 1) {

                console.log(i);

                i = 0;
            }

            $("body").css(
                {
                    "background-image": `url(${bg[i]})`,
                    // "backgorund-size": "fill",

                }
            );

            i = i + 1;



        }
    }

    var pants = $(".pant");
    var shirts = $(".shirt");
    var bg = $("body");

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