// start the Stimulus application
const $ = require('jquery');
global.$ = global.jQuery = $;

$(window).on('load', function() {
    const selectorFilter = $('body .container .filters');
    const selectorResult = $('body .container .result');

    loadProduct(1);

    /** Liste des produits : PAGINATION */
    selectorResult.delegate('.pagination span.page','click', function() {
        const page = $(this).attr('data-page');
        $('html, body .header').animate({ scrollTop: 0 }, 200, 'linear', function() {
            setTimeout(function() {
                loadProduct(page);
            }, 900)
        });
    });

    /** Liste des articles : FILTRES */
    selectorFilter.find('#search').on('click', function() {
        loadProduct(1);
    });
});



function loadProduct(page) {

    let resultFilters = $('.container .filters');
    let resultSelector = $('.container .result');

    let selectedCategory = null;
    if(resultFilters.find('#filter-category').val()) {
        selectedCategory = resultFilters.find('#filter-category').val();
    }

    let selectedSearch = null;
    if(resultFilters.find('#filter-search').val()) {
        selectedSearch = resultFilters.find('#filter-search').val();
    }

    $.ajax({
        url:        resultSelector.attr('data-path'),
        type:       'POST',
        data:       {'search': selectedSearch, 'category': selectedCategory, 'type': resultSelector.attr('data-type'), 'nb': resultSelector.attr('data-nb'), 'page': page},
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
