// parallax init
var scene1 = document.getElementById('js-intro-parallax');
if (typeof(scene1) != 'undefined' && scene1 != null) {
    var parallax = new Parallax(scene1);
}

var scene2 = document.getElementById('js-author-parallax');
if (typeof(scene2) != 'undefined' && scene2 != null) {
    var parallax = new Parallax(scene2);
}

var scene3 = document.getElementById('js-main-footer-parallax');
if (typeof(scene3) != 'undefined' && scene3 != null) {
    var parallax = new Parallax(scene3);
}

// tel country init
var telInputCountry = document.querySelector('.js-tel-input-country-init');

if ($(telInputCountry).length > 0) {
    window.intlTelInput(telInputCountry, {
        initialCountry: 'auto'
    });
}

var telInputCountryModal = document.querySelector('.js-tel-input-country-modal-init');

if ($(telInputCountryModal).length > 0) {
    window.intlTelInput(telInputCountryModal, {
        initialCountry: 'auto'
    });
}

var telInputCountryModalChange = document.querySelector('.js-tel-input-country-modal-change-init');

if ($(telInputCountryModalChange).length > 0) {
    window.intlTelInput(telInputCountryModalChange, {
        initialCountry: 'auto'
    });
}

$(document).ready(function() {
    // modal init
    $('.js-modal-init').click(function (e) {
        var modalEl = $(this).attr('href');
        $('body').addClass('is-modal-opened');
        $('.modal').removeClass('is-show');
        $(modalEl).addClass('is-show');
        e.preventDefault();
    });

    $('.js-modal-close').on('click', function (e) {
        $('body').removeClass('is-modal-opened');
        $(this).parents('.modal').removeClass('is-show');
        e.preventDefault();
    });

    // code input
    $('.js-code-input').keydown(function(e){
        $(this).val('');
    });

    $('.js-code-input').keyup(function(e){
        var $wrap = $(this).closest('.js-code-list');
        var $inputs = $wrap.find('input[type="number"]');
        var val = $(this).val();

        if(val == val.replace(/[0-9]/, '')) {
            $(this).val('');
            return false;
        }

        $inputs.eq($inputs.index(this) + 1).focus();

        var fullVal = '';
        $inputs.each(function(){
            fullVal = fullVal + (parseInt($(this).val()) || '0');
        });
        $wrap.find('.js-code-output').val(fullVal);
    });

    // marquee intro
    $('.marquee').marquee({
        duration: 15000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });
});