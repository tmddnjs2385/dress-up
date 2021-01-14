
function mo_chk() {

    var os;

    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

    if (mobile) {
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search("android") > -1) {
            return os = "android";
        } else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)) {
            return os = "ios";
        } else {
            return os = "other";
        }

    } else {
        return os = "pc";
    }
}


function action_app_instagram(android_url, ios_url, ios_appstore_url) {

    var result_mo_chk = mo_chk();

    if (result_mo_chk != "pc") {
        if (result_mo_chk == "ios") {

            setTimeout(function () {
                window.open(ios_appstore_url);
            }, 1500);

            location.href = ios_url;
        } else {
            location.href = android_url;
        }
    } else {
        location.href = "https://www.instagram.com/";
    }
}