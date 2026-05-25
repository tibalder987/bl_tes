"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["file-selector"],{

/***/ "./assets/file-manager/file-icons.js":
/*!*******************************************!*\
  !*** ./assets/file-manager/file-icons.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFileIcon: function() { return /* binding */ getFileIcon; },
/* harmony export */   getFileIconClass: function() { return /* binding */ getFileIconClass; }
/* harmony export */ });
/**
 * Utilitaires pour la gestion des icônes de fichiers
 */

/**
 * Retourne la classe d'icône Font Awesome pour un fichier ou dossier
 * @param {Object} item - Fichier ou dossier
 * @returns {string} - Classe Font Awesome
 */
function getFileIcon(item) {
  // Dossier
  if (item.type === 'folder') {
    return 'fa fa-folder';
  }

  // Archives
  if (item.extension === 'zip' || item.extension === 'rar' || item.extension === '7z' || item.extension === 'tar' || item.extension === 'gz') {
    return 'fa fa-file-archive';
  }

  // PDF
  if (item.extension === 'pdf' || item.isPdf) {
    return 'fa fa-file-pdf';
  }

  // Documents Word
  if (item.extension === 'doc' || item.extension === 'docx' || item.extension === 'odt') {
    return 'fa fa-file-word';
  }

  // Feuilles de calcul Excel
  if (item.extension === 'xls' || item.extension === 'xlsx' || item.extension === 'ods') {
    return 'fa fa-file-excel';
  }

  // Présentations PowerPoint
  if (item.extension === 'ppt' || item.extension === 'pptx' || item.extension === 'odp') {
    return 'fa fa-file-powerpoint';
  }

  // Fichiers texte
  if (item.extension === 'txt' || item.isText) {
    return 'fa fa-file-alt';
  }

  // Images
  if (item.isImage || ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(item.extension)) {
    return 'fa fa-image';
  }

  // Vidéos
  if (item.isVideo || ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'].includes(item.extension)) {
    return 'fa fa-video';
  }

  // Audio
  if (['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a'].includes(item.extension)) {
    return 'fa fa-file-audio';
  }

  // Code
  if (['html', 'css', 'js', 'php', 'py', 'java', 'cpp', 'c', 'h', 'json', 'xml', 'yml', 'yaml'].includes(item.extension)) {
    return 'fa fa-file-code';
  }

  // Fichier générique
  return 'fa fa-file';
}

/**
 * Retourne la classe CSS pour colorer l'icône selon le type de fichier
 * @param {Object} item - Fichier ou dossier
 * @returns {string} - Classe CSS
 */
function getFileIconClass(item) {
  // Dossier
  if (item.type === 'folder') {
    return 'file-item__icon--folder';
  }

  // Archives
  if (item.extension === 'zip' || item.extension === 'rar' || item.extension === '7z' || item.extension === 'tar' || item.extension === 'gz') {
    return 'file-item__icon--archive';
  }

  // PDF
  if (item.extension === 'pdf' || item.isPdf) {
    return 'file-item__icon--pdf';
  }

  // Documents Word
  if (item.extension === 'doc' || item.extension === 'docx' || item.extension === 'odt') {
    return 'file-item__icon--word';
  }

  // Feuilles de calcul Excel
  if (item.extension === 'xls' || item.extension === 'xlsx' || item.extension === 'ods') {
    return 'file-item__icon--excel';
  }

  // Présentations PowerPoint
  if (item.extension === 'ppt' || item.extension === 'pptx' || item.extension === 'odp') {
    return 'file-item__icon--powerpoint';
  }

  // Fichiers texte
  if (item.extension === 'txt' || item.isText) {
    return 'file-item__icon--text';
  }

  // Images
  if (item.isImage || ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].includes(item.extension)) {
    return 'file-item__icon--image';
  }

  // Vidéos
  if (item.isVideo || ['mp4', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'webm'].includes(item.extension)) {
    return 'file-item__icon--video';
  }

  // Audio
  if (['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a'].includes(item.extension)) {
    return 'file-item__icon--audio';
  }

  // Code
  if (['html', 'css', 'js', 'php', 'py', 'java', 'cpp', 'c', 'h', 'json', 'xml', 'yml', 'yaml'].includes(item.extension)) {
    return 'file-item__icon--code';
  }

  // Fichier générique
  return 'file-item__icon--file';
}

/***/ }),

/***/ "./assets/file-selector/file-selector.js":
/*!***********************************************!*\
  !*** ./assets/file-selector/file-selector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _FileSelector_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelector.vue */ "./assets/file-selector/FileSelector.vue");
/* harmony import */ var _file_selector_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-selector.scss */ "./assets/file-selector/file-selector.scss");



document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('file-selector-app');
  if (!appElement) return;

  // Get CSRF token
  const csrfToken = window.FILE_SELECTOR_CSRF_TOKEN || appElement?.getAttribute('data-csrf-token') || '';
  if (!csrfToken) {
    console.error('CSRF token not found for file selector!');
  }
  const app = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
    el: '#file-selector-app',
    components: {
      FileSelector: _FileSelector_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data() {
      return {
        csrfToken: csrfToken
      };
    },
    template: '<FileSelector :csrf-token="csrfToken" />'
  });
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-manager/file-icons.js */ "./assets/file-manager/file-icons.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileSelector',
  props: {
    csrfToken: {
      type: String,
      required: true
    },
    acceptedTypes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentFolder: null,
      folders: [],
      files: [],
      breadcrumb: [],
      searchQuery: '',
      selectedFile: null,
      loading: false
    };
  },
  computed: {
    // Plus besoin de computed properties, la recherche se fait côté API
  },
  mounted() {
    this.loadRoot();
  },
  methods: {
    getFileIcon: _file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIcon,
    getFileIconClass(item) {
      // Mapper les classes du file-manager vers les classes du file-selector
      const baseClass = (0,_file_manager_file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIconClass)(item);
      return baseClass.replace('file-item__icon--', 'file-selector__icon--');
    },
    async loadRoot() {
      this.currentFolder = null;
      this.breadcrumb = [];
      await this.loadFolder(null);
    },
    async loadFolder(folderId) {
      this.loading = true;
      this.selectedFile = null;
      try {
        // Utiliser la route /api/files avec le paramètre folderId
        const url = folderId ? `/api/files?folderId=${folderId}` : '/api/files';
        const response = await fetch(url, {
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.folders = data.folders || [];

        // Filtrer les fichiers selon les types acceptés
        let filesToShow = data.files || [];
        if (this.acceptedTypes && this.acceptedTypes.length > 0) {
          filesToShow = filesToShow.filter(file => {
            if (!file.mimeType) return false;
            return this.acceptedTypes.some(acceptedType => {
              if (acceptedType.endsWith('/*')) {
                // Wildcard match (ex: image/*)
                const baseType = acceptedType.slice(0, -2);
                return file.mimeType.startsWith(baseType + '/');
              }
              return file.mimeType === acceptedType;
            });
          });
        } else {
          // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
          filesToShow = filesToShow.filter(f => f.mimeType && f.mimeType.startsWith('image/'));
        }
        this.files = filesToShow;
        this.currentFolder = data.currentFolder || null;
        this.breadcrumb = data.breadcrumb || [];
      } catch (error) {
        console.error('Erreur de chargement:', error);
        alert('Erreur lors du chargement des fichiers');
      } finally {
        this.loading = false;
      }
    },
    async navigateToFolder(folderId) {
      await this.loadFolder(folderId);
    },
    goBack() {
      if (this.currentFolder && this.currentFolder.parentFolderId !== null && this.currentFolder.parentFolderId !== undefined) {
        // Aller au dossier parent
        this.navigateToFolder(this.currentFolder.parentFolderId);
      } else {
        // Retour à la racine
        this.loadRoot();
      }
    },
    getFilePreviewUrl(fileId) {
      return `/api/files/${fileId}/preview`;
    },
    handleImageError(event) {
      // Si l'image ne charge pas, afficher une icône par défaut
      event.target.style.display = 'none';
      const parent = event.target.parentElement;
      if (parent && !parent.querySelector('.file-selector__error-icon')) {
        const icon = document.createElement('i');
        icon.className = 'fa fa-image file-selector__error-icon';
        parent.appendChild(icon);
      }
    },
    selectFile(file) {
      this.selectedFile = file;
    },
    handleContentClick(event) {
      // Si on clique sur le contenu (pas sur un item), désélectionner
      const target = event.target;
      const currentTarget = event.currentTarget;

      // Si on clique directement sur le conteneur content
      if (target === currentTarget) {
        this.selectedFile = null;
        return;
      }

      // Si on clique sur l'élément empty
      if (target.closest('.file-selector__empty')) {
        this.selectedFile = null;
        return;
      }

      // Si on clique sur la grille mais pas sur un item (espace entre les items)
      const clickedItem = target.closest('.file-selector__item');
      if (!clickedItem) {
        // On a cliqué sur la grille mais pas sur un item
        const grid = target.closest('.file-selector__grid');
        if (grid) {
          this.selectedFile = null;
        }
      }
    },
    confirmSelection(file) {
      if (!file.mimeType || !file.mimeType.startsWith('image/')) {
        alert('Veuillez sélectionner une image');
        return;
      }

      // Envoyer au parent
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'filemanager-selection',
          file: {
            id: file.id,
            name: file.name,
            path: file.path,
            mimeType: file.mimeType,
            size: file.size
          }
        }, '*');
      }
    },
    handleSearch() {
      if (this.searchQuery) {
        this.performSearch(this.searchQuery);
      } else {
        // Si la recherche est vide, recharger le dossier actuel
        if (this.currentFolder) {
          this.loadFolder(this.currentFolder.id);
        } else {
          this.loadRoot();
        }
      }
    },
    async performSearch(query) {
      this.loading = true;
      this.selectedFile = null;
      try {
        // Inclure le dossier courant dans la recherche si on est dans un dossier
        const folderId = this.currentFolder?.id || null;
        const params = new URLSearchParams({
          q: query
        });
        if (folderId) {
          params.append('folderId', folderId);
        }
        const response = await fetch(`/api/files/search?${params.toString()}`, {
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Filtrer les fichiers selon les types acceptés
        let filesToShow = data.files || [];
        if (this.acceptedTypes && this.acceptedTypes.length > 0) {
          filesToShow = filesToShow.filter(file => {
            if (!file.mimeType) return false;
            return this.acceptedTypes.some(acceptedType => {
              if (acceptedType.endsWith('/*')) {
                // Wildcard match (ex: image/*)
                const baseType = acceptedType.slice(0, -2);
                return file.mimeType.startsWith(baseType + '/');
              }
              return file.mimeType === acceptedType;
            });
          });
        } else {
          // Par défaut, ne garder que les images si aucun type accepté n'est spécifié
          filesToShow = filesToShow.filter(f => f.mimeType && f.mimeType.startsWith('image/'));
        }
        this.folders = data.folders || [];
        this.files = filesToShow;
        this.currentFolder = null;
        this.breadcrumb = [];
      } catch (error) {
        console.error('Erreur de recherche:', error);
        alert('Erreur lors de la recherche');
      } finally {
        this.loading = false;
      }
    },
    formatSize(bytes) {
      if (!bytes) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "file-selector"
  }, [_c("div", {
    staticClass: "file-selector__toolbar"
  }, [_vm.currentFolder ? _c("button", {
    staticClass: "file-selector__btn",
    on: {
      click: _vm.goBack
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left"
  }), _vm._v(" Retour\n        ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "file-selector__breadcrumb"
  }, [_c("span", {
    staticClass: "file-selector__breadcrumb-item",
    on: {
      click: _vm.loadRoot
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v(" Accueil\n            ")]), _vm._v(" "), _vm._l(_vm.breadcrumb, function (folder, index) {
    return [_c("i", {
      staticClass: "fa fa-chevron-right"
    }), _vm._v(" "), _c("span", {
      staticClass: "file-selector__breadcrumb-item",
      on: {
        click: function ($event) {
          return _vm.navigateToFolder(folder.id);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(folder.name) + "\n                ")])];
  })], 2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchQuery,
      expression: "searchQuery"
    }],
    staticClass: "file-selector__search",
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.searchQuery = $event.target.value;
      }, _vm.handleSearch]
    }
  })]), _vm._v(" "), !_vm.loading ? _c("div", {
    staticClass: "file-selector__main"
  }, [_c("div", {
    staticClass: "file-selector__content",
    on: {
      click: _vm.handleContentClick
    }
  }, [_vm.folders.length === 0 && _vm.files.length === 0 ? _c("div", {
    staticClass: "file-selector__empty"
  }, [_c("i", {
    staticClass: "fa fa-folder-open fa-3x"
  }), _vm._v(" "), _c("p", [_vm._v("Aucun fichier trouvé")])]) : _c("div", {
    staticClass: "file-selector__grid"
  }, [_vm._l(_vm.folders, function (folder) {
    return _c("div", {
      key: "folder-" + folder.id,
      staticClass: "file-selector__item file-selector__item--folder",
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.navigateToFolder(folder.id);
        }
      }
    }, [_c("div", {
      staticClass: "file-selector__icon",
      class: _vm.getFileIconClass({
        ...folder,
        type: "folder"
      })
    }, [_c("i", {
      class: _vm.getFileIcon({
        ...folder,
        type: "folder"
      })
    })]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__name"
    }, [_vm._v(_vm._s(folder.name))])]);
  }), _vm._v(" "), _vm._l(_vm.files, function (file) {
    return _c("div", {
      key: "file-" + file.id,
      staticClass: "file-selector__item file-selector__item--file",
      class: {
        "file-selector__item--selected": _vm.selectedFile && _vm.selectedFile.id === file.id
      },
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.selectFile(file);
        },
        dblclick: function ($event) {
          $event.stopPropagation();
          return _vm.confirmSelection(file);
        }
      }
    }, [_c("div", {
      staticClass: "file-selector__icon",
      class: _vm.getFileIconClass({
        ...file,
        type: "file"
      })
    }, [_c("i", {
      class: _vm.getFileIcon({
        ...file,
        type: "file"
      })
    })]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__name"
    }, [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c("div", {
      staticClass: "file-selector__size"
    }, [_vm._v(_vm._s(_vm.formatSize(file.size)))])]);
  })], 2)]), _vm._v(" "), _vm.selectedFile ? _c("div", {
    staticClass: "file-selector__preview"
  }, [_c("div", {
    staticClass: "file-selector__preview-header"
  }, [_c("h4", [_vm._v(_vm._s(_vm.selectedFile.name))]), _vm._v(" "), _c("button", {
    staticClass: "file-selector__preview-close",
    attrs: {
      title: "Fermer"
    },
    on: {
      click: function ($event) {
        _vm.selectedFile = null;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-selector__preview-content"
  }, [_vm.selectedFile.isImage ? _c("div", {
    staticClass: "file-selector__preview-image"
  }, [_c("img", {
    attrs: {
      src: _vm.getFilePreviewUrl(_vm.selectedFile.id),
      alt: _vm.selectedFile.name
    }
  })]) : _c("div", {
    staticClass: "file-selector__preview-info"
  }, [_c("div", {
    staticClass: "file-selector__preview-icon"
  }, [_c("i", {
    class: [_vm.getFileIcon({
      ..._vm.selectedFile,
      type: "file"
    }), _vm.getFileIconClass({
      ..._vm.selectedFile,
      type: "file"
    })]
  })]), _vm._v(" "), _c("p", {
    staticClass: "file-selector__preview-message"
  }, [_vm._v("Aperçu non disponible")])])]), _vm._v(" "), _c("div", {
    staticClass: "file-selector__preview-footer"
  }, [_c("div", {
    staticClass: "file-selector__preview-meta"
  }, [_c("div", [_c("strong", [_vm._v("Taille:")]), _vm._v(" " + _vm._s(_vm.formatSize(_vm.selectedFile.size)))]), _vm._v(" "), _vm.selectedFile.mimeType ? _c("div", [_c("strong", [_vm._v("Type:")]), _vm._v(" " + _vm._s(_vm.selectedFile.mimeType))]) : _vm._e()]), _vm._v(" "), _c("button", {
    staticClass: "file-selector__preview-btn",
    on: {
      click: function ($event) {
        return _vm.confirmSelection(_vm.selectedFile);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-check"
  }), _vm._v(" Sélectionner\n                ")])])]) : _vm._e()]) : _c("div", {
    staticClass: "file-selector__loading"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin fa-2x"
  }), _vm._v(" "), _c("p", [_vm._v("Chargement...")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./assets/file-selector/file-selector.scss":
/*!*************************************************!*\
  !*** ./assets/file-selector/file-selector.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/file-selector/FileSelector.vue":
/*!***********************************************!*\
  !*** ./assets/file-selector/FileSelector.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& */ "./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&");
/* harmony import */ var _FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=script&lang=js& */ "./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileSelector_vue_vue_type_style_index_0_id_0027dfa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& */ "./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0027dfa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-selector/FileSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_template_id_0027dfa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=template&id=0027dfa8&scoped=true&");


/***/ }),

/***/ "./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelector_vue_vue_type_style_index_0_id_0027dfa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-selector/FileSelector.vue?vue&type=style&index=0&id=0027dfa8&lang=scss&scoped=true&");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js"], function() { return __webpack_exec__("./assets/file-selector/file-selector.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQ25DLENBQUMsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUl1QixlQUFlLEdBQUcsRUFBRTtBQUN4QjlCLE1BQU0sQ0FBQytCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7QUN6VDNCOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1RztBQUN2QztBQUNMO0FBQzNELENBQWlHOzs7QUFHakc7QUFDMEY7QUFDMUYsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsK0RBQWU7Ozs7Ozs7Ozs7OztBQ3ZDcUwsQ0FBQywrREFBZSx1TUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9maWxlLWljb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLXNlbGVjdG9yL2ZpbGUtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvRmlsZVNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9maWxlLXNlbGVjdG9yLnNjc3M/MDk4ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9GaWxlU2VsZWN0b3IudnVlPzAwZjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvRmlsZVNlbGVjdG9yLnZ1ZT9lODg0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWU/MDUyZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1zZWxlY3Rvci9GaWxlU2VsZWN0b3IudnVlPzYyMzciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtc2VsZWN0b3IvRmlsZVNlbGVjdG9yLnZ1ZT9mZmQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVdGlsaXRhaXJlcyBwb3VyIGxhIGdlc3Rpb24gZGVzIGljw7RuZXMgZGUgZmljaGllcnNcclxuICovXHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGEgY2xhc3NlIGQnaWPDtG5lIEZvbnQgQXdlc29tZSBwb3VyIHVuIGZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIEZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENsYXNzZSBGb250IEF3ZXNvbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSWNvbihpdGVtKSB7XHJcbiAgICAvLyBEb3NzaWVyXHJcbiAgICBpZiAoaXRlbS50eXBlID09PSAnZm9sZGVyJykge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtZm9sZGVyJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcmNoaXZlc1xyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAnemlwJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3JhcicgfHwgaXRlbS5leHRlbnNpb24gPT09ICc3eicgfHwgaXRlbS5leHRlbnNpb24gPT09ICd0YXInIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnZ3onKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWFyY2hpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBERlxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAncGRmJyB8fCBpdGVtLmlzUGRmKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLXBkZic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9jdW1lbnRzIFdvcmRcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ2RvYycgfHwgaXRlbS5leHRlbnNpb24gPT09ICdkb2N4JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ29kdCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtd29yZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV1aWxsZXMgZGUgY2FsY3VsIEV4Y2VsXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd4bHMnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAneGxzeCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHMnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWV4Y2VsJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcsOpc2VudGF0aW9ucyBQb3dlclBvaW50XHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdwcHQnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAncHB0eCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHAnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLXBvd2VycG9pbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpY2hpZXJzIHRleHRlXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd0eHQnIHx8IGl0ZW0uaXNUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWFsdCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW1hZ2VzXHJcbiAgICBpZiAoaXRlbS5pc0ltYWdlIHx8IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdibXAnLCAnc3ZnJywgJ3dlYnAnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWltYWdlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWTDqW9zXHJcbiAgICBpZiAoaXRlbS5pc1ZpZGVvIHx8IFsnbXA0JywgJ2F2aScsICdtb3YnLCAnd212JywgJ2ZsdicsICdta3YnLCAnd2VibSddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtdmlkZW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1ZGlvXHJcbiAgICBpZiAoWydtcDMnLCAnd2F2JywgJ29nZycsICdmbGFjJywgJ2FhYycsICdtNGEnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtYXVkaW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvZGVcclxuICAgIGlmIChbJ2h0bWwnLCAnY3NzJywgJ2pzJywgJ3BocCcsICdweScsICdqYXZhJywgJ2NwcCcsICdjJywgJ2gnLCAnanNvbicsICd4bWwnLCAneW1sJywgJ3lhbWwnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtY29kZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmljaGllciBnw6luw6lyaXF1ZVxyXG4gICAgcmV0dXJuICdmYSBmYS1maWxlJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxhIGNsYXNzZSBDU1MgcG91ciBjb2xvcmVyIGwnaWPDtG5lIHNlbG9uIGxlIHR5cGUgZGUgZmljaGllclxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIEZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENsYXNzZSBDU1NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSWNvbkNsYXNzKGl0ZW0pIHtcclxuICAgIC8vIERvc3NpZXJcclxuICAgIGlmIChpdGVtLnR5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWZvbGRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXJjaGl2ZXNcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3ppcCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdyYXInIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnN3onIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAndGFyJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ2d6Jykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1hcmNoaXZlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQREZcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3BkZicgfHwgaXRlbS5pc1BkZikge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1wZGYnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvY3VtZW50cyBXb3JkXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdkb2MnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnZG9jeCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHQnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLXdvcmQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldWlsbGVzIGRlIGNhbGN1bCBFeGNlbFxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAneGxzJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3hsc3gnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnb2RzJykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1leGNlbCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHLDqXNlbnRhdGlvbnMgUG93ZXJQb2ludFxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAncHB0JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3BwdHgnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnb2RwJykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1wb3dlcnBvaW50JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWNoaWVycyB0ZXh0ZVxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAndHh0JyB8fCBpdGVtLmlzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS10ZXh0JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbWFnZXNcclxuICAgIGlmIChpdGVtLmlzSW1hZ2UgfHwgWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCcsICdzdmcnLCAnd2VicCddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1pbWFnZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlkw6lvc1xyXG4gICAgaWYgKGl0ZW0uaXNWaWRlbyB8fCBbJ21wNCcsICdhdmknLCAnbW92JywgJ3dtdicsICdmbHYnLCAnbWt2JywgJ3dlYm0nXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tdmlkZW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1ZGlvXHJcbiAgICBpZiAoWydtcDMnLCAnd2F2JywgJ29nZycsICdmbGFjJywgJ2FhYycsICdtNGEnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tYXVkaW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvZGVcclxuICAgIGlmIChbJ2h0bWwnLCAnY3NzJywgJ2pzJywgJ3BocCcsICdweScsICdqYXZhJywgJ2NwcCcsICdjJywgJ2gnLCAnanNvbicsICd4bWwnLCAneW1sJywgJ3lhbWwnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tY29kZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmljaGllciBnw6luw6lyaXF1ZVxyXG4gICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWZpbGUnO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBGaWxlU2VsZWN0b3IgZnJvbSAnLi9GaWxlU2VsZWN0b3IudnVlJztcclxuaW1wb3J0ICcuL2ZpbGUtc2VsZWN0b3Iuc2Nzcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgYXBwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlLXNlbGVjdG9yLWFwcCcpO1xyXG4gICAgXHJcbiAgICBpZiAoIWFwcEVsZW1lbnQpIHJldHVybjtcclxuICAgIFxyXG4gICAgLy8gR2V0IENTUkYgdG9rZW5cclxuICAgIGNvbnN0IGNzcmZUb2tlbiA9IHdpbmRvdy5GSUxFX1NFTEVDVE9SX0NTUkZfVE9LRU4gfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcHBFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi10b2tlbicpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgJyc7XHJcblxyXG4gICAgaWYgKCFjc3JmVG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZCBmb3IgZmlsZSBzZWxlY3RvciEnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgICAgICBlbDogJyNmaWxlLXNlbGVjdG9yLWFwcCcsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBGaWxlU2VsZWN0b3JcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjc3JmVG9rZW46IGNzcmZUb2tlblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8RmlsZVNlbGVjdG9yIDpjc3JmLXRva2VuPVwiY3NyZlRva2VuXCIgLz4nXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3RvclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX190b29sYmFyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY3VycmVudEZvbGRlclwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJnb0JhY2tcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19idG5cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvaT4gUmV0b3VyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2JyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cImxvYWRSb290XCIgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19icmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhvbWVcIj48L2k+IEFjY3VlaWxcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmb2xkZXIsIGluZGV4KSBpbiBicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibmF2aWdhdGVUb0ZvbGRlcihmb2xkZXIuaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19icmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZm9sZGVyLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hRdWVyeVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIuLi5cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19zZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgQGlucHV0PVwiaGFuZGxlU2VhcmNoXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX21haW5cIiB2LWlmPVwiIWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2NvbnRlbnRcIiBcclxuICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVDb250ZW50Q2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZvbGRlcnMubGVuZ3RoID09PSAwICYmIGZpbGVzLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19lbXB0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9wZW4gZmEtM3hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXVjdW4gZmljaGllciB0cm91dsOpPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRG9zc2llcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJmb2xkZXIgaW4gZm9sZGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCInZm9sZGVyLScgKyBmb2xkZXIuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2l0ZW0gZmlsZS1zZWxlY3Rvcl9faXRlbS0tZm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnN0b3A9XCJuYXZpZ2F0ZVRvRm9sZGVyKGZvbGRlci5pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2ljb25cIiA6Y2xhc3M9XCJnZXRGaWxlSWNvbkNsYXNzKHsgLi4uZm9sZGVyLCB0eXBlOiAnZm9sZGVyJyB9KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZ2V0RmlsZUljb24oeyAuLi5mb2xkZXIsIHR5cGU6ICdmb2xkZXInIH0pXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX25hbWVcIj57eyBmb2xkZXIubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRmljaGllcnMgKGltYWdlcyB1bmlxdWVtZW50KSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImZpbGUgaW4gZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiJ2ZpbGUtJyArIGZpbGUuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX2l0ZW0gZmlsZS1zZWxlY3Rvcl9faXRlbS0tZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZmlsZS1zZWxlY3Rvcl9faXRlbS0tc2VsZWN0ZWQnOiBzZWxlY3RlZEZpbGUgJiYgc2VsZWN0ZWRGaWxlLmlkID09PSBmaWxlLmlkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwic2VsZWN0RmlsZShmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkYmxjbGljay5zdG9wPVwiY29uZmlybVNlbGVjdGlvbihmaWxlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9faWNvblwiIDpjbGFzcz1cImdldEZpbGVJY29uQ2xhc3MoeyAuLi5maWxlLCB0eXBlOiAnZmlsZScgfSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImdldEZpbGVJY29uKHsgLi4uZmlsZSwgdHlwZTogJ2ZpbGUnIH0pXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX25hbWVcIj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3NpemVcIj57eyBmb3JtYXRTaXplKGZpbGUuc2l6ZSkgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gVmlzaW9ubmV1c2Ugw6AgZHJvaXRlIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZEZpbGVcIiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57eyBzZWxlY3RlZEZpbGUubmFtZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZWxlY3RlZEZpbGUgPSBudWxsXCIgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWNsb3NlXCIgdGl0bGU9XCJGZXJtZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkRmlsZS5pc0ltYWdlXCIgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImdldEZpbGVQcmV2aWV3VXJsKHNlbGVjdGVkRmlsZS5pZClcIiA6YWx0PVwic2VsZWN0ZWRGaWxlLm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJbZ2V0RmlsZUljb24oeyAuLi5zZWxlY3RlZEZpbGUsIHR5cGU6ICdmaWxlJyB9KSwgZ2V0RmlsZUljb25DbGFzcyh7IC4uLnNlbGVjdGVkRmlsZSwgdHlwZTogJ2ZpbGUnIH0pXVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1tZXNzYWdlXCI+QXBlcsOndSBub24gZGlzcG9uaWJsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctbWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+VGFpbGxlOjwvc3Ryb25nPiB7eyBmb3JtYXRTaXplKHNlbGVjdGVkRmlsZS5zaXplKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZEZpbGUubWltZVR5cGVcIj48c3Ryb25nPlR5cGU6PC9zdHJvbmc+IHt7IHNlbGVjdGVkRmlsZS5taW1lVHlwZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY29uZmlybVNlbGVjdGlvbihzZWxlY3RlZEZpbGUpXCIgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPiBTw6lsZWN0aW9ubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJmaWxlLXNlbGVjdG9yX19sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTJ4XCI+PC9pPlxyXG4gICAgICAgICAgICA8cD5DaGFyZ2VtZW50Li4uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBnZXRGaWxlSWNvbiwgZ2V0RmlsZUljb25DbGFzcyB9IGZyb20gJy4uL2ZpbGUtbWFuYWdlci9maWxlLWljb25zLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdGaWxlU2VsZWN0b3InLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjc3JmVG9rZW46IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjY2VwdGVkVHlwZXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjdXJyZW50Rm9sZGVyOiBudWxsLFxyXG4gICAgICAgICAgICBmb2xkZXJzOiBbXSxcclxuICAgICAgICAgICAgZmlsZXM6IFtdLFxyXG4gICAgICAgICAgICBicmVhZGNydW1iOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoUXVlcnk6ICcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGU6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAvLyBQbHVzIGJlc29pbiBkZSBjb21wdXRlZCBwcm9wZXJ0aWVzLCBsYSByZWNoZXJjaGUgc2UgZmFpdCBjw7R0w6kgQVBJXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRSb290KCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldEZpbGVJY29uLFxyXG4gICAgICAgIGdldEZpbGVJY29uQ2xhc3MoaXRlbSkge1xyXG4gICAgICAgICAgICAvLyBNYXBwZXIgbGVzIGNsYXNzZXMgZHUgZmlsZS1tYW5hZ2VyIHZlcnMgbGVzIGNsYXNzZXMgZHUgZmlsZS1zZWxlY3RvclxyXG4gICAgICAgICAgICBjb25zdCBiYXNlQ2xhc3MgPSBnZXRGaWxlSWNvbkNsYXNzKGl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZUNsYXNzLnJlcGxhY2UoJ2ZpbGUtaXRlbV9faWNvbi0tJywgJ2ZpbGUtc2VsZWN0b3JfX2ljb24tLScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgbG9hZFJvb3QoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYiA9IFtdO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRGb2xkZXIobnVsbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBsb2FkRm9sZGVyKGZvbGRlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVdGlsaXNlciBsYSByb3V0ZSAvYXBpL2ZpbGVzIGF2ZWMgbGUgcGFyYW3DqHRyZSBmb2xkZXJJZFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZm9sZGVySWQgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgL2FwaS9maWxlcz9mb2xkZXJJZD0ke2ZvbGRlcklkfWBcclxuICAgICAgICAgICAgICAgICAgICA6ICcvYXBpL2ZpbGVzJztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRva2VuJzogdGhpcy5jc3JmVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSBkYXRhLmZvbGRlcnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZpbHRyZXIgbGVzIGZpY2hpZXJzIHNlbG9uIGxlcyB0eXBlcyBhY2NlcHTDqXNcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlc1RvU2hvdyA9IGRhdGEuZmlsZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY2NlcHRlZFR5cGVzICYmIHRoaXMuYWNjZXB0ZWRUeXBlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXNUb1Nob3cgPSBmaWxlc1RvU2hvdy5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsZS5taW1lVHlwZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NlcHRlZFR5cGVzLnNvbWUoYWNjZXB0ZWRUeXBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZFR5cGUuZW5kc1dpdGgoJy8qJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaWxkY2FyZCBtYXRjaCAoZXg6IGltYWdlLyopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZVR5cGUgPSBhY2NlcHRlZFR5cGUuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLm1pbWVUeXBlLnN0YXJ0c1dpdGgoYmFzZVR5cGUgKyAnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUubWltZVR5cGUgPT09IGFjY2VwdGVkVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhciBkw6lmYXV0LCBuZSBnYXJkZXIgcXVlIGxlcyBpbWFnZXMgc2kgYXVjdW4gdHlwZSBhY2NlcHTDqSBuJ2VzdCBzcMOpY2lmacOpXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXNUb1Nob3cgPSBmaWxlc1RvU2hvdy5maWx0ZXIoZiA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5taW1lVHlwZSAmJiBmLm1pbWVUeXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9sZGVyID0gZGF0YS5jdXJyZW50Rm9sZGVyIHx8IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBkYXRhLmJyZWFkY3J1bWIgfHwgW107XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBkZSBjaGFyZ2VtZW50OicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyBmaWNoaWVycycpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIG5hdmlnYXRlVG9Gb2xkZXIoZm9sZGVySWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkRm9sZGVyKGZvbGRlcklkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdvQmFjaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEZvbGRlciAmJiB0aGlzLmN1cnJlbnRGb2xkZXIucGFyZW50Rm9sZGVySWQgIT09IG51bGwgJiYgdGhpcy5jdXJyZW50Rm9sZGVyLnBhcmVudEZvbGRlcklkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEFsbGVyIGF1IGRvc3NpZXIgcGFyZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9Gb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyLnBhcmVudEZvbGRlcklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldG91ciDDoCBsYSByYWNpbmVcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJvb3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0RmlsZVByZXZpZXdVcmwoZmlsZUlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgL2FwaS9maWxlcy8ke2ZpbGVJZH0vcHJldmlld2A7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVJbWFnZUVycm9yKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIFNpIGwnaW1hZ2UgbmUgY2hhcmdlIHBhcywgYWZmaWNoZXIgdW5lIGljw7RuZSBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZS1zZWxlY3Rvcl9fZXJyb3ItaWNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtaW1hZ2UgZmlsZS1zZWxlY3Rvcl9fZXJyb3ItaWNvbic7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbGVjdEZpbGUoZmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IGZpbGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVDb250ZW50Q2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gU2kgb24gY2xpcXVlIHN1ciBsZSBjb250ZW51IChwYXMgc3VyIHVuIGl0ZW0pLCBkw6lzw6lsZWN0aW9ubmVyXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTaSBvbiBjbGlxdWUgZGlyZWN0ZW1lbnQgc3VyIGxlIGNvbnRlbmV1ciBjb250ZW50XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2kgb24gY2xpcXVlIHN1ciBsJ8OpbMOpbWVudCBlbXB0eVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5maWxlLXNlbGVjdG9yX19lbXB0eScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNpIG9uIGNsaXF1ZSBzdXIgbGEgZ3JpbGxlIG1haXMgcGFzIHN1ciB1biBpdGVtIChlc3BhY2UgZW50cmUgbGVzIGl0ZW1zKVxyXG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuZmlsZS1zZWxlY3Rvcl9faXRlbScpO1xyXG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbiBhIGNsaXF1w6kgc3VyIGxhIGdyaWxsZSBtYWlzIHBhcyBzdXIgdW4gaXRlbVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZCA9IHRhcmdldC5jbG9zZXN0KCcuZmlsZS1zZWxlY3Rvcl9fZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbmZpcm1TZWxlY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGUubWltZVR5cGUgfHwgIWZpbGUubWltZVR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdWZXVpbGxleiBzw6lsZWN0aW9ubmVyIHVuZSBpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBFbnZveWVyIGF1IHBhcmVudFxyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCAmJiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlbWFuYWdlci1zZWxlY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGZpbGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogZmlsZS5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogZmlsZS5taW1lVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgJyonKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlU2VhcmNoKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hRdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKHRoaXMuc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2kgbGEgcmVjaGVyY2hlIGVzdCB2aWRlLCByZWNoYXJnZXIgbGUgZG9zc2llciBhY3R1ZWxcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRGb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyLmlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUm9vdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBwZXJmb3JtU2VhcmNoKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlID0gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmNsdXJlIGxlIGRvc3NpZXIgY291cmFudCBkYW5zIGxhIHJlY2hlcmNoZSBzaSBvbiBlc3QgZGFucyB1biBkb3NzaWVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJJZCA9IHRoaXMuY3VycmVudEZvbGRlcj8uaWQgfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9sZGVySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCdmb2xkZXJJZCcsIGZvbGRlcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy9zZWFyY2g/JHtwYXJhbXMudG9TdHJpbmcoKX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRva2VuJzogdGhpcy5jc3JmVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBGaWx0cmVyIGxlcyBmaWNoaWVycyBzZWxvbiBsZXMgdHlwZXMgYWNjZXB0w6lzXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZXNUb1Nob3cgPSBkYXRhLmZpbGVzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRUeXBlcyAmJiB0aGlzLmFjY2VwdGVkVHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzVG9TaG93ID0gZmlsZXNUb1Nob3cuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGUubWltZVR5cGUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXB0ZWRUeXBlcy5zb21lKGFjY2VwdGVkVHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXB0ZWRUeXBlLmVuZHNXaXRoKCcvKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2lsZGNhcmQgbWF0Y2ggKGV4OiBpbWFnZS8qKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VUeXBlID0gYWNjZXB0ZWRUeXBlLnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZS5taW1lVHlwZS5zdGFydHNXaXRoKGJhc2VUeXBlICsgJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLm1pbWVUeXBlID09PSBhY2NlcHRlZFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQYXIgZMOpZmF1dCwgbmUgZ2FyZGVyIHF1ZSBsZXMgaW1hZ2VzIHNpIGF1Y3VuIHR5cGUgYWNjZXB0w6kgbidlc3Qgc3DDqWNpZmnDqVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzVG9TaG93ID0gZmlsZXNUb1Nob3cuZmlsdGVyKGYgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubWltZVR5cGUgJiYgZi5taW1lVHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IGRhdGEuZm9sZGVycyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlc1RvU2hvdztcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGRlIHJlY2hlcmNoZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZGUgbGEgcmVjaGVyY2hlJyk7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybWF0U2l6ZShieXRlcykge1xyXG4gICAgICAgICAgICBpZiAoIWJ5dGVzKSByZXR1cm4gJzAgQic7XHJcbiAgICAgICAgICAgIGNvbnN0IGsgPSAxMDI0O1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IFsnQicsICdLQicsICdNQicsICdHQiddO1xyXG4gICAgICAgICAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkgKiAxMDApIC8gMTAwICsgJyAnICsgc2l6ZXNbaV07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uZmlsZS1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBcclxuICAgICZfX3Rvb2xiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTVlOTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDIwNDM7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAxYTM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19icmVhZGNydW1iIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgICAgICBcclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOGYwZmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMjA0MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMjA0MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX21haW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fZW1wdHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbG9hZGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAyMDQzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwMjA0MztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4ZjBmZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tZmlsZTphY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTdHlsZXMgcG91ciBsZXMgZGlmZsOpcmVudHMgdHlwZXMgZGUgZmljaGllcnMgKGNvcGnDqXMgZHUgZmlsZS1tYW5hZ2VyKVxyXG4gICAgICAgICYtLWZvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmJiYzA0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZiYmMwNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1hcmNoaXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4YjQ1MTM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOGI0NTEzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLXBkZiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDMyZjJmO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2QzMmYyZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS13b3JkIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyYjU3OWE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmI1NzlhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWV4Y2VsIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxZDZmNDI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWQ2ZjQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLXBvd2VycG9pbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2QwNDQyMztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkMDQ0MjM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi0tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDI4NWY0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyODVmNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS12aWRlbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWMyN2IwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzljMjdiMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1hdWRpbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmOTgwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLS1jb2RlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNDQzMzY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICYtLWZpbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX25hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICBjb2xvcjogIzIwMjEyNDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fc2l6ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UxZTVlOTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMC4zcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1jbG9zZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjAyMTI0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19wcmV2aWV3LW1lc3NhZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfX3ByZXZpZXctbWV0YSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fcHJldmlldy1idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMjA0MztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAxYTM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcblxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fdG9vbGJhclwiIH0sIFtcbiAgICAgIF92bS5jdXJyZW50Rm9sZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19idG5cIiwgb246IHsgY2xpY2s6IF92bS5nb0JhY2sgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hcnJvdy1sZWZ0XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBSZXRvdXJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fYnJlYWRjcnVtYlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19icmVhZGNydW1iLWl0ZW1cIixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2FkUm9vdCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaG9tZVwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgQWNjdWVpbFxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5icmVhZGNydW1iLCBmdW5jdGlvbiAoZm9sZGVyLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hldnJvbi1yaWdodFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19icmVhZGNydW1iLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZVRvRm9sZGVyKGZvbGRlci5pZClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZvbGRlci5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaFF1ZXJ5LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hRdWVyeVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3NlYXJjaFwiLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUmVjaGVyY2hlci4uLlwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoUXVlcnkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICBfdm0uc2VhcmNoUXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLmhhbmRsZVNlYXJjaCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICAhX3ZtLmxvYWRpbmdcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19tYWluXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fY29udGVudFwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUNvbnRlbnRDbGljayB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmZvbGRlcnMubGVuZ3RoID09PSAwICYmIF92bS5maWxlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fZW1wdHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZvbGRlci1vcGVuIGZhLTN4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXVjdW4gZmljaGllciB0cm91dsOpXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fZ3JpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJmb2xkZXItXCIgKyBmb2xkZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtc2VsZWN0b3JfX2l0ZW0gZmlsZS1zZWxlY3Rvcl9faXRlbS0tZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlVG9Gb2xkZXIoZm9sZGVyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb25DbGFzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldEZpbGVJY29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX25hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZvbGRlci5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZmlsZS1cIiArIGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtc2VsZWN0b3JfX2l0ZW0gZmlsZS1zZWxlY3Rvcl9faXRlbS0tZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtc2VsZWN0b3JfX2l0ZW0tLXNlbGVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmlsZS5pZCA9PT0gZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RGaWxlKGZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29uZmlybVNlbGVjdGlvbihmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb25DbGFzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fc2l6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmZvcm1hdFNpemUoZmlsZS5zaXplKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5zZWxlY3RlZEZpbGVcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZWxlY3RlZEZpbGUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRmVybWVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkRmlsZSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRGaWxlLmlzSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctaW1hZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldEZpbGVQcmV2aWV3VXJsKF92bS5zZWxlY3RlZEZpbGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0uc2VsZWN0ZWRGaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zZWxlY3Rvcl9fcHJldmlldy1pbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctaWNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0RmlsZUljb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnNlbGVjdGVkRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRGaWxlSWNvbkNsYXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5zZWxlY3RlZEZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LW1lc3NhZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBcGVyw6d1IG5vbiBkaXNwb25pYmxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXNlbGVjdG9yX19wcmV2aWV3LW1ldGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiVGFpbGxlOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS5mb3JtYXRTaXplKF92bS5zZWxlY3RlZEZpbGUuc2l6ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZEZpbGUubWltZVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIlR5cGU6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uc2VsZWN0ZWRGaWxlLm1pbWVUeXBlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX3ByZXZpZXctYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29uZmlybVNlbGVjdGlvbihfdm0uc2VsZWN0ZWRGaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hlY2tcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgU8OpbGVjdGlvbm5lclxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdKVxuICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2VsZWN0b3JfX2xvYWRpbmdcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTJ4XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkNoYXJnZW1lbnQuLi5cIildKSxcbiAgICAgICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWxlU2VsZWN0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAwMjdkZmE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmlsZVNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAwMjdkZmE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDAyN2RmYThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDAyN2RmYTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDAyN2RmYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDAyN2RmYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAyN2RmYTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDAyN2RmYTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLXNlbGVjdG9yL0ZpbGVTZWxlY3Rvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDAyN2RmYTgmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtMTMudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xMy51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMDI3ZGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiXSwibmFtZXMiOlsiZ2V0RmlsZUljb24iLCJpdGVtIiwidHlwZSIsImV4dGVuc2lvbiIsImlzUGRmIiwiaXNUZXh0IiwiaXNJbWFnZSIsImluY2x1ZGVzIiwiaXNWaWRlbyIsImdldEZpbGVJY29uQ2xhc3MiLCJWdWUiLCJGaWxlU2VsZWN0b3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3JmVG9rZW4iLCJ3aW5kb3ciLCJGSUxFX1NFTEVDVE9SX0NTUkZfVE9LRU4iLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHAiLCJlbCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGVtcGxhdGUiLCJuYW1lIiwicHJvcHMiLCJTdHJpbmciLCJyZXF1aXJlZCIsImFjY2VwdGVkVHlwZXMiLCJBcnJheSIsImRlZmF1bHQiLCJjdXJyZW50Rm9sZGVyIiwiZm9sZGVycyIsImZpbGVzIiwiYnJlYWRjcnVtYiIsInNlYXJjaFF1ZXJ5Iiwic2VsZWN0ZWRGaWxlIiwibG9hZGluZyIsImNvbXB1dGVkIiwibW91bnRlZCIsImxvYWRSb290IiwibWV0aG9kcyIsImJhc2VDbGFzcyIsInJlcGxhY2UiLCJsb2FkRm9sZGVyIiwiZm9sZGVySWQiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZmlsZXNUb1Nob3ciLCJsZW5ndGgiLCJmaWx0ZXIiLCJmaWxlIiwibWltZVR5cGUiLCJzb21lIiwiYWNjZXB0ZWRUeXBlIiwiZW5kc1dpdGgiLCJiYXNlVHlwZSIsInNsaWNlIiwic3RhcnRzV2l0aCIsImYiLCJhbGVydCIsIm5hdmlnYXRlVG9Gb2xkZXIiLCJnb0JhY2siLCJwYXJlbnRGb2xkZXJJZCIsInVuZGVmaW5lZCIsImdldEZpbGVQcmV2aWV3VXJsIiwiZmlsZUlkIiwiaGFuZGxlSW1hZ2VFcnJvciIsImV2ZW50IiwidGFyZ2V0Iiwic3R5bGUiLCJkaXNwbGF5IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwic2VsZWN0RmlsZSIsImhhbmRsZUNvbnRlbnRDbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiY2xpY2tlZEl0ZW0iLCJncmlkIiwiY29uZmlybVNlbGVjdGlvbiIsInBvc3RNZXNzYWdlIiwiaWQiLCJwYXRoIiwic2l6ZSIsImhhbmRsZVNlYXJjaCIsInBlcmZvcm1TZWFyY2giLCJxdWVyeSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInEiLCJhcHBlbmQiLCJ0b1N0cmluZyIsImZvcm1hdFNpemUiLCJieXRlcyIsImsiLCJzaXplcyIsImkiLCJNYXRoIiwiZmxvb3IiLCJsb2ciLCJyb3VuZCIsInBvdyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIm9uIiwiY2xpY2siLCJfdiIsIl9lIiwiX2wiLCJmb2xkZXIiLCJpbmRleCIsIiRldmVudCIsIl9zIiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJhdHRycyIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJpbnB1dCIsImNvbXBvc2luZyIsImtleSIsInN0b3BQcm9wYWdhdGlvbiIsImNsYXNzIiwiZGJsY2xpY2siLCJ0aXRsZSIsInNyYyIsImFsdCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9