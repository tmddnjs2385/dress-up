var shareButton = document.querySelector('.share-button2');
// const shareDialog = document.querySelector('.share-dialog');
// const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
            title: 'KIMU',
            url: 'https://tmddnjs2385.github.io/dress-up/',
            text: '#KIMU STUDIO, #KIMU LOOKS'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        // shareDialog.classList.add('is-open');
    }
});

// closeButton.addEventListener('click', event => {
//     shareDialog.classList.remove('is-open');
// });