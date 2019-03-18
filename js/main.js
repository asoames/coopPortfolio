/*https://notlaura.com/show-title-hovering-image/*/

console.log('JavaScript is running.');

$(document).ready(function() {
    $('#contact-form').hide();
    $('#button-to-show').on('click', function() {
        $('#contact-form').toggle();
    });
})