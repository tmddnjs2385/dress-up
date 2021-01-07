$(document).ready((function (d, l, a) {
    if (d.body.getAttribute('__donot_urlopenlink') || !/mobile/i.test(a) || !/inapp|KAKAOTALK|Line\/|FB_IAB\/FB4A|FBAN\/FBIOS|Instagram|DaumDevice\/mobile|SamsungBrowser\/[^1]/i.test(a)) return;
    l.href.replace(/^https?:\/\/((?:(?:[a-z\d_\-=]+\.)+[a-z\d]+)(\/[a-z\d_\-=\+\.\/:]*)?)(?:\?(.*))?$/i, function ($0, u, d, q) {
        let qs, i, kv, k, v, j;
        if (!d) u += '/';
        if (q) {
            qs = q.split('&');
            for (i = 0; i < qs.length; i++) {
                kv = qs[i].split('=');
                k = kv.shift();
                v = kv.join('=');
                if (/[^a-z\d_\-\.]/i.test(k)) return false;
                for (j = 0; j < v.length; j++) {
                    if (v.charCodeAt(j) < 256 && /[^a-z\d_\-=\+\.\/]/i.test(v[j])) return false;
                    if (v.charCodeAt(j) > 256 && encodeURIComponent(v[j]).length < 9) return false;
                }
            }
            u += '?' + q;
        }
        l.replace('https://' + u);
    });
})(document, location, navigator.userAgent));