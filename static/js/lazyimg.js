/*!
 * Hugo lazy img loading
 * https://gist.github.com/bgadrian/68ec61ed90d7ebe879bd7f0ce4a2a701
 */
window.addEventListener('load', function () {
    document.querySelectorAll('img.lazy').forEach( image => {
        if ( ! image.hasAttribute("data-src")) {
            return;
        }
        const original = image.getAttribute("data-src");
        fetch(original)
        .then(function (response) {
            if (response && response.status == 200){
                image.setAttribute("src", original)
            }
        })
        .catch(function(err) {
            console.error('lazy error: ', err);
        }); // catch
    }); //image
}); //listener
