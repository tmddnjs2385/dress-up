
// $(document).ready(function () {

//     $("#download").on("click", function () {

//         html2canvas(document.querySelector("body"), { allowTaint: true }).then(canvas => {

//             saveAs(canvas.toDataURL("image/png"), "KIMU_STUDIO.png")

//         })



//     });


//     function saveAs(uri, filename) {

//         var link = document.createElement('a');

//         if (typeof link.download === "string") {
//             link.href = uri;
//             link.download = filename;
//             document.body.appendChild(link);
//             link.click();
//             document.body.removeChild(link);
//         } else {
//             window.open(uri);
//         }
//     }

// })