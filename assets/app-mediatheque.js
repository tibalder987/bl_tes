// start the Stimulus application
const $ = require('jquery');
global.$ = global.jQuery = $;

$(window).on('load', function() {
    const resultFilters = $('.container .filters');
    const selectorResult = $('body .container .result');

    loadMedia(1);

    /** Liste des produits : PAGINATION */
    selectorResult.delegate('.pagination span.page','click', function() {
        const page = $(this).attr('data-page');
        $('html, body .header').animate({ scrollTop: 0 }, 200, 'linear', function() {
            setTimeout(function() {
                loadMedia(page);
            }, 900)
        });
    });

    resultFilters.find('#filter-document-type').on('change', function() {
        loadMedia(1);
    })
});


function loadMedia(page) {

    let resultFilters = $('.container .filters');
    let resultSelector = $('.container .result');

    let selectedMediaDocumentType = null;
    if(resultFilters.find('#filter-document-type').val()) {
        selectedMediaDocumentType = resultFilters.find('#filter-document-type').val();
    }

    $.ajax({
        url:        resultSelector.attr('data-path'),
        type:       'POST',
        data:       {'mediaType': resultSelector.attr('data-mediaType'), 'mediaDocumentType': selectedMediaDocumentType , 'page': page},
        dataType:   'html',
        async:      true,

        beforeSend: function() {
            const html = "<div class='loader mt-5' id='loader-1'></div>";
            resultSelector.html(html);
        },
        success: function(data, status) {
            resultSelector.html(data);
        },
        error : function(xhr, textStatus, errorThrown) {
            console.log('Ajax request failed.');
        }
    });
}
