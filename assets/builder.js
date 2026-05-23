
$(function($) {
    $('.data_bg').each(function() {
        let bgUrl = $(this).data('bg');
        $(this).css('background', 'url('+ bgUrl +') no-repeat center center/cover');
    });

});