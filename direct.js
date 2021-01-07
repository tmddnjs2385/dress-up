(function (d, l, a) {
    if (d.body.getAttribute('__donot_urlopenlink') || !/mobile/i.test(a) || !/inapp|KAKAOTALK|Line\/|FB_IAB\/FB4A|FBAN\/FBIOS|Instagram|DaumDevice\/mobile|SamsungBrowser\/[^1]/i.test(a)) return;

    require("electron").shell.openExternal(link);


})(document, location, navigator.userAgent);