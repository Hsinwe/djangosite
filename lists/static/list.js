window.Superlists = {};
window.Superlists.initialize = function () {
    $('input[name="text"]').on('keydown', function () {
        $('.has-error').hide();
    });
};