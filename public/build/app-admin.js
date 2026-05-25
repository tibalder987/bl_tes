(self["webpackChunk"] = self["webpackChunk"] || []).push([["app-admin"],{

/***/ "./assets/back/js/back.js":
/*!********************************!*\
  !*** ./assets/back/js/back.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_back_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/back.scss */ "./assets/back/scss/back.scss");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _builder_components_Builder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder/components/Builder.vue */ "./assets/back/js/builder/components/Builder.vue");
/* harmony import */ var _builder_BuilderFileManagerIntegration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder/BuilderFileManagerIntegration */ "./assets/back/js/builder/BuilderFileManagerIntegration.js");
/* harmony import */ var _vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../vendor/easycorp/easyadmin-bundle/assets/js/field-slug */ "./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js");
/* harmony import */ var _vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_easycorp_easyadmin_bundle_assets_js_field_slug__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





const $builderRoots = $('.builder-root');
if ($builderRoots.length > 0) {
  $builderRoots.each(function (i, root) {
    new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
      el: '#' + $(root).attr('id'),
      components: {
        Builder: _builder_components_Builder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      }
    });
  });

  // Initialiser l'intégration avec le file-manager
  _builder_BuilderFileManagerIntegration__WEBPACK_IMPORTED_MODULE_2__["default"].init();
}
function refreshSurveyQuestionAnswerBlock(selector) {
  if (selector.val() === "radio") {
    selector.closest(".field-collection-item").find(".form-survey-question-answer-type").removeClass('d-none');
  } else {
    selector.closest(".field-collection-item").find(".form-survey-question-answer-type").addClass('d-none');
  }
}
$(function () {
  $('.action-saveAndReturn, .action-saveAndAddAnother, .action-saveAndReturn, .action-saveAndContinue').on('click', function () {
    let $formId = $('#' + $(this).attr('form'));
    let $allInput = $formId.find('input:invalid');
    $.each($allInput, function (index, value) {
      let $currentElement = $('#' + value.id);
      if ($currentElement.val().length === 0) {
        if ($currentElement.closest('.builder__element').length > 0) {
          $currentElement.closest('.builder__element').addClass('error_required');
        } else {
          $currentElement.addClass('error_required');
        }
      }
    });
  });
  $("#Menu_pageSystem").on('change', function () {
    $("#Menu_page").prop('selectedIndex', 0);
    $("#Menu_externalPath").val("");
  });
  $("#Menu_page").on('change', function () {
    $("#Menu_pageSystem").prop('selectedIndex', 0);
    $("#Menu_externalPath").val("");
  });
  $("#Menu_externalPath").on('keyup', function () {
    $("#Menu_pageSystem").prop('selectedIndex', 0);
    $("#Menu_page").prop('selectedIndex', 0);
  });
  let eaSurveySelector = $('.ea-edit-Survey, .ea-new-Survey');
  eaSurveySelector.delegate(".form-survey-question-type", 'change', function () {
    refreshSurveyQuestionAnswerBlock($(this));
  });
  if (eaSurveySelector.length) {
    $('.form-survey-question-type').each(function () {
      refreshSurveyQuestionAnswerBlock($(this));
    });
  }
  $('.container-survey-questions .field-collection-add-button').on('click', function () {
    refreshSurveyQuestionAnswerBlock(eaSurveySelector.find('.container-survey-questions .field-collection-item').last().find('.form-survey-question-type'));
    eaSurveySelector.find('.container-survey-questions .field-collection-item .form-survey-question-active').prop("checked", true);
  });
});

/***/ }),

/***/ "./assets/back/js/builder/BuilderFileManagerIntegration.js":
/*!*****************************************************************!*\
  !*** ./assets/back/js/builder/BuilderFileManagerIntegration.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BuilderFileManagerIntegration; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 * Intégration du File Manager avec le Builder
 * Permet de sélectionner des images depuis le File Manager et de les copier dans le Builder
 */

class BuilderFileManagerIntegration {
  static currentTargetField = null;
  static currentButton = null;
  static modalInstance = null;

  /**
   * Initialiser les événements
   */
  static init() {
    console.log('BuilderFileManagerIntegration initialized');

    // Gérer les clics sur "Choisir depuis la médiathèque"
    $(document).on('click', '.btn-select-from-filemanager', function (e) {
      e.preventDefault();
      const targetField = $(this).data('target');
      BuilderFileManagerIntegration.openModal(targetField, $(this));
    });

    // Écouter les messages du file-manager (sélection d'un fichier)
    window.addEventListener('message', event => {
      if (event.data && event.data.type === 'filemanager-selection') {
        BuilderFileManagerIntegration.handleFileSelection(event.data.file);
      }
    });
  }

  /**
   * Ouvrir la modal avec le file-manager
   */
  static openModal(targetField, $button) {
    this.currentTargetField = targetField;
    this.currentButton = $button;

    // Créer la modal si elle n'existe pas
    if ($('#filemanager-selector-modal').length === 0) {
      const modal = `
                <div id="filemanager-selector-modal" class="modal fade" tabindex="-1">
                    <div class="modal-dialog modal-xl" style="max-width: 90%;">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">
                                    <i class="fa fa-folder-open"></i> 
                                    Sélectionner une image depuis la médiathèque
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" style="padding: 0; height: 70vh; overflow: hidden;">
                                <iframe id="filemanager-selector-iframe" 
                                        src="/${window.BUILDER_LOCALE || 'fr'}/admin/file-selector" 
                                        style="width: 100%; height: 100%; border: none;">
                                </iframe>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      $('body').append(modal);
    }

    // Afficher la modal
    const modalElement = document.getElementById('filemanager-selector-modal');
    this.modalInstance = new bootstrap.Modal(modalElement, {
      backdrop: 'static',
      keyboard: false
    });

    // Écouter la fermeture de la modal pour nettoyer le backdrop
    modalElement.addEventListener('hidden.bs.modal', () => {
      // Supprimer le backdrop s'il existe encore
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
      // Supprimer la classe modal-open du body
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    });
    this.modalInstance.show();
  }

  /**
   * Gérer la sélection d'un fichier depuis le file-manager
   * Appelé directement quand l'utilisateur clique sur "Sélectionner" dans la visionneuse
   */
  static async handleFileSelection(file) {
    console.log('File selected:', file);

    // Vérifier que c'est bien une image
    if (!file.mimeType || !file.mimeType.startsWith('image/')) {
      alert('Veuillez sélectionner une image (jpg, png)');
      return;
    }

    // Copier directement le fichier
    try {
      await this.copyMediaToBuilder(file.id);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
      alert('Erreur lors de la copie du fichier');
    }
  }

  /**
   * Copier le fichier du file-manager vers le builder
   */
  static async copyMediaToBuilder(fileId) {
    try {
      const response = await fetch('/api/builder/copy-media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fileId: fileId
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la copie');
      }
      const data = await response.json();
      if (data.success) {
        // Trouver le formulaire parent spécifique via le bouton qui a ouvert la modal
        if (!this.currentButton || this.currentButton.length === 0) {
          console.error('Bouton source introuvable');
          throw new Error('Impossible de trouver le formulaire cible');
        }

        // Trouver le form-group-image parent du bouton
        const $formGroup = this.currentButton.closest('.form-group-image');
        if ($formGroup.length === 0) {
          console.error('Form-group-image introuvable');
          throw new Error('Impossible de trouver le formulaire cible');
        }

        // Mettre à jour l'input hidden avec l'URL dans ce form-group spécifique
        const $hiddenInput = $formGroup.find(`input[data-name="${this.currentTargetField}_url"]`);
        if ($hiddenInput.length === 0) {
          console.error('Input hidden introuvable');
          throw new Error('Impossible de trouver le champ cible');
        }
        $hiddenInput.val(data.url);

        // Afficher la prévisualisation dans le widget
        const $widget = $formGroup.find('.image-upload-widget');
        $widget.find('.image-upload-empty').hide();
        $widget.find('.image-upload-preview').show();
        $widget.find('.image-upload-preview img').attr('src', data.url);
        $widget.find('.filename-preview').text(data.name || '');

        // Gérer le bouton supprimer
        $widget.find('.file-preview-delete').off('click').on('click', function (e) {
          e.preventDefault();
          $widget.find('.image-upload-preview').hide();
          $widget.find('.image-upload-empty').show();
          // Vider les inputs
          $hiddenInput.val('');
          $formGroup.find('input[type="file"]').val('');
          $widget.find('.filename-preview').text('');
        });

        // Masquer l'input file local si nécessaire
        $formGroup.find('input[type="file"]').val('');

        // Fermer la modal
        if (this.modalInstance) {
          this.modalInstance.hide();
          // Nettoyer le backdrop immédiatement
          setTimeout(() => {
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) {
              backdrop.remove();
            }
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }, 100);
        }

        // Afficher un message de succès
        console.log('Fichier copié avec succès:', data.url);
      } else {
        throw new Error(data.error || 'Erreur inconnue');
      }
    } catch (error) {
      console.error('Erreur:', error);
      throw error;
    }
  }
}

// Auto-initialisation
$(document).ready(() => {
  BuilderFileManagerIntegration.init();
});

/***/ }),

/***/ "./assets/back/js/builder/elements/ElementFormMounter.js":
/*!***************************************************************!*\
  !*** ./assets/back/js/builder/elements/ElementFormMounter.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ElementFormMounter; }
/* harmony export */ });
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var select2_dist_css_select2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! select2/dist/css/select2.css */ "./node_modules/select2/dist/css/select2.css");
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormBuilder */ "./assets/back/js/builder/elements/FormBuilder.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//import $ from 'jquery';
//import 'bootstrap';



class ElementFormMounter {
  static inputName(basename, elementId, elementPropertyName) {
    let multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return basename + '[' + elementId + '][' + elementPropertyName + ']' + (multiple ? '[]' : '');
  }
  static inputId(elementId, elementPropertyName) {
    return elementId + '-' + elementPropertyName;
  }
  static confirm(callback) {
    const modal = `
            <div id="modal-delete-element" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h4>Voulez-vous supprimer cet élément ?</h4>
                            <p>Cette action est irréversible.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" class="btn btn-secondary">
                                <span class="btn-label">Annuler</span>
                            </button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-danger" id="modal-delete-element-button">
                                <i class="fa fa-trash-o"></i> <span class="btn-label">Supprimer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    if ($('#modal-delete-element').length <= 0) {
      $('body').append($(modal));
    }
    var myModal = new bootstrap.Modal(document.getElementById('modal-delete-element'), {
      backdrop: true,
      keyboard: true
    });
    myModal.show();
    $('#modal-delete-element').off('click', '#modal-delete-element-button').on('click', '#modal-delete-element-button', callback);
  }
  static validateFormElement(form) {
    let isValid = true;
    $(form).find('[required], [type="url"]').each(function (i, input) {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });
    $(form).find('input[type="file"]').each(function (i, input) {
      if (!ElementFormMounter._validateFileInput(input)) {
        isValid = false;
      }
    });
    return isValid;
  }
  static mount(basename, element, form) {
    let $form = $(form);
    this._initRepeatables($form, basename, element);
    this._compileNameAndValues(basename, element, $form);
    this._makeCkeditors($form);
    this._makeSelect2($form);
    this._autoValidateFileInputs($form);
  }
  static _getValueFromPath(obj, path) {
    if (!path) return undefined;
    if (obj.hasOwnProperty(path)) {
      return obj[path];
    }
    const keys = path.split(/\]\[|\[|\]/).filter(k => k !== '');
    let current = obj;
    for (let key of keys) {
      if (current === null || current === undefined) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  }
  static _initRepeatables($form, basename, element) {
    // Auto-expand repeatables if we have data
    $form.find('.form-repeatable').each(function () {
      const $container = $(this);
      const $itemsContainer = $container.find('.form-repeatable-items');
      const $template = $container.find('template.form-repeatable-template');
      if ($template.length > 0) {
        const html = $template.html();
        const match = /data-name="([^"]+)"/.exec(html);
        if (match) {
          const fullName = match[1];
          const parts = fullName.split('][');
          if (parts.length > 0) {
            const repeatableName = parts[0];

            // Look up the array in the element object
            const repeatableData = ElementFormMounter._getValueFromPath(element, repeatableName);
            if (repeatableData) {
              let savedCount = 0;
              if (Array.isArray(repeatableData)) {
                savedCount = repeatableData.length;
              } else if (typeof repeatableData === 'object') {
                savedCount = Object.keys(repeatableData).length;
              }
              console.log('InitRepeatable:', fullName, 'Data:', repeatableData, 'SavedCount:', savedCount, 'CurrentCount:', $itemsContainer.children().length);
              const currentCount = $itemsContainer.children().length;
              for (let k = currentCount; k < savedCount; k++) {
                // Use direct call instead of trigger click to ensure reliability
                ElementFormMounter._addRepeatableItem($container, element, basename);
              }
            }
          }
        }
      }
    });

    // Handle Add button
    // Bind to the specific container to preserve the 'element' and 'basename' closure scope
    // Using delegating from the container itself handles potential dynamic button replacements if any, 
    // though typically the button is static at the bottom.
    $form.find('.form-repeatable').each(function () {
      const $container = $(this);
      $container.off('click', '.form-repeatable-add').on('click', '.form-repeatable-add', function (e) {
        e.preventDefault();
        // $container is already available in closure, or via $(this).closest
        // Using $(this).closest is safer if we copy/moved code, but we need the 'element' closure.
        if (!ElementFormMounter._addRepeatableItem($container, element, basename)) {
          const max = parseInt($container.data('max'));
          alert(`Maximum ${max} éléments autorisés.`);
        }
      });

      // Handle Remove button
      $container.off('click', '.form-repeatable-remove').on('click', '.form-repeatable-remove', function (e) {
        e.preventDefault();
        const min = parseInt($container.data('min'));
        const $itemsContainer = $container.find('.form-repeatable-items');
        if ($itemsContainer.children().length <= min) {
          alert(`Minimum ${min} éléments requis.`);
          return;
        }
        $(this).closest('.form-repeatable-item').remove();
      });
    });
  }
  static _addRepeatableItem($container, element, basename) {
    const $itemsContainer = $container.find('.form-repeatable-items');
    const $template = $container.find('template.form-repeatable-template');
    const max = parseInt($container.data('max'));
    const currentCount = $itemsContainer.children().length;
    if (currentCount >= max) {
      // Quiet fail for auto-expand or handle differently?
      // User click should alert, but auto-expand shouldn't loop if max reached?
      return false;
    }
    let maxIndex = -1;
    $itemsContainer.children().each(function () {
      const idx = parseInt($(this).data('index'));
      if (!isNaN(idx) && idx > maxIndex) maxIndex = idx;
    });
    const newIndex = maxIndex + 1;
    const placeholder = $template.data('placeholder');
    let html = $template.html();
    const placeholderMinus1 = placeholder + '_MINUS_1';
    if (html.indexOf(placeholderMinus1) !== -1) {
      html = html.split(placeholderMinus1).join(newIndex);
    }
    if (html.indexOf(placeholder) !== -1) {
      html = html.split(placeholder).join(newIndex + 1);
    }
    const $newItem = $(html);
    $newItem.attr('data-index', newIndex);
    $itemsContainer.append($newItem);
    ElementFormMounter._makeCkeditors($newItem);
    ElementFormMounter._makeSelect2($newItem);
    $newItem.find('[data-name]').each(function () {
      const $input = $(this);
      const name = $input.data('name');
      const isMultiple = $input.prop('multiple');
      $input.attr('name', ElementFormMounter.inputName(basename, element.id, name, isMultiple));
      const cleanPropName = name.replace(/\]\[/g, '-').replace('[', '-').replace(']', '');
      const id = ElementFormMounter.inputId(element.id, cleanPropName);
      $input.attr('id', id);
      $input.closest('.form-group').find('label').attr('for', id);
    });
    return true;
  }
  static remount(form) {
    this._makeCkeditors($(form));
  }
  static _compileNameAndValues(basename, element, $form) {
    $form.find('[data-name]').not('.form-repeatable').each(function (i, input) {
      let $input = $(input);
      const name = $input.data('name');
      const cleanPropName = name.replace(/\]\[/g, '-').replace('[', '-').replace(']', '');
      const id = ElementFormMounter.inputId(element.id, cleanPropName);
      const isMultiple = $input.prop('multiple');
      $input.attr('name', ElementFormMounter.inputName(basename, element.id, name, isMultiple));
      if (!$input.attr('id')) {
        $input.attr('id', id);
        $input.parent().find('label').attr('for', id);
      }
      if ($input.attr('type') !== 'file') {
        const val = ElementFormMounter._getValueFromPath(element, name);
        if (val !== undefined && val !== null) {
          $input.val(isMultiple && typeof val === 'string' ? val.split(',') : val);
          if ($input.hasClass('article_medias_input')) {
            ElementFormMounter._hydrateInputPreview($input, val);
          }
        }
      } else if ($input.attr('type') === 'file') {
        const urlName = name + '_url';
        const val = ElementFormMounter._getValueFromPath(element, urlName);
        if (val) {
          ElementFormMounter._hydrateInputFile($input, val);
        }
      }
    });
  }
  static _makeSelect2($form) {
    $form.find('select.select2').each((i, select) => {
      let options = {
        theme: 'bootstrap',
        language: 'fr',
        width: '100%',
        minimumResultsForSearch: 10
      };
      if ($(select).hasClass('select2--icons')) {
        const displayIcons = function (icon) {
          if (!icon.id) {
            return icon.text;
          }
          return $(`
                        <div class="builder__element__form__icon">
                            <div class="builder__element__form__icon__i"><i class="mt-icon-${icon.text}"></i></div> 
                            <div>${icon.text.charAt(0).toUpperCase() + icon.text.slice(1)}</div>
                        </div>`);
        };
        options.templateSelection = displayIcons;
        options.templateResult = displayIcons;
      }
      $(select).select2(options);
    });
  }
  static _makeCkeditors($form) {
    setTimeout(function () {
      $form.find('trix-editor').each(function (i, input) {
        if (input.editor) {
          input.editor.loadHTML($(input).parent().find('input').val());
        } else {
          console.warn('No editor for trix ' + input);
        }
      });
      $form.find('.element-ckeditor').each(function (i, input) {
        const id = $(input).attr('id');
        if (CKEDITOR.instances[id]) {
          CKEDITOR.instances[id].destroy(false);
          delete CKEDITOR.instances[id];
        }
        let editor = CKEDITOR.replace(id, {
          // colorButton_colors: colors_private.join(',') + ',' + colors_pro.join(','),
          toolbar: [{
            name: 'styles',
            items: ['Bold', 'Italic', 'Strike', 'Link']
          }, {
            name: 'colors',
            items: ['TextColor']
          }, {
            name: 'lists',
            items: ['BulletedList', 'NumberedList', '-', 'Outdent', 'Indent']
          }, {
            name: 'clipboard',
            items: ['Copy', 'Paste', 'PasteFromWord', '-', 'Undo', 'Redo']
          }, {
            name: 'paragraph',
            items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
          }, {
            name: 'insert',
            items: ['HorizontalRule', 'Table', 'Image']
          }, {
            name: 'advanced',
            items: ['Source']
          }],
          language: 'fr',
          height: 100,
          extraPlugins: 'divarea',
          filebrowserBrowseUrl: '/elfinder'
        });
        let toast_id = "toasted" + id;
        let label_input = $('#' + id).parent().find('label').text();
        editor.on('required', function (evt) {
          if ($('#' + evt.editor.name).length > 0) {
            $('body').append('' + '<div class="toast-container position-fixed bottom-0 end-0 p-3">' + '  <div id="' + toast_id + '" class="toast" role="alert" aria-live="assertive" aria-atomic="true">' + '    <div class="toast-header">' + '      <strong class="me-auto">Erreur - Obligatoire</strong>' + '      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>' + '    </div>' + '    <div class="toast-body">' + '      Champ ' + label_input + '    </div>' + '  </div>' + '</div>');
            const toastTrigger = document.getElementById(toast_id);
            const toast = new bootstrap.Toast(toastTrigger);
            toast.show();
            evt.cancel();
            $('#' + id).closest('.builder__element').addClass('error_required');
          }
        });
        editor.on('change', function (evt) {
          if (editor.getData() !== '') {
            $('.action-saveAndReturn, .action-saveAndAddAnother, .action-saveAndReturn, .action-saveAndContinue').removeAttr('disabled');
          }
        });
      });
    }, 500);
  }
  static _autoValidateFileInputs($form) {
    $form.on('change', 'input[type="file"]', function (e) {
      if (ElementFormMounter._validateFileInput(e.currentTarget)) {
        // Preview handled in _validateFileInput now
      }
    });
  }
  static _validateFileInput(input) {
    const files = input.files;
    if (!files || !files[0]) {
      return true;
    }
    const file = files[0];
    const fileSizeMB = (file.size / 1024 / 1024).toFixed(4);
    if (fileSizeMB > _FormBuilder__WEBPACK_IMPORTED_MODULE_2__["default"].IMAGE_MAX_SIZE_MB) {
      input.setCustomValidity('Fichier trop gros');
      input.reportValidity();
      return false;
    }

    // Show local preview
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const $widget = $(input).closest('.image-upload-widget');
        $widget.find('.image-upload-empty').hide();
        $widget.find('.image-upload-preview').show();
        $widget.find('.image-upload-preview img').attr('src', e.target.result);
        $widget.find('.filename-preview').text(file.name);

        // Bind delete button for local file
        $widget.find('.file-preview-delete').off('click').on('click', function () {
          $(input).val(''); // Clear file input
          $widget.find('.image-upload-preview').hide();
          $widget.find('.image-upload-empty').show();
          $widget.find('.image-upload-preview img').attr('src', '');
          $widget.find('.filename-preview').text('');
        });
      };
      reader.readAsDataURL(file);
    }
    input.setCustomValidity('');
    return true;
  }
  static _hydrateInputFile($input, value) {
    if (!value) {
      return;
    }
    let $row = $input.closest('.form-group');
    let $widget = $row.find('.image-upload-widget');

    // Hide empty state, show preview
    $widget.find('.image-upload-empty').hide();
    $widget.find('.image-upload-preview').show();
    $widget.find('.image-upload-preview img').attr('src', value);
    $widget.find('.file-preview-delete').off('click').on('click', function (e) {
      e.preventDefault();
      $widget.find('.image-upload-preview').hide();
      $widget.find('.image-upload-empty').show();
      // Clear hidden input (URL) and file input to be safe
      $row.find('input[type="hidden"]').val('');
      $row.find('input[type="file"]').val('');
    });
  }
  static _hydrateInputPreview($input, value) {
    if (!value) {
      return;
    }
    let fileExt = value.substr(value.lastIndexOf('.') + 1).toLowerCase();
    ;
    let list_ext = ['jpg', 'png', 'jpeg', 'pdf'];
    if (fileExt === "pdf") {
      value = "/images/icon_pdf.png";
    }
    if (list_ext.indexOf(fileExt) === -1) {
      value = "/images/icon_file.png";
    }
    let $row = $input.closest('.form-group');
    let $widget = $row.find('.image-upload-widget');
    $widget.find('.image-upload-empty').hide();
    $widget.find('.image-upload-preview').show();
    $widget.find('.image-upload-preview img').attr('src', value);

    // Ensure delete works for this type too if needed
    $widget.find('.file-preview-delete').off('click').on('click', function (e) {
      e.preventDefault();
      $widget.find('.image-upload-preview').hide();
      $widget.find('.image-upload-empty').show();
      // Clear hidden input (URL)
      $input.val('');
    });
  }
}

/***/ }),

/***/ "./assets/back/js/builder/elements/FormBuilder.js":
/*!********************************************************!*\
  !*** ./assets/back/js/builder/elements/FormBuilder.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormBuilder; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

const IMAGE_MAX_SIZE_MB = 60;

/**
 * Modern fluent FormBuilder for creating builder element forms
 * Replaces the old string concatenation approach with a structured API
 */
class FormBuilder {
  constructor() {
    let builderData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.builderData = builderData;
    this.fields = [];
    this.currentRow = null;
    this.fieldNames = new Set();
  }
  static get IMAGE_MAX_SIZE_MB() {
    return IMAGE_MAX_SIZE_MB;
  }

  // ==================== LAYOUT MANAGEMENT ====================

  /**
   * Start a new row for manual layout control
   * @returns {FormBuilder}
   */
  row() {
    if (this.currentRow !== null) {
      console.warn('FormBuilder: Nested rows are not supported. Closing previous row.');
      this.endRow();
    }
    this.currentRow = [];
    return this;
  }

  /**
   * End the current row
   * @returns {FormBuilder}
   */
  endRow() {
    if (this.currentRow === null) {
      console.warn('FormBuilder: endRow() called without row()');
      return this;
    }
    if (this.currentRow.length > 0) {
      this.fields.push({
        type: 'row',
        fields: this.currentRow
      });
    }
    this.currentRow = null;
    return this;
  }

  /**
   * Add a fieldset (group of fields with legend)
   * @param {string} legend - Fieldset legend text
   * @param {Function} callback - Function that receives a new FormBuilder instance
   * @returns {FormBuilder}
   */
  fieldset(legend, callback) {
    const nestedBuilder = new FormBuilder(this.builderData);
    callback(nestedBuilder);
    this._addField({
      type: 'fieldset',
      legend,
      fields: nestedBuilder.fields
    });
    return this;
  }

  // ==================== FIELD TYPES ====================

  /**
   * Add a text input field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @param {boolean} [options.required=false] - Is field required
   * @param {number} [options.span=1] - Column span (1 or 2)
   * @param {string} [options.defaultValue=''] - Default value
   * @param {string} [options.placeholder=''] - Placeholder text
   * @param {string} [options.helpText=''] - Help text below field
   * @returns {FormBuilder}
   */
  addText(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 1,
      defaultValue = '',
      placeholder = '',
      helpText = ''
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'text',
      name,
      label,
      required,
      span,
      defaultValue,
      placeholder,
      helpText
    });
    return this;
  }

  /**
   * Add a number input field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addNumber(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 1,
      defaultValue = '',
      helpText = ''
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'number',
      name,
      label,
      required,
      span,
      defaultValue,
      helpText
    });
    return this;
  }

  /**
   * Add a select dropdown field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} optionsMap - Options as {value: label} pairs
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addSelect(name, label, optionsMap) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const {
      required = false,
      span = 1,
      multiple = false
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'select',
      name,
      label,
      required,
      span,
      optionsMap,
      multiple
    });
    return this;
  }

  /**
   * Add a textarea field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addTextarea(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 2,
      defaultValue = '',
      rows = 4
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'textarea',
      name,
      label,
      required,
      span,
      defaultValue,
      rows
    });
    return this;
  }

  /**
   * Add a CKEditor rich text field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addCKEditor(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 2
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'ckeditor',
      name,
      label,
      required,
      span
    });
    return this;
  }

  /**
   * Add an image upload field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addImage(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 2,
      format = '1920x600',
      acceptedFormats = 'image/jpeg,image/png',
      useFileManager = true
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'image',
      name,
      label,
      required,
      span,
      format,
      acceptedFormats,
      useFileManager
    });
    return this;
  }

  /**
   * Add a URL input field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addUrl(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 1,
      showTooltip = false
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'url',
      name,
      label,
      required,
      span,
      showTooltip
    });
    return this;
  }

  /**
   * Add an icon picker field
   * @param {string} name - Field name
   * @param {string} label - Field label
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addIconPicker(name, label) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      required = false,
      span = 1
    } = options;
    this._validateFieldName(name);
    this._addField({
      type: 'icon',
      name,
      label,
      required,
      span
    });
    return this;
  }

  /**
   * Add a table field
   * @param {number} rows - Number of rows
   * @param {number} cols - Number of columns
   * @param {Object} options - Field options
   * @returns {FormBuilder}
   */
  addTable(rows, cols) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      span = 2
    } = options;
    this._addField({
      type: 'table',
      rows,
      cols,
      span
    });
    return this;
  }

  /**
   * Add help text (not a field, just informational text)
   * @param {string} message - Help message
   * @returns {FormBuilder}
   */
  addHelp(message) {
    this._addField({
      type: 'help',
      message
    });
    return this;
  }

  // ==================== DYNAMIC REPEATABLE FIELDS ====================

  /**
   * Add a repeatable field group (replaces old fieldsets)
   * @param {string} name - Base name for the repeatable group
   * @param {Object} config - Configuration
   * @param {string} config.label - Label for the group
   * @param {number} [config.min=1] - Minimum number of items
   * @param {number} [config.max=10] - Maximum number of items
   * @param {number} [config.initial=1] - Initial number of items
   * @param {string} [config.addButtonText='+ Ajouter'] - Add button text
   * @param {string} [config.removeButtonText='Supprimer'] - Remove button text
   * @param {Function} config.template - Template function (index, builder) => builder
   * @returns {FormBuilder}
   */
  addRepeatable(name, config) {
    const {
      label,
      min = 1,
      max = 10,
      initial = 1,
      addButtonText = '+ Ajouter',
      removeButtonText = 'Supprimer',
      template
    } = config;
    this._addField({
      type: 'repeatable',
      name,
      label,
      min,
      max,
      initial,
      addButtonText,
      removeButtonText,
      template
    });
    return this;
  }

  // ==================== RENDERING ====================

  /**
   * Render the form to HTML string
   * @returns {string}
   */
  render() {
    let html = '<div class="form-builder-root">\n';
    for (const field of this.fields) {
      html += this._renderField(field);
    }
    html += '</div>';
    return html;
  }

  /**
   * Render a single field
   * @private
   */
  _renderField(field) {
    switch (field.type) {
      case 'row':
        return this._renderRow(field);
      case 'fieldset':
        return this._renderFieldset(field);
      case 'text':
        return this._renderText(field);
      case 'number':
        return this._renderNumber(field);
      case 'select':
        return this._renderSelect(field);
      case 'textarea':
        return this._renderTextarea(field);
      case 'ckeditor':
        return this._renderCKEditor(field);
      case 'image':
        return this._renderImage(field);
      case 'url':
        return this._renderUrl(field);
      case 'icon':
        return this._renderIcon(field);
      case 'table':
        return this._renderTable(field);
      case 'help':
        return this._renderHelp(field);
      case 'repeatable':
        return this._renderRepeatable(field);
      default:
        console.warn(`FormBuilder: Unknown field type "${field.type}"`);
        return '';
    }
  }
  _renderRow(field) {
    let html = '<div class="form-builder-row">\n';
    for (const rowField of field.fields) {
      html += this._renderField(rowField);
    }
    html += '</div>\n';
    return html;
  }
  _renderFieldset(field) {
    let html = `<fieldset>\n<legend>${field.legend}</legend>\n`;
    for (const nestedField of field.fields) {
      html += this._renderField(nestedField);
    }
    html += '</fieldset>\n';
    return html;
  }
  _renderText(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    const placeholder = field.placeholder ? `placeholder="${field.placeholder}"` : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <input type="text" data-name="${field.name}" value="${field.defaultValue}" class="form-control" ${requiredAttr} ${placeholder}/>\n`;
    if (field.helpText) {
      html += `  <small class="form-text text-muted">${field.helpText}</small>\n`;
    }
    html += '</div>\n';
    return html;
  }
  _renderNumber(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <input type="number" data-name="${field.name}" value="${field.defaultValue}" class="form-control" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" ${requiredAttr}/>\n`;
    if (field.helpText) {
      html += `  <small class="form-text text-muted">${field.helpText}</small>\n`;
    }
    html += '</div>\n';
    return html;
  }
  _renderSelect(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    const multipleAttr = field.multiple ? 'multiple' : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <select data-name="${field.name}" class="select2 form-control" ${requiredAttr} ${multipleAttr}>\n`;
    html += this._makeOptionTags(field.optionsMap, field.required);
    html += '  </select>\n';
    html += '</div>\n';
    return html;
  }
  _renderTextarea(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <textarea data-name="${field.name}" class="form-control" rows="${field.rows}" ${requiredAttr}>${field.defaultValue}</textarea>\n`;
    html += '</div>\n';
    return html;
  }
  _renderCKEditor(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <textarea data-name="${field.name}" class="form-control element-ckeditor" ${requiredAttr}></textarea>\n`;
    html += '</div>\n';
    return html;
  }
  _renderImage(field) {
    const requiredLabel = field.required ? ' *' : '';
    const limitSize = FormBuilder.IMAGE_MAX_SIZE_MB;
    let html = `<div class="form-group form-group-image" data-span="${field.span}">\n`;
    html += `  <label class="form-control-label mb-2">${field.label}${requiredLabel}</label>\n`;
    html += `  <input type="hidden" data-name="${field.name}_url"/>\n`;

    // Conteneur principal style "carte"
    html += `  <div class="card bg-light border-dashed image-upload-widget">\n`;
    html += `    <div class="card-body text-center p-4">\n`;

    // État vide
    html += `      <div class="image-upload-empty">\n`;
    html += `        <div class="mb-3 text-muted">\n`;
    html += `          <i class="fa fa-image fa-3x"></i>\n`;
    html += `        </div>\n`;
    html += `        <div class="d-flex justify-content-center gap-2 mb-3">\n`;

    // Bouton Upload Local (input wrappé)
    html += `          <label class="btn btn-outline-primary position-relative overflow-hidden mb-0" style="cursor: pointer;">\n`;
    html += `            <i class="fa fa-upload me-1"></i> Upload\n`;
    html += `            <input type="file" accept="${field.acceptedFormats}" data-name="${field.name}" class="position-absolute top-0 start-0 opacity-0 w-100 h-100" style="cursor: pointer;"/>\n`;
    html += `          </label>\n`;

    // Bouton File Manager
    if (field.useFileManager) {
      html += `          <button type="button" class="btn btn-primary btn-select-from-filemanager" data-target="${field.name}">\n`;
      html += `            <i class="fa fa-folder-open me-1"></i> Médiathèque\n`;
      html += `          </button>\n`;
    }
    html += `        </div>\n`;
    html += `        <small class="text-muted d-block">Formats: ${field.acceptedFormats.split(',').map(f => f.replace('image/', '.')).join(', ')}</small>\n`;
    html += `        <small class="text-muted d-block">Max: ${limitSize}Mo • Recommandé: ${field.format}</small>\n`;
    html += `      </div>\n`; // Fin empty state

    // État Preview
    html += `      <div class="image-upload-preview" style="display: none; position: relative;">\n`;
    html += `        <div class="image-preview-container mb-2" style="position: relative; display: inline-block;">\n`;
    html += `          <img src="" class="img-fluid rounded border bg-white" style="max-height: 200px; object-fit: contain;" alt="Preview">\n`;
    html += `          <button type="button" class="btn btn-danger btn-sm position-absolute top-0 end-0 translate-middle-y file-preview-delete" style="right: -10px; border-radius: 50%; width: 24px; height: 24px; padding: 0; display: flex; align-items: center; justify-content: center;">\n`;
    html += `            <i class="fa fa-times" style="font-size: 12px;"></i>\n`;
    html += `          </button>\n`;
    html += `        </div>\n`;
    html += `        <div><small class="text-muted filename-preview"></small></div>\n`;
    html += `      </div>\n`; // Fin preview state

    html += `    </div>\n`; // Fin card-body
    html += `  </div>\n`; // Fin card
    html += `</div>\n`;
    return html;
  }
  _renderUrl(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <input type="text" data-name="${field.name}" class="form-control" ${requiredAttr}/>\n`;
    if (field.showTooltip) {
      html += '  <small class="form-text text-muted">URL de la vidéo. Exemple : https://youtu.be/091287</small>\n';
    }
    html += '</div>\n';
    return html;
  }
  _renderIcon(field) {
    const requiredAttr = field.required ? 'required' : '';
    const requiredLabel = field.required ? ' *' : '';
    const icons = this._getIcons();
    let html = `<div class="form-group" data-span="${field.span}">\n`;
    html += `  <label>${field.label}${requiredLabel}</label>\n`;
    html += `  <select data-name="${field.name}" class="select2 form-control" ${requiredAttr}>\n`;
    html += this._makeOptionTags(icons, field.required);
    html += '  </select>\n';
    html += '</div>\n';
    return html;
  }
  _renderTable(field) {
    const col = name => {
      return `<td><textarea data-name="${name}" class="form-control" rows="1"></textarea></td>`;
    };
    const line = (nbCols, namePrefix, label) => {
      let html = `<tr><th>${label}</th>`;
      for (let i = 0; i < nbCols; i++) {
        html += col(`${namePrefix}_${i}`);
      }
      html += '</tr>';
      return html;
    };
    let html = `<div data-span="${field.span}">\n`;
    html += '  <table class="table table-bordered table-sm">\n';
    html += '    <tbody>\n';
    for (let i = 0; i < field.rows; i++) {
      html += line(field.cols, `table_cell_${i}`, i + 1);
    }
    html += '    </tbody>\n';
    html += '  </table>\n';
    html += '</div>\n';
    return html;
  }
  _renderHelp(field) {
    return `<p><em>${field.message}</em></p>\n`;
  }
  _renderRepeatable(field) {
    let html = `<div class="form-repeatable" data-name="${field.name}" data-min="${field.min}" data-max="${field.max}">\n`;
    html += `  <div class="form-repeatable-header">\n`;
    html += `    <strong>${field.label}</strong>\n`;
    html += `  </div>\n`;
    html += `  <div class="form-repeatable-items">\n`;

    // Render initial items
    for (let i = 1; i <= field.initial; i++) {
      html += `    <fieldset class="form-repeatable-item" data-index="${i - 1}">\n`;
      html += `      <legend>${field.label} #${i}</legend>\n`;
      const itemBuilder = new FormBuilder(this.builderData);
      field.template(i, itemBuilder);
      for (const itemField of itemBuilder.fields) {
        html += this._renderField(itemField);
      }
      if (i > field.min) {
        html += `      <button type="button" class="btn btn-sm btn-danger form-repeatable-remove">${field.removeButtonText}</button>\n`;
      }
      html += `    </fieldset>\n`;
    }
    html += `  </div>\n`;
    html += `  <button type="button" class="btn btn-sm btn-primary form-repeatable-add">${field.addButtonText}</button>\n`;

    // Render template for new items
    const templateBuilder = new FormBuilder(this.builderData);
    // Use a unique placeholder to support nested repeatables
    const placeholder = `__INDEX_${Math.random().toString(36).substr(2, 9)}__`;
    field.template(placeholder, templateBuilder);
    html += `  <template class="form-repeatable-template" data-placeholder="${placeholder}">\n`;
    html += `    <fieldset class="form-repeatable-item" data-index="${placeholder}">\n`;
    html += `      <legend>${field.label} #${placeholder}</legend>\n`;
    for (const itemField of templateBuilder.fields) {
      html += this._renderField(itemField);
    }
    html += `      <button type="button" class="btn btn-sm btn-danger form-repeatable-remove">${field.removeButtonText}</button>\n`;
    html += `    </fieldset>\n`;
    html += `  </template>\n`;
    html += '</div>\n';
    return html;
  }

  // ==================== HELPERS ====================

  _addField(field) {
    if (this.currentRow !== null) {
      this.currentRow.push(field);
    } else {
      this.fields.push(field);
    }
  }
  _validateFieldName(name) {
    if (this.fieldNames.has(name)) {
      console.warn(`FormBuilder: Duplicate field name "${name}"`);
    }
    this.fieldNames.add(name);
  }
  _makeOptionTags(options, isRequired) {
    let optionTags = isRequired ? '' : '<option value=""></option>';
    for (let optionValue in options) {
      if (typeof options[optionValue] === 'string') {
        optionTags += `<option value="${optionValue}">${options[optionValue]}</option>`;
      } else {
        optionTags += `<optgroup label="${optionValue}">`;
        for (let suboptionValue in options[optionValue]) {
          optionTags += `<option value="${suboptionValue}">${options[optionValue][suboptionValue]}</option>`;
        }
        optionTags += `</optgroup>`;
      }
    }
    return optionTags;
  }
  _getIcons() {
    return {
      "icon-application": "Application",
      "icon-marketplace": "Marketplace",
      "icon-pay": "Pay",
      "icon-acheter": "Acheter",
      "icon-envoyer": "Envoyer",
      "icon-dedouaner": "Dédouaner",
      "icon-ouvrir": "Ouvrir",
      "icon-affranchir": "Affranchir",
      "icon-avion": "Avion",
      "icon-avis-ra": "Avis RA",
      "icon-avis-rb": "Avis RB",
      "icon-bateau": "Bateau",
      "icon-boite-postale": "Boite postale",
      "icon-bulletin-dematerialise": "Bulletin dématérialisé",
      "icon-bureau-de-poste": "Bureau de poste",
      "icon-carte-bancaire": "Carte bancaire",
      "icon-cheques": "Chèques",
      "icon-collecter": "Collecter le courrier",
      "icon-distribuer": "Distribuer",
      "icon-envoyer-lre": "Envoyer LRE",
      "icon-especes": "Espèces",
      "icon-facteur": "facteur",
      "icon-facture": "Facture",
      "icon-ile": "ïle",
      "icon-imprimer": "Imprimer",
      "icon-internet": "Internet",
      "icon-justificatif": "Justificatif",
      "icon-livraison": "Livraison",
      "icon-piece-identite": "Pièce d'identité",
      "icon-poster-colis": "Poster le colis",
      "icon-poster-lettre": "Poster la lettre",
      "icon-prelevement": "Prélèvement",
      "icon-timbre": "Timbres"
    };
  }

  // ==================== DEBUG ====================

  /**
   * Debug: log the current form structure
   */
  debug() {
    console.log('FormBuilder structure:', this.fields);
    return this;
  }

  /**
   * Export form structure as JSON
   */
  toJSON() {
    return JSON.stringify(this.fields, null, 2);
  }
}

/***/ }),

/***/ "./assets/back/js/builder/elements/StylesheetElements.js":
/*!***************************************************************!*\
  !*** ./assets/back/js/builder/elements/StylesheetElements.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormBuilder */ "./assets/back/js/builder/elements/FormBuilder.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let builderData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return [{
    category: 'Média',
    icon: 'fa-images',
    name: 'Slider',
    template: 'slider',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addRepeatable('slides', {
      label: 'Slide',
      addButtonText: '+ Ajouter un slide',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addNumber(`slides][${idx}][order`, 'Ordre').addImage(`slides][${idx}][imagePath`, 'Image arrière plan (1387px X 440px)', {
          required: i <= 2,
          format: '1387x440'
        }).addText(`slides][${idx}][title`, 'Titre du slider', {
          required: i <= 2,
          span: 2
        }).addText(`slides][${idx}][subTitle`, 'Sous-titre du slider', {
          span: 2
        }).row().addText(`slides][${idx}][buttonTitle`, 'Libellé du bouton').addText(`slides][${idx}][buttonPath`, 'URL de redirection du bouton').endRow();
      }
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-images',
    name: 'Carousel',
    template: 'carousel',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addRepeatable('images', {
      label: 'Image',
      addButtonText: '+ Ajouter une image',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`images][${idx}][imagePath`, 'Image arrière plan', {
          required: i <= 2,
          acceptedFormats: 'image/jpeg,image/png'
        });
      }
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-heading',
    name: 'Titre (H1 à H6)',
    template: 'title',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().row().addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      span: 2
    }).row().addSelect('color', 'Couleur', {
      primary: 'Defaut',
      body: 'Noir'
    }, {
      required: true
    }).addSelect('subline', 'Souligné', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).endRow().render()
  }, {
    category: 'Mise en page',
    icon: 'fa-image',
    name: 'Bandeau',
    template: 'bandeau',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('height', 'Hauteur du bandeau', {
      false: 'normal',
      true: 'Ecran',
      entete: 'Entête'
    }, {
      required: true
    }).endRow().addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).row().addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addText('toptitle', 'Titre au dessus').endRow().row().addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      span: 2
    }).addCKEditor('description', 'Description').row().addText('buttonTitle', 'Libellé du bouton').addText('buttonPath', 'URL de redirection du bouton').endRow().addSelect('target', 'Ouverture du lien', {
      _blank: 'Nouvelle fenêtre',
      _self: 'Fenêtre actuelle'
    }, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-align-left',
    name: 'Texte',
    template: 'text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addCKEditor('text', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-align-justify',
    name: 'Texte avec fond',
    template: 'text_fond',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addCKEditor('text', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-image',
    name: 'Image',
    template: 'image',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addImage('imagePath1', 'Image', {
      required: true,
      acceptedFormats: 'image/jpeg,image/png'
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-link',
    name: 'Bouton',
    template: 'button',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().row().addText('title', 'Titre', {
      required: true
    }).addUrl('url', 'Lien', {
      required: true,
      showTooltip: true
    }).endRow().addSelect('target', 'Ouverture du lien', {
      _blank: 'Nouvelle fenêtre',
      _self: 'Fenêtre actuelle'
    }, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-minus',
    name: 'Séparateur',
    template: 'hr',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('style', 'Style', {
      no_line: 'Sans ligne',
      with_line: 'Avec Ligne'
    }, {
      required: true
    }).endRow().addSelect('height', 'Espacement', {
      4: 'Normal',
      5: 'Grand',
      0: 'Petit'
    }, {
      required: true
    }).render()
  }, {
    category: 'Basique',
    icon: 'fa-newspaper',
    name: 'Block Titre et texte',
    template: 'block_title_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('alignment', 'Alignement du titre', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addSelect('type', 'Type', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', 'Titre', {
      required: true,
      span: 2
    }).addCKEditor('contenu1', 'Contenu', {
      required: true
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-columns',
    name: 'Block Texte 2 colonnes',
    template: 'block_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).endRow().fieldset('Colonne gauche', builder => builder.addText('title1', 'Titre gauche').addCKEditor('contenu1', 'Contenu gauche')).fieldset('Colonne droite', builder => builder.addText('title2', 'Titre droit').addCKEditor('contenu2', 'Contenu droit')).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-images',
    name: 'Block Image colonnes',
    template: 'block_image_column234',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('alignment', 'Alignement des blocks', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).endRow().addRepeatable('columns', {
      label: 'Colonne',
      addButtonText: '+ Ajouter une colonne',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`columns][${idx}][imagePath`, `Image ${i}ère colonne`, {
          required: i <= 2,
          acceptedFormats: 'image/jpeg,image/png'
        }).addText(`columns][${idx}][title`, 'Titre', {
          required: i <= 2,
          span: 2
        }).addText(`columns][${idx}][contenu`, 'Titre du lien', {
          span: 2
        }).addText(`columns][${idx}][buttonPath`, 'Lien de redirection', {
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-icons',
    name: 'Block Picto colonnes',
    template: 'block_picto_column234',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('alignment', 'Alignement des blocks', {
      start: 'Gauche',
      center: 'Centre',
      end: 'Droite'
    }, {
      required: true
    }).addRepeatable('columns', {
      label: 'Colonne',
      addButtonText: '+ Ajouter une colonne',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addIconPicker(`columns][${idx}][iconPath`, `Picto ${i}ère colonne`, {
          required: i === 1
        }).addText(`columns][${idx}][title`, `Titre ${i}ère colonne`, {
          required: i === 1,
          span: 2
        }).addCKEditor(`columns][${idx}][contenu`, `Contenu ${i}ère colonne`, {
          required: i === 1
        }).addText(`columns][${idx}][buttonPath`, `Lien ${i}ère colonne`, {
          required: i === 1,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-photo-video',
    name: 'Block Image-Vidéo 2 colonnes',
    template: 'block_image_video_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('position', 'Affichage', {
      image_video: 'Image à gauche - Vidéo à droite',
      video_image: 'Vidéo à gauche - Image à droite'
    }, {
      required: true
    }).fieldset('Image', builder => builder.addImage('imagePath', 'Image', {
      required: true,
      acceptedFormats: 'image/jpeg,image/png'
    }).addText('titleImage', "Libellé de l'image", {
      required: true,
      span: 2
    }).addCKEditor('contenuImage', "Contenu de l'image", {
      required: true
    })).fieldset('Vidéo', builder => builder.addUrl('videoPath', 'URL de la vidéo', {
      required: true,
      showTooltip: true,
      span: 2
    }).addText('titleVideo', 'Libellé de la vidéo', {
      required: true,
      span: 2
    }).addCKEditor('contenuVideo', 'Contenu de la vidéo', {
      required: true
    })).render()
  }, {
    category: 'Mise en page',
    icon: 'fa-id-card',
    name: 'Block Image-Texte 2 colonnes',
    template: 'block_image_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Image à gauche - Texte à droite',
      text_image: 'Texte à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Image', builder => builder.addImage('imagePath', 'Image', {
      required: true,
      acceptedFormats: 'image/jpeg,image/png'
    })).fieldset('Texte', builder => builder.addText('toptitle', 'Titre au dessus', {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().row().addText('title', 'Titre').addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
      primary: 'Défaut',
      secondary: 'secondaire'
    }, {
      required: true
    }).addCKEditor('contenu', 'Contenu', {
      required: true
    })).render()
  }, {
    category: 'Média',
    icon: 'fa-video',
    name: 'Block Video-Texte 2 colonnes',
    template: 'block_video_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Image à gauche - Texte à droite',
      text_image: 'Texte à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Vidéo', builder => builder.addUrl('videoPath', 'URL de la vidéo', {
      required: true,
      showTooltip: true,
      span: 2
    })).fieldset('Texte', builder => builder.addText('toptitle', 'Titre au dessus', {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().row().addText('title', 'Titre').addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
      primary: 'Défaut',
      secondary: 'secondaire'
    }, {
      required: true
    }).addCKEditor('contenu', 'Contenu', {
      required: true
    })).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chart-bar',
    name: 'Block Chiffres clés-Texte 2 colonnes',
    template: 'block_keydata_texte_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).row().addSelect('type', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_text: 'Chiffre clé à gauche - Texte à droite',
      text_image: 'Texte à gauche - Chiffre clé'
    }, {
      required: true
    }).endRow().fieldset('Texte', builder => builder.addText('toptitle', 'Titre au dessus', {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().row().addText('title', 'Titre', {
      required: true
    }).addText('subtitle', 'Sous-titre').endRow().addSelect('subtitle_class', 'Couleur Sous-titre', {
      primary: 'Défaut',
      secondary: 'secondaire'
    }, {
      required: true
    }).addCKEditor('contenu', 'Contenu', {
      required: true
    })).fieldset('Chiffres clés', builder => builder.addCKEditor('contenu2', 'Contenu', {
      required: true
    })).render()
  }, {
    category: 'Avancé',
    icon: 'fa-folder',
    name: 'Block Onglet',
    template: 'block_onglet_text',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`onglets][${idx}][libelle`, "Libellé de l'onglet", {
          required: i <= 2,
          span: 2
        }).addCKEditor(`onglets][${idx}][contenu`, 'Contenu');
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-question-circle',
    name: 'Block Onglet FAQ',
    template: 'block_onglet_faq',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`onglets][${idx}][libelle`, "Libellé de l'onglet", {
          required: i <= 2,
          span: 2
        }).row().addText(`onglets][${idx}][title`, 'Titre du block').addText(`onglets][${idx}][subtitle`, 'Sous-titre du block').endRow().addRepeatable(`onglets][${idx}][faqs`, {
          label: 'FAQ',
          min: 1,
          max: 6,
          initial: 2,
          addButtonText: '+ Ajouter une FAQ',
          removeButtonText: 'Supprimer',
          template: (j, subBuilder) => {
            const jdx = typeof j === 'string' ? j + '_MINUS_1' : j - 1;
            return subBuilder.addNumber(`onglets][${idx}][faqs][${jdx}][order`, 'Ordre').addText(`onglets][${idx}][faqs][${jdx}][question`, "Titre de la question", {
              required: j <= 2 && i <= 2,
              span: 2
            }).addText(`onglets][${idx}][faqs][${jdx}][answer`, "Réponse", {
              required: j <= 2 && i <= 2,
              span: 2
            });
          }
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-file-download',
    name: 'Block "Documents téléchargeables"',
    template: 'block_documents_telechargeables',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addRepeatable('documents', {
      label: 'Document',
      addButtonText: '+ Ajouter un document',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`documents][${idx}][imagePath`, 'Document', {
          required: i === 1,
          acceptedFormats: 'image/jpeg,image/png,application/pdf'
        }).addText(`documents][${idx}][title`, 'Titre', {
          required: i === 1,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-folder-open',
    name: 'Onglet de page',
    template: 'onglet',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addRepeatable('onglets', {
      label: 'Onglet',
      addButtonText: '+ Ajouter un onglet',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`onglets][${idx}][libelle`, `Onglet ${i} - Libellé`, {
          span: 2
        }).addSelect(`onglets][${idx}][contenu`, `Onglet ${i} - Contenu`, builderData.onglets, {
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-table',
    name: 'Tableau',
    template: 'table',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire').row().addSelect('headers', 'Entêtes', {
      first_line: 'Première ligne',
      first_two_lines: 'Première et deuxième lignes'
    }).addSelect('type', 'Type', {
      regular: 'Tableau standard',
      pivot: 'Tableau croisé'
    }).endRow().addTable(20, 5).render()
  }, {
    category: 'Avancé',
    icon: 'fa-table',
    name: 'Block Image-Tableau 2 colonnes',
    template: 'block_image_tableau_column2',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).row().addSelect('colType', 'Type', {
      13: '1/3 - 2/3',
      12: '1/2 - 1/2',
      23: '2/3 - 1/3'
    }, {
      required: true
    }).addSelect('position', 'Affichage', {
      image_tableau: 'Image à gauche - Tableau à droite',
      tableau_image: 'Tableau à gauche - Image à droite'
    }, {
      required: true
    }).endRow().fieldset('Image', builder => builder.addImage('imagePath', 'Image', {
      required: true,
      acceptedFormats: 'image/jpeg,image/png'
    }).addText('titleImg', 'Titre de l\'image', {
      span: 2
    })).fieldset('Tableau', builder => builder.addHelp('Choisir une option d\'entête et remplir autant de lignes / colonnes que nécessaire').row().addSelect('headers', 'Entêtes', {
      first_line: 'Première ligne',
      first_two_lines: 'Première et deuxième lignes'
    }).addSelect('type', 'Type', {
      regular: 'Tableau standard',
      pivot: 'Tableau croisé'
    }).endRow().addTable(8, 5)).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chevron-down',
    name: 'Accordéon',
    template: 'accordion',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addRepeatable('items', {
      label: 'Accordéon',
      addButtonText: '+ Ajouter un item',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`items][${idx}][title`, 'Titre', {
          span: 2
        }).addImage(`items][${idx}][imagePath`, 'Image', {
          acceptedFormats: 'image/jpeg,image/png'
        }).addCKEditor(`items][${idx}][paragraph`, 'Paragraphe');
      }
    }).render()
  }, {
    category: 'Dynamique',
    icon: 'fa-rss',
    name: 'Block Derniers articles',
    template: 'last_news',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('type', 'Type article', {
      1: 'Actualités',
      3: "Évènement"
    }, {
      required: true
    }).addNumber('limit', "Nombre d'élément(s) maximum").endRow().render()
  }, {
    category: 'Dynamique',
    icon: 'fa-newspaper',
    name: 'Block Actualités',
    template: 'actualites',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).row().addSelect('categoryID', 'Filtre des actualités via une catégorie', builderData.categories).addNumber('limit', "Nombre d'élément(s) maximum").endRow().addText('topTitle', "Titre top", {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).addCKEditor('description', "Description du bloc").addText('buttonTitle', "Titre du bouton de redirection", {
      span: 2
    }).render()
  }, {
    category: 'Média',
    icon: 'fa-youtube',
    name: 'Vidéo Youtube',
    template: 'youtube',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addUrl('videoPath', 'URL de la vidéo', {
      required: true,
      showTooltip: true
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-chart-line',
    name: 'Block Chiffres clés',
    template: 'block_key_datas',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).addRepeatable('keys', {
      label: 'Chiffre clé',
      addButtonText: '+ Ajouter un chiffre clé',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`keys][${idx}][key`, `Chiffre clé ${i + 1}`, {
          required: i < 3,
          span: 2
        }).addText(`keys][${idx}][data`, "Descriptif", {
          required: i < 3,
          span: 2
        });
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-th-large',
    name: 'Block 4 Cards',
    template: 'block_4_cards',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addText('topTitle', "Titre top du bloc", {
      span: 2
    }).row().addSelect('typetitle', 'Balise Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).addSelect('styletitle', 'Style Hn', {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6'
    }, {
      required: true
    }).endRow().addText('title', "Titre du bloc", {
      span: 2
    }).row().addText('buttonTitle', "Titre du bouton de redirection").addText('buttonPath', "URL de redirection").endRow().addRepeatable('cards', {
      label: 'Carte',
      addButtonText: '+ Ajouter une carte',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addSelect(`cards][${idx}][alignment`, 'Alignement des éléments', {
          start: 'Gauche',
          center: 'Centre',
          end: 'Droite'
        }, {
          required: true
        }).addIconPicker(`cards][${idx}][imageIco`, 'Icône').addText(`cards][${idx}][title`, "Titre de la carte", {
          required: i === 0,
          span: 2
        }).addText(`cards][${idx}][description`, "Description de la carte", {
          span: 2
        }).row().addText(`cards][${idx}][linkTitle`, "Titre du lien").addText(`cards][${idx}][linkPath`, "URL redirection").endRow();
      }
    }).render()
  }, {
    category: 'Avancé',
    icon: 'fa-list-ol',
    name: 'Etapes',
    template: 'step',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addText('title', 'Titre', {
      span: 2
    }).addImage('imagePath', 'Image', {
      acceptedFormats: 'image/jpeg,image/png'
    }).addRepeatable('steps', {
      label: 'Etape',
      addButtonText: '+ Ajouter une étape',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`steps][${idx}][step`, 'Etape n°', {
          span: 2
        }).addText(`steps][${idx}][title`, 'Titre', {
          span: 2
        }).addCKEditor(`steps][${idx}][paragraph`, 'Paragraphe');
      }
    }).render()
  },
  // ==================== NOUVEAUX ÉLÉMENTS ====================
  {
    category: 'Contenu interactif',
    icon: 'fa-rectangle-list',
    name: 'Formulaire Avancé',
    template: 'form_builder',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre au-dessus du formulaire', {
      span: 2
    }).addCKEditor('description', 'Description').addSelect('formId', 'Sélectionnez le formulaire à afficher', builderData.forms || {}, {
      required: true,
      span: 2
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-star',
    name: 'Hero Section',
    template: 'hero_section',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addImage('backgroundImage', 'Image de fond (1920x1080)', {
      required: true,
      format: '1920x1080'
    }).addSelect('overlayOpacity', 'Opacité du filtre', {
      '0': 'Aucun',
      '0.2': 'Léger (20%)',
      '0.5': 'Moyen (50%)',
      '0.8': 'Sombre (80%)'
    }, {
      required: true
    }).addText('title', 'Titre principal', {
      span: 2,
      required: true
    }).addText('subtitle', 'Sous-titre', {
      span: 2
    }).fieldset('Bouton Principal', builder => builder.addText('btn1_text', 'Libellé').addUrl('btn1_url', 'Lien')).fieldset('Bouton Secondaire', builder => builder.addText('btn2_text', 'Libellé').addUrl('btn2_url', 'Lien')).render()
  }, {
    category: 'Marketing',
    icon: 'fa-table',
    name: 'Tableaux de Prix',
    template: 'pricing_table',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addText('mainTitle', 'Titre de la section', {
      span: 2
    }).addRepeatable('plans', {
      label: 'Offre',
      addButtonText: '+ Ajouter une offre',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`plans][${idx}][name`, 'Nom de l\'offre (ex: Standard)', {
          required: true
        }).addSelect(`plans][${idx}][highlight`, 'Mettre en avant', {
          false: 'Non',
          true: 'Oui'
        }).row().addText(`plans][${idx}][price`, 'Prix').addText(`plans][${idx}][currency`, 'Devise (ex: €)', {
          defaultValue: '€'
        }).endRow().addText(`plans][${idx}][period`, 'Période (ex: /mois)').addTextarea(`plans][${idx}][features`, 'Fonctionnalités (une par ligne)', {
          rows: 5
        }).fieldset('Bouton', btnBuilder => btnBuilder.addText(`plans][${idx}][btn_text`, 'Libellé').addUrl(`plans][${idx}][btn_url`, 'Lien'));
      }
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-comments',
    name: 'Témoignages',
    template: 'testimonials',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre de la section', {
      span: 2
    }).addRepeatable('reviews', {
      label: 'Témoignage',
      addButtonText: '+ Ajouter un avis',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`reviews][${idx}][avatar`, 'Photo (Avatar)', {
          format: '200x200'
        }).row().addText(`reviews][${idx}][name`, 'Nom', {
          required: true
        }).addText(`reviews][${idx}][position`, 'Poste / Entreprise').endRow().addSelect(`reviews][${idx}][stars`, 'Note', {
          5: '⭐⭐⭐⭐⭐',
          4: '⭐⭐⭐⭐',
          3: '⭐⭐⭐',
          2: '⭐⭐',
          1: '⭐'
        }, {
          required: true
        }).addTextarea(`reviews][${idx}][quote`, 'Citation', {
          required: true,
          rows: 3
        });
      }
    }).render()
  }, {
    category: 'Marketing',
    icon: 'fa-handshake-o',
    name: 'Barre de Logos',
    template: 'logo_bar',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addRepeatable('logos', {
      label: 'Partenaire',
      addButtonText: '+ Ajouter un logo',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`logos][${idx}][image`, 'Logo', {
          required: true
        }).addUrl(`logos][${idx}][url`, 'Lien (optionnel)');
      }
    }).render()
  }, {
    category: 'Visuel',
    icon: 'fa-th',
    name: 'Galerie Masonry',
    template: 'masonry_gallery',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addRepeatable('images', {
      label: 'Image',
      addButtonText: '+ Ajouter une image',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`images][${idx}][path`, 'Image', {
          required: true
        }).addText(`images][${idx}][caption`, 'Légende (optionnel)');
      }
    }).render()
  }, {
    category: 'Visuel',
    icon: 'fa-adjust',
    name: 'Comparateur Avant/Après',
    template: 'before_after',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).row().addImage('image_before', 'Image "Avant"', {
      required: true
    }).addImage('image_after', 'Image "Après"', {
      required: true
    }).endRow().row().addText('label_before', 'Label "Avant"', {
      defaultValue: 'Avant'
    }).addText('label_after', 'Label "Après"', {
      defaultValue: 'Après'
    }).endRow().render()
  }, {
    category: 'Corporate',
    icon: 'fa-history',
    name: 'Timeline',
    template: 'timeline',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addSelect('orientation', 'Orientation', {
      vertical: 'Verticale',
      horizontal: 'Horizontale'
    }, {
      required: true
    }).addRepeatable('events', {
      label: 'Événement',
      addButtonText: '+ Ajouter un événement',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addText(`events][${idx}][date`, 'Date / Année', {
          required: true
        }).addText(`events][${idx}][title`, 'Titre', {
          required: true
        }).addTextarea(`events][${idx}][description`, 'Description', {
          rows: 3
        }).addIconPicker(`events][${idx}][icon`, 'Icône');
      }
    }).render()
  }, {
    category: 'Corporate',
    icon: 'fa-users',
    name: 'Équipe',
    template: 'team_members',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addText('title', 'Titre de la section', {
      span: 2
    }).addRepeatable('members', {
      label: 'Membre',
      addButtonText: '+ Ajouter un membre',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.addImage(`members][${idx}][photo`, 'Photo', {
          format: '400x400',
          required: true
        }).row().addText(`members][${idx}][name`, 'Nom', {
          required: true
        }).addText(`members][${idx}][position`, 'Poste', {
          required: true
        }).endRow().addTextarea(`members][${idx}][bio`, 'Courte biographie', {
          rows: 2
        }).row().addUrl(`members][${idx}][linkedin`, 'LinkedIn').addUrl(`members][${idx}][twitter`, 'Twitter / X').endRow();
      }
    }).render()
  }, {
    category: 'Corporate',
    icon: 'fa-map-marker',
    name: 'Google Maps Pro',
    template: 'google_maps',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addText('address', 'Adresse complète', {
      span: 2,
      required: true,
      helpText: 'Utilisée pour centrer la carte si lat/lng ne sont pas fournis'
    }).row().addNumber('latitude', 'Latitude', {
      helpText: 'Ex: 48.8566'
    }).addNumber('longitude', 'Longitude', {
      helpText: 'Ex: 2.3522'
    }).endRow().row().addNumber('zoom', 'Niveau de zoom (1-20)', {
      defaultValue: 15,
      min: 1,
      max: 20
    }).addSelect('mapStyle', 'Style de carte', {
      light: 'Clair',
      dark: 'Sombre',
      satellite: 'Satellite'
    }, {
      required: true
    }).endRow().fieldset('Marqueur', builder => builder.addText('markerTitle', 'Titre du marqueur').addTextarea('markerDesc', 'Description (Info-bulle)')).render()
  }, {
    category: 'Corporate',
    icon: 'fa-sort-numeric-asc',
    name: 'Compteurs Animés',
    template: 'animated_counters',
    form: new _FormBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](builderData).addSelect('fullwidth', 'Pleine largeur', {
      false: 'Non',
      true: 'Oui'
    }, {
      required: true
    }).addImage('backgroundImage', 'Image de fond (optionnel)').addRepeatable('counters', {
      label: 'Compteur',
      addButtonText: '+ Ajouter un compteur',
      removeButtonText: 'Supprimer',
      template: (i, builder) => {
        const idx = typeof i === 'string' ? i + '_MINUS_1' : i - 1;
        return builder.row().addNumber(`counters][${idx}][number`, 'Nombre final', {
          required: true
        }).addText(`counters][${idx}][suffix`, 'Suffixe (ex: %, +)', {
          span: 1
        }).endRow().addText(`counters][${idx}][label`, 'Libellé', {
          required: true
        }).addIconPicker(`counters][${idx}][icon`, 'Icône');
      }
    }).render()
  }];
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BuilderElement_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderElement.vue */ "./assets/back/js/builder/components/BuilderElement.vue");
/* harmony import */ var _BuilderSidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BuilderSidebar.vue */ "./assets/back/js/builder/components/BuilderSidebar.vue");
/* harmony import */ var _RevisionsModal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RevisionsModal.vue */ "./assets/back/js/builder/components/RevisionsModal.vue");
/* harmony import */ var _elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/StylesheetElements */ "./assets/back/js/builder/elements/StylesheetElements.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default()),
    BuilderElement: _BuilderElement_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BuilderSidebar: _BuilderSidebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    RevisionsModal: _RevisionsModal_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    elements: {
      type: [Array, Object, String],
      default: () => []
    },
    basename: {
      type: String,
      required: true
    },
    builderData: {
      type: Object,
      default: () => ({})
    },
    previewUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentElements: this.initialize(this.elements),
      formHasChanged: false,
      previewWindow: null,
      previewUpdateTimer: null
    };
  },
  watch: {
    currentElements: {
      handler() {
        this.schedulePreviewUpdate();
      },
      deep: true
    }
  },
  methods: {
    onChange() {
      this.formHasChanged = true;
    },
    removeElementById(id) {
      this.currentElements = this.currentElements.filter(element => element.id !== id);
      this.formHasChanged = true;
    },
    moveUp(index) {
      if (index > 0) {
        this.swapElements(index, index - 1);
      }
    },
    moveDown(index) {
      if (index < this.currentElements.length - 1) {
        this.swapElements(index, index + 1);
      }
    },
    swapElements(oldPosition, newPosition) {
      let tmpElement = this.currentElements[oldPosition];
      this.$set(this.currentElements, oldPosition, this.currentElements[newPosition]);
      this.$set(this.currentElements, newPosition, tmpElement);
      this.formHasChanged = true;
    },
    hideFormElement(id) {
      const element = this.currentElements.find(element => element.id === id);
      if (element) element.formVisible = false;
    },
    showFormElement(id) {
      const element = this.currentElements.find(element => element.id === id);
      if (element) element.formVisible = true;
    },
    hideElement(id) {
      const element = this.currentElements.find(element => element.id === id);
      if (element) {
        element.visible = false;
        this.formHasChanged = true;
      }
    },
    showElement(id) {
      const element = this.currentElements.find(element => element.id === id);
      if (element) {
        element.visible = true;
        this.formHasChanged = true;
      }
    },
    initialize(elements) {
      if (!elements) {
        return [];
      }
      let currentElements = [];
      Object.entries(elements).forEach(element => {
        const [key, value] = element;
        let currentElement = this._createElementFromTemplate(value.template, value);
        if (currentElement) {
          currentElement.formVisible = false;
          currentElements.push(currentElement);
        }
      });
      return currentElements;
    },
    _createElementFromTemplate(template, element) {
      let available = (0,_elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_5__["default"])(this.builderData).find(element => element.template === template);
      if (!available) {
        return null;
      }
      let createdElement = {
        id: this._randomString(),
        template: template,
        name: available.name,
        icon: available.icon,
        visible: element ? element.visible === '1' : true,
        form: available.form,
        formVisible: true
      };
      if (element) {
        // Preserve existing properties (id, name, etc.) but ensure form structure is up to date
        return Object.assign({}, createdElement, element);
      }
      return createdElement;
    },
    duplicateElement(id) {
      const index = this.currentElements.findIndex(el => el.id === id);
      if (index === -1) return;
      const original = this.currentElements[index];

      // Deep clone the element to avoid reference issues
      // We need to generate a new ID and potentially handle form content cloning if it's complex
      // For now, simple object copy with new ID

      let newElement = JSON.parse(JSON.stringify(original));
      newElement.id = this._randomString();
      newElement.name = original.name + ' (Copie)';
      newElement.icon = original.icon;
      newElement.formVisible = true; // Open the new element's form

      // Insert after the original
      this.currentElements.splice(index + 1, 0, newElement);
      this.formHasChanged = true;

      // Scroll to new element?
    },

    collapseAll() {
      this.currentElements.forEach(element => {
        element.formVisible = false;
      });
    },
    expandAll() {
      this.currentElements.forEach(element => {
        element.formVisible = true;
      });
    },
    clearAll() {
      if (confirm('Êtes-vous sûr de vouloir supprimer tous les éléments ?')) {
        this.currentElements = [];
        this.formHasChanged = true;
      }
    },
    openPreview() {
      if (!this.previewUrl) {
        alert('L\'URL de prévisualisation n\'est pas configurée.');
        return;
      }
      const windowFeatures = 'width=1200,height=800,menubar=no,toolbar=no,location=no,status=no';
      if (this.previewWindow && !this.previewWindow.closed) {
        this.previewWindow.focus();
      } else {
        this.previewWindow = window.open(this.previewUrl, 'BuilderPreview', windowFeatures);

        // Wait for preview window to be ready
        window.addEventListener('message', event => {
          if (event.data.type === 'PREVIEW_READY') {
            this.sendPreviewUpdate();
          }
        });
      }
    },
    openRevisions() {
      if (this.$refs.revisionsModal) {
        this.$refs.revisionsModal.show();
      }
    },
    restoreElements(elements) {
      // elements comes directly from the database json via API
      // it needs to be parsed through initialize to convert to valid Vue structure with generated IDs
      // Ensure all elements forms are open by default like normal initial load

      let restoredElements = [];
      if (elements && typeof elements === 'object') {
        restoredElements = this.initialize(elements);
      }

      // Small delay to allow Vue to clear DOM safely before injecting new ones
      this.currentElements = [];
      this.$nextTick(() => {
        this.currentElements = restoredElements;
        this.formHasChanged = true;
      });
    },
    previewRevision(elements) {
      if (!this.previewWindow || this.previewWindow.closed) {
        alert('Veuillez d\'abord ouvrir la fenêtre d\'aperçu en direct avec le bouton "Aperçu".');
        return;
      }
      let previewElements = [];
      if (elements && typeof elements === 'object') {
        previewElements = this.initialize(elements);
      }
      const elementsToSend = JSON.parse(JSON.stringify(previewElements));
      this.previewWindow.postMessage({
        type: 'UPDATE_PREVIEW',
        elements: elementsToSend
      }, '*');
    },
    sendPreviewUpdate() {
      if (this.previewWindow && !this.previewWindow.closed) {
        // Deep clone elements
        const elementsToSend = JSON.parse(JSON.stringify(this.currentElements));

        // Capture current values from the DOM for each element
        // Since ElementFormMounter doesn't sync back to Vue data, we must read from DOM
        elementsToSend.forEach(element => {
          // Find the form container for this element
          // We can use the element ID to find inputs
          // Inputs have names like basename[id][property]
          // Or we can search by data-name attribute within the builder element

          // We need to find the DOM element corresponding to this builder element
          // Since we don't have direct refs to DOM elements easily mapped here without iterating
          // We can search by the hidden inputs that ElementFormMounter creates/updates?
          // Actually ElementFormMounter updates inputs inside the .builder__element__form

          // Let's try to find inputs by data-name in the document that belong to this element
          // The inputs are inside a div with ref="elementForm" in BuilderElement
          // But we are in Builder.vue

          // We can query selector using the element ID if we had put it on the DOM
          // BuilderElement puts ID on inputs: elementId + '-' + propertyName

          if (element.form) {
            // Parse the form string to find what properties we expect
            // This is a bit hacky but we know what properties to look for from the form HTML string?
            // No, that's hard.

            // Better: Look for all inputs that start with the element ID in their ID attribute
            // ElementFormMounter.inputId(element.id, propertyName) -> elementId + '-' + propertyName

            const prefix = element.id + '-';
            // Use a more specific selector to avoid getting inputs from other elements if IDs overlap (unlikely but safe)
            // But actually we want to find inputs based on the structure ElementFormMounter created.
            // ElementFormMounter uses ID: elementId + '-' + cleanPropName
            const inputs = document.querySelectorAll(`[id^="${prefix}"]`);
            inputs.forEach(input => {
              // Skip if input doesn't have a name (shouldn't happen for valid fields)
              if (!input.name) return;

              // Parse name to build nested structure
              // Name format: basename[elementId][prop][subprop]...
              // We want to extract [prop][subprop]...

              // The prefix in name is `${this.basename}[${element.id}]`
              const namePrefix = `${this.basename}[${element.id}]`;
              if (!input.name.startsWith(namePrefix)) return;
              const remaining = input.name.substring(namePrefix.length);
              // remaining is like "[plans][0][name]" or "[title]"

              const path = remaining.split('][').map(p => p.replace(/[\[\]]/g, ''));
              let value;
              if (input.type === 'checkbox' || input.type === 'radio') {
                if (input.checked) {
                  value = input.value;
                } else if (input.type === 'checkbox' && !element[path[0]]) {
                  // Handle unchecked
                } else {
                  return; // Skip unchecked radio or unchecked box if we don't handle false explicit
                }
              } else {
                value = input.value;
              }

              // Special handling for Trix
              if (input.tagName === 'TRIX-EDITOR') {
                value = input.value;
              }
              if (value !== undefined) {
                this._setNestedValue(element, path, value);
              }
            });
          }
        });
        this.previewWindow.postMessage({
          type: 'UPDATE_PREVIEW',
          elements: elementsToSend
        }, '*');
      }
    },
    _setNestedValue(obj, path, value) {
      let current = obj;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];

        // If key is empty string? shouldn't happen with split logic above
        // If we need to create array or object?
        // "plans" -> "0" -> "name"
        // obj["plans"] should be array/object.

        if (current[key] === undefined || current[key] === null) {
          // Check if next key is a number to decide if array
          const nextKey = path[i + 1];
          const isInt = /^\d+$/.test(nextKey);
          current[key] = isInt ? [] : {};
        }
        current = current[key];
      }
      const lastKey = path[path.length - 1];
      current[lastKey] = value;
    },
    schedulePreviewUpdate() {
      if (this.previewUpdateTimer) {
        clearTimeout(this.previewUpdateTimer);
      }
      this.previewUpdateTimer = setTimeout(() => {
        this.sendPreviewUpdate();
      }, 500); // Debounce 500ms
    },

    _randomString() {
      let x = 2147423648;
      let now = +new Date();
      return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
    }
  },
  mounted() {
    // Track form changes for unsaved warning
    document.addEventListener('change', () => this.formHasChanged = true);
    document.addEventListener('submit', () => this.formHasChanged = false);

    // Listen for ANY input change in the builder to update preview
    // We use a debounced update, so it's safe to listen to 'input' events
    const updateEvents = ['input', 'change', 'blur', 'keyup'];
    updateEvents.forEach(eventType => {
      this.$el.addEventListener(eventType, e => {
        // Only care if it's an input/select/textarea inside the builder
        if (e.target.matches('input, select, textarea, trix-editor')) {
          this.schedulePreviewUpdate();
        }
      }, {
        capture: true
      }); // Use capture to ensure we catch it
    });

    // Also listen for Select2 events using jQuery since they don't bubble as native events
    if (__webpack_provided_window_dot_jQuery) {
      const $el = __webpack_provided_window_dot_jQuery(this.$el);
      $el.on('select2:select select2:unselect', e => {
        this.schedulePreviewUpdate();
      });
    }
    window.addEventListener('beforeunload', event => {
      if (this.formHasChanged) {
        event.preventDefault();
        event.returnValue = '';
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/ElementFormMounter */ "./assets/back/js/builder/elements/ElementFormMounter.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['basename', 'element', 'currentElements', 'builderData', 'index'],
  data() {
    return {
      isEditingName: false
    };
  },
  computed: {
    templateInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].inputName(this.basename, this.element.id, 'template');
    },
    visibleInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].inputName(this.basename, this.element.id, 'visible');
    },
    nameInputName() {
      return _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].inputName(this.basename, this.element.id, 'name');
    },
    form() {
      return this.element.form;
    },
    formVisible() {
      return this.element.formVisible;
    }
  },
  methods: {
    startEditingName() {
      this.isEditingName = true;
      this.$nextTick(() => {
        if (this.$refs.nameInput) {
          this.$refs.nameInput.focus();
        }
      });
    },
    stopEditingName() {
      this.isEditingName = false;
      if (!this.element.name || this.element.name.trim() === '') {
        // Revert to default name if empty? Or keep empty? 
        // Let's keep it but maybe we should have a default.
        // For now, let user decide.
      }
    },
    remove() {
      _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].confirm(() => this.$emit('elementRemoved', this.element.id));
    },
    duplicate() {
      this.$emit('duplicate', this.element.id);
    },
    toggleForm() {
      if (this.formVisible) {
        if (_elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].validateFormElement(this.$refs.elementForm)) {
          this.$emit('elementFormHidden', this.element.id);
        }
      } else {
        this.$emit('elementFormShown', this.element.id);
      }
    },
    toggleVisibility() {
      if (this.element.visible) {
        this.$emit('elementHidden', this.element.id);
      } else {
        this.$emit('elementShown', this.element.id);
      }
    }
  },
  mounted() {
    _elements_ElementFormMounter__WEBPACK_IMPORTED_MODULE_0__["default"].mount(this.basename, this.element, this.$refs.elementForm);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/StylesheetElements */ "./assets/back/js/builder/elements/StylesheetElements.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BuilderSidebar',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: ['builderData'],
  data() {
    return {
      availableElements: (0,_elements_StylesheetElements__WEBPACK_IMPORTED_MODULE_2__["default"])(this.builderData),
      searchQuery: '',
      collapsedCategories: {}
    };
  },
  computed: {
    filteredElements() {
      if (!this.searchQuery) {
        return this.availableElements;
      }
      const query = this.searchQuery.toLowerCase();
      return this.availableElements.filter(element => element.name.toLowerCase().includes(query));
    },
    groupedElements() {
      const groups = {};
      // Define order of categories if desired, or just let them appear naturally
      const order = ['Mise en page', 'Basique', 'Média', 'Avancé', 'Dynamique', 'Autres'];
      this.filteredElements.forEach(element => {
        const category = element.category || 'Autres';
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(element);
      });

      // Sort keys based on order
      const sortedGroups = {};
      Object.keys(groups).sort((a, b) => {
        return order.indexOf(a) - order.indexOf(b);
      }).forEach(key => {
        sortedGroups[key] = groups[key];
      });
      return sortedGroups;
    }
  },
  methods: {
    toggleCategory(category) {
      this.$set(this.collapsedCategories, category, !this.collapsedCategories[category]);
    },
    cloneElement(element) {
      // Return a fresh copy of the element structure for the builder
      return {
        template: element.template,
        name: element.name,
        icon: element.icon,
        // Pass the icon to the builder element
        visible: true,
        form: element.form,
        formVisible: true,
        // Auto-open form on drop
        id: this._randomString()
      };
    },
    _randomString() {
      let x = 2147423648;
      let now = +new Date();
      return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ now).toString(36);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RevisionsModal',
  props: {
    entityClass: {
      type: String,
      required: true
    },
    entityId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      revisions: [],
      loading: false,
      error: null,
      modalInstance: null
    };
  },
  methods: {
    show() {
      if (!this.modalInstance && window.bootstrap) {
        this.modalInstance = new window.bootstrap.Modal(this.$refs.modal);
      }
      if (this.modalInstance) {
        this.modalInstance.show();
        this.fetchRevisions();
      } else {
        // Fallback if bootstrap is injected globally via jQuery
        if (__webpack_provided_window_dot_jQuery) {
          __webpack_provided_window_dot_jQuery(this.$refs.modal).modal('show');
          this.fetchRevisions();
        }
      }
    },
    hide() {
      if (this.modalInstance) {
        this.modalInstance.hide();
      } else if (__webpack_provided_window_dot_jQuery) {
        __webpack_provided_window_dot_jQuery(this.$refs.modal).modal('hide');
      }
    },
    fetchRevisions() {
      if (!this.entityClass || !this.entityId) {
        this.error = "Identifiants de l'entité manquants.";
        return;
      }
      this.loading = true;
      this.error = null;
      const url = `/admin/api/builder-revisions?entityClass=${encodeURIComponent(this.entityClass)}&entityId=${encodeURIComponent(this.entityId)}`;
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des révisions');
        }
        return response.json();
      }).then(data => {
        this.revisions = data;
      }).catch(error => {
        this.error = error.message;
      }).finally(() => {
        this.loading = false;
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    restoreRevision(revision) {
      if (confirm('Êtes-vous sûr de vouloir remplacer le contenu actuel par cette ancienne version ? (Les modifications ne seront définitives qu\'après avoir sauvegardé la page)')) {
        this.$emit('restore', revision.elements);
        this.hide();
      }
    },
    previewRevision(revision) {
      this.$emit('preview', revision.elements);
    }
  },
  mounted() {
    // Initialize modal when component is mounted if bootstrap is available
    if (window.bootstrap) {
      this.modalInstance = new window.bootstrap.Modal(this.$refs.modal, {
        backdrop: 'static'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder-wrapper"
  }, [_c("builder-sidebar", {
    attrs: {
      "builder-data": _vm.builderData
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "builder-content"
  }, [_c("div", {
    staticClass: "builder-toolbar"
  }, [_c("div", {
    staticClass: "builder-toolbar__section"
  }, [_c("div", {
    staticClass: "builder-toolbar__group"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      type: "button",
      title: "Réduire tous les éléments"
    },
    on: {
      click: _vm.collapseAll
    }
  }, [_c("i", {
    staticClass: "fa fa-compress"
  })]), _vm._v(" "), _c("div", {
    staticClass: "builder-toolbar__divider"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      type: "button",
      title: "Développer tous les éléments"
    },
    on: {
      click: _vm.expandAll
    }
  }, [_c("i", {
    staticClass: "fa fa-expand"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "builder-toolbar__section"
  }, [_vm.previewUrl ? _c("button", {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      type: "button",
      title: "Ouvrir l'aperçu en direct"
    },
    on: {
      click: _vm.openPreview
    }
  }, [_c("i", {
    staticClass: "fa fa-eye me-1"
  }), _vm._v(" Aperçu\n                ")]) : _vm._e(), _vm._v(" "), _vm.builderData && _vm.builderData.entityClass && _vm.builderData.entityId ? _c("button", {
    staticClass: "btn btn-sm btn-outline-info",
    attrs: {
      type: "button",
      title: "Voir l'historique des révisions"
    },
    on: {
      click: _vm.openRevisions
    }
  }, [_c("i", {
    staticClass: "fa fa-history me-1"
  }), _vm._v(" Historique\n                ")]) : _vm._e(), _vm._v(" "), _vm.currentElements.length > 0 ? _c("button", {
    staticClass: "btn btn-sm btn-outline-danger",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.clearAll
    }
  }, [_c("i", {
    staticClass: "fa fa-trash me-1"
  }), _vm._v(" Tout supprimer\n                ")]) : _vm._e()])]), _vm._v(" "), _c("draggable", {
    staticClass: "builder-canvas",
    attrs: {
      handle: ".builder__element__handle",
      group: "builder",
      "ghost-class": "builder__element--ghost"
    },
    on: {
      change: _vm.onChange
    },
    model: {
      value: _vm.currentElements,
      callback: function ($$v) {
        _vm.currentElements = $$v;
      },
      expression: "currentElements"
    }
  }, [_vm._l(_vm.currentElements, function (element, index) {
    return _c("builder-element", {
      key: element.id,
      attrs: {
        element: element,
        basename: _vm.basename,
        "builder-data": _vm.builderData,
        "current-elements": _vm.currentElements,
        index: index
      },
      on: {
        elementRemoved: _vm.removeElementById,
        elementFormHidden: _vm.hideFormElement,
        elementFormShown: _vm.showFormElement,
        elementHidden: _vm.hideElement,
        elementShown: _vm.showElement,
        duplicate: _vm.duplicateElement,
        moveUp: function ($event) {
          return _vm.moveUp(index);
        },
        moveDown: function ($event) {
          return _vm.moveDown(index);
        }
      }
    });
  }), _vm._v(" "), _vm.currentElements.length === 0 ? _c("div", {
    staticClass: "builder-canvas__empty",
    attrs: {
      slot: "footer"
    },
    slot: "footer"
  }, [_c("div", {
    staticClass: "text-center text-muted"
  }, [_c("i", {
    staticClass: "fa fa-arrow-left fa-2x mb-3"
  }), _vm._v(" "), _c("p", [_vm._v("Glissez des éléments depuis la barre latérale pour construire votre page.")])])]) : _vm._e()], 2)], 1), _vm._v(" "), _vm.builderData && _vm.builderData.entityClass && _vm.builderData.entityId ? _c("revisions-modal", {
    ref: "revisionsModal",
    attrs: {
      "entity-class": _vm.builderData.entityClass,
      "entity-id": _vm.builderData.entityId
    },
    on: {
      restore: _vm.restoreElements,
      preview: _vm.previewRevision
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder__element",
    class: {
      "builder__element--hidden": !_vm.element.visible
    }
  }, [_c("div", {
    staticClass: "builder__element__header"
  }, [_c("div", {
    staticClass: "builder__element__header__left"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "builder__element__title"
  }, [_c("span", {
    staticClass: "badge badge-secondary"
  }, [_vm._v(_vm._s(_vm.index + 1))]), _vm._v(" "), _c("i", {
    staticClass: "fa me-2 text-muted",
    class: _vm.element.icon || "fa-cube",
    staticStyle: {
      "margin-right": "8px"
    }
  }), _vm._v(" "), _vm.isEditingName ? _c("div", {
    staticClass: "builder__element__title-edit"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.element.name,
      expression: "element.name"
    }],
    ref: "nameInput",
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.element.name
    },
    on: {
      blur: _vm.stopEditingName,
      keydown: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.stopEditingName.apply(null, arguments);
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.element, "name", $event.target.value);
      }
    }
  })]) : _c("strong", {
    attrs: {
      title: "Double-cliquer pour renommer"
    },
    on: {
      dblclick: _vm.startEditingName
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.element.name) + "\n                    "), _c("i", {
    staticClass: "fa fa-pencil ms-2 text-muted",
    staticStyle: {
      "font-size": "0.8em",
      opacity: "0.5"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "builder__element__actions"
  }, [_vm.form ? _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: _vm.formVisible ? "Réduire" : "Éditer"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.toggleForm.apply(null, arguments);
      }
    }
  }, [_c("i", {
    class: _vm.formVisible ? "fa fa-chevron-down" : "fa fa-chevron-right"
  })]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: "Dupliquer"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.duplicate.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-copy"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-light",
    attrs: {
      title: _vm.element.visible ? "Masquer" : "Afficher"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.toggleVisibility.apply(null, arguments);
      }
    }
  }, [_c("i", {
    class: _vm.element.visible ? "fa fa-eye" : "fa fa-eye-slash"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      title: "Supprimer"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.remove.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-trash"
  })])])]), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.templateInputName
    },
    domProps: {
      value: _vm.element.template
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.visibleInputName
    },
    domProps: {
      value: _vm.element.visible ? 1 : 0
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "hidden",
      name: _vm.nameInputName
    },
    domProps: {
      value: _vm.element.name
    }
  }), _vm._v(" "), _c("transition", {
    attrs: {
      name: "slide"
    }
  }, [_vm.form ? _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formVisible,
      expression: "formVisible"
    }],
    staticClass: "builder__element__body"
  }, [_c("div", {
    ref: "elementForm",
    staticClass: "builder__element__form",
    domProps: {
      innerHTML: _vm._s(_vm.form)
    }
  })]) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder__element__handle",
    attrs: {
      title: "Déplacer"
    }
  }, [_c("i", {
    staticClass: "fa fa-grip-vertical"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "builder-sidebar"
  }, [_c("div", {
    staticClass: "builder-sidebar__header"
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "builder-sidebar__content"
  }, _vm._l(_vm.groupedElements, function (elements, category) {
    return _c("div", {
      key: category,
      staticClass: "builder-sidebar__category mb-3"
    }, [_c("div", {
      staticClass: "builder-sidebar__category-title d-flex justify-content-between align-items-center p-2 bg-light rounded cursor-pointer",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function ($event) {
          return _vm.toggleCategory(category);
        }
      }
    }, [_c("span", {
      staticClass: "fw-bold text-uppercase small text-muted"
    }, [_vm._v(_vm._s(category))]), _vm._v(" "), _c("i", {
      staticClass: "fa fa-xs text-muted",
      class: _vm.collapsedCategories[category] ? "fa-chevron-right" : "fa-chevron-down"
    })]), _vm._v(" "), _c("draggable", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.collapsedCategories[category],
        expression: "!collapsedCategories[category]"
      }],
      staticClass: "dragArea list-group mt-2",
      attrs: {
        list: elements,
        group: {
          name: "builder",
          pull: "clone",
          put: false
        },
        clone: _vm.cloneElement,
        sort: false
      }
    }, _vm._l(elements, function (element) {
      return _c("div", {
        key: element.template,
        staticClass: "list-group-item builder-sidebar__item"
      }, [_c("div", {
        staticClass: "builder-sidebar__item-icon"
      }, [_c("i", {
        staticClass: "fa",
        class: element.icon || "fa-cube"
      })]), _vm._v(" "), _c("span", {
        staticClass: "builder-sidebar__item-label"
      }, [_vm._v(_vm._s(element.name))])]);
    }), 0)], 1);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "modal",
    staticClass: "modal fade",
    attrs: {
      id: "revisionsModal",
      tabindex: "-1",
      role: "dialog",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_vm.loading ? _c("div", {
    staticClass: "text-center py-5"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin fa-3x text-muted"
  }), _vm._v(" "), _c("p", {
    staticClass: "mt-2 text-muted"
  }, [_vm._v("Chargement de l'historique...")])]) : _vm.error ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n                    " + _vm._s(_vm.error) + "\n                ")]) : _vm.revisions.length === 0 ? _c("div", {
    staticClass: "text-center py-5 text-muted"
  }, [_c("i", {
    staticClass: "fa fa-file-alt fa-3x mb-3"
  }), _vm._v(" "), _c("p", [_vm._v("Aucune révision trouvée pour ce contenu.")])]) : _c("div", {
    staticClass: "list-group"
  }, _vm._l(_vm.revisions, function (revision) {
    return _c("div", {
      key: revision.id,
      staticClass: "list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    }, [_c("div", [_c("h6", {
      staticClass: "mb-1"
    }, [_c("i", {
      staticClass: "fa fa-calendar-alt text-muted me-2"
    }), _vm._v(" " + _vm._s(_vm.formatDate(revision.createdAt)))]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_c("i", {
      staticClass: "fa fa-user me-1"
    }), _vm._v(" " + _vm._s(revision.author))])]), _vm._v(" "), _c("div", {
      staticClass: "d-flex gap-2"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-outline-secondary",
      attrs: {
        type: "button"
      },
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.previewRevision(revision);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-eye me-1"
    }), _vm._v(" Prévisualiser\n                            ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-outline-primary",
      attrs: {
        type: "button"
      },
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.restoreRevision(revision);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-undo me-1"
    }), _vm._v(" Restaurer\n                            ")])])]);
  }), 0)]), _vm._v(" "), _vm._m(1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_c("i", {
    staticClass: "fa fa-history me-2"
  }), _vm._v(" Historique des révisions")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js":
/*!******************************************************************!*\
  !*** ./vendor/easycorp/easyadmin-bundle/assets/js/field-slug.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
const slugify = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
slugify.extend({
  $: '',
  '%': '',
  '&': '',
  '<': '',
  '>': '',
  '|': '',
  '¢': '',
  '£': '',
  '¤': '',
  '¥': '',
  '₠': '',
  '₢': '',
  '₣': '',
  '₤': '',
  '₥': '',
  '₦': '',
  '₧': '',
  '₨': '',
  '₩': '',
  '₪': '',
  '₫': '',
  '€': '',
  '₭': '',
  '₮': '',
  '₯': '',
  '₰': '',
  '₱': '',
  '₲': '',
  '₳': '',
  '₴': '',
  '₵': '',
  '₸': '',
  '₹': '',
  '₽': '',
  '₿': '',
  '∂': '',
  '∆': '',
  '∑': '',
  '∞': '',
  '♥': '',
  元: '',
  円: '',
  '﷼': ''
});
class Slugger {
  constructor(field) {
    this.field = field;
    this.setTargetElement();
    this.locked = true;
    this.field.setAttribute('readonly', 'readonly');
    if ('' === this.field.value) {
      this.currentSlug = '';
      this.updateValue();
      this.listenTarget();
    } else {
      this.currentSlug = this.field.value;
    }
    this.appendLockButton();
  }
  setTargetElement() {
    const fieldNames = JSON.parse(this.field.dataset.target);
    this.targets = [];
    for (const name of fieldNames) {
      const target = document.getElementById(name);
      if (null === target) {
        throw `Wrong target specified for slug widget ("${name}").`;
      }
      this.targets.push(target);
    }
  }

  /**
   * Append a "lock" button to control slug behaviour (auto or manual)
   */
  appendLockButton() {
    this.lockButton = this.field.parentNode.querySelector('button');
    this.lockButton.addEventListener('click', () => {
      if (this.locked) {
        const confirmMessage = this.field.dataset.confirmText || null;
        if (null === confirmMessage) {
          this.unlock();
        } else {
          const formattedConfirmMessage = decodeURIComponent(JSON.parse(`"${confirmMessage.replace(/\"/g, '\\"')}"`));
          if (true === confirm(formattedConfirmMessage)) {
            this.unlock();
          }
        }
      } else {
        this.lock();
      }
    });
  }

  /**
   * Unlock the widget input (manual mode)
   */
  unlock() {
    this.locked = false;
    this.lockButton.innerHTML = this.lockButton.getAttribute('data-icon-unlocked');
    this.field.removeAttribute('readonly');
  }

  /**
   * Lock the widget input (auto mode)
   */
  lock() {
    this.locked = true;
    this.lockButton.innerHTML = this.lockButton.getAttribute('data-icon-locked');

    // Locking it back changes the value either to default value, or recomputes it
    if ('' !== this.currentSlug) {
      this.field.value = this.currentSlug;
    } else {
      this.updateValue();
    }
    this.field.setAttribute('readonly', 'readonly');
  }
  updateValue() {
    this.field.value = slugify(this.targets.map(target => target.value).join('-'), {
      remove: /[^A-Za-z0-9\s-]/g,
      lower: true,
      strict: true
    });
  }

  /**
   * Observe the target field and slug it
   */
  listenTarget() {
    for (const target of this.targets) {
      target.addEventListener('input', () => {
        if ('readonly' === this.field.getAttribute('readonly')) {
          this.updateValue();
        }
      });
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-ea-slug-field]').forEach(field => {
    new Slugger(field);
  });
});
document.addEventListener('ea.collection.item-added', event => {
  event.detail.newElement.querySelectorAll('[data-ea-slug-field]').forEach(field => {
    new Slugger(field);
  });
});

/***/ }),

/***/ "./assets/back/scss/back.scss":
/*!************************************!*\
  !*** ./assets/back/scss/back.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue":
/*!*******************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Builder.vue?vue&type=template&id=3f6a6242&scoped=true& */ "./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&");
/* harmony import */ var _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builder.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&");
/* harmony import */ var _Builder_vue_vue_type_style_index_0_id_3f6a6242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& */ "./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f6a6242",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/Builder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&");
/* harmony import */ var _BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&");
/* harmony import */ var _BuilderElement_vue_vue_type_style_index_0_id_3bf64eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& */ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3bf64eec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/BuilderElement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&");
/* harmony import */ var _BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _BuilderSidebar_vue_vue_type_style_index_0_id_bd42d62c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& */ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bd42d62c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/BuilderSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue":
/*!**************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&");
/* harmony import */ var _RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=script&lang=js& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _RevisionsModal_vue_vue_type_style_index_0_id_ea746584_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& */ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ea746584",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/back/js/builder/components/RevisionsModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_template_id_3f6a6242_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=template&id=3f6a6242&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=template&id=3f6a6242&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_template_id_3bf64eec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=template&id=3bf64eec&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_template_id_bd42d62c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=template&id=bd42d62c&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_template_id_ea746584_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=template&id=ea746584&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Builder_vue_vue_type_style_index_0_id_3f6a6242_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/Builder.vue?vue&type=style&index=0&id=3f6a6242&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderElement_vue_vue_type_style_index_0_id_3bf64eec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderElement.vue?vue&type=style&index=0&id=3bf64eec&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BuilderSidebar_vue_vue_type_style_index_0_id_bd42d62c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/BuilderSidebar.vue?vue&type=style&index=0&id=bd42d62c&lang=scss&scoped=true&");


/***/ }),

/***/ "./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RevisionsModal_vue_vue_type_style_index_0_id_ea746584_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/back/js/builder/components/RevisionsModal.vue?vue&type=style&index=0&id=ea746584&scoped=true&lang=css&");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js","vendors-node_modules_core-js_modules_es_array_push_js","vendors-node_modules_vuedraggable_dist_vuedraggable_umd_js","vendors-node_modules_select2_dist_css_select2_css-node_modules_select2_dist_js_select2_js-nod-245fd3","assets_fonts_fontawesome_css_all_min_css"], function() { return __webpack_exec__("./assets/back/js/back.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNrUSxhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7O0FDekszQixNQUFNMEIsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFTLENBQUM7QUFDbENELE9BQU8sQ0FBQ0UsTUFBTSxDQUFDO0VBQ1hyaUIsQ0FBQyxFQUFFLEVBQUU7RUFDTCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FBRyxFQUFFLEVBQUU7RUFDUCxHQUFHLEVBQUUsRUFBRTtFQUNQLEdBQUcsRUFBRSxFQUFFO0VBQ1AsR0FB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ZjtBQUNEO0FBQ0EsK0RBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBGO0FBQ3ZDO0FBQ0w7QUFDN0QsQ0FBbUc7OztBQUduRztBQUNtRztBQUNuRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUsa0dBQU07QUFDUixFQUFFLDJHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDMEY7QUFDdkM7QUFDTDtBQUM3RCxDQUFrRzs7O0FBR2xHO0FBQ21HO0FBQ25HLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLCtEQUFlOzs7Ozs7Ozs7Ozs7O0FDdkNrTSxDQUFDLCtEQUFlLGtNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNBYixDQUFDLCtEQUFlLHlNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNBcEIsQ0FBQywrREFBZSx5TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDQXBCLENBQUMsK0RBQWUseU1BQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2JhY2suanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9CdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2VsZW1lbnRzL0VsZW1lbnRGb3JtTW91bnRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2VsZW1lbnRzL0Zvcm1CdWlsZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvZWxlbWVudHMvU3R5bGVzaGVldEVsZW1lbnRzLmpzIiwid2VicGFjazovLy9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9SZXZpc2lvbnNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyRWxlbWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJTaWRlYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlIiwid2VicGFjazovLy8uL3ZlbmRvci9lYXN5Y29ycC9lYXN5YWRtaW4tYnVuZGxlL2Fzc2V0cy9qcy9maWVsZC1zbHVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL3Njc3MvYmFjay5zY3NzPzdiMDUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlP2E3M2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJFbGVtZW50LnZ1ZT8xM2JmIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWU/YWM4YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlP2I5ZTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlPzIxZTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJFbGVtZW50LnZ1ZT81MDkwIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWU/NDE1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlPzc1OGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlPzRlMGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJFbGVtZW50LnZ1ZT9kMTNkIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWU/NDhjZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlP2NiZmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlPzBlOGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJFbGVtZW50LnZ1ZT81MGU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWU/YjZlZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlPzk3MDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlPzhhZDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXJFbGVtZW50LnZ1ZT84NDcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyU2lkZWJhci52dWU/MWIxNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvUmV2aXNpb25zTW9kYWwudnVlPzg5ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2JhY2suc2Nzcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQnVpbGRlciBmcm9tICcuL2J1aWxkZXIvY29tcG9uZW50cy9CdWlsZGVyLnZ1ZSc7XG5pbXBvcnQgQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24gZnJvbSAnLi9idWlsZGVyL0J1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uJztcbmltcG9ydCAnL3ZlbmRvci9lYXN5Y29ycC9lYXN5YWRtaW4tYnVuZGxlL2Fzc2V0cy9qcy9maWVsZC1zbHVnJztcblxuY29uc3QgJGJ1aWxkZXJSb290cyA9ICQoJy5idWlsZGVyLXJvb3QnKTtcblxuaWYgKCRidWlsZGVyUm9vdHMubGVuZ3RoID4gMCkge1xuICAgICRidWlsZGVyUm9vdHMuZWFjaChmdW5jdGlvbiAoaSwgcm9vdCkge1xuICAgICAgICBuZXcgVnVlKHtlbDogJyMnICsgJChyb290KS5hdHRyKCdpZCcpLCBjb21wb25lbnRzOiB7QnVpbGRlcn19KTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBJbml0aWFsaXNlciBsJ2ludMOpZ3JhdGlvbiBhdmVjIGxlIGZpbGUtbWFuYWdlclxuICAgIEJ1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uLmluaXQoKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFN1cnZleVF1ZXN0aW9uQW5zd2VyQmxvY2soc2VsZWN0b3IpIHtcbiAgICBpZihzZWxlY3Rvci52YWwoKSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgICAgIHNlbGVjdG9yLmNsb3Nlc3QoXCIuZmllbGQtY29sbGVjdGlvbi1pdGVtXCIpLmZpbmQoXCIuZm9ybS1zdXJ2ZXktcXVlc3Rpb24tYW5zd2VyLXR5cGVcIikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdG9yLmNsb3Nlc3QoXCIuZmllbGQtY29sbGVjdGlvbi1pdGVtXCIpLmZpbmQoXCIuZm9ybS1zdXJ2ZXktcXVlc3Rpb24tYW5zd2VyLXR5cGVcIikuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xuICAgIH1cbn1cblxuXG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy5hY3Rpb24tc2F2ZUFuZFJldHVybiwgLmFjdGlvbi1zYXZlQW5kQWRkQW5vdGhlciwgLmFjdGlvbi1zYXZlQW5kUmV0dXJuLCAuYWN0aW9uLXNhdmVBbmRDb250aW51ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgJGZvcm1JZCA9ICQoJyMnKyAkKHRoaXMpLmF0dHIoJ2Zvcm0nKSk7XG4gICAgICAgIGxldCAkYWxsSW5wdXQgPSAkZm9ybUlkLmZpbmQoJ2lucHV0OmludmFsaWQnKTtcblxuICAgICAgICAkLmVhY2goJGFsbElucHV0LCBmdW5jdGlvbiggaW5kZXgsIHZhbHVlICkge1xuICAgICAgICAgICAgbGV0ICRjdXJyZW50RWxlbWVudCA9ICQoJyMnK3ZhbHVlLmlkKTtcbiAgICAgICAgICAgIGlmKCRjdXJyZW50RWxlbWVudC52YWwoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZigkY3VycmVudEVsZW1lbnQuY2xvc2VzdCgnLmJ1aWxkZXJfX2VsZW1lbnQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50RWxlbWVudC5jbG9zZXN0KCcuYnVpbGRlcl9fZWxlbWVudCcpLmFkZENsYXNzKCdlcnJvcl9yZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRFbGVtZW50LmFkZENsYXNzKCdlcnJvcl9yZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgICQoXCIjTWVudV9wYWdlU3lzdGVtXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNNZW51X3BhZ2VcIikucHJvcCgnc2VsZWN0ZWRJbmRleCcsMCk7XG4gICAgICAgICQoXCIjTWVudV9leHRlcm5hbFBhdGhcIikudmFsKFwiXCIpO1xuICAgIH0pO1xuICAgICQoXCIjTWVudV9wYWdlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNNZW51X3BhZ2VTeXN0ZW1cIikucHJvcCgnc2VsZWN0ZWRJbmRleCcsMCk7XG4gICAgICAgICQoXCIjTWVudV9leHRlcm5hbFBhdGhcIikudmFsKFwiXCIpO1xuICAgIH0pO1xuICAgICQoXCIjTWVudV9leHRlcm5hbFBhdGhcIikub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIjTWVudV9wYWdlU3lzdGVtXCIpLnByb3AoJ3NlbGVjdGVkSW5kZXgnLDApO1xuICAgICAgICAkKFwiI01lbnVfcGFnZVwiKS5wcm9wKCdzZWxlY3RlZEluZGV4JywwKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGVhU3VydmV5U2VsZWN0b3IgPSAkKCcuZWEtZWRpdC1TdXJ2ZXksIC5lYS1uZXctU3VydmV5Jyk7XG4gICAgZWFTdXJ2ZXlTZWxlY3Rvci5kZWxlZ2F0ZShcIi5mb3JtLXN1cnZleS1xdWVzdGlvbi10eXBlXCIsJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZWZyZXNoU3VydmV5UXVlc3Rpb25BbnN3ZXJCbG9jaygkKHRoaXMpKTtcbiAgICB9KTtcbiAgICBpZihlYVN1cnZleVNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgICAkKCcuZm9ybS1zdXJ2ZXktcXVlc3Rpb24tdHlwZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWZyZXNoU3VydmV5UXVlc3Rpb25BbnN3ZXJCbG9jaygkKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICQoJy5jb250YWluZXItc3VydmV5LXF1ZXN0aW9ucyAuZmllbGQtY29sbGVjdGlvbi1hZGQtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlZnJlc2hTdXJ2ZXlRdWVzdGlvbkFuc3dlckJsb2NrKGVhU3VydmV5U2VsZWN0b3IuZmluZCgnLmNvbnRhaW5lci1zdXJ2ZXktcXVlc3Rpb25zIC5maWVsZC1jb2xsZWN0aW9uLWl0ZW0nKS5sYXN0KCkuZmluZCgnLmZvcm0tc3VydmV5LXF1ZXN0aW9uLXR5cGUnKSk7XG4gICAgICAgIGVhU3VydmV5U2VsZWN0b3IuZmluZCgnLmNvbnRhaW5lci1zdXJ2ZXktcXVlc3Rpb25zIC5maWVsZC1jb2xsZWN0aW9uLWl0ZW0gLmZvcm0tc3VydmV5LXF1ZXN0aW9uLWFjdGl2ZScpLnByb3AoIFwiY2hlY2tlZFwiLCB0cnVlICk7XG4gICAgfSlcbn0pO1xuIiwiLyoqXHJcbiAqIEludMOpZ3JhdGlvbiBkdSBGaWxlIE1hbmFnZXIgYXZlYyBsZSBCdWlsZGVyXHJcbiAqIFBlcm1ldCBkZSBzw6lsZWN0aW9ubmVyIGRlcyBpbWFnZXMgZGVwdWlzIGxlIEZpbGUgTWFuYWdlciBldCBkZSBsZXMgY29waWVyIGRhbnMgbGUgQnVpbGRlclxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1aWxkZXJGaWxlTWFuYWdlckludGVncmF0aW9uIHtcclxuICAgIHN0YXRpYyBjdXJyZW50VGFyZ2V0RmllbGQgPSBudWxsO1xyXG4gICAgc3RhdGljIGN1cnJlbnRCdXR0b24gPSBudWxsO1xyXG4gICAgc3RhdGljIG1vZGFsSW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZXIgbGVzIMOpdsOpbmVtZW50c1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24gaW5pdGlhbGl6ZWQnKTtcclxuXHJcbiAgICAgICAgLy8gR8OpcmVyIGxlcyBjbGljcyBzdXIgXCJDaG9pc2lyIGRlcHVpcyBsYSBtw6lkaWF0aMOocXVlXCJcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1zZWxlY3QtZnJvbS1maWxlbWFuYWdlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RmllbGQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xyXG4gICAgICAgICAgICBCdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbi5vcGVuTW9kYWwodGFyZ2V0RmllbGQsICQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDDiWNvdXRlciBsZXMgbWVzc2FnZXMgZHUgZmlsZS1tYW5hZ2VyIChzw6lsZWN0aW9uIGQndW4gZmljaGllcilcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdmaWxlbWFuYWdlci1zZWxlY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBCdWlsZGVyRmlsZU1hbmFnZXJJbnRlZ3JhdGlvbi5oYW5kbGVGaWxlU2VsZWN0aW9uKGV2ZW50LmRhdGEuZmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dnJpciBsYSBtb2RhbCBhdmVjIGxlIGZpbGUtbWFuYWdlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgb3Blbk1vZGFsKHRhcmdldEZpZWxkLCAkYnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0RmllbGQgPSB0YXJnZXRGaWVsZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCdXR0b24gPSAkYnV0dG9uO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgbGEgbW9kYWwgc2kgZWxsZSBuJ2V4aXN0ZSBwYXNcclxuICAgICAgICBpZiAoJCgnI2ZpbGVtYW5hZ2VyLXNlbGVjdG9yLW1vZGFsJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZpbGVtYW5hZ2VyLXNlbGVjdG9yLW1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwteGxcIiBzdHlsZT1cIm1heC13aWR0aDogOTAlO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9wZW5cIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTw6lsZWN0aW9ubmVyIHVuZSBpbWFnZSBkZXB1aXMgbGEgbcOpZGlhdGjDqHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIHN0eWxlPVwicGFkZGluZzogMDsgaGVpZ2h0OiA3MHZoOyBvdmVyZmxvdzogaGlkZGVuO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJmaWxlbWFuYWdlci1zZWxlY3Rvci1pZnJhbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi8ke3dpbmRvdy5CVUlMREVSX0xPQ0FMRSB8fCAnZnInfS9hZG1pbi9maWxlLXNlbGVjdG9yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZChtb2RhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBZmZpY2hlciBsYSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlbWFuYWdlci1zZWxlY3Rvci1tb2RhbCcpO1xyXG4gICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZSA9IG5ldyBib290c3RyYXAuTW9kYWwobW9kYWxFbGVtZW50LCB7XHJcbiAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIMOJY291dGVyIGxhIGZlcm1ldHVyZSBkZSBsYSBtb2RhbCBwb3VyIG5ldHRveWVyIGxlIGJhY2tkcm9wXHJcbiAgICAgICAgbW9kYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gU3VwcHJpbWVyIGxlIGJhY2tkcm9wIHMnaWwgZXhpc3RlIGVuY29yZVxyXG4gICAgICAgICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZHJvcCcpO1xyXG4gICAgICAgICAgICBpZiAoYmFja2Ryb3ApIHtcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN1cHByaW1lciBsYSBjbGFzc2UgbW9kYWwtb3BlbiBkdSBib2R5XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHw6lyZXIgbGEgc8OpbGVjdGlvbiBkJ3VuIGZpY2hpZXIgZGVwdWlzIGxlIGZpbGUtbWFuYWdlclxyXG4gICAgICogQXBwZWzDqSBkaXJlY3RlbWVudCBxdWFuZCBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSBzdXIgXCJTw6lsZWN0aW9ubmVyXCIgZGFucyBsYSB2aXNpb25uZXVzZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgaGFuZGxlRmlsZVNlbGVjdGlvbihmaWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgc2VsZWN0ZWQ6JywgZmlsZSk7XHJcblxyXG4gICAgICAgIC8vIFbDqXJpZmllciBxdWUgYydlc3QgYmllbiB1bmUgaW1hZ2VcclxuICAgICAgICBpZiAoIWZpbGUubWltZVR5cGUgfHwgIWZpbGUubWltZVR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IHPDqWxlY3Rpb25uZXIgdW5lIGltYWdlIChqcGcsIHBuZyknKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29waWVyIGRpcmVjdGVtZW50IGxlIGZpY2hpZXJcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNvcHlNZWRpYVRvQnVpbGRlcihmaWxlLmlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBjb3BpZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJldXIgbG9ycyBkZSBsYSBjb3BpZSBkdSBmaWNoaWVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29waWVyIGxlIGZpY2hpZXIgZHUgZmlsZS1tYW5hZ2VyIHZlcnMgbGUgYnVpbGRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgY29weU1lZGlhVG9CdWlsZGVyKGZpbGVJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYnVpbGRlci9jb3B5LW1lZGlhJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZUlkOiBmaWxlSWQgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdFcnJldXIgbG9ycyBkZSBsYSBjb3BpZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgLy8gVHJvdXZlciBsZSBmb3JtdWxhaXJlIHBhcmVudCBzcMOpY2lmaXF1ZSB2aWEgbGUgYm91dG9uIHF1aSBhIG91dmVydCBsYSBtb2RhbFxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRCdXR0b24gfHwgdGhpcy5jdXJyZW50QnV0dG9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0JvdXRvbiBzb3VyY2UgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcG9zc2libGUgZGUgdHJvdXZlciBsZSBmb3JtdWxhaXJlIGNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVHJvdXZlciBsZSBmb3JtLWdyb3VwLWltYWdlIHBhcmVudCBkdSBib3V0b25cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtR3JvdXAgPSB0aGlzLmN1cnJlbnRCdXR0b24uY2xvc2VzdCgnLmZvcm0tZ3JvdXAtaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUdyb3VwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0tZ3JvdXAtaW1hZ2UgaW50cm91dmFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ltcG9zc2libGUgZGUgdHJvdXZlciBsZSBmb3JtdWxhaXJlIGNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdpbnB1dCBoaWRkZW4gYXZlYyBsJ1VSTCBkYW5zIGNlIGZvcm0tZ3JvdXAgc3DDqWNpZmlxdWVcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICRmb3JtR3JvdXAuZmluZChgaW5wdXRbZGF0YS1uYW1lPVwiJHt0aGlzLmN1cnJlbnRUYXJnZXRGaWVsZH1fdXJsXCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0lucHV0IGhpZGRlbiBpbnRyb3V2YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW1wb3NzaWJsZSBkZSB0cm91dmVyIGxlIGNoYW1wIGNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkaGlkZGVuSW5wdXQudmFsKGRhdGEudXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsYSBwcsOpdmlzdWFsaXNhdGlvbiBkYW5zIGxlIHdpZGdldFxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHdpZGdldCA9ICRmb3JtR3JvdXAuZmluZCgnLmltYWdlLXVwbG9hZC13aWRnZXQnKTtcclxuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1lbXB0eScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgZGF0YS51cmwpO1xyXG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuZmlsZW5hbWUtcHJldmlldycpLnRleHQoZGF0YS5uYW1lIHx8ICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHw6lyZXIgbGUgYm91dG9uIHN1cHByaW1lclxyXG4gICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuZmlsZS1wcmV2aWV3LWRlbGV0ZScpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtZW1wdHknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmlkZXIgbGVzIGlucHV0c1xyXG4gICAgICAgICAgICAgICAgICAgICRoaWRkZW5JbnB1dC52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtR3JvdXAuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGVuYW1lLXByZXZpZXcnKS50ZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1hc3F1ZXIgbCdpbnB1dCBmaWxlIGxvY2FsIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgICAgICAkZm9ybUdyb3VwLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGZXJtZXIgbGEgbW9kYWxcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsSW5zdGFuY2UuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5ldHRveWVyIGxlIGJhY2tkcm9wIGltbcOpZGlhdGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tkcm9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3AucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpY2hpZXIgY29wacOpIGF2ZWMgc3VjY8OoczonLCBkYXRhLnVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvciB8fCAnRXJyZXVyIGluY29ubnVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEF1dG8taW5pdGlhbGlzYXRpb25cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24uaW5pdCgpO1xyXG59KTtcclxuXHJcbiIsIi8vaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2Nzcy9zZWxlY3QyLmNzcyc7XG5pbXBvcnQgRm9ybUJ1aWxkZXIgZnJvbSAnLi9Gb3JtQnVpbGRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRGb3JtTW91bnRlciB7XG4gICAgc3RhdGljIGlucHV0TmFtZShiYXNlbmFtZSwgZWxlbWVudElkLCBlbGVtZW50UHJvcGVydHlOYW1lLCBtdWx0aXBsZSA9IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBiYXNlbmFtZSArICdbJyArIGVsZW1lbnRJZCArICddWycgKyBlbGVtZW50UHJvcGVydHlOYW1lICsgJ10nICsgKG11bHRpcGxlID8gJ1tdJyA6ICcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5wdXRJZChlbGVtZW50SWQsIGVsZW1lbnRQcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRJZCArICctJyArIGVsZW1lbnRQcm9wZXJ0eU5hbWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbmZpcm0oY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBgXG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9kYWwtZGVsZXRlLWVsZW1lbnRcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Wb3VsZXotdm91cyBzdXBwcmltZXIgY2V0IMOpbMOpbWVudCA/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DZXR0ZSBhY3Rpb24gZXN0IGlycsOpdmVyc2libGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWxhYmVsXCI+QW5udWxlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBpZD1cIm1vZGFsLWRlbGV0ZS1lbGVtZW50LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+IDxzcGFuIGNsYXNzPVwiYnRuLWxhYmVsXCI+U3VwcHJpbWVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgaWYgKCQoJyNtb2RhbC1kZWxldGUtZWxlbWVudCcpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCQobW9kYWwpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBteU1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZGVsZXRlLWVsZW1lbnQnKSwgeyBiYWNrZHJvcDogdHJ1ZSwga2V5Ym9hcmQ6IHRydWUgfSk7XG5cbiAgICAgICAgbXlNb2RhbC5zaG93KCk7XG4gICAgICAgICQoJyNtb2RhbC1kZWxldGUtZWxlbWVudCcpLm9mZignY2xpY2snLCAnI21vZGFsLWRlbGV0ZS1lbGVtZW50LWJ1dHRvbicpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJyNtb2RhbC1kZWxldGUtZWxlbWVudC1idXR0b24nLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlRm9ybUVsZW1lbnQoZm9ybSkge1xuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICAgICAgJChmb3JtKS5maW5kKCdbcmVxdWlyZWRdLCBbdHlwZT1cInVybFwiXScpLmVhY2goZnVuY3Rpb24gKGksIGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaSwgaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICghRWxlbWVudEZvcm1Nb3VudGVyLl92YWxpZGF0ZUZpbGVJbnB1dChpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIHN0YXRpYyBtb3VudChiYXNlbmFtZSwgZWxlbWVudCwgZm9ybSkge1xuICAgICAgICBsZXQgJGZvcm0gPSAkKGZvcm0pO1xuXG4gICAgICAgIHRoaXMuX2luaXRSZXBlYXRhYmxlcygkZm9ybSwgYmFzZW5hbWUsIGVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9jb21waWxlTmFtZUFuZFZhbHVlcyhiYXNlbmFtZSwgZWxlbWVudCwgJGZvcm0pO1xuICAgICAgICB0aGlzLl9tYWtlQ2tlZGl0b3JzKCRmb3JtKTtcbiAgICAgICAgdGhpcy5fbWFrZVNlbGVjdDIoJGZvcm0pO1xuICAgICAgICB0aGlzLl9hdXRvVmFsaWRhdGVGaWxlSW5wdXRzKCRmb3JtKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFZhbHVlRnJvbVBhdGgob2JqLCBwYXRoKSB7XG4gICAgICAgIGlmICghcGF0aCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqW3BhdGhdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IHBhdGguc3BsaXQoL1xcXVxcW3xcXFt8XFxdLykuZmlsdGVyKGsgPT4gayAhPT0gJycpO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gb2JqO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2luaXRSZXBlYXRhYmxlcygkZm9ybSwgYmFzZW5hbWUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQXV0by1leHBhbmQgcmVwZWF0YWJsZXMgaWYgd2UgaGF2ZSBkYXRhXG4gICAgICAgICRmb3JtLmZpbmQoJy5mb3JtLXJlcGVhdGFibGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgJGl0ZW1zQ29udGFpbmVyID0gJGNvbnRhaW5lci5maW5kKCcuZm9ybS1yZXBlYXRhYmxlLWl0ZW1zJyk7XG4gICAgICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY29udGFpbmVyLmZpbmQoJ3RlbXBsYXRlLmZvcm0tcmVwZWF0YWJsZS10ZW1wbGF0ZScpO1xuXG4gICAgICAgICAgICBpZiAoJHRlbXBsYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gJHRlbXBsYXRlLmh0bWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IC9kYXRhLW5hbWU9XCIoW15cIl0rKVwiLy5leGVjKGh0bWwpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGZ1bGxOYW1lLnNwbGl0KCddWycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwZWF0YWJsZU5hbWUgPSBwYXJ0c1swXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vayB1cCB0aGUgYXJyYXkgaW4gdGhlIGVsZW1lbnQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBlYXRhYmxlRGF0YSA9IEVsZW1lbnRGb3JtTW91bnRlci5fZ2V0VmFsdWVGcm9tUGF0aChlbGVtZW50LCByZXBlYXRhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBlYXRhYmxlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYXZlZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXBlYXRhYmxlRGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRDb3VudCA9IHJlcGVhdGFibGVEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXBlYXRhYmxlRGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWRDb3VudCA9IE9iamVjdC5rZXlzKHJlcGVhdGFibGVEYXRhKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0UmVwZWF0YWJsZTonLCBmdWxsTmFtZSwgJ0RhdGE6JywgcmVwZWF0YWJsZURhdGEsICdTYXZlZENvdW50OicsIHNhdmVkQ291bnQsICdDdXJyZW50Q291bnQ6JywgJGl0ZW1zQ29udGFpbmVyLmNoaWxkcmVuKCkubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9ICRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gY3VycmVudENvdW50OyBrIDwgc2F2ZWRDb3VudDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBkaXJlY3QgY2FsbCBpbnN0ZWFkIG9mIHRyaWdnZXIgY2xpY2sgdG8gZW5zdXJlIHJlbGlhYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRGb3JtTW91bnRlci5fYWRkUmVwZWF0YWJsZUl0ZW0oJGNvbnRhaW5lciwgZWxlbWVudCwgYmFzZW5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIEFkZCBidXR0b25cbiAgICAgICAgLy8gQmluZCB0byB0aGUgc3BlY2lmaWMgY29udGFpbmVyIHRvIHByZXNlcnZlIHRoZSAnZWxlbWVudCcgYW5kICdiYXNlbmFtZScgY2xvc3VyZSBzY29wZVxuICAgICAgICAvLyBVc2luZyBkZWxlZ2F0aW5nIGZyb20gdGhlIGNvbnRhaW5lciBpdHNlbGYgaGFuZGxlcyBwb3RlbnRpYWwgZHluYW1pYyBidXR0b24gcmVwbGFjZW1lbnRzIGlmIGFueSwgXG4gICAgICAgIC8vIHRob3VnaCB0eXBpY2FsbHkgdGhlIGJ1dHRvbiBpcyBzdGF0aWMgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgJGZvcm0uZmluZCgnLmZvcm0tcmVwZWF0YWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICAgICAgICAkY29udGFpbmVyLm9mZignY2xpY2snLCAnLmZvcm0tcmVwZWF0YWJsZS1hZGQnKS5vbignY2xpY2snLCAnLmZvcm0tcmVwZWF0YWJsZS1hZGQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyAkY29udGFpbmVyIGlzIGFscmVhZHkgYXZhaWxhYmxlIGluIGNsb3N1cmUsIG9yIHZpYSAkKHRoaXMpLmNsb3Nlc3RcbiAgICAgICAgICAgICAgICAvLyBVc2luZyAkKHRoaXMpLmNsb3Nlc3QgaXMgc2FmZXIgaWYgd2UgY29weS9tb3ZlZCBjb2RlLCBidXQgd2UgbmVlZCB0aGUgJ2VsZW1lbnQnIGNsb3N1cmUuXG4gICAgICAgICAgICAgICAgaWYgKCFFbGVtZW50Rm9ybU1vdW50ZXIuX2FkZFJlcGVhdGFibGVJdGVtKCRjb250YWluZXIsIGVsZW1lbnQsIGJhc2VuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludCgkY29udGFpbmVyLmRhdGEoJ21heCcpKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYE1heGltdW0gJHttYXh9IMOpbMOpbWVudHMgYXV0b3Jpc8Opcy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIFJlbW92ZSBidXR0b25cbiAgICAgICAgICAgICRjb250YWluZXIub2ZmKCdjbGljaycsICcuZm9ybS1yZXBlYXRhYmxlLXJlbW92ZScpLm9uKCdjbGljaycsICcuZm9ybS1yZXBlYXRhYmxlLXJlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KCRjb250YWluZXIuZGF0YSgnbWluJykpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtc0NvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLmZvcm0tcmVwZWF0YWJsZS1pdGVtcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCA8PSBtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYE1pbmltdW0gJHttaW59IMOpbMOpbWVudHMgcmVxdWlzLmApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZm9ybS1yZXBlYXRhYmxlLWl0ZW0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2FkZFJlcGVhdGFibGVJdGVtKCRjb250YWluZXIsIGVsZW1lbnQsIGJhc2VuYW1lKSB7XG4gICAgICAgIGNvbnN0ICRpdGVtc0NvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLmZvcm0tcmVwZWF0YWJsZS1pdGVtcycpO1xuICAgICAgICBjb25zdCAkdGVtcGxhdGUgPSAkY29udGFpbmVyLmZpbmQoJ3RlbXBsYXRlLmZvcm0tcmVwZWF0YWJsZS10ZW1wbGF0ZScpO1xuICAgICAgICBjb25zdCBtYXggPSBwYXJzZUludCgkY29udGFpbmVyLmRhdGEoJ21heCcpKTtcbiAgICAgICAgY29uc3QgY3VycmVudENvdW50ID0gJGl0ZW1zQ29udGFpbmVyLmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjdXJyZW50Q291bnQgPj0gbWF4KSB7XG4gICAgICAgICAgICAvLyBRdWlldCBmYWlsIGZvciBhdXRvLWV4cGFuZCBvciBoYW5kbGUgZGlmZmVyZW50bHk/XG4gICAgICAgICAgICAvLyBVc2VyIGNsaWNrIHNob3VsZCBhbGVydCwgYnV0IGF1dG8tZXhwYW5kIHNob3VsZG4ndCBsb29wIGlmIG1heCByZWFjaGVkP1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1heEluZGV4ID0gLTE7XG4gICAgICAgICRpdGVtc0NvbnRhaW5lci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdpbmRleCcpKTtcbiAgICAgICAgICAgIGlmICghaXNOYU4oaWR4KSAmJiBpZHggPiBtYXhJbmRleCkgbWF4SW5kZXggPSBpZHg7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdJbmRleCA9IG1heEluZGV4ICsgMTtcblxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9ICR0ZW1wbGF0ZS5kYXRhKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICBsZXQgaHRtbCA9ICR0ZW1wbGF0ZS5odG1sKCk7XG5cbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXJNaW51czEgPSBwbGFjZWhvbGRlciArICdfTUlOVVNfMSc7XG4gICAgICAgIGlmIChodG1sLmluZGV4T2YocGxhY2Vob2xkZXJNaW51czEpICE9PSAtMSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwuc3BsaXQocGxhY2Vob2xkZXJNaW51czEpLmpvaW4obmV3SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChodG1sLmluZGV4T2YocGxhY2Vob2xkZXIpICE9PSAtMSkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwuc3BsaXQocGxhY2Vob2xkZXIpLmpvaW4obmV3SW5kZXggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRuZXdJdGVtID0gJChodG1sKTtcbiAgICAgICAgJG5ld0l0ZW0uYXR0cignZGF0YS1pbmRleCcsIG5ld0luZGV4KTtcbiAgICAgICAgJGl0ZW1zQ29udGFpbmVyLmFwcGVuZCgkbmV3SXRlbSk7XG5cbiAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLl9tYWtlQ2tlZGl0b3JzKCRuZXdJdGVtKTtcbiAgICAgICAgRWxlbWVudEZvcm1Nb3VudGVyLl9tYWtlU2VsZWN0MigkbmV3SXRlbSk7XG5cbiAgICAgICAgJG5ld0l0ZW0uZmluZCgnW2RhdGEtbmFtZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJGlucHV0LmRhdGEoJ25hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAkaW5wdXQucHJvcCgnbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ25hbWUnLCBFbGVtZW50Rm9ybU1vdW50ZXIuaW5wdXROYW1lKGJhc2VuYW1lLCBlbGVtZW50LmlkLCBuYW1lLCBpc011bHRpcGxlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsZWFuUHJvcE5hbWUgPSBuYW1lLnJlcGxhY2UoL1xcXVxcWy9nLCAnLScpLnJlcGxhY2UoJ1snLCAnLScpLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IEVsZW1lbnRGb3JtTW91bnRlci5pbnB1dElkKGVsZW1lbnQuaWQsIGNsZWFuUHJvcE5hbWUpO1xuXG4gICAgICAgICAgICAkaW5wdXQuYXR0cignaWQnLCBpZCk7XG4gICAgICAgICAgICAkaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5maW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW91bnQoZm9ybSkge1xuICAgICAgICB0aGlzLl9tYWtlQ2tlZGl0b3JzKCQoZm9ybSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBfY29tcGlsZU5hbWVBbmRWYWx1ZXMoYmFzZW5hbWUsIGVsZW1lbnQsICRmb3JtKSB7XG4gICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLW5hbWVdJykubm90KCcuZm9ybS1yZXBlYXRhYmxlJykuZWFjaChmdW5jdGlvbiAoaSwgaW5wdXQpIHtcbiAgICAgICAgICAgIGxldCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkaW5wdXQuZGF0YSgnbmFtZScpO1xuXG4gICAgICAgICAgICBjb25zdCBjbGVhblByb3BOYW1lID0gbmFtZS5yZXBsYWNlKC9cXF1cXFsvZywgJy0nKS5yZXBsYWNlKCdbJywgJy0nKS5yZXBsYWNlKCddJywgJycpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBFbGVtZW50Rm9ybU1vdW50ZXIuaW5wdXRJZChlbGVtZW50LmlkLCBjbGVhblByb3BOYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgaXNNdWx0aXBsZSA9ICRpbnB1dC5wcm9wKCdtdWx0aXBsZScpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ25hbWUnLCBFbGVtZW50Rm9ybU1vdW50ZXIuaW5wdXROYW1lKGJhc2VuYW1lLCBlbGVtZW50LmlkLCBuYW1lLCBpc011bHRpcGxlKSk7XG4gICAgICAgICAgICBpZiAoISRpbnB1dC5hdHRyKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2lkJywgaWQpO1xuICAgICAgICAgICAgICAgICRpbnB1dC5wYXJlbnQoKS5maW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRpbnB1dC5hdHRyKCd0eXBlJykgIT09ICdmaWxlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IEVsZW1lbnRGb3JtTW91bnRlci5fZ2V0VmFsdWVGcm9tUGF0aChlbGVtZW50LCBuYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChpc011bHRpcGxlICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsLnNwbGl0KCcsJykgOiB2YWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGlucHV0Lmhhc0NsYXNzKCdhcnRpY2xlX21lZGlhc19pbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50Rm9ybU1vdW50ZXIuX2h5ZHJhdGVJbnB1dFByZXZpZXcoJGlucHV0LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgkaW5wdXQuYXR0cigndHlwZScpID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmxOYW1lID0gbmFtZSArICdfdXJsJztcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBFbGVtZW50Rm9ybU1vdW50ZXIuX2dldFZhbHVlRnJvbVBhdGgoZWxlbWVudCwgdXJsTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBFbGVtZW50Rm9ybU1vdW50ZXIuX2h5ZHJhdGVJbnB1dEZpbGUoJGlucHV0LCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9tYWtlU2VsZWN0MigkZm9ybSkge1xuICAgICAgICAkZm9ybS5maW5kKCdzZWxlY3Quc2VsZWN0MicpLmVhY2goKGksIHNlbGVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7IHRoZW1lOiAnYm9vdHN0cmFwJywgbGFuZ3VhZ2U6ICdmcicsIHdpZHRoOiAnMTAwJScsIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAxMCB9O1xuXG4gICAgICAgICAgICBpZiAoJChzZWxlY3QpLmhhc0NsYXNzKCdzZWxlY3QyLS1pY29ucycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheUljb25zID0gZnVuY3Rpb24gKGljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpY29uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2Zvcm1fX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9fZm9ybV9faWNvbl9faVwiPjxpIGNsYXNzPVwibXQtaWNvbi0ke2ljb24udGV4dH1cIj48L2k+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtpY29uLnRleHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpY29uLnRleHQuc2xpY2UoMSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50ZW1wbGF0ZVNlbGVjdGlvbiA9IGRpc3BsYXlJY29ucztcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRlbXBsYXRlUmVzdWx0ID0gZGlzcGxheUljb25zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHNlbGVjdCkuc2VsZWN0MihvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9tYWtlQ2tlZGl0b3JzKCRmb3JtKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGZvcm0uZmluZCgndHJpeC1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uIChpLCBpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5lZGl0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuZWRpdG9yLmxvYWRIVE1MKCQoaW5wdXQpLnBhcmVudCgpLmZpbmQoJ2lucHV0JykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gZWRpdG9yIGZvciB0cml4ICcgKyBpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRmb3JtLmZpbmQoJy5lbGVtZW50LWNrZWRpdG9yJykuZWFjaChmdW5jdGlvbiAoaSwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICQoaW5wdXQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoQ0tFRElUT1IuaW5zdGFuY2VzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgICBDS0VESVRPUi5pbnN0YW5jZXNbaWRdLmRlc3Ryb3koZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ0tFRElUT1IuaW5zdGFuY2VzW2lkXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZWRpdG9yID0gQ0tFRElUT1IucmVwbGFjZShpZCwge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvckJ1dHRvbl9jb2xvcnM6IGNvbG9yc19wcml2YXRlLmpvaW4oJywnKSArICcsJyArIGNvbG9yc19wcm8uam9pbignLCcpLFxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdzdHlsZXMnLCBpdGVtczogWydCb2xkJywgJ0l0YWxpYycsICdTdHJpa2UnLCAnTGluayddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdjb2xvcnMnLCBpdGVtczogWydUZXh0Q29sb3InXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnbGlzdHMnLCBpdGVtczogWydCdWxsZXRlZExpc3QnLCAnTnVtYmVyZWRMaXN0JywgJy0nLCAnT3V0ZGVudCcsICdJbmRlbnQnXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnY2xpcGJvYXJkJywgaXRlbXM6IFsnQ29weScsICdQYXN0ZScsICdQYXN0ZUZyb21Xb3JkJywgJy0nLCAnVW5kbycsICdSZWRvJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ3BhcmFncmFwaCcsIGl0ZW1zOiBbJ0p1c3RpZnlMZWZ0JywgJ0p1c3RpZnlDZW50ZXInLCAnSnVzdGlmeVJpZ2h0JywgJ0p1c3RpZnlCbG9jayddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdpbnNlcnQnLCBpdGVtczogWydIb3Jpem9udGFsUnVsZScsICdUYWJsZScsICdJbWFnZSddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICdhZHZhbmNlZCcsIGl0ZW1zOiBbJ1NvdXJjZSddIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdmcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBleHRyYVBsdWdpbnM6ICdkaXZhcmVhJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsZWJyb3dzZXJCcm93c2VVcmw6ICcvZWxmaW5kZXInXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9hc3RfaWQgPSBcInRvYXN0ZWRcIiArIGlkO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbF9pbnB1dCA9ICQoJyMnICsgaWQpLnBhcmVudCgpLmZpbmQoJ2xhYmVsJykudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgZWRpdG9yLm9uKCdyZXF1aXJlZCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgZXZ0LmVkaXRvci5uYW1lKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCcnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvYXN0LWNvbnRhaW5lciBwb3NpdGlvbi1maXhlZCBib3R0b20tMCBlbmQtMCBwLTNcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICA8ZGl2IGlkPVwiJyArIHRvYXN0X2lkICsgJ1wiIGNsYXNzPVwidG9hc3RcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1oZWFkZXJcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgICAgPHN0cm9uZyBjbGFzcz1cIm1lLWF1dG9cIj5FcnJldXIgLSBPYmxpZ2F0b2lyZTwvc3Ryb25nPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1ib2R5XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICAgIENoYW1wICcgKyBsYWJlbF9pbnB1dCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICA8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvYXN0VHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvYXN0X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IGJvb3RzdHJhcC5Ub2FzdCh0b2FzdFRyaWdnZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdC5zaG93KClcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaWQpLmNsb3Nlc3QoJy5idWlsZGVyX19lbGVtZW50JykuYWRkQ2xhc3MoJ2Vycm9yX3JlcXVpcmVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWRpdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGl0b3IuZ2V0RGF0YSgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFjdGlvbi1zYXZlQW5kUmV0dXJuLCAuYWN0aW9uLXNhdmVBbmRBZGRBbm90aGVyLCAuYWN0aW9uLXNhdmVBbmRSZXR1cm4sIC5hY3Rpb24tc2F2ZUFuZENvbnRpbnVlJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBfYXV0b1ZhbGlkYXRlRmlsZUlucHV0cygkZm9ybSkge1xuICAgICAgICAkZm9ybS5vbignY2hhbmdlJywgJ2lucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChFbGVtZW50Rm9ybU1vdW50ZXIuX3ZhbGlkYXRlRmlsZUlucHV0KGUuY3VycmVudFRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2aWV3IGhhbmRsZWQgaW4gX3ZhbGlkYXRlRmlsZUlucHV0IG5vd1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX3ZhbGlkYXRlRmlsZUlucHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gaW5wdXQuZmlsZXM7XG5cbiAgICAgICAgaWYgKCFmaWxlcyB8fCAhZmlsZXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzWzBdO1xuICAgICAgICBjb25zdCBmaWxlU2l6ZU1CID0gKChmaWxlLnNpemUgLyAxMDI0KSAvIDEwMjQpLnRvRml4ZWQoNCk7XG5cbiAgICAgICAgaWYgKGZpbGVTaXplTUIgPiBGb3JtQnVpbGRlci5JTUFHRV9NQVhfU0laRV9NQikge1xuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ0ZpY2hpZXIgdHJvcCBncm9zJyk7XG4gICAgICAgICAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IGxvY2FsIHByZXZpZXdcbiAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR3aWRnZXQgPSAkKGlucHV0KS5jbG9zZXN0KCcuaW1hZ2UtdXBsb2FkLXdpZGdldCcpO1xuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1lbXB0eScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLnNob3coKTtcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGVuYW1lLXByZXZpZXcnKS50ZXh0KGZpbGUubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGRlbGV0ZSBidXR0b24gZm9yIGxvY2FsIGZpbGVcbiAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5maWxlLXByZXZpZXctZGVsZXRlJykub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJChpbnB1dCkudmFsKCcnKTsgLy8gQ2xlYXIgZmlsZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGVuYW1lLXByZXZpZXcnKS50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBfaHlkcmF0ZUlucHV0RmlsZSgkaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCAkcm93ID0gJGlucHV0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJyk7XG4gICAgICAgIGxldCAkd2lkZ2V0ID0gJHJvdy5maW5kKCcuaW1hZ2UtdXBsb2FkLXdpZGdldCcpO1xuXG4gICAgICAgIC8vIEhpZGUgZW1wdHkgc3RhdGUsIHNob3cgcHJldmlld1xuICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtZW1wdHknKS5oaWRlKCk7XG4gICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3Jykuc2hvdygpO1xuICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldyBpbWcnKS5hdHRyKCdzcmMnLCB2YWx1ZSk7XG5cbiAgICAgICAgJHdpZGdldC5maW5kKCcuZmlsZS1wcmV2aWV3LWRlbGV0ZScpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcnKS5oaWRlKCk7XG4gICAgICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtZW1wdHknKS5zaG93KCk7XG4gICAgICAgICAgICAvLyBDbGVhciBoaWRkZW4gaW5wdXQgKFVSTCkgYW5kIGZpbGUgaW5wdXQgdG8gYmUgc2FmZVxuICAgICAgICAgICAgJHJvdy5maW5kKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJykudmFsKCcnKTtcbiAgICAgICAgICAgICRyb3cuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS52YWwoJycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2h5ZHJhdGVJbnB1dFByZXZpZXcoJGlucHV0LCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbGVFeHQgPSB2YWx1ZS5zdWJzdHIodmFsdWUubGFzdEluZGV4T2YoJy4nKSArIDEpLnRvTG93ZXJDYXNlKCk7O1xuICAgICAgICBsZXQgbGlzdF9leHQgPSBbJ2pwZycsICdwbmcnLCAnanBlZycsICdwZGYnXTtcbiAgICAgICAgaWYgKGZpbGVFeHQgPT09IFwicGRmXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gXCIvaW1hZ2VzL2ljb25fcGRmLnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0X2V4dC5pbmRleE9mKGZpbGVFeHQpID09PSAtMSkge1xuICAgICAgICAgICAgdmFsdWUgPSBcIi9pbWFnZXMvaWNvbl9maWxlLnBuZ1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0ICRyb3cgPSAkaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKTtcbiAgICAgICAgbGV0ICR3aWRnZXQgPSAkcm93LmZpbmQoJy5pbWFnZS11cGxvYWQtd2lkZ2V0Jyk7XG5cbiAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICAkd2lkZ2V0LmZpbmQoJy5pbWFnZS11cGxvYWQtcHJldmlldycpLnNob3coKTtcbiAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLXByZXZpZXcgaW1nJykuYXR0cignc3JjJywgdmFsdWUpO1xuXG4gICAgICAgIC8vIEVuc3VyZSBkZWxldGUgd29ya3MgZm9yIHRoaXMgdHlwZSB0b28gaWYgbmVlZGVkXG4gICAgICAgICR3aWRnZXQuZmluZCgnLmZpbGUtcHJldmlldy1kZWxldGUnKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICR3aWRnZXQuZmluZCgnLmltYWdlLXVwbG9hZC1wcmV2aWV3JykuaGlkZSgpO1xuICAgICAgICAgICAgJHdpZGdldC5maW5kKCcuaW1hZ2UtdXBsb2FkLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICAgICAgLy8gQ2xlYXIgaGlkZGVuIGlucHV0IChVUkwpXG4gICAgICAgICAgICAkaW5wdXQudmFsKCcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgSU1BR0VfTUFYX1NJWkVfTUIgPSA2MDtcclxuXHJcbi8qKlxyXG4gKiBNb2Rlcm4gZmx1ZW50IEZvcm1CdWlsZGVyIGZvciBjcmVhdGluZyBidWlsZGVyIGVsZW1lbnQgZm9ybXNcclxuICogUmVwbGFjZXMgdGhlIG9sZCBzdHJpbmcgY29uY2F0ZW5hdGlvbiBhcHByb2FjaCB3aXRoIGEgc3RydWN0dXJlZCBBUElcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1CdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1aWxkZXJEYXRhID0ge30pIHtcclxuICAgICAgICB0aGlzLmJ1aWxkZXJEYXRhID0gYnVpbGRlckRhdGE7XHJcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3cgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmllbGROYW1lcyA9IG5ldyBTZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IElNQUdFX01BWF9TSVpFX01CKCkge1xyXG4gICAgICAgIHJldHVybiBJTUFHRV9NQVhfU0laRV9NQjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBMQVlPVVQgTUFOQUdFTUVOVCA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgYSBuZXcgcm93IGZvciBtYW51YWwgbGF5b3V0IGNvbnRyb2xcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgcm93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSb3cgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGb3JtQnVpbGRlcjogTmVzdGVkIHJvd3MgYXJlIG5vdCBzdXBwb3J0ZWQuIENsb3NpbmcgcHJldmlvdXMgcm93LicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZFJvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3cgPSBbXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuZCB0aGUgY3VycmVudCByb3dcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgZW5kUm93KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSb3cgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdGb3JtQnVpbGRlcjogZW5kUm93KCkgY2FsbGVkIHdpdGhvdXQgcm93KCknKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Um93Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncm93JyxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogdGhpcy5jdXJyZW50Um93XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um93ID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGZpZWxkc2V0IChncm91cCBvZiBmaWVsZHMgd2l0aCBsZWdlbmQpXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGVnZW5kIC0gRmllbGRzZXQgbGVnZW5kIHRleHRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhIG5ldyBGb3JtQnVpbGRlciBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBmaWVsZHNldChsZWdlbmQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgbmVzdGVkQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcih0aGlzLmJ1aWxkZXJEYXRhKTtcclxuICAgICAgICBjYWxsYmFjayhuZXN0ZWRCdWlsZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnZmllbGRzZXQnLFxyXG4gICAgICAgICAgICBsZWdlbmQsXHJcbiAgICAgICAgICAgIGZpZWxkczogbmVzdGVkQnVpbGRlci5maWVsZHNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gRklFTEQgVFlQRVMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHRleHQgaW5wdXQgZmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gRmllbGQgbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gRmllbGQgb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXF1aXJlZD1mYWxzZV0gLSBJcyBmaWVsZCByZXF1aXJlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNwYW49MV0gLSBDb2x1bW4gc3BhbiAoMSBvciAyKVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRlZmF1bHRWYWx1ZT0nJ10gLSBEZWZhdWx0IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGxhY2Vob2xkZXI9JyddIC0gUGxhY2Vob2xkZXIgdGV4dFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmhlbHBUZXh0PScnXSAtIEhlbHAgdGV4dCBiZWxvdyBmaWVsZFxyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGRUZXh0KG5hbWUsIGxhYmVsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYW4gPSAxLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAnJyxcclxuICAgICAgICAgICAgaGVscFRleHQgPSAnJ1xyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgaGVscFRleHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBudW1iZXIgaW5wdXQgZmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gRmllbGQgbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gRmllbGQgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGROdW1iZXIobmFtZSwgbGFiZWwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3BhbiA9IDEsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnLFxyXG4gICAgICAgICAgICBoZWxwVGV4dCA9ICcnXHJcbiAgICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGROYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRGaWVsZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgaGVscFRleHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBzZWxlY3QgZHJvcGRvd24gZmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gRmllbGQgbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zTWFwIC0gT3B0aW9ucyBhcyB7dmFsdWU6IGxhYmVsfSBwYWlyc1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZFNlbGVjdChuYW1lLCBsYWJlbCwgb3B0aW9uc01hcCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMSxcclxuICAgICAgICAgICAgbXVsdGlwbGUgPSBmYWxzZVxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VsZWN0JyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICBvcHRpb25zTWFwLFxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHRleHRhcmVhIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkVGV4dGFyZWEobmFtZSwgbGFiZWwsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3BhbiA9IDIsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnLFxyXG4gICAgICAgICAgICByb3dzID0gNFxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAndGV4dGFyZWEnLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcclxuICAgICAgICAgICAgcm93c1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIENLRWRpdG9yIHJpY2ggdGV4dCBmaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSBGaWVsZCBsYWJlbFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBGaWVsZCBvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZENLRWRpdG9yKG5hbWUsIGxhYmVsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYW4gPSAyXHJcbiAgICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGROYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRGaWVsZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdja2VkaXRvcicsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbiBpbWFnZSB1cGxvYWQgZmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIC0gRmllbGQgbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gRmllbGQgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMge0Zvcm1CdWlsZGVyfVxyXG4gICAgICovXHJcbiAgICBhZGRJbWFnZShuYW1lLCBsYWJlbCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMixcclxuICAgICAgICAgICAgZm9ybWF0ID0gJzE5MjB4NjAwJyxcclxuICAgICAgICAgICAgYWNjZXB0ZWRGb3JtYXRzID0gJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgdXNlRmlsZU1hbmFnZXIgPSB0cnVlXHJcbiAgICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGROYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRGaWVsZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgZm9ybWF0LFxyXG4gICAgICAgICAgICBhY2NlcHRlZEZvcm1hdHMsXHJcbiAgICAgICAgICAgIHVzZUZpbGVNYW5hZ2VyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgVVJMIGlucHV0IGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkVXJsKG5hbWUsIGxhYmVsLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHNwYW4gPSAxLFxyXG4gICAgICAgICAgICBzaG93VG9vbHRpcCA9IGZhbHNlXHJcbiAgICAgICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlRmllbGROYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRGaWVsZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICd1cmwnLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIHNob3dUb29sdGlwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFuIGljb24gcGlja2VyIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpZWxkIG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIEZpZWxkIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkSWNvblBpY2tlcihuYW1lLCBsYWJlbCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGFuID0gMVxyXG4gICAgICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLl92YWxpZGF0ZUZpZWxkTmFtZShuYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnaWNvbicsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHRhYmxlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93cyAtIE51bWJlciBvZiByb3dzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29scyAtIE51bWJlciBvZiBjb2x1bW5zXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEZpZWxkIG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkVGFibGUocm93cywgY29scywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgeyBzcGFuID0gMiB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAndGFibGUnLFxyXG4gICAgICAgICAgICByb3dzLFxyXG4gICAgICAgICAgICBjb2xzLFxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGhlbHAgdGV4dCAobm90IGEgZmllbGQsIGp1c3QgaW5mb3JtYXRpb25hbCB0ZXh0KVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBIZWxwIG1lc3NhZ2VcclxuICAgICAqIEByZXR1cm5zIHtGb3JtQnVpbGRlcn1cclxuICAgICAqL1xyXG4gICAgYWRkSGVscChtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkRmllbGQoe1xyXG4gICAgICAgICAgICB0eXBlOiAnaGVscCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT0gRFlOQU1JQyBSRVBFQVRBQkxFIEZJRUxEUyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgcmVwZWF0YWJsZSBmaWVsZCBncm91cCAocmVwbGFjZXMgb2xkIGZpZWxkc2V0cylcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gQmFzZSBuYW1lIGZvciB0aGUgcmVwZWF0YWJsZSBncm91cFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubGFiZWwgLSBMYWJlbCBmb3IgdGhlIGdyb3VwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5taW49MV0gLSBNaW5pbXVtIG51bWJlciBvZiBpdGVtc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4PTEwXSAtIE1heGltdW0gbnVtYmVyIG9mIGl0ZW1zXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5pbml0aWFsPTFdIC0gSW5pdGlhbCBudW1iZXIgb2YgaXRlbXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29uZmlnLmFkZEJ1dHRvblRleHQ9JysgQWpvdXRlciddIC0gQWRkIGJ1dHRvbiB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvbmZpZy5yZW1vdmVCdXR0b25UZXh0PSdTdXBwcmltZXInXSAtIFJlbW92ZSBidXR0b24gdGV4dFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZmlnLnRlbXBsYXRlIC0gVGVtcGxhdGUgZnVuY3Rpb24gKGluZGV4LCBidWlsZGVyKSA9PiBidWlsZGVyXHJcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUJ1aWxkZXJ9XHJcbiAgICAgKi9cclxuICAgIGFkZFJlcGVhdGFibGUobmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgbWluID0gMSxcclxuICAgICAgICAgICAgbWF4ID0gMTAsXHJcbiAgICAgICAgICAgIGluaXRpYWwgPSAxLFxyXG4gICAgICAgICAgICBhZGRCdXR0b25UZXh0ID0gJysgQWpvdXRlcicsXHJcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQgPSAnU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVcclxuICAgICAgICB9ID0gY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl9hZGRGaWVsZCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdyZXBlYXRhYmxlJyxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIG1pbixcclxuICAgICAgICAgICAgbWF4LFxyXG4gICAgICAgICAgICBpbml0aWFsLFxyXG4gICAgICAgICAgICBhZGRCdXR0b25UZXh0LFxyXG4gICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBSRU5ERVJJTkcgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgZm9ybSB0byBIVE1MIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJmb3JtLWJ1aWxkZXItcm9vdFwiPlxcbic7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcclxuICAgICAgICAgICAgaHRtbCArPSB0aGlzLl9yZW5kZXJGaWVsZChmaWVsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGEgc2luZ2xlIGZpZWxkXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVuZGVyRmllbGQoZmllbGQpIHtcclxuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAncm93JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJSb3coZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdmaWVsZHNldCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRmllbGRzZXQoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0KGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJOdW1iZXIoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNlbGVjdChmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUZXh0YXJlYShmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NrZWRpdG9yJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJDS0VkaXRvcihmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJbWFnZShmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyVXJsKGZpZWxkKTtcclxuICAgICAgICAgICAgY2FzZSAnaWNvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWNvbihmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhYmxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJUYWJsZShmaWVsZCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hlbHAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckhlbHAoZmllbGQpO1xyXG4gICAgICAgICAgICBjYXNlICdyZXBlYXRhYmxlJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJSZXBlYXRhYmxlKGZpZWxkKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgRm9ybUJ1aWxkZXI6IFVua25vd24gZmllbGQgdHlwZSBcIiR7ZmllbGQudHlwZX1cImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyUm93KGZpZWxkKSB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cImZvcm0tYnVpbGRlci1yb3dcIj5cXG4nO1xyXG4gICAgICAgIGZvciAoY29uc3Qgcm93RmllbGQgb2YgZmllbGQuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5fcmVuZGVyRmllbGQocm93RmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJGaWVsZHNldChmaWVsZCkge1xyXG4gICAgICAgIGxldCBodG1sID0gYDxmaWVsZHNldD5cXG48bGVnZW5kPiR7ZmllbGQubGVnZW5kfTwvbGVnZW5kPlxcbmA7XHJcbiAgICAgICAgZm9yIChjb25zdCBuZXN0ZWRGaWVsZCBvZiBmaWVsZC5maWVsZHMpIHtcclxuICAgICAgICAgICAgaHRtbCArPSB0aGlzLl9yZW5kZXJGaWVsZChuZXN0ZWRGaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgKz0gJzwvZmllbGRzZXQ+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyVGV4dChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGZpZWxkLnBsYWNlaG9sZGVyID8gYHBsYWNlaG9sZGVyPVwiJHtmaWVsZC5wbGFjZWhvbGRlcn1cImAgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgdmFsdWU9XCIke2ZpZWxkLmRlZmF1bHRWYWx1ZX1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICR7cmVxdWlyZWRBdHRyfSAke3BsYWNlaG9sZGVyfS8+XFxuYDtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmhlbHBUZXh0KSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj4ke2ZpZWxkLmhlbHBUZXh0fTwvc21hbGw+XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlck51bWJlcihmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGRhdGEtbmFtZT1cIiR7ZmllbGQubmFtZX1cIiB2YWx1ZT1cIiR7ZmllbGQuZGVmYXVsdFZhbHVlfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgb25pbnB1dD1cInRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1teMC05Ll0vZywgJycpO1wiICR7cmVxdWlyZWRBdHRyfS8+XFxuYDtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmhlbHBUZXh0KSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgPHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj4ke2ZpZWxkLmhlbHBUZXh0fTwvc21hbGw+XFxuYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclNlbGVjdChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuICAgICAgICBjb25zdCBtdWx0aXBsZUF0dHIgPSBmaWVsZC5tdWx0aXBsZSA/ICdtdWx0aXBsZScgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8c2VsZWN0IGRhdGEtbmFtZT1cIiR7ZmllbGQubmFtZX1cIiBjbGFzcz1cInNlbGVjdDIgZm9ybS1jb250cm9sXCIgJHtyZXF1aXJlZEF0dHJ9ICR7bXVsdGlwbGVBdHRyfT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gdGhpcy5fbWFrZU9wdGlvblRhZ3MoZmllbGQub3B0aW9uc01hcCwgZmllbGQucmVxdWlyZWQpO1xyXG4gICAgICAgIGh0bWwgKz0gJyAgPC9zZWxlY3Q+XFxuJztcclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJUZXh0YXJlYShmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8dGV4dGFyZWEgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIiR7ZmllbGQucm93c31cIiAke3JlcXVpcmVkQXR0cn0+JHtmaWVsZC5kZWZhdWx0VmFsdWV9PC90ZXh0YXJlYT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlckNLRWRpdG9yKGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRBdHRyID0gZmllbGQucmVxdWlyZWQgPyAncmVxdWlyZWQnIDogJyc7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRMYWJlbCA9IGZpZWxkLnJlcXVpcmVkID8gJyAqJyA6ICcnO1xyXG5cclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIGRhdGEtc3Bhbj1cIiR7ZmllbGQuc3Bhbn1cIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGxhYmVsPiR7ZmllbGQubGFiZWx9JHtyZXF1aXJlZExhYmVsfTwvbGFiZWw+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDx0ZXh0YXJlYSBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZWxlbWVudC1ja2VkaXRvclwiICR7cmVxdWlyZWRBdHRyfT48L3RleHRhcmVhPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVySW1hZ2UoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZXF1aXJlZExhYmVsID0gZmllbGQucmVxdWlyZWQgPyAnIConIDogJyc7XHJcbiAgICAgICAgY29uc3QgbGltaXRTaXplID0gRm9ybUJ1aWxkZXIuSU1BR0VfTUFYX1NJWkVfTUI7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtaW1hZ2VcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY29udHJvbC1sYWJlbCBtYi0yXCI+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9X3VybFwiLz5cXG5gO1xyXG5cclxuICAgICAgICAvLyBDb250ZW5ldXIgcHJpbmNpcGFsIHN0eWxlIFwiY2FydGVcIlxyXG4gICAgICAgIGh0bWwgKz0gYCAgPGRpdiBjbGFzcz1cImNhcmQgYmctbGlnaHQgYm9yZGVyLWRhc2hlZCBpbWFnZS11cGxvYWQtd2lkZ2V0XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSB0ZXh0LWNlbnRlciBwLTRcIj5cXG5gO1xyXG5cclxuICAgICAgICAvLyDDiXRhdCB2aWRlXHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLXVwbG9hZC1lbXB0eVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMyB0ZXh0LW11dGVkXCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbWFnZSBmYS0zeFwiPjwvaT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPC9kaXY+XFxuYDtcclxuXHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZ2FwLTIgbWItM1wiPlxcbmA7XHJcblxyXG4gICAgICAgIC8vIEJvdXRvbiBVcGxvYWQgTG9jYWwgKGlucHV0IHdyYXBww6kpXHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHBvc2l0aW9uLXJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBtYi0wXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVwbG9hZCBtZS0xXCI+PC9pPiBVcGxvYWRcXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIiR7ZmllbGQuYWNjZXB0ZWRGb3JtYXRzfVwiIGRhdGEtbmFtZT1cIiR7ZmllbGQubmFtZX1cIiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTAgb3BhY2l0eS0wIHctMTAwIGgtMTAwXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCIvPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDwvbGFiZWw+XFxuYDtcclxuXHJcbiAgICAgICAgLy8gQm91dG9uIEZpbGUgTWFuYWdlclxyXG4gICAgICAgIGlmIChmaWVsZC51c2VGaWxlTWFuYWdlcikge1xyXG4gICAgICAgICAgICBodG1sICs9IGAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNlbGVjdC1mcm9tLWZpbGVtYW5hZ2VyXCIgZGF0YS10YXJnZXQ9XCIke2ZpZWxkLm5hbWV9XCI+XFxuYDtcclxuICAgICAgICAgICAgaHRtbCArPSBgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mb2xkZXItb3BlbiBtZS0xXCI+PC9pPiBNw6lkaWF0aMOocXVlXFxuYDtcclxuICAgICAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDwvYnV0dG9uPlxcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sICs9IGAgICAgICAgIDwvZGl2PlxcbmA7XHJcblxyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrXCI+Rm9ybWF0czogJHtmaWVsZC5hY2NlcHRlZEZvcm1hdHMuc3BsaXQoJywnKS5tYXAoZiA9PiBmLnJlcGxhY2UoJ2ltYWdlLycsICcuJykpLmpvaW4oJywgJyl9PC9zbWFsbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZCBkLWJsb2NrXCI+TWF4OiAke2xpbWl0U2l6ZX1NbyDigKIgUmVjb21tYW5kw6k6ICR7ZmllbGQuZm9ybWF0fTwvc21hbGw+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICA8L2Rpdj5cXG5gOyAvLyBGaW4gZW1wdHkgc3RhdGVcclxuXHJcbiAgICAgICAgLy8gw4l0YXQgUHJldmlld1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS11cGxvYWQtcHJldmlld1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTsgcG9zaXRpb246IHJlbGF0aXZlO1wiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtcHJldmlldy1jb250YWluZXIgbWItMlwiIHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgICAgPGltZyBzcmM9XCJcIiBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkIGJvcmRlciBiZy13aGl0ZVwiIHN0eWxlPVwibWF4LWhlaWdodDogMjAwcHg7IG9iamVjdC1maXQ6IGNvbnRhaW47XCIgYWx0PVwiUHJldmlld1wiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIHBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGVuZC0wIHRyYW5zbGF0ZS1taWRkbGUteSBmaWxlLXByZXZpZXctZGVsZXRlXCIgc3R5bGU9XCJyaWdodDogLTEwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgcGFkZGluZzogMDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgc3R5bGU9XCJmb250LXNpemU6IDEycHg7XCI+PC9pPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICAgIDwvYnV0dG9uPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgICA8L2Rpdj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgICAgPGRpdj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkIGZpbGVuYW1lLXByZXZpZXdcIj48L3NtYWxsPjwvZGl2PlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgPC9kaXY+XFxuYDsgLy8gRmluIHByZXZpZXcgc3RhdGVcclxuXHJcbiAgICAgICAgaHRtbCArPSBgICAgIDwvZGl2PlxcbmA7IC8vIEZpbiBjYXJkLWJvZHlcclxuICAgICAgICBodG1sICs9IGAgIDwvZGl2PlxcbmA7IC8vIEZpbiBjYXJkXHJcbiAgICAgICAgaHRtbCArPSBgPC9kaXY+XFxuYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclVybChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDxsYWJlbD4ke2ZpZWxkLmxhYmVsfSR7cmVxdWlyZWRMYWJlbH08L2xhYmVsPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAke3JlcXVpcmVkQXR0cn0vPlxcbmA7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5zaG93VG9vbHRpcCkge1xyXG4gICAgICAgICAgICBodG1sICs9ICcgIDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+VVJMIGRlIGxhIHZpZMOpby4gRXhlbXBsZSA6IGh0dHBzOi8veW91dHUuYmUvMDkxMjg3PC9zbWFsbD5cXG4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVySWNvbihmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkQXR0ciA9IGZpZWxkLnJlcXVpcmVkID8gJ3JlcXVpcmVkJyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTGFiZWwgPSBmaWVsZC5yZXF1aXJlZCA/ICcgKicgOiAnJztcclxuICAgICAgICBjb25zdCBpY29ucyA9IHRoaXMuX2dldEljb25zKCk7XHJcblxyXG4gICAgICAgIGxldCBodG1sID0gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgZGF0YS1zcGFuPVwiJHtmaWVsZC5zcGFufVwiPlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8bGFiZWw+JHtmaWVsZC5sYWJlbH0ke3JlcXVpcmVkTGFiZWx9PC9sYWJlbD5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPHNlbGVjdCBkYXRhLW5hbWU9XCIke2ZpZWxkLm5hbWV9XCIgY2xhc3M9XCJzZWxlY3QyIGZvcm0tY29udHJvbFwiICR7cmVxdWlyZWRBdHRyfT5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gdGhpcy5fbWFrZU9wdGlvblRhZ3MoaWNvbnMsIGZpZWxkLnJlcXVpcmVkKTtcclxuICAgICAgICBodG1sICs9ICcgIDwvc2VsZWN0Plxcbic7XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+XFxuJztcclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuXHJcbiAgICBfcmVuZGVyVGFibGUoZmllbGQpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYDx0ZD48dGV4dGFyZWEgZGF0YS1uYW1lPVwiJHtuYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjFcIj48L3RleHRhcmVhPjwvdGQ+YDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lID0gKG5iQ29scywgbmFtZVByZWZpeCwgbGFiZWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IGh0bWwgPSBgPHRyPjx0aD4ke2xhYmVsfTwvdGg+YDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkNvbHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBjb2woYCR7bmFtZVByZWZpeH1fJHtpfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGh0bWwgPSBgPGRpdiBkYXRhLXNwYW49XCIke2ZpZWxkLnNwYW59XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9ICcgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXNtXCI+XFxuJztcclxuICAgICAgICBodG1sICs9ICcgICAgPHRib2R5Plxcbic7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gbGluZShmaWVsZC5jb2xzLCBgdGFibGVfY2VsbF8ke2l9YCwgaSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCArPSAnICAgIDwvdGJvZHk+XFxuJztcclxuICAgICAgICBodG1sICs9ICcgIDwvdGFibGU+XFxuJztcclxuICAgICAgICBodG1sICs9ICc8L2Rpdj5cXG4nO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJIZWxwKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8cD48ZW0+JHtmaWVsZC5tZXNzYWdlfTwvZW0+PC9wPlxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlclJlcGVhdGFibGUoZmllbGQpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiZm9ybS1yZXBlYXRhYmxlXCIgZGF0YS1uYW1lPVwiJHtmaWVsZC5uYW1lfVwiIGRhdGEtbWluPVwiJHtmaWVsZC5taW59XCIgZGF0YS1tYXg9XCIke2ZpZWxkLm1heH1cIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgPGRpdiBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZS1oZWFkZXJcIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICA8c3Ryb25nPiR7ZmllbGQubGFiZWx9PC9zdHJvbmc+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgIDwvZGl2PlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8ZGl2IGNsYXNzPVwiZm9ybS1yZXBlYXRhYmxlLWl0ZW1zXCI+XFxuYDtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIGluaXRpYWwgaXRlbXNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBmaWVsZC5pbml0aWFsOyBpKyspIHtcclxuICAgICAgICAgICAgaHRtbCArPSBgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tcmVwZWF0YWJsZS1pdGVtXCIgZGF0YS1pbmRleD1cIiR7aSAtIDF9XCI+XFxuYDtcclxuICAgICAgICAgICAgaHRtbCArPSBgICAgICAgPGxlZ2VuZD4ke2ZpZWxkLmxhYmVsfSAjJHtpfTwvbGVnZW5kPlxcbmA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcih0aGlzLmJ1aWxkZXJEYXRhKTtcclxuICAgICAgICAgICAgZmllbGQudGVtcGxhdGUoaSwgaXRlbUJ1aWxkZXIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtRmllbGQgb2YgaXRlbUJ1aWxkZXIuZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IHRoaXMuX3JlbmRlckZpZWxkKGl0ZW1GaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpID4gZmllbGQubWluKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlciBmb3JtLXJlcGVhdGFibGUtcmVtb3ZlXCI+JHtmaWVsZC5yZW1vdmVCdXR0b25UZXh0fTwvYnV0dG9uPlxcbmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gYCAgICA8L2ZpZWxkc2V0PlxcbmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sICs9IGAgIDwvZGl2PlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgZm9ybS1yZXBlYXRhYmxlLWFkZFwiPiR7ZmllbGQuYWRkQnV0dG9uVGV4dH08L2J1dHRvbj5cXG5gO1xyXG5cclxuICAgICAgICAvLyBSZW5kZXIgdGVtcGxhdGUgZm9yIG5ldyBpdGVtc1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlQnVpbGRlciA9IG5ldyBGb3JtQnVpbGRlcih0aGlzLmJ1aWxkZXJEYXRhKTtcclxuICAgICAgICAvLyBVc2UgYSB1bmlxdWUgcGxhY2Vob2xkZXIgdG8gc3VwcG9ydCBuZXN0ZWQgcmVwZWF0YWJsZXNcclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGBfX0lOREVYXyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpfV9fYDtcclxuXHJcbiAgICAgICAgZmllbGQudGVtcGxhdGUocGxhY2Vob2xkZXIsIHRlbXBsYXRlQnVpbGRlcik7XHJcblxyXG4gICAgICAgIGh0bWwgKz0gYCAgPHRlbXBsYXRlIGNsYXNzPVwiZm9ybS1yZXBlYXRhYmxlLXRlbXBsYXRlXCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7cGxhY2Vob2xkZXJ9XCI+XFxuYDtcclxuICAgICAgICBodG1sICs9IGAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1yZXBlYXRhYmxlLWl0ZW1cIiBkYXRhLWluZGV4PVwiJHtwbGFjZWhvbGRlcn1cIj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICAgIDxsZWdlbmQ+JHtmaWVsZC5sYWJlbH0gIyR7cGxhY2Vob2xkZXJ9PC9sZWdlbmQ+XFxuYDtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1GaWVsZCBvZiB0ZW1wbGF0ZUJ1aWxkZXIuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gdGhpcy5fcmVuZGVyRmllbGQoaXRlbUZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCArPSBgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXIgZm9ybS1yZXBlYXRhYmxlLXJlbW92ZVwiPiR7ZmllbGQucmVtb3ZlQnV0dG9uVGV4dH08L2J1dHRvbj5cXG5gO1xyXG4gICAgICAgIGh0bWwgKz0gYCAgICA8L2ZpZWxkc2V0PlxcbmA7XHJcbiAgICAgICAgaHRtbCArPSBgICA8L3RlbXBsYXRlPlxcbmA7XHJcblxyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Plxcbic7XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09IEhFTFBFUlMgPT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBfYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Um93ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvdy5wdXNoKGZpZWxkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3ZhbGlkYXRlRmllbGROYW1lKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZE5hbWVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEZvcm1CdWlsZGVyOiBEdXBsaWNhdGUgZmllbGQgbmFtZSBcIiR7bmFtZX1cImApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkTmFtZXMuYWRkKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIF9tYWtlT3B0aW9uVGFncyhvcHRpb25zLCBpc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvblRhZ3MgPSBpc1JlcXVpcmVkID8gJycgOiAnPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPic7XHJcblxyXG4gICAgICAgIGZvciAobGV0IG9wdGlvblZhbHVlIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29wdGlvblZhbHVlXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvblRhZ3MgKz0gYDxvcHRpb24gdmFsdWU9XCIke29wdGlvblZhbHVlfVwiPiR7b3B0aW9uc1tvcHRpb25WYWx1ZV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvblRhZ3MgKz0gYDxvcHRncm91cCBsYWJlbD1cIiR7b3B0aW9uVmFsdWV9XCI+YDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1Ym9wdGlvblZhbHVlIGluIG9wdGlvbnNbb3B0aW9uVmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVGFncyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7c3Vib3B0aW9uVmFsdWV9XCI+JHtvcHRpb25zW29wdGlvblZhbHVlXVtzdWJvcHRpb25WYWx1ZV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblRhZ3MgKz0gYDwvb3B0Z3JvdXA+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvblRhZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEljb25zKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwiaWNvbi1hcHBsaWNhdGlvblwiOiBcIkFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1tYXJrZXRwbGFjZVwiOiBcIk1hcmtldHBsYWNlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1wYXlcIjogXCJQYXlcIixcclxuICAgICAgICAgICAgXCJpY29uLWFjaGV0ZXJcIjogXCJBY2hldGVyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1lbnZveWVyXCI6IFwiRW52b3llclwiLFxyXG4gICAgICAgICAgICBcImljb24tZGVkb3VhbmVyXCI6IFwiRMOpZG91YW5lclwiLFxyXG4gICAgICAgICAgICBcImljb24tb3V2cmlyXCI6IFwiT3V2cmlyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1hZmZyYW5jaGlyXCI6IFwiQWZmcmFuY2hpclwiLFxyXG4gICAgICAgICAgICBcImljb24tYXZpb25cIjogXCJBdmlvblwiLFxyXG4gICAgICAgICAgICBcImljb24tYXZpcy1yYVwiOiBcIkF2aXMgUkFcIixcclxuICAgICAgICAgICAgXCJpY29uLWF2aXMtcmJcIjogXCJBdmlzIFJCXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1iYXRlYXVcIjogXCJCYXRlYXVcIixcclxuICAgICAgICAgICAgXCJpY29uLWJvaXRlLXBvc3RhbGVcIjogXCJCb2l0ZSBwb3N0YWxlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1idWxsZXRpbi1kZW1hdGVyaWFsaXNlXCI6IFwiQnVsbGV0aW4gZMOpbWF0w6lyaWFsaXPDqVwiLFxyXG4gICAgICAgICAgICBcImljb24tYnVyZWF1LWRlLXBvc3RlXCI6IFwiQnVyZWF1IGRlIHBvc3RlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1jYXJ0ZS1iYW5jYWlyZVwiOiBcIkNhcnRlIGJhbmNhaXJlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1jaGVxdWVzXCI6IFwiQ2jDqHF1ZXNcIixcclxuICAgICAgICAgICAgXCJpY29uLWNvbGxlY3RlclwiOiBcIkNvbGxlY3RlciBsZSBjb3VycmllclwiLFxyXG4gICAgICAgICAgICBcImljb24tZGlzdHJpYnVlclwiOiBcIkRpc3RyaWJ1ZXJcIixcclxuICAgICAgICAgICAgXCJpY29uLWVudm95ZXItbHJlXCI6IFwiRW52b3llciBMUkVcIixcclxuICAgICAgICAgICAgXCJpY29uLWVzcGVjZXNcIjogXCJFc3DDqGNlc1wiLFxyXG4gICAgICAgICAgICBcImljb24tZmFjdGV1clwiOiBcImZhY3RldXJcIixcclxuICAgICAgICAgICAgXCJpY29uLWZhY3R1cmVcIjogXCJGYWN0dXJlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1pbGVcIjogXCLDr2xlXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1pbXByaW1lclwiOiBcIkltcHJpbWVyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1pbnRlcm5ldFwiOiBcIkludGVybmV0XCIsXHJcbiAgICAgICAgICAgIFwiaWNvbi1qdXN0aWZpY2F0aWZcIjogXCJKdXN0aWZpY2F0aWZcIixcclxuICAgICAgICAgICAgXCJpY29uLWxpdnJhaXNvblwiOiBcIkxpdnJhaXNvblwiLFxyXG4gICAgICAgICAgICBcImljb24tcGllY2UtaWRlbnRpdGVcIjogXCJQacOoY2UgZCdpZGVudGl0w6lcIixcclxuICAgICAgICAgICAgXCJpY29uLXBvc3Rlci1jb2xpc1wiOiBcIlBvc3RlciBsZSBjb2xpc1wiLFxyXG4gICAgICAgICAgICBcImljb24tcG9zdGVyLWxldHRyZVwiOiBcIlBvc3RlciBsYSBsZXR0cmVcIixcclxuICAgICAgICAgICAgXCJpY29uLXByZWxldmVtZW50XCI6IFwiUHLDqWzDqHZlbWVudFwiLFxyXG4gICAgICAgICAgICBcImljb24tdGltYnJlXCI6IFwiVGltYnJlc1wiXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBERUJVRyA9PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVidWc6IGxvZyB0aGUgY3VycmVudCBmb3JtIHN0cnVjdHVyZVxyXG4gICAgICovXHJcbiAgICBkZWJ1ZygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRm9ybUJ1aWxkZXIgc3RydWN0dXJlOicsIHRoaXMuZmllbGRzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4cG9ydCBmb3JtIHN0cnVjdHVyZSBhcyBKU09OXHJcbiAgICAgKi9cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMsIG51bGwsIDIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBGb3JtQnVpbGRlciBmcm9tICcuL0Zvcm1CdWlsZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJ1aWxkZXJEYXRhID0ge30pIHtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTcOpZGlhJyxcbiAgICAgICAgICAgIGljb246ICdmYS1pbWFnZXMnLFxuICAgICAgICAgICAgbmFtZTogJ1NsaWRlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3NsaWRlcicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnc2xpZGVzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NsaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBzbGlkZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGROdW1iZXIoYHNsaWRlc11bJHtpZHh9XVtvcmRlcmAsICdPcmRyZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBzbGlkZXNdWyR7aWR4fV1baW1hZ2VQYXRoYCwgJ0ltYWdlIGFycmnDqHJlIHBsYW4gKDEzODdweCBYIDQ0MHB4KScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGkgPD0gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnMTM4N3g0NDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgc2xpZGVzXVske2lkeH1dW3RpdGxlYCwgJ1RpdHJlIGR1IHNsaWRlcicsIHsgcmVxdWlyZWQ6IGkgPD0gMiwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBzbGlkZXNdWyR7aWR4fV1bc3ViVGl0bGVgLCAnU291cy10aXRyZSBkdSBzbGlkZXInLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgc2xpZGVzXVske2lkeH1dW2J1dHRvblRpdGxlYCwgJ0xpYmVsbMOpIGR1IGJvdXRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYHNsaWRlc11bJHtpZHh9XVtidXR0b25QYXRoYCwgJ1VSTCBkZSByZWRpcmVjdGlvbiBkdSBib3V0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTcOpZGlhJyxcbiAgICAgICAgICAgIGljb246ICdmYS1pbWFnZXMnLFxuICAgICAgICAgICAgbmFtZTogJ0Nhcm91c2VsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2Fyb3VzZWwnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ2ltYWdlcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW5lIGltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBpbWFnZXNdWyR7aWR4fV1baW1hZ2VQYXRoYCwgJ0ltYWdlIGFycmnDqHJlIHBsYW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBpIDw9IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYXNpcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdUaXRyZSAoSDEgw6AgSDYpJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndGl0bGUnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnYWxpZ25tZW50JywgJ0FsaWduZW1lbnQnLCB7IHN0YXJ0OiAnR2F1Y2hlJywgY2VudGVyOiAnQ2VudHJlJywgZW5kOiAnRHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZXRpdGxlJywgJ1N0eWxlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdjb2xvcicsICdDb3VsZXVyJywgeyBwcmltYXJ5OiAnRGVmYXV0JywgYm9keTogJ05vaXInIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdWJsaW5lJywgJ1NvdWxpZ27DqScsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTWlzZSBlbiBwYWdlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1pbWFnZScsXG4gICAgICAgICAgICBuYW1lOiAnQmFuZGVhdScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2JhbmRlYXUnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnaGVpZ2h0JywgJ0hhdXRldXIgZHUgYmFuZGVhdScsIHsgZmFsc2U6ICdub3JtYWwnLCB0cnVlOiAnRWNyYW4nLCBlbnRldGU6ICdFbnTDqnRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZEltYWdlKCdpbWFnZVBhdGgnLCAnSW1hZ2UnLCB7IGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2FsaWdubWVudCcsICdBbGlnbmVtZW50JywgeyBzdGFydDogJ0dhdWNoZScsIGNlbnRlcjogJ0NlbnRyZScsIGVuZDogJ0Ryb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0b3B0aXRsZScsICdUaXRyZSBhdSBkZXNzdXMnKVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ2J1dHRvblRpdGxlJywgJ0xpYmVsbMOpIGR1IGJvdXRvbicpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ2J1dHRvblBhdGgnLCAnVVJMIGRlIHJlZGlyZWN0aW9uIGR1IGJvdXRvbicpXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndGFyZ2V0JywgJ091dmVydHVyZSBkdSBsaWVuJywgeyBfYmxhbms6ICdOb3V2ZWxsZSBmZW7DqnRyZScsIF9zZWxmOiAnRmVuw6p0cmUgYWN0dWVsbGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYXNpcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1hbGlnbi1sZWZ0JyxcbiAgICAgICAgICAgIG5hbWU6ICdUZXh0ZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RleHQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCd0ZXh0JywgJ0NvbnRlbnUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQmFzaXF1ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtYWxpZ24tanVzdGlmeScsXG4gICAgICAgICAgICBuYW1lOiAnVGV4dGUgYXZlYyBmb25kJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAndGV4dF9mb25kJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcigndGV4dCcsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0Jhc2lxdWUnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWltYWdlJyxcbiAgICAgICAgICAgIG5hbWU6ICdJbWFnZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VQYXRoMScsICdJbWFnZScsIHsgcmVxdWlyZWQ6IHRydWUsIGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0Jhc2lxdWUnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWxpbmsnLFxuICAgICAgICAgICAgbmFtZTogJ0JvdXRvbicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2J1dHRvbicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdhbGlnbm1lbnQnLCAnQWxpZ25lbWVudCcsIHsgc3RhcnQ6ICdHYXVjaGUnLCBjZW50ZXI6ICdDZW50cmUnLCBlbmQ6ICdEcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFVybCgndXJsJywgJ0xpZW4nLCB7IHJlcXVpcmVkOiB0cnVlLCBzaG93VG9vbHRpcDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3RhcmdldCcsICdPdXZlcnR1cmUgZHUgbGllbicsIHsgX2JsYW5rOiAnTm91dmVsbGUgZmVuw6p0cmUnLCBfc2VsZjogJ0ZlbsOqdHJlIGFjdHVlbGxlJyB9LCB7IHJlcXVpcmVkOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnTWlzZSBlbiBwYWdlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1taW51cycsXG4gICAgICAgICAgICBuYW1lOiAnU8OpcGFyYXRldXInLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdocicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZScsICdTdHlsZScsIHsgbm9fbGluZTogJ1NhbnMgbGlnbmUnLCB3aXRoX2xpbmU6ICdBdmVjIExpZ25lJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnaGVpZ2h0JywgJ0VzcGFjZW1lbnQnLCB7IDQ6ICdOb3JtYWwnLCA1OiAnR3JhbmQnLCAwOiAnUGV0aXQnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdCYXNpcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1uZXdzcGFwZXInLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIFRpdHJlIGV0IHRleHRlJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfdGl0bGVfdGV4dCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnYWxpZ25tZW50JywgJ0FsaWduZW1lbnQgZHUgdGl0cmUnLCB7IHN0YXJ0OiAnR2F1Y2hlJywgY2VudGVyOiAnQ2VudHJlJywgZW5kOiAnRHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUnLCB7IHJlcXVpcmVkOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51MScsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01pc2UgZW4gcGFnZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtY29sdW1ucycsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgVGV4dGUgMiBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX3RleHQnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlJywgeyAxMzogJzEvMyAtIDIvMycsIDEyOiAnMS8yIC0gMS8yJywgMjM6ICcyLzMgLSAxLzMnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0NvbG9ubmUgZ2F1Y2hlJywgYnVpbGRlciA9PiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZTEnLCAnVGl0cmUgZ2F1Y2hlJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51MScsICdDb250ZW51IGdhdWNoZScpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnQ29sb25uZSBkcm9pdGUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlMicsICdUaXRyZSBkcm9pdCcpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudTInLCAnQ29udGVudSBkcm9pdCcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01pc2UgZW4gcGFnZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaW1hZ2VzJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBJbWFnZSBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX2ltYWdlX2NvbHVtbjIzNCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdhbGlnbm1lbnQnLCAnQWxpZ25lbWVudCBkZXMgYmxvY2tzJywgeyBzdGFydDogJ0dhdWNoZScsIGNlbnRlcjogJ0NlbnRyZScsIGVuZDogJ0Ryb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdjb2x1bW5zJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbG9ubmUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSBjb2xvbm5lJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBjb2x1bW5zXVske2lkeH1dW2ltYWdlUGF0aGAsIGBJbWFnZSAke2l9w6hyZSBjb2xvbm5lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogaSA8PSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb2x1bW5zXVske2lkeH1dW3RpdGxlYCwgJ1RpdHJlJywgeyByZXF1aXJlZDogaSA8PSAyLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNvbHVtbnNdWyR7aWR4fV1bY29udGVudWAsICdUaXRyZSBkdSBsaWVuJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNvbHVtbnNdWyR7aWR4fV1bYnV0dG9uUGF0aGAsICdMaWVuIGRlIHJlZGlyZWN0aW9uJywgeyBzcGFuOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNaXNlIGVuIHBhZ2UnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWljb25zJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBQaWN0byBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX3BpY3RvX2NvbHVtbjIzNCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnYWxpZ25tZW50JywgJ0FsaWduZW1lbnQgZGVzIGJsb2NrcycsIHsgc3RhcnQ6ICdHYXVjaGUnLCBjZW50ZXI6ICdDZW50cmUnLCBlbmQ6ICdEcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnY29sdW1ucycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb2xvbm5lJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgY29sb25uZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJY29uUGlja2VyKGBjb2x1bW5zXVske2lkeH1dW2ljb25QYXRoYCwgYFBpY3RvICR7aX3DqHJlIGNvbG9ubmVgLCB7IHJlcXVpcmVkOiBpID09PSAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNvbHVtbnNdWyR7aWR4fV1bdGl0bGVgLCBgVGl0cmUgJHtpfcOocmUgY29sb25uZWAsIHsgcmVxdWlyZWQ6IGkgPT09IDEsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoYGNvbHVtbnNdWyR7aWR4fV1bY29udGVudWAsIGBDb250ZW51ICR7aX3DqHJlIGNvbG9ubmVgLCB7IHJlcXVpcmVkOiBpID09PSAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNvbHVtbnNdWyR7aWR4fV1bYnV0dG9uUGF0aGAsIGBMaWVuICR7aX3DqHJlIGNvbG9ubmVgLCB7IHJlcXVpcmVkOiBpID09PSAxLCBzcGFuOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNw6lkaWEnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXBob3RvLXZpZGVvJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBJbWFnZS1WaWTDqW8gMiBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX2ltYWdlX3ZpZGVvX2NvbHVtbjInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3Bvc2l0aW9uJywgJ0FmZmljaGFnZScsIHsgaW1hZ2VfdmlkZW86ICdJbWFnZSDDoCBnYXVjaGUgLSBWaWTDqW8gw6AgZHJvaXRlJywgdmlkZW9faW1hZ2U6ICdWaWTDqW8gw6AgZ2F1Y2hlIC0gSW1hZ2Ugw6AgZHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdJbWFnZScsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlUGF0aCcsICdJbWFnZScsIHsgcmVxdWlyZWQ6IHRydWUsIGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGVJbWFnZScsIFwiTGliZWxsw6kgZGUgbCdpbWFnZVwiLCB7IHJlcXVpcmVkOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudUltYWdlJywgXCJDb250ZW51IGRlIGwnaW1hZ2VcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ1ZpZMOpbycsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVXJsKCd2aWRlb1BhdGgnLCAnVVJMIGRlIGxhIHZpZMOpbycsIHsgcmVxdWlyZWQ6IHRydWUsIHNob3dUb29sdGlwOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZVZpZGVvJywgJ0xpYmVsbMOpIGRlIGxhIHZpZMOpbycsIHsgcmVxdWlyZWQ6IHRydWUsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51VmlkZW8nLCAnQ29udGVudSBkZSBsYSB2aWTDqW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01pc2UgZW4gcGFnZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtaWQtY2FyZCcsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgSW1hZ2UtVGV4dGUgMiBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX2ltYWdlX3RleHRlX2NvbHVtbjInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgMTM6ICcxLzMgLSAyLzMnLCAxMjogJzEvMiAtIDEvMicsIDIzOiAnMi8zIC0gMS8zJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgncG9zaXRpb24nLCAnQWZmaWNoYWdlJywgeyBpbWFnZV90ZXh0OiAnSW1hZ2Ugw6AgZ2F1Y2hlIC0gVGV4dGUgw6AgZHJvaXRlJywgdGV4dF9pbWFnZTogJ1RleHRlIMOgIGdhdWNoZSAtIEltYWdlIMOgIGRyb2l0ZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnSW1hZ2UnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKCdpbWFnZVBhdGgnLCAnSW1hZ2UnLCB7IHJlcXVpcmVkOiB0cnVlLCBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdUZXh0ZScsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndG9wdGl0bGUnLCAnVGl0cmUgYXUgZGVzc3VzJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBldGl0bGUnLCAnQmFsaXNlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3N1YnRpdGxlJywgJ1NvdXMtdGl0cmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3VidGl0bGVfY2xhc3MnLCAnQ291bGV1ciBTb3VzLXRpdHJlJywgeyBwcmltYXJ5OiAnRMOpZmF1dCcsIHNlY29uZGFyeTogJ3NlY29uZGFpcmUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51JywgJ0NvbnRlbnUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ03DqWRpYScsXG4gICAgICAgICAgICBpY29uOiAnZmEtdmlkZW8nLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIFZpZGVvLVRleHRlIDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja192aWRlb190ZXh0ZV9jb2x1bW4yJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUnLCB7IDEzOiAnMS8zIC0gMi8zJywgMTI6ICcxLzIgLSAxLzInLCAyMzogJzIvMyAtIDEvMycgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3Bvc2l0aW9uJywgJ0FmZmljaGFnZScsIHsgaW1hZ2VfdGV4dDogJ0ltYWdlIMOgIGdhdWNoZSAtIFRleHRlIMOgIGRyb2l0ZScsIHRleHRfaW1hZ2U6ICdUZXh0ZSDDoCBnYXVjaGUgLSBJbWFnZSDDoCBkcm9pdGUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ1ZpZMOpbycsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVXJsKCd2aWRlb1BhdGgnLCAnVVJMIGRlIGxhIHZpZMOpbycsIHsgcmVxdWlyZWQ6IHRydWUsIHNob3dUb29sdGlwOiB0cnVlLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnVGV4dGUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RvcHRpdGxlJywgJ1RpdHJlIGF1IGRlc3N1cycsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N0eWxldGl0bGUnLCAnU3R5bGUgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdzdWJ0aXRsZScsICdTb3VzLXRpdHJlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N1YnRpdGxlX2NsYXNzJywgJ0NvdWxldXIgU291cy10aXRyZScsIHsgcHJpbWFyeTogJ0TDqWZhdXQnLCBzZWNvbmRhcnk6ICdzZWNvbmRhaXJlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignY29udGVudScsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1jaGFydC1iYXInLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIENoaWZmcmVzIGNsw6lzLVRleHRlIDIgY29sb25uZXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19rZXlkYXRhX3RleHRlX2NvbHVtbjInLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZScsICdUeXBlJywgeyAxMzogJzEvMyAtIDIvMycsIDEyOiAnMS8yIC0gMS8yJywgMjM6ICcyLzMgLSAxLzMnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdwb3NpdGlvbicsICdBZmZpY2hhZ2UnLCB7IGltYWdlX3RleHQ6ICdDaGlmZnJlIGNsw6kgw6AgZ2F1Y2hlIC0gVGV4dGUgw6AgZHJvaXRlJywgdGV4dF9pbWFnZTogJ1RleHRlIMOgIGdhdWNoZSAtIENoaWZmcmUgY2zDqScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnVGV4dGUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RvcHRpdGxlJywgJ1RpdHJlIGF1IGRlc3N1cycsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3N0eWxldGl0bGUnLCAnU3R5bGUgSG4nLCB7IGgxOiAnSDEnLCBoMjogJ0gyJywgaDM6ICdIMycsIGg0OiAnSDQnLCBoNTogJ0g1JywgaDY6ICdINicgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ3N1YnRpdGxlJywgJ1NvdXMtdGl0cmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3VidGl0bGVfY2xhc3MnLCAnQ291bGV1ciBTb3VzLXRpdHJlJywgeyBwcmltYXJ5OiAnRMOpZmF1dCcsIHNlY29uZGFyeTogJ3NlY29uZGFpcmUnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51JywgJ0NvbnRlbnUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnQ2hpZmZyZXMgY2zDqXMnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdjb250ZW51MicsICdDb250ZW51JywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1mb2xkZXInLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIE9uZ2xldCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX29uZ2xldF90ZXh0JyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdvbmdsZXRzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ09uZ2xldCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gb25nbGV0JyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYG9uZ2xldHNdWyR7aWR4fV1bbGliZWxsZWAsIFwiTGliZWxsw6kgZGUgbCdvbmdsZXRcIiwgeyByZXF1aXJlZDogaSA8PSAyLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKGBvbmdsZXRzXVske2lkeH1dW2NvbnRlbnVgLCAnQ29udGVudScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1xdWVzdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIE9uZ2xldCBGQVEnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19vbmdsZXRfZmFxJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnb25nbGV0cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPbmdsZXQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIG9uZ2xldCcsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBvbmdsZXRzXVske2lkeH1dW2xpYmVsbGVgLCBcIkxpYmVsbMOpIGRlIGwnb25nbGV0XCIsIHsgcmVxdWlyZWQ6IGkgPD0gMiwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBvbmdsZXRzXVske2lkeH1dW3RpdGxlYCwgJ1RpdHJlIGR1IGJsb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVtzdWJ0aXRsZWAsICdTb3VzLXRpdHJlIGR1IGJsb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZShgb25nbGV0c11bJHtpZHh9XVtmYXFzYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ZBUScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSBGQVEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChqLCBzdWJCdWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBqZHggPSB0eXBlb2YgaiA9PT0gJ3N0cmluZycgPyBqICsgJ19NSU5VU18xJyA6IGogLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YkJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKGBvbmdsZXRzXVske2lkeH1dW2ZhcXNdWyR7amR4fV1bb3JkZXJgLCAnT3JkcmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBvbmdsZXRzXVske2lkeH1dW2ZhcXNdWyR7amR4fV1bcXVlc3Rpb25gLCBcIlRpdHJlIGRlIGxhIHF1ZXN0aW9uXCIsIHsgcmVxdWlyZWQ6IGogPD0gMiAmJiBpIDw9IDIsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVtmYXFzXVske2pkeH1dW2Fuc3dlcmAsIFwiUsOpcG9uc2VcIiwgeyByZXF1aXJlZDogaiA8PSAyICYmIGkgPD0gMiwgc3BhbjogMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1maWxlLWRvd25sb2FkJyxcbiAgICAgICAgICAgIG5hbWU6ICdCbG9jayBcIkRvY3VtZW50cyB0w6lsw6ljaGFyZ2VhYmxlc1wiJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmxvY2tfZG9jdW1lbnRzX3RlbGVjaGFyZ2VhYmxlcycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ2RvY3VtZW50cycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEb2N1bWVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gZG9jdW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoYGRvY3VtZW50c11bJHtpZHh9XVtpbWFnZVBhdGhgLCAnRG9jdW1lbnQnLCB7IHJlcXVpcmVkOiBpID09PSAxLCBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZyxhcHBsaWNhdGlvbi9wZGYnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGRvY3VtZW50c11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZScsIHsgcmVxdWlyZWQ6IGkgPT09IDEsIHNwYW46IDIgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0F2YW5jw6knLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWZvbGRlci1vcGVuJyxcbiAgICAgICAgICAgIG5hbWU6ICdPbmdsZXQgZGUgcGFnZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ29uZ2xldCcsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ29uZ2xldHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT25nbGV0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBvbmdsZXQnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgb25nbGV0c11bJHtpZHh9XVtsaWJlbGxlYCwgYE9uZ2xldCAke2l9IC0gTGliZWxsw6lgLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KGBvbmdsZXRzXVske2lkeH1dW2NvbnRlbnVgLCBgT25nbGV0ICR7aX0gLSBDb250ZW51YCwgYnVpbGRlckRhdGEub25nbGV0cywgeyBzcGFuOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS10YWJsZScsXG4gICAgICAgICAgICBuYW1lOiAnVGFibGVhdScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RhYmxlJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkSGVscCgnQ2hvaXNpciB1bmUgb3B0aW9uIGRcXCdlbnTDqnRlIGV0IHJlbXBsaXIgYXV0YW50IGRlIGxpZ25lcyAvIGNvbG9ubmVzIHF1ZSBuw6ljZXNzYWlyZScpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnaGVhZGVycycsICdFbnTDqnRlcycsIHsgZmlyc3RfbGluZTogJ1ByZW1pw6hyZSBsaWduZScsIGZpcnN0X3R3b19saW5lczogJ1ByZW1pw6hyZSBldCBkZXV4acOobWUgbGlnbmVzJyB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgcmVndWxhcjogJ1RhYmxlYXUgc3RhbmRhcmQnLCBwaXZvdDogJ1RhYmxlYXUgY3JvaXPDqScgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGFibGUoMjAsIDUpXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtdGFibGUnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIEltYWdlLVRhYmxlYXUgMiBjb2xvbm5lcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrX2ltYWdlX3RhYmxlYXVfY29sdW1uMicsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdjb2xUeXBlJywgJ1R5cGUnLCB7IDEzOiAnMS8zIC0gMi8zJywgMTI6ICcxLzIgLSAxLzInLCAyMzogJzIvMyAtIDEvMycgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3Bvc2l0aW9uJywgJ0FmZmljaGFnZScsIHsgaW1hZ2VfdGFibGVhdTogJ0ltYWdlIMOgIGdhdWNoZSAtIFRhYmxlYXUgw6AgZHJvaXRlJywgdGFibGVhdV9pbWFnZTogJ1RhYmxlYXUgw6AgZ2F1Y2hlIC0gSW1hZ2Ugw6AgZHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdJbWFnZScsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlUGF0aCcsICdJbWFnZScsIHsgcmVxdWlyZWQ6IHRydWUsIGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyB9KVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGVJbWcnLCAnVGl0cmUgZGUgbFxcJ2ltYWdlJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnVGFibGVhdScsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkSGVscCgnQ2hvaXNpciB1bmUgb3B0aW9uIGRcXCdlbnTDqnRlIGV0IHJlbXBsaXIgYXV0YW50IGRlIGxpZ25lcyAvIGNvbG9ubmVzIHF1ZSBuw6ljZXNzYWlyZScpXG4gICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdoZWFkZXJzJywgJ0VudMOqdGVzJywgeyBmaXJzdF9saW5lOiAnUHJlbWnDqHJlIGxpZ25lJywgZmlyc3RfdHdvX2xpbmVzOiAnUHJlbWnDqHJlIGV0IGRldXhpw6htZSBsaWduZXMnIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ3R5cGUnLCAnVHlwZScsIHsgcmVndWxhcjogJ1RhYmxlYXUgc3RhbmRhcmQnLCBwaXZvdDogJ1RhYmxlYXUgY3JvaXPDqScgfSlcbiAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUYWJsZSg4LCA1KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS1jaGV2cm9uLWRvd24nLFxuICAgICAgICAgICAgbmFtZTogJ0FjY29yZMOpb24nLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvcmRpb24nLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdpdGVtcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBY2NvcmTDqW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBpdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGl0ZW1zXVske2lkeH1dW3RpdGxlYCwgJ1RpdHJlJywgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBpdGVtc11bJHtpZHh9XVtpbWFnZVBhdGhgLCAnSW1hZ2UnLCB7IGFjY2VwdGVkRm9ybWF0czogJ2ltYWdlL2pwZWcsaW1hZ2UvcG5nJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcihgaXRlbXNdWyR7aWR4fV1bcGFyYWdyYXBoYCwgJ1BhcmFncmFwaGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnRHluYW1pcXVlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1yc3MnLFxuICAgICAgICAgICAgbmFtZTogJ0Jsb2NrIERlcm5pZXJzIGFydGljbGVzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnbGFzdF9uZXdzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBlJywgJ1R5cGUgYXJ0aWNsZScsIHsgMTogJ0FjdHVhbGl0w6lzJywgMzogXCLDiXbDqG5lbWVudFwiIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKCdsaW1pdCcsIFwiTm9tYnJlIGQnw6lsw6ltZW50KHMpIG1heGltdW1cIilcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdEeW5hbWlxdWUnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLW5ld3NwYXBlcicsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgQWN0dWFsaXTDqXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY3R1YWxpdGVzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdjYXRlZ29yeUlEJywgJ0ZpbHRyZSBkZXMgYWN0dWFsaXTDqXMgdmlhIHVuZSBjYXTDqWdvcmllJywgYnVpbGRlckRhdGEuY2F0ZWdvcmllcylcbiAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKCdsaW1pdCcsIFwiTm9tYnJlIGQnw6lsw6ltZW50KHMpIG1heGltdW1cIilcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndG9wVGl0bGUnLCBcIlRpdHJlIHRvcFwiLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBldGl0bGUnLCAnQmFsaXNlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZXRpdGxlJywgJ1N0eWxlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCBcIlRpdHJlIGR1IGJsb2NcIiwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLmFkZENLRWRpdG9yKCdkZXNjcmlwdGlvbicsIFwiRGVzY3JpcHRpb24gZHUgYmxvY1wiKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidXR0b25UaXRsZScsIFwiVGl0cmUgZHUgYm91dG9uIGRlIHJlZGlyZWN0aW9uXCIsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ03DqWRpYScsXG4gICAgICAgICAgICBpY29uOiAnZmEteW91dHViZScsXG4gICAgICAgICAgICBuYW1lOiAnVmlkw6lvIFlvdXR1YmUnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICd5b3V0dWJlJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkVXJsKCd2aWRlb1BhdGgnLCAnVVJMIGRlIGxhIHZpZMOpbycsIHsgcmVxdWlyZWQ6IHRydWUsIHNob3dUb29sdGlwOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQXZhbmPDqScsXG4gICAgICAgICAgICBpY29uOiAnZmEtY2hhcnQtbGluZScsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgQ2hpZmZyZXMgY2zDqXMnLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdibG9ja19rZXlfZGF0YXMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VQYXRoJywgJ0ltYWdlJywgeyBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCd0eXBldGl0bGUnLCAnQmFsaXNlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdzdHlsZXRpdGxlJywgJ1N0eWxlIEhuJywgeyBoMTogJ0gxJywgaDI6ICdIMicsIGgzOiAnSDMnLCBoNDogJ0g0JywgaDU6ICdINScsIGg2OiAnSDYnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCBcIlRpdHJlIGR1IGJsb2NcIiwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLmFkZFJlcGVhdGFibGUoJ2tleXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2hpZmZyZSBjbMOpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBjaGlmZnJlIGNsw6knLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChga2V5c11bJHtpZHh9XVtrZXlgLCBgQ2hpZmZyZSBjbMOpICR7aSArIDF9YCwgeyByZXF1aXJlZDogaSA8IDMsIHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChga2V5c11bJHtpZHh9XVtkYXRhYCwgXCJEZXNjcmlwdGlmXCIsIHsgcmVxdWlyZWQ6IGkgPCAzLCBzcGFuOiAyIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdBdmFuY8OpJyxcbiAgICAgICAgICAgIGljb246ICdmYS10aC1sYXJnZScsXG4gICAgICAgICAgICBuYW1lOiAnQmxvY2sgNCBDYXJkcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2Jsb2NrXzRfY2FyZHMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0b3BUaXRsZScsIFwiVGl0cmUgdG9wIGR1IGJsb2NcIiwgeyBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgndHlwZXRpdGxlJywgJ0JhbGlzZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnc3R5bGV0aXRsZScsICdTdHlsZSBIbicsIHsgaDE6ICdIMScsIGgyOiAnSDInLCBoMzogJ0gzJywgaDQ6ICdINCcsIGg1OiAnSDUnLCBoNjogJ0g2JyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgXCJUaXRyZSBkdSBibG9jXCIsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdidXR0b25UaXRsZScsIFwiVGl0cmUgZHUgYm91dG9uIGRlIHJlZGlyZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ2J1dHRvblBhdGgnLCBcIlVSTCBkZSByZWRpcmVjdGlvblwiKVxuICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdjYXJkcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDYXJ0ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW5lIGNhcnRlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdChgY2FyZHNdWyR7aWR4fV1bYWxpZ25tZW50YCwgJ0FsaWduZW1lbnQgZGVzIMOpbMOpbWVudHMnLCB7IHN0YXJ0OiAnR2F1Y2hlJywgY2VudGVyOiAnQ2VudHJlJywgZW5kOiAnRHJvaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEljb25QaWNrZXIoYGNhcmRzXVske2lkeH1dW2ltYWdlSWNvYCwgJ0ljw7RuZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNhcmRzXVske2lkeH1dW3RpdGxlYCwgXCJUaXRyZSBkZSBsYSBjYXJ0ZVwiLCB7IHJlcXVpcmVkOiBpID09PSAwLCBzcGFuOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNhcmRzXVske2lkeH1dW2Rlc2NyaXB0aW9uYCwgXCJEZXNjcmlwdGlvbiBkZSBsYSBjYXJ0ZVwiLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgY2FyZHNdWyR7aWR4fV1bbGlua1RpdGxlYCwgXCJUaXRyZSBkdSBsaWVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNhcmRzXVske2lkeH1dW2xpbmtQYXRoYCwgXCJVUkwgcmVkaXJlY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0F2YW5jw6knLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWxpc3Qtb2wnLFxuICAgICAgICAgICAgbmFtZTogJ0V0YXBlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3N0ZXAnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VQYXRoJywgJ0ltYWdlJywgeyBhY2NlcHRlZEZvcm1hdHM6ICdpbWFnZS9qcGVnLGltYWdlL3BuZycgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnc3RlcHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRXRhcGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSDDqXRhcGUnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgc3RlcHNdWyR7aWR4fV1bc3RlcGAsICdFdGFwZSBuwrAnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgc3RlcHNdWyR7aWR4fV1bdGl0bGVgLCAnVGl0cmUnLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ0tFZGl0b3IoYHN0ZXBzXVske2lkeH1dW3BhcmFncmFwaGAsICdQYXJhZ3JhcGhlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PSBOT1VWRUFVWCDDiUzDiU1FTlRTID09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQ29udGVudSBpbnRlcmFjdGlmJyxcbiAgICAgICAgICAgIGljb246ICdmYS1yZWN0YW5nbGUtbGlzdCcsXG4gICAgICAgICAgICBuYW1lOiAnRm9ybXVsYWlyZSBBdmFuY8OpJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnZm9ybV9idWlsZGVyJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCd0aXRsZScsICdUaXRyZSBhdS1kZXNzdXMgZHUgZm9ybXVsYWlyZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRDS0VkaXRvcignZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Zvcm1JZCcsICdTw6lsZWN0aW9ubmV6IGxlIGZvcm11bGFpcmUgw6AgYWZmaWNoZXInLCBidWlsZGVyRGF0YS5mb3JtcyB8fCB7fSwgeyByZXF1aXJlZDogdHJ1ZSwgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01hcmtldGluZycsXG4gICAgICAgICAgICBpY29uOiAnZmEtc3RhcicsXG4gICAgICAgICAgICBuYW1lOiAnSGVybyBTZWN0aW9uJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnaGVyb19zZWN0aW9uJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnYmFja2dyb3VuZEltYWdlJywgJ0ltYWdlIGRlIGZvbmQgKDE5MjB4MTA4MCknLCB7IHJlcXVpcmVkOiB0cnVlLCBmb3JtYXQ6ICcxOTIweDEwODAnIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnb3ZlcmxheU9wYWNpdHknLCAnT3BhY2l0w6kgZHUgZmlsdHJlJywgeyAnMCc6ICdBdWN1bicsICcwLjInOiAnTMOpZ2VyICgyMCUpJywgJzAuNSc6ICdNb3llbiAoNTAlKScsICcwLjgnOiAnU29tYnJlICg4MCUpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ3RpdGxlJywgJ1RpdHJlIHByaW5jaXBhbCcsIHsgc3BhbjogMiwgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgnc3VidGl0bGUnLCAnU291cy10aXRyZScsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnQm91dG9uIFByaW5jaXBhbCcsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgnYnRuMV90ZXh0JywgJ0xpYmVsbMOpJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZFVybCgnYnRuMV91cmwnLCAnTGllbicpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5maWVsZHNldCgnQm91dG9uIFNlY29uZGFpcmUnLCBidWlsZGVyID0+IGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoJ2J0bjJfdGV4dCcsICdMaWJlbGzDqScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRVcmwoJ2J0bjJfdXJsJywgJ0xpZW4nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNYXJrZXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLXRhYmxlJyxcbiAgICAgICAgICAgIG5hbWU6ICdUYWJsZWF1eCBkZSBQcml4JyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJpY2luZ190YWJsZScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgnbWFpblRpdGxlJywgJ1RpdHJlIGRlIGxhIHNlY3Rpb24nLCB7IHNwYW46IDIgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgncGxhbnMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT2ZmcmUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuZSBvZmZyZScsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvblRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogKGksIGJ1aWxkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHR5cGVvZiBpID09PSAnc3RyaW5nJyA/IGkgKyAnX01JTlVTXzEnIDogaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBwbGFuc11bJHtpZHh9XVtuYW1lYCwgJ05vbSBkZSBsXFwnb2ZmcmUgKGV4OiBTdGFuZGFyZCknLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFNlbGVjdChgcGxhbnNdWyR7aWR4fV1baGlnaGxpZ2h0YCwgJ01ldHRyZSBlbiBhdmFudCcsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBwbGFuc11bJHtpZHh9XVtwcmljZWAsICdQcml4JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcGxhbnNdWyR7aWR4fV1bY3VycmVuY3lgLCAnRGV2aXNlIChleDog4oKsKScsIHsgZGVmYXVsdFZhbHVlOiAn4oKsJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBwbGFuc11bJHtpZHh9XVtwZXJpb2RgLCAnUMOpcmlvZGUgKGV4OiAvbW9pcyknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0YXJlYShgcGxhbnNdWyR7aWR4fV1bZmVhdHVyZXNgLCAnRm9uY3Rpb25uYWxpdMOpcyAodW5lIHBhciBsaWduZSknLCB7IHJvd3M6IDUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmllbGRzZXQoJ0JvdXRvbicsIGJ0bkJ1aWxkZXIgPT4gYnRuQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcGxhbnNdWyR7aWR4fV1bYnRuX3RleHRgLCAnTGliZWxsw6knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVXJsKGBwbGFuc11bJHtpZHh9XVtidG5fdXJsYCwgJ0xpZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ01hcmtldGluZycsXG4gICAgICAgICAgICBpY29uOiAnZmEtY29tbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ1TDqW1vaWduYWdlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Rlc3RpbW9uaWFscycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUgZGUgbGEgc2VjdGlvbicsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdyZXZpZXdzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1TDqW1vaWduYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBhdmlzJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGByZXZpZXdzXVske2lkeH1dW2F2YXRhcmAsICdQaG90byAoQXZhdGFyKScsIHsgZm9ybWF0OiAnMjAweDIwMCcgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcmV2aWV3c11bJHtpZHh9XVtuYW1lYCwgJ05vbScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgcmV2aWV3c11bJHtpZHh9XVtwb3NpdGlvbmAsICdQb3N0ZSAvIEVudHJlcHJpc2UnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbmRSb3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoYHJldmlld3NdWyR7aWR4fV1bc3RhcnNgLCAnTm90ZScsIHsgNTogJ+KtkOKtkOKtkOKtkOKtkCcsIDQ6ICfirZDirZDirZDirZAnLCAzOiAn4q2Q4q2Q4q2QJywgMjogJ+KtkOKtkCcsIDE6ICfirZAnIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dGFyZWEoYHJldmlld3NdWyR7aWR4fV1bcXVvdGVgLCAnQ2l0YXRpb24nLCB7IHJlcXVpcmVkOiB0cnVlLCByb3dzOiAzIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdNYXJrZXRpbmcnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWhhbmRzaGFrZS1vJyxcbiAgICAgICAgICAgIG5hbWU6ICdCYXJyZSBkZSBMb2dvcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2xvZ29fYmFyJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdsb2dvcycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQYXJ0ZW5haXJlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1biBsb2dvJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBsb2dvc11bJHtpZHh9XVtpbWFnZWAsICdMb2dvJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRVcmwoYGxvZ29zXVske2lkeH1dW3VybGAsICdMaWVuIChvcHRpb25uZWwpJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ1Zpc3VlbCcsXG4gICAgICAgICAgICBpY29uOiAnZmEtdGgnLFxuICAgICAgICAgICAgbmFtZTogJ0dhbGVyaWUgTWFzb25yeScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ21hc29ucnlfZ2FsbGVyeScsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkUmVwZWF0YWJsZSgnaW1hZ2VzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkQnV0dG9uVGV4dDogJysgQWpvdXRlciB1bmUgaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoYGltYWdlc11bJHtpZHh9XVtwYXRoYCwgJ0ltYWdlJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBpbWFnZXNdWyR7aWR4fV1bY2FwdGlvbmAsICdMw6lnZW5kZSAob3B0aW9ubmVsKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdWaXN1ZWwnLFxuICAgICAgICAgICAgaWNvbjogJ2ZhLWFkanVzdCcsXG4gICAgICAgICAgICBuYW1lOiAnQ29tcGFyYXRldXIgQXZhbnQvQXByw6hzJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYmVmb3JlX2FmdGVyJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnaW1hZ2VfYmVmb3JlJywgJ0ltYWdlIFwiQXZhbnRcIicsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkSW1hZ2UoJ2ltYWdlX2FmdGVyJywgJ0ltYWdlIFwiQXByw6hzXCInLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ2xhYmVsX2JlZm9yZScsICdMYWJlbCBcIkF2YW50XCInLCB7IGRlZmF1bHRWYWx1ZTogJ0F2YW50JyB9KVxuICAgICAgICAgICAgICAgIC5hZGRUZXh0KCdsYWJlbF9hZnRlcicsICdMYWJlbCBcIkFwcsOoc1wiJywgeyBkZWZhdWx0VmFsdWU6ICdBcHLDqHMnIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQ29ycG9yYXRlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1oaXN0b3J5JyxcbiAgICAgICAgICAgIG5hbWU6ICdUaW1lbGluZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RpbWVsaW5lJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ29yaWVudGF0aW9uJywgJ09yaWVudGF0aW9uJywgeyB2ZXJ0aWNhbDogJ1ZlcnRpY2FsZScsIGhvcml6b250YWw6ICdIb3Jpem9udGFsZScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdldmVudHMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnw4l2w6luZW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRCdXR0b25UZXh0OiAnKyBBam91dGVyIHVuIMOpdsOpbmVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGV2ZW50c11bJHtpZHh9XVtkYXRlYCwgJ0RhdGUgLyBBbm7DqWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGV2ZW50c11bJHtpZHh9XVt0aXRsZWAsICdUaXRyZScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dGFyZWEoYGV2ZW50c11bJHtpZHh9XVtkZXNjcmlwdGlvbmAsICdEZXNjcmlwdGlvbicsIHsgcm93czogMyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJY29uUGlja2VyKGBldmVudHNdWyR7aWR4fV1baWNvbmAsICdJY8O0bmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQ29ycG9yYXRlJyxcbiAgICAgICAgICAgIGljb246ICdmYS11c2VycycsXG4gICAgICAgICAgICBuYW1lOiAnw4lxdWlwZScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlYW1fbWVtYmVycycsXG4gICAgICAgICAgICBmb3JtOiBuZXcgRm9ybUJ1aWxkZXIoYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnZnVsbHdpZHRoJywgJ1BsZWluZSBsYXJnZXVyJywgeyBmYWxzZTogJ05vbicsIHRydWU6ICdPdWknIH0sIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuYWRkVGV4dCgndGl0bGUnLCAnVGl0cmUgZGUgbGEgc2VjdGlvbicsIHsgc3BhbjogMiB9KVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdtZW1iZXJzJywge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lbWJyZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gbWVtYnJlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnV0dG9uVGV4dDogJ1N1cHByaW1lcicsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAoaSwgYnVpbGRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdHlwZW9mIGkgPT09ICdzdHJpbmcnID8gaSArICdfTUlOVVNfMScgOiBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZEltYWdlKGBtZW1iZXJzXVske2lkeH1dW3Bob3RvYCwgJ1Bob3RvJywgeyBmb3JtYXQ6ICc0MDB4NDAwJywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgbWVtYmVyc11bJHtpZHh9XVtuYW1lYCwgJ05vbScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dChgbWVtYmVyc11bJHtpZHh9XVtwb3NpdGlvbmAsICdQb3N0ZScsIHsgcmVxdWlyZWQ6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dGFyZWEoYG1lbWJlcnNdWyR7aWR4fV1bYmlvYCwgJ0NvdXJ0ZSBiaW9ncmFwaGllJywgeyByb3dzOiAyIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFVybChgbWVtYmVyc11bJHtpZHh9XVtsaW5rZWRpbmAsICdMaW5rZWRJbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFVybChgbWVtYmVyc11bJHtpZHh9XVt0d2l0dGVyYCwgJ1R3aXR0ZXIgLyBYJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZW5kUm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5yZW5kZXIoKVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjYXRlZ29yeTogJ0NvcnBvcmF0ZScsXG4gICAgICAgICAgICBpY29uOiAnZmEtbWFwLW1hcmtlcicsXG4gICAgICAgICAgICBuYW1lOiAnR29vZ2xlIE1hcHMgUHJvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnZ29vZ2xlX21hcHMnLFxuICAgICAgICAgICAgZm9ybTogbmV3IEZvcm1CdWlsZGVyKGJ1aWxkZXJEYXRhKVxuICAgICAgICAgICAgICAgIC5hZGRTZWxlY3QoJ2Z1bGx3aWR0aCcsICdQbGVpbmUgbGFyZ2V1cicsIHsgZmFsc2U6ICdOb24nLCB0cnVlOiAnT3VpJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmFkZFRleHQoJ2FkZHJlc3MnLCAnQWRyZXNzZSBjb21wbMOodGUnLCB7IHNwYW46IDIsIHJlcXVpcmVkOiB0cnVlLCBoZWxwVGV4dDogJ1V0aWxpc8OpZSBwb3VyIGNlbnRyZXIgbGEgY2FydGUgc2kgbGF0L2xuZyBuZSBzb250IHBhcyBmb3VybmlzJyB9KVxuICAgICAgICAgICAgICAgIC5yb3coKVxuICAgICAgICAgICAgICAgIC5hZGROdW1iZXIoJ2xhdGl0dWRlJywgJ0xhdGl0dWRlJywgeyBoZWxwVGV4dDogJ0V4OiA0OC44NTY2JyB9KVxuICAgICAgICAgICAgICAgIC5hZGROdW1iZXIoJ2xvbmdpdHVkZScsICdMb25naXR1ZGUnLCB7IGhlbHBUZXh0OiAnRXg6IDIuMzUyMicgfSlcbiAgICAgICAgICAgICAgICAuZW5kUm93KClcbiAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKCd6b29tJywgJ05pdmVhdSBkZSB6b29tICgxLTIwKScsIHsgZGVmYXVsdFZhbHVlOiAxNSwgbWluOiAxLCBtYXg6IDIwIH0pXG4gICAgICAgICAgICAgICAgLmFkZFNlbGVjdCgnbWFwU3R5bGUnLCAnU3R5bGUgZGUgY2FydGUnLCB7IGxpZ2h0OiAnQ2xhaXInLCBkYXJrOiAnU29tYnJlJywgc2F0ZWxsaXRlOiAnU2F0ZWxsaXRlJyB9LCB7IHJlcXVpcmVkOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgLmZpZWxkc2V0KCdNYXJxdWV1cicsIGJ1aWxkZXIgPT4gYnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dCgnbWFya2VyVGl0bGUnLCAnVGl0cmUgZHUgbWFycXVldXInKVxuICAgICAgICAgICAgICAgICAgICAuYWRkVGV4dGFyZWEoJ21hcmtlckRlc2MnLCAnRGVzY3JpcHRpb24gKEluZm8tYnVsbGUpJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnJlbmRlcigpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnQ29ycG9yYXRlJyxcbiAgICAgICAgICAgIGljb246ICdmYS1zb3J0LW51bWVyaWMtYXNjJyxcbiAgICAgICAgICAgIG5hbWU6ICdDb21wdGV1cnMgQW5pbcOpcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FuaW1hdGVkX2NvdW50ZXJzJyxcbiAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtQnVpbGRlcihidWlsZGVyRGF0YSlcbiAgICAgICAgICAgICAgICAuYWRkU2VsZWN0KCdmdWxsd2lkdGgnLCAnUGxlaW5lIGxhcmdldXInLCB7IGZhbHNlOiAnTm9uJywgdHJ1ZTogJ091aScgfSwgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5hZGRJbWFnZSgnYmFja2dyb3VuZEltYWdlJywgJ0ltYWdlIGRlIGZvbmQgKG9wdGlvbm5lbCknKVxuICAgICAgICAgICAgICAgIC5hZGRSZXBlYXRhYmxlKCdjb3VudGVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb21wdGV1cicsXG4gICAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvblRleHQ6ICcrIEFqb3V0ZXIgdW4gY29tcHRldXInLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVCdXR0b25UZXh0OiAnU3VwcHJpbWVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IChpLCBidWlsZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0eXBlb2YgaSA9PT0gJ3N0cmluZycgPyBpICsgJ19NSU5VU18xJyA6IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkTnVtYmVyKGBjb3VudGVyc11bJHtpZHh9XVtudW1iZXJgLCAnTm9tYnJlIGZpbmFsJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRUZXh0KGBjb3VudGVyc11bJHtpZHh9XVtzdWZmaXhgLCAnU3VmZml4ZSAoZXg6ICUsICspJywgeyBzcGFuOiAxIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmVuZFJvdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZFRleHQoYGNvdW50ZXJzXVske2lkeH1dW2xhYmVsYCwgJ0xpYmVsbMOpJywgeyByZXF1aXJlZDogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRJY29uUGlja2VyKGBjb3VudGVyc11bJHtpZHh9XVtpY29uYCwgJ0ljw7RuZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucmVuZGVyKClcbiAgICAgICAgfVxuICAgIF07XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItd3JhcHBlclwiPlxuICAgICAgICA8YnVpbGRlci1zaWRlYmFyIDpidWlsZGVyLWRhdGE9XCJidWlsZGVyRGF0YVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItdG9vbGJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXRvb2xiYXJfX3NlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItdG9vbGJhcl9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIiBAY2xpY2s9XCJjb2xsYXBzZUFsbFwiIHRpdGxlPVwiUsOpZHVpcmUgdG91cyBsZXMgw6lsw6ltZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29tcHJlc3NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXRvb2xiYXJfX2RpdmlkZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiIEBjbGljaz1cImV4cGFuZEFsbFwiIHRpdGxlPVwiRMOpdmVsb3BwZXIgdG91cyBsZXMgw6lsw6ltZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXhwYW5kXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlci10b29sYmFyX19zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIEBjbGljaz1cIm9wZW5QcmV2aWV3XCIgdGl0bGU9XCJPdXZyaXIgbCdhcGVyw6d1IGVuIGRpcmVjdFwiIHYtaWY9XCJwcmV2aWV3VXJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV5ZSBtZS0xXCI+PC9pPiBBcGVyw6d1XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLWluZm9cIiBAY2xpY2s9XCJvcGVuUmV2aXNpb25zXCIgdi1pZj1cImJ1aWxkZXJEYXRhICYmIGJ1aWxkZXJEYXRhLmVudGl0eUNsYXNzICYmIGJ1aWxkZXJEYXRhLmVudGl0eUlkXCIgdGl0bGU9XCJWb2lyIGwnaGlzdG9yaXF1ZSBkZXMgcsOpdmlzaW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1oaXN0b3J5IG1lLTFcIj48L2k+IEhpc3RvcmlxdWVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtZGFuZ2VyXCIgQGNsaWNrPVwiY2xlYXJBbGxcIiB2LWlmPVwiY3VycmVudEVsZW1lbnRzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2ggbWUtMVwiPjwvaT4gVG91dCBzdXBwcmltZXJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRyYWdnYWJsZVxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50RWxlbWVudHNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnVpbGRlci1jYW52YXNcIlxuICAgICAgICAgICAgICAgIGhhbmRsZT1cIi5idWlsZGVyX19lbGVtZW50X19oYW5kbGVcIlxuICAgICAgICAgICAgICAgIGdyb3VwPVwiYnVpbGRlclwiXG4gICAgICAgICAgICAgICAgZ2hvc3QtY2xhc3M9XCJidWlsZGVyX19lbGVtZW50LS1naG9zdFwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uQ2hhbmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnVpbGRlci1lbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGVsZW1lbnQsIGluZGV4KSBpbiBjdXJyZW50RWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZWxlbWVudC5pZFwiXG4gICAgICAgICAgICAgICAgICAgIDplbGVtZW50PVwiZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIDpiYXNlbmFtZT1cImJhc2VuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmJ1aWxkZXItZGF0YT1cImJ1aWxkZXJEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgOmN1cnJlbnQtZWxlbWVudHM9XCJjdXJyZW50RWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICA6aW5kZXg9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIEBlbGVtZW50UmVtb3ZlZD1cInJlbW92ZUVsZW1lbnRCeUlkXCJcbiAgICAgICAgICAgICAgICAgICAgQGVsZW1lbnRGb3JtSGlkZGVuPVwiaGlkZUZvcm1FbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgQGVsZW1lbnRGb3JtU2hvd249XCJzaG93Rm9ybUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBAZWxlbWVudEhpZGRlbj1cImhpZGVFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgQGVsZW1lbnRTaG93bj1cInNob3dFbGVtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgQGR1cGxpY2F0ZT1cImR1cGxpY2F0ZUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBAbW92ZVVwPVwibW92ZVVwKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIEBtb3ZlRG93bj1cIm1vdmVEb3duKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIiB2LWlmPVwiY3VycmVudEVsZW1lbnRzLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiYnVpbGRlci1jYW52YXNfX2VtcHR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFycm93LWxlZnQgZmEtMnggbWItM1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdsaXNzZXogZGVzIMOpbMOpbWVudHMgZGVwdWlzIGxhIGJhcnJlIGxhdMOpcmFsZSBwb3VyIGNvbnN0cnVpcmUgdm90cmUgcGFnZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxyZXZpc2lvbnMtbW9kYWwgXG4gICAgICAgICAgICB2LWlmPVwiYnVpbGRlckRhdGEgJiYgYnVpbGRlckRhdGEuZW50aXR5Q2xhc3MgJiYgYnVpbGRlckRhdGEuZW50aXR5SWRcIlxuICAgICAgICAgICAgcmVmPVwicmV2aXNpb25zTW9kYWxcIiBcbiAgICAgICAgICAgIDplbnRpdHktY2xhc3M9XCJidWlsZGVyRGF0YS5lbnRpdHlDbGFzc1wiIFxuICAgICAgICAgICAgOmVudGl0eS1pZD1cImJ1aWxkZXJEYXRhLmVudGl0eUlkXCIgXG4gICAgICAgICAgICBAcmVzdG9yZT1cInJlc3RvcmVFbGVtZW50c1wiIFxuICAgICAgICAgICAgQHByZXZpZXc9XCJwcmV2aWV3UmV2aXNpb25cIlxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XG4gICAgaW1wb3J0IEJ1aWxkZXJFbGVtZW50IGZyb20gJy4vQnVpbGRlckVsZW1lbnQudnVlJztcbiAgICBpbXBvcnQgQnVpbGRlclNpZGViYXIgZnJvbSAnLi9CdWlsZGVyU2lkZWJhci52dWUnO1xuICAgIGltcG9ydCBSZXZpc2lvbnNNb2RhbCBmcm9tICcuL1JldmlzaW9uc01vZGFsLnZ1ZSc7XG4gICAgaW1wb3J0IGF2YWlsYWJsZUVsZW1lbnRzIGZyb20gJy4uL2VsZW1lbnRzL1N0eWxlc2hlZXRFbGVtZW50cyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgICAgIEJ1aWxkZXJFbGVtZW50LFxuICAgICAgICAgICAgQnVpbGRlclNpZGViYXIsXG4gICAgICAgICAgICBSZXZpc2lvbnNNb2RhbFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbQXJyYXksIE9iamVjdCwgU3RyaW5nXSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhc2VuYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnVpbGRlckRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZpZXdVcmw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnRzOiB0aGlzLmluaXRpYWxpemUodGhpcy5lbGVtZW50cyksXG4gICAgICAgICAgICAgICAgZm9ybUhhc0NoYW5nZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByZXZpZXdXaW5kb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldmlld1VwZGF0ZVRpbWVyOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudHM6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlUHJldmlld1VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1IYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZW1vdmVFbGVtZW50QnlJZChpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzID0gdGhpcy5jdXJyZW50RWxlbWVudHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCAhPT0gaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmVVcChpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2FwRWxlbWVudHMoaW5kZXgsIGluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmVEb3duKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5jdXJyZW50RWxlbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3dhcEVsZW1lbnRzKG9sZFBvc2l0aW9uLCBuZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCB0bXBFbGVtZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudHNbb2xkUG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmN1cnJlbnRFbGVtZW50cywgb2xkUG9zaXRpb24sIHRoaXMuY3VycmVudEVsZW1lbnRzW25ld1Bvc2l0aW9uXSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuY3VycmVudEVsZW1lbnRzLCBuZXdQb3NpdGlvbiwgdG1wRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZUZvcm1FbGVtZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuZm9ybVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93Rm9ybUVsZW1lbnQoaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkgZWxlbWVudC5mb3JtVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZUVsZW1lbnQoaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dFbGVtZW50KGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRpYWxpemUoZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZWxlbWVudHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUodmFsdWUudGVtcGxhdGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5mb3JtVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnRzLnB1c2goY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnRzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IGF2YWlsYWJsZUVsZW1lbnRzKHRoaXMuYnVpbGRlckRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZWRFbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5fcmFuZG9tU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYXZhaWxhYmxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGF2YWlsYWJsZS5pY29uLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBlbGVtZW50ID8gZWxlbWVudC52aXNpYmxlID09PSAnMScgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmb3JtOiBhdmFpbGFibGUuZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZpc2libGU6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXNlcnZlIGV4aXN0aW5nIHByb3BlcnRpZXMgKGlkLCBuYW1lLCBldGMuKSBidXQgZW5zdXJlIGZvcm0gc3RydWN0dXJlIGlzIHVwIHRvIGRhdGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNyZWF0ZWRFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cGxpY2F0ZUVsZW1lbnQoaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY3VycmVudEVsZW1lbnRzLmZpbmRJbmRleChlbCA9PiBlbC5pZCA9PT0gaWQpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsID0gdGhpcy5jdXJyZW50RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIERlZXAgY2xvbmUgdGhlIGVsZW1lbnQgdG8gYXZvaWQgcmVmZXJlbmNlIGlzc3Vlc1xuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZ2VuZXJhdGUgYSBuZXcgSUQgYW5kIHBvdGVudGlhbGx5IGhhbmRsZSBmb3JtIGNvbnRlbnQgY2xvbmluZyBpZiBpdCdzIGNvbXBsZXhcbiAgICAgICAgICAgICAgICAvLyBGb3Igbm93LCBzaW1wbGUgb2JqZWN0IGNvcHkgd2l0aCBuZXcgSURcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbmV3RWxlbWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3JpZ2luYWwpKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmlkID0gdGhpcy5fcmFuZG9tU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5uYW1lID0gb3JpZ2luYWwubmFtZSArICcgKENvcGllKSc7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5pY29uID0gb3JpZ2luYWwuaWNvbjtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmZvcm1WaXNpYmxlID0gdHJ1ZTsgLy8gT3BlbiB0aGUgbmV3IGVsZW1lbnQncyBmb3JtXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGFmdGVyIHRoZSBvcmlnaW5hbFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzLnNwbGljZShpbmRleCArIDEsIDAsIG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byBuZXcgZWxlbWVudD9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xsYXBzZUFsbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmZvcm1WaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwYW5kQWxsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9ybVZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFyQWxsKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCfDinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBzdXBwcmltZXIgdG91cyBsZXMgw6lsw6ltZW50cyA/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5QcmV2aWV3KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmV2aWV3VXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMXFwnVVJMIGRlIHByw6l2aXN1YWxpc2F0aW9uIG5cXCdlc3QgcGFzIGNvbmZpZ3Vyw6llLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvd0ZlYXR1cmVzID0gJ3dpZHRoPTEyMDAsaGVpZ2h0PTgwMCxtZW51YmFyPW5vLHRvb2xiYXI9bm8sbG9jYXRpb249bm8sc3RhdHVzPW5vJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3V2luZG93ICYmICF0aGlzLnByZXZpZXdXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1dpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1dpbmRvdyA9IHdpbmRvdy5vcGVuKHRoaXMucHJldmlld1VybCwgJ0J1aWxkZXJQcmV2aWV3Jywgd2luZG93RmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgcHJldmlldyB3aW5kb3cgdG8gYmUgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdQUkVWSUVXX1JFQURZJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFByZXZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wZW5SZXZpc2lvbnMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMucmV2aXNpb25zTW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5yZXZpc2lvbnNNb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3RvcmVFbGVtZW50cyhlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRzIGNvbWVzIGRpcmVjdGx5IGZyb20gdGhlIGRhdGFiYXNlIGpzb24gdmlhIEFQSVxuICAgICAgICAgICAgICAgIC8vIGl0IG5lZWRzIHRvIGJlIHBhcnNlZCB0aHJvdWdoIGluaXRpYWxpemUgdG8gY29udmVydCB0byB2YWxpZCBWdWUgc3RydWN0dXJlIHdpdGggZ2VuZXJhdGVkIElEc1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBhbGwgZWxlbWVudHMgZm9ybXMgYXJlIG9wZW4gYnkgZGVmYXVsdCBsaWtlIG5vcm1hbCBpbml0aWFsIGxvYWRcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcmVzdG9yZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRzICYmIHR5cGVvZiBlbGVtZW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZWRFbGVtZW50cyA9IHRoaXMuaW5pdGlhbGl6ZShlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gYWxsb3cgVnVlIHRvIGNsZWFyIERPTSBzYWZlbHkgYmVmb3JlIGluamVjdGluZyBuZXcgb25lc1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbGVtZW50cyA9IHJlc3RvcmVkRWxlbWVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXZpZXdSZXZpc2lvbihlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wcmV2aWV3V2luZG93IHx8IHRoaXMucHJldmlld1dpbmRvdy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1ZldWlsbGV6IGRcXCdhYm9yZCBvdXZyaXIgbGEgZmVuw6p0cmUgZFxcJ2FwZXLDp3UgZW4gZGlyZWN0IGF2ZWMgbGUgYm91dG9uIFwiQXBlcsOndVwiLicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBwcmV2aWV3RWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50cyAmJiB0eXBlb2YgZWxlbWVudHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdFbGVtZW50cyA9IHRoaXMuaW5pdGlhbGl6ZShlbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHNUb1NlbmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByZXZpZXdFbGVtZW50cykpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9QUkVWSUVXJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IGVsZW1lbnRzVG9TZW5kXG4gICAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kUHJldmlld1VwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3V2luZG93ICYmICF0aGlzLnByZXZpZXdXaW5kb3cuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERlZXAgY2xvbmUgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHNUb1NlbmQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY3VycmVudEVsZW1lbnRzKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIGN1cnJlbnQgdmFsdWVzIGZyb20gdGhlIERPTSBmb3IgZWFjaCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIEVsZW1lbnRGb3JtTW91bnRlciBkb2Vzbid0IHN5bmMgYmFjayB0byBWdWUgZGF0YSwgd2UgbXVzdCByZWFkIGZyb20gRE9NXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzVG9TZW5kLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBmb3JtIGNvbnRhaW5lciBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gdXNlIHRoZSBlbGVtZW50IElEIHRvIGZpbmQgaW5wdXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dHMgaGF2ZSBuYW1lcyBsaWtlIGJhc2VuYW1lW2lkXVtwcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIHdlIGNhbiBzZWFyY2ggYnkgZGF0YS1uYW1lIGF0dHJpYnV0ZSB3aXRoaW4gdGhlIGJ1aWxkZXIgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGZpbmQgdGhlIERPTSBlbGVtZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBidWlsZGVyIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIGRvbid0IGhhdmUgZGlyZWN0IHJlZnMgdG8gRE9NIGVsZW1lbnRzIGVhc2lseSBtYXBwZWQgaGVyZSB3aXRob3V0IGl0ZXJhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHNlYXJjaCBieSB0aGUgaGlkZGVuIGlucHV0cyB0aGF0IEVsZW1lbnRGb3JtTW91bnRlciBjcmVhdGVzL3VwZGF0ZXM/XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSBFbGVtZW50Rm9ybU1vdW50ZXIgdXBkYXRlcyBpbnB1dHMgaW5zaWRlIHRoZSAuYnVpbGRlcl9fZWxlbWVudF9fZm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMZXQncyB0cnkgdG8gZmluZCBpbnB1dHMgYnkgZGF0YS1uYW1lIGluIHRoZSBkb2N1bWVudCB0aGF0IGJlbG9uZyB0byB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBpbnB1dHMgYXJlIGluc2lkZSBhIGRpdiB3aXRoIHJlZj1cImVsZW1lbnRGb3JtXCIgaW4gQnVpbGRlckVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBhcmUgaW4gQnVpbGRlci52dWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIHF1ZXJ5IHNlbGVjdG9yIHVzaW5nIHRoZSBlbGVtZW50IElEIGlmIHdlIGhhZCBwdXQgaXQgb24gdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGRlckVsZW1lbnQgcHV0cyBJRCBvbiBpbnB1dHM6IGVsZW1lbnRJZCArICctJyArIHByb3BlcnR5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5mb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGZvcm0gc3RyaW5nIHRvIGZpbmQgd2hhdCBwcm9wZXJ0aWVzIHdlIGV4cGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBiaXQgaGFja3kgYnV0IHdlIGtub3cgd2hhdCBwcm9wZXJ0aWVzIHRvIGxvb2sgZm9yIGZyb20gdGhlIGZvcm0gSFRNTCBzdHJpbmc/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8sIHRoYXQncyBoYXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJldHRlcjogTG9vayBmb3IgYWxsIGlucHV0cyB0aGF0IHN0YXJ0IHdpdGggdGhlIGVsZW1lbnQgSUQgaW4gdGhlaXIgSUQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0SWQoZWxlbWVudC5pZCwgcHJvcGVydHlOYW1lKSAtPiBlbGVtZW50SWQgKyAnLScgKyBwcm9wZXJ0eU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBlbGVtZW50LmlkICsgJy0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBhIG1vcmUgc3BlY2lmaWMgc2VsZWN0b3IgdG8gYXZvaWQgZ2V0dGluZyBpbnB1dHMgZnJvbSBvdGhlciBlbGVtZW50cyBpZiBJRHMgb3ZlcmxhcCAodW5saWtlbHkgYnV0IHNhZmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IGFjdHVhbGx5IHdlIHdhbnQgdG8gZmluZCBpbnB1dHMgYmFzZWQgb24gdGhlIHN0cnVjdHVyZSBFbGVtZW50Rm9ybU1vdW50ZXIgY3JlYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbGVtZW50Rm9ybU1vdW50ZXIgdXNlcyBJRDogZWxlbWVudElkICsgJy0nICsgY2xlYW5Qcm9wTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtpZF49XCIke3ByZWZpeH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgaW5wdXQgZG9lc24ndCBoYXZlIGEgbmFtZSAoc2hvdWxkbid0IGhhcHBlbiBmb3IgdmFsaWQgZmllbGRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lm5hbWUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJzZSBuYW1lIHRvIGJ1aWxkIG5lc3RlZCBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmFtZSBmb3JtYXQ6IGJhc2VuYW1lW2VsZW1lbnRJZF1bcHJvcF1bc3VicHJvcF0uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBleHRyYWN0IFtwcm9wXVtzdWJwcm9wXS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHByZWZpeCBpbiBuYW1lIGlzIGAke3RoaXMuYmFzZW5hbWV9WyR7ZWxlbWVudC5pZH1dYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lUHJlZml4ID0gYCR7dGhpcy5iYXNlbmFtZX1bJHtlbGVtZW50LmlkfV1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lm5hbWUuc3RhcnRzV2l0aChuYW1lUHJlZml4KSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IGlucHV0Lm5hbWUuc3Vic3RyaW5nKG5hbWVQcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtYWluaW5nIGlzIGxpa2UgXCJbcGxhbnNdWzBdW25hbWVdXCIgb3IgXCJbdGl0bGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSByZW1haW5pbmcuc3BsaXQoJ11bJykubWFwKHAgPT4gcC5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgJiYgIWVsZW1lbnRbcGF0aFswXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdW5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gU2tpcCB1bmNoZWNrZWQgcmFkaW8gb3IgdW5jaGVja2VkIGJveCBpZiB3ZSBkb24ndCBoYW5kbGUgZmFsc2UgZXhwbGljaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBUcml4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnVFJJWC1FRElUT1InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXROZXN0ZWRWYWx1ZShlbGVtZW50LCBwYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9QUkVWSUVXJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1RvU2VuZFxuICAgICAgICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfc2V0TmVzdGVkVmFsdWUob2JqLCBwYXRoLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gb2JqO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGtleSBpcyBlbXB0eSBzdHJpbmc/IHNob3VsZG4ndCBoYXBwZW4gd2l0aCBzcGxpdCBsb2dpYyBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIGNyZWF0ZSBhcnJheSBvciBvYmplY3Q/XG4gICAgICAgICAgICAgICAgICAgIC8vIFwicGxhbnNcIiAtPiBcIjBcIiAtPiBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvYmpbXCJwbGFuc1wiXSBzaG91bGQgYmUgYXJyYXkvb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbmV4dCBrZXkgaXMgYSBudW1iZXIgdG8gZGVjaWRlIGlmIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0S2V5ID0gcGF0aFtpICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ludCA9IC9eXFxkKyQvLnRlc3QobmV4dEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W2tleV0gPSBpc0ludCA/IFtdIDoge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RLZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgY3VycmVudFtsYXN0S2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjaGVkdWxlUHJldmlld1VwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3VXBkYXRlVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucHJldmlld1VwZGF0ZVRpbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VXBkYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUHJldmlld1VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7IC8vIERlYm91bmNlIDUwMG1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3JhbmRvbVN0cmluZygpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IDIxNDc0MjM2NDg7XG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpLnRvU3RyaW5nKDM2KSArXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHgpIF4gbm93KS50b1N0cmluZygzNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAvLyBUcmFjayBmb3JtIGNoYW5nZXMgZm9yIHVuc2F2ZWQgd2FybmluZ1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4gdGhpcy5mb3JtSGFzQ2hhbmdlZCA9IGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBBTlkgaW5wdXQgY2hhbmdlIGluIHRoZSBidWlsZGVyIHRvIHVwZGF0ZSBwcmV2aWV3XG4gICAgICAgICAgICAvLyBXZSB1c2UgYSBkZWJvdW5jZWQgdXBkYXRlLCBzbyBpdCdzIHNhZmUgdG8gbGlzdGVuIHRvICdpbnB1dCcgZXZlbnRzXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVFdmVudHMgPSBbJ2lucHV0JywgJ2NoYW5nZScsICdibHVyJywgJ2tleXVwJ107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZUV2ZW50cy5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgY2FyZSBpZiBpdCdzIGFuIGlucHV0L3NlbGVjdC90ZXh0YXJlYSBpbnNpZGUgdGhlIGJ1aWxkZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCB0cml4LWVkaXRvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlUHJldmlld1VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgeyBjYXB0dXJlOiB0cnVlIH0pOyAvLyBVc2UgY2FwdHVyZSB0byBlbnN1cmUgd2UgY2F0Y2ggaXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBbHNvIGxpc3RlbiBmb3IgU2VsZWN0MiBldmVudHMgdXNpbmcgalF1ZXJ5IHNpbmNlIHRoZXkgZG9uJ3QgYnViYmxlIGFzIG5hdGl2ZSBldmVudHNcbiAgICAgICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gd2luZG93LmpRdWVyeSh0aGlzLiRlbCk7XG4gICAgICAgICAgICAgICAgJGVsLm9uKCdzZWxlY3QyOnNlbGVjdCBzZWxlY3QyOnVuc2VsZWN0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVByZXZpZXdVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1IYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYnVpbGRlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQ6ICNmNGY2Zjg7XG4gICAgbWluLWhlaWdodDogNjAwcHg7XG59XG5cbi5idWlsZGVyLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwOyAvKiBQcmV2ZW50IGZsZXggb3ZlcmZsb3cgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYnVpbGRlci10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2ZhZmJmYyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlODtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjA0KTtcbiAgICBcbiAgICAmX19zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxLjI1cmVtO1xuICAgIH1cbiAgICBcbiAgICAmX19ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMC4zNzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmY4ZmE7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTRlODtcbiAgICAgICAgXG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzU4NjA2OTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNDI5MmU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICZfX2RpdmlkZXIge1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCAjZDFkNWRhIDIwJSwgI2QxZDVkYSA4MCUsIHRyYW5zcGFyZW50KTtcbiAgICB9XG4gICAgXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjZmOGZhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU0ZTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmE3MzdkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjZlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMzY2ZDY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50ZXh0LW11dGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTg2MDY5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnRuLW91dGxpbmUtZGFuZ2VyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDczYTQ5O1xuICAgICAgICBjb2xvcjogI2Q3M2E0OTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC44NzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkNzNhNDk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Q3M2E0OTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDIxNSwgNTgsIDczLCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC44NzVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnVpbGRlci1jYW52YXMge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICBcbiAgICAmX19lbXB0eSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NiZDVlMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgIGNvbG9yOiAjNzE4MDk2O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRcIiA6Y2xhc3M9XCJ7J2J1aWxkZXJfX2VsZW1lbnQtLWhpZGRlbic6ICFlbGVtZW50LnZpc2libGV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X19oZWFkZXJfX2xlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9faGFuZGxlXCIgdGl0bGU9XCJEw6lwbGFjZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1ncmlwLXZlcnRpY2FsXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiPnt7IGluZGV4ICsgMSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBtZS0yIHRleHQtbXV0ZWRcIiA6Y2xhc3M9XCJlbGVtZW50Lmljb24gfHwgJ2ZhLWN1YmUnXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDhweDtcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0VkaXRpbmdOYW1lXCIgY2xhc3M9XCJidWlsZGVyX19lbGVtZW50X190aXRsZS1lZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZWxlbWVudC5uYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJzdG9wRWRpdGluZ05hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bi5lbnRlci5wcmV2ZW50PVwic3RvcEVkaXRpbmdOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJuYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtZWxzZSBAZGJsY2xpY2s9XCJzdGFydEVkaXRpbmdOYW1lXCIgdGl0bGU9XCJEb3VibGUtY2xpcXVlciBwb3VyIHJlbm9tbWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBlbGVtZW50Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsIG1zLTIgdGV4dC1tdXRlZFwiIHN0eWxlPVwiZm9udC1zaXplOiAwLjhlbTsgb3BhY2l0eTogMC41O1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXJfX2VsZW1lbnRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJmb3JtXCIgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVGb3JtXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiIDp0aXRsZT1cImZvcm1WaXNpYmxlID8gJ1LDqWR1aXJlJyA6ICfDiWRpdGVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJmb3JtVmlzaWJsZSA/ICdmYSBmYS1jaGV2cm9uLWRvd24nIDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImR1cGxpY2F0ZVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIiB0aXRsZT1cIkR1cGxpcXVlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvcHlcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVZpc2liaWxpdHlcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCIgOnRpdGxlPVwiZWxlbWVudC52aXNpYmxlID8gJ01hc3F1ZXInIDogJ0FmZmljaGVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJlbGVtZW50LnZpc2libGUgPyAnZmEgZmEtZXllJyA6ICdmYSBmYS1leWUtc2xhc2gnXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJyZW1vdmVcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIHRpdGxlPVwiU3VwcHJpbWVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cInRlbXBsYXRlSW5wdXROYW1lXCIgOnZhbHVlPVwiZWxlbWVudC50ZW1wbGF0ZVwiLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cInZpc2libGVJbnB1dE5hbWVcIiA6dmFsdWU9XCJlbGVtZW50LnZpc2libGUgPyAxIDogMFwiLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiA6bmFtZT1cIm5hbWVJbnB1dE5hbWVcIiA6dmFsdWU9XCJlbGVtZW50Lm5hbWVcIi8+XG5cbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9fYm9keVwiIHYtaWY9XCJmb3JtXCIgdi1zaG93PVwiZm9ybVZpc2libGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlcl9fZWxlbWVudF9fZm9ybVwiIHYtaHRtbD1cImZvcm1cIiByZWY9XCJlbGVtZW50Rm9ybVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEVsZW1lbnRGb3JtTW91bnRlciBmcm9tICcuLi9lbGVtZW50cy9FbGVtZW50Rm9ybU1vdW50ZXInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWydiYXNlbmFtZScsICdlbGVtZW50JywgJ2N1cnJlbnRFbGVtZW50cycsICdidWlsZGVyRGF0YScsICdpbmRleCddLFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc0VkaXRpbmdOYW1lOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlSW5wdXROYW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBFbGVtZW50Rm9ybU1vdW50ZXIuaW5wdXROYW1lKHRoaXMuYmFzZW5hbWUsIHRoaXMuZWxlbWVudC5pZCwgJ3RlbXBsYXRlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlzaWJsZUlucHV0TmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0TmFtZSh0aGlzLmJhc2VuYW1lLCB0aGlzLmVsZW1lbnQuaWQsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZUlucHV0TmFtZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRWxlbWVudEZvcm1Nb3VudGVyLmlucHV0TmFtZSh0aGlzLmJhc2VuYW1lLCB0aGlzLmVsZW1lbnQuaWQsICduYW1lJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmZvcm07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybVZpc2libGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5mb3JtVmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3RhcnRFZGl0aW5nTmFtZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGluZ05hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMubmFtZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcEVkaXRpbmdOYW1lKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0aW5nTmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm5hbWUgfHwgdGhpcy5lbGVtZW50Lm5hbWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXZlcnQgdG8gZGVmYXVsdCBuYW1lIGlmIGVtcHR5PyBPciBrZWVwIGVtcHR5PyBcbiAgICAgICAgICAgICAgICAgICAgLy8gTGV0J3Mga2VlcCBpdCBidXQgbWF5YmUgd2Ugc2hvdWxkIGhhdmUgYSBkZWZhdWx0LlxuICAgICAgICAgICAgICAgICAgICAvLyBGb3Igbm93LCBsZXQgdXNlciBkZWNpZGUuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBFbGVtZW50Rm9ybU1vdW50ZXIuY29uZmlybSgoKSA9PiB0aGlzLiRlbWl0KCdlbGVtZW50UmVtb3ZlZCcsIHRoaXMuZWxlbWVudC5pZCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cGxpY2F0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkdXBsaWNhdGUnLCB0aGlzLmVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybVZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEVsZW1lbnRGb3JtTW91bnRlci52YWxpZGF0ZUZvcm1FbGVtZW50KHRoaXMuJHJlZnMuZWxlbWVudEZvcm0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbGVtZW50Rm9ybUhpZGRlbicsIHRoaXMuZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdlbGVtZW50Rm9ybVNob3duJywgdGhpcy5lbGVtZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWxlbWVudEhpZGRlbicsIHRoaXMuZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWxlbWVudFNob3duJywgdGhpcy5lbGVtZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBFbGVtZW50Rm9ybU1vdW50ZXIubW91bnQoXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlbmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5lbGVtZW50Rm9ybVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4gICAgLmJ1aWxkZXJfX2VsZW1lbnQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlN2VlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0taGlkZGVuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5idWlsZGVyX19lbGVtZW50X19oZWFkZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLS1naG9zdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmMmY3O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNhMGFlYzA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG5cbiAgICAgICAgICAgICZfX2xlZnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2hhbmRsZSB7XG4gICAgICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICAgICAgICBjb2xvcjogI2EwYWVjMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE1NTY4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiYmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICMyZDM3NDg7XG5cbiAgICAgICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZGYyZjc7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0YTU1Njg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjM1ZW0gMC42NWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiAwLjVyZW07XG5cbiAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fYm9keSB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTdlZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2ZjZmM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJl9fZm9ybSB7XG4gICAgICAgICAgICAvKiBTdHlsZXMgYXJlIG5vdyBoYW5kbGVkIGdsb2JhbGx5IGluIGJ1aWxkZXIuc2NzcyBmb3IgYmV0dGVyIGNvbnRyb2wgKi9cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiBUcmFuc2l0aW9ucyAqL1xuICAgIC5zbGlkZS1lbnRlci1hY3RpdmUsIC5zbGlkZS1sZWF2ZS1hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDAwcHg7IC8qIEFyYml0cmFyeSBsYXJnZSBoZWlnaHQgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLnNsaWRlLWVudGVyLCAuc2xpZGUtbGVhdmUtdG8ge1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwiYnVpbGRlci1zaWRlYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhcl9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyLi4uXCIgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGVyLXNpZGViYXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihlbGVtZW50cywgY2F0ZWdvcnkpIGluIGdyb3VwZWRFbGVtZW50c1wiIDprZXk9XCJjYXRlZ29yeVwiIGNsYXNzPVwiYnVpbGRlci1zaWRlYmFyX19jYXRlZ29yeSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRlci1zaWRlYmFyX19jYXRlZ29yeS10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHAtMiBiZy1saWdodCByb3VuZGVkIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwidG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkpXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIHRleHQtdXBwZXJjYXNlIHNtYWxsIHRleHQtbXV0ZWRcIj57eyBjYXRlZ29yeSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXhzIHRleHQtbXV0ZWRcIiA6Y2xhc3M9XCJjb2xsYXBzZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSA/ICdmYS1jaGV2cm9uLXJpZ2h0JyA6ICdmYS1jaGV2cm9uLWRvd24nXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCIhY29sbGFwc2VkQ2F0ZWdvcmllc1tjYXRlZ29yeV1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJhZ0FyZWEgbGlzdC1ncm91cCBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICA6bGlzdD1cImVsZW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICA6Z3JvdXA9XCJ7IG5hbWU6ICdidWlsZGVyJywgcHVsbDogJ2Nsb25lJywgcHV0OiBmYWxzZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xvbmU9XCJjbG9uZUVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzb3J0PVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYnVpbGRlci1zaWRlYmFyX19pdGVtXCIgdi1mb3I9XCJlbGVtZW50IGluIGVsZW1lbnRzXCIgOmtleT1cImVsZW1lbnQudGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkZXItc2lkZWJhcl9faXRlbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOmNsYXNzPVwiZWxlbWVudC5pY29uIHx8ICdmYS1jdWJlJ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnVpbGRlci1zaWRlYmFyX19pdGVtLWxhYmVsXCI+e3sgZWxlbWVudC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kcmFnZ2FibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnO1xyXG4gICAgaW1wb3J0IGF2YWlsYWJsZUVsZW1lbnRzIGZyb20gJy4uL2VsZW1lbnRzL1N0eWxlc2hlZXRFbGVtZW50cyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6ICdCdWlsZGVyU2lkZWJhcicsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ2J1aWxkZXJEYXRhJ10sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZUVsZW1lbnRzOiBhdmFpbGFibGVFbGVtZW50cyh0aGlzLmJ1aWxkZXJEYXRhKSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZENhdGVnb3JpZXM6IHt9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZEVsZW1lbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXZhaWxhYmxlRWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUVsZW1lbnRzLmZpbHRlcihlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JvdXBlZEVsZW1lbnRzKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgb3JkZXIgb2YgY2F0ZWdvcmllcyBpZiBkZXNpcmVkLCBvciBqdXN0IGxldCB0aGVtIGFwcGVhciBuYXR1cmFsbHlcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyID0gWydNaXNlIGVuIHBhZ2UnLCAnQmFzaXF1ZScsICdNw6lkaWEnLCAnQXZhbmPDqScsICdEeW5hbWlxdWUnLCAnQXV0cmVzJ107XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZWxlbWVudC5jYXRlZ29yeSB8fCAnQXV0cmVzJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3Vwc1tjYXRlZ29yeV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2NhdGVnb3J5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncm91cHNbY2F0ZWdvcnldLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU29ydCBrZXlzIGJhc2VkIG9uIG9yZGVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWRHcm91cHMgPSB7fTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGdyb3Vwcykuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmRlci5pbmRleE9mKGEpIC0gb3JkZXIuaW5kZXhPZihiKTtcclxuICAgICAgICAgICAgICAgIH0pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzb3J0ZWRHcm91cHNba2V5XSA9IGdyb3Vwc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBzb3J0ZWRHcm91cHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgdG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmNvbGxhcHNlZENhdGVnb3JpZXMsIGNhdGVnb3J5LCAhdGhpcy5jb2xsYXBzZWRDYXRlZ29yaWVzW2NhdGVnb3J5XSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsb25lRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYSBmcmVzaCBjb3B5IG9mIHRoZSBlbGVtZW50IHN0cnVjdHVyZSBmb3IgdGhlIGJ1aWxkZXJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQudGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IGVsZW1lbnQuaWNvbiwgLy8gUGFzcyB0aGUgaWNvbiB0byB0aGUgYnVpbGRlciBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtOiBlbGVtZW50LmZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVZpc2libGU6IHRydWUsIC8vIEF1dG8tb3BlbiBmb3JtIG9uIGRyb3BcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5fcmFuZG9tU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF9yYW5kb21TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IDIxNDc0MjM2NDg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gK25ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeCkudG9TdHJpbmcoMzYpICtcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KSBeIG5vdykudG9TdHJpbmcoMzYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5idWlsZGVyLXNpZGViYXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2U3ZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTsgLyogQWRqdXN0IGJhc2VkIG9uIGhlYWRlciBoZWlnaHQgKi9cclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDgwcHg7IC8qIEFkanVzdCBiYXNlZCBvbiBoZWFkZXIgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IC8qIENvbnRhaW5lciBoaWRkZW4sIGNvbnRlbnQgc2Nyb2xscyAqL1xyXG5cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTdlZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0YzUzNjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIEN1c3RvbSBzY3JvbGxiYXIgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2JkNWUwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2EwYWVjMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlN2VlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM0YzUzNjc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGM1MzY3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cInJldmlzaW9uc01vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiByZWY9XCJtb2RhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPjxpIGNsYXNzPVwiZmEgZmEtaGlzdG9yeSBtZS0yXCI+PC9pPiBIaXN0b3JpcXVlIGRlcyByw6l2aXNpb25zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwidGV4dC1jZW50ZXIgcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeCB0ZXh0LW11dGVkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgdGV4dC1tdXRlZFwiPkNoYXJnZW1lbnQgZGUgbCdoaXN0b3JpcXVlLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImVycm9yXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3IgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJyZXZpc2lvbnMubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS01IHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlLWFsdCBmYS0zeCBtYi0zXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BdWN1bmUgcsOpdmlzaW9uIHRyb3V2w6llIHBvdXIgY2UgY29udGVudS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwicmV2aXNpb24gaW4gcmV2aXNpb25zXCIgOmtleT1cInJldmlzaW9uLmlkXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTFcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyLWFsdCB0ZXh0LW11dGVkIG1lLTJcIj48L2k+IHt7IGZvcm1hdERhdGUocmV2aXNpb24uY3JlYXRlZEF0KSB9fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmEgZmEtdXNlciBtZS0xXCI+PC9pPiB7eyByZXZpc2lvbi5hdXRob3IgfX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiIEBjbGljay5wcmV2ZW50PVwicHJldmlld1JldmlzaW9uKHJldmlzaW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV5ZSBtZS0xXCI+PC9pPiBQcsOpdmlzdWFsaXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJyZXN0b3JlUmV2aXNpb24ocmV2aXNpb24pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdW5kbyBtZS0xXCI+PC9pPiBSZXN0YXVyZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIj5GZXJtZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1JldmlzaW9uc01vZGFsJyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZW50aXR5Q2xhc3M6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW50aXR5SWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXZpc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIG1vZGFsSW5zdGFuY2U6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNob3coKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tb2RhbEluc3RhbmNlICYmIHdpbmRvdy5ib290c3RyYXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZSA9IG5ldyB3aW5kb3cuYm9vdHN0cmFwLk1vZGFsKHRoaXMuJHJlZnMubW9kYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoUmV2aXNpb25zKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgaWYgYm9vdHN0cmFwIGlzIGluamVjdGVkIGdsb2JhbGx5IHZpYSBqUXVlcnlcclxuICAgICAgICAgICAgICAgICBpZih3aW5kb3cualF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmpRdWVyeSh0aGlzLiRyZWZzLm1vZGFsKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXZpc2lvbnMoKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmpRdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmpRdWVyeSh0aGlzLiRyZWZzLm1vZGFsKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmZXRjaFJldmlzaW9ucygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGl0eUNsYXNzIHx8ICF0aGlzLmVudGl0eUlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gXCJJZGVudGlmaWFudHMgZGUgbCdlbnRpdMOpIG1hbnF1YW50cy5cIjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgL2FkbWluL2FwaS9idWlsZGVyLXJldmlzaW9ucz9lbnRpdHlDbGFzcz0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLmVudGl0eUNsYXNzKX0mZW50aXR5SWQ9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5lbnRpdHlJZCl9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgcsOpdmlzaW9ucycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV2aXNpb25zID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBzZWNvbmQ6ICcyLWRpZ2l0J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3RvcmVSZXZpc2lvbihyZXZpc2lvbikge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlybSgnw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgcmVtcGxhY2VyIGxlIGNvbnRlbnUgYWN0dWVsIHBhciBjZXR0ZSBhbmNpZW5uZSB2ZXJzaW9uID8gKExlcyBtb2RpZmljYXRpb25zIG5lIHNlcm9udCBkw6lmaW5pdGl2ZXMgcXVcXCdhcHLDqHMgYXZvaXIgc2F1dmVnYXJkw6kgbGEgcGFnZSknKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVzdG9yZScsIHJldmlzaW9uLmVsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2aWV3UmV2aXNpb24ocmV2aXNpb24pIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlldycsIHJldmlzaW9uLmVsZW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIG1vZGFsIHdoZW4gY29tcG9uZW50IGlzIG1vdW50ZWQgaWYgYm9vdHN0cmFwIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh3aW5kb3cuYm9vdHN0cmFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZSA9IG5ldyB3aW5kb3cuYm9vdHN0cmFwLk1vZGFsKHRoaXMuJHJlZnMubW9kYWwsIHtcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXdyYXBwZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiYnVpbGRlci1zaWRlYmFyXCIsIHsgYXR0cnM6IHsgXCJidWlsZGVyLWRhdGFcIjogX3ZtLmJ1aWxkZXJEYXRhIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci1jb250ZW50XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci10b29sYmFyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXRvb2xiYXJfX3NlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlci10b29sYmFyX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSw6lkdWlyZSB0b3VzIGxlcyDDqWzDqW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY29sbGFwc2VBbGwgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29tcHJlc3NcIiB9KV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXRvb2xiYXJfX2RpdmlkZXJcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkTDqXZlbG9wcGVyIHRvdXMgbGVzIMOpbMOpbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5leHBhbmRBbGwgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXhwYW5kXCIgfSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItdG9vbGJhcl9fc2VjdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLnByZXZpZXdVcmxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3V2cmlyIGwnYXBlcsOndSBlbiBkaXJlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlblByZXZpZXcgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWV5ZSBtZS0xXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFwZXLDp3VcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmJ1aWxkZXJEYXRhICYmXG4gICAgICAgICAgICAgIF92bS5idWlsZGVyRGF0YS5lbnRpdHlDbGFzcyAmJlxuICAgICAgICAgICAgICBfdm0uYnVpbGRlckRhdGEuZW50aXR5SWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWb2lyIGwnaGlzdG9yaXF1ZSBkZXMgcsOpdmlzaW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuUmV2aXNpb25zIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1oaXN0b3J5IG1lLTFcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSGlzdG9yaXF1ZVxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY3VycmVudEVsZW1lbnRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbGVhckFsbCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2ggbWUtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBUb3V0IHN1cHByaW1lclxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItY2FudmFzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlOiBcIi5idWlsZGVyX19lbGVtZW50X19oYW5kbGVcIixcbiAgICAgICAgICAgICAgICBncm91cDogXCJidWlsZGVyXCIsXG4gICAgICAgICAgICAgICAgXCJnaG9zdC1jbGFzc1wiOiBcImJ1aWxkZXJfX2VsZW1lbnQtLWdob3N0XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uQ2hhbmdlIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50RWxlbWVudHMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50RWxlbWVudHMgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudEVsZW1lbnRzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmN1cnJlbnRFbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiYnVpbGRlci1lbGVtZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGJhc2VuYW1lOiBfdm0uYmFzZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiYnVpbGRlci1kYXRhXCI6IF92bS5idWlsZGVyRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LWVsZW1lbnRzXCI6IF92bS5jdXJyZW50RWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50UmVtb3ZlZDogX3ZtLnJlbW92ZUVsZW1lbnRCeUlkLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Rm9ybUhpZGRlbjogX3ZtLmhpZGVGb3JtRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEZvcm1TaG93bjogX3ZtLnNob3dGb3JtRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudEhpZGRlbjogX3ZtLmhpZGVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U2hvd246IF92bS5zaG93RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlOiBfdm0uZHVwbGljYXRlRWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgbW92ZVVwOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb3ZlVXAoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdmVEb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb3ZlRG93bihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jdXJyZW50RWxlbWVudHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItY2FudmFzX19lbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiZm9vdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYXJyb3ctbGVmdCBmYS0yeCBtYi0zXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR2xpc3NleiBkZXMgw6lsw6ltZW50cyBkZXB1aXMgbGEgYmFycmUgbGF0w6lyYWxlIHBvdXIgY29uc3RydWlyZSB2b3RyZSBwYWdlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmJ1aWxkZXJEYXRhICYmIF92bS5idWlsZGVyRGF0YS5lbnRpdHlDbGFzcyAmJiBfdm0uYnVpbGRlckRhdGEuZW50aXR5SWRcbiAgICAgICAgPyBfYyhcInJldmlzaW9ucy1tb2RhbFwiLCB7XG4gICAgICAgICAgICByZWY6IFwicmV2aXNpb25zTW9kYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwiZW50aXR5LWNsYXNzXCI6IF92bS5idWlsZGVyRGF0YS5lbnRpdHlDbGFzcyxcbiAgICAgICAgICAgICAgXCJlbnRpdHktaWRcIjogX3ZtLmJ1aWxkZXJEYXRhLmVudGl0eUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IHJlc3RvcmU6IF92bS5yZXN0b3JlRWxlbWVudHMsIHByZXZpZXc6IF92bS5wcmV2aWV3UmV2aXNpb24gfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudFwiLFxuICAgICAgY2xhc3M6IHsgXCJidWlsZGVyX19lbGVtZW50LS1oaWRkZW5cIjogIV92bS5lbGVtZW50LnZpc2libGUgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudF9faGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX2hlYWRlcl9fbGVmdFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmRleCArIDEpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIG1lLTIgdGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLmVsZW1lbnQuaWNvbiB8fCBcImZhLWN1YmVcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI4cHhcIiB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmlzRWRpdGluZ05hbWVcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXJfX2VsZW1lbnRfX3RpdGxlLWVkaXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbGVtZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVsZW1lbnQubmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJuYW1lSW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVsZW1lbnQubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IF92bS5zdG9wRWRpdGluZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0b3BFZGl0aW5nTmFtZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5lbGVtZW50LCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3Ryb25nXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkRvdWJsZS1jbGlxdWVyIHBvdXIgcmVub21tZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBkYmxjbGljazogX3ZtLnN0YXJ0RWRpdGluZ05hbWUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lbGVtZW50Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBlbmNpbCBtcy0yIHRleHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjAuOGVtXCIsIG9wYWNpdHk6IFwiMC41XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudF9fYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICBfdm0uZm9ybVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLmZvcm1WaXNpYmxlID8gXCJSw6lkdWlyZVwiIDogXCLDiWRpdGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZUZvcm0uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZm9ybVZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmEgZmEtY2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZmEgZmEtY2hldnJvbi1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1saWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJEdXBsaXF1ZXJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kdXBsaWNhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWNvcHlcIiB9KV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1saWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLmVsZW1lbnQudmlzaWJsZSA/IFwiTWFzcXVlclwiIDogXCJBZmZpY2hlclwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZVZpc2liaWxpdHkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZWxlbWVudC52aXNpYmxlID8gXCJmYSBmYS1leWVcIiA6IFwiZmEgZmEtZXllLXNsYXNoXCIsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJTdXBwcmltZXJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogX3ZtLnRlbXBsYXRlSW5wdXROYW1lIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZWxlbWVudC50ZW1wbGF0ZSB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IF92bS52aXNpYmxlSW5wdXROYW1lIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZWxlbWVudC52aXNpYmxlID8gMSA6IDAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBfdm0ubmFtZUlucHV0TmFtZSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmVsZW1lbnQubmFtZSB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZVwiIH0gfSwgW1xuICAgICAgICBfdm0uZm9ybVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1WaXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1WaXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnVpbGRlcl9fZWxlbWVudF9fYm9keVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcImVsZW1lbnRGb3JtXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidWlsZGVyX19lbGVtZW50X19mb3JtXCIsXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZm9ybSkgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyX19lbGVtZW50X19oYW5kbGVcIiwgYXR0cnM6IHsgdGl0bGU6IFwiRMOpcGxhY2VyXCIgfSB9LFxuICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWdyaXAtdmVydGljYWxcIiB9KV1cbiAgICApXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItc2lkZWJhclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkZXItc2lkZWJhcl9faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoUXVlcnksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoUXVlcnlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlJlY2hlcmNoZXIuLi5cIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoUXVlcnkgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgX3ZtLnNlYXJjaFF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJfX2NvbnRlbnRcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5ncm91cGVkRWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50cywgY2F0ZWdvcnkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBrZXk6IGNhdGVnb3J5LCBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJfX2NhdGVnb3J5IG1iLTNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJ1aWxkZXItc2lkZWJhcl9fY2F0ZWdvcnktdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTIgYmctbGlnaHQgcm91bmRlZCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGN1cnNvcjogXCJwb2ludGVyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVDYXRlZ29yeShjYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZ3LWJvbGQgdGV4dC11cHBlcmNhc2Ugc21hbGwgdGV4dC1tdXRlZFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeSkpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEteHMgdGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jb2xsYXBzZWRDYXRlZ29yaWVzW2NhdGVnb3J5XVxuICAgICAgICAgICAgICAgICAgICA/IFwiZmEtY2hldnJvbi1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYS1jaGV2cm9uLWRvd25cIixcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmNvbGxhcHNlZENhdGVnb3JpZXNbY2F0ZWdvcnldLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFjb2xsYXBzZWRDYXRlZ29yaWVzW2NhdGVnb3J5XVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyYWdBcmVhIGxpc3QtZ3JvdXAgbXQtMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsaXN0OiBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgIGdyb3VwOiB7IG5hbWU6IFwiYnVpbGRlclwiLCBwdWxsOiBcImNsb25lXCIsIHB1dDogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgIGNsb25lOiBfdm0uY2xvbmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgc29ydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZWxlbWVudC50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGJ1aWxkZXItc2lkZWJhcl9faXRlbVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJfX2l0ZW0taWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBlbGVtZW50Lmljb24gfHwgXCJmYS1jdWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJidWlsZGVyLXNpZGViYXJfX2l0ZW0tbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbGVtZW50Lm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwibW9kYWxcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGlkOiBcInJldmlzaW9uc01vZGFsXCIsXG4gICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIsIGF0dHJzOiB7IHJvbGU6IFwiZG9jdW1lbnRcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBweS01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBmYS0zeCB0ZXh0LW11dGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hhcmdlbWVudCBkZSBsJ2hpc3RvcmlxdWUuLi5cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5lcnJvclxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0ucmV2aXNpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBweS01IHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZpbGUtYWx0IGZhLTN4IG1iLTNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBdWN1bmUgcsOpdmlzaW9uIHRyb3V2w6llIHBvdXIgY2UgY29udGVudS5cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJldmlzaW9ucywgZnVuY3Rpb24gKHJldmlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiByZXZpc2lvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhIGZhLWNhbGVuZGFyLWFsdCB0ZXh0LW11dGVkIG1lLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0uZm9ybWF0RGF0ZShyZXZpc2lvbi5jcmVhdGVkQXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlciBtZS0xXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MocmV2aXNpb24uYXV0aG9yKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBnYXAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJldmlld1JldmlzaW9uKHJldmlzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1leWUgbWUtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgUHLDqXZpc3VhbGlzZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXN0b3JlUmV2aXNpb24ocmV2aXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXVuZG8gbWUtMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgUmVzdGF1cmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1oaXN0b3J5IG1lLTJcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIEhpc3RvcmlxdWUgZGVzIHLDqXZpc2lvbnNcIiksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jbG9zZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBcImRhdGEtYnMtZGlzbWlzc1wiOiBcIm1vZGFsXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkZlcm1lclwiKV1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3Qgc2x1Z2lmeSA9IHJlcXVpcmUoJ3NsdWdpZnknKTtcbnNsdWdpZnkuZXh0ZW5kKHtcbiAgICAkOiAnJyxcbiAgICAnJSc6ICcnLFxuICAgICcmJzogJycsXG4gICAgJzwnOiAnJyxcbiAgICAnPic6ICcnLFxuICAgICd8JzogJycsXG4gICAgJ8KiJzogJycsXG4gICAgJ8KjJzogJycsXG4gICAgJ8KkJzogJycsXG4gICAgJ8KlJzogJycsXG4gICAgJ+KCoCc6ICcnLFxuICAgICfigqInOiAnJyxcbiAgICAn4oKjJzogJycsXG4gICAgJ+KCpCc6ICcnLFxuICAgICfigqUnOiAnJyxcbiAgICAn4oKmJzogJycsXG4gICAgJ+KCpyc6ICcnLFxuICAgICfigqgnOiAnJyxcbiAgICAn4oKpJzogJycsXG4gICAgJ+KCqic6ICcnLFxuICAgICfigqsnOiAnJyxcbiAgICAn4oKsJzogJycsXG4gICAgJ+KCrSc6ICcnLFxuICAgICfigq4nOiAnJyxcbiAgICAn4oKvJzogJycsXG4gICAgJ+KCsCc6ICcnLFxuICAgICfigrEnOiAnJyxcbiAgICAn4oKyJzogJycsXG4gICAgJ+KCsyc6ICcnLFxuICAgICfigrQnOiAnJyxcbiAgICAn4oK1JzogJycsXG4gICAgJ+KCuCc6ICcnLFxuICAgICfigrknOiAnJyxcbiAgICAn4oK9JzogJycsXG4gICAgJ+KCvyc6ICcnLFxuICAgICfiiIInOiAnJyxcbiAgICAn4oiGJzogJycsXG4gICAgJ+KIkSc6ICcnLFxuICAgICfiiJ4nOiAnJyxcbiAgICAn4pmlJzogJycsXG4gICAg5YWDOiAnJyxcbiAgICDlhoY6ICcnLFxuICAgICfvt7wnOiAnJyxcbn0pO1xuXG5jbGFzcyBTbHVnZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuc2V0VGFyZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZmllbGQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXG4gICAgICAgIGlmICgnJyA9PT0gdGhpcy5maWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2x1ZyA9ICcnO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5UYXJnZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsdWcgPSB0aGlzLmZpZWxkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcHBlbmRMb2NrQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgc2V0VGFyZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IEpTT04ucGFyc2UodGhpcy5maWVsZC5kYXRhc2V0LnRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBmaWVsZE5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG51bGwgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRocm93IGBXcm9uZyB0YXJnZXQgc3BlY2lmaWVkIGZvciBzbHVnIHdpZGdldCAoXCIke25hbWV9XCIpLmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmQgYSBcImxvY2tcIiBidXR0b24gdG8gY29udHJvbCBzbHVnIGJlaGF2aW91ciAoYXV0byBvciBtYW51YWwpXG4gICAgICovXG4gICAgYXBwZW5kTG9ja0J1dHRvbigpIHtcbiAgICAgICAgdGhpcy5sb2NrQnV0dG9uID0gdGhpcy5maWVsZC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmxvY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtTWVzc2FnZSA9IHRoaXMuZmllbGQuZGF0YXNldC5jb25maXJtVGV4dCB8fCBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBjb25maXJtTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVubG9jaygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZENvbmZpcm1NZXNzYWdlID0gZGVjb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShgXCIke2NvbmZpcm1NZXNzYWdlLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpfVwiYClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUgPT09IGNvbmZpcm0oZm9ybWF0dGVkQ29uZmlybU1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVubG9jaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5sb2NrIHRoZSB3aWRnZXQgaW5wdXQgKG1hbnVhbCBtb2RlKVxuICAgICAqL1xuICAgIHVubG9jaygpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2NrQnV0dG9uLmlubmVySFRNTCA9IHRoaXMubG9ja0J1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbi11bmxvY2tlZCcpO1xuICAgICAgICB0aGlzLmZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NrIHRoZSB3aWRnZXQgaW5wdXQgKGF1dG8gbW9kZSlcbiAgICAgKi9cbiAgICBsb2NrKCkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubG9ja0J1dHRvbi5pbm5lckhUTUwgPSB0aGlzLmxvY2tCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWljb24tbG9ja2VkJyk7XG5cbiAgICAgICAgLy8gTG9ja2luZyBpdCBiYWNrIGNoYW5nZXMgdGhlIHZhbHVlIGVpdGhlciB0byBkZWZhdWx0IHZhbHVlLCBvciByZWNvbXB1dGVzIGl0XG4gICAgICAgIGlmICgnJyAhPT0gdGhpcy5jdXJyZW50U2x1Zykge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHRoaXMuY3VycmVudFNsdWc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHNsdWdpZnkodGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB0YXJnZXQudmFsdWUpLmpvaW4oJy0nKSwge1xuICAgICAgICAgICAgcmVtb3ZlOiAvW15BLVphLXowLTlcXHMtXS9nLFxuICAgICAgICAgICAgbG93ZXI6IHRydWUsXG4gICAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgdGhlIHRhcmdldCBmaWVsZCBhbmQgc2x1ZyBpdFxuICAgICAqL1xuICAgIGxpc3RlblRhcmdldCgpIHtcbiAgICAgICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGhpcy50YXJnZXRzKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCdyZWFkb25seScgPT09IHRoaXMuZmllbGQuZ2V0QXR0cmlidXRlKCdyZWFkb25seScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lYS1zbHVnLWZpZWxkXScpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIG5ldyBTbHVnZ2VyKGZpZWxkKTtcbiAgICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdlYS5jb2xsZWN0aW9uLml0ZW0tYWRkZWQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5kZXRhaWwubmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lYS1zbHVnLWZpZWxkXScpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIG5ldyBTbHVnZ2VyKGZpZWxkKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjZhNjI0MiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnVpbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjZhNjI0MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNmNmE2MjQyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNmNmE2MjQyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNmNmE2MjQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNmNmE2MjQyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZjZhNjI0MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZjZhNjI0MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2JhY2svanMvYnVpbGRlci9jb21wb25lbnRzL0J1aWxkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2JmNjRlZWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlckVsZW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnVpbGRlckVsZW1lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2JmNjRlZWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzYmY2NGVlY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy90aGliYXVsdGRlcmV2aWVyZS9Eb3dubG9hZHMvYmxvb2R5LW1hcnlzLXYyL2JsX3Rlcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYmY2NGVlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYmY2NGVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYmY2NGVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVpbGRlckVsZW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiZjY0ZWVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiZjY0ZWVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlckVsZW1lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmQ0MmQ2MmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWlsZGVyU2lkZWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmQ0MmQ2MmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiZDQyZDYyY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy90aGliYXVsdGRlcmV2aWVyZS9Eb3dubG9hZHMvYmxvb2R5LW1hcnlzLXYyL2JsX3Rlcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiZDQyZDYyYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiZDQyZDYyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiZDQyZDYyYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJkNDJkNjJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JkNDJkNjJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvYmFjay9qcy9idWlsZGVyL2NvbXBvbmVudHMvQnVpbGRlclNpZGViYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXZpc2lvbnNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE3NDY1ODQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXZpc2lvbnNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUmV2aXNpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWE3NDY1ODQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImVhNzQ2NTg0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VhNzQ2NTg0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VhNzQ2NTg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VhNzQ2NTg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXZpc2lvbnNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE3NDY1ODQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWE3NDY1ODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9iYWNrL2pzL2J1aWxkZXIvY29tcG9uZW50cy9SZXZpc2lvbnNNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JldmlzaW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y2YTYyNDImc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXJFbGVtZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYmY2NGVlYyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVpbGRlclNpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJkNDJkNjJjJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXZpc2lvbnNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE3NDY1ODQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Y2YTYyNDImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWlsZGVyRWxlbWVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYmY2NGVlYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1aWxkZXJTaWRlYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJkNDJkNjJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXZpc2lvbnNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYTc0NjU4NCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiJdLCJuYW1lcyI6WyJWdWUiLCJCdWlsZGVyIiwiQnVpbGRlckZpbGVNYW5hZ2VySW50ZWdyYXRpb24iLCIkYnVpbGRlclJvb3RzIiwiJCIsImxlbmd0aCIsImVhY2giLCJpIiwicm9vdCIsImVsIiwiYXR0ciIsImNvbXBvbmVudHMiLCJpbml0IiwicmVmcmVzaFN1cnZleVF1ZXN0aW9uQW5zd2VyQmxvY2siLCJzZWxlY3RvciIsInZhbCIsImNsb3Nlc3QiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm9uIiwiJGZvcm1JZCIsIiRhbGxJbnB1dCIsImluZGV4IiwidmFsdWUiLCIkY3VycmVudEVsZW1lbnQiLCJpZCIsInByb3AiLCJlYVN1cnZleVNlbGVjdG9yIiwiZGVsZWdhdGUiLCJsYXN0IiwiY3VycmVudFRhcmdldEZpZWxkIiwiY3VycmVudEJ1dHRvbiIsIm1vZGFsSW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRGaWVsZCIsImRhdGEiLCJvcGVuTW9kYWwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0eXBlIiwiaGFuZGxlRmlsZVNlbGVjdGlvbiIsImZpbGUiLCIkYnV0dG9uIiwibW9kYWwiLCJCVUlMREVSX0xPQ0FMRSIsImFwcGVuZCIsIm1vZGFsRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJiYWNrZHJvcCIsImtleWJvYXJkIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJzdHlsZSIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0Iiwic2hvdyIsIm1pbWVUeXBlIiwic3RhcnRzV2l0aCIsImFsZXJ0IiwiY29weU1lZGlhVG9CdWlsZGVyIiwiZXJyb3IiLCJmaWxlSWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yRGF0YSIsImpzb24iLCJFcnJvciIsInN1Y2Nlc3MiLCIkZm9ybUdyb3VwIiwiJGhpZGRlbklucHV0IiwidXJsIiwiJHdpZGdldCIsImhpZGUiLCJ0ZXh0IiwibmFtZSIsIm9mZiIsInNldFRpbWVvdXQiLCJyZWFkeSIsIkZvcm1CdWlsZGVyIiwiRWxlbWVudEZvcm1Nb3VudGVyIiwiaW5wdXROYW1lIiwiYmFzZW5hbWUiLCJlbGVtZW50SWQiLCJlbGVtZW50UHJvcGVydHlOYW1lIiwibXVsdGlwbGUiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJpbnB1dElkIiwiY29uZmlybSIsImNhbGxiYWNrIiwibXlNb2RhbCIsInZhbGlkYXRlRm9ybUVsZW1lbnQiLCJmb3JtIiwiaXNWYWxpZCIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3ZhbGlkYXRlRmlsZUlucHV0IiwibW91bnQiLCJlbGVtZW50IiwiJGZvcm0iLCJfaW5pdFJlcGVhdGFibGVzIiwiX2NvbXBpbGVOYW1lQW5kVmFsdWVzIiwiX21ha2VDa2VkaXRvcnMiLCJfbWFrZVNlbGVjdDIiLCJfYXV0b1ZhbGlkYXRlRmlsZUlucHV0cyIsIl9nZXRWYWx1ZUZyb21QYXRoIiwib2JqIiwicGF0aCIsImhhc093blByb3BlcnR5Iiwia2V5cyIsInNwbGl0IiwiZmlsdGVyIiwiayIsImN1cnJlbnQiLCJrZXkiLCIkY29udGFpbmVyIiwiJGl0ZW1zQ29udGFpbmVyIiwiJHRlbXBsYXRlIiwiaHRtbCIsIm1hdGNoIiwiZXhlYyIsImZ1bGxOYW1lIiwicGFydHMiLCJyZXBlYXRhYmxlTmFtZSIsInJlcGVhdGFibGVEYXRhIiwic2F2ZWRDb3VudCIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImNoaWxkcmVuIiwiY3VycmVudENvdW50IiwiX2FkZFJlcGVhdGFibGVJdGVtIiwibWF4IiwicGFyc2VJbnQiLCJtaW4iLCJtYXhJbmRleCIsImlkeCIsImlzTmFOIiwibmV3SW5kZXgiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyTWludXMxIiwiaW5kZXhPZiIsImpvaW4iLCIkbmV3SXRlbSIsIiRpbnB1dCIsImlzTXVsdGlwbGUiLCJjbGVhblByb3BOYW1lIiwicmVwbGFjZSIsInJlbW91bnQiLCJub3QiLCJwYXJlbnQiLCJoYXNDbGFzcyIsIl9oeWRyYXRlSW5wdXRQcmV2aWV3IiwidXJsTmFtZSIsIl9oeWRyYXRlSW5wdXRGaWxlIiwic2VsZWN0Iiwib3B0aW9ucyIsInRoZW1lIiwibGFuZ3VhZ2UiLCJ3aWR0aCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiZGlzcGxheUljb25zIiwiaWNvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0ZW1wbGF0ZVNlbGVjdGlvbiIsInRlbXBsYXRlUmVzdWx0Iiwic2VsZWN0MiIsImVkaXRvciIsImxvYWRIVE1MIiwid2FybiIsIkNLRURJVE9SIiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsInRvb2xiYXIiLCJpdGVtcyIsImhlaWdodCIsImV4dHJhUGx1Z2lucyIsImZpbGVicm93c2VyQnJvd3NlVXJsIiwidG9hc3RfaWQiLCJsYWJlbF9pbnB1dCIsImV2dCIsInRvYXN0VHJpZ2dlciIsInRvYXN0IiwiVG9hc3QiLCJjYW5jZWwiLCJnZXREYXRhIiwicmVtb3ZlQXR0ciIsImN1cnJlbnRUYXJnZXQiLCJmaWxlcyIsImZpbGVTaXplTUIiLCJzaXplIiwidG9GaXhlZCIsIklNQUdFX01BWF9TSVpFX01CIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIiRyb3ciLCJmaWxlRXh0Iiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImxpc3RfZXh0IiwiY29uc3RydWN0b3IiLCJidWlsZGVyRGF0YSIsImZpZWxkcyIsImN1cnJlbnRSb3ciLCJmaWVsZE5hbWVzIiwiU2V0Iiwicm93IiwiZW5kUm93IiwicHVzaCIsImZpZWxkc2V0IiwibGVnZW5kIiwibmVzdGVkQnVpbGRlciIsIl9hZGRGaWVsZCIsImFkZFRleHQiLCJsYWJlbCIsInJlcXVpcmVkIiwic3BhbiIsImRlZmF1bHRWYWx1ZSIsImhlbHBUZXh0IiwiX3ZhbGlkYXRlRmllbGROYW1lIiwiYWRkTnVtYmVyIiwiYWRkU2VsZWN0Iiwib3B0aW9uc01hcCIsImFkZFRleHRhcmVhIiwicm93cyIsImFkZENLRWRpdG9yIiwiYWRkSW1hZ2UiLCJmb3JtYXQiLCJhY2NlcHRlZEZvcm1hdHMiLCJ1c2VGaWxlTWFuYWdlciIsImFkZFVybCIsInNob3dUb29sdGlwIiwiYWRkSWNvblBpY2tlciIsImFkZFRhYmxlIiwiY29scyIsImFkZEhlbHAiLCJtZXNzYWdlIiwiYWRkUmVwZWF0YWJsZSIsImNvbmZpZyIsImluaXRpYWwiLCJhZGRCdXR0b25UZXh0IiwicmVtb3ZlQnV0dG9uVGV4dCIsInRlbXBsYXRlIiwicmVuZGVyIiwiZmllbGQiLCJfcmVuZGVyRmllbGQiLCJfcmVuZGVyUm93IiwiX3JlbmRlckZpZWxkc2V0IiwiX3JlbmRlclRleHQiLCJfcmVuZGVyTnVtYmVyIiwiX3JlbmRlclNlbGVjdCIsIl9yZW5kZXJUZXh0YXJlYSIsIl9yZW5kZXJDS0VkaXRvciIsIl9yZW5kZXJJbWFnZSIsIl9yZW5kZXJVcmwiLCJfcmVuZGVySWNvbiIsIl9yZW5kZXJUYWJsZSIsIl9yZW5kZXJIZWxwIiwiX3JlbmRlclJlcGVhdGFibGUiLCJyb3dGaWVsZCIsIm5lc3RlZEZpZWxkIiwicmVxdWlyZWRBdHRyIiwicmVxdWlyZWRMYWJlbCIsIm11bHRpcGxlQXR0ciIsIl9tYWtlT3B0aW9uVGFncyIsImxpbWl0U2l6ZSIsIm1hcCIsImYiLCJpY29ucyIsIl9nZXRJY29ucyIsImNvbCIsImxpbmUiLCJuYkNvbHMiLCJuYW1lUHJlZml4IiwiaXRlbUJ1aWxkZXIiLCJpdGVtRmllbGQiLCJ0ZW1wbGF0ZUJ1aWxkZXIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJoYXMiLCJhZGQiLCJpc1JlcXVpcmVkIiwib3B0aW9uVGFncyIsIm9wdGlvblZhbHVlIiwic3Vib3B0aW9uVmFsdWUiLCJkZWJ1ZyIsInRvSlNPTiIsImNhdGVnb3J5IiwiZmFsc2UiLCJ0cnVlIiwiYnVpbGRlciIsInN0YXJ0IiwiY2VudGVyIiwiZW5kIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwicHJpbWFyeSIsImVudGV0ZSIsIl9ibGFuayIsIl9zZWxmIiwibm9fbGluZSIsIndpdGhfbGluZSIsImltYWdlX3ZpZGVvIiwidmlkZW9faW1hZ2UiLCJpbWFnZV90ZXh0IiwidGV4dF9pbWFnZSIsInNlY29uZGFyeSIsImoiLCJzdWJCdWlsZGVyIiwiamR4Iiwib25nbGV0cyIsImZpcnN0X2xpbmUiLCJmaXJzdF90d29fbGluZXMiLCJyZWd1bGFyIiwicGl2b3QiLCJpbWFnZV90YWJsZWF1IiwidGFibGVhdV9pbWFnZSIsImNhdGVnb3JpZXMiLCJmb3JtcyIsImJ0bkJ1aWxkZXIiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJsaWdodCIsImRhcmsiLCJzYXRlbGxpdGUiLCJkcmFnZ2FibGUiLCJCdWlsZGVyRWxlbWVudCIsIkJ1aWxkZXJTaWRlYmFyIiwiUmV2aXNpb25zTW9kYWwiLCJhdmFpbGFibGVFbGVtZW50cyIsInByb3BzIiwiZWxlbWVudHMiLCJTdHJpbmciLCJkZWZhdWx0IiwicHJldmlld1VybCIsImN1cnJlbnRFbGVtZW50cyIsImluaXRpYWxpemUiLCJmb3JtSGFzQ2hhbmdlZCIsInByZXZpZXdXaW5kb3ciLCJwcmV2aWV3VXBkYXRlVGltZXIiLCJ3YXRjaCIsImhhbmRsZXIiLCJzY2hlZHVsZVByZXZpZXdVcGRhdGUiLCJkZWVwIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwicmVtb3ZlRWxlbWVudEJ5SWQiLCJtb3ZlVXAiLCJzd2FwRWxlbWVudHMiLCJtb3ZlRG93biIsIm9sZFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJ0bXBFbGVtZW50IiwiJHNldCIsImhpZGVGb3JtRWxlbWVudCIsImZvcm1WaXNpYmxlIiwic2hvd0Zvcm1FbGVtZW50IiwiaGlkZUVsZW1lbnQiLCJ2aXNpYmxlIiwic2hvd0VsZW1lbnQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImN1cnJlbnRFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUiLCJhdmFpbGFibGUiLCJjcmVhdGVkRWxlbWVudCIsIl9yYW5kb21TdHJpbmciLCJhc3NpZ24iLCJkdXBsaWNhdGVFbGVtZW50IiwiZmluZEluZGV4Iiwib3JpZ2luYWwiLCJuZXdFbGVtZW50IiwicGFyc2UiLCJzcGxpY2UiLCJjb2xsYXBzZUFsbCIsImV4cGFuZEFsbCIsImNsZWFyQWxsIiwib3BlblByZXZpZXciLCJ3aW5kb3dGZWF0dXJlcyIsImNsb3NlZCIsImZvY3VzIiwib3BlbiIsInNlbmRQcmV2aWV3VXBkYXRlIiwib3BlblJldmlzaW9ucyIsIiRyZWZzIiwicmV2aXNpb25zTW9kYWwiLCJyZXN0b3JlRWxlbWVudHMiLCJyZXN0b3JlZEVsZW1lbnRzIiwiJG5leHRUaWNrIiwicHJldmlld1JldmlzaW9uIiwicHJldmlld0VsZW1lbnRzIiwiZWxlbWVudHNUb1NlbmQiLCJwb3N0TWVzc2FnZSIsInByZWZpeCIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1haW5pbmciLCJzdWJzdHJpbmciLCJwIiwiY2hlY2tlZCIsInRhZ05hbWUiLCJfc2V0TmVzdGVkVmFsdWUiLCJuZXh0S2V5IiwiaXNJbnQiLCJ0ZXN0IiwibGFzdEtleSIsImNsZWFyVGltZW91dCIsIngiLCJub3ciLCJEYXRlIiwiZmxvb3IiLCJhYnMiLCJtb3VudGVkIiwidXBkYXRlRXZlbnRzIiwiZXZlbnRUeXBlIiwiJGVsIiwibWF0Y2hlcyIsImNhcHR1cmUiLCJqUXVlcnkiLCJyZXR1cm5WYWx1ZSIsImlzRWRpdGluZ05hbWUiLCJjb21wdXRlZCIsInRlbXBsYXRlSW5wdXROYW1lIiwidmlzaWJsZUlucHV0TmFtZSIsIm5hbWVJbnB1dE5hbWUiLCJzdGFydEVkaXRpbmdOYW1lIiwibmFtZUlucHV0Iiwic3RvcEVkaXRpbmdOYW1lIiwidHJpbSIsIiRlbWl0IiwiZHVwbGljYXRlIiwidG9nZ2xlRm9ybSIsImVsZW1lbnRGb3JtIiwidG9nZ2xlVmlzaWJpbGl0eSIsInNlYXJjaFF1ZXJ5IiwiY29sbGFwc2VkQ2F0ZWdvcmllcyIsImZpbHRlcmVkRWxlbWVudHMiLCJxdWVyeSIsImluY2x1ZGVzIiwiZ3JvdXBlZEVsZW1lbnRzIiwiZ3JvdXBzIiwib3JkZXIiLCJzb3J0ZWRHcm91cHMiLCJzb3J0IiwiYSIsImIiLCJ0b2dnbGVDYXRlZ29yeSIsImNsb25lRWxlbWVudCIsImVudGl0eUNsYXNzIiwiZW50aXR5SWQiLCJOdW1iZXIiLCJyZXZpc2lvbnMiLCJsb2FkaW5nIiwiZmV0Y2hSZXZpc2lvbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwiZm9ybWF0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsInJlc3RvcmVSZXZpc2lvbiIsInJldmlzaW9uIiwiX3ZtIiwiX2MiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiX3YiLCJ0aXRsZSIsImNsaWNrIiwiX2UiLCJoYW5kbGUiLCJncm91cCIsImNoYW5nZSIsIm1vZGVsIiwiJCR2IiwiZXhwcmVzc2lvbiIsIl9sIiwiZWxlbWVudFJlbW92ZWQiLCJlbGVtZW50Rm9ybUhpZGRlbiIsImVsZW1lbnRGb3JtU2hvd24iLCJlbGVtZW50SGlkZGVuIiwiZWxlbWVudFNob3duIiwiJGV2ZW50Iiwic2xvdCIsInJlZiIsInJlc3RvcmUiLCJwcmV2aWV3Iiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsImNsYXNzIiwiX20iLCJfcyIsInN0YXRpY1N0eWxlIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJkb21Qcm9wcyIsImJsdXIiLCJrZXlkb3duIiwiX2siLCJrZXlDb2RlIiwiYXBwbHkiLCJjb21wb3NpbmciLCJkYmxjbGljayIsIm9wYWNpdHkiLCJpbm5lckhUTUwiLCJjdXJzb3IiLCJsaXN0IiwicHVsbCIsInB1dCIsImNsb25lIiwidGFiaW5kZXgiLCJyb2xlIiwiY3JlYXRlZEF0IiwiYXV0aG9yIiwic2x1Z2lmeSIsInJlcXVpcmUiLCJleHRlbmQiLCLlhYMiLCLlhoYiLCJTbHVnZ2VyIiwic2V0VGFyZ2V0RWxlbWVudCIsImxvY2tlZCIsInNldEF0dHJpYnV0ZSIsImN1cnJlbnRTbHVnIiwidXBkYXRlVmFsdWUiLCJsaXN0ZW5UYXJnZXQiLCJhcHBlbmRMb2NrQnV0dG9uIiwiZGF0YXNldCIsInRhcmdldHMiLCJsb2NrQnV0dG9uIiwicGFyZW50Tm9kZSIsImNvbmZpcm1NZXNzYWdlIiwiY29uZmlybVRleHQiLCJ1bmxvY2siLCJmb3JtYXR0ZWRDb25maXJtTWVzc2FnZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImxvY2siLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb3dlciIsInN0cmljdCIsImRldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=