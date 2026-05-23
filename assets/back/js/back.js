import '../scss/back.scss';
import Vue from 'vue';
import Builder from './builder/components/Builder.vue';
import BuilderFileManagerIntegration from './builder/BuilderFileManagerIntegration';
import '/vendor/easycorp/easyadmin-bundle/assets/js/field-slug';

const $builderRoots = $('.builder-root');

if ($builderRoots.length > 0) {
    $builderRoots.each(function (i, root) {
        new Vue({el: '#' + $(root).attr('id'), components: {Builder}});
    });
    
    // Initialiser l'intégration avec le file-manager
    BuilderFileManagerIntegration.init();
}

function refreshSurveyQuestionAnswerBlock(selector) {
    if(selector.val() === "radio") {
        selector.closest(".field-collection-item").find(".form-survey-question-answer-type").removeClass('d-none');
    } else {
        selector.closest(".field-collection-item").find(".form-survey-question-answer-type").addClass('d-none');
    }
}


$(function() {
    $('.action-saveAndReturn, .action-saveAndAddAnother, .action-saveAndReturn, .action-saveAndContinue').on('click', function() {
        let $formId = $('#'+ $(this).attr('form'));
        let $allInput = $formId.find('input:invalid');

        $.each($allInput, function( index, value ) {
            let $currentElement = $('#'+value.id);
            if($currentElement.val().length === 0) {
                if($currentElement.closest('.builder__element').length > 0) {
                    $currentElement.closest('.builder__element').addClass('error_required');
                }
                else {
                    $currentElement.addClass('error_required');
                }
            }
        });
    });


    $("#Menu_pageSystem").on('change', function() {
        $("#Menu_page").prop('selectedIndex',0);
        $("#Menu_externalPath").val("");
    });
    $("#Menu_page").on('change', function() {
        $("#Menu_pageSystem").prop('selectedIndex',0);
        $("#Menu_externalPath").val("");
    });
    $("#Menu_externalPath").on('keyup', function() {
        $("#Menu_pageSystem").prop('selectedIndex',0);
        $("#Menu_page").prop('selectedIndex',0);
    });


    let eaSurveySelector = $('.ea-edit-Survey, .ea-new-Survey');
    eaSurveySelector.delegate(".form-survey-question-type",'change', function() {
        refreshSurveyQuestionAnswerBlock($(this));
    });
    if(eaSurveySelector.length) {
        $('.form-survey-question-type').each(function() {
            refreshSurveyQuestionAnswerBlock($(this));
        });
    }
    $('.container-survey-questions .field-collection-add-button').on('click', function() {
        refreshSurveyQuestionAnswerBlock(eaSurveySelector.find('.container-survey-questions .field-collection-item').last().find('.form-survey-question-type'));
        eaSurveySelector.find('.container-survey-questions .field-collection-item .form-survey-question-active').prop( "checked", true );
    })
});
