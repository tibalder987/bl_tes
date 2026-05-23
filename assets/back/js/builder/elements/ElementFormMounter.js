//import $ from 'jquery';
//import 'bootstrap';
import 'select2';
import 'select2/dist/css/select2.css';
import FormBuilder from './FormBuilder';

export default class ElementFormMounter {
    static inputName(basename, elementId, elementPropertyName, multiple = false) {
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

        var myModal = new bootstrap.Modal(document.getElementById('modal-delete-element'), { backdrop: true, keyboard: true });

        myModal.show();
        $('#modal-delete-element').off('click', '#modal-delete-element-button')
            .on('click', '#modal-delete-element-button', callback);
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
            let options = { theme: 'bootstrap', language: 'fr', width: '100%', minimumResultsForSearch: 10 };

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
                    toolbar: [
                        { name: 'styles', items: ['Bold', 'Italic', 'Strike', 'Link'] },
                        { name: 'colors', items: ['TextColor'] },
                        { name: 'lists', items: ['BulletedList', 'NumberedList', '-', 'Outdent', 'Indent'] },
                        { name: 'clipboard', items: ['Copy', 'Paste', 'PasteFromWord', '-', 'Undo', 'Redo'] },
                        { name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
                        { name: 'insert', items: ['HorizontalRule', 'Table', 'Image'] },
                        { name: 'advanced', items: ['Source'] }
                    ],
                    language: 'fr',
                    height: 100,
                    extraPlugins: 'divarea',
                    filebrowserBrowseUrl: '/elfinder'
                });

                let toast_id = "toasted" + id;
                let label_input = $('#' + id).parent().find('label').text();

                editor.on('required', function (evt) {
                    if ($('#' + evt.editor.name).length > 0) {
                        $('body').append('' +
                            '<div class="toast-container position-fixed bottom-0 end-0 p-3">' +
                            '  <div id="' + toast_id + '" class="toast" role="alert" aria-live="assertive" aria-atomic="true">' +
                            '    <div class="toast-header">' +
                            '      <strong class="me-auto">Erreur - Obligatoire</strong>' +
                            '      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>' +
                            '    </div>' +
                            '    <div class="toast-body">' +
                            '      Champ ' + label_input +
                            '    </div>' +
                            '  </div>' +
                            '</div>');

                        const toastTrigger = document.getElementById(toast_id);
                        const toast = new bootstrap.Toast(toastTrigger)
                        toast.show()
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
        const fileSizeMB = ((file.size / 1024) / 1024).toFixed(4);

        if (fileSizeMB > FormBuilder.IMAGE_MAX_SIZE_MB) {
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
            }
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
        let fileExt = value.substr(value.lastIndexOf('.') + 1).toLowerCase();;
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
