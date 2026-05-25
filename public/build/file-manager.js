"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["file-manager"],{

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

/***/ "./assets/file-manager/file-manager.js":
/*!*********************************************!*\
  !*** ./assets/file-manager/file-manager.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_FileManager_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FileManager.vue */ "./assets/file-manager/components/FileManager.vue");
/* harmony import */ var _file_manager_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-manager.scss */ "./assets/file-manager/file-manager.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var selectize_dist_css_selectize_bootstrap3_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! selectize/dist/css/selectize.bootstrap3.css */ "./node_modules/selectize/dist/css/selectize.bootstrap3.css");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




// Import jQuery explicitly to ensure it's available globally

window.$ = __webpack_provided_window_dot_jQuery = (jquery__WEBPACK_IMPORTED_MODULE_2___default());

// Import SelectizeJS CSS


// Import SelectizeJS standalone version (includes jQuery dependency handling)
__webpack_require__(/*! selectize/dist/js/standalone/selectize.min.js */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('file-manager-app');

  // Get CSRF token from window or data attribute
  const csrfToken = window.FILE_MANAGER_CSRF_TOKEN || appElement?.getAttribute('data-csrf-token') || '';
  if (!csrfToken) {
    console.error('CSRF token not found! API requests will fail.');
  }
  const app = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
    el: '#file-manager-app',
    components: {
      FileManager: _components_FileManager_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    data() {
      return {
        csrfToken: csrfToken
      };
    },
    template: '<FileManager :csrf-token="csrfToken" />'
  });
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    title: {
      type: String,
      default: 'Confirmation'
    },
    message: {
      type: String,
      required: true
    },
    subMessage: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'confirm',
      // 'confirm', 'danger', 'warning', 'error'
      validator: value => ['confirm', 'danger', 'warning', 'error'].includes(value)
    },
    confirmText: {
      type: String,
      default: 'Confirmer'
    },
    cancelText: {
      type: String,
      default: 'Annuler'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    confirmButtonClass() {
      if (this.type === 'danger' || this.type === 'error') {
        return 'btn-danger';
      }
      if (this.type === 'warning') {
        return 'btn-warning';
      }
      return 'btn-primary';
    }
  },
  methods: {
    handleConfirm() {
      if (!this.loading) {
        this.$emit('confirm');
      }
    },
    handleCancel() {
      if (!this.loading) {
        this.$emit('cancel');
      }
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && !this.loading) {
        this.handleCancel();
      }
    }
  },
  mounted() {
    // Close on Escape key
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: null
    },
    position: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0
      })
    },
    currentView: {
      type: String,
      default: 'home'
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuStyle() {
      return {
        left: `${this.position.x}px`,
        top: `${this.position.y}px`
      };
    }
  },
  methods: {
    handleOpen() {
      this.$emit('open', this.item);
      this.$emit('close');
    },
    handleRename() {
      this.$emit('rename', this.item);
      this.$emit('close');
    },
    handleDelete() {
      this.$emit('delete', this.item);
      this.$emit('close');
    },
    handleRestore() {
      this.$emit('restore', this.item);
      this.$emit('close');
    },
    handlePermanentDelete() {
      this.$emit('permanent-delete', this.item);
      this.$emit('close');
    },
    handlePermissions() {
      this.$emit('permissions', this.item);
      this.$emit('close');
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.$emit('close');
      }
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    parentFolderId: {
      type: Number,
      default: null
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      folderName: '',
      permissions: [],
      searchTimeout: null,
      availableRoles: [],
      availableGroups: []
    };
  },
  computed: {
    canCreate() {
      return this.folderName.trim().length > 0;
    }
  },
  watch: {
    permissions: {
      handler(newPerms) {
        // Only initialize SelectizeJS if user is admin
        if (!this.isAdmin) {
          return;
        }

        // Initialize SelectizeJS for new user permissions
        this.$nextTick(() => {
          newPerms.forEach((perm, idx) => {
            if (perm.type === 'user' && !perm.selectizeInstance) {
              this.initSelectize(idx);
            } else if (perm.type !== 'user' && perm.selectizeInstance) {
              // Destroy SelectizeJS if type changes from user to role
              perm.selectizeInstance.destroy();
              perm.selectizeInstance = null;
            }
          });
        });
      },
      deep: true
    }
  },
  mounted() {
    // Load available roles and groups only if user is admin (non-blocking)
    if (this.isAdmin) {
      // Use setTimeout to make it non-blocking
      setTimeout(() => {
        this.loadRoles().catch(() => {
          // Silently fail
          this.availableRoles = [];
        });
        this.loadGroups().catch(() => {
          // Silently fail
          this.availableGroups = [];
        });
      }, 0);
    }
    this.$nextTick(() => {
      if (this.$refs.nameInput) {
        this.$refs.nameInput.focus();
      }
    });
  },
  beforeDestroy() {
    // Destroy all SelectizeJS instances
    this.permissions.forEach(permission => {
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }
    });
  },
  methods: {
    /**
     * Helper method to get fetch headers with CSRF token
     */
    getCsrfHeaders() {
      return {
        'X-CSRF-Token': this.csrfToken
      };
    },
    /**
     * Helper method to add CSRF token to fetch options
     */
    addCsrfToFetchOptions() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ...options,
        headers: {
          ...this.getCsrfHeaders(),
          ...(options.headers || {})
        }
      };
    },
    async loadRoles() {
      try {
        const response = await fetch('/api/roles', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableRoles = data.roles || [];
        }
      } catch (error) {
        console.error('Error loading roles:', error);
        // Fallback to default roles if API fails
        this.availableRoles = [{
          value: 'ROLE_USER',
          label: 'User'
        }, {
          value: 'ROLE_TECHNICIEN',
          label: 'Technicien'
        }, {
          value: 'ROLE_ADMIN',
          label: 'Admin'
        }];
      }
    },
    async loadGroups() {
      try {
        const response = await fetch('/api/groups', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableGroups = data.groups || [];
        }
      } catch (error) {
        console.error('Error loading groups:', error);
        this.availableGroups = [];
      }
    },
    addPermission() {
      const index = this.permissions.length;
      this.permissions.push({
        type: 'user',
        userIds: [],
        // Array of user IDs for multiple selection
        role: null,
        groupId: null,
        selectizeInstance: null
      });

      // Initialize SelectizeJS after Vue has rendered
      this.$nextTick(() => {
        this.initSelectize(index);
      });
    },
    removePermission(index) {
      const permission = this.permissions[index];
      // Destroy SelectizeJS instance if it exists
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }
      this.permissions.splice(index, 1);

      // Reinitialize SelectizeJS for remaining permissions
      this.$nextTick(() => {
        this.permissions.forEach((perm, idx) => {
          if (perm.type === 'user' && !perm.selectizeInstance) {
            this.initSelectize(idx);
          }
        });
      });
    },
    initSelectize(index) {
      const permission = this.permissions[index];
      if (!permission || permission.type !== 'user') {
        return;
      }
      const selectElement = this.$refs[`userSelect-${index}`];
      if (!selectElement) {
        // Retry if element not rendered yet
        setTimeout(() => this.initSelectize(index), 100);
        return;
      }

      // Check if jQuery and SelectizeJS are available
      if (typeof window.$ === 'undefined' || !window.$.fn.selectize) {
        console.warn('SelectizeJS not loaded yet, retrying...');
        setTimeout(() => this.initSelectize(index), 100);
        return;
      }

      // Destroy existing instance if any
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }

      // Initialize SelectizeJS
      try {
        const selectize = window.$(selectElement).selectize({
          plugins: ['remove_button'],
          valueField: 'id',
          labelField: 'name',
          searchField: ['name', 'email'],
          create: false,
          maxItems: null,
          // No limit
          dropdownParent: 'body',
          // Attach dropdown to body to avoid scroll issues
          load: (query, callback) => {
            fetch(`/api/users/search?q=${encodeURIComponent(query)}&limit=20`, this.addCsrfToFetchOptions()).then(response => response.json()).then(data => {
              if (data.users) {
                callback(data.users.map(user => ({
                  id: user.id,
                  name: `${user.name} (${user.email})`,
                  email: user.email
                })));
              } else {
                callback();
              }
            }).catch(() => callback());
          },
          onChange: value => {
            // SelectizeJS with multiple can return either an array or a comma-separated string
            if (Array.isArray(value)) {
              permission.userIds = value;
            } else if (typeof value === 'string' && value.length > 0) {
              permission.userIds = value.split(',');
            } else {
              permission.userIds = [];
            }
          }
        });
        permission.selectizeInstance = selectize[0].selectize;
      } catch (error) {
        console.error('Error initializing SelectizeJS:', error);
      }
    },
    async createFolder() {
      if (!this.canCreate) {
        return;
      }
      try {
        // First create the folder
        const response = await fetch('/api/files/folders', this.addCsrfToFetchOptions({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.folderName,
            parentFolderId: this.parentFolderId
          })
        }));
        const data = await response.json();
        if (!response.ok) {
          alert('Erreur: ' + (data.error || 'Impossible de créer le dossier'));
          return;
        }

        // Ensure folderId is a valid number
        const folderId = data.folder?.id;
        if (!folderId || isNaN(Number(folderId))) {
          console.error('Invalid folder ID received:', data.folder);
          alert('Erreur: ID de dossier invalide reçu');
          return;
        }

        // Then add permissions if any and user is admin
        if (this.isAdmin && this.permissions.length > 0) {
          const permissionErrors = [];
          for (const perm of this.permissions) {
            try {
              if (perm.type === 'user' && perm.userIds && perm.userIds.length > 0) {
                // Create one permission per selected user
                for (const userId of perm.userIds) {
                  await this.sendPermissionToServer(folderId, {
                    type: 'folder',
                    userId: userId
                  });
                }
              } else if (perm.type === 'role' && perm.role) {
                await this.sendPermissionToServer(folderId, {
                  type: 'folder',
                  role: perm.role
                });
              } else if (perm.type === 'group' && perm.groupId) {
                await this.sendPermissionToServer(folderId, {
                  type: 'folder',
                  groupId: perm.groupId
                });
              }
            } catch (error) {
              console.error('Error adding permission:', error);
              permissionErrors.push(`Permission pour ${perm.type === 'user' ? 'utilisateur' : 'rôle'} non ajoutée`);
            }
          }
          if (permissionErrors.length > 0) {
            console.warn('Some permissions could not be added:', permissionErrors);
            // Don't fail the folder creation, just warn
          }
        }

        this.$emit('created', data.folder);
        this.$emit('close');
      } catch (error) {
        console.error('Error creating folder:', error);
        alert('Erreur lors de la création du dossier');
      }
    },
    async sendPermissionToServer(folderId, permissionData) {
      try {
        // Ensure folderId is a number
        const id = typeof folderId === 'number' ? folderId : Number(folderId);
        if (!id || isNaN(id)) {
          console.error('Invalid folder ID:', folderId);
          return;
        }
        const response = await fetch(`/api/files/${id}/permissions`, this.addCsrfToFetchOptions({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(permissionData)
        }));
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error adding permission:', errorData.error || 'Unknown error');
          throw new Error(errorData.error || 'Unknown error');
        }
      } catch (error) {
        console.error('Error adding permission:', error);
        throw error;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dragOverItemId: null
    };
  },
  methods: {
    handleDragOver(itemId, event) {
      // Check if we have dragged item data
      if (event.dataTransfer.types.includes('application/json')) {
        event.dataTransfer.dropEffect = 'move';
        this.dragOverItemId = itemId;
      }
    },
    handleDragLeave(itemId) {
      // Only clear if we're actually leaving the item
      setTimeout(() => {
        if (this.dragOverItemId === itemId) {
          this.dragOverItemId = null;
        }
      }, 50);
    },
    handleDrop(folder, event) {
      this.dragOverItemId = null;
      const draggedData = event.dataTransfer.getData('application/json');
      if (!draggedData) return;
      try {
        const dragged = JSON.parse(draggedData);

        // Don't allow dropping on itself if it's a folder
        if (folder && dragged.id === folder.id && dragged.type === 'folder') {
          return;
        }

        // Emit drop event to parent
        this.$emit('drop', {
          item: dragged,
          targetFolder: folder // null for root, folder object for parent folders
        });
      } catch (e) {
        console.error('Error parsing drag data:', e);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItem.vue */ "./assets/file-manager/components/FileItem.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileItem: _FileItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    files: {
      type: Array,
      default: () => []
    },
    folders: {
      type: Array,
      default: () => []
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lastClickTime: 0,
      lastClickItem: null,
      clickTimeout: null,
      dragOverFolderId: null,
      draggedItem: null
    };
  },
  methods: {
    isSelected(item, type) {
      return this.selectedItems.some(i => i.id === item.id && i.type === type);
    },
    handleDragOver(folder, event) {
      // Only allow drop on folders
      if (folder.type !== 'folder') return;

      // Check if we have dragged item data (from dragstart event stored in parent)
      // We can't read dataTransfer.getData() during dragover, so we check types
      if (event.dataTransfer.types.includes('application/json')) {
        // Don't allow dropping on itself - we'll check this in drop handler
        event.dataTransfer.dropEffect = 'move';
        this.dragOverFolderId = folder.id;
      }
    },
    handleDragLeave(folder) {
      // Only clear if we're actually leaving the folder (not entering a child)
      setTimeout(() => {
        if (this.dragOverFolderId === folder.id) {
          this.dragOverFolderId = null;
        }
      }, 50);
    },
    handleDrop(folder, event) {
      this.dragOverFolderId = null;
      const draggedData = event.dataTransfer.getData('application/json');
      if (!draggedData) return;
      try {
        const dragged = JSON.parse(draggedData);

        // Don't allow dropping on itself
        if (dragged.id === folder.id && dragged.type === 'folder') {
          return;
        }

        // Emit drop event to parent
        this.$emit('drop', {
          item: dragged,
          targetFolder: folder
        });
      } catch (e) {
        console.error('Error parsing drag data:', e);
      }
    },
    handleClick(item, type, event) {
      // If Ctrl/Meta is pressed, emit immediately (no need to wait for double-click detection)
      if (event.ctrlKey || event.metaKey) {
        this.$emit('select', {
          ...item,
          type
        }, event);
        event.stopPropagation();
        return;
      }

      // Prevent single click if double click is detected
      const now = Date.now();
      const timeDiff = now - this.lastClickTime;
      if (this.lastClickItem && this.lastClickItem.id === item.id && this.lastClickItem.type === type && timeDiff < 300) {
        // Double click detected, cancel single click
        clearTimeout(this.clickTimeout);
        this.lastClickTime = 0;
        this.lastClickItem = null;
        return;
      }
      this.lastClickTime = now;
      this.lastClickItem = {
        id: item.id,
        type
      };

      // Delay single click to allow double click detection (only if Ctrl/Meta not pressed)
      this.clickTimeout = setTimeout(() => {
        this.$emit('select', {
          ...item,
          type
        }, event);
        this.lastClickTime = 0;
        this.lastClickItem = null;
      }, 300);

      // Stop propagation to prevent parent click handler from clearing selection
      event.stopPropagation();
    },
    handleDblClick(item, type) {
      // Cancel pending single click
      clearTimeout(this.clickTimeout);
      this.lastClickTime = 0;
      this.lastClickItem = null;
      this.$emit('open', {
        ...item,
        type
      });
    },
    handleMore(item, event) {
      // Emit context menu event with position
      if (event) {
        this.$emit('context-menu', {
          ...item
        }, event);
      } else {
        this.$emit('more', {
          ...item
        });
      }
    },
    handleContextMenu(item, event) {
      event.preventDefault();
      this.$emit('context-menu', {
        ...item
      }, event);
    },
    async toggleStar(item, type) {
      try {
        const response = await fetch(`/api/files/${item.id}/star?type=${type}`, {
          method: 'POST',
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        const data = await response.json();
        if (response.ok) {
          item.isStarred = data.starred;
        }
      } catch (error) {
        console.error('Error toggling star:', error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-icons.js */ "./assets/file-manager/file-icons.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDragging: false
    };
  },
  methods: {
    getFileIcon: _file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIcon,
    getFileIconClass: _file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIconClass,
    handleDragStart(event) {
      this.isDragging = true;
      // Store the dragged item data
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('application/json', JSON.stringify({
        id: this.item.id,
        type: this.item.type,
        name: this.item.name
      }));

      // Add visual feedback
      event.dataTransfer.setDragImage(event.target, 0, 0);
    },
    handleDragEnd() {
      this.isDragging = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-icons.js */ "./assets/file-manager/file-icons.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    files: {
      type: Array,
      default: () => []
    },
    folders: {
      type: Array,
      default: () => []
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lastClickTime: 0,
      lastClickItem: null,
      clickTimeout: null,
      dragOverFolderId: null,
      draggedItem: null,
      isDraggingFiles: false
    };
  },
  methods: {
    getFileIcon: _file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIcon,
    getFileIconClass: _file_icons_js__WEBPACK_IMPORTED_MODULE_0__.getFileIconClass,
    isSelected(item, type) {
      return this.selectedItems.some(i => i.id === item.id && i.type === type);
    },
    handleDragStart(item, type, event) {
      this.draggedItem = {
        id: item.id,
        type,
        name: item.name
      };
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('application/json', JSON.stringify({
        id: item.id,
        type: type,
        name: item.name
      }));
      // Stop propagation to prevent triggering file drag handlers
      event.stopPropagation();
    },
    handleDragEnd() {
      this.draggedItem = null;
    },
    handleDragOver(folder, event) {
      // Only allow drop on folders
      if (folder.type !== "folder") return;

      // Don't handle if files are being dragged from outside
      // Check if it's external files (Files type without application/json)
      if (event.dataTransfer.types.includes('Files') && !event.dataTransfer.types.includes('application/json')) {
        return;
      }

      // Check if we have dragged item data (from dragstart event stored in parent)
      // We can't read dataTransfer.getData() during dragover, so we check types
      if (event.dataTransfer.types.includes("application/json")) {
        // Don't allow dropping on itself - we'll check this in drop handler
        event.dataTransfer.dropEffect = "move";
        this.dragOverFolderId = folder.id;
        event.stopPropagation();
      }
    },
    handleDragLeave(folder) {
      // Only clear if we're actually leaving the folder (not entering a child)
      setTimeout(() => {
        if (this.dragOverFolderId === folder.id) {
          this.dragOverFolderId = null;
        }
      }, 50);
    },
    handleDrop(folder, event) {
      this.dragOverFolderId = null;

      // Don't handle if files are being dropped from outside
      // Check if it's external files (Files type without application/json)
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0 && !event.dataTransfer.types.includes('application/json')) {
        return;
      }
      const draggedData = event.dataTransfer.getData("application/json");
      if (!draggedData) return;
      try {
        const dragged = JSON.parse(draggedData);

        // Don't allow dropping on itself
        if (dragged.id === folder.id && dragged.type === "folder") {
          return;
        }

        // Emit drop event to parent
        this.$emit("drop", {
          item: dragged,
          targetFolder: folder
        });
        event.stopPropagation();
      } catch (e) {
        console.error("Error parsing drag data:", e);
      }
    },
    handleClick(item, type, event) {
      // If Ctrl/Meta is pressed, emit immediately (no need to wait for double-click detection)
      if (event.ctrlKey || event.metaKey) {
        this.$emit("select", {
          ...item,
          type
        }, event);
        event.stopPropagation();
        return;
      }

      // Prevent single click if double click is detected
      const now = Date.now();
      const timeDiff = now - this.lastClickTime;
      if (this.lastClickItem && this.lastClickItem.id === item.id && this.lastClickItem.type === type && timeDiff < 300) {
        // Double click detected, cancel single click
        clearTimeout(this.clickTimeout);
        this.lastClickTime = 0;
        this.lastClickItem = null;
        return;
      }
      this.lastClickTime = now;
      this.lastClickItem = {
        id: item.id,
        type
      };

      // Delay single click to allow double click detection (only if Ctrl/Meta not pressed)
      this.clickTimeout = setTimeout(() => {
        this.$emit("select", {
          ...item,
          type
        }, event);
        this.lastClickTime = 0;
        this.lastClickItem = null;
      }, 300);

      // Stop propagation to prevent parent click handler from clearing selection
      event.stopPropagation();
    },
    handleDblClick(item, type) {
      // Cancel pending single click
      clearTimeout(this.clickTimeout);
      this.lastClickTime = 0;
      this.lastClickItem = null;
      this.$emit("open", {
        ...item,
        type
      });
    },
    handleMore(item) {
      this.$emit("more", {
        ...item
      });
    },
    handleContextMenu(item, event) {
      this.$emit("context-menu", {
        ...item
      }, event);
    },
    async toggleStar(item, type) {
      try {
        const response = await fetch(`/api/files/${item.id}/star?type=${type}`, {
          method: "POST",
          headers: {
            'X-CSRF-Token': this.csrfToken
          }
        });
        const data = await response.json();
        if (response.ok) {
          item.isStarred = data.starred;
          // Emit event to parent to update the item in the list
          this.$emit("star-toggled", {
            ...item,
            type,
            isStarred: data.starred
          });
        }
      } catch (error) {
        console.error("Error toggling star:", error);
      }
    },
    formatDate(dateString) {
      if (!dateString) return "-";
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    },
    handleFileDragEnter(event) {
      // Check if files are being dragged from outside (not from within the app)
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.types.includes('Files') && !event.dataTransfer.types.includes('application/json')) {
        event.preventDefault();
        event.stopPropagation();
        this.isDraggingFiles = true;
      }
    },
    handleFileDragOver(event) {
      // Check if files are being dragged from outside
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.types.includes('Files') && !event.dataTransfer.types.includes('application/json')) {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
      }
    },
    handleFileDragLeave(event) {
      // Only clear if we're actually leaving the list container
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setTimeout(() => {
          this.isDraggingFiles = false;
        }, 50);
      }
    },
    handleFileDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDraggingFiles = false;

      // Check if files are being dropped from outside
      // Only handle if Files type is present but NOT application/json (internal drag)
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0 && !event.dataTransfer.types.includes('application/json')) {
        // Emit event to parent to open upload modal
        this.$emit('file-drop', {
          files: Array.from(event.dataTransfer.files)
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileSidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSidebar.vue */ "./assets/file-manager/components/FileSidebar.vue");
/* harmony import */ var _FileToolbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileToolbar.vue */ "./assets/file-manager/components/FileToolbar.vue");
/* harmony import */ var _FileBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileBreadcrumb.vue */ "./assets/file-manager/components/FileBreadcrumb.vue");
/* harmony import */ var _FileGrid_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileGrid.vue */ "./assets/file-manager/components/FileGrid.vue");
/* harmony import */ var _FileList_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileList.vue */ "./assets/file-manager/components/FileList.vue");
/* harmony import */ var _UploadModal_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UploadModal.vue */ "./assets/file-manager/components/UploadModal.vue");
/* harmony import */ var _CreateFolderModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateFolderModal.vue */ "./assets/file-manager/components/CreateFolderModal.vue");
/* harmony import */ var _FilePreview_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FilePreview.vue */ "./assets/file-manager/components/FilePreview.vue");
/* harmony import */ var _PermissionManager_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PermissionManager.vue */ "./assets/file-manager/components/PermissionManager.vue");
/* harmony import */ var _RenameModal_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RenameModal.vue */ "./assets/file-manager/components/RenameModal.vue");
/* harmony import */ var _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContextMenu.vue */ "./assets/file-manager/components/ContextMenu.vue");
/* harmony import */ var _ConfirmModal_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ConfirmModal.vue */ "./assets/file-manager/components/ConfirmModal.vue");













/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileSidebar: _FileSidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileToolbar: _FileToolbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileBreadcrumb: _FileBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileGrid: _FileGrid_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileList: _FileList_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    UploadModal: _UploadModal_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CreateFolderModal: _CreateFolderModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FilePreview: _FilePreview_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    PermissionManager: _PermissionManager_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    RenameModal: _RenameModal_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ContextMenu: _ContextMenu_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    ConfirmModal: _ConfirmModal_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  props: {
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentView: 'home',
      viewMode: localStorage.getItem('fileManagerViewMode') || 'grid',
      // 'grid' or 'list'
      currentFolder: null,
      files: [],
      folders: [],
      breadcrumb: [],
      selectedItems: [],
      loading: false,
      showUploader: false,
      showCreateFolder: false,
      previewFile: null,
      permissionResource: null,
      searchQuery: '',
      dragOverRoot: false,
      renameItem: null,
      droppedFiles: null,
      isAdmin: false,
      canUploadFile: true,
      canCreateFolder: true,
      maxFileSize: 104857600,
      // Valeur par défaut (100 MB), sera remplacée par l'API
      contextMenu: {
        visible: false,
        item: null,
        position: {
          x: 0,
          y: 0
        }
      },
      confirmModal: {
        visible: false,
        title: '',
        message: '',
        subMessage: null,
        type: 'confirm',
        confirmText: 'Confirmer',
        cancelText: 'Annuler',
        loading: false,
        onConfirm: null
      }
    };
  },
  watch: {
    viewMode(newMode) {
      // Sauvegarder le mode de vue dans le localStorage
      localStorage.setItem('fileManagerViewMode', newMode);
    }
  },
  mounted() {
    this.loadUserInfo();

    // Charger le dossier depuis l'URL si présent
    const urlParams = new URLSearchParams(window.location.search);
    const folderIdFromUrl = urlParams.get('folderId');
    const initialFolderId = folderIdFromUrl ? parseInt(folderIdFromUrl, 10) : null;

    // Initialiser l'état de l'historique pour l'URL actuelle
    window.history.replaceState({
      folderId: initialFolderId
    }, '', window.location.href);
    this.loadFolder(initialFolderId);

    // Écouter les changements d'historique (bouton retour/avant du navigateur)
    window.addEventListener('popstate', this.handlePopState);
  },
  beforeUnmount() {
    // Nettoyer l'écouteur d'événements
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    /**
     * Helper method to get fetch headers with CSRF token
     */
    getCsrfHeaders() {
      return {
        'X-CSRF-Token': this.csrfToken
      };
    },
    /**
     * Helper method to add CSRF token to fetch options
     */
    addCsrfToFetchOptions() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ...options,
        headers: {
          ...this.getCsrfHeaders(),
          ...(options.headers || {})
        }
      };
    },
    async loadUserInfo() {
      try {
        const response = await fetch('/api/files/me', this.addCsrfToFetchOptions());
        const data = await response.json();
        if (response.ok) {
          this.isAdmin = data.isAdmin || false;
          this.canUploadFile = data.canUploadFile !== undefined ? data.canUploadFile : true;
          this.canCreateFolder = data.canCreateFolder !== undefined ? data.canCreateFolder : true;
          this.maxFileSize = data.maxFileSize || 104857600; // 100 MB par défaut
        }
      } catch (error) {
        console.error('Error loading user info:', error);
      }
    },
    showConfirmModal(config) {
      this.confirmModal = {
        visible: true,
        title: config.title || 'Confirmation',
        message: config.message,
        subMessage: config.subMessage || null,
        type: config.type || 'confirm',
        confirmText: config.confirmText || 'Confirmer',
        cancelText: config.cancelText || 'Annuler',
        loading: false,
        onConfirm: () => {
          this.confirmModal.loading = true;
          if (config.onConfirm) {
            config.onConfirm();
          }
        }
      };
    },
    showErrorModal(message) {
      this.showConfirmModal({
        title: 'Erreur',
        message: message,
        type: 'error',
        confirmText: 'OK',
        cancelText: '',
        onConfirm: () => {
          this.confirmModal.visible = false;
        }
      });
    },
    async loadFolder(folderId) {
      let updateUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.loading = true;
      this.selectedItems = [];
      try {
        // Ensure folderId is a number or null
        const id = folderId !== null && folderId !== undefined ? Number(folderId) : null;
        const params = id ? `?folderId=${id}` : '';
        const response = await fetch(`/api/files${params}`, this.addCsrfToFetchOptions());
        const data = await response.json();
        if (response.ok) {
          this.files = data.files || [];
          this.folders = data.folders || [];
          this.currentFolder = data.currentFolder;
          this.breadcrumb = data.breadcrumb || [];

          // Mettre à jour l'URL du navigateur
          if (updateUrl) {
            this.updateUrlWithFolderId(id);
          }
        } else {
          console.error('Error loading folder:', data.error);
          this.showErrorModal(data.error || 'Impossible de charger le dossier');
        }
      } catch (error) {
        console.error('Error:', error);
        this.showErrorModal('Erreur lors du chargement du dossier');
      } finally {
        this.loading = false;
      }
    },
    updateUrlWithFolderId(folderId) {
      const url = new URL(window.location);
      if (folderId) {
        url.searchParams.set('folderId', folderId);
      } else {
        url.searchParams.delete('folderId');
      }

      // Mettre à jour l'URL sans recharger la page
      window.history.pushState({
        folderId
      }, '', url);
    },
    handlePopState(event) {
      // Gérer le bouton retour/avant du navigateur
      const folderId = event.state?.folderId || null;
      this.loadFolder(folderId, false); // false pour ne pas créer une nouvelle entrée d'historique
    },

    changeView(view) {
      this.currentView = view;
      if (view === 'home') {
        this.loadFolder(null);
      } else if (view === 'starred') {
        this.loadStarred();
        // Nettoyer le paramètre folderId de l'URL pour les vues spéciales
        this.updateUrlWithFolderId(null);
      } else if (view === 'trash') {
        this.loadTrash();
        // Nettoyer le paramètre folderId de l'URL pour les vues spéciales
        this.updateUrlWithFolderId(null);
      }
    },
    async loadStarred() {
      this.loading = true;
      try {
        const response = await fetch('/api/files/starred', this.addCsrfToFetchOptions());
        const data = await response.json();
        this.files = data.files || [];
        this.folders = data.folders || [];
        this.currentFolder = null;
        this.breadcrumb = [];
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    },
    async loadTrash() {
      this.loading = true;
      try {
        const response = await fetch('/api/files/trash', this.addCsrfToFetchOptions());
        const data = await response.json();
        this.files = data.files || [];
        this.folders = data.folders || [];
        this.currentFolder = null;
        this.breadcrumb = [];
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    },
    navigateToFolder(folder) {
      if (folder === null || folder === undefined) {
        this.loadFolder(null);
      } else {
        // Ensure we have a numeric ID
        const folderId = typeof folder === 'object' ? folder.id : folder;
        this.loadFolder(folderId ? Number(folderId) : null);
      }
    },
    handleSelect(item, event) {
      if (event.ctrlKey || event.metaKey) {
        // Multi-select: toggle selection only if Ctrl/Meta is pressed
        const index = this.selectedItems.findIndex(i => i.id === item.id && i.type === item.type);
        if (index > -1) {
          // Deselect if already selected
          this.selectedItems.splice(index, 1);
        } else {
          // Add to selection
          this.selectedItems.push(item);
        }
      } else {
        // No Ctrl/Meta: clear all selections
        this.selectedItems = [];
      }
    },
    handleContentClick(event) {
      // Check if click is on an interactive element that should not clear selection
      const target = event.target;

      // Don't clear if clicking on:
      // - Buttons (including action buttons like delete, etc.)
      // - Links
      // - Inputs, selects, textareas
      // - Modals or their overlays
      // - Context menus
      // - File items or folders (handled by handleSelect - these emit 'select' event)
      // - Toolbar, breadcrumb, sidebar
      // - Empty state message
      const isInteractive = target.closest('button') || target.closest('a') || target.closest('input') || target.closest('select') || target.closest('textarea') || target.closest('.file-modal') || target.closest('.file-modal__overlay') || target.closest('.file-modal__content') || target.closest('.context-menu') || target.closest('.file-item') || target.closest('.file-list__item') || target.closest('.file-grid__item') || target.closest('.file-toolbar') || target.closest('.file-breadcrumb') || target.closest('.file-sidebar') || target.closest('.file-manager__empty');

      // Only clear selection if clicking on empty space (not on interactive elements)
      // Also check that we're not in the middle of a double-click detection
      if (!isInteractive && this.selectedItems.length > 0) {
        this.selectedItems = [];
      }
    },
    handleOpen(item) {
      if (item.type === 'folder') {
        this.navigateToFolder(item);
      } else {
        this.previewFile = item;
      }
    },
    handleMore(item, event) {
      // Open context menu or permission modal
      if (event) {
        // If event is provided, open context menu
        this.handleContextMenu(item, event);
      } else {
        // Otherwise, open permission modal directly
        this.permissionResource = item;
      }
    },
    handleContextMenu(item, event) {
      event.preventDefault();
      const position = {
        x: event.clientX || event.pageX || 0,
        y: event.clientY || event.pageY || 0
      };
      this.contextMenu = {
        visible: true,
        item: item,
        position: position
      };
    },
    handleRename(item) {
      this.renameItem = item;
    },
    handleRenamed(item) {
      // Reload current folder to reflect changes
      if (this.currentView === 'trash') {
        this.loadTrash();
      } else if (this.currentView === 'starred') {
        this.loadStarred();
      } else {
        this.loadFolder(this.currentFolder?.id || null);
      }
    },
    handleDeleteItem(item) {
      this.showConfirmModal({
        title: 'Supprimer',
        message: `Supprimer "${item.name}" ?`,
        type: 'danger',
        confirmText: 'Supprimer',
        onConfirm: () => {
          this.deleteItem(item);
        }
      });
    },
    async deleteItem(item) {
      try {
        const response = await fetch(`/api/files/${item.id}?type=${item.type}`, this.addCsrfToFetchOptions({
          method: 'DELETE'
        }));
        if (response.ok) {
          // Reload current view
          this.confirmModal.visible = false;
          if (this.currentView === 'trash') {
            this.loadTrash();
          } else if (this.currentView === 'starred') {
            this.loadStarred();
          } else {
            this.loadFolder(this.currentFolder?.id || null);
          }
        } else {
          const data = await response.json();
          this.showErrorModal(data.error || 'Impossible de supprimer');
        }
      } catch (error) {
        console.error('Error:', error);
        this.showErrorModal('Erreur lors de la suppression');
      } finally {
        this.confirmModal.loading = false;
      }
    },
    async handleRestore(item) {
      try {
        const response = await fetch(`/api/files/${item.id}/restore?type=${item.type}`, this.addCsrfToFetchOptions({
          method: 'POST'
        }));
        if (response.ok) {
          this.loadTrash();
        } else {
          const data = await response.json();
          this.showErrorModal(data.error || 'Impossible de restaurer');
        }
      } catch (error) {
        console.error('Error:', error);
        this.showErrorModal('Erreur lors de la restauration');
      }
    },
    async handlePermanentDelete(item) {
      this.showConfirmModal({
        title: 'Supprimer définitivement',
        message: `Supprimer définitivement "${item.name}" ?`,
        subMessage: 'Cette action est irréversible.',
        type: 'danger',
        confirmText: 'Supprimer définitivement',
        onConfirm: () => {
          this.performPermanentDelete(item);
        }
      });
    },
    async performPermanentDelete(item) {
      try {
        const response = await fetch(`/api/files/${item.id}/permanent-delete?type=${item.type}`, this.addCsrfToFetchOptions({
          method: 'DELETE'
        }));
        if (response.ok) {
          this.confirmModal.visible = false;
          this.loadTrash();
        } else {
          const data = await response.json();
          this.showErrorModal(data.error || 'Impossible de supprimer définitivement');
        }
      } catch (error) {
        console.error('Error:', error);
        this.showErrorModal('Erreur lors de la suppression définitive');
      } finally {
        this.confirmModal.loading = false;
      }
    },
    handleUpload() {
      this.showUploader = true;
    },
    handleCreateFolder() {
      this.showCreateFolder = true;
    },
    handleFolderCreated() {
      this.showCreateFolder = false;
      // Refresh current folder
      this.loadFolder(this.currentFolder?.id || null);
    },
    async handleDelete() {
      if (this.selectedItems.length === 0) return;
      const isTrash = this.currentView === 'trash';
      this.showConfirmModal({
        title: isTrash ? 'Supprimer définitivement' : 'Supprimer',
        message: `${isTrash ? 'Supprimer définitivement' : 'Supprimer'} ${this.selectedItems.length} élément(s) ?`,
        subMessage: isTrash ? 'Cette action est irréversible.' : null,
        type: 'danger',
        confirmText: isTrash ? 'Supprimer définitivement' : 'Supprimer',
        onConfirm: () => {
          this.performDelete();
        }
      });
    },
    async performDelete() {
      let hasError = false;
      let errorMessage = '';
      for (const item of this.selectedItems) {
        try {
          if (this.currentView === 'trash') {
            // Permanent delete from trash
            const response = await fetch(`/api/files/${item.id}/permanent-delete?type=${item.type}`, this.addCsrfToFetchOptions({
              method: 'DELETE'
            }));
            if (!response.ok) {
              const data = await response.json();
              hasError = true;
              errorMessage = data.error || 'Erreur lors de la suppression';
            }
          } else {
            // Soft delete (move to trash)
            const response = await fetch(`/api/files/${item.id}?type=${item.type}`, this.addCsrfToFetchOptions({
              method: 'DELETE'
            }));
            if (!response.ok) {
              const data = await response.json();
              hasError = true;
              errorMessage = data.error || 'Erreur lors de la suppression';
            }
          }
        } catch (error) {
          console.error('Error:', error);
          hasError = true;
          errorMessage = 'Erreur lors de la suppression';
        }
      }
      this.confirmModal.visible = false;
      this.selectedItems = [];
      if (hasError) {
        this.showErrorModal(errorMessage);
      }

      // Reload current view
      if (this.currentView === 'trash') {
        this.loadTrash();
      } else if (this.currentView === 'starred') {
        this.loadStarred();
      } else {
        this.loadFolder(this.currentFolder?.id || null);
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
      if (query) {
        this.performSearch(query);
      } else {
        this.loadFolder(this.currentFolder?.id || null);
      }
    },
    async performSearch(query) {
      this.loading = true;
      try {
        // Inclure le dossier courant dans la recherche si on est dans un dossier
        const folderId = this.currentFolder?.id || null;
        const params = new URLSearchParams({
          q: query
        });
        if (folderId) {
          params.append('folderId', folderId);
        }
        const response = await fetch(`/api/files/search?${params.toString()}`, this.addCsrfToFetchOptions());
        const data = await response.json();
        if (response.ok) {
          this.files = data.files || [];
          this.folders = data.folders || [];
          // Garder le dossier courant et le breadcrumb pour le contexte
          // Ne pas les réinitialiser pour montrer où on cherche
        } else {
          console.error('Error loading search:', data.error);
          this.showErrorModal(data.error || 'Impossible de rechercher');
        }
      } catch (error) {
        console.error('Error:', error);
        this.showErrorModal('Erreur lors de la recherche');
      } finally {
        this.loading = false;
      }
    },
    handleRootDragOver(event) {
      // Check if we have dragged item data
      if (event.dataTransfer.types.includes('application/json')) {
        // Don't allow dropping if already at root
        if (!this.currentFolder) {
          event.dataTransfer.dropEffect = 'none';
          this.dragOverRoot = false;
          return;
        }
        event.dataTransfer.dropEffect = 'move';
        this.dragOverRoot = true;
      }
    },
    handleRootDragLeave() {
      setTimeout(() => {
        this.dragOverRoot = false;
      }, 50);
    },
    handleRootDrop(event) {
      this.dragOverRoot = false;
      const draggedData = event.dataTransfer.getData('application/json');
      if (!draggedData) return;
      try {
        const dragged = JSON.parse(draggedData);

        // Don't allow dropping if already at root
        if (!this.currentFolder) {
          return;
        }

        // Move to root (null folder)
        this.moveItem(dragged, null);
      } catch (e) {
        console.error('Error parsing drag data:', e);
      }
    },
    async handleDrop(_ref) {
      let {
        item,
        targetFolder
      } = _ref;
      await this.moveItem(item, targetFolder);
    },
    async moveItem(item, targetFolder) {
      try {
        const targetFolderId = targetFolder ? targetFolder.id : null;
        const response = await fetch(`/api/files/${item.id}/move`, this.addCsrfToFetchOptions({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: item.type,
            targetFolderId: targetFolderId
          })
        }));
        const data = await response.json();
        if (response.ok) {
          // Reload current folder to reflect changes
          this.loadFolder(this.currentFolder?.id || null);
        } else {
          this.showErrorModal(data.error || 'Impossible de déplacer l\'élément');
        }
      } catch (error) {
        console.error('Error moving item:', error);
        this.showErrorModal('Erreur lors du déplacement');
      }
    },
    handleFileUploaded() {
      this.showUploader = false;
      // Refresh current folder
      this.loadFolder(this.currentFolder?.id || null);
    },
    handleFileDrop(_ref2) {
      let {
        files
      } = _ref2;
      // Store dropped files and open upload modal
      this.droppedFiles = files;
      this.showUploader = true;
    },
    handleCloseUploader() {
      this.showUploader = false;
      this.droppedFiles = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      textContent: null,
      isFullscreen: false,
      showToast: false,
      toastMessage: ''
    };
  },
  computed: {
    previewUrl() {
      return `/api/files/${this.file.id}/preview`;
    },
    downloadUrl() {
      return `/api/files/${this.file.id}/download`;
    }
  },
  mounted() {
    if (this.file.isText) {
      this.loadTextContent();
    }
  },
  methods: {
    async loadTextContent() {
      try {
        const response = await fetch(this.previewUrl);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement');
        }
        this.textContent = await response.text();
      } catch (error) {
        this.textContent = 'Erreur lors du chargement du contenu';
      }
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    getFileIcon() {
      if (this.file.isPdf) return 'fa fa-file-pdf';
      if (this.file.isImage) return 'fa fa-file-image';
      if (this.file.isVideo) return 'fa fa-file-video';
      if (this.file.isText) return 'fa fa-file-alt';
      return 'fa fa-file';
    },
    printPdf() {
      if (this.$refs.pdfIframe && this.$refs.pdfIframe.contentWindow) {
        this.$refs.pdfIframe.contentWindow.print();
      }
    },
    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen;
      const content = this.$el.querySelector('.file-preview-content');
      if (this.isFullscreen) {
        content.classList.add('fullscreen');
      } else {
        content.classList.remove('fullscreen');
      }
    },
    async shareFile() {
      try {
        // Construire l'URL complète du fichier
        const fileUrl = window.location.origin + this.downloadUrl;

        // Copier dans le presse-papier
        await navigator.clipboard.writeText(fileUrl);

        // Afficher le toast de confirmation
        this.toastMessage = 'Lien copié dans le presse-papier !';
        this.showToast = true;

        // Masquer le toast après 3 secondes
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      } catch (error) {
        console.error('Erreur lors de la copie:', error);
        // Fallback si clipboard API n'est pas disponible
        this.toastMessage = 'Erreur lors de la copie du lien';
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    currentView: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    currentFolder: {
      type: Object,
      default: null
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    searchQuery: {
      type: String,
      default: ''
    },
    currentView: {
      type: String,
      default: 'home'
    },
    canUploadFile: {
      type: Boolean,
      default: true
    },
    canCreateFolder: {
      type: Boolean,
      default: true
    },
    viewMode: {
      type: String,
      default: 'grid'
    }
  },
  computed: {
    canDeleteSelected() {
      return this.selectedItems.some(item => item.canDelete);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    resource: {
      type: Object,
      required: true
    },
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      permissions: [],
      users: [],
      userResults: [],
      newPermission: {
        type: 'user',
        userIds: [],
        // Array of user IDs for multiple selection
        role: null,
        groupId: null,
        selectizeInstance: null
      },
      availableRoles: [],
      availableGroups: []
    };
  },
  computed: {
    canAddPermission() {
      if (this.newPermission.type === 'user') {
        return this.newPermission.userIds && this.newPermission.userIds.length > 0;
      } else if (this.newPermission.type === 'role') {
        return this.newPermission.role !== null && this.newPermission.role !== '';
      } else {
        return this.newPermission.groupId !== null && this.newPermission.groupId !== '';
      }
    },
    resourceType() {
      if (!this.resource || typeof this.resource !== 'object') {
        return 'file';
      }
      return this.resource.type || (this.resource.folderId !== undefined ? 'folder' : 'file');
    },
    resourceId() {
      if (!this.resource || typeof this.resource !== 'object') {
        return null;
      }
      const id = this.resource.id;
      // Ensure id is a number
      if (typeof id === 'number') {
        return id;
      }
      if (typeof id === 'string' && /^\d+$/.test(id)) {
        return parseInt(id, 10);
      }
      return null;
    }
  },
  mounted() {
    this.loadPermissions();
    this.loadRoles();
    this.loadGroups();

    // Initialize SelectizeJS after Vue has rendered
    this.$nextTick(() => {
      this.initSelectize();
    });
  },
  beforeDestroy() {
    // Destroy SelectizeJS instance
    if (this.newPermission.selectizeInstance) {
      this.newPermission.selectizeInstance.destroy();
    }
  },
  watch: {
    'newPermission.type'(newType) {
      // Reinitialize SelectizeJS when type changes
      if (this.newPermission.selectizeInstance) {
        this.newPermission.selectizeInstance.destroy();
        this.newPermission.selectizeInstance = null;
      }
      if (newType === 'user') {
        this.$nextTick(() => {
          this.initSelectize();
        });
      } else {
        this.newPermission.userIds = [];
      }
    },
    permissions() {
      // Reinitialize SelectizeJS when permissions list changes (after adding)
      if (this.newPermission.type === 'user') {
        this.$nextTick(() => {
          this.initSelectize();
        });
      }
    }
  },
  methods: {
    /**
     * Helper method to get fetch headers with CSRF token
     */
    getCsrfHeaders() {
      return {
        'X-CSRF-Token': this.csrfToken
      };
    },
    /**
     * Helper method to add CSRF token to fetch options
     */
    addCsrfToFetchOptions() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ...options,
        headers: {
          ...this.getCsrfHeaders(),
          ...(options.headers || {})
        }
      };
    },
    async loadRoles() {
      try {
        const response = await fetch('/api/roles', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableRoles = data.roles || [];
        }
      } catch (error) {
        console.error('Error loading roles:', error);
        // Fallback to default roles if API fails
        this.availableRoles = [{
          value: 'ROLE_USER',
          label: 'User'
        }, {
          value: 'ROLE_TECHNICIEN',
          label: 'Technicien'
        }, {
          value: 'ROLE_ADMIN',
          label: 'Admin'
        }];
      }
    },
    async loadGroups() {
      try {
        const response = await fetch('/api/groups', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableGroups = data.groups || [];
        }
      } catch (error) {
        console.error('Error loading groups:', error);
        this.availableGroups = [];
      }
    },
    async loadPermissions() {
      if (!this.resourceId) {
        console.error('Invalid resource ID:', this.resource);
        return;
      }
      this.loading = true;
      try {
        const response = await fetch(`/api/files/${this.resourceId}/permissions?type=${this.resourceType}`, this.addCsrfToFetchOptions());
        const data = await response.json();
        if (response.ok) {
          this.permissions = data.permissions || [];
        }
      } catch (error) {
        console.error('Error loading permissions:', error);
      } finally {
        this.loading = false;
      }
    },
    async searchUsers() {
      // Not needed anymore, SelectizeJS handles search
    },
    selectUser(user) {
      // Not needed anymore, SelectizeJS handles selection
    },
    initSelectize() {
      if (this.newPermission.type !== 'user') {
        return;
      }
      const selectElement = this.$refs.userSelect;
      if (!selectElement) {
        // Retry if element not rendered yet
        setTimeout(() => this.initSelectize(), 100);
        return;
      }

      // Check if jQuery and SelectizeJS are available
      if (typeof window.$ === 'undefined' || !window.$.fn.selectize) {
        console.warn('SelectizeJS not loaded yet, retrying...');
        setTimeout(() => this.initSelectize(), 100);
        return;
      }

      // Destroy existing instance if any
      if (this.newPermission.selectizeInstance) {
        this.newPermission.selectizeInstance.destroy();
      }

      // Initialize SelectizeJS
      try {
        const selectize = window.$(selectElement).selectize({
          plugins: ['remove_button'],
          valueField: 'id',
          labelField: 'name',
          searchField: ['name', 'email'],
          create: false,
          maxItems: null,
          // No limit
          dropdownParent: 'body',
          // Attach dropdown to body to avoid scroll issues
          load: (query, callback) => {
            if (!query || query.length < 2) {
              callback();
              return;
            }
            fetch(`/api/users/search?q=${encodeURIComponent(query)}&limit=20`).then(response => response.json()).then(data => {
              if (data.users) {
                callback(data.users.map(user => ({
                  id: user.id,
                  name: `${user.name} (${user.email})`,
                  email: user.email
                })));
              } else {
                callback();
              }
            }).catch(() => callback());
          },
          onChange: value => {
            // SelectizeJS with multiple can return either an array or a comma-separated string
            if (Array.isArray(value)) {
              this.newPermission.userIds = value;
            } else if (typeof value === 'string' && value.length > 0) {
              this.newPermission.userIds = value.split(',');
            } else {
              this.newPermission.userIds = [];
            }
          }
        });
        this.newPermission.selectizeInstance = selectize[0].selectize;
      } catch (error) {
        console.error('Error initializing SelectizeJS:', error);
      }
    },
    async addPermission() {
      if (!this.resourceId) {
        alert('Erreur: ID de ressource invalide');
        return;
      }
      if (!this.canAddPermission) {
        return;
      }
      try {
        if (this.newPermission.type === 'user' && this.newPermission.userIds && this.newPermission.userIds.length > 0) {
          // Create one permission per selected user
          const errors = [];
          for (const userId of this.newPermission.userIds) {
            try {
              const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  type: this.resourceType,
                  userId: userId
                })
              }));
              const data = await response.json();
              if (!response.ok) {
                errors.push(data.error || 'Erreur inconnue');
              }
            } catch (error) {
              errors.push('Erreur lors de l\'ajout de la permission');
            }
          }
          if (errors.length > 0) {
            alert('Erreurs lors de l\'ajout des permissions: ' + errors.join(', '));
          } else {
            this.loadPermissions();
            this.resetNewPermission();
          }
        } else if (this.newPermission.type === 'role' && this.newPermission.role) {
          const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: this.resourceType,
              role: this.newPermission.role
            })
          }));
          const data = await response.json();
          if (response.ok) {
            this.loadPermissions();
            this.resetNewPermission();
          } else {
            alert('Erreur: ' + data.error);
          }
        } else if (this.newPermission.type === 'group' && this.newPermission.groupId) {
          const response = await fetch(`/api/files/${this.resourceId}/permissions`, this.addCsrfToFetchOptions({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: this.resourceType,
              groupId: this.newPermission.groupId
            })
          }));
          const data = await response.json();
          if (response.ok) {
            this.loadPermissions();
            this.resetNewPermission();
          } else {
            alert('Erreur: ' + data.error);
          }
        }
      } catch (error) {
        console.error('Error adding permission:', error);
        alert('Erreur lors de l\'ajout de la permission');
      }
    },
    resetNewPermission() {
      // Destroy SelectizeJS instance completely
      if (this.newPermission.selectizeInstance) {
        this.newPermission.selectizeInstance.destroy();
        this.newPermission.selectizeInstance = null;
      }

      // Reset the form but keep type as 'user' so form stays visible
      this.newPermission.userIds = [];
      this.newPermission.role = null;
      this.newPermission.groupId = null;

      // Reinitialize SelectizeJS after reset
      this.$nextTick(() => {
        if (this.newPermission.type === 'user') {
          this.initSelectize();
        }
      });
    },
    async deletePermission(permissionId) {
      if (!this.resourceId) {
        alert('Erreur: ID de ressource invalide');
        return;
      }
      if (!confirm('Supprimer cette permission ?')) {
        return;
      }
      try {
        const response = await fetch(`/api/files/${this.resourceId}/permissions/${permissionId}`, this.addCsrfToFetchOptions({
          method: 'DELETE'
        }));
        if (response.ok) {
          this.loadPermissions();
        } else {
          const data = await response.json();
          alert('Erreur: ' + data.error);
        }
      } catch (error) {
        console.error('Error deleting permission:', error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    },
    csrfToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      newName: ''
    };
  },
  mounted() {
    // Set initial name and focus input
    this.newName = this.item.name;
    this.$nextTick(() => {
      if (this.$refs.nameInput) {
        this.$refs.nameInput.focus();
        this.$refs.nameInput.select();
      }
    });
  },
  methods: {
    /**
     * Helper method to get fetch headers with CSRF token
     */
    getCsrfHeaders() {
      return {
        'X-CSRF-Token': this.csrfToken
      };
    },
    /**
     * Helper method to add CSRF token to fetch options
     */
    addCsrfToFetchOptions() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ...options,
        headers: {
          ...this.getCsrfHeaders(),
          ...(options.headers || {})
        }
      };
    },
    async handleRename() {
      if (!this.newName || this.newName.trim() === '') {
        return;
      }
      try {
        const response = await fetch(`/api/files/${this.item.id}/rename`, this.addCsrfToFetchOptions({
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.newName.trim(),
            type: this.item.type
          })
        }));
        const data = await response.json();
        if (response.ok) {
          this.$emit('renamed', {
            ...this.item,
            name: this.newName.trim()
          });
          this.$emit('close');
        } else {
          alert('Erreur: ' + (data.error || 'Impossible de renommer'));
        }
      } catch (error) {
        console.error('Error renaming:', error);
        alert('Erreur lors du renommage');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    folderId: {
      type: Number,
      default: null
    },
    initialFiles: {
      type: Array,
      default: null
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    csrfToken: {
      type: String,
      required: true
    },
    maxFileSize: {
      type: Number,
      default: 104857600 // 100 MB par défaut
    }
  },

  data() {
    return {
      isDragging: false,
      selectedFiles: [],
      uploads: [],
      uploading: false,
      permissions: [],
      searchTimeout: null,
      availableRoles: [],
      availableGroups: [],
      activeXhrRequests: [] // Stocker les requêtes XMLHttpRequest actives
    };
  },

  computed: {
    allFiles() {
      const files = [];

      // Add selected files (not yet uploaded)
      this.selectedFiles.forEach((file, index) => {
        // Check if this file is already in uploads
        const upload = this.uploads.find(u => u.file.name === file.name && u.file.size === file.size && u.file.lastModified === file.lastModified);
        if (!upload) {
          files.push({
            id: `selected-${index}`,
            file: file,
            status: 'selected',
            progress: 0,
            error: null
          });
        }
      });

      // Add files being uploaded or completed
      this.uploads.forEach(upload => {
        let status = 'uploading';
        if (upload.error) {
          status = 'error';
        } else if (upload.progress >= 100) {
          status = 'completed';
        }
        files.push({
          id: upload.id,
          file: upload.file,
          status: status,
          progress: upload.progress,
          error: upload.error
        });
      });
      return files;
    },
    selectedFilesCount() {
      return this.selectedFiles.filter(file => {
        // Don't count files that are already uploading/completed
        return !this.uploads.find(u => u.file.name === file.name && u.file.size === file.size && u.file.lastModified === file.lastModified);
      }).length;
    }
  },
  methods: {
    /**
     * Helper method to get fetch headers with CSRF token
     */
    getCsrfHeaders() {
      return {
        'X-CSRF-Token': this.csrfToken
      };
    },
    /**
     * Helper method to add CSRF token to fetch options
     */
    addCsrfToFetchOptions() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ...options,
        headers: {
          ...this.getCsrfHeaders(),
          ...(options.headers || {})
        }
      };
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      const files = Array.from(event.target.files);
      this.addFiles(files);
      // Réinitialiser l'input pour permettre de sélectionner les mêmes fichiers à nouveau
      event.target.value = '';
    },
    handleDragOver(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = true;
    },
    handleDragEnter(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = true;
    },
    handleDragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      // Only set isDragging to false if we're leaving the dropzone itself
      // (not a child element)
      if (!event.currentTarget.contains(event.relatedTarget)) {
        this.isDragging = false;
      }
    },
    handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isDragging = false;
      const files = Array.from(event.dataTransfer.files);
      this.addFiles(files);
    },
    addFiles(files) {
      for (const file of files) {
        // Vérifier la taille du fichier
        if (file.size > this.maxFileSize) {
          const maxSizeMB = Math.round(this.maxFileSize / 1024 / 1024);
          const fileSizeMB = Math.round(file.size / 1024 / 1024);
          alert(`Le fichier "${file.name}" est trop volumineux (${fileSizeMB} MB). La taille maximale autorisée est de ${maxSizeMB} MB.`);
          continue;
        }

        // Check if file already selected
        if (!this.selectedFiles.find(f => f.name === file.name && f.size === file.size)) {
          this.selectedFiles.push(file);
        }
      }
    },
    removeFileItem(fileItem) {
      if (fileItem.status === 'selected') {
        // Remove from selectedFiles
        const index = this.selectedFiles.findIndex(f => f.name === fileItem.file.name && f.size === fileItem.file.size && f.lastModified === fileItem.file.lastModified);
        if (index > -1) {
          this.selectedFiles.splice(index, 1);
        }
      } else {
        // Remove from uploads
        this.removeUpload(fileItem.id);
      }
    },
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    },
    getFileIcon(file) {
      if (file.status === 'completed') {
        return 'fa fa-check-circle';
      }
      if (file.status === 'uploading') {
        return 'fa fa-spinner fa-spin';
      }
      if (file.status === 'error') {
        return 'fa fa-exclamation-circle';
      }
      const name = file.file.name.toLowerCase();
      if (name.endsWith('.pdf')) return 'fa fa-file-pdf';
      if (name.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'fa fa-file-image';
      if (name.match(/\.(doc|docx)$/)) return 'fa fa-file-word';
      if (name.match(/\.(xls|xlsx)$/)) return 'fa fa-file-excel';
      if (name.match(/\.(zip|rar|7z|tar|gz)$/)) return 'fa fa-file-archive';
      if (name.match(/\.(mp4|avi|mov|wmv|flv)$/)) return 'fa fa-file-video';
      if (name.match(/\.(mp3|wav|ogg|flac)$/)) return 'fa fa-file-audio';
      return 'fa fa-file';
    },
    addPermission() {
      const index = this.permissions.length;
      this.permissions.push({
        type: 'user',
        userIds: [],
        // Array of user IDs for multiple selection
        role: null,
        groupId: null,
        selectizeInstance: null
      });

      // Initialize SelectizeJS after Vue has rendered
      this.$nextTick(() => {
        this.initSelectize(index);
      });
    },
    removePermission(index) {
      const permission = this.permissions[index];
      // Destroy SelectizeJS instance if it exists
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }
      this.permissions.splice(index, 1);

      // Reinitialize SelectizeJS for remaining permissions
      this.$nextTick(() => {
        this.permissions.forEach((perm, idx) => {
          if (perm.type === 'user' && !perm.selectizeInstance) {
            this.initSelectize(idx);
          }
        });
      });
    },
    initSelectize(index) {
      const permission = this.permissions[index];
      if (!permission || permission.type !== 'user') {
        return;
      }
      const selectElement = this.$refs[`userSelect-${index}`];
      if (!selectElement) {
        // Retry if element not rendered yet
        setTimeout(() => this.initSelectize(index), 100);
        return;
      }

      // Check if jQuery is available
      if (typeof window.$ === 'undefined') {
        console.error('jQuery is not available');
        setTimeout(() => this.initSelectize(index), 100);
        return;
      }

      // Check if SelectizeJS is available
      if (!window.$.fn.selectize) {
        console.warn('SelectizeJS not loaded yet, retrying...');
        setTimeout(() => this.initSelectize(index), 100);
        return;
      }

      // Destroy existing instance if any
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }

      // Initialize SelectizeJS
      try {
        const selectize = window.$(selectElement).selectize({
          plugins: ['remove_button'],
          valueField: 'id',
          labelField: 'name',
          searchField: ['name', 'email'],
          create: false,
          maxItems: null,
          // No limit
          dropdownParent: 'body',
          // Attach dropdown to body to avoid scroll issues
          load: (query, callback) => {
            if (!query || query.length < 2) {
              callback();
              return;
            }
            fetch(`/api/users/search?q=${encodeURIComponent(query)}&limit=20`, this.addCsrfToFetchOptions()).then(response => response.json()).then(data => {
              if (data.users) {
                callback(data.users.map(user => ({
                  id: user.id,
                  name: `${user.name} (${user.email})`,
                  email: user.email
                })));
              } else {
                callback();
              }
            }).catch(() => callback());
          },
          onChange: value => {
            // SelectizeJS with multiple can return either an array or a comma-separated string
            if (Array.isArray(value)) {
              permission.userIds = value;
            } else if (typeof value === 'string' && value.length > 0) {
              permission.userIds = value.split(',');
            } else {
              permission.userIds = [];
            }
          }
        });
        permission.selectizeInstance = selectize[0].selectize;
      } catch (error) {
        console.error('Error initializing SelectizeJS:', error);
      }
    },
    async uploadFiles() {
      // Get only files that are not already uploading
      const filesToUpload = this.selectedFiles.filter(file => {
        return !this.uploads.find(u => u.file.name === file.name && u.file.size === file.size && u.file.lastModified === file.lastModified);
      });
      if (filesToUpload.length === 0 || this.uploading) {
        return;
      }
      this.uploading = true;

      // Store the number of files to upload
      const totalFiles = filesToUpload.length;
      let completedFiles = 0;
      for (const file of filesToUpload) {
        const uploadId = Date.now() + Math.random();
        this.uploads.push({
          id: uploadId,
          file: file,
          progress: 0,
          error: null,
          status: 'uploading'
        });
        try {
          await this.uploadFile(file, uploadId);
          completedFiles++;
        } catch (error) {
          // Ignorer les erreurs d'annulation (c'est normal quand on ferme la modal)
          if (error.message !== 'Upload cancelled') {
            // Pour les autres erreurs, on continue quand même
            console.error('Upload error:', error);
          }
          // Si l'upload est annulé, on arrête la boucle
          if (error.message === 'Upload cancelled') {
            break;
          }
        }

        // Check if all files are completed
        if (completedFiles === totalFiles) {
          // All files uploaded, check if modal should close
          this.$nextTick(() => {
            this.checkAndCloseModal();
          });
        }
      }
      this.uploading = false;
    },
    async uploadFile(file, uploadId) {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        if (this.folderId) {
          formData.append('folderId', this.folderId);
        }
        const xhr = new XMLHttpRequest();

        // Stocker la référence XHR pour pouvoir l'annuler
        const xhrRef = {
          xhr: xhr,
          uploadId: uploadId
        };
        this.activeXhrRequests.push(xhrRef);
        xhr.upload.addEventListener('progress', e => {
          if (e.lengthComputable) {
            const progress = e.loaded / e.total * 100;
            const upload = this.uploads.find(u => u.id === uploadId);
            if (upload) {
              upload.progress = progress;
            }
          }
        });
        xhr.addEventListener('load', async () => {
          // Retirer la référence XHR de la liste des requêtes actives
          this.removeXhrRequest(uploadId);
          if (xhr.status === 201) {
            const upload = this.uploads.find(u => u.id === uploadId);
            if (upload) {
              upload.progress = 100;
              upload.status = 'completed';
              const data = JSON.parse(xhr.responseText);

              // Add permissions if any and user is admin
              if (this.isAdmin && this.permissions.length > 0 && data.file) {
                await this.addPermissionsToFile(data.file.id);
              }

              // Remove from uploads immediately
              this.removeUpload(uploadId);

              // Remove from selectedFiles if still present
              const fileIndex = this.selectedFiles.findIndex(f => f.name === file.name && f.size === file.size && f.lastModified === file.lastModified);
              if (fileIndex > -1) {
                this.selectedFiles.splice(fileIndex, 1);
              }
              resolve();
            } else {
              reject(new Error('Upload not found'));
            }
          } else {
            const upload = this.uploads.find(u => u.id === uploadId);
            if (upload) {
              try {
                const data = JSON.parse(xhr.responseText);
                upload.error = data.error || 'Erreur lors du téléversement';
              } catch (error) {
                upload.error = 'Erreur lors du téléversement';
              }
              upload.status = 'error';
              reject(new Error('Upload failed'));
            }
          }
        });
        xhr.addEventListener('error', () => {
          // Retirer la référence XHR de la liste des requêtes actives
          this.removeXhrRequest(uploadId);
          const upload = this.uploads.find(u => u.id === uploadId);
          if (upload) {
            upload.error = 'Erreur réseau';
            upload.status = 'error';
          }
          reject(new Error('Network error'));
        });
        xhr.addEventListener('abort', () => {
          // Retirer la référence XHR de la liste des requêtes actives
          this.removeXhrRequest(uploadId);
          reject(new Error('Upload cancelled'));
        });
        xhr.open('POST', '/api/files/upload');
        // Add CSRF token header
        xhr.setRequestHeader('X-CSRF-Token', this.csrfToken);
        xhr.send(formData);
      });
    },
    async addPermissionsToFile(fileId) {
      for (const perm of this.permissions) {
        if (perm.type === 'user' && perm.userIds && perm.userIds.length > 0) {
          // Create one permission per selected user
          for (const userId of perm.userIds) {
            await this.addPermissionToFile(fileId, {
              type: 'file',
              userId: userId
            });
          }
        } else if (perm.type === 'role' && perm.role) {
          await this.addPermissionToFile(fileId, {
            type: 'file',
            role: perm.role
          });
        } else if (perm.type === 'group' && perm.groupId) {
          await this.addPermissionToFile(fileId, {
            type: 'file',
            groupId: perm.groupId
          });
        }
      }
    },
    async addPermissionToFile(fileId, permissionData) {
      try {
        // Ensure fileId is a number
        const id = Number(fileId);
        if (!id || isNaN(id)) {
          console.error('Invalid file ID:', fileId);
          return;
        }
        const response = await fetch(`/api/files/${id}/permissions`, this.addCsrfToFetchOptions({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(permissionData)
        }));
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error adding permission:', errorData.error || 'Unknown error');
        }
      } catch (error) {
        console.error('Error adding permission:', error);
      }
    },
    removeUpload(uploadId) {
      const index = this.uploads.findIndex(u => u.id === uploadId);
      if (index > -1) {
        this.uploads.splice(index, 1);
      }
    },
    removeXhrRequest(uploadId) {
      const index = this.activeXhrRequests.findIndex(r => r.uploadId === uploadId);
      if (index > -1) {
        this.activeXhrRequests.splice(index, 1);
      }
    },
    /**
     * Annuler tous les téléversements en cours
     */
    cancelAllUploads() {
      // Annuler toutes les requêtes XMLHttpRequest actives
      this.activeXhrRequests.forEach(ref => {
        if (ref.xhr && ref.xhr.readyState !== XMLHttpRequest.DONE) {
          ref.xhr.abort();
        }
      });

      // Réinitialiser l'état d'upload
      this.uploading = false;
      this.activeXhrRequests = [];
    },
    /**
     * Gérer la fermeture de la modal avec annulation des uploads en cours
     */
    handleClose() {
      // Si des uploads sont en cours, les annuler
      if (this.uploading || this.activeXhrRequests.length > 0) {
        this.cancelAllUploads();
      }

      // Nettoyer les SelectizeJS instances
      this.permissions.forEach(permission => {
        if (permission.selectizeInstance) {
          permission.selectizeInstance.destroy();
        }
      });

      // Émettre l'événement de fermeture
      this.$emit('close');
    },
    checkAndCloseModal() {
      // Close modal if all files are uploaded and no files are selected
      // Use Vue.nextTick to ensure reactivity has updated
      this.$nextTick(() => {
        const hasUploads = this.uploads.length > 0;
        const hasSelectedFiles = this.selectedFiles.length > 0;
        const hasAllFiles = this.allFiles.length > 0;
        if (!hasUploads && !hasSelectedFiles && !hasAllFiles) {
          // Destroy all SelectizeJS instances before clearing
          this.permissions.forEach(permission => {
            if (permission.selectizeInstance) {
              permission.selectizeInstance.destroy();
            }
          });
          this.$emit('uploaded');
          this.selectedFiles = [];
          this.permissions = [];
        }
      });
    },
    async loadRoles() {
      try {
        const response = await fetch('/api/roles', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableRoles = data.roles || [];
        }
      } catch (error) {
        console.error('Error loading roles:', error);
        // Fallback to default roles if API fails
        this.availableRoles = [{
          value: 'ROLE_USER',
          label: 'User'
        }, {
          value: 'ROLE_TECHNICIEN',
          label: 'Technicien'
        }, {
          value: 'ROLE_ADMIN',
          label: 'Admin'
        }];
      }
    },
    async loadGroups() {
      try {
        const response = await fetch('/api/groups', this.addCsrfToFetchOptions());
        if (response.ok) {
          const data = await response.json();
          this.availableGroups = data.groups || [];
        }
      } catch (error) {
        console.error('Error loading groups:', error);
        this.availableGroups = [];
      }
    }
  },
  watch: {
    permissions: {
      handler(newPerms) {
        // Initialize SelectizeJS for new user permissions
        this.$nextTick(() => {
          newPerms.forEach((perm, idx) => {
            if (perm.type === 'user' && !perm.selectizeInstance) {
              this.initSelectize(idx);
            } else if (perm.type !== 'user' && perm.selectizeInstance) {
              // Destroy SelectizeJS if type changes from user to role
              perm.selectizeInstance.destroy();
              perm.selectizeInstance = null;
            }
          });
        });
      },
      deep: true
    }
  },
  mounted() {
    // Load available roles and groups only if user is admin (non-blocking)
    if (this.isAdmin) {
      // Use setTimeout to make it non-blocking
      setTimeout(() => {
        this.loadRoles().catch(() => {
          // Silently fail
          this.availableRoles = [];
        });
        this.loadGroups().catch(() => {
          // Silently fail
          this.availableGroups = [];
        });
      }, 0);
    }

    // Add initial files if provided
    if (this.initialFiles && this.initialFiles.length > 0) {
      this.addFiles(this.initialFiles);
    }

    // Prevent default drag behaviors on the document to avoid opening files
    this.preventDefaults = e => {
      e.preventDefault();
      e.stopPropagation();
    };
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      document.addEventListener(eventName, this.preventDefaults, false);
    });
  },
  beforeDestroy() {
    // Annuler tous les téléversements en cours avant de détruire le composant
    this.cancelAllUploads();

    // Destroy all SelectizeJS instances
    this.permissions.forEach(permission => {
      if (permission.selectizeInstance) {
        permission.selectizeInstance.destroy();
      }
    });

    // Remove event listeners
    if (this.preventDefaults) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.removeEventListener(eventName, this.preventDefaults, false);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.handleCancel.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-modal__content--confirm"
  }, [_c("div", {
    staticClass: "file-modal__header"
  }, [_c("h3", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: _vm.handleCancel
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body"
  }, [_vm.type === "danger" ? _c("div", {
    staticClass: "confirm-modal__icon"
  }, [_c("i", {
    staticClass: "fa fa-exclamation-triangle"
  })]) : _vm.type === "error" ? _c("div", {
    staticClass: "confirm-modal__icon"
  }, [_c("i", {
    staticClass: "fa fa-times-circle"
  })]) : _vm.type === "warning" ? _c("div", {
    staticClass: "confirm-modal__icon"
  }, [_c("i", {
    staticClass: "fa fa-exclamation-circle"
  })]) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "confirm-modal__message"
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _vm.subMessage ? _c("p", {
    staticClass: "confirm-modal__sub-message"
  }, [_vm._v(_vm._s(_vm.subMessage))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer"
  }, [_vm.cancelText ? _c("button", {
    staticClass: "btn",
    on: {
      click: _vm.handleCancel
    }
  }, [_vm._v("\n                " + _vm._s(_vm.cancelText) + "\n            ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn",
    class: _vm.confirmButtonClass,
    attrs: {
      disabled: _vm.loading
    },
    on: {
      click: _vm.handleConfirm
    }
  }, [_vm.loading ? _c("i", {
    staticClass: "fa fa-spinner fa-spin"
  }) : _c("span", [_vm._v(_vm._s(_vm.confirmText))])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.visible ? _c("div", {
    staticClass: "context-menu",
    style: _vm.menuStyle,
    on: {
      click: function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c("div", {
    staticClass: "context-menu__item",
    on: {
      click: _vm.handleOpen
    }
  }, [_c("i", {
    staticClass: "fa",
    class: _vm.item.type === "folder" ? "fa-folder-open" : "fa-eye"
  }), _vm._v(" \n        " + _vm._s(_vm.item.type === "folder" ? "Ouvrir" : "Voir") + "\n    ")]), _vm._v(" "), _vm.isAdmin || _vm.item.canDelete || _vm.item.canEdit ? _c("div", {
    staticClass: "context-menu__separator"
  }) : _vm._e(), _vm._v(" "), _vm.currentView !== "trash" && _vm.item.canEdit ? _c("div", {
    staticClass: "context-menu__item",
    on: {
      click: _vm.handleRename
    }
  }, [_c("i", {
    staticClass: "fa fa-edit"
  }), _vm._v(" Renommer\n    ")]) : _vm._e(), _vm._v(" "), _vm.currentView === "trash" && _vm.item.canDelete ? _c("div", {
    staticClass: "context-menu__item",
    on: {
      click: _vm.handleRestore
    }
  }, [_c("i", {
    staticClass: "fa fa-undo"
  }), _vm._v(" Restaurer\n    ")]) : _vm._e(), _vm._v(" "), _vm.currentView === "trash" && _vm.item.canDelete ? _c("div", {
    staticClass: "context-menu__item danger",
    on: {
      click: _vm.handlePermanentDelete
    }
  }, [_c("i", {
    staticClass: "fa fa-trash"
  }), _vm._v(" Supprimer définitivement\n    ")]) : _vm._e(), _vm._v(" "), _vm.currentView !== "trash" && _vm.isAdmin ? _c("div", {
    staticClass: "context-menu__item",
    on: {
      click: _vm.handlePermissions
    }
  }, [_c("i", {
    staticClass: "fa fa-lock"
  }), _vm._v(" Permissions\n    ")]) : _vm._e(), _vm._v(" "), _vm.currentView !== "trash" && _vm.item.canDelete ? _c("div", {
    staticClass: "context-menu__separator"
  }) : _vm._e(), _vm._v(" "), _vm.currentView !== "trash" && _vm.item.canDelete ? _c("div", {
    staticClass: "context-menu__item danger",
    on: {
      click: _vm.handleDelete
    }
  }, [_c("i", {
    staticClass: "fa fa-trash"
  }), _vm._v(" Supprimer\n    ")]) : _vm._e()]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-modal__content--folder"
  }, [_c("div", {
    staticClass: "file-modal__header"
  }, [_c("h3", [_vm._v("Nouveau dossier")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.folderName,
      expression: "folderName"
    }],
    ref: "nameInput",
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Nom du dossier"
    },
    domProps: {
      value: _vm.folderName
    },
    on: {
      keyup: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.createFolder.apply(null, arguments);
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.folderName = $event.target.value;
      }
    }
  })]), _vm._v(" "), _vm.isAdmin ? _c("hr") : _vm._e(), _vm._v(" "), _vm.isAdmin ? _c("div", [_c("h5", [_vm._v("Permissions")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted",
    staticStyle: {
      "font-size": "0.875rem"
    }
  }, [_vm._v("\n                    Définissez les permissions pour ce dossier. Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Les permissions peuvent être modifiées ultérieurement.\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "permissions-list"
  }, [_vm._l(_vm.permissions, function (permission, index) {
    return _c("div", {
      key: index,
      staticClass: "permission-item"
    }, [_c("div", {
      staticClass: "permission-item__grid"
    }, [_c("div", {
      staticClass: "permission-item__type"
    }, [_c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Type")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.type,
        expression: "permission.type"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "user"
      }
    }, [_vm._v("Utilisateur")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "role"
      }
    }, [_vm._v("Rôle")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "group"
      }
    }, [_vm._v("Groupe")])])]), _vm._v(" "), _c("div", {
      staticClass: "permission-item__value"
    }, [permission.type === "user" ? _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Utilisateurs")]) : permission.type === "role" ? _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Rôle")]) : _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Groupe")]), _vm._v(" "), permission.type === "user" ? _c("div", {
      staticClass: "permission-input-wrapper"
    }, [_c("select", {
      ref: "userSelect-" + index,
      refInFor: true,
      staticClass: "form-control form-control-sm user-selectize",
      attrs: {
        "data-index": index,
        multiple: "",
        placeholder: "Rechercher et sélectionner des utilisateurs..."
      }
    })]) : permission.type === "role" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.role,
        expression: "permission.role"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Sélectionner un rôle")]), _vm._v(" "), _vm._l(_vm.availableRoles || [], function (role) {
      return _c("option", {
        key: role.value,
        domProps: {
          value: role.value
        }
      }, [_vm._v("\n                                    " + _vm._s(role.label) + "\n                                ")]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.groupId,
        expression: "permission.groupId"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "groupId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Sélectionner un groupe")]), _vm._v(" "), _vm._l(_vm.availableGroups || [], function (group) {
      return _c("option", {
        key: group.value,
        domProps: {
          value: group.value
        }
      }, [_vm._v("\n                                    " + _vm._s(group.label) + "\n                                ")]);
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "permission-item__action"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-danger permission-remove-btn",
      attrs: {
        title: "Supprimer cette permission"
      },
      on: {
        click: function ($event) {
          return _vm.removePermission(index);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })])])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-primary permission-add-btn",
    on: {
      click: _vm.addPermission
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter une permission\n                ")])], 2)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer"
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_vm._v("Annuler")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: !_vm.canCreate
    },
    on: {
      click: _vm.createFolder
    }
  }, [_vm._v("\n                Créer\n            ")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Nom du dossier "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a& ***!
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
    staticClass: "file-breadcrumb"
  }, [_c("a", {
    staticClass: "file-breadcrumb__item",
    class: {
      "drag-over": _vm.dragOverItemId === "root"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.$emit("navigate", null);
      },
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.handleDragOver("root", $event);
      },
      dragleave: function ($event) {
        return _vm.handleDragLeave("root");
      },
      drop: function ($event) {
        $event.preventDefault();
        return _vm.handleDrop(null, $event);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v(" Accueil\n    ")]), _vm._v(" "), _vm.items.length > 0 ? _c("span", {
    staticClass: "file-breadcrumb__separator"
  }, [_vm._v("/")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.items, function (item, index) {
    return [_c("a", {
      key: item.id,
      staticClass: "file-breadcrumb__item",
      class: {
        active: index === _vm.items.length - 1,
        "drag-over": _vm.dragOverItemId === item.id
      },
      attrs: {
        href: "#"
      },
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.$emit("navigate", item);
        },
        dragover: function ($event) {
          $event.preventDefault();
          return _vm.handleDragOver(item.id, $event);
        },
        dragleave: function ($event) {
          return _vm.handleDragLeave(item.id);
        },
        drop: function ($event) {
          $event.preventDefault();
          return _vm.handleDrop(item, $event);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")]), _vm._v(" "), index < _vm.items.length - 1 ? _c("span", {
      key: "sep-" + item.id,
      staticClass: "file-breadcrumb__separator"
    }, [_vm._v("/")]) : _vm._e()];
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-grid"
  }, [_vm._l(_vm.folders, function (folder) {
    return _c("div", {
      key: "folder-" + folder.id,
      staticClass: "file-grid__item",
      class: {
        "drag-over": _vm.dragOverFolderId === folder.id
      },
      on: {
        dragover: function ($event) {
          $event.preventDefault();
          return _vm.handleDragOver(folder, $event);
        },
        dragleave: function ($event) {
          return _vm.handleDragLeave(folder);
        },
        drop: function ($event) {
          $event.preventDefault();
          return _vm.handleDrop(folder, $event);
        }
      }
    }, [_c("FileItem", {
      attrs: {
        item: {
          ...folder,
          type: "folder"
        },
        selected: _vm.isSelected(folder, "folder")
      },
      on: {
        click: function ($event) {
          return _vm.handleClick(folder, "folder", $event);
        },
        dblclick: function ($event) {
          return _vm.handleDblClick(folder, "folder");
        },
        star: function ($event) {
          return _vm.toggleStar(folder, "folder");
        },
        more: function ($event) {
          return _vm.handleMore({
            ...folder,
            type: "folder"
          }, $event);
        },
        "context-menu": function ($event) {
          return _vm.handleContextMenu({
            ...folder,
            type: "folder"
          }, $event);
        }
      }
    })], 1);
  }), _vm._v(" "), _vm._l(_vm.files, function (file) {
    return _c("div", {
      key: "file-" + file.id,
      staticClass: "file-grid__item"
    }, [_c("FileItem", {
      attrs: {
        item: {
          ...file,
          type: "file"
        },
        selected: _vm.isSelected(file, "file")
      },
      on: {
        click: function ($event) {
          return _vm.handleClick(file, "file", $event);
        },
        dblclick: function ($event) {
          return _vm.handleDblClick(file, "file");
        },
        star: function ($event) {
          return _vm.toggleStar(file, "file");
        },
        more: function ($event) {
          return _vm.handleMore({
            ...file,
            type: "file"
          }, $event);
        },
        "context-menu": function ($event) {
          return _vm.handleContextMenu({
            ...file,
            type: "file"
          }, $event);
        }
      }
    })], 1);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-item",
    class: {
      selected: _vm.selected,
      dragging: _vm.isDragging
    },
    attrs: {
      draggable: "true"
    },
    on: {
      dragstart: _vm.handleDragStart,
      dragend: _vm.handleDragEnd,
      click: function ($event) {
        return _vm.$emit("click", $event);
      },
      dblclick: function ($event) {
        return _vm.$emit("dblclick");
      },
      contextmenu: function ($event) {
        return _vm.$emit("context-menu", $event);
      }
    }
  }, [_c("div", {
    staticClass: "file-item__star",
    class: {
      "file-item__star--starred": _vm.item.isStarred
    },
    attrs: {
      title: _vm.item.isStarred ? "Retirer des favoris" : "Ajouter aux favoris"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        return _vm.$emit("star");
      }
    }
  }, [_c("i", {
    staticClass: "fa",
    class: _vm.item.isStarred ? "fa-star" : "fa-star-o",
    style: {
      color: _vm.item.isStarred ? "#FFCB00" : "#000"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "file-item__icon",
    class: _vm.getFileIconClass(_vm.item)
  }, [_c("i", {
    class: _vm.getFileIcon(_vm.item)
  })]), _vm._v(" "), _c("div", {
    staticClass: "file-item__name",
    attrs: {
      title: _vm.item.name
    }
  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), _vm.item.type === "file" ? _c("div", {
    staticClass: "file-item__meta"
  }, [_vm._v("\n        " + _vm._s(_vm.item.formattedSize) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "file-item__actions"
  }, [_c("button", {
    attrs: {
      title: "Plus d'options"
    },
    on: {
      click: function ($event) {
        $event.stopPropagation();
        return _vm.$emit("more", $event);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-ellipsis-v"
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-list",
    class: {
      "drag-over": _vm.isDraggingFiles
    },
    on: {
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.handleFileDragOver.apply(null, arguments);
      },
      dragenter: function ($event) {
        $event.preventDefault();
        return _vm.handleFileDragEnter.apply(null, arguments);
      },
      dragleave: _vm.handleFileDragLeave,
      drop: function ($event) {
        $event.preventDefault();
        return _vm.handleFileDrop.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "file-list__body"
  }, [_vm._l(_vm.folders, function (folder) {
    return _c("div", {
      key: "folder-" + folder.id,
      staticClass: "file-list__item",
      class: {
        selected: _vm.isSelected(folder, "folder"),
        "drag-over": _vm.dragOverFolderId === folder.id,
        dragging: _vm.draggedItem && _vm.draggedItem.id === folder.id && _vm.draggedItem.type === "folder"
      },
      attrs: {
        draggable: "true"
      },
      on: {
        dragstart: function ($event) {
          return _vm.handleDragStart(folder, "folder", $event);
        },
        dragend: _vm.handleDragEnd,
        dragover: function ($event) {
          $event.preventDefault();
          return _vm.handleDragOver(folder, $event);
        },
        dragleave: function ($event) {
          return _vm.handleDragLeave(folder);
        },
        drop: function ($event) {
          $event.preventDefault();
          return _vm.handleDrop(folder, $event);
        },
        click: function ($event) {
          return _vm.handleClick(folder, "folder", $event);
        },
        dblclick: function ($event) {
          return _vm.handleDblClick(folder, "folder");
        },
        contextmenu: function ($event) {
          $event.preventDefault();
          return _vm.handleContextMenu({
            ...folder,
            type: "folder"
          }, $event);
        }
      }
    }, [_c("div", [_c("i", {
      staticClass: "fa fa-folder",
      staticStyle: {
        "margin-right": "0.75rem",
        color: "#ffcb00",
        "font-size": "1.25rem"
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-weight": "500"
      }
    }, [_vm._v(_vm._s(folder.name))])]), _vm._v(" "), _c("div", [_vm._v("-")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.formatDate(folder.updatedAt)))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(folder.owner.name))]), _vm._v(" "), _c("div", {
      staticClass: "file-list__actions"
    }, [_c("button", {
      staticClass: "file-list__action-btn",
      attrs: {
        title: folder.isStarred ? "Retirer des favoris" : "Ajouter aux favoris"
      },
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.toggleStar(folder, "folder");
        }
      }
    }, [_c("i", {
      staticClass: "fa",
      class: folder.isStarred ? "fa-star" : "fa-star-o"
    })])])]);
  }), _vm._v(" "), _vm._l(_vm.files, function (file) {
    return _c("div", {
      key: "file-" + file.id,
      staticClass: "file-list__item",
      class: {
        selected: _vm.isSelected(file, "file"),
        dragging: _vm.draggedItem && _vm.draggedItem.id === file.id && _vm.draggedItem.type === "file"
      },
      attrs: {
        draggable: "true"
      },
      on: {
        dragstart: function ($event) {
          return _vm.handleDragStart(file, "file", $event);
        },
        dragend: _vm.handleDragEnd,
        click: function ($event) {
          return _vm.handleClick(file, "file", $event);
        },
        dblclick: function ($event) {
          return _vm.handleDblClick(file, "file");
        },
        contextmenu: function ($event) {
          $event.preventDefault();
          return _vm.handleContextMenu({
            ...file,
            type: "file"
          }, $event);
        }
      }
    }, [_c("div", [_c("i", {
      class: [_vm.getFileIcon(file), _vm.getFileIconClass(file)],
      staticStyle: {
        "margin-right": "0.75rem",
        "font-size": "1.25rem"
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        "font-weight": "500"
      }
    }, [_vm._v(_vm._s(file.name))])]), _vm._v(" "), _c("div", [_vm._v(_vm._s(file.formattedSize))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.formatDate(file.updatedAt)))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(file.owner.name))]), _vm._v(" "), _c("div", {
      staticClass: "file-list__actions"
    }, [_c("button", {
      staticClass: "file-list__action-btn",
      attrs: {
        title: file.isStarred ? "Retirer des favoris" : "Ajouter aux favoris"
      },
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.toggleStar(file, "file");
        }
      }
    }, [_c("i", {
      staticClass: "fa",
      class: file.isStarred ? "fa-star" : "fa-star-o"
    })])])]);
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "file-list__header"
  }, [_c("div", [_vm._v("Nom")]), _vm._v(" "), _c("div", [_vm._v("Taille")]), _vm._v(" "), _c("div", [_vm._v("Modifié")]), _vm._v(" "), _c("div", [_vm._v("Propriétaire")]), _vm._v(" "), _c("div", [_vm._v("Actions")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-manager"
  }, [_c("FileSidebar", {
    ref: "sidebar",
    attrs: {
      "current-view": _vm.currentView
    },
    on: {
      "view-changed": _vm.changeView,
      "folder-selected": _vm.navigateToFolder
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "file-manager__content",
    on: {
      click: _vm.handleContentClick
    }
  }, [_c("FileToolbar", {
    attrs: {
      "current-folder": _vm.currentFolder,
      "selected-items": _vm.selectedItems,
      "search-query": _vm.searchQuery,
      "current-view": _vm.currentView,
      "view-mode": _vm.viewMode,
      "can-upload-file": _vm.canUploadFile,
      "can-create-folder": _vm.canCreateFolder
    },
    on: {
      upload: _vm.handleUpload,
      "create-folder": _vm.handleCreateFolder,
      delete: _vm.handleDelete,
      search: _vm.handleSearch,
      "view-mode-changed": function ($event) {
        _vm.viewMode = $event;
      }
    }
  }), _vm._v(" "), _vm.breadcrumb.length > 0 ? _c("FileBreadcrumb", {
    attrs: {
      items: _vm.breadcrumb
    },
    on: {
      navigate: _vm.navigateToFolder,
      drop: _vm.handleDrop
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "file-manager__view"
  }, [_vm.loading ? _c("div", {
    staticClass: "file-loading"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin"
  }), _vm._v(" Chargement...\n            ")]) : _vm.files.length === 0 && _vm.folders.length === 0 ? _c("div", {
    staticClass: "file-manager__empty",
    class: {
      "drag-over": _vm.dragOverRoot
    },
    on: {
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.handleRootDragOver.apply(null, arguments);
      },
      dragleave: _vm.handleRootDragLeave,
      drop: function ($event) {
        $event.preventDefault();
        return _vm.handleRootDrop.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-folder-open fa-3x",
    staticStyle: {
      "margin-bottom": "1rem",
      opacity: "0.3"
    }
  }), _vm._v(" "), _c("p", [_vm._v("Ce dossier est vide")]), _vm._v(" "), _vm.dragOverRoot ? _c("p", {
    staticStyle: {
      "margin-top": "1rem",
      color: "#002043",
      "font-weight": "500"
    }
  }, [_c("i", {
    staticClass: "fa fa-hand-pointer"
  }), _vm._v(" Déposer ici pour déplacer vers la racine\n                ")]) : _vm._e()]) : _vm.viewMode === "grid" ? _c("FileGrid", {
    attrs: {
      files: _vm.files,
      folders: _vm.folders,
      "selected-items": _vm.selectedItems,
      "csrf-token": _vm.csrfToken
    },
    on: {
      select: _vm.handleSelect,
      open: _vm.handleOpen,
      more: _vm.handleMore,
      "context-menu": _vm.handleContextMenu,
      drop: _vm.handleDrop
    }
  }) : _c("FileList", {
    attrs: {
      files: _vm.files,
      folders: _vm.folders,
      "selected-items": _vm.selectedItems,
      "csrf-token": _vm.csrfToken
    },
    on: {
      select: _vm.handleSelect,
      open: _vm.handleOpen,
      more: _vm.handleMore,
      "context-menu": _vm.handleContextMenu,
      drop: _vm.handleDrop,
      "file-drop": _vm.handleFileDrop
    }
  })], 1)], 1), _vm._v(" "), _vm.showUploader ? _c("UploadModal", {
    attrs: {
      "folder-id": _vm.currentFolder?.id,
      "initial-files": _vm.droppedFiles,
      "is-admin": _vm.isAdmin,
      "csrf-token": _vm.csrfToken,
      "max-file-size": _vm.maxFileSize
    },
    on: {
      uploaded: _vm.handleFileUploaded,
      close: _vm.handleCloseUploader
    }
  }) : _vm._e(), _vm._v(" "), _vm.showCreateFolder ? _c("CreateFolderModal", {
    attrs: {
      "parent-folder-id": _vm.currentFolder?.id,
      "is-admin": _vm.isAdmin,
      "csrf-token": _vm.csrfToken
    },
    on: {
      created: _vm.handleFolderCreated,
      close: function ($event) {
        _vm.showCreateFolder = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.previewFile ? _c("FilePreview", {
    attrs: {
      file: _vm.previewFile
    },
    on: {
      close: function ($event) {
        _vm.previewFile = null;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.permissionResource ? _c("PermissionManager", {
    attrs: {
      resource: _vm.permissionResource,
      "csrf-token": _vm.csrfToken
    },
    on: {
      close: function ($event) {
        _vm.permissionResource = null;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.renameItem ? _c("RenameModal", {
    attrs: {
      item: _vm.renameItem,
      "csrf-token": _vm.csrfToken
    },
    on: {
      renamed: _vm.handleRenamed,
      close: function ($event) {
        _vm.renameItem = null;
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.contextMenu.visible ? _c("ContextMenu", {
    attrs: {
      visible: _vm.contextMenu.visible,
      item: _vm.contextMenu.item,
      position: _vm.contextMenu.position,
      "current-view": _vm.currentView,
      "is-admin": _vm.isAdmin
    },
    on: {
      open: _vm.handleOpen,
      rename: _vm.handleRename,
      delete: _vm.handleDeleteItem,
      restore: _vm.handleRestore,
      "permanent-delete": _vm.handlePermanentDelete,
      permissions: _vm.handleMore,
      close: function ($event) {
        _vm.contextMenu = {
          visible: false,
          item: null,
          position: {
            x: 0,
            y: 0
          }
        };
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.confirmModal.visible ? _c("ConfirmModal", {
    attrs: {
      title: _vm.confirmModal.title,
      message: _vm.confirmModal.message,
      "sub-message": _vm.confirmModal.subMessage,
      type: _vm.confirmModal.type,
      "confirm-text": _vm.confirmModal.confirmText,
      "cancel-text": _vm.confirmModal.cancelText,
      loading: _vm.confirmModal.loading
    },
    on: {
      confirm: _vm.confirmModal.onConfirm,
      cancel: function ($event) {
        _vm.confirmModal = {
          visible: false
        };
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay file-preview-overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-preview-content"
  }, [_c("div", {
    staticClass: "file-modal__header file-preview-header"
  }, [_c("div", {
    staticClass: "file-preview-title"
  }, [_c("i", {
    class: _vm.getFileIcon(),
    staticStyle: {
      "margin-right": "0.75rem",
      "font-size": "1.5rem"
    }
  }), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.file.name))])]), _vm._v(" "), _c("div", {
    staticClass: "file-preview-actions"
  }, [_c("a", {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      href: _vm.downloadUrl,
      download: "",
      title: "Télécharger"
    }
  }, [_c("i", {
    staticClass: "fa fa-download"
  }), _vm._v(" Télécharger\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-secondary",
    attrs: {
      title: "Partager"
    },
    on: {
      click: _vm.shareFile
    }
  }, [_c("i", {
    staticClass: "fa fa-share-alt"
  }), _vm._v(" Partager\n                ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-close",
    attrs: {
      title: "Fermer"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body file-preview-body"
  }, [_vm.file.isImage ? _c("div", {
    staticClass: "file-preview-image"
  }, [_c("img", {
    staticClass: "preview-image",
    attrs: {
      src: _vm.previewUrl,
      alt: _vm.file.name
    }
  })]) : _vm.file.isVideo ? _c("div", {
    staticClass: "file-preview-video"
  }, [_c("video", {
    staticClass: "preview-video",
    attrs: {
      src: _vm.previewUrl,
      controls: ""
    }
  }, [_vm._v("\n                    Votre navigateur ne supporte pas la lecture vidéo.\n                ")])]) : _vm.file.isPdf ? _c("div", {
    staticClass: "file-preview-pdf"
  }, [_c("div", {
    staticClass: "pdf-toolbar"
  }, [_c("a", {
    staticClass: "pdf-toolbar-btn",
    attrs: {
      href: _vm.downloadUrl,
      download: "",
      title: "Télécharger"
    }
  }, [_c("i", {
    staticClass: "fa fa-download"
  })]), _vm._v(" "), _c("button", {
    staticClass: "pdf-toolbar-btn",
    attrs: {
      title: "Imprimer"
    },
    on: {
      click: _vm.printPdf
    }
  }, [_c("i", {
    staticClass: "fa fa-print"
  })]), _vm._v(" "), _c("button", {
    staticClass: "pdf-toolbar-btn",
    attrs: {
      title: "Plein écran"
    },
    on: {
      click: _vm.toggleFullscreen
    }
  }, [_c("i", {
    staticClass: "fa",
    class: _vm.isFullscreen ? "fa-compress" : "fa-expand"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "pdf-viewer-container"
  }, [_c("iframe", {
    ref: "pdfIframe",
    staticClass: "pdf-viewer",
    attrs: {
      src: _vm.previewUrl
    }
  })])]) : _vm.file.isText ? _c("div", {
    staticClass: "file-preview-text"
  }, [_c("div", {
    staticClass: "text-toolbar"
  }, [_c("a", {
    staticClass: "text-toolbar-btn",
    attrs: {
      href: _vm.downloadUrl,
      download: "",
      title: "Télécharger"
    }
  }, [_c("i", {
    staticClass: "fa fa-download"
  })])]), _vm._v(" "), _c("pre", {
    staticClass: "text-content"
  }, [_vm._v(_vm._s(_vm.textContent))])]) : _c("div", {
    staticClass: "file-preview-unsupported"
  }, [_c("i", {
    staticClass: "fa fa-file fa-5x",
    staticStyle: {
      opacity: "0.3",
      "margin-bottom": "1.5rem",
      color: "#002043"
    }
  }), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "1.125rem",
      color: "#666",
      "margin-bottom": "1.5rem"
    }
  }, [_vm._v("Aperçu non disponible pour ce type de fichier")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-primary",
    attrs: {
      href: _vm.downloadUrl,
      download: ""
    }
  }, [_c("i", {
    staticClass: "fa fa-download"
  }), _vm._v(" Télécharger le fichier\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer file-preview-footer"
  }, [_c("div", {
    staticClass: "file-preview-metadata"
  }, [_c("div", {
    staticClass: "metadata-item"
  }, [_c("i", {
    staticClass: "fa fa-file"
  }), _vm._v(" "), _c("span", [_c("strong", [_vm._v("Taille:")]), _vm._v(" " + _vm._s(_vm.file.formattedSize))])]), _vm._v(" "), _c("div", {
    staticClass: "metadata-item"
  }, [_c("i", {
    staticClass: "fa fa-tag"
  }), _vm._v(" "), _c("span", [_c("strong", [_vm._v("Type:")]), _vm._v(" " + _vm._s(_vm.file.mimeType))])]), _vm._v(" "), _c("div", {
    staticClass: "metadata-item"
  }, [_c("i", {
    staticClass: "fa fa-user"
  }), _vm._v(" "), _c("span", [_c("strong", [_vm._v("Ajouté par:")]), _vm._v(" " + _vm._s(_vm.file.owner.name))])]), _vm._v(" "), _c("div", {
    staticClass: "metadata-item"
  }, [_c("i", {
    staticClass: "fa fa-clock"
  }), _vm._v(" "), _c("span", [_c("strong", [_vm._v("Ajouté le:")]), _vm._v(" " + _vm._s(_vm.formatDate(_vm.file.createdAt)))])])]), _vm._v(" "), _c("button", {
    staticClass: "btn",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_vm._v("Fermer")])])]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "toast"
    }
  }, [_vm.showToast ? _c("div", {
    staticClass: "file-preview-toast"
  }, [_c("i", {
    staticClass: "fa fa-check-circle"
  }), _vm._v("\n            " + _vm._s(_vm.toastMessage) + "\n        ")]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-sidebar"
  }, [_c("div", {
    staticClass: "file-sidebar__section"
  }, [_c("div", {
    staticClass: "file-sidebar__title"
  }, [_vm._v("Navigation")]), _vm._v(" "), _c("a", {
    staticClass: "file-sidebar__item",
    class: {
      active: _vm.currentView === "home"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.$emit("view-changed", "home");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-home"
  }), _vm._v("\n            Accueil\n        ")]), _vm._v(" "), _c("a", {
    staticClass: "file-sidebar__item",
    class: {
      active: _vm.currentView === "starred"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.$emit("view-changed", "starred");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-star"
  }), _vm._v("\n            Favoris\n        ")]), _vm._v(" "), _c("a", {
    staticClass: "file-sidebar__item",
    class: {
      active: _vm.currentView === "trash"
    },
    attrs: {
      href: "#"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.$emit("view-changed", "trash");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-trash"
  }), _vm._v("\n            Corbeille\n        ")])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-toolbar"
  }, [_vm.canUploadFile ? _c("button", {
    staticClass: "file-toolbar__button primary",
    on: {
      click: function ($event) {
        return _vm.$emit("upload");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-upload"
  }), _vm._v(" Téléverser\n    ")]) : _vm._e(), _vm._v(" "), _vm.canCreateFolder ? _c("button", {
    staticClass: "file-toolbar__button",
    on: {
      click: function ($event) {
        return _vm.$emit("create-folder");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-folder-plus"
  }), _vm._v(" Nouveau dossier\n    ")]) : _vm._e(), _vm._v(" "), _vm.selectedItems.length > 0 ? _c("div", {
    staticClass: "file-toolbar__separator"
  }) : _vm._e(), _vm._v(" "), _vm.selectedItems.length > 0 && _vm.canDeleteSelected ? _c("button", {
    staticClass: "file-toolbar__button",
    on: {
      click: function ($event) {
        return _vm.$emit("delete");
      }
    }
  }, [_c("i", {
    staticClass: "fa",
    class: _vm.currentView === "trash" ? "fa-trash" : "fa-trash"
  }), _vm._v(" \n        " + _vm._s(_vm.currentView === "trash" ? "Supprimer définitivement" : "Supprimer") + " (" + _vm._s(_vm.selectedItems.length) + ")\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "file-toolbar__separator"
  }), _vm._v(" "), _c("button", {
    staticClass: "file-toolbar__button",
    class: {
      active: _vm.viewMode === "grid"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("view-mode-changed", "grid");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-th"
  })]), _vm._v(" "), _c("button", {
    staticClass: "file-toolbar__button",
    class: {
      active: _vm.viewMode === "list"
    },
    on: {
      click: function ($event) {
        return _vm.$emit("view-mode-changed", "list");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-list"
  })]), _vm._v(" "), _c("div", {
    staticClass: "file-toolbar__search"
  }, [_c("input", {
    attrs: {
      type: "text",
      placeholder: "Rechercher..."
    },
    domProps: {
      value: _vm.searchQuery
    },
    on: {
      input: function ($event) {
        return _vm.$emit("search", $event.target.value);
      }
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-modal__content--permissions"
  }, [_c("div", {
    staticClass: "file-modal__header"
  }, [_c("h3", [_vm._v("Gestion des permissions")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body"
  }, [!_vm.resourceId ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_c("strong", [_vm._v("Erreur:")]), _vm._v(" ID de ressource invalide. Veuillez fermer cette modale et réessayer.\n            ")]) : _vm.loading ? _c("div", {
    staticClass: "file-loading"
  }, [_c("i", {
    staticClass: "fa fa-spinner fa-spin"
  }), _vm._v(" Chargement...\n            ")]) : _c("div", [_vm._m(0), _vm._v(" "), _vm.permissions.length === 0 ? _c("div", {
    staticClass: "permissions-empty"
  }, [_c("i", {
    staticClass: "fa fa-info-circle"
  }), _vm._v(" "), _c("strong", [_vm._v("Aucune permission spécifique")]), _vm._v(" "), _vm._m(1)]) : _c("div", {
    staticClass: "permissions-current-list"
  }, _vm._l(_vm.permissions, function (permission) {
    return _c("div", {
      key: permission.id,
      staticClass: "permission-current-item"
    }, [permission.user ? _c("span", {
      staticClass: "permission-current-item__badge permission-current-item__badge--user"
    }, [_c("i", {
      staticClass: "fa fa-user"
    }), _vm._v("\n                            " + _vm._s(permission.user.name) + "\n                        ")]) : permission.group ? _c("span", {
      staticClass: "permission-current-item__badge permission-current-item__badge--group"
    }, [_c("i", {
      staticClass: "fa fa-users"
    }), _vm._v("\n                            " + _vm._s(permission.group.label) + "\n                        ")]) : _c("span", {
      staticClass: "permission-current-item__badge permission-current-item__badge--role"
    }, [_c("i", {
      staticClass: "fa fa-shield"
    }), _vm._v("\n                            " + _vm._s(permission.role) + "\n                        ")]), _vm._v(" "), _c("span", {
      staticClass: "permission-current-item__granted-by"
    }, [_vm._v("\n                            Accordé par " + _vm._s(permission.grantedBy.name) + "\n                        ")]), _vm._v(" "), _c("button", {
      staticClass: "permission-current-item__delete",
      attrs: {
        title: "Supprimer"
      },
      on: {
        click: function ($event) {
          return _vm.deletePermission(permission.id);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })])]);
  }), 0), _vm._v(" "), _c("hr"), _vm._v(" "), _c("h5", [_vm._v("Ajouter une permission")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted",
    staticStyle: {
      "font-size": "0.875rem"
    }
  }, [_vm._v("\n                    Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Les permissions peuvent être modifiées ultérieurement.\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "permissions-list"
  }, [_c("div", {
    staticClass: "permission-item"
  }, [_c("div", {
    staticClass: "permission-item__grid"
  }, [_c("div", {
    staticClass: "permission-item__type"
  }, [_c("label", {
    staticClass: "permission-label"
  }, [_vm._v("Type")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newPermission.type,
      expression: "newPermission.type"
    }],
    staticClass: "form-control form-control-sm permission-select",
    on: {
      change: function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.newPermission, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "user"
    }
  }, [_vm._v("Utilisateur")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "role"
    }
  }, [_vm._v("Rôle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "group"
    }
  }, [_vm._v("Groupe")])])]), _vm._v(" "), _c("div", {
    staticClass: "permission-item__value"
  }, [_vm.newPermission.type === "user" ? _c("label", {
    staticClass: "permission-label"
  }, [_vm._v("Utilisateurs")]) : _vm.newPermission.type === "role" ? _c("label", {
    staticClass: "permission-label"
  }, [_vm._v("Rôle")]) : _c("label", {
    staticClass: "permission-label"
  }, [_vm._v("Groupe")]), _vm._v(" "), _vm.newPermission.type === "user" ? _c("div", {
    staticClass: "permission-input-wrapper"
  }, [_c("select", {
    ref: "userSelect",
    staticClass: "form-control form-control-sm user-selectize",
    attrs: {
      multiple: "",
      placeholder: "Rechercher et sélectionner des utilisateurs..."
    }
  })]) : _vm.newPermission.type === "role" ? _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newPermission.role,
      expression: "newPermission.role"
    }],
    staticClass: "form-control form-control-sm permission-select",
    on: {
      change: function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.newPermission, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sélectionner un rôle")]), _vm._v(" "), _vm._l(_vm.availableRoles, function (role) {
    return _c("option", {
      key: role.value,
      domProps: {
        value: role.value
      }
    }, [_vm._v("\n                                        " + _vm._s(role.label) + "\n                                    ")]);
  })], 2) : _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newPermission.groupId,
      expression: "newPermission.groupId"
    }],
    staticClass: "form-control form-control-sm permission-select",
    on: {
      change: function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.newPermission, "groupId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Sélectionner un groupe")]), _vm._v(" "), _vm._l(_vm.availableGroups, function (group) {
    return _c("option", {
      key: group.value,
      domProps: {
        value: group.value
      }
    }, [_vm._v("\n                                        " + _vm._s(group.label) + "\n                                    ")]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "permission-item__action"
  }, [_c("button", {
    staticClass: "btn btn-sm btn-primary permission-add-confirm-btn",
    attrs: {
      disabled: !_vm.canAddPermission,
      title: "Ajouter cette permission"
    },
    on: {
      click: _vm.addPermission
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter\n                                ")])])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer"
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_vm._v("Fermer")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h4", [_c("i", {
    staticClass: "fa fa-shield-alt",
    staticStyle: {
      "margin-right": "0.5rem",
      color: "#002043"
    }
  }), _vm._v("Permissions actuelles")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("small", [_vm._v("Seul l'administrateur aura accès à cette ressource")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-modal__content--rename"
  }, [_c("div", {
    staticClass: "file-modal__header"
  }, [_c("h3", [_vm._v("Renommer " + _vm._s(_vm.item.type === "folder" ? "le dossier" : "le fichier"))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v("Nom")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newName,
      expression: "newName"
    }],
    ref: "nameInput",
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: _vm.item.name
    },
    domProps: {
      value: _vm.newName
    },
    on: {
      keyup: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.handleRename.apply(null, arguments);
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.newName = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer"
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_vm._v("Annuler")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: !_vm.newName || _vm.newName.trim() === ""
    },
    on: {
      click: _vm.handleRename
    }
  }, [_vm._v("\n                Renommer\n            ")])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "file-modal__overlay",
    on: {
      click: function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.handleClose.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "file-modal__content file-modal__content--upload"
  }, [_c("div", {
    staticClass: "file-modal__header"
  }, [_c("h3", [_vm._v("Téléverser des fichiers")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm",
    on: {
      click: _vm.handleClose
    }
  }, [_c("i", {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__body"
  }, [_c("div", {
    staticClass: "file-uploader__dropzone",
    class: {
      dragover: _vm.isDragging,
      "has-files": _vm.allFiles.length > 0
    },
    on: {
      drop: function ($event) {
        $event.preventDefault();
        return _vm.handleDrop.apply(null, arguments);
      },
      dragover: function ($event) {
        $event.preventDefault();
        return _vm.handleDragOver.apply(null, arguments);
      },
      dragenter: function ($event) {
        $event.preventDefault();
        return _vm.handleDragEnter.apply(null, arguments);
      },
      dragleave: _vm.handleDragLeave,
      click: _vm.triggerFileInput
    }
  }, [_c("i", {
    staticClass: "fa fa-cloud-upload fa-3x"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "0.875rem",
      color: "#999",
      margin: "0.5rem 0"
    }
  }, [_vm._v("ou")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("input", {
    ref: "fileInput",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: _vm.handleFileSelect
    }
  }), _vm._v(" "), _vm.allFiles.length > 0 ? _c("div", {
    staticClass: "selected-files"
  }, [_c("hr", {
    staticStyle: {
      margin: "1.5rem 0"
    }
  }), _vm._v(" "), _c("h5", [_c("i", {
    staticClass: "fa fa-file",
    staticStyle: {
      "margin-right": "0.5rem",
      color: "#002043"
    }
  }), _vm._v("\n                    Fichiers (" + _vm._s(_vm.allFiles.length) + ")\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "file-upload-list"
  }, _vm._l(_vm.allFiles, function (fileItem) {
    return _c("div", {
      key: fileItem.id,
      staticClass: "file-upload-item",
      class: {
        "file-upload-item--uploading": fileItem.status === "uploading",
        "file-upload-item--completed": fileItem.status === "completed",
        "file-upload-item--error": fileItem.status === "error"
      }
    }, [_c("div", {
      staticClass: "file-upload-item__info"
    }, [_c("div", {
      staticStyle: {
        display: "flex",
        "align-items": "center",
        gap: "0.5rem",
        width: "100%"
      }
    }, [_c("i", {
      class: _vm.getFileIcon(fileItem),
      style: {
        color: fileItem.status === "completed" ? "#28a745" : fileItem.status === "uploading" ? "#002043" : fileItem.status === "error" ? "#dc3545" : "#002043"
      }
    }), _vm._v(" "), _c("span", {
      staticStyle: {
        flex: "1"
      }
    }, [_vm._v(_vm._s(fileItem.file.name))]), _vm._v(" "), _c("span", {
      staticClass: "file-size"
    }, [_vm._v("(" + _vm._s(_vm.formatFileSize(fileItem.file.size)) + ")")])]), _vm._v(" "), fileItem.status === "uploading" ? _c("div", {
      staticClass: "file-upload-item__progress"
    }, [_c("span", {
      staticClass: "file-upload-item__progress-text"
    }, [_vm._v(_vm._s(Math.round(fileItem.progress)) + "%")]), _vm._v(" "), _c("div", {
      staticClass: "progress",
      staticStyle: {
        flex: "1",
        height: "6px",
        "background-color": "#e9ecef"
      }
    }, [_c("div", {
      staticClass: "progress-bar",
      style: {
        width: fileItem.progress + "%",
        backgroundColor: "#002043"
      },
      attrs: {
        role: "progressbar",
        "aria-valuenow": fileItem.progress,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    })])]) : _vm._e(), _vm._v(" "), fileItem.status === "completed" ? _c("div", {
      staticClass: "file-upload-item__status",
      staticStyle: {
        "margin-top": "0.25rem"
      }
    }, [_c("span", {
      staticStyle: {
        "font-size": "0.8125rem",
        color: "#28a745",
        "margin-left": "0.25rem"
      }
    }, [_vm._v("Téléversé")])]) : _vm._e(), _vm._v(" "), fileItem.status === "error" ? _c("div", {
      staticClass: "file-upload-item__error"
    }, [_c("span", {
      staticStyle: {
        color: "#dc3545",
        "font-size": "0.8125rem",
        "margin-left": "0.25rem"
      }
    }, [_vm._v(_vm._s(fileItem.error))])]) : _vm._e()]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-danger",
      attrs: {
        disabled: fileItem.status === "uploading",
        title: fileItem.status === "uploading" ? "Impossible de supprimer pendant le téléversement" : "Supprimer"
      },
      on: {
        click: function ($event) {
          return _vm.removeFileItem(fileItem);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times"
    })])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.allFiles.length > 0 && !_vm.uploading && _vm.isAdmin ? _c("div", {
    staticClass: "permissions-section"
  }, [_c("hr", {
    staticStyle: {
      margin: "1.5rem 0"
    }
  }), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("p", {
    staticClass: "text-muted",
    staticStyle: {
      "font-size": "0.875rem",
      "margin-bottom": "1rem"
    }
  }, [_vm._v("\n                    Définissez les permissions pour les fichiers téléversés. Les utilisateurs/rôles avec une permission auront accès en lecture et téléchargement uniquement. Ces permissions s'appliqueront à tous les fichiers sélectionnés.\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "permissions-list"
  }, [_vm._l(_vm.permissions, function (permission, index) {
    return _c("div", {
      key: index,
      staticClass: "permission-item"
    }, [_c("div", {
      staticClass: "permission-item__grid"
    }, [_c("div", {
      staticClass: "permission-item__type"
    }, [_c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Type")]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.type,
        expression: "permission.type"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "user"
      }
    }, [_vm._v("Utilisateur")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "role"
      }
    }, [_vm._v("Rôle")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "group"
      }
    }, [_vm._v("Groupe")])])]), _vm._v(" "), _c("div", {
      staticClass: "permission-item__value"
    }, [permission.type === "user" ? _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Utilisateurs")]) : permission.type === "role" ? _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Rôle")]) : _c("label", {
      staticClass: "permission-label"
    }, [_vm._v("Groupe")]), _vm._v(" "), permission.type === "user" ? _c("div", {
      staticClass: "permission-input-wrapper"
    }, [_c("select", {
      ref: "userSelect-" + index,
      refInFor: true,
      staticClass: "form-control form-control-sm user-selectize",
      attrs: {
        "data-index": index,
        multiple: "",
        placeholder: "Rechercher et sélectionner des utilisateurs..."
      }
    })]) : permission.type === "role" ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.role,
        expression: "permission.role"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "role", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Sélectionner un rôle")]), _vm._v(" "), _vm._l(_vm.availableRoles || [], function (role) {
      return _c("option", {
        key: role.value,
        domProps: {
          value: role.value
        }
      }, [_vm._v("\n                                        " + _vm._s(role.label) + "\n                                    ")]);
    })], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: permission.groupId,
        expression: "permission.groupId"
      }],
      staticClass: "form-control form-control-sm permission-select",
      on: {
        change: function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(permission, "groupId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v("Sélectionner un groupe")]), _vm._v(" "), _vm._l(_vm.availableGroups || [], function (group) {
      return _c("option", {
        key: group.value,
        domProps: {
          value: group.value
        }
      }, [_vm._v("\n                                        " + _vm._s(group.label) + "\n                                    ")]);
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "permission-item__action"
    }, [_c("button", {
      staticClass: "btn btn-sm btn-danger permission-remove-btn",
      attrs: {
        title: "Supprimer cette permission"
      },
      on: {
        click: function ($event) {
          return _vm.removePermission(index);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash"
    })])])])]);
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-sm btn-outline-primary permission-add-btn",
    on: {
      click: _vm.addPermission
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" Ajouter une permission\n                    ")])], 2)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "file-modal__footer"
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: _vm.handleClose
    }
  }, [_vm._v("Annuler")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      disabled: _vm.selectedFilesCount === 0 || _vm.uploading
    },
    on: {
      click: _vm.uploadFiles
    }
  }, [_c("i", {
    staticClass: "fa fa-upload"
  }), _vm._v(" Téléverser (" + _vm._s(_vm.selectedFilesCount) + ")\n            ")])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("strong", [_vm._v("Glissez-déposez vos fichiers ici")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn btn-primary"
  }, [_c("i", {
    staticClass: "fa fa-folder-open"
  }), _vm._v(" Parcourir\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", [_c("i", {
    staticClass: "fa fa-shield-alt",
    staticStyle: {
      "margin-right": "0.5rem",
      color: "#002043"
    }
  }), _vm._v("Permissions")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./assets/file-manager/file-manager.scss":
/*!***********************************************!*\
  !*** ./assets/file-manager/file-manager.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/selectize/dist/css/selectize.bootstrap3.css":
/*!******************************************************************!*\
  !*** ./node_modules/selectize/dist/css/selectize.bootstrap3.css ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/file-manager/components/ConfirmModal.vue":
/*!*********************************************************!*\
  !*** ./assets/file-manager/components/ConfirmModal.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmModal.vue?vue&type=template&id=80490dfe& */ "./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe&");
/* harmony import */ var _ConfirmModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmModal.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _ConfirmModal_vue_vue_type_style_index_0_id_80490dfe_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css& */ "./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfirmModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/ConfirmModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/ContextMenu.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/ContextMenu.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=3991ceaa& */ "./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/CreateFolderModal.vue":
/*!**************************************************************!*\
  !*** ./assets/file-manager/components/CreateFolderModal.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true& */ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true&");
/* harmony import */ var _CreateFolderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFolderModal.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _CreateFolderModal_vue_vue_type_style_index_0_id_3ee665bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css& */ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateFolderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ee665bf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/CreateFolderModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileBreadcrumb.vue":
/*!***********************************************************!*\
  !*** ./assets/file-manager/components/FileBreadcrumb.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileBreadcrumb.vue?vue&type=template&id=cfea385a& */ "./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a&");
/* harmony import */ var _FileBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileBreadcrumb.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileGrid.vue":
/*!*****************************************************!*\
  !*** ./assets/file-manager/components/FileGrid.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileGrid.vue?vue&type=template&id=623f4f96& */ "./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96&");
/* harmony import */ var _FileGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileGrid.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileItem.vue":
/*!*****************************************************!*\
  !*** ./assets/file-manager/components/FileItem.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItem.vue?vue&type=template&id=d50cde3a& */ "./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a&");
/* harmony import */ var _FileItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileItem.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileList.vue":
/*!*****************************************************!*\
  !*** ./assets/file-manager/components/FileList.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileList.vue?vue&type=template&id=c101ee24& */ "./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24&");
/* harmony import */ var _FileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileList.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileManager.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/FileManager.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true& */ "./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true&");
/* harmony import */ var _FileManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileManager.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileManager_vue_vue_type_style_index_0_id_7c87b7e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css& */ "./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7c87b7e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FilePreview.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/FilePreview.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=template&id=726e72a8& */ "./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8&");
/* harmony import */ var _FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FilePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileSidebar.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/FileSidebar.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSidebar.vue?vue&type=template&id=b22c9f88& */ "./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88&");
/* harmony import */ var _FileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSidebar.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/FileToolbar.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/FileToolbar.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true& */ "./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true&");
/* harmony import */ var _FileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileToolbar.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileToolbar_vue_vue_type_style_index_0_id_2ba008db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css& */ "./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2ba008db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/FileToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/PermissionManager.vue":
/*!**************************************************************!*\
  !*** ./assets/file-manager/components/PermissionManager.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true& */ "./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true&");
/* harmony import */ var _PermissionManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionManager.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2581d6da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/PermissionManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/RenameModal.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/RenameModal.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenameModal.vue?vue&type=template&id=efa5deea& */ "./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea&");
/* harmony import */ var _RenameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenameModal.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RenameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__.render,
  _RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/RenameModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/UploadModal.vue":
/*!********************************************************!*\
  !*** ./assets/file-manager/components/UploadModal.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true& */ "./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true&");
/* harmony import */ var _UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=script&lang=js& */ "./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _UploadModal_vue_vue_type_style_index_0_id_2c13b5b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css& */ "./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c13b5b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/file-manager/components/UploadModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateFolderModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileList.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./assets/file-manager/components/FileList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RenameModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RenameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe&":
/*!****************************************************************************************!*\
  !*** ./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_template_id_80490dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmModal.vue?vue&type=template&id=80490dfe& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=template&id=80490dfe&");


/***/ }),

/***/ "./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3991ceaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContextMenu.vue?vue&type=template&id=3991ceaa& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ContextMenu.vue?vue&type=template&id=3991ceaa&");


/***/ }),

/***/ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_template_id_3ee665bf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=template&id=3ee665bf&scoped=true&");


/***/ }),

/***/ "./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a&":
/*!******************************************************************************************!*\
  !*** ./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBreadcrumb_vue_vue_type_template_id_cfea385a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileBreadcrumb.vue?vue&type=template&id=cfea385a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileBreadcrumb.vue?vue&type=template&id=cfea385a&");


/***/ }),

/***/ "./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96&":
/*!************************************************************************************!*\
  !*** ./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileGrid_vue_vue_type_template_id_623f4f96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileGrid.vue?vue&type=template&id=623f4f96& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileGrid.vue?vue&type=template&id=623f4f96&");


/***/ }),

/***/ "./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a&":
/*!************************************************************************************!*\
  !*** ./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItem_vue_vue_type_template_id_d50cde3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileItem.vue?vue&type=template&id=d50cde3a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileItem.vue?vue&type=template&id=d50cde3a&");


/***/ }),

/***/ "./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24&":
/*!************************************************************************************!*\
  !*** ./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileList_vue_vue_type_template_id_c101ee24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileList.vue?vue&type=template&id=c101ee24& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileList.vue?vue&type=template&id=c101ee24&");


/***/ }),

/***/ "./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_template_id_7c87b7e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=template&id=7c87b7e6&scoped=true&");


/***/ }),

/***/ "./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_726e72a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilePreview.vue?vue&type=template&id=726e72a8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FilePreview.vue?vue&type=template&id=726e72a8&");


/***/ }),

/***/ "./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSidebar_vue_vue_type_template_id_b22c9f88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileSidebar.vue?vue&type=template&id=b22c9f88& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileSidebar.vue?vue&type=template&id=b22c9f88&");


/***/ }),

/***/ "./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_template_id_2ba008db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=template&id=2ba008db&scoped=true&");


/***/ }),

/***/ "./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionManager_vue_vue_type_template_id_2581d6da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/PermissionManager.vue?vue&type=template&id=2581d6da&scoped=true&");


/***/ }),

/***/ "./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea&":
/*!***************************************************************************************!*\
  !*** ./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RenameModal_vue_vue_type_template_id_efa5deea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RenameModal.vue?vue&type=template&id=efa5deea& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/RenameModal.vue?vue&type=template&id=efa5deea&");


/***/ }),

/***/ "./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_template_id_2c13b5b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=template&id=2c13b5b0&scoped=true&");


/***/ }),

/***/ "./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css& ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmModal_vue_vue_type_style_index_0_id_80490dfe_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/ConfirmModal.vue?vue&type=style&index=0&id=80490dfe&lang=css&");


/***/ }),

/***/ "./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateFolderModal_vue_vue_type_style_index_0_id_3ee665bf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/CreateFolderModal.vue?vue&type=style&index=0&id=3ee665bf&scoped=true&lang=css&");


/***/ }),

/***/ "./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileManager_vue_vue_type_style_index_0_id_7c87b7e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileManager.vue?vue&type=style&index=0&id=7c87b7e6&scoped=true&lang=css&");


/***/ }),

/***/ "./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileToolbar_vue_vue_type_style_index_0_id_2ba008db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/FileToolbar.vue?vue&type=style&index=0&id=2ba008db&scoped=true&lang=css&");


/***/ }),

/***/ "./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadModal_vue_vue_type_style_index_0_id_2c13b5b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/file-manager/components/UploadModal.vue?vue&type=style&index=0&id=2c13b5b0&scoped=true&lang=css&");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_vue-loader_lib_runtime_componentNormalizer_js-node_modules_vue_dist_vue_esm_js","vendors-node_modules_core-js_modules_es_array_push_js","vendors-node_modules_selectize_dist_js_standalone_selectize_min_js","vendors-node_modules_selectize_dist_css_selectize_bootstrap3_css"], function() { return __webpack_exec__("./assets/file-manager/file-manager.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQywrREFBZSxzTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7QUNBcEIsQ0FBQywrREFBZSxzTUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9maWxlLWljb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvZmlsZS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvQ29uZmlybU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NvbnRleHRNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NyZWF0ZUZvbGRlck1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVCcmVhZGNydW1iLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVHcmlkLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVQcmV2aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVTaWRlYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVUb29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1Blcm1pc3Npb25NYW5hZ2VyLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1JlbmFtZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvQ29uZmlybU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvQ29udGV4dE1lbnUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9DcmVhdGVGb2xkZXJNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVCcmVhZGNydW1iLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUdyaWQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlUHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVTaWRlYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVRvb2xiYXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9QZXJtaXNzaW9uTWFuYWdlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1JlbmFtZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvVXBsb2FkTW9kYWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvZmlsZS1tYW5hZ2VyLnNjc3M/NmQ3MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2VsZWN0aXplL2Rpc3QvY3NzL3NlbGVjdGl6ZS5ib290c3RyYXAzLmNzcz9jYTA3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlP2UwOTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NyZWF0ZUZvbGRlck1vZGFsLnZ1ZT85M2IxIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlTWFuYWdlci52dWU/MWJlOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVRvb2xiYXIudnVlPzM2N2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZT8xNmJmIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlPzg1MWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NvbnRleHRNZW51LnZ1ZT8yNjE0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9DcmVhdGVGb2xkZXJNb2RhbC52dWU/NWJiNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUJyZWFkY3J1bWIudnVlPzUwMzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVHcmlkLnZ1ZT9mOWQyIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlSXRlbS52dWU/ZjlhYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUxpc3QudnVlPzY2ZjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyLnZ1ZT8yYjQyIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlUHJldmlldy52dWU/YjUzNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVNpZGViYXIudnVlPzg5MjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVUb29sYmFyLnZ1ZT9kZTVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9QZXJtaXNzaW9uTWFuYWdlci52dWU/MmZmYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvUmVuYW1lTW9kYWwudnVlPzk5NTIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZT9lMWQ3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlPzIxOWIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NvbnRleHRNZW51LnZ1ZT80YWQ3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9DcmVhdGVGb2xkZXJNb2RhbC52dWU/YjAxNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUJyZWFkY3J1bWIudnVlP2VjN2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVHcmlkLnZ1ZT9lMmFhIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlSXRlbS52dWU/NzBmYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUxpc3QudnVlPzZlMjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyLnZ1ZT81YzE0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlUHJldmlldy52dWU/ZTA4MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVNpZGViYXIudnVlPzMxOWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVUb29sYmFyLnZ1ZT81NjU1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9QZXJtaXNzaW9uTWFuYWdlci52dWU/YTgzNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvUmVuYW1lTW9kYWwudnVlP2Q4NDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZT81ZDRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlPzY3OWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NvbnRleHRNZW51LnZ1ZT85NTc3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9DcmVhdGVGb2xkZXJNb2RhbC52dWU/NmZjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUJyZWFkY3J1bWIudnVlP2Q4NDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVHcmlkLnZ1ZT8wOGU5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlSXRlbS52dWU/MjQ2NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZUxpc3QudnVlP2VkYTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyLnZ1ZT84MDMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlUHJldmlldy52dWU/Y2IyMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVNpZGViYXIudnVlPzdjMzkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVUb29sYmFyLnZ1ZT8xOGZhIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9QZXJtaXNzaW9uTWFuYWdlci52dWU/YWE5MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvUmVuYW1lTW9kYWwudnVlP2Q4ODIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZT9kZmQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlPzJmZGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0NyZWF0ZUZvbGRlck1vZGFsLnZ1ZT8yZjQ0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlTWFuYWdlci52dWU/YzczYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVRvb2xiYXIudnVlPzZlNTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZT8yM2QwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVdGlsaXRhaXJlcyBwb3VyIGxhIGdlc3Rpb24gZGVzIGljw7RuZXMgZGUgZmljaGllcnNcclxuICovXHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGEgY2xhc3NlIGQnaWPDtG5lIEZvbnQgQXdlc29tZSBwb3VyIHVuIGZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIEZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENsYXNzZSBGb250IEF3ZXNvbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSWNvbihpdGVtKSB7XHJcbiAgICAvLyBEb3NzaWVyXHJcbiAgICBpZiAoaXRlbS50eXBlID09PSAnZm9sZGVyJykge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtZm9sZGVyJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcmNoaXZlc1xyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAnemlwJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3JhcicgfHwgaXRlbS5leHRlbnNpb24gPT09ICc3eicgfHwgaXRlbS5leHRlbnNpb24gPT09ICd0YXInIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnZ3onKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWFyY2hpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBERlxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAncGRmJyB8fCBpdGVtLmlzUGRmKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLXBkZic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9jdW1lbnRzIFdvcmRcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ2RvYycgfHwgaXRlbS5leHRlbnNpb24gPT09ICdkb2N4JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ29kdCcpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtd29yZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmV1aWxsZXMgZGUgY2FsY3VsIEV4Y2VsXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd4bHMnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAneGxzeCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHMnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWV4Y2VsJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcsOpc2VudGF0aW9ucyBQb3dlclBvaW50XHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdwcHQnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAncHB0eCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHAnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLXBvd2VycG9pbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpY2hpZXJzIHRleHRlXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICd0eHQnIHx8IGl0ZW0uaXNUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlLWFsdCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW1hZ2VzXHJcbiAgICBpZiAoaXRlbS5pc0ltYWdlIHx8IFsnanBnJywgJ2pwZWcnLCAncG5nJywgJ2dpZicsICdibXAnLCAnc3ZnJywgJ3dlYnAnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWltYWdlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWTDqW9zXHJcbiAgICBpZiAoaXRlbS5pc1ZpZGVvIHx8IFsnbXA0JywgJ2F2aScsICdtb3YnLCAnd212JywgJ2ZsdicsICdta3YnLCAnd2VibSddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmEgZmEtdmlkZW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1ZGlvXHJcbiAgICBpZiAoWydtcDMnLCAnd2F2JywgJ29nZycsICdmbGFjJywgJ2FhYycsICdtNGEnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtYXVkaW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvZGVcclxuICAgIGlmIChbJ2h0bWwnLCAnY3NzJywgJ2pzJywgJ3BocCcsICdweScsICdqYXZhJywgJ2NwcCcsICdjJywgJ2gnLCAnanNvbicsICd4bWwnLCAneW1sJywgJ3lhbWwnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZhIGZhLWZpbGUtY29kZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmljaGllciBnw6luw6lyaXF1ZVxyXG4gICAgcmV0dXJuICdmYSBmYS1maWxlJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxhIGNsYXNzZSBDU1MgcG91ciBjb2xvcmVyIGwnaWPDtG5lIHNlbG9uIGxlIHR5cGUgZGUgZmljaGllclxyXG4gKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIEZpY2hpZXIgb3UgZG9zc2llclxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIENsYXNzZSBDU1NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSWNvbkNsYXNzKGl0ZW0pIHtcclxuICAgIC8vIERvc3NpZXJcclxuICAgIGlmIChpdGVtLnR5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWZvbGRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXJjaGl2ZXNcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3ppcCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdyYXInIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnN3onIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAndGFyJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ2d6Jykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1hcmNoaXZlJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBQREZcclxuICAgIGlmIChpdGVtLmV4dGVuc2lvbiA9PT0gJ3BkZicgfHwgaXRlbS5pc1BkZikge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1wZGYnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERvY3VtZW50cyBXb3JkXHJcbiAgICBpZiAoaXRlbS5leHRlbnNpb24gPT09ICdkb2MnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnZG9jeCcgfHwgaXRlbS5leHRlbnNpb24gPT09ICdvZHQnKSB7XHJcbiAgICAgICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLXdvcmQnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldWlsbGVzIGRlIGNhbGN1bCBFeGNlbFxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAneGxzJyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3hsc3gnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnb2RzJykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1leGNlbCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHLDqXNlbnRhdGlvbnMgUG93ZXJQb2ludFxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAncHB0JyB8fCBpdGVtLmV4dGVuc2lvbiA9PT0gJ3BwdHgnIHx8IGl0ZW0uZXh0ZW5zaW9uID09PSAnb2RwJykge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1wb3dlcnBvaW50JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWNoaWVycyB0ZXh0ZVxyXG4gICAgaWYgKGl0ZW0uZXh0ZW5zaW9uID09PSAndHh0JyB8fCBpdGVtLmlzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS10ZXh0JztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbWFnZXNcclxuICAgIGlmIChpdGVtLmlzSW1hZ2UgfHwgWydqcGcnLCAnanBlZycsICdwbmcnLCAnZ2lmJywgJ2JtcCcsICdzdmcnLCAnd2VicCddLmluY2x1ZGVzKGl0ZW0uZXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnZmlsZS1pdGVtX19pY29uLS1pbWFnZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlkw6lvc1xyXG4gICAgaWYgKGl0ZW0uaXNWaWRlbyB8fCBbJ21wNCcsICdhdmknLCAnbW92JywgJ3dtdicsICdmbHYnLCAnbWt2JywgJ3dlYm0nXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tdmlkZW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1ZGlvXHJcbiAgICBpZiAoWydtcDMnLCAnd2F2JywgJ29nZycsICdmbGFjJywgJ2FhYycsICdtNGEnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tYXVkaW8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvZGVcclxuICAgIGlmIChbJ2h0bWwnLCAnY3NzJywgJ2pzJywgJ3BocCcsICdweScsICdqYXZhJywgJ2NwcCcsICdjJywgJ2gnLCAnanNvbicsICd4bWwnLCAneW1sJywgJ3lhbWwnXS5pbmNsdWRlcyhpdGVtLmV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXR1cm4gJ2ZpbGUtaXRlbV9faWNvbi0tY29kZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmljaGllciBnw6luw6lyaXF1ZVxyXG4gICAgcmV0dXJuICdmaWxlLWl0ZW1fX2ljb24tLWZpbGUnO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBGaWxlTWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIudnVlJztcclxuaW1wb3J0ICcuL2ZpbGUtbWFuYWdlci5zY3NzJztcclxuXHJcbi8vIEltcG9ydCBqUXVlcnkgZXhwbGljaXRseSB0byBlbnN1cmUgaXQncyBhdmFpbGFibGUgZ2xvYmFsbHlcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcclxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcclxuXHJcbi8vIEltcG9ydCBTZWxlY3RpemVKUyBDU1NcclxuaW1wb3J0ICdzZWxlY3RpemUvZGlzdC9jc3Mvc2VsZWN0aXplLmJvb3RzdHJhcDMuY3NzJztcclxuXHJcbi8vIEltcG9ydCBTZWxlY3RpemVKUyBzdGFuZGFsb25lIHZlcnNpb24gKGluY2x1ZGVzIGpRdWVyeSBkZXBlbmRlbmN5IGhhbmRsaW5nKVxyXG5yZXF1aXJlKCdzZWxlY3RpemUvZGlzdC9qcy9zdGFuZGFsb25lL3NlbGVjdGl6ZS5taW4uanMnKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtbWFuYWdlci1hcHAnKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IENTUkYgdG9rZW4gZnJvbSB3aW5kb3cgb3IgZGF0YSBhdHRyaWJ1dGVcclxuICAgIGNvbnN0IGNzcmZUb2tlbiA9IHdpbmRvdy5GSUxFX01BTkFHRVJfQ1NSRl9UT0tFTiB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgIGFwcEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXRva2VuJykgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJztcclxuXHJcbiAgICBpZiAoIWNzcmZUb2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kISBBUEkgcmVxdWVzdHMgd2lsbCBmYWlsLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgICAgIGVsOiAnI2ZpbGUtbWFuYWdlci1hcHAnLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgRmlsZU1hbmFnZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjc3JmVG9rZW46IGNzcmZUb2tlblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6ICc8RmlsZU1hbmFnZXIgOmNzcmYtdG9rZW49XCJjc3JmVG9rZW5cIiAvPidcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19vdmVybGF5XCIgQGNsaWNrLnNlbGY9XCJoYW5kbGVDYW5jZWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fY29udGVudCBmaWxlLW1vZGFsX19jb250ZW50LS1jb25maXJtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz57eyB0aXRsZSB9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbVwiIEBjbGljaz1cImhhbmRsZUNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tbW9kYWxfX2ljb25cIiB2LWlmPVwidHlwZSA9PT0gJ2RhbmdlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1tb2RhbF9faWNvblwiIHYtZWxzZS1pZj1cInR5cGUgPT09ICdlcnJvcidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tbW9kYWxfX2ljb25cIiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnd2FybmluZydcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb25maXJtLW1vZGFsX19tZXNzYWdlXCI+e3sgbWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJzdWJNZXNzYWdlXCIgY2xhc3M9XCJjb25maXJtLW1vZGFsX19zdWItbWVzc2FnZVwiPnt7IHN1Yk1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY2FuY2VsVGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY29uZmlybUJ1dHRvbkNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVDb25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cImxvYWRpbmdcIiBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+e3sgY29uZmlybVRleHQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnQ29uZmlybWF0aW9uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Yk1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdjb25maXJtJywgLy8gJ2NvbmZpcm0nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnLCAnZXJyb3InXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiBbJ2NvbmZpcm0nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnLCAnZXJyb3InXS5pbmNsdWRlcyh2YWx1ZSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtVGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdDb25maXJtZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsVGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdBbm51bGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRpbmc6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGNvbmZpcm1CdXR0b25DbGFzcygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2RhbmdlcicgfHwgdGhpcy50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICd3YXJuaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdidG4td2FybmluZyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdidG4tcHJpbWFyeSc7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaGFuZGxlQ29uZmlybSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ2FuY2VsKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgIXRoaXMubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYW5jZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBDbG9zZSBvbiBFc2NhcGUga2V5XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY29uZmlybS1tb2RhbF9faWNvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmZhLXRpbWVzLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbmZpcm0tbW9kYWxfX21lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY29uZmlybS1tb2RhbF9fc3ViLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgbWFyZ2luOiAwLjc1cmVtIDAgMCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmZpbGUtbW9kYWxfX2Zvb3RlciB7XHJcbiAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgICAgICAgICAgIC8qIFJlbW92ZWQgdHJhbnNmb3JtIGFuZCBib3gtc2hhZG93IHRvIHByZXZlbnQgc2l6ZSBjaGFuZ2VzICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLXdhcm5pbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGE4MDA7XHJcbiAgICAgICAgICAgIC8qIFJlbW92ZWQgdHJhbnNmb3JtIGFuZCBib3gtc2hhZG93IHRvIHByZXZlbnQgc2l6ZSBjaGFuZ2VzICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IHYtaWY9XCJ2aXNpYmxlXCIgY2xhc3M9XCJjb250ZXh0LW1lbnVcIiA6c3R5bGU9XCJtZW51U3R5bGVcIiBAY2xpY2suc3RvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGV4dC1tZW51X19pdGVtXCIgQGNsaWNrPVwiaGFuZGxlT3BlblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOmNsYXNzPVwiaXRlbS50eXBlID09PSAnZm9sZGVyJyA/ICdmYS1mb2xkZXItb3BlbicgOiAnZmEtZXllJ1wiPjwvaT4gXHJcbiAgICAgICAgICAgIHt7IGl0ZW0udHlwZSA9PT0gJ2ZvbGRlcicgPyAnT3V2cmlyJyA6ICdWb2lyJyB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgdi1pZj1cImlzQWRtaW4gfHwgaXRlbS5jYW5EZWxldGUgfHwgaXRlbS5jYW5FZGl0XCIgY2xhc3M9XCJjb250ZXh0LW1lbnVfX3NlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgdi1pZj1cImN1cnJlbnRWaWV3ICE9PSAndHJhc2gnICYmIGl0ZW0uY2FuRWRpdFwiIGNsYXNzPVwiY29udGV4dC1tZW51X19pdGVtXCIgQGNsaWNrPVwiaGFuZGxlUmVuYW1lXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT4gUmVub21tZXJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50VmlldyA9PT0gJ3RyYXNoJyAmJiBpdGVtLmNhbkRlbGV0ZVwiIGNsYXNzPVwiY29udGV4dC1tZW51X19pdGVtXCIgQGNsaWNrPVwiaGFuZGxlUmVzdG9yZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVuZG9cIj48L2k+IFJlc3RhdXJlclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgdi1pZj1cImN1cnJlbnRWaWV3ID09PSAndHJhc2gnICYmIGl0ZW0uY2FuRGVsZXRlXCIgY2xhc3M9XCJjb250ZXh0LW1lbnVfX2l0ZW0gZGFuZ2VyXCIgQGNsaWNrPVwiaGFuZGxlUGVybWFuZW50RGVsZXRlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+IFN1cHByaW1lciBkw6lmaW5pdGl2ZW1lbnRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IHYtaWY9XCJjdXJyZW50VmlldyAhPT0gJ3RyYXNoJyAmJiBpc0FkbWluXCIgY2xhc3M9XCJjb250ZXh0LW1lbnVfX2l0ZW1cIiBAY2xpY2s9XCJoYW5kbGVQZXJtaXNzaW9uc1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxvY2tcIj48L2k+IFBlcm1pc3Npb25zXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiB2LWlmPVwiY3VycmVudFZpZXcgIT09ICd0cmFzaCcgJiYgaXRlbS5jYW5EZWxldGVcIiBjbGFzcz1cImNvbnRleHQtbWVudV9fc2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiB2LWlmPVwiY3VycmVudFZpZXcgIT09ICd0cmFzaCcgJiYgaXRlbS5jYW5EZWxldGVcIiBjbGFzcz1cImNvbnRleHQtbWVudV9faXRlbSBkYW5nZXJcIiBAY2xpY2s9XCJoYW5kbGVEZWxldGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4gU3VwcHJpbWVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmlzaWJsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoeyB4OiAwLCB5OiAwIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudFZpZXc6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnaG9tZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0FkbWluOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBtZW51U3R5bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt0aGlzLnBvc2l0aW9uLnh9cHhgLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBgJHt0aGlzLnBvc2l0aW9uLnl9cHhgLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlUmVuYW1lKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW5hbWUnLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlRGVsZXRlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGUnLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlUmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVzdG9yZScsIHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVQZXJtYW5lbnREZWxldGUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Blcm1hbmVudC1kZWxldGUnLCB0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlUGVybWlzc2lvbnMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Blcm1pc3Npb25zJywgdGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gQ2xvc2UgbWVudSB3aGVuIGNsaWNraW5nIG91dHNpZGVcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fb3ZlcmxheVwiIEBjbGljay5zZWxmPVwiJGVtaXQoJ2Nsb3NlJylcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fY29udGVudCBmaWxlLW1vZGFsX19jb250ZW50LS1mb2xkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPk5vdXZlYXUgZG9zc2llcjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbVwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob20gZHUgZG9zc2llciA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9sZGVyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tIGR1IGRvc3NpZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXAuZW50ZXI9XCJjcmVhdGVGb2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJuYW1lSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aHIgdi1pZj1cImlzQWRtaW5cIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXNBZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5QZXJtaXNzaW9uczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCIgc3R5bGU9XCJmb250LXNpemU6IDAuODc1cmVtO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEw6lmaW5pc3NleiBsZXMgcGVybWlzc2lvbnMgcG91ciBjZSBkb3NzaWVyLiBMZXMgdXRpbGlzYXRldXJzL3LDtGxlcyBhdmVjIHVuZSBwZXJtaXNzaW9uIGF1cm9udCBhY2PDqHMgZW4gbGVjdHVyZSBldCB0w6lsw6ljaGFyZ2VtZW50IHVuaXF1ZW1lbnQuIExlcyBwZXJtaXNzaW9ucyBwZXV2ZW50IMOqdHJlIG1vZGlmacOpZXMgdWx0w6lyaWV1cmVtZW50LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcm1pc3Npb25zLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKHBlcm1pc3Npb24sIGluZGV4KSBpbiBwZXJtaXNzaW9uc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVybWlzc2lvbi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1fX2dyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1fX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJtaXNzaW9uLWxhYmVsXCI+VHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwicGVybWlzc2lvbi50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1c2VyXCI+VXRpbGlzYXRldXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvbGVcIj5Sw7RsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JvdXBcIj5Hcm91cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVybWlzc2lvbi1pdGVtX192YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIiB2LWlmPVwicGVybWlzc2lvbi50eXBlID09PSAndXNlcidcIj5VdGlsaXNhdGV1cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIiB2LWVsc2UtaWY9XCJwZXJtaXNzaW9uLnR5cGUgPT09ICdyb2xlJ1wiPlLDtGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJtaXNzaW9uLWxhYmVsXCIgdi1lbHNlPkdyb3VwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicGVybWlzc2lvbi50eXBlID09PSAndXNlcidcIiBjbGFzcz1cInBlcm1pc3Npb24taW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZj1cIid1c2VyU2VsZWN0LScgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS1pbmRleD1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSB1c2VyLXNlbGVjdGl6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIGV0IHPDqWxlY3Rpb25uZXIgZGVzIHV0aWxpc2F0ZXVycy4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtZWxzZS1pZj1cInBlcm1pc3Npb24udHlwZSA9PT0gJ3JvbGUnXCIgdi1tb2RlbD1cInBlcm1pc3Npb24ucm9sZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBwZXJtaXNzaW9uLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1biByw7RsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwicm9sZSBpbiAoYXZhaWxhYmxlUm9sZXMgfHwgW10pXCIgOmtleT1cInJvbGUudmFsdWVcIiA6dmFsdWU9XCJyb2xlLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByb2xlLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1lbHNlIHYtbW9kZWw9XCJwZXJtaXNzaW9uLmdyb3VwSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGVybWlzc2lvbi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlPDqWxlY3Rpb25uZXIgdW4gZ3JvdXBlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJncm91cCBpbiAoYXZhaWxhYmxlR3JvdXBzIHx8IFtdKVwiIDprZXk9XCJncm91cC52YWx1ZVwiIDp2YWx1ZT1cImdyb3VwLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBncm91cC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVybWlzc2lvbi1pdGVtX19hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIHBlcm1pc3Npb24tcmVtb3ZlLWJ0blwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlUGVybWlzc2lvbihpbmRleClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpdGxlPVwiJ1N1cHByaW1lciBjZXR0ZSBwZXJtaXNzaW9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgcGVybWlzc2lvbi1hZGQtYnRuXCIgQGNsaWNrPVwiYWRkUGVybWlzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IEFqb3V0ZXIgdW5lIHBlcm1pc3Npb25cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVGb2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhY2FuQ3JlYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3LDqWVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcGFyZW50Rm9sZGVySWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNBZG1pbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzcmZUb2tlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmb2xkZXJOYW1lOiAnJyxcclxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICBzZWFyY2hUaW1lb3V0OiBudWxsLFxyXG4gICAgICAgICAgICBhdmFpbGFibGVSb2xlczogW10sXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUdyb3VwczogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGNhbkNyZWF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9sZGVyTmFtZS50cmltKCkubGVuZ3RoID4gMDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgaGFuZGxlcihuZXdQZXJtcykge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSBpbml0aWFsaXplIFNlbGVjdGl6ZUpTIGlmIHVzZXIgaXMgYWRtaW5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0FkbWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdGl6ZUpTIGZvciBuZXcgdXNlciBwZXJtaXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Blcm1zLmZvckVhY2goKHBlcm0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVybS50eXBlID09PSAndXNlcicgJiYgIXBlcm0uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGl6ZShpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcm0udHlwZSAhPT0gJ3VzZXInICYmIHBlcm0uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlc3Ryb3kgU2VsZWN0aXplSlMgaWYgdHlwZSBjaGFuZ2VzIGZyb20gdXNlciB0byByb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtLnNlbGVjdGl6ZUluc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm0uc2VsZWN0aXplSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7ICAgICAgICBcclxuICAgICAgICAvLyBMb2FkIGF2YWlsYWJsZSByb2xlcyBhbmQgZ3JvdXBzIG9ubHkgaWYgdXNlciBpcyBhZG1pbiAobm9uLWJsb2NraW5nKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQWRtaW4pIHtcclxuICAgICAgICAgICAgLy8gVXNlIHNldFRpbWVvdXQgdG8gbWFrZSBpdCBub24tYmxvY2tpbmdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRSb2xlcygpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaWxlbnRseSBmYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVSb2xlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRHcm91cHMoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2lsZW50bHkgZmFpbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlR3JvdXBzID0gW107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMubmFtZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm5hbWVJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBEZXN0cm95IGFsbCBTZWxlY3RpemVKUyBpbnN0YW5jZXNcclxuICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uLnNlbGVjdGl6ZUluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLnNlbGVjdGl6ZUluc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCBmZXRjaCBoZWFkZXJzIHdpdGggQ1NSRiB0b2tlblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldENzcmZIZWFkZXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6IHRoaXMuY3NyZlRva2VuLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBhZGQgQ1NSRiB0b2tlbiB0byBmZXRjaCBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENzcmZIZWFkZXJzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgbG9hZFJvbGVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yb2xlcycsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZVJvbGVzID0gZGF0YS5yb2xlcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcm9sZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgdG8gZGVmYXVsdCByb2xlcyBpZiBBUEkgZmFpbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlUm9sZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1JPTEVfVVNFUicsIGxhYmVsOiAnVXNlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnUk9MRV9URUNITklDSUVOJywgbGFiZWw6ICdUZWNobmljaWVuJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdST0xFX0FETUlOJywgbGFiZWw6ICdBZG1pbicgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRHcm91cHMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dyb3VwcycsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUdyb3VwcyA9IGRhdGEuZ3JvdXBzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBncm91cHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVHcm91cHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkUGVybWlzc2lvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBlcm1pc3Npb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd1c2VyJyxcclxuICAgICAgICAgICAgICAgIHVzZXJJZHM6IFtdLCAvLyBBcnJheSBvZiB1c2VyIElEcyBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICByb2xlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZUluc3RhbmNlOiBudWxsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0aXplSlMgYWZ0ZXIgVnVlIGhhcyByZW5kZXJlZFxyXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxlY3RpemUoaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbW92ZVBlcm1pc3Npb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IHRoaXMucGVybWlzc2lvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBEZXN0cm95IFNlbGVjdGl6ZUpTIGluc3RhbmNlIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgICAgICBpZiAocGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmVpbml0aWFsaXplIFNlbGVjdGl6ZUpTIGZvciByZW1haW5pbmcgcGVybWlzc2lvbnNcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVybS50eXBlID09PSAndXNlcicgJiYgIXBlcm0uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aXplKGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5pdFNlbGVjdGl6ZShpbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uID0gdGhpcy5wZXJtaXNzaW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghcGVybWlzc2lvbiB8fCBwZXJtaXNzaW9uLnR5cGUgIT09ICd1c2VyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RFbGVtZW50ID0gdGhpcy4kcmVmc1tgdXNlclNlbGVjdC0ke2luZGV4fWBdO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJldHJ5IGlmIGVsZW1lbnQgbm90IHJlbmRlcmVkIHlldFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRTZWxlY3RpemUoaW5kZXgpLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBqUXVlcnkgYW5kIFNlbGVjdGl6ZUpTIGFyZSBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuJCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy4kLmZuLnNlbGVjdGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTZWxlY3RpemVKUyBub3QgbG9hZGVkIHlldCwgcmV0cnlpbmcuLi4nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0U2VsZWN0aXplKGluZGV4KSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRGVzdHJveSBleGlzdGluZyBpbnN0YW5jZSBpZiBhbnlcclxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdGl6ZUpTXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RpemUgPSB3aW5kb3cuJChzZWxlY3RFbGVtZW50KS5zZWxlY3RpemUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFsncmVtb3ZlX2J1dHRvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ6ICdpZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxGaWVsZDogJ25hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEZpZWxkOiBbJ25hbWUnLCAnZW1haWwnXSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEl0ZW1zOiBudWxsLCAvLyBObyBsaW1pdFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiAnYm9keScsIC8vIEF0dGFjaCBkcm9wZG93biB0byBib2R5IHRvIGF2b2lkIHNjcm9sbCBpc3N1ZXNcclxuICAgICAgICAgICAgICAgICAgICBsb2FkOiAocXVlcnksIGNhbGxiYWNrKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGAvYXBpL3VzZXJzL3NlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbGltaXQ9MjBgLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudXNlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YS51c2Vycy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgJHt1c2VyLm5hbWV9ICgke3VzZXIuZW1haWx9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY2FsbGJhY2soKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdGl6ZUpTIHdpdGggbXVsdGlwbGUgY2FuIHJldHVybiBlaXRoZXIgYW4gYXJyYXkgb3IgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi51c2VySWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLnVzZXJJZHMgPSB2YWx1ZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi51c2VySWRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UgPSBzZWxlY3RpemVbMF0uc2VsZWN0aXplO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIFNlbGVjdGl6ZUpTOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgY3JlYXRlRm9sZGVyKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCBjcmVhdGUgdGhlIGZvbGRlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9maWxlcy9mb2xkZXJzJywgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5mb2xkZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRGb2xkZXJJZDogdGhpcy5wYXJlbnRGb2xkZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyOiAnICsgKGRhdGEuZXJyb3IgfHwgJ0ltcG9zc2libGUgZGUgY3LDqWVyIGxlIGRvc3NpZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgZm9sZGVySWQgaXMgYSB2YWxpZCBudW1iZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gZGF0YS5mb2xkZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmb2xkZXJJZCB8fCBpc05hTihOdW1iZXIoZm9sZGVySWQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgZm9sZGVyIElEIHJlY2VpdmVkOicsIGRhdGEuZm9sZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyOiBJRCBkZSBkb3NzaWVyIGludmFsaWRlIHJlw6d1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBUaGVuIGFkZCBwZXJtaXNzaW9ucyBpZiBhbnkgYW5kIHVzZXIgaXMgYWRtaW5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWRtaW4gJiYgdGhpcy5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbkVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGVybSBvZiB0aGlzLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVybS50eXBlID09PSAndXNlcicgJiYgcGVybS51c2VySWRzICYmIHBlcm0udXNlcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG9uZSBwZXJtaXNzaW9uIHBlciBzZWxlY3RlZCB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB1c2VySWQgb2YgcGVybS51c2VySWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFBlcm1pc3Npb25Ub1NlcnZlcihmb2xkZXJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZvbGRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJtLnR5cGUgPT09ICdyb2xlJyAmJiBwZXJtLnJvbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRQZXJtaXNzaW9uVG9TZXJ2ZXIoZm9sZGVySWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZvbGRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IHBlcm0ucm9sZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVybS50eXBlID09PSAnZ3JvdXAnICYmIHBlcm0uZ3JvdXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFBlcm1pc3Npb25Ub1NlcnZlcihmb2xkZXJJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZm9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogcGVybS5ncm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHBlcm1pc3Npb246JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbkVycm9ycy5wdXNoKGBQZXJtaXNzaW9uIHBvdXIgJHtwZXJtLnR5cGUgPT09ICd1c2VyJyA/ICd1dGlsaXNhdGV1cicgOiAncsO0bGUnfSBub24gYWpvdXTDqWVgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbkVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignU29tZSBwZXJtaXNzaW9ucyBjb3VsZCBub3QgYmUgYWRkZWQ6JywgcGVybWlzc2lvbkVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGZhaWwgdGhlIGZvbGRlciBjcmVhdGlvbiwganVzdCB3YXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjcmVhdGVkJywgZGF0YS5mb2xkZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGZvbGRlcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZGUgbGEgY3LDqWF0aW9uIGR1IGRvc3NpZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgc2VuZFBlcm1pc3Npb25Ub1NlcnZlcihmb2xkZXJJZCwgcGVybWlzc2lvbkRhdGEpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBmb2xkZXJJZCBpcyBhIG51bWJlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0eXBlb2YgZm9sZGVySWQgPT09ICdudW1iZXInID8gZm9sZGVySWQgOiBOdW1iZXIoZm9sZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpZCB8fCBpc05hTihpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGZvbGRlciBJRDonLCBmb2xkZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7aWR9L3Blcm1pc3Npb25zYCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBlcm1pc3Npb25EYXRhKSxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcGVybWlzc2lvbjonLCBlcnJvckRhdGEuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdVbmtub3duIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcGVybWlzc2lvbjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wZXJtaXNzaW9ucy1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMjA0MztcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDMyLCA2NywgMC4xKTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24taXRlbV9fZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNDBweCAxZnIgYXV0bztcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tc2VsZWN0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMjA0MztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDMyLCA2NywgMC4xKTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24taW5wdXQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24taXRlbV9fdHlwZSB7XHJcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtX192YWx1ZSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAwOyAvKiBJbXBvcnRhbnQgcG91ciDDqXZpdGVyIGxlIGTDqWJvcmRlbWVudCAqL1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtX19hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTsgLyogQWxpZ25lIGF2ZWMgbGVzIGlucHV0cyAqL1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1yZW1vdmUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1yZW1vdmUtYnRuOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIC8qIFJlbW92ZWQgdHJhbnNmb3JtIGFuZCBib3gtc2hhZG93IHRvIHByZXZlbnQgc2l6ZSBjaGFuZ2VzICovXHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWFkZC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1hZGQtYnRuOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIC8qIFJlbW92ZWQgdHJhbnNmb3JtIGFuZCBib3gtc2hhZG93IHRvIHByZXZlbnQgc2l6ZSBjaGFuZ2VzICovXHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmU6IHN1ciBwZXRpdHMgw6ljcmFucywgcGFzc2VyIGVuIGNvbG9ubmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGVybWlzc2lvbi1pdGVtX19ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZXJtaXNzaW9uLWl0ZW1fX2FjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItcmVzdWx0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi51c2VyLXJlc3VsdC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgXHJcbiAgICAgICAgICAgY2xhc3M9XCJmaWxlLWJyZWFkY3J1bWJfX2l0ZW1cIlxyXG4gICAgICAgICAgIDpjbGFzcz1cInsgJ2RyYWctb3Zlcic6IGRyYWdPdmVySXRlbUlkID09PSAncm9vdCcgfVwiXHJcbiAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnbmF2aWdhdGUnLCBudWxsKVwiXHJcbiAgICAgICAgICAgQGRyYWdvdmVyLnByZXZlbnQ9XCJoYW5kbGVEcmFnT3Zlcigncm9vdCcsICRldmVudClcIlxyXG4gICAgICAgICAgIEBkcmFnbGVhdmU9XCJoYW5kbGVEcmFnTGVhdmUoJ3Jvb3QnKVwiXHJcbiAgICAgICAgICAgQGRyb3AucHJldmVudD1cImhhbmRsZURyb3AobnVsbCwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWhvbWVcIj48L2k+IEFjY3VlaWxcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLWJyZWFkY3J1bWJfX3NlcGFyYXRvclwiIHYtaWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+Lzwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGl0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxhIDprZXk9XCJpdGVtLmlkXCJcclxuICAgICAgICAgICAgICAgaHJlZj1cIiNcIiBcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLWJyZWFkY3J1bWJfX2l0ZW1cIlxyXG4gICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IFxyXG4gICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICdkcmFnLW92ZXInOiBkcmFnT3Zlckl0ZW1JZCA9PT0gaXRlbS5pZFxyXG4gICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnbmF2aWdhdGUnLCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgIEBkcmFnb3Zlci5wcmV2ZW50PVwiaGFuZGxlRHJhZ092ZXIoaXRlbS5pZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIEBkcmFnbGVhdmU9XCJoYW5kbGVEcmFnTGVhdmUoaXRlbS5pZClcIlxyXG4gICAgICAgICAgICAgICBAZHJvcC5wcmV2ZW50PVwiaGFuZGxlRHJvcChpdGVtLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBpdGVtLm5hbWUgfX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxXCIgOmtleT1cIidzZXAtJyArIGl0ZW0uaWRcIiBjbGFzcz1cImZpbGUtYnJlYWRjcnVtYl9fc2VwYXJhdG9yXCI+Lzwvc3Bhbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJhZ092ZXJJdGVtSWQ6IG51bGwsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaGFuZGxlRHJhZ092ZXIoaXRlbUlkLCBldmVudCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRyYWdnZWQgaXRlbSBkYXRhXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVySXRlbUlkID0gaXRlbUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVEcmFnTGVhdmUoaXRlbUlkKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgY2xlYXIgaWYgd2UncmUgYWN0dWFsbHkgbGVhdmluZyB0aGUgaXRlbVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYWdPdmVySXRlbUlkID09PSBpdGVtSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVySXRlbUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlRHJvcChmb2xkZXIsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJJdGVtSWQgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZHJhZ2dlZERhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBpZiAoIWRyYWdnZWREYXRhKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZCA9IEpTT04ucGFyc2UoZHJhZ2dlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBkcm9wcGluZyBvbiBpdHNlbGYgaWYgaXQncyBhIGZvbGRlclxyXG4gICAgICAgICAgICAgICAgaWYgKGZvbGRlciAmJiBkcmFnZ2VkLmlkID09PSBmb2xkZXIuaWQgJiYgZHJhZ2dlZC50eXBlID09PSAnZm9sZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRW1pdCBkcm9wIGV2ZW50IHRvIHBhcmVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJvcCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBkcmFnZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEZvbGRlcjogZm9sZGVyLCAvLyBudWxsIGZvciByb290LCBmb2xkZXIgb2JqZWN0IGZvciBwYXJlbnQgZm9sZGVyc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgZHJhZyBkYXRhOicsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtZ3JpZFwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCJmb2xkZXIgaW4gZm9sZGVyc1wiIFxyXG4gICAgICAgICAgICAgOmtleT1cIidmb2xkZXItJyArIGZvbGRlci5pZFwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImZpbGUtZ3JpZF9faXRlbVwiXHJcbiAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdkcmFnLW92ZXInOiBkcmFnT3ZlckZvbGRlcklkID09PSBmb2xkZXIuaWQgfVwiXHJcbiAgICAgICAgICAgICBAZHJhZ292ZXIucHJldmVudD1cImhhbmRsZURyYWdPdmVyKGZvbGRlciwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICBAZHJhZ2xlYXZlPVwiaGFuZGxlRHJhZ0xlYXZlKGZvbGRlcilcIlxyXG4gICAgICAgICAgICAgQGRyb3AucHJldmVudD1cImhhbmRsZURyb3AoZm9sZGVyLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxGaWxlSXRlbVxyXG4gICAgICAgICAgICAgICAgOml0ZW09XCJ7IC4uLmZvbGRlciwgdHlwZTogJ2ZvbGRlcicgfVwiXHJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWQ9XCJpc1NlbGVjdGVkKGZvbGRlciwgJ2ZvbGRlcicpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUNsaWNrKGZvbGRlciwgJ2ZvbGRlcicsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVwiaGFuZGxlRGJsQ2xpY2soZm9sZGVyLCAnZm9sZGVyJylcIlxyXG4gICAgICAgICAgICAgICAgQHN0YXI9XCJ0b2dnbGVTdGFyKGZvbGRlciwgJ2ZvbGRlcicpXCJcclxuICAgICAgICAgICAgICAgIEBtb3JlPVwiaGFuZGxlTW9yZSh7IC4uLmZvbGRlciwgdHlwZTogJ2ZvbGRlcicgfSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAY29udGV4dC1tZW51PVwiaGFuZGxlQ29udGV4dE1lbnUoeyAuLi5mb2xkZXIsIHR5cGU6ICdmb2xkZXInIH0sICRldmVudClcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCJmaWxlIGluIGZpbGVzXCIgXHJcbiAgICAgICAgICAgICA6a2V5PVwiJ2ZpbGUtJyArIGZpbGUuaWRcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJmaWxlLWdyaWRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPEZpbGVJdGVtXHJcbiAgICAgICAgICAgICAgICA6aXRlbT1cInsgLi4uZmlsZSwgdHlwZTogJ2ZpbGUnIH1cIlxyXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkPVwiaXNTZWxlY3RlZChmaWxlLCAnZmlsZScpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZUNsaWNrKGZpbGUsICdmaWxlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJoYW5kbGVEYmxDbGljayhmaWxlLCAnZmlsZScpXCJcclxuICAgICAgICAgICAgICAgIEBzdGFyPVwidG9nZ2xlU3RhcihmaWxlLCAnZmlsZScpXCJcclxuICAgICAgICAgICAgICAgIEBtb3JlPVwiaGFuZGxlTW9yZSh7IC4uLmZpbGUsIHR5cGU6ICdmaWxlJyB9LCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBjb250ZXh0LW1lbnU9XCJoYW5kbGVDb250ZXh0TWVudSh7IC4uLmZpbGUsIHR5cGU6ICdmaWxlJyB9LCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZpbGVJdGVtIGZyb20gJy4vRmlsZUl0ZW0udnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBGaWxlSXRlbSxcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGZpbGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvbGRlcnM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtczoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjc3JmVG9rZW46IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFzdENsaWNrVGltZTogMCxcclxuICAgICAgICAgICAgbGFzdENsaWNrSXRlbTogbnVsbCxcclxuICAgICAgICAgICAgY2xpY2tUaW1lb3V0OiBudWxsLFxyXG4gICAgICAgICAgICBkcmFnT3ZlckZvbGRlcklkOiBudWxsLFxyXG4gICAgICAgICAgICBkcmFnZ2VkSXRlbTogbnVsbCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpc1NlbGVjdGVkKGl0ZW0sIHR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5zb21lKGkgPT4gaS5pZCA9PT0gaXRlbS5pZCAmJiBpLnR5cGUgPT09IHR5cGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlRHJhZ092ZXIoZm9sZGVyLCBldmVudCkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGFsbG93IGRyb3Agb24gZm9sZGVyc1xyXG4gICAgICAgICAgICBpZiAoZm9sZGVyLnR5cGUgIT09ICdmb2xkZXInKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRyYWdnZWQgaXRlbSBkYXRhIChmcm9tIGRyYWdzdGFydCBldmVudCBzdG9yZWQgaW4gcGFyZW50KVxyXG4gICAgICAgICAgICAvLyBXZSBjYW4ndCByZWFkIGRhdGFUcmFuc2Zlci5nZXREYXRhKCkgZHVyaW5nIGRyYWdvdmVyLCBzbyB3ZSBjaGVjayB0eXBlc1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IGFsbG93IGRyb3BwaW5nIG9uIGl0c2VsZiAtIHdlJ2xsIGNoZWNrIHRoaXMgaW4gZHJvcCBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJGb2xkZXJJZCA9IGZvbGRlci5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlRHJhZ0xlYXZlKGZvbGRlcikge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGNsZWFyIGlmIHdlJ3JlIGFjdHVhbGx5IGxlYXZpbmcgdGhlIGZvbGRlciAobm90IGVudGVyaW5nIGEgY2hpbGQpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ092ZXJGb2xkZXJJZCA9PT0gZm9sZGVyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnT3ZlckZvbGRlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlRHJvcChmb2xkZXIsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJGb2xkZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkcmFnZ2VkRGF0YSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIGlmICghZHJhZ2dlZERhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkID0gSlNPTi5wYXJzZShkcmFnZ2VkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IGFsbG93IGRyb3BwaW5nIG9uIGl0c2VsZlxyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnZWQuaWQgPT09IGZvbGRlci5pZCAmJiBkcmFnZ2VkLnR5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFbWl0IGRyb3AgZXZlbnQgdG8gcGFyZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkcm9wJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGRyYWdnZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Rm9sZGVyOiBmb2xkZXIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBkcmFnIGRhdGE6JywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUNsaWNrKGl0ZW0sIHR5cGUsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIElmIEN0cmwvTWV0YSBpcyBwcmVzc2VkLCBlbWl0IGltbWVkaWF0ZWx5IChubyBuZWVkIHRvIHdhaXQgZm9yIGRvdWJsZS1jbGljayBkZXRlY3Rpb24pXHJcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHsgLi4uaXRlbSwgdHlwZSB9LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUHJldmVudCBzaW5nbGUgY2xpY2sgaWYgZG91YmxlIGNsaWNrIGlzIGRldGVjdGVkXHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVEaWZmID0gbm93IC0gdGhpcy5sYXN0Q2xpY2tUaW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdENsaWNrSXRlbSAmJiBcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdENsaWNrSXRlbS5pZCA9PT0gaXRlbS5pZCAmJiBcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdENsaWNrSXRlbS50eXBlID09PSB0eXBlICYmIFxyXG4gICAgICAgICAgICAgICAgdGltZURpZmYgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIC8vIERvdWJsZSBjbGljayBkZXRlY3RlZCwgY2FuY2VsIHNpbmdsZSBjbGlja1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RDbGlja0l0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBub3c7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENsaWNrSXRlbSA9IHsgaWQ6IGl0ZW0uaWQsIHR5cGUgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERlbGF5IHNpbmdsZSBjbGljayB0byBhbGxvdyBkb3VibGUgY2xpY2sgZGV0ZWN0aW9uIChvbmx5IGlmIEN0cmwvTWV0YSBub3QgcHJlc3NlZClcclxuICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdCcsIHsgLi4uaXRlbSwgdHlwZSB9LCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Q2xpY2tJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb24gdG8gcHJldmVudCBwYXJlbnQgY2xpY2sgaGFuZGxlciBmcm9tIGNsZWFyaW5nIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZURibENsaWNrKGl0ZW0sIHR5cGUpIHtcclxuICAgICAgICAgICAgLy8gQ2FuY2VsIHBlbmRpbmcgc2luZ2xlIGNsaWNrXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENsaWNrSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nLCB7IC4uLml0ZW0sIHR5cGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVNb3JlKGl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEVtaXQgY29udGV4dCBtZW51IGV2ZW50IHdpdGggcG9zaXRpb25cclxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjb250ZXh0LW1lbnUnLCB7IC4uLml0ZW0gfSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW9yZScsIHsgLi4uaXRlbSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlQ29udGV4dE1lbnUoaXRlbSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29udGV4dC1tZW51JywgeyAuLi5pdGVtIH0sIGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHRvZ2dsZVN0YXIoaXRlbSwgdHlwZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy8ke2l0ZW0uaWR9L3N0YXI/dHlwZT0ke3R5cGV9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6IHRoaXMuY3NyZlRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlzU3RhcnJlZCA9IGRhdGEuc3RhcnJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHRvZ2dsaW5nIHN0YXI6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbVwiIFxyXG4gICAgICAgICA6Y2xhc3M9XCJ7IHNlbGVjdGVkOiBzZWxlY3RlZCwgJ2RyYWdnaW5nJzogaXNEcmFnZ2luZyB9XCJcclxuICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgIEBkcmFnc3RhcnQ9XCJoYW5kbGVEcmFnU3RhcnRcIlxyXG4gICAgICAgICBAZHJhZ2VuZD1cImhhbmRsZURyYWdFbmRcIlxyXG4gICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkZXZlbnQpXCJcclxuICAgICAgICAgQGRibGNsaWNrPVwiJGVtaXQoJ2RibGNsaWNrJylcIlxyXG4gICAgICAgICBAY29udGV4dG1lbnU9XCIkZW1pdCgnY29udGV4dC1tZW51JywgJGV2ZW50KVwiPlxyXG5cclxuXHJcbiAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtaXRlbV9fc3RhclwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmaWxlLWl0ZW1fX3N0YXItLXN0YXJyZWQnOiBpdGVtLmlzU3RhcnJlZCB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiJGVtaXQoJ3N0YXInKVwiXHJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJpdGVtLmlzU3RhcnJlZCA/ICdSZXRpcmVyIGRlcyBmYXZvcmlzJyA6ICdBam91dGVyIGF1eCBmYXZvcmlzJ1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOnN0eWxlPVwieyBjb2xvcjogaXRlbS5pc1N0YXJyZWQgPyAnI0ZGQ0IwMCcgOiAnIzAwMCcgfVwiIDpjbGFzcz1cIml0ZW0uaXNTdGFycmVkID8gJ2ZhLXN0YXInIDogJ2ZhLXN0YXItbydcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbV9faWNvblwiIDpjbGFzcz1cImdldEZpbGVJY29uQ2xhc3MoaXRlbSlcIj5cclxuICAgICAgICAgICAgPGkgOmNsYXNzPVwiZ2V0RmlsZUljb24oaXRlbSlcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbV9fbmFtZVwiIDp0aXRsZT1cIml0ZW0ubmFtZVwiPnt7IGl0ZW0ubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1fX21ldGFcIiB2LWlmPVwiaXRlbS50eXBlID09PSAnZmlsZSdcIj5cclxuICAgICAgICAgICAge3sgaXRlbS5mb3JtYXR0ZWRTaXplIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbV9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5zdG9wPVwiJGVtaXQoJ21vcmUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsdXMgZCdvcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLXZcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBnZXRGaWxlSWNvbiwgZ2V0RmlsZUljb25DbGFzcyB9IGZyb20gJy4uL2ZpbGUtaWNvbnMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0RmlsZUljb24sXHJcbiAgICAgICAgZ2V0RmlsZUljb25DbGFzcyxcclxuICAgICAgICBoYW5kbGVEcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGRyYWdnZWQgaXRlbSBkYXRhXHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xyXG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnYXBwbGljYXRpb24vanNvbicsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLml0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLml0ZW0udHlwZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBZGQgdmlzdWFsIGZlZWRiYWNrXHJcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoZXZlbnQudGFyZ2V0LCAwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZURyYWdFbmQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZmlsZS1saXN0XCIgXHJcbiAgICAgICA6Y2xhc3M9XCJ7ICdkcmFnLW92ZXInOiBpc0RyYWdnaW5nRmlsZXMgfVwiXHJcbiAgICAgICBAZHJhZ292ZXIucHJldmVudD1cImhhbmRsZUZpbGVEcmFnT3ZlclwiXHJcbiAgICAgICBAZHJhZ2VudGVyLnByZXZlbnQ9XCJoYW5kbGVGaWxlRHJhZ0VudGVyXCJcclxuICAgICAgIEBkcmFnbGVhdmU9XCJoYW5kbGVGaWxlRHJhZ0xlYXZlXCJcclxuICAgICAgIEBkcm9wLnByZXZlbnQ9XCJoYW5kbGVGaWxlRHJvcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtbGlzdF9faGVhZGVyXCI+XHJcbiAgICAgIDxkaXY+Tm9tPC9kaXY+XHJcbiAgICAgIDxkaXY+VGFpbGxlPC9kaXY+XHJcbiAgICAgIDxkaXY+TW9kaWZpw6k8L2Rpdj5cclxuICAgICAgPGRpdj5Qcm9wcmnDqXRhaXJlPC9kaXY+XHJcbiAgICAgIDxkaXY+QWN0aW9uczwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtbGlzdF9fYm9keVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgdi1mb3I9XCJmb2xkZXIgaW4gZm9sZGVyc1wiXHJcbiAgICAgICAgOmtleT1cIidmb2xkZXItJyArIGZvbGRlci5pZFwiXHJcbiAgICAgICAgY2xhc3M9XCJmaWxlLWxpc3RfX2l0ZW1cIlxyXG4gICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKGZvbGRlciwgJ2ZvbGRlcicpLFxyXG4gICAgICAgICAgJ2RyYWctb3Zlcic6IGRyYWdPdmVyRm9sZGVySWQgPT09IGZvbGRlci5pZCxcclxuICAgICAgICAgICdkcmFnZ2luZyc6IGRyYWdnZWRJdGVtICYmIGRyYWdnZWRJdGVtLmlkID09PSBmb2xkZXIuaWQgJiYgZHJhZ2dlZEl0ZW0udHlwZSA9PT0gJ2ZvbGRlcicsXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgQGRyYWdzdGFydD1cImhhbmRsZURyYWdTdGFydChmb2xkZXIsICdmb2xkZXInLCAkZXZlbnQpXCJcclxuICAgICAgICBAZHJhZ2VuZD1cImhhbmRsZURyYWdFbmRcIlxyXG4gICAgICAgIEBkcmFnb3Zlci5wcmV2ZW50PVwiaGFuZGxlRHJhZ092ZXIoZm9sZGVyLCAkZXZlbnQpXCJcclxuICAgICAgICBAZHJhZ2xlYXZlPVwiaGFuZGxlRHJhZ0xlYXZlKGZvbGRlcilcIlxyXG4gICAgICAgIEBkcm9wLnByZXZlbnQ9XCJoYW5kbGVEcm9wKGZvbGRlciwgJGV2ZW50KVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2soZm9sZGVyLCAnZm9sZGVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgQGRibGNsaWNrPVwiaGFuZGxlRGJsQ2xpY2soZm9sZGVyLCAnZm9sZGVyJylcIlxyXG4gICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwiXHJcbiAgICAgICAgICBoYW5kbGVDb250ZXh0TWVudSh7IC4uLmZvbGRlciwgdHlwZTogJ2ZvbGRlcicgfSwgJGV2ZW50KVxyXG4gICAgICAgIFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1mb2xkZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC43NXJlbTsgY29sb3I6ICNmZmNiMDA7IGZvbnQtc2l6ZTogMS4yNXJlbVwiXHJcbiAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNTAwXCI+e3sgZm9sZGVyLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj4tPC9kaXY+XHJcbiAgICAgICAgPGRpdj57eyBmb3JtYXREYXRlKGZvbGRlci51cGRhdGVkQXQpIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdj57eyBmb2xkZXIub3duZXIubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWxpc3RfX2FjdGlvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljay5zdG9wPVwidG9nZ2xlU3Rhcihmb2xkZXIsICdmb2xkZXInKVwiXHJcbiAgICAgICAgICAgIDp0aXRsZT1cImZvbGRlci5pc1N0YXJyZWQgPyAnUmV0aXJlciBkZXMgZmF2b3JpcycgOiAnQWpvdXRlciBhdXggZmF2b3JpcydcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZpbGUtbGlzdF9fYWN0aW9uLWJ0blwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOmNsYXNzPVwiZm9sZGVyLmlzU3RhcnJlZCA/ICdmYS1zdGFyJyA6ICdmYS1zdGFyLW8nXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiXHJcbiAgICAgICAgOmtleT1cIidmaWxlLScgKyBmaWxlLmlkXCJcclxuICAgICAgICBjbGFzcz1cImZpbGUtbGlzdF9faXRlbVwiXHJcbiAgICAgICAgOmNsYXNzPVwieyBcclxuICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkKGZpbGUsICdmaWxlJyksXHJcbiAgICAgICAgICAnZHJhZ2dpbmcnOiBkcmFnZ2VkSXRlbSAmJiBkcmFnZ2VkSXRlbS5pZCA9PT0gZmlsZS5pZCAmJiBkcmFnZ2VkSXRlbS50eXBlID09PSAnZmlsZScsXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgQGRyYWdzdGFydD1cImhhbmRsZURyYWdTdGFydChmaWxlLCAnZmlsZScsICRldmVudClcIlxyXG4gICAgICAgIEBkcmFnZW5kPVwiaGFuZGxlRHJhZ0VuZFwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2soZmlsZSwgJ2ZpbGUnLCAkZXZlbnQpXCJcclxuICAgICAgICBAZGJsY2xpY2s9XCJoYW5kbGVEYmxDbGljayhmaWxlLCAnZmlsZScpXCJcclxuICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cIlxyXG4gICAgICAgICAgaGFuZGxlQ29udGV4dE1lbnUoeyAuLi5maWxlLCB0eXBlOiAnZmlsZScgfSwgJGV2ZW50KVxyXG4gICAgICAgIFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgOmNsYXNzPVwiW2dldEZpbGVJY29uKGZpbGUpLCBnZXRGaWxlSWNvbkNsYXNzKGZpbGUpXVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjc1cmVtOyBmb250LXNpemU6IDEuMjVyZW1cIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDUwMFwiPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt7IGZpbGUuZm9ybWF0dGVkU2l6ZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXY+e3sgZm9ybWF0RGF0ZShmaWxlLnVwZGF0ZWRBdCkgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2Pnt7IGZpbGUub3duZXIubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWxpc3RfX2FjdGlvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIEBjbGljay5zdG9wPVwidG9nZ2xlU3RhcihmaWxlLCAnZmlsZScpXCJcclxuICAgICAgICAgICAgOnRpdGxlPVwiZmlsZS5pc1N0YXJyZWQgPyAnUmV0aXJlciBkZXMgZmF2b3JpcycgOiAnQWpvdXRlciBhdXggZmF2b3JpcydcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZpbGUtbGlzdF9fYWN0aW9uLWJ0blwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOmNsYXNzPVwiZmlsZS5pc1N0YXJyZWQgPyAnZmEtc3RhcicgOiAnZmEtc3Rhci1vJ1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgZ2V0RmlsZUljb24sIGdldEZpbGVJY29uQ2xhc3MgfSBmcm9tICcuLi9maWxlLWljb25zLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgZmlsZXM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgfSxcclxuICAgIGZvbGRlcnM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkSXRlbXM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgfSxcclxuICAgIGNzcmZUb2tlbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYXN0Q2xpY2tUaW1lOiAwLFxyXG4gICAgICBsYXN0Q2xpY2tJdGVtOiBudWxsLFxyXG4gICAgICBjbGlja1RpbWVvdXQ6IG51bGwsXHJcbiAgICAgIGRyYWdPdmVyRm9sZGVySWQ6IG51bGwsXHJcbiAgICAgIGRyYWdnZWRJdGVtOiBudWxsLFxyXG4gICAgICBpc0RyYWdnaW5nRmlsZXM6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdldEZpbGVJY29uLFxyXG4gICAgZ2V0RmlsZUljb25DbGFzcyxcclxuICAgIGlzU2VsZWN0ZWQoaXRlbSwgdHlwZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoXHJcbiAgICAgICAgKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQgJiYgaS50eXBlID09PSB0eXBlXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRHJhZ1N0YXJ0KGl0ZW0sIHR5cGUsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dlZEl0ZW0gPSB7IGlkOiBpdGVtLmlkLCB0eXBlLCBuYW1lOiBpdGVtLm5hbWUgfTtcclxuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCdhcHBsaWNhdGlvbi9qc29uJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb24gdG8gcHJldmVudCB0cmlnZ2VyaW5nIGZpbGUgZHJhZyBoYW5kbGVyc1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEcmFnRW5kKCkge1xyXG4gICAgICB0aGlzLmRyYWdnZWRJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEcmFnT3Zlcihmb2xkZXIsIGV2ZW50KSB7XHJcbiAgICAgIC8vIE9ubHkgYWxsb3cgZHJvcCBvbiBmb2xkZXJzXHJcbiAgICAgIGlmIChmb2xkZXIudHlwZSAhPT0gXCJmb2xkZXJcIikgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgLy8gRG9uJ3QgaGFuZGxlIGlmIGZpbGVzIGFyZSBiZWluZyBkcmFnZ2VkIGZyb20gb3V0c2lkZVxyXG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGV4dGVybmFsIGZpbGVzIChGaWxlcyB0eXBlIHdpdGhvdXQgYXBwbGljYXRpb24vanNvbilcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcygnRmlsZXMnKSAmJiBcclxuICAgICAgICAgICFldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBkcmFnZ2VkIGl0ZW0gZGF0YSAoZnJvbSBkcmFnc3RhcnQgZXZlbnQgc3RvcmVkIGluIHBhcmVudClcclxuICAgICAgLy8gV2UgY2FuJ3QgcmVhZCBkYXRhVHJhbnNmZXIuZ2V0RGF0YSgpIGR1cmluZyBkcmFnb3Zlciwgc28gd2UgY2hlY2sgdHlwZXNcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikpIHtcclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBkcm9wcGluZyBvbiBpdHNlbGYgLSB3ZSdsbCBjaGVjayB0aGlzIGluIGRyb3AgaGFuZGxlclxyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgdGhpcy5kcmFnT3ZlckZvbGRlcklkID0gZm9sZGVyLmlkO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRHJhZ0xlYXZlKGZvbGRlcikge1xyXG4gICAgICAvLyBPbmx5IGNsZWFyIGlmIHdlJ3JlIGFjdHVhbGx5IGxlYXZpbmcgdGhlIGZvbGRlciAobm90IGVudGVyaW5nIGEgY2hpbGQpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRyYWdPdmVyRm9sZGVySWQgPT09IGZvbGRlci5pZCkge1xyXG4gICAgICAgICAgdGhpcy5kcmFnT3ZlckZvbGRlcklkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDUwKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEcm9wKGZvbGRlciwgZXZlbnQpIHtcclxuICAgICAgdGhpcy5kcmFnT3ZlckZvbGRlcklkID0gbnVsbDtcclxuICAgICAgXHJcbiAgICAgIC8vIERvbid0IGhhbmRsZSBpZiBmaWxlcyBhcmUgYmVpbmcgZHJvcHBlZCBmcm9tIG91dHNpZGVcclxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBleHRlcm5hbCBmaWxlcyAoRmlsZXMgdHlwZSB3aXRob3V0IGFwcGxpY2F0aW9uL2pzb24pXHJcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICFldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZHJhZ2dlZERhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgIGlmICghZHJhZ2dlZERhdGEpIHJldHVybjtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZHJhZ2dlZCA9IEpTT04ucGFyc2UoZHJhZ2dlZERhdGEpO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBkcm9wcGluZyBvbiBpdHNlbGZcclxuICAgICAgICBpZiAoZHJhZ2dlZC5pZCA9PT0gZm9sZGVyLmlkICYmIGRyYWdnZWQudHlwZSA9PT0gXCJmb2xkZXJcIikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW1pdCBkcm9wIGV2ZW50IHRvIHBhcmVudFxyXG4gICAgICAgIHRoaXMuJGVtaXQoXCJkcm9wXCIsIHtcclxuICAgICAgICAgIGl0ZW06IGRyYWdnZWQsXHJcbiAgICAgICAgICB0YXJnZXRGb2xkZXI6IGZvbGRlcixcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGRyYWcgZGF0YTpcIiwgZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVDbGljayhpdGVtLCB0eXBlLCBldmVudCkge1xyXG4gICAgICAvLyBJZiBDdHJsL01ldGEgaXMgcHJlc3NlZCwgZW1pdCBpbW1lZGlhdGVseSAobm8gbmVlZCB0byB3YWl0IGZvciBkb3VibGUtY2xpY2sgZGV0ZWN0aW9uKVxyXG4gICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdChcInNlbGVjdFwiLCB7IC4uLml0ZW0sIHR5cGUgfSwgZXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJldmVudCBzaW5nbGUgY2xpY2sgaWYgZG91YmxlIGNsaWNrIGlzIGRldGVjdGVkXHJcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IHRpbWVEaWZmID0gbm93IC0gdGhpcy5sYXN0Q2xpY2tUaW1lO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMubGFzdENsaWNrSXRlbSAmJlxyXG4gICAgICAgIHRoaXMubGFzdENsaWNrSXRlbS5pZCA9PT0gaXRlbS5pZCAmJlxyXG4gICAgICAgIHRoaXMubGFzdENsaWNrSXRlbS50eXBlID09PSB0eXBlICYmXHJcbiAgICAgICAgdGltZURpZmYgPCAzMDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gRG91YmxlIGNsaWNrIGRldGVjdGVkLCBjYW5jZWwgc2luZ2xlIGNsaWNrXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lb3V0KTtcclxuICAgICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdENsaWNrSXRlbSA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBub3c7XHJcbiAgICAgIHRoaXMubGFzdENsaWNrSXRlbSA9IHsgaWQ6IGl0ZW0uaWQsIHR5cGUgfTtcclxuXHJcbiAgICAgIC8vIERlbGF5IHNpbmdsZSBjbGljayB0byBhbGxvdyBkb3VibGUgY2xpY2sgZGV0ZWN0aW9uIChvbmx5IGlmIEN0cmwvTWV0YSBub3QgcHJlc3NlZClcclxuICAgICAgdGhpcy5jbGlja1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLiRlbWl0KFwic2VsZWN0XCIsIHsgLi4uaXRlbSwgdHlwZSB9LCBldmVudCk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2xpY2tUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RDbGlja0l0ZW0gPSBudWxsO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgICBcclxuICAgICAgLy8gU3RvcCBwcm9wYWdhdGlvbiB0byBwcmV2ZW50IHBhcmVudCBjbGljayBoYW5kbGVyIGZyb20gY2xlYXJpbmcgc2VsZWN0aW9uXHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZURibENsaWNrKGl0ZW0sIHR5cGUpIHtcclxuICAgICAgLy8gQ2FuY2VsIHBlbmRpbmcgc2luZ2xlIGNsaWNrXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZW91dCk7XHJcbiAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IDA7XHJcbiAgICAgIHRoaXMubGFzdENsaWNrSXRlbSA9IG51bGw7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJvcGVuXCIsIHsgLi4uaXRlbSwgdHlwZSB9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVNb3JlKGl0ZW0pIHtcclxuICAgICAgdGhpcy4kZW1pdChcIm1vcmVcIiwgeyAuLi5pdGVtIH0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUNvbnRleHRNZW51KGl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJjb250ZXh0LW1lbnVcIiwgeyAuLi5pdGVtIH0sIGV2ZW50KTtcclxuICAgIH0sXHJcbiAgICBhc3luYyB0b2dnbGVTdGFyKGl0ZW0sIHR5cGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7aXRlbS5pZH0vc3Rhcj90eXBlPSR7dHlwZX1gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1DU1JGLVRva2VuJzogdGhpcy5jc3JmVG9rZW4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBpdGVtLmlzU3RhcnJlZCA9IGRhdGEuc3RhcnJlZDtcclxuICAgICAgICAgIC8vIEVtaXQgZXZlbnQgdG8gcGFyZW50IHRvIHVwZGF0ZSB0aGUgaXRlbSBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgdGhpcy4kZW1pdChcInN0YXItdG9nZ2xlZFwiLCB7IC4uLml0ZW0sIHR5cGUsIGlzU3RhcnJlZDogZGF0YS5zdGFycmVkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdG9nZ2xpbmcgc3RhcjpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuIFwiLVwiO1xyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImZyLUZSXCIsIHtcclxuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGhhbmRsZUZpbGVEcmFnRW50ZXIoZXZlbnQpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQgZnJvbSBvdXRzaWRlIChub3QgZnJvbSB3aXRoaW4gdGhlIGFwcClcclxuICAgICAgLy8gT25seSBoYW5kbGUgaWYgRmlsZXMgdHlwZSBpcyBwcmVzZW50IGJ1dCBOT1QgYXBwbGljYXRpb24vanNvbiAoaW50ZXJuYWwgZHJhZylcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcygnRmlsZXMnKSAmJiBcclxuICAgICAgICAgICFldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nRmlsZXMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBoYW5kbGVGaWxlRHJhZ092ZXIoZXZlbnQpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgZmlsZXMgYXJlIGJlaW5nIGRyYWdnZWQgZnJvbSBvdXRzaWRlXHJcbiAgICAgIC8vIE9ubHkgaGFuZGxlIGlmIEZpbGVzIHR5cGUgaXMgcHJlc2VudCBidXQgTk9UIGFwcGxpY2F0aW9uL2pzb24gKGludGVybmFsIGRyYWcpXHJcbiAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ0ZpbGVzJykgJiYgXHJcbiAgICAgICAgICAhZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBoYW5kbGVGaWxlRHJhZ0xlYXZlKGV2ZW50KSB7XHJcbiAgICAgIC8vIE9ubHkgY2xlYXIgaWYgd2UncmUgYWN0dWFsbHkgbGVhdmluZyB0aGUgbGlzdCBjb250YWluZXJcclxuICAgICAgaWYgKCFldmVudC5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdGaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgaGFuZGxlRmlsZURyb3AoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuaXNEcmFnZ2luZ0ZpbGVzID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGVjayBpZiBmaWxlcyBhcmUgYmVpbmcgZHJvcHBlZCBmcm9tIG91dHNpZGVcclxuICAgICAgLy8gT25seSBoYW5kbGUgaWYgRmlsZXMgdHlwZSBpcyBwcmVzZW50IGJ1dCBOT1QgYXBwbGljYXRpb24vanNvbiAoaW50ZXJuYWwgZHJhZylcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgIWV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcygnYXBwbGljYXRpb24vanNvbicpKSB7XHJcbiAgICAgICAgLy8gRW1pdCBldmVudCB0byBwYXJlbnQgdG8gb3BlbiB1cGxvYWQgbW9kYWxcclxuICAgICAgICB0aGlzLiRlbWl0KCdmaWxlLWRyb3AnLCB7XHJcbiAgICAgICAgICBmaWxlczogQXJyYXkuZnJvbShldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tYW5hZ2VyXCI+XHJcbiAgICAgICAgPEZpbGVTaWRlYmFyIFxyXG4gICAgICAgICAgICByZWY9XCJzaWRlYmFyXCJcclxuICAgICAgICAgICAgOmN1cnJlbnQtdmlldz1cImN1cnJlbnRWaWV3XCJcclxuICAgICAgICAgICAgQHZpZXctY2hhbmdlZD1cImNoYW5nZVZpZXdcIlxyXG4gICAgICAgICAgICBAZm9sZGVyLXNlbGVjdGVkPVwibmF2aWdhdGVUb0ZvbGRlclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tYW5hZ2VyX19jb250ZW50XCIgQGNsaWNrPVwiaGFuZGxlQ29udGVudENsaWNrXCI+XHJcbiAgICAgICAgICAgIDxGaWxlVG9vbGJhclxyXG4gICAgICAgICAgICAgICAgOmN1cnJlbnQtZm9sZGVyPVwiY3VycmVudEZvbGRlclwiXHJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWQtaXRlbXM9XCJzZWxlY3RlZEl0ZW1zXCJcclxuICAgICAgICAgICAgICAgIDpzZWFyY2gtcXVlcnk9XCJzZWFyY2hRdWVyeVwiXHJcbiAgICAgICAgICAgICAgICA6Y3VycmVudC12aWV3PVwiY3VycmVudFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgOnZpZXctbW9kZT1cInZpZXdNb2RlXCJcclxuICAgICAgICAgICAgICAgIDpjYW4tdXBsb2FkLWZpbGU9XCJjYW5VcGxvYWRGaWxlXCJcclxuICAgICAgICAgICAgICAgIDpjYW4tY3JlYXRlLWZvbGRlcj1cImNhbkNyZWF0ZUZvbGRlclwiXHJcbiAgICAgICAgICAgICAgICBAdXBsb2FkPVwiaGFuZGxlVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgIEBjcmVhdGUtZm9sZGVyPVwiaGFuZGxlQ3JlYXRlRm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIEBkZWxldGU9XCJoYW5kbGVEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgQHNlYXJjaD1cImhhbmRsZVNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBAdmlldy1tb2RlLWNoYW5nZWQ9XCJ2aWV3TW9kZSA9ICRldmVudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8RmlsZUJyZWFkY3J1bWJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJicmVhZGNydW1iLmxlbmd0aCA+IDBcIlxyXG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiYnJlYWRjcnVtYlwiXHJcbiAgICAgICAgICAgICAgICBAbmF2aWdhdGU9XCJuYXZpZ2F0ZVRvRm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIEBkcm9wPVwiaGFuZGxlRHJvcFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tYW5hZ2VyX192aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJmaWxlLWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gQ2hhcmdlbWVudC4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZmlsZXMubGVuZ3RoID09PSAwICYmIGZvbGRlcnMubGVuZ3RoID09PSAwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1tYW5hZ2VyX19lbXB0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2RyYWctb3Zlcic6IGRyYWdPdmVyUm9vdCB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgQGRyYWdvdmVyLnByZXZlbnQ9XCJoYW5kbGVSb290RHJhZ092ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAZHJhZ2xlYXZlPVwiaGFuZGxlUm9vdERyYWdMZWF2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBkcm9wLnByZXZlbnQ9XCJoYW5kbGVSb290RHJvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9wZW4gZmEtM3hcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDFyZW07IG9wYWNpdHk6IDAuMztcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2UgZG9zc2llciBlc3QgdmlkZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVwiZHJhZ092ZXJSb290XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtOyBjb2xvcjogIzAwMjA0MzsgZm9udC13ZWlnaHQ6IDUwMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1oYW5kLXBvaW50ZXJcIj48L2k+IETDqXBvc2VyIGljaSBwb3VyIGTDqXBsYWNlciB2ZXJzIGxhIHJhY2luZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8RmlsZUdyaWRcclxuICAgICAgICAgICAgICAgICAgICB2LWVsc2UtaWY9XCJ2aWV3TW9kZSA9PT0gJ2dyaWQnXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZmlsZXM9XCJmaWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmZvbGRlcnM9XCJmb2xkZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICA6c2VsZWN0ZWQtaXRlbXM9XCJzZWxlY3RlZEl0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y3NyZi10b2tlbj1cImNzcmZUb2tlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdD1cImhhbmRsZVNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQG9wZW49XCJoYW5kbGVPcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICBAbW9yZT1cImhhbmRsZU1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjb250ZXh0LW1lbnU9XCJoYW5kbGVDb250ZXh0TWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGRyb3A9XCJoYW5kbGVEcm9wXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGaWxlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHYtZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIDpmaWxlcz1cImZpbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICA6Zm9sZGVycz1cImZvbGRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzZWxlY3RlZC1pdGVtcz1cInNlbGVjdGVkSXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjc3JmLXRva2VuPVwiY3NyZlRva2VuXCJcclxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0PVwiaGFuZGxlU2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBAb3Blbj1cImhhbmRsZU9wZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIEBtb3JlPVwiaGFuZGxlTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNvbnRleHQtbWVudT1cImhhbmRsZUNvbnRleHRNZW51XCJcclxuICAgICAgICAgICAgICAgICAgICBAZHJvcD1cImhhbmRsZURyb3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBmaWxlLWRyb3A9XCJoYW5kbGVGaWxlRHJvcFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8VXBsb2FkTW9kYWxcclxuICAgICAgICAgICAgdi1pZj1cInNob3dVcGxvYWRlclwiXHJcbiAgICAgICAgICAgIDpmb2xkZXItaWQ9XCJjdXJyZW50Rm9sZGVyPy5pZFwiXHJcbiAgICAgICAgICAgIDppbml0aWFsLWZpbGVzPVwiZHJvcHBlZEZpbGVzXCJcclxuICAgICAgICAgICAgOmlzLWFkbWluPVwiaXNBZG1pblwiXHJcbiAgICAgICAgICAgIDpjc3JmLXRva2VuPVwiY3NyZlRva2VuXCJcclxuICAgICAgICAgICAgOm1heC1maWxlLXNpemU9XCJtYXhGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgIEB1cGxvYWRlZD1cImhhbmRsZUZpbGVVcGxvYWRlZFwiXHJcbiAgICAgICAgICAgIEBjbG9zZT1cImhhbmRsZUNsb3NlVXBsb2FkZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENyZWF0ZUZvbGRlck1vZGFsXHJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93Q3JlYXRlRm9sZGVyXCJcclxuICAgICAgICAgICAgOnBhcmVudC1mb2xkZXItaWQ9XCJjdXJyZW50Rm9sZGVyPy5pZFwiXHJcbiAgICAgICAgICAgIDppcy1hZG1pbj1cImlzQWRtaW5cIlxyXG4gICAgICAgICAgICA6Y3NyZi10b2tlbj1cImNzcmZUb2tlblwiXHJcbiAgICAgICAgICAgIEBjcmVhdGVkPVwiaGFuZGxlRm9sZGVyQ3JlYXRlZFwiXHJcbiAgICAgICAgICAgIEBjbG9zZT1cInNob3dDcmVhdGVGb2xkZXIgPSBmYWxzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8RmlsZVByZXZpZXdcclxuICAgICAgICAgICAgdi1pZj1cInByZXZpZXdGaWxlXCJcclxuICAgICAgICAgICAgOmZpbGU9XCJwcmV2aWV3RmlsZVwiXHJcbiAgICAgICAgICAgIEBjbG9zZT1cInByZXZpZXdGaWxlID0gbnVsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8UGVybWlzc2lvbk1hbmFnZXJcclxuICAgICAgICAgICAgdi1pZj1cInBlcm1pc3Npb25SZXNvdXJjZVwiXHJcbiAgICAgICAgICAgIDpyZXNvdXJjZT1cInBlcm1pc3Npb25SZXNvdXJjZVwiXHJcbiAgICAgICAgICAgIDpjc3JmLXRva2VuPVwiY3NyZlRva2VuXCJcclxuICAgICAgICAgICAgQGNsb3NlPVwicGVybWlzc2lvblJlc291cmNlID0gbnVsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8UmVuYW1lTW9kYWxcclxuICAgICAgICAgICAgdi1pZj1cInJlbmFtZUl0ZW1cIlxyXG4gICAgICAgICAgICA6aXRlbT1cInJlbmFtZUl0ZW1cIlxyXG4gICAgICAgICAgICA6Y3NyZi10b2tlbj1cImNzcmZUb2tlblwiXHJcbiAgICAgICAgICAgIEByZW5hbWVkPVwiaGFuZGxlUmVuYW1lZFwiXHJcbiAgICAgICAgICAgIEBjbG9zZT1cInJlbmFtZUl0ZW0gPSBudWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDb250ZXh0TWVudVxyXG4gICAgICAgICAgICB2LWlmPVwiY29udGV4dE1lbnUudmlzaWJsZVwiXHJcbiAgICAgICAgICAgIDp2aXNpYmxlPVwiY29udGV4dE1lbnUudmlzaWJsZVwiXHJcbiAgICAgICAgICAgIDppdGVtPVwiY29udGV4dE1lbnUuaXRlbVwiXHJcbiAgICAgICAgICAgIDpwb3NpdGlvbj1cImNvbnRleHRNZW51LnBvc2l0aW9uXCJcclxuICAgICAgICAgICAgOmN1cnJlbnQtdmlldz1cImN1cnJlbnRWaWV3XCJcclxuICAgICAgICAgICAgOmlzLWFkbWluPVwiaXNBZG1pblwiXHJcbiAgICAgICAgICAgIEBvcGVuPVwiaGFuZGxlT3BlblwiXHJcbiAgICAgICAgICAgIEByZW5hbWU9XCJoYW5kbGVSZW5hbWVcIlxyXG4gICAgICAgICAgICBAZGVsZXRlPVwiaGFuZGxlRGVsZXRlSXRlbVwiXHJcbiAgICAgICAgICAgIEByZXN0b3JlPVwiaGFuZGxlUmVzdG9yZVwiXHJcbiAgICAgICAgICAgIEBwZXJtYW5lbnQtZGVsZXRlPVwiaGFuZGxlUGVybWFuZW50RGVsZXRlXCJcclxuICAgICAgICAgICAgQHBlcm1pc3Npb25zPVwiaGFuZGxlTW9yZVwiXHJcbiAgICAgICAgICAgIEBjbG9zZT1cImNvbnRleHRNZW51ID0geyB2aXNpYmxlOiBmYWxzZSwgaXRlbTogbnVsbCwgcG9zaXRpb246IHsgeDogMCwgeTogMCB9IH1cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxyXG4gICAgICAgICAgICB2LWlmPVwiY29uZmlybU1vZGFsLnZpc2libGVcIlxyXG4gICAgICAgICAgICA6dGl0bGU9XCJjb25maXJtTW9kYWwudGl0bGVcIlxyXG4gICAgICAgICAgICA6bWVzc2FnZT1cImNvbmZpcm1Nb2RhbC5tZXNzYWdlXCJcclxuICAgICAgICAgICAgOnN1Yi1tZXNzYWdlPVwiY29uZmlybU1vZGFsLnN1Yk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICA6dHlwZT1cImNvbmZpcm1Nb2RhbC50eXBlXCJcclxuICAgICAgICAgICAgOmNvbmZpcm0tdGV4dD1cImNvbmZpcm1Nb2RhbC5jb25maXJtVGV4dFwiXHJcbiAgICAgICAgICAgIDpjYW5jZWwtdGV4dD1cImNvbmZpcm1Nb2RhbC5jYW5jZWxUZXh0XCJcclxuICAgICAgICAgICAgOmxvYWRpbmc9XCJjb25maXJtTW9kYWwubG9hZGluZ1wiXHJcbiAgICAgICAgICAgIEBjb25maXJtPVwiY29uZmlybU1vZGFsLm9uQ29uZmlybVwiXHJcbiAgICAgICAgICAgIEBjYW5jZWw9XCJjb25maXJtTW9kYWwgPSB7IHZpc2libGU6IGZhbHNlIH1cIlxyXG4gICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBGaWxlU2lkZWJhciBmcm9tICcuL0ZpbGVTaWRlYmFyLnZ1ZSc7XHJcbmltcG9ydCBGaWxlVG9vbGJhciBmcm9tICcuL0ZpbGVUb29sYmFyLnZ1ZSc7XHJcbmltcG9ydCBGaWxlQnJlYWRjcnVtYiBmcm9tICcuL0ZpbGVCcmVhZGNydW1iLnZ1ZSc7XHJcbmltcG9ydCBGaWxlR3JpZCBmcm9tICcuL0ZpbGVHcmlkLnZ1ZSc7XHJcbmltcG9ydCBGaWxlTGlzdCBmcm9tICcuL0ZpbGVMaXN0LnZ1ZSc7XHJcbmltcG9ydCBVcGxvYWRNb2RhbCBmcm9tICcuL1VwbG9hZE1vZGFsLnZ1ZSc7XHJcbmltcG9ydCBDcmVhdGVGb2xkZXJNb2RhbCBmcm9tICcuL0NyZWF0ZUZvbGRlck1vZGFsLnZ1ZSc7XHJcbmltcG9ydCBGaWxlUHJldmlldyBmcm9tICcuL0ZpbGVQcmV2aWV3LnZ1ZSc7XHJcbmltcG9ydCBQZXJtaXNzaW9uTWFuYWdlciBmcm9tICcuL1Blcm1pc3Npb25NYW5hZ2VyLnZ1ZSc7XHJcbmltcG9ydCBSZW5hbWVNb2RhbCBmcm9tICcuL1JlbmFtZU1vZGFsLnZ1ZSc7XHJcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL0NvbnRleHRNZW51LnZ1ZSc7XHJcbmltcG9ydCBDb25maXJtTW9kYWwgZnJvbSAnLi9Db25maXJtTW9kYWwudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBGaWxlU2lkZWJhcixcclxuICAgICAgICBGaWxlVG9vbGJhcixcclxuICAgICAgICBGaWxlQnJlYWRjcnVtYixcclxuICAgICAgICBGaWxlR3JpZCxcclxuICAgICAgICBGaWxlTGlzdCxcclxuICAgICAgICBVcGxvYWRNb2RhbCxcclxuICAgICAgICBDcmVhdGVGb2xkZXJNb2RhbCxcclxuICAgICAgICBGaWxlUHJldmlldyxcclxuICAgICAgICBQZXJtaXNzaW9uTWFuYWdlcixcclxuICAgICAgICBSZW5hbWVNb2RhbCxcclxuICAgICAgICBDb250ZXh0TWVudSxcclxuICAgICAgICBDb25maXJtTW9kYWwsXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjc3JmVG9rZW46IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3VycmVudFZpZXc6ICdob21lJyxcclxuICAgICAgICAgICAgdmlld01vZGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWxlTWFuYWdlclZpZXdNb2RlJykgfHwgJ2dyaWQnLCAvLyAnZ3JpZCcgb3IgJ2xpc3QnXHJcbiAgICAgICAgICAgIGN1cnJlbnRGb2xkZXI6IG51bGwsXHJcbiAgICAgICAgICAgIGZpbGVzOiBbXSxcclxuICAgICAgICAgICAgZm9sZGVyczogW10sXHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWI6IFtdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dVcGxvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dDcmVhdGVGb2xkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcmV2aWV3RmlsZTogbnVsbCxcclxuICAgICAgICAgICAgcGVybWlzc2lvblJlc291cmNlOiBudWxsLFxyXG4gICAgICAgICAgICBzZWFyY2hRdWVyeTogJycsXHJcbiAgICAgICAgICAgIGRyYWdPdmVyUm9vdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbmFtZUl0ZW06IG51bGwsXHJcbiAgICAgICAgICAgIGRyb3BwZWRGaWxlczogbnVsbCxcclxuICAgICAgICAgICAgaXNBZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhblVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbkNyZWF0ZUZvbGRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgbWF4RmlsZVNpemU6IDEwNDg1NzYwMCwgLy8gVmFsZXVyIHBhciBkw6lmYXV0ICgxMDAgTUIpLCBzZXJhIHJlbXBsYWPDqWUgcGFyIGwnQVBJXHJcbiAgICAgICAgICAgIGNvbnRleHRNZW51OiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpcm1Nb2RhbDoge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgIHN1Yk1lc3NhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29uZmlybScsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ0NvbmZpcm1lcicsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0OiAnQW5udWxlcicsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG9uQ29uZmlybTogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgdmlld01vZGUobmV3TW9kZSkge1xyXG4gICAgICAgICAgICAvLyBTYXV2ZWdhcmRlciBsZSBtb2RlIGRlIHZ1ZSBkYW5zIGxlIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlsZU1hbmFnZXJWaWV3TW9kZScsIG5ld01vZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRVc2VySW5mbygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoYXJnZXIgbGUgZG9zc2llciBkZXB1aXMgbCdVUkwgc2kgcHLDqXNlbnRcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGZvbGRlcklkRnJvbVVybCA9IHVybFBhcmFtcy5nZXQoJ2ZvbGRlcklkJyk7XHJcbiAgICAgICAgY29uc3QgaW5pdGlhbEZvbGRlcklkID0gZm9sZGVySWRGcm9tVXJsID8gcGFyc2VJbnQoZm9sZGVySWRGcm9tVXJsLCAxMCkgOiBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGwnw6l0YXQgZGUgbCdoaXN0b3JpcXVlIHBvdXIgbCdVUkwgYWN0dWVsbGVcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBmb2xkZXJJZDogaW5pdGlhbEZvbGRlcklkIH0sICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkRm9sZGVyKGluaXRpYWxGb2xkZXJJZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gw4ljb3V0ZXIgbGVzIGNoYW5nZW1lbnRzIGQnaGlzdG9yaXF1ZSAoYm91dG9uIHJldG91ci9hdmFudCBkdSBuYXZpZ2F0ZXVyKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlUG9wU3RhdGUpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVVubW91bnQoKSB7XHJcbiAgICAgICAgLy8gTmV0dG95ZXIgbCfDqWNvdXRldXIgZCfDqXbDqW5lbWVudHNcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmhhbmRsZVBvcFN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgZmV0Y2ggaGVhZGVycyB3aXRoIENTUkYgdG9rZW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRDc3JmSGVhZGVycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICdYLUNTUkYtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYWRkIENTUkYgdG9rZW4gdG8gZmV0Y2ggb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZENzcmZUb0ZldGNoT3B0aW9ucyhvcHRpb25zID0ge30pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDc3JmSGVhZGVycygpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZmlsZXMvbWUnLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQWRtaW4gPSBkYXRhLmlzQWRtaW4gfHwgZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5VcGxvYWRGaWxlID0gZGF0YS5jYW5VcGxvYWRGaWxlICE9PSB1bmRlZmluZWQgPyBkYXRhLmNhblVwbG9hZEZpbGUgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlRm9sZGVyID0gZGF0YS5jYW5DcmVhdGVGb2xkZXIgIT09IHVuZGVmaW5lZCA/IGRhdGEuY2FuQ3JlYXRlRm9sZGVyIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heEZpbGVTaXplID0gZGF0YS5tYXhGaWxlU2l6ZSB8fCAxMDQ4NTc2MDA7IC8vIDEwMCBNQiBwYXIgZMOpZmF1dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB1c2VyIGluZm86JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzaG93Q29uZmlybU1vZGFsKGNvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IHtcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY29uZmlnLnRpdGxlIHx8ICdDb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY29uZmlnLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBzdWJNZXNzYWdlOiBjb25maWcuc3ViTWVzc2FnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogY29uZmlnLnR5cGUgfHwgJ2NvbmZpcm0nLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6IGNvbmZpZy5jb25maXJtVGV4dCB8fCAnQ29uZmlybWVyJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6IGNvbmZpZy5jYW5jZWxUZXh0IHx8ICdBbm51bGVyJyxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uQ29uZmlybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzaG93RXJyb3JNb2RhbChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1Nb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0VycmV1cicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAnT0snLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRGb2xkZXIoZm9sZGVySWQsIHVwZGF0ZVVybCA9IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIGZvbGRlcklkIGlzIGEgbnVtYmVyIG9yIG51bGxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZm9sZGVySWQgIT09IG51bGwgJiYgZm9sZGVySWQgIT09IHVuZGVmaW5lZCA/IE51bWJlcihmb2xkZXJJZCkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gaWQgPyBgP2ZvbGRlcklkPSR7aWR9YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcyR7cGFyYW1zfWAsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IGRhdGEuZmlsZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkZXJzID0gZGF0YS5mb2xkZXJzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbGRlciA9IGRhdGEuY3VycmVudEZvbGRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBkYXRhLmJyZWFkY3J1bWIgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbCdVUkwgZHUgbmF2aWdhdGV1clxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVcmxXaXRoRm9sZGVySWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBmb2xkZXI6JywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbChkYXRhLmVycm9yIHx8ICdJbXBvc3NpYmxlIGRlIGNoYXJnZXIgbGUgZG9zc2llcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbCgnRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBkb3NzaWVyJyk7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlVXJsV2l0aEZvbGRlcklkKGZvbGRlcklkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmb2xkZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2ZvbGRlcklkJywgZm9sZGVySWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2ZvbGRlcklkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnVVJMIHNhbnMgcmVjaGFyZ2VyIGxhIHBhZ2VcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgZm9sZGVySWQgfSwgJycsIHVybCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xyXG4gICAgICAgICAgICAvLyBHw6lyZXIgbGUgYm91dG9uIHJldG91ci9hdmFudCBkdSBuYXZpZ2F0ZXVyXHJcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gZXZlbnQuc3RhdGU/LmZvbGRlcklkIHx8IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcihmb2xkZXJJZCwgZmFsc2UpOyAvLyBmYWxzZSBwb3VyIG5lIHBhcyBjcsOpZXIgdW5lIG5vdXZlbGxlIGVudHLDqWUgZCdoaXN0b3JpcXVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjaGFuZ2VWaWV3KHZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHZpZXc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodmlldyA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmlldyA9PT0gJ3N0YXJyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGFycmVkKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBOZXR0b3llciBsZSBwYXJhbcOodHJlIGZvbGRlcklkIGRlIGwnVVJMIHBvdXIgbGVzIHZ1ZXMgc3DDqWNpYWxlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVcmxXaXRoRm9sZGVySWQobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmlldyA9PT0gJ3RyYXNoJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhc2goKTtcclxuICAgICAgICAgICAgICAgIC8vIE5ldHRveWVyIGxlIHBhcmFtw6h0cmUgZm9sZGVySWQgZGUgbCdVUkwgcG91ciBsZXMgdnVlcyBzcMOpY2lhbGVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVybFdpdGhGb2xkZXJJZChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgbG9hZFN0YXJyZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZpbGVzL3N0YXJyZWQnLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gZGF0YS5maWxlcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IGRhdGEuZm9sZGVycyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZvbGRlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWIgPSBbXTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBsb2FkVHJhc2goKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2ZpbGVzL3RyYXNoJywgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IGRhdGEuZmlsZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSBkYXRhLmZvbGRlcnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb2xkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icmVhZGNydW1iID0gW107XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgbmF2aWdhdGVUb0ZvbGRlcihmb2xkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGZvbGRlciA9PT0gbnVsbCB8fCBmb2xkZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKG51bGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgYSBudW1lcmljIElEXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb2xkZXJJZCA9IHR5cGVvZiBmb2xkZXIgPT09ICdvYmplY3QnID8gZm9sZGVyLmlkIDogZm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKGZvbGRlcklkID8gTnVtYmVyKGZvbGRlcklkKSA6IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVTZWxlY3QoaXRlbSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTXVsdGktc2VsZWN0OiB0b2dnbGUgc2VsZWN0aW9uIG9ubHkgaWYgQ3RybC9NZXRhIGlzIHByZXNzZWRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChpID0+IGkuaWQgPT09IGl0ZW0uaWQgJiYgaS50eXBlID09PSBpdGVtLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEZXNlbGVjdCBpZiBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0byBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vIEN0cmwvTWV0YTogY2xlYXIgYWxsIHNlbGVjdGlvbnNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVDb250ZW50Q2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2xpY2sgaXMgb24gYW4gaW50ZXJhY3RpdmUgZWxlbWVudCB0aGF0IHNob3VsZCBub3QgY2xlYXIgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERvbid0IGNsZWFyIGlmIGNsaWNraW5nIG9uOlxyXG4gICAgICAgICAgICAvLyAtIEJ1dHRvbnMgKGluY2x1ZGluZyBhY3Rpb24gYnV0dG9ucyBsaWtlIGRlbGV0ZSwgZXRjLilcclxuICAgICAgICAgICAgLy8gLSBMaW5rc1xyXG4gICAgICAgICAgICAvLyAtIElucHV0cywgc2VsZWN0cywgdGV4dGFyZWFzXHJcbiAgICAgICAgICAgIC8vIC0gTW9kYWxzIG9yIHRoZWlyIG92ZXJsYXlzXHJcbiAgICAgICAgICAgIC8vIC0gQ29udGV4dCBtZW51c1xyXG4gICAgICAgICAgICAvLyAtIEZpbGUgaXRlbXMgb3IgZm9sZGVycyAoaGFuZGxlZCBieSBoYW5kbGVTZWxlY3QgLSB0aGVzZSBlbWl0ICdzZWxlY3QnIGV2ZW50KVxyXG4gICAgICAgICAgICAvLyAtIFRvb2xiYXIsIGJyZWFkY3J1bWIsIHNpZGViYXJcclxuICAgICAgICAgICAgLy8gLSBFbXB0eSBzdGF0ZSBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW50ZXJhY3RpdmUgPSB0YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCdhJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCdpbnB1dCcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnc2VsZWN0JykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCd0ZXh0YXJlYScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtbW9kYWwnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5maWxlLW1vZGFsX19vdmVybGF5JykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KCcuZmlsZS1tb2RhbF9fY29udGVudCcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmNvbnRleHQtbWVudScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtaXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtbGlzdF9faXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtZ3JpZF9faXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtdG9vbGJhcicpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtYnJlYWRjcnVtYicpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtc2lkZWJhcicpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCgnLmZpbGUtbWFuYWdlcl9fZW1wdHknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9ubHkgY2xlYXIgc2VsZWN0aW9uIGlmIGNsaWNraW5nIG9uIGVtcHR5IHNwYWNlIChub3Qgb24gaW50ZXJhY3RpdmUgZWxlbWVudHMpXHJcbiAgICAgICAgICAgIC8vIEFsc28gY2hlY2sgdGhhdCB3ZSdyZSBub3QgaW4gdGhlIG1pZGRsZSBvZiBhIGRvdWJsZS1jbGljayBkZXRlY3Rpb25cclxuICAgICAgICAgICAgaWYgKCFpc0ludGVyYWN0aXZlICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlT3BlbihpdGVtKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9Gb2xkZXIoaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdGaWxlID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlTW9yZShpdGVtLCBldmVudCkge1xyXG4gICAgICAgICAgICAvLyBPcGVuIGNvbnRleHQgbWVudSBvciBwZXJtaXNzaW9uIG1vZGFsXHJcbiAgICAgICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlbnQgaXMgcHJvdmlkZWQsIG9wZW4gY29udGV4dCBtZW51XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNvbnRleHRNZW51KGl0ZW0sIGV2ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgb3BlbiBwZXJtaXNzaW9uIG1vZGFsIGRpcmVjdGx5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25SZXNvdXJjZSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUNvbnRleHRNZW51KGl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCB8fCBldmVudC5wYWdlWCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSB8fCBldmVudC5wYWdlWSB8fCAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHRNZW51ID0ge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVSZW5hbWUoaXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmFtZUl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlUmVuYW1lZChpdGVtKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbG9hZCBjdXJyZW50IGZvbGRlciB0byByZWZsZWN0IGNoYW5nZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09ICd0cmFzaCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYXNoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGFycmVkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlRGVsZXRlSXRlbShpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1Nb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU3VwcHJpbWVyIFwiJHtpdGVtLm5hbWV9XCIgP2AsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAnU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgZGVsZXRlSXRlbShpdGVtKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7aXRlbS5pZH0/dHlwZT0ke2l0ZW0udHlwZX1gLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVsb2FkIGN1cnJlbnQgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gJ3RyYXNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmFzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YXJyZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbChkYXRhLmVycm9yIHx8ICdJbXBvc3NpYmxlIGRlIHN1cHByaW1lcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbCgnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24nKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgaGFuZGxlUmVzdG9yZShpdGVtKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7aXRlbS5pZH0vcmVzdG9yZT90eXBlPSR7aXRlbS50eXBlfWAsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhc2goKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1vZGFsKGRhdGEuZXJyb3IgfHwgJ0ltcG9zc2libGUgZGUgcmVzdGF1cmVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1vZGFsKCdFcnJldXIgbG9ycyBkZSBsYSByZXN0YXVyYXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgaGFuZGxlUGVybWFuZW50RGVsZXRlKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VwcHJpbWVyIGTDqWZpbml0aXZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU3VwcHJpbWVyIGTDqWZpbml0aXZlbWVudCBcIiR7aXRlbS5uYW1lfVwiID9gLFxyXG4gICAgICAgICAgICAgICAgc3ViTWVzc2FnZTogJ0NldHRlIGFjdGlvbiBlc3QgaXJyw6l2ZXJzaWJsZS4nLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogJ1N1cHByaW1lciBkw6lmaW5pdGl2ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtUGVybWFuZW50RGVsZXRlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBwZXJmb3JtUGVybWFuZW50RGVsZXRlKGl0ZW0pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmlsZXMvJHtpdGVtLmlkfS9wZXJtYW5lbnQtZGVsZXRlP3R5cGU9JHtpdGVtLnR5cGV9YCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybU1vZGFsLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmFzaCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTW9kYWwoZGF0YS5lcnJvciB8fCAnSW1wb3NzaWJsZSBkZSBzdXBwcmltZXIgZMOpZmluaXRpdmVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1vZGFsKCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiBkw6lmaW5pdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtTW9kYWwubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVVcGxvYWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1VwbG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZUZvbGRlcigpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3JlYXRlRm9sZGVyID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUZvbGRlckNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NyZWF0ZUZvbGRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGN1cnJlbnQgZm9sZGVyXHJcbiAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcih0aGlzLmN1cnJlbnRGb2xkZXI/LmlkIHx8IG51bGwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgaGFuZGxlRGVsZXRlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaXNUcmFzaCA9IHRoaXMuY3VycmVudFZpZXcgPT09ICd0cmFzaCc7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1Nb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogaXNUcmFzaCA/ICdTdXBwcmltZXIgZMOpZmluaXRpdmVtZW50JyA6ICdTdXBwcmltZXInLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7aXNUcmFzaCA/ICdTdXBwcmltZXIgZMOpZmluaXRpdmVtZW50JyA6ICdTdXBwcmltZXInfSAke3RoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGh9IMOpbMOpbWVudChzKSA/YCxcclxuICAgICAgICAgICAgICAgIHN1Yk1lc3NhZ2U6IGlzVHJhc2ggPyAnQ2V0dGUgYWN0aW9uIGVzdCBpcnLDqXZlcnNpYmxlLicgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDogaXNUcmFzaCA/ICdTdXBwcmltZXIgZMOpZmluaXRpdmVtZW50JyA6ICdTdXBwcmltZXInLFxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIHBlcmZvcm1EZWxldGUoKSB7XHJcbiAgICAgICAgICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSAndHJhc2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBlcm1hbmVudCBkZWxldGUgZnJvbSB0cmFzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7aXRlbS5pZH0vcGVybWFuZW50LWRlbGV0ZT90eXBlPSR7aXRlbS50eXBlfWAsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yIHx8ICdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTb2Z0IGRlbGV0ZSAobW92ZSB0byB0cmFzaClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy8ke2l0ZW0uaWR9P3R5cGU9JHtpdGVtLnR5cGV9YCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGRhdGEuZXJyb3IgfHwgJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Nb2RhbC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1vZGFsKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJlbG9hZCBjdXJyZW50IHZpZXdcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09ICd0cmFzaCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYXNoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gJ3N0YXJyZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdGFycmVkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlU2VhcmNoKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBxdWVyeTtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKHRoaXMuY3VycmVudEZvbGRlcj8uaWQgfHwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIHBlcmZvcm1TZWFyY2gocXVlcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEluY2x1cmUgbGUgZG9zc2llciBjb3VyYW50IGRhbnMgbGEgcmVjaGVyY2hlIHNpIG9uIGVzdCBkYW5zIHVuIGRvc3NpZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gdGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcTogcXVlcnksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmb2xkZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2ZvbGRlcklkJywgZm9sZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzL3NlYXJjaD8ke3BhcmFtcy50b1N0cmluZygpfWAsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IGRhdGEuZmlsZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkZXJzID0gZGF0YS5mb2xkZXJzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdhcmRlciBsZSBkb3NzaWVyIGNvdXJhbnQgZXQgbGUgYnJlYWRjcnVtYiBwb3VyIGxlIGNvbnRleHRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTmUgcGFzIGxlcyByw6lpbml0aWFsaXNlciBwb3VyIG1vbnRyZXIgb8O5IG9uIGNoZXJjaGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzZWFyY2g6JywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbChkYXRhLmVycm9yIHx8ICdJbXBvc3NpYmxlIGRlIHJlY2hlcmNoZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTW9kYWwoJ0VycmV1ciBsb3JzIGRlIGxhIHJlY2hlcmNoZScpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZVJvb3REcmFnT3ZlcihldmVudCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRyYWdnZWQgaXRlbSBkYXRhXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgZHJvcHBpbmcgaWYgYWxyZWFkeSBhdCByb290XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudEZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJSb290ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ092ZXJSb290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlUm9vdERyYWdMZWF2ZSgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdPdmVyUm9vdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVSb290RHJvcChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyUm9vdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZHJhZ2dlZERhdGEgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBpZiAoIWRyYWdnZWREYXRhKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZCA9IEpTT04ucGFyc2UoZHJhZ2dlZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBkcm9wcGluZyBpZiBhbHJlYWR5IGF0IHJvb3RcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50Rm9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHRvIHJvb3QgKG51bGwgZm9sZGVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlSXRlbShkcmFnZ2VkLCBudWxsKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBkcmFnIGRhdGE6JywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGhhbmRsZURyb3AoeyBpdGVtLCB0YXJnZXRGb2xkZXIgfSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVJdGVtKGl0ZW0sIHRhcmdldEZvbGRlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBtb3ZlSXRlbShpdGVtLCB0YXJnZXRGb2xkZXIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEZvbGRlcklkID0gdGFyZ2V0Rm9sZGVyID8gdGFyZ2V0Rm9sZGVyLmlkIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmlsZXMvJHtpdGVtLmlkfS9tb3ZlYCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRGb2xkZXJJZDogdGFyZ2V0Rm9sZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbG9hZCBjdXJyZW50IGZvbGRlciB0byByZWZsZWN0IGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIodGhpcy5jdXJyZW50Rm9sZGVyPy5pZCB8fCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNb2RhbChkYXRhLmVycm9yIHx8ICdJbXBvc3NpYmxlIGRlIGTDqXBsYWNlciBsXFwnw6lsw6ltZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtb3ZpbmcgaXRlbTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1vZGFsKCdFcnJldXIgbG9ycyBkdSBkw6lwbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlRmlsZVVwbG9hZGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dVcGxvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIGN1cnJlbnQgZm9sZGVyXHJcbiAgICAgICAgICAgIHRoaXMubG9hZEZvbGRlcih0aGlzLmN1cnJlbnRGb2xkZXI/LmlkIHx8IG51bGwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlRmlsZURyb3AoeyBmaWxlcyB9KSB7XHJcbiAgICAgICAgICAgIC8vIFN0b3JlIGRyb3BwZWQgZmlsZXMgYW5kIG9wZW4gdXBsb2FkIG1vZGFsXHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHBlZEZpbGVzID0gZmlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1VwbG9hZGVyID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUNsb3NlVXBsb2FkZXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1VwbG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHBlZEZpbGVzID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uZmlsZS1tYW5hZ2VyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsbGVyJywgc2Fucy1zZXJpZjtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX292ZXJsYXkgZmlsZS1wcmV2aWV3LW92ZXJsYXlcIiBAY2xpY2suc2VsZj1cIiRlbWl0KCdjbG9zZScpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2NvbnRlbnQgZmlsZS1wcmV2aWV3LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2hlYWRlciBmaWxlLXByZXZpZXctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZ2V0RmlsZUljb24oKVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjc1cmVtOyBmb250LXNpemU6IDEuNXJlbTtcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7IGZpbGUubmFtZSB9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXctYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZG93bmxvYWRVcmxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUw6lsw6ljaGFyZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+IFTDqWzDqWNoYXJnZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hhcmVGaWxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBhcnRhZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2hhcmUtYWx0XCI+PC9pPiBQYXJ0YWdlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1jbG9zZVwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCIgdGl0bGU9XCJGZXJtZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19ib2R5IGZpbGUtcHJldmlldy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEltYWdlIFByZXZpZXcgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlLmlzSW1hZ2VcIiBjbGFzcz1cImZpbGUtcHJldmlldy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInByZXZpZXdVcmxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJmaWxlLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcmV2aWV3LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPCEtLSBWaWRlbyBQcmV2aWV3IC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJmaWxlLmlzVmlkZW9cIiBjbGFzcz1cImZpbGUtcHJldmlldy12aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWRlbyA6c3JjPVwicHJldmlld1VybFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByZXZpZXctdmlkZW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVm90cmUgbmF2aWdhdGV1ciBuZSBzdXBwb3J0ZSBwYXMgbGEgbGVjdHVyZSB2aWTDqW8uXHJcbiAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIFBERiBQcmV2aWV3IC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJmaWxlLmlzUGRmXCIgY2xhc3M9XCJmaWxlLXByZXZpZXctcGRmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBkZi10b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZG93bmxvYWRVcmxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwZGYtdG9vbGJhci1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlTDqWzDqWNoYXJnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBkZi10b29sYmFyLWJ0blwiIEBjbGljaz1cInByaW50UGRmXCIgdGl0bGU9XCJJbXByaW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wcmludFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwZGYtdG9vbGJhci1idG5cIiBAY2xpY2s9XCJ0b2dnbGVGdWxsc2NyZWVuXCIgdGl0bGU9XCJQbGVpbiDDqWNyYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJpc0Z1bGxzY3JlZW4gPyAnZmEtY29tcHJlc3MnIDogJ2ZhLWV4cGFuZCdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZGYtdmlld2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIDpzcmM9XCJwcmV2aWV3VXJsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwZGYtdmlld2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJwZGZJZnJhbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPCEtLSBUZXh0IFByZXZpZXcgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImZpbGUuaXNUZXh0XCIgY2xhc3M9XCJmaWxlLXByZXZpZXctdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXRvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJkb3dubG9hZFVybFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtdG9vbGJhci1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlTDqWzDqWNoYXJnZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzPVwidGV4dC1jb250ZW50XCI+e3sgdGV4dENvbnRlbnQgfX08L3ByZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIFVuc3VwcG9ydGVkIEZpbGUgVHlwZSAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiZmlsZS1wcmV2aWV3LXVuc3VwcG9ydGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlIGZhLTV4XCIgc3R5bGU9XCJvcGFjaXR5OiAwLjM7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgY29sb3I6ICMwMDIwNDM7XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAxLjEyNXJlbTsgY29sb3I6ICM2NjY7IG1hcmdpbi1ib3R0b206IDEuNXJlbTtcIj5BcGVyw6d1IG5vbiBkaXNwb25pYmxlIHBvdXIgY2UgdHlwZSBkZSBmaWNoaWVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZG93bmxvYWRVcmxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+IFTDqWzDqWNoYXJnZXIgbGUgZmljaGllclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19mb290ZXIgZmlsZS1wcmV2aWV3LWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlldy1tZXRhZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhZGF0YS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz5UYWlsbGU6PC9zdHJvbmc+IHt7IGZpbGUuZm9ybWF0dGVkU2l6ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YWRhdGEtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz5UeXBlOjwvc3Ryb25nPiB7eyBmaWxlLm1pbWVUeXBlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhZGF0YS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz5Bam91dMOpIHBhcjo8L3N0cm9uZz4ge3sgZmlsZS5vd25lci5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXRhZGF0YS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+QWpvdXTDqSBsZTo8L3N0cm9uZz4ge3sgZm9ybWF0RGF0ZShmaWxlLmNyZWF0ZWRBdCkgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPkZlcm1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIFRvYXN0IGRlIGNvbmZpcm1hdGlvbiAtLT5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwidG9hc3RcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2hvd1RvYXN0XCIgY2xhc3M9XCJmaWxlLXByZXZpZXctdG9hc3RcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAge3sgdG9hc3RNZXNzYWdlIH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBmaWxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHRDb250ZW50OiBudWxsLFxyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93VG9hc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBwcmV2aWV3VXJsKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYC9hcGkvZmlsZXMvJHt0aGlzLmZpbGUuaWR9L3ByZXZpZXdgO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG93bmxvYWRVcmwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgL2FwaS9maWxlcy8ke3RoaXMuZmlsZS5pZH0vZG93bmxvYWRgO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxlLmlzVGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUZXh0Q29udGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYXN5bmMgbG9hZFRleHRDb250ZW50KCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnByZXZpZXdVcmwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSAnRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBjb250ZW51JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0RGF0ZShkYXRlU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghZGF0ZVN0cmluZykgcmV0dXJuICctJztcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywgeyBcclxuICAgICAgICAgICAgICAgIGRheTogJzItZGlnaXQnLCBcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsIFxyXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRGaWxlSWNvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZS5pc1BkZikgcmV0dXJuICdmYSBmYS1maWxlLXBkZic7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGUuaXNJbWFnZSkgcmV0dXJuICdmYSBmYS1maWxlLWltYWdlJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZS5pc1ZpZGVvKSByZXR1cm4gJ2ZhIGZhLWZpbGUtdmlkZW8nO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlLmlzVGV4dCkgcmV0dXJuICdmYSBmYS1maWxlLWFsdCc7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmEgZmEtZmlsZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmludFBkZigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMucGRmSWZyYW1lICYmIHRoaXMuJHJlZnMucGRmSWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGRmSWZyYW1lLmNvbnRlbnRXaW5kb3cucHJpbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSAhdGhpcy5pc0Z1bGxzY3JlZW47XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZmlsZS1wcmV2aWV3LWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Z1bGxzY3JlZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbHNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBzaGFyZUZpbGUoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb25zdHJ1aXJlIGwnVVJMIGNvbXBsw6h0ZSBkdSBmaWNoaWVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHRoaXMuZG93bmxvYWRVcmw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvcGllciBkYW5zIGxlIHByZXNzZS1wYXBpZXJcclxuICAgICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZpbGVVcmwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsZSB0b2FzdCBkZSBjb25maXJtYXRpb25cclxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RNZXNzYWdlID0gJ0xpZW4gY29wacOpIGRhbnMgbGUgcHJlc3NlLXBhcGllciAhJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTWFzcXVlciBsZSB0b2FzdCBhcHLDqHMgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgY29waWU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgc2kgY2xpcGJvYXJkIEFQSSBuJ2VzdCBwYXMgZGlzcG9uaWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UgPSAnRXJyZXVyIGxvcnMgZGUgbGEgY29waWUgZHUgbGllbic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zaWRlYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtc2lkZWJhcl9fc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1zaWRlYmFyX190aXRsZVwiPk5hdmlnYXRpb248L2Rpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXNpZGViYXJfX2l0ZW1cIiBcclxuICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGN1cnJlbnRWaWV3ID09PSAnaG9tZScgfVwiXHJcbiAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiJGVtaXQoJ3ZpZXctY2hhbmdlZCcsICdob21lJylcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaG9tZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIFxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtc2lkZWJhcl9faXRlbVwiIFxyXG4gICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogY3VycmVudFZpZXcgPT09ICdzdGFycmVkJyB9XCJcclxuICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgndmlldy1jaGFuZ2VkJywgJ3N0YXJyZWQnKVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgRmF2b3Jpc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1zaWRlYmFyX19pdGVtXCIgXHJcbiAgICAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBjdXJyZW50VmlldyA9PT0gJ3RyYXNoJyB9XCJcclxuICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgndmlldy1jaGFuZ2VkJywgJ3RyYXNoJylcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICBDb3JiZWlsbGVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGN1cnJlbnRWaWV3OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2hvbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge30sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtdG9vbGJhclwiPlxyXG4gICAgICAgIDxidXR0b24gdi1pZj1cImNhblVwbG9hZEZpbGVcIiBjbGFzcz1cImZpbGUtdG9vbGJhcl9fYnV0dG9uIHByaW1hcnlcIiBAY2xpY2s9XCIkZW1pdCgndXBsb2FkJylcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+IFTDqWzDqXZlcnNlclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxidXR0b24gdi1pZj1cImNhbkNyZWF0ZUZvbGRlclwiIGNsYXNzPVwiZmlsZS10b29sYmFyX19idXR0b25cIiBAY2xpY2s9XCIkZW1pdCgnY3JlYXRlLWZvbGRlcicpXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLXBsdXNcIj48L2k+IE5vdXZlYXUgZG9zc2llclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXRvb2xiYXJfX3NlcGFyYXRvclwiIHYtaWY9XCJzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDBcIj48L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YnV0dG9uIHYtaWY9XCJzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgY2FuRGVsZXRlU2VsZWN0ZWRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS10b29sYmFyX19idXR0b25cIiBcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdkZWxldGUnKVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhXCIgOmNsYXNzPVwiY3VycmVudFZpZXcgPT09ICd0cmFzaCcgPyAnZmEtdHJhc2gnIDogJ2ZhLXRyYXNoJ1wiPjwvaT4gXHJcbiAgICAgICAgICAgIHt7IGN1cnJlbnRWaWV3ID09PSAndHJhc2gnID8gJ1N1cHByaW1lciBkw6lmaW5pdGl2ZW1lbnQnIDogJ1N1cHByaW1lcicgfX0gKHt7IHNlbGVjdGVkSXRlbXMubGVuZ3RoIH19KVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXRvb2xiYXJfX3NlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJmaWxlLXRvb2xiYXJfX2J1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHZpZXdNb2RlID09PSAnZ3JpZCcgfVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgndmlldy1tb2RlLWNoYW5nZWQnLCAnZ3JpZCcpXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGhcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZpbGUtdG9vbGJhcl9fYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogdmlld01vZGUgPT09ICdsaXN0JyB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCd2aWV3LW1vZGUtY2hhbmdlZCcsICdsaXN0JylcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1saXN0XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXRvb2xiYXJfX3NlYXJjaFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlci4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzZWFyY2hRdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnc2VhcmNoJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjdXJyZW50Rm9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoUXVlcnk6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRWaWV3OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJ2hvbWUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuVXBsb2FkRmlsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuQ3JlYXRlRm9sZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aWV3TW9kZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdncmlkJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY2FuRGVsZXRlU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuc29tZShpdGVtID0+IGl0ZW0uY2FuRGVsZXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uZmlsZS10b29sYmFyX19idXR0b24uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDIwNDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19vdmVybGF5XCIgQGNsaWNrLnNlbGY9XCIkZW1pdCgnY2xvc2UnKVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19jb250ZW50IGZpbGUtbW9kYWxfX2NvbnRlbnQtLXBlcm1pc3Npb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5HZXN0aW9uIGRlcyBwZXJtaXNzaW9uczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbVwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhcmVzb3VyY2VJZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FcnJldXI6PC9zdHJvbmc+IElEIGRlIHJlc3NvdXJjZSBpbnZhbGlkZS4gVmV1aWxsZXogZmVybWVyIGNldHRlIG1vZGFsZSBldCByw6llc3NheWVyLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwibG9hZGluZ1wiIGNsYXNzPVwiZmlsZS1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+IENoYXJnZW1lbnQuLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3M9XCJmYSBmYS1zaGllbGQtYWx0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgY29sb3I6ICMwMDIwNDM7XCI+PC9pPlBlcm1pc3Npb25zIGFjdHVlbGxlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJwZXJtaXNzaW9ucy1lbXB0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF1Y3VuZSBwZXJtaXNzaW9uIHNww6ljaWZpcXVlPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+U2V1bCBsJ2FkbWluaXN0cmF0ZXVyIGF1cmEgYWNjw6hzIMOgIGNldHRlIHJlc3NvdXJjZTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwicGVybWlzc2lvbnMtY3VycmVudC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJwZXJtaXNzaW9uIGluIHBlcm1pc3Npb25zXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInBlcm1pc3Npb24uaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVybWlzc2lvbi1jdXJyZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwZXJtaXNzaW9uLnVzZXJcIiBjbGFzcz1cInBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZSBwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UtLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGVybWlzc2lvbi51c2VyLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInBlcm1pc3Npb24uZ3JvdXBcIiBjbGFzcz1cInBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZSBwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2Vyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwZXJtaXNzaW9uLmdyb3VwLmxhYmVsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UgcGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlLS1yb2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaGllbGRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGVybWlzc2lvbi5yb2xlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcm1pc3Npb24tY3VycmVudC1pdGVtX19ncmFudGVkLWJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3Jkw6kgcGFyIHt7IHBlcm1pc3Npb24uZ3JhbnRlZEJ5Lm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fZGVsZXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZVBlcm1pc3Npb24ocGVybWlzc2lvbi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Bam91dGVyIHVuZSBwZXJtaXNzaW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC44NzVyZW07XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlcyB1dGlsaXNhdGV1cnMvcsO0bGVzIGF2ZWMgdW5lIHBlcm1pc3Npb24gYXVyb250IGFjY8OocyBlbiBsZWN0dXJlIGV0IHTDqWzDqWNoYXJnZW1lbnQgdW5pcXVlbWVudC4gTGVzIHBlcm1pc3Npb25zIHBldXZlbnQgw6p0cmUgbW9kaWZpw6llcyB1bHTDqXJpZXVyZW1lbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9ucy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1fX2dyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVybWlzc2lvbi1pdGVtX190eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIj5UeXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwibmV3UGVybWlzc2lvbi50eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXNlclwiPlV0aWxpc2F0ZXVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicm9sZVwiPlLDtGxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JvdXBcIj5Hcm91cGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcm1pc3Npb24taXRlbV9fdmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVybWlzc2lvbi1sYWJlbFwiIHYtaWY9XCJuZXdQZXJtaXNzaW9uLnR5cGUgPT09ICd1c2VyJ1wiPlV0aWxpc2F0ZXVyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIiB2LWVsc2UtaWY9XCJuZXdQZXJtaXNzaW9uLnR5cGUgPT09ICdyb2xlJ1wiPlLDtGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGVybWlzc2lvbi1sYWJlbFwiIHYtZWxzZT5Hcm91cGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwibmV3UGVybWlzc2lvbi50eXBlID09PSAndXNlcidcIiBjbGFzcz1cInBlcm1pc3Npb24taW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ1c2VyU2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gdXNlci1zZWxlY3RpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIGV0IHPDqWxlY3Rpb25uZXIgZGVzIHV0aWxpc2F0ZXVycy4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LWVsc2UtaWY9XCJuZXdQZXJtaXNzaW9uLnR5cGUgPT09ICdyb2xlJ1wiIHYtbW9kZWw9XCJuZXdQZXJtaXNzaW9uLnJvbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGVybWlzc2lvbi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuIHLDtGxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwicm9sZSBpbiBhdmFpbGFibGVSb2xlc1wiIDprZXk9XCJyb2xlLnZhbHVlXCIgOnZhbHVlPVwicm9sZS52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJvbGUubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1lbHNlIHYtbW9kZWw9XCJuZXdQZXJtaXNzaW9uLmdyb3VwSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGVybWlzc2lvbi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuIGdyb3VwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImdyb3VwIGluIGF2YWlsYWJsZUdyb3Vwc1wiIDprZXk9XCJncm91cC52YWx1ZVwiIDp2YWx1ZT1cImdyb3VwLnZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZ3JvdXAubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVybWlzc2lvbi1pdGVtX19hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnkgcGVybWlzc2lvbi1hZGQtY29uZmlybS1idG5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhZGRQZXJtaXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhY2FuQWRkUGVybWlzc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBam91dGVyIGNldHRlIHBlcm1pc3Npb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gQWpvdXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPkZlcm1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByZXNvdXJjZToge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NyZlRva2VuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgdXNlclJlc3VsdHM6IFtdLFxyXG4gICAgICAgICAgICBuZXdQZXJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsXHJcbiAgICAgICAgICAgICAgICB1c2VySWRzOiBbXSwgLy8gQXJyYXkgb2YgdXNlciBJRHMgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgcm9sZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RpemVJbnN0YW5jZTogbnVsbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXZhaWxhYmxlUm9sZXM6IFtdLFxyXG4gICAgICAgICAgICBhdmFpbGFibGVHcm91cHM6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjYW5BZGRQZXJtaXNzaW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZXdQZXJtaXNzaW9uLnR5cGUgPT09ICd1c2VyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3UGVybWlzc2lvbi51c2VySWRzICYmIHRoaXMubmV3UGVybWlzc2lvbi51c2VySWRzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5uZXdQZXJtaXNzaW9uLnR5cGUgPT09ICdyb2xlJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmV3UGVybWlzc2lvbi5yb2xlICE9PSBudWxsICYmIHRoaXMubmV3UGVybWlzc2lvbi5yb2xlICE9PSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1Blcm1pc3Npb24uZ3JvdXBJZCAhPT0gbnVsbCAmJiB0aGlzLm5ld1Blcm1pc3Npb24uZ3JvdXBJZCAhPT0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc291cmNlVHlwZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc291cmNlIHx8IHR5cGVvZiB0aGlzLnJlc291cmNlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmaWxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZS50eXBlIHx8ICh0aGlzLnJlc291cmNlLmZvbGRlcklkICE9PSB1bmRlZmluZWQgPyAnZm9sZGVyJyA6ICdmaWxlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNvdXJjZUlkKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzb3VyY2UgfHwgdHlwZW9mIHRoaXMucmVzb3VyY2UgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMucmVzb3VyY2UuaWQ7XHJcbiAgICAgICAgICAgIC8vIEVuc3VyZSBpZCBpcyBhIG51bWJlclxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnICYmIC9eXFxkKyQvLnRlc3QoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaWQsIDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUGVybWlzc2lvbnMoKTtcclxuICAgICAgICB0aGlzLmxvYWRSb2xlcygpO1xyXG4gICAgICAgIHRoaXMubG9hZEdyb3VwcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0aXplSlMgYWZ0ZXIgVnVlIGhhcyByZW5kZXJlZFxyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aXplKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBEZXN0cm95IFNlbGVjdGl6ZUpTIGluc3RhbmNlXHJcbiAgICAgICAgaWYgKHRoaXMubmV3UGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgICduZXdQZXJtaXNzaW9uLnR5cGUnKG5ld1R5cGUpIHtcclxuICAgICAgICAgICAgLy8gUmVpbml0aWFsaXplIFNlbGVjdGl6ZUpTIHdoZW4gdHlwZSBjaGFuZ2VzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3UGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobmV3VHlwZSA9PT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aXplKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3UGVybWlzc2lvbi51c2VySWRzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHBlcm1pc3Npb25zKCkge1xyXG4gICAgICAgICAgICAvLyBSZWluaXRpYWxpemUgU2VsZWN0aXplSlMgd2hlbiBwZXJtaXNzaW9ucyBsaXN0IGNoYW5nZXMgKGFmdGVyIGFkZGluZylcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV3UGVybWlzc2lvbi50eXBlID09PSAndXNlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxlY3RpemUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgZmV0Y2ggaGVhZGVycyB3aXRoIENTUkYgdG9rZW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRDc3JmSGVhZGVycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICdYLUNTUkYtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYWRkIENTUkYgdG9rZW4gdG8gZmV0Y2ggb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZENzcmZUb0ZldGNoT3B0aW9ucyhvcHRpb25zID0ge30pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDc3JmSGVhZGVycygpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRSb2xlcygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcm9sZXMnLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVSb2xlcyA9IGRhdGEucm9sZXMgfHwgW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHJvbGVzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGRlZmF1bHQgcm9sZXMgaWYgQVBJIGZhaWxzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZVJvbGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdST0xFX1VTRVInLCBsYWJlbDogJ1VzZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1JPTEVfVEVDSE5JQ0lFTicsIGxhYmVsOiAnVGVjaG5pY2llbicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnUk9MRV9BRE1JTicsIGxhYmVsOiAnQWRtaW4nIH0sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBsb2FkR3JvdXBzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9ncm91cHMnLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucygpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVHcm91cHMgPSBkYXRhLmdyb3VwcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgZ3JvdXBzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlR3JvdXBzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRQZXJtaXNzaW9ucygpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmVzb3VyY2UgSUQ6JywgdGhpcy5yZXNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5yZXNvdXJjZUlkfS9wZXJtaXNzaW9ucz90eXBlPSR7dGhpcy5yZXNvdXJjZVR5cGV9YCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IGRhdGEucGVybWlzc2lvbnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHBlcm1pc3Npb25zOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBzZWFyY2hVc2VycygpIHtcclxuICAgICAgICAgICAgLy8gTm90IG5lZWRlZCBhbnltb3JlLCBTZWxlY3RpemVKUyBoYW5kbGVzIHNlYXJjaFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZWN0VXNlcih1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdCBuZWVkZWQgYW55bW9yZSwgU2VsZWN0aXplSlMgaGFuZGxlcyBzZWxlY3Rpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRTZWxlY3RpemUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld1Blcm1pc3Npb24udHlwZSAhPT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSB0aGlzLiRyZWZzLnVzZXJTZWxlY3Q7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0cnkgaWYgZWxlbWVudCBub3QgcmVuZGVyZWQgeWV0XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdFNlbGVjdGl6ZSgpLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBqUXVlcnkgYW5kIFNlbGVjdGl6ZUpTIGFyZSBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuJCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy4kLmZuLnNlbGVjdGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdTZWxlY3RpemVKUyBub3QgbG9hZGVkIHlldCwgcmV0cnlpbmcuLi4nKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0U2VsZWN0aXplKCksIDEwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERlc3Ryb3kgZXhpc3RpbmcgaW5zdGFuY2UgaWYgYW55XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3UGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0aXplSlNcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGl6ZSA9IHdpbmRvdy4kKHNlbGVjdEVsZW1lbnQpLnNlbGVjdGl6ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogWydyZW1vdmVfYnV0dG9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsnbmFtZScsICdlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SXRlbXM6IG51bGwsIC8vIE5vIGxpbWl0XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JywgLy8gQXR0YWNoIGRyb3Bkb3duIHRvIGJvZHkgdG8gYXZvaWQgc2Nyb2xsIGlzc3Vlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWQ6IChxdWVyeSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeSB8fCBxdWVyeS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS91c2Vycy9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9JmxpbWl0PTIwYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEudXNlcnMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7dXNlci5uYW1lfSAoJHt1c2VyLmVtYWlsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpemVKUyB3aXRoIG11bHRpcGxlIGNhbiByZXR1cm4gZWl0aGVyIGFuIGFycmF5IG9yIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3UGVybWlzc2lvbi51c2VySWRzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24udXNlcklkcyA9IHZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24udXNlcklkcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UgPSBzZWxlY3RpemVbMF0uc2VsZWN0aXplO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIFNlbGVjdGl6ZUpTOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgYWRkUGVybWlzc2lvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJldXI6IElEIGRlIHJlc3NvdXJjZSBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuQWRkUGVybWlzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV3UGVybWlzc2lvbi50eXBlID09PSAndXNlcicgJiYgdGhpcy5uZXdQZXJtaXNzaW9uLnVzZXJJZHMgJiYgdGhpcy5uZXdQZXJtaXNzaW9uLnVzZXJJZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBvbmUgcGVybWlzc2lvbiBwZXIgc2VsZWN0ZWQgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdXNlcklkIG9mIHRoaXMubmV3UGVybWlzc2lvbi51c2VySWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5yZXNvdXJjZUlkfS9wZXJtaXNzaW9uc2AsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChkYXRhLmVycm9yIHx8ICdFcnJldXIgaW5jb25udWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZGUgbGEgcGVybWlzc2lvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVycyBsb3JzIGRlIGxcXCdham91dCBkZXMgcGVybWlzc2lvbnM6ICcgKyBlcnJvcnMuam9pbignLCAnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUGVybWlzc2lvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldE5ld1Blcm1pc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3UGVybWlzc2lvbi50eXBlID09PSAncm9sZScgJiYgdGhpcy5uZXdQZXJtaXNzaW9uLnJvbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5yZXNvdXJjZUlkfS9wZXJtaXNzaW9uc2AsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogdGhpcy5uZXdQZXJtaXNzaW9uLnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQZXJtaXNzaW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TmV3UGVybWlzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJldXI6ICcgKyBkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV3UGVybWlzc2lvbi50eXBlID09PSAnZ3JvdXAnICYmIHRoaXMubmV3UGVybWlzc2lvbi5ncm91cElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy8ke3RoaXMucmVzb3VyY2VJZH0vcGVybWlzc2lvbnNgLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnJlc291cmNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IHRoaXMubmV3UGVybWlzc2lvbi5ncm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUGVybWlzc2lvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldE5ld1Blcm1pc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyOiAnICsgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHBlcm1pc3Npb246JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0VycmV1ciBsb3JzIGRlIGxcXCdham91dCBkZSBsYSBwZXJtaXNzaW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc2V0TmV3UGVybWlzc2lvbigpIHtcclxuICAgICAgICAgICAgLy8gRGVzdHJveSBTZWxlY3RpemVKUyBpbnN0YW5jZSBjb21wbGV0ZWx5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV3UGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgZm9ybSBidXQga2VlcCB0eXBlIGFzICd1c2VyJyBzbyBmb3JtIHN0YXlzIHZpc2libGVcclxuICAgICAgICAgICAgdGhpcy5uZXdQZXJtaXNzaW9uLnVzZXJJZHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5uZXdQZXJtaXNzaW9uLnJvbGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm5ld1Blcm1pc3Npb24uZ3JvdXBJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZWluaXRpYWxpemUgU2VsZWN0aXplSlMgYWZ0ZXIgcmVzZXRcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV3UGVybWlzc2lvbi50eXBlID09PSAndXNlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRTZWxlY3RpemUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBkZWxldGVQZXJtaXNzaW9uKHBlcm1pc3Npb25JZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzb3VyY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0VycmV1cjogSUQgZGUgcmVzc291cmNlIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghY29uZmlybSgnU3VwcHJpbWVyIGNldHRlIHBlcm1pc3Npb24gPycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5yZXNvdXJjZUlkfS9wZXJtaXNzaW9ucy8ke3Blcm1pc3Npb25JZH1gLCB0aGlzLmFkZENzcmZUb0ZldGNoT3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUGVybWlzc2lvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyOiAnICsgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwZXJtaXNzaW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi8qIFBlcm1pc3Npb25zIGN1cnJlbnQgbGlzdCAqL1xyXG4ucGVybWlzc2lvbnMtZW1wdHkge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU1ZTk7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9ucy1lbXB0eSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGNvbG9yOiAjNWY2MzY4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbnMtZW1wdHkgc3Ryb25nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBjb2xvcjogIzIwMjEyNDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9ucy1lbXB0eSBzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9ucy1jdXJyZW50LWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtIDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tY3VycmVudC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UgaSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlLS11c2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYwZmU7XHJcbiAgICBjb2xvcjogIzE5NjdkMjtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZS0tdXNlciBpIHtcclxuICAgIGNvbG9yOiAjMTk2N2QyO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlLS1yb2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWY3ZTA7XHJcbiAgICBjb2xvcjogI2VhODYwMDtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZS0tcm9sZSBpIHtcclxuICAgIGNvbG9yOiAjZWE4NjAwO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlLS1ncm91cCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU5O1xyXG4gICAgY29sb3I6ICMyZTdkMzI7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UtLWdyb3VwIGkge1xyXG4gICAgY29sb3I6ICMyZTdkMzI7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fZ3JhbnRlZC1ieSB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2RlbGV0ZSB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU1ZTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fZGVsZXRlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tY3VycmVudC1pdGVtX19kZWxldGU6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XHJcbiAgICBib3JkZXItY29sb3I6ICNjODIzMzM7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fZGVsZXRlIGkge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLyogUGVybWlzc2lvbnMgbGlzdCAoc2FtZSBzdHlsZSBhcyBDcmVhdGVGb2xkZXJNb2RhbCkgKi9cclxuLnBlcm1pc3Npb25zLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNWU5O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWl0ZW06aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAyMDQzO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMzIsIDY3LCAwLjEpO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtX19ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0MHB4IDFmciBhdXRvO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzVmNjM2ODtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLnBlcm1pc3Npb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAyMDQzO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMzIsIDY3LCAwLjEpO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pbnB1dC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtX190eXBlIHtcclxuICAgIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWl0ZW1fX3ZhbHVlIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWl0ZW1fX2FjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWFkZC1jb25maXJtLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjg3NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWFkZC1jb25maXJtLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWFkZC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1hZGQtYnRuOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGVybWlzc2lvbi1pdGVtX19ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBnYXA6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wZXJtaXNzaW9uLWl0ZW1fX2FjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlcm1pc3Npb24tY3VycmVudC1pdGVtIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGdhcDogMC43NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnBlcm1pc3Npb24tY3VycmVudC1pdGVtX19ncmFudGVkLWJ5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX292ZXJsYXlcIiBAY2xpY2suc2VsZj1cIiRlbWl0KCdjbG9zZScpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2NvbnRlbnQgZmlsZS1tb2RhbF9fY29udGVudC0tcmVuYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1vZGFsX19oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5SZW5vbW1lciB7eyBpdGVtLnR5cGUgPT09ICdmb2xkZXInID8gJ2xlIGRvc3NpZXInIDogJ2xlIGZpY2hpZXInIH19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibmV3TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBrZXl1cC5lbnRlcj1cImhhbmRsZVJlbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cIm5hbWVJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIml0ZW0ubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCI+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cImhhbmRsZVJlbmFtZVwiIDpkaXNhYmxlZD1cIiFuZXdOYW1lIHx8IG5ld05hbWUudHJpbSgpID09PSAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlbm9tbWVyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NyZlRva2VuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5ld05hbWU6ICcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBuYW1lIGFuZCBmb2N1cyBpbnB1dFxyXG4gICAgICAgIHRoaXMubmV3TmFtZSA9IHRoaXMuaXRlbS5uYW1lO1xyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMubmFtZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLm5hbWVJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5uYW1lSW5wdXQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgZmV0Y2ggaGVhZGVycyB3aXRoIENTUkYgdG9rZW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRDc3JmSGVhZGVycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICdYLUNTUkYtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYWRkIENTUkYgdG9rZW4gdG8gZmV0Y2ggb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZENzcmZUb0ZldGNoT3B0aW9ucyhvcHRpb25zID0ge30pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDc3JmSGVhZGVycygpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zLmhlYWRlcnMgfHwge30pLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGhhbmRsZVJlbmFtZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm5ld05hbWUgfHwgdGhpcy5uZXdOYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZmlsZXMvJHt0aGlzLml0ZW0uaWR9L3JlbmFtZWAsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uZXdOYW1lLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5pdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlbmFtZWQnLCB7IC4uLnRoaXMuaXRlbSwgbmFtZTogdGhpcy5uZXdOYW1lLnRyaW0oKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyOiAnICsgKGRhdGEuZXJyb3IgfHwgJ0ltcG9zc2libGUgZGUgcmVub21tZXInKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW5hbWluZzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyZXVyIGxvcnMgZHUgcmVub21tYWdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fb3ZlcmxheVwiIEBjbGljay5zZWxmPVwiaGFuZGxlQ2xvc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fY29udGVudCBmaWxlLW1vZGFsX19jb250ZW50LS11cGxvYWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlTDqWzDqXZlcnNlciBkZXMgZmljaGllcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc21cIiBAY2xpY2s9XCJoYW5kbGVDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1tb2RhbF9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtdXBsb2FkZXJfX2Ryb3B6b25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2RyYWdvdmVyJzogaXNEcmFnZ2luZywgJ2hhcy1maWxlcyc6IGFsbEZpbGVzLmxlbmd0aCA+IDAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBkcm9wLnByZXZlbnQ9XCJoYW5kbGVEcm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgQGRyYWdvdmVyLnByZXZlbnQ9XCJoYW5kbGVEcmFnT3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBkcmFnZW50ZXIucHJldmVudD1cImhhbmRsZURyYWdFbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBkcmFnbGVhdmU9XCJoYW5kbGVEcmFnTGVhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0cmlnZ2VyRmlsZUlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG91ZC11cGxvYWQgZmEtM3hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5HbGlzc2V6LWTDqXBvc2V6IHZvcyBmaWNoaWVycyBpY2k8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogIzk5OTsgbWFyZ2luOiAwLjVyZW0gMDtcIj5vdTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9wZW5cIj48L2k+IFBhcmNvdXJpclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImZpbGVJbnB1dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVGaWxlU2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImFsbEZpbGVzLmxlbmd0aCA+IDBcIiBjbGFzcz1cInNlbGVjdGVkLWZpbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPVwibWFyZ2luOiAxLjVyZW0gMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjVyZW07IGNvbG9yOiAjMDAyMDQzO1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmljaGllcnMgKHt7IGFsbEZpbGVzLmxlbmd0aCB9fSlcclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWxlSXRlbSBpbiBhbGxGaWxlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWxlSXRlbS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxlLXVwbG9hZC1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmaWxlLXVwbG9hZC1pdGVtLS11cGxvYWRpbmcnOiBmaWxlSXRlbS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZmlsZS11cGxvYWQtaXRlbS0tY29tcGxldGVkJzogZmlsZUl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGUtdXBsb2FkLWl0ZW0tLWVycm9yJzogZmlsZUl0ZW0uc3RhdHVzID09PSAnZXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtdXBsb2FkLWl0ZW1fX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IHdpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiZ2V0RmlsZUljb24oZmlsZUl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBjb2xvcjogZmlsZUl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICcjMjhhNzQ1JyA6IGZpbGVJdGVtLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgPyAnIzAwMjA0MycgOiBmaWxlSXRlbS5zdGF0dXMgPT09ICdlcnJvcicgPyAnI2RjMzU0NScgOiAnIzAwMjA0MycgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj57eyBmaWxlSXRlbS5maWxlLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1zaXplXCI+KHt7IGZvcm1hdEZpbGVTaXplKGZpbGVJdGVtLmZpbGUuc2l6ZSkgfX0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gUHJvZ3Jlc3MgYmFyIGZvciB1cGxvYWRpbmcgZmlsZXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlsZUl0ZW0uc3RhdHVzID09PSAndXBsb2FkaW5nJ1wiIGNsYXNzPVwiZmlsZS11cGxvYWQtaXRlbV9fcHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLXVwbG9hZC1pdGVtX19wcm9ncmVzcy10ZXh0XCI+e3sgTWF0aC5yb3VuZChmaWxlSXRlbS5wcm9ncmVzcykgfX0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiBzdHlsZT1cImZsZXg6IDE7IGhlaWdodDogNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBmaWxlSXRlbS5wcm9ncmVzcyArICclJywgYmFja2dyb3VuZENvbG9yOiAnIzAwMjA0MycgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLXZhbHVlbm93PVwiZmlsZUl0ZW0ucHJvZ3Jlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBTdWNjZXNzIGljb24gZm9yIGNvbXBsZXRlZCBmaWxlcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlSXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnXCIgY2xhc3M9XCJmaWxlLXVwbG9hZC1pdGVtX19zdGF0dXNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDAuMjVyZW07XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiAjMjhhNzQ1OyBtYXJnaW4tbGVmdDogMC4yNXJlbTtcIj5Uw6lsw6l2ZXJzw6k8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFcnJvciBtZXNzYWdlIGZvciBmYWlsZWQgZmlsZXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmlsZUl0ZW0uc3RhdHVzID09PSAnZXJyb3InXCIgY2xhc3M9XCJmaWxlLXVwbG9hZC1pdGVtX19lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjZGMzNTQ1OyBmb250LXNpemU6IDAuODEyNXJlbTsgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XCI+e3sgZmlsZUl0ZW0uZXJyb3IgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVGaWxlSXRlbShmaWxlSXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpbGVJdGVtLnN0YXR1cyA9PT0gJ3VwbG9hZGluZydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cImZpbGVJdGVtLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgPyAnSW1wb3NzaWJsZSBkZSBzdXBwcmltZXIgcGVuZGFudCBsZSB0w6lsw6l2ZXJzZW1lbnQnIDogJ1N1cHByaW1lcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImFsbEZpbGVzLmxlbmd0aCA+IDAgJiYgIXVwbG9hZGluZyAmJiBpc0FkbWluXCIgY2xhc3M9XCJwZXJtaXNzaW9ucy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPVwibWFyZ2luOiAxLjVyZW0gMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+PGkgY2xhc3M9XCJmYSBmYS1zaGllbGQtYWx0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgY29sb3I6ICMwMDIwNDM7XCI+PC9pPlBlcm1pc3Npb25zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMC44NzVyZW07IG1hcmdpbi1ib3R0b206IDFyZW07XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIETDqWZpbmlzc2V6IGxlcyBwZXJtaXNzaW9ucyBwb3VyIGxlcyBmaWNoaWVycyB0w6lsw6l2ZXJzw6lzLiBMZXMgdXRpbGlzYXRldXJzL3LDtGxlcyBhdmVjIHVuZSBwZXJtaXNzaW9uIGF1cm9udCBhY2PDqHMgZW4gbGVjdHVyZSBldCB0w6lsw6ljaGFyZ2VtZW50IHVuaXF1ZW1lbnQuIENlcyBwZXJtaXNzaW9ucyBzJ2FwcGxpcXVlcm9udCDDoCB0b3VzIGxlcyBmaWNoaWVycyBzw6lsZWN0aW9ubsOpcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcm1pc3Npb25zLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihwZXJtaXNzaW9uLCBpbmRleCkgaW4gcGVybWlzc2lvbnNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGVybWlzc2lvbi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVybWlzc2lvbi1pdGVtX19ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcm1pc3Npb24taXRlbV9fdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJtaXNzaW9uLWxhYmVsXCI+VHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInBlcm1pc3Npb24udHlwZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBwZXJtaXNzaW9uLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVzZXJcIj5VdGlsaXNhdGV1cjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJvbGVcIj5Sw7RsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyb3VwXCI+R3JvdXBlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1fX3ZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIiB2LWlmPVwicGVybWlzc2lvbi50eXBlID09PSAndXNlcidcIj5VdGlsaXNhdGV1cnM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwZXJtaXNzaW9uLWxhYmVsXCIgdi1lbHNlLWlmPVwicGVybWlzc2lvbi50eXBlID09PSAncm9sZSdcIj5Sw7RsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBlcm1pc3Npb24tbGFiZWxcIiB2LWVsc2U+R3JvdXBlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBlcm1pc3Npb24udHlwZSA9PT0gJ3VzZXInXCIgY2xhc3M9XCJwZXJtaXNzaW9uLWlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZj1cIid1c2VyU2VsZWN0LScgKyBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtaW5kZXg9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHVzZXItc2VsZWN0aXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciBldCBzw6lsZWN0aW9ubmVyIGRlcyB1dGlsaXNhdGV1cnMuLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1lbHNlLWlmPVwicGVybWlzc2lvbi50eXBlID09PSAncm9sZSdcIiB2LW1vZGVsPVwicGVybWlzc2lvbi5yb2xlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U8OpbGVjdGlvbm5lciB1biByw7RsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInJvbGUgaW4gKGF2YWlsYWJsZVJvbGVzIHx8IFtdKVwiIDprZXk9XCJyb2xlLnZhbHVlXCIgOnZhbHVlPVwicm9sZS52YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJvbGUubGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1lbHNlIHYtbW9kZWw9XCJwZXJtaXNzaW9uLmdyb3VwSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGVybWlzc2lvbi1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tw6lsZWN0aW9ubmVyIHVuIGdyb3VwZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImdyb3VwIGluIChhdmFpbGFibGVHcm91cHMgfHwgW10pXCIgOmtleT1cImdyb3VwLnZhbHVlXCIgOnZhbHVlPVwiZ3JvdXAudmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBncm91cC5sYWJlbCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJtaXNzaW9uLWl0ZW1fX2FjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIHBlcm1pc3Npb24tcmVtb3ZlLWJ0blwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZVBlcm1pc3Npb24oaW5kZXgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGl0bGU9XCInU3VwcHJpbWVyIGNldHRlIHBlcm1pc3Npb24nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgcGVybWlzc2lvbi1hZGQtYnRuXCIgQGNsaWNrPVwiYWRkUGVybWlzc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiBBam91dGVyIHVuZSBwZXJtaXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbW9kYWxfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cImhhbmRsZUNsb3NlXCI+QW5udWxlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ1cGxvYWRGaWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInNlbGVjdGVkRmlsZXNDb3VudCA9PT0gMCB8fCB1cGxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT4gVMOpbMOpdmVyc2VyICh7eyBzZWxlY3RlZEZpbGVzQ291bnQgfX0pXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZm9sZGVySWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdGlhbEZpbGVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNBZG1pbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzcmZUb2tlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4RmlsZVNpemU6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAxMDQ4NTc2MDAsIC8vIDEwMCBNQiBwYXIgZMOpZmF1dFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlczogW10sXHJcbiAgICAgICAgICAgIHVwbG9hZHM6IFtdLFxyXG4gICAgICAgICAgICB1cGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBwZXJtaXNzaW9uczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaFRpbWVvdXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZVJvbGVzOiBbXSxcclxuICAgICAgICAgICAgYXZhaWxhYmxlR3JvdXBzOiBbXSxcclxuICAgICAgICAgICAgYWN0aXZlWGhyUmVxdWVzdHM6IFtdLCAvLyBTdG9ja2VyIGxlcyByZXF1w6p0ZXMgWE1MSHR0cFJlcXVlc3QgYWN0aXZlc1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBhbGxGaWxlcygpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBbXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZWxlY3RlZCBmaWxlcyAobm90IHlldCB1cGxvYWRlZClcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGVzLmZvckVhY2goKGZpbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGZpbGUgaXMgYWxyZWFkeSBpbiB1cGxvYWRzXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWQgPSB0aGlzLnVwbG9hZHMuZmluZCh1ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHUuZmlsZS5uYW1lID09PSBmaWxlLm5hbWUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgdS5maWxlLnNpemUgPT09IGZpbGUuc2l6ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHUuZmlsZS5sYXN0TW9kaWZpZWQgPT09IGZpbGUubGFzdE1vZGlmaWVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIXVwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYHNlbGVjdGVkLSR7aW5kZXh9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWRkIGZpbGVzIGJlaW5nIHVwbG9hZGVkIG9yIGNvbXBsZXRlZFxyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZHMuZm9yRWFjaCh1cGxvYWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9ICd1cGxvYWRpbmcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVwbG9hZC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwbG9hZC5wcm9ncmVzcyA+PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAnY29tcGxldGVkJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZmlsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVwbG9hZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlOiB1cGxvYWQuZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogdXBsb2FkLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB1cGxvYWQuZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmlsZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBzZWxlY3RlZEZpbGVzQ291bnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZXMuZmlsdGVyKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgY291bnQgZmlsZXMgdGhhdCBhcmUgYWxyZWFkeSB1cGxvYWRpbmcvY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMudXBsb2Fkcy5maW5kKHUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgdS5maWxlLm5hbWUgPT09IGZpbGUubmFtZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICB1LmZpbGUuc2l6ZSA9PT0gZmlsZS5zaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdS5maWxlLmxhc3RNb2RpZmllZCA9PT0gZmlsZS5sYXN0TW9kaWZpZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGdldCBmZXRjaCBoZWFkZXJzIHdpdGggQ1NSRiB0b2tlblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldENzcmZIZWFkZXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6IHRoaXMuY3NyZlRva2VuLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBhZGQgQ1NSRiB0b2tlbiB0byBmZXRjaCBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldENzcmZIZWFkZXJzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uKG9wdGlvbnMuaGVhZGVycyB8fCB7fSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJpZ2dlckZpbGVJbnB1dCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlSW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGhhbmRsZUZpbGVTZWxlY3QoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXMoZmlsZXMpO1xyXG4gICAgICAgICAgICAvLyBSw6lpbml0aWFsaXNlciBsJ2lucHV0IHBvdXIgcGVybWV0dHJlIGRlIHPDqWxlY3Rpb25uZXIgbGVzIG3Dqm1lcyBmaWNoaWVycyDDoCBub3V2ZWF1XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlRHJhZ092ZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVEcmFnRW50ZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVEcmFnTGVhdmUoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgc2V0IGlzRHJhZ2dpbmcgdG8gZmFsc2UgaWYgd2UncmUgbGVhdmluZyB0aGUgZHJvcHpvbmUgaXRzZWxmXHJcbiAgICAgICAgICAgIC8vIChub3QgYSBjaGlsZCBlbGVtZW50KVxyXG4gICAgICAgICAgICBpZiAoIWV2ZW50LmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVEcm9wKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXMoZmlsZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkRmlsZXMoZmlsZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBWw6lyaWZpZXIgbGEgdGFpbGxlIGR1IGZpY2hpZXJcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4U2l6ZU1CID0gTWF0aC5yb3VuZCh0aGlzLm1heEZpbGVTaXplIC8gMTAyNCAvIDEwMjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplTUIgPSBNYXRoLnJvdW5kKGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgTGUgZmljaGllciBcIiR7ZmlsZS5uYW1lfVwiIGVzdCB0cm9wIHZvbHVtaW5ldXggKCR7ZmlsZVNpemVNQn0gTUIpLiBMYSB0YWlsbGUgbWF4aW1hbGUgYXV0b3Jpc8OpZSBlc3QgZGUgJHttYXhTaXplTUJ9IE1CLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBmaWxlIGFscmVhZHkgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEZpbGVzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGZpbGUubmFtZSAmJiBmLnNpemUgPT09IGZpbGUuc2l6ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZXMucHVzaChmaWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVtb3ZlRmlsZUl0ZW0oZmlsZUl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGZpbGVJdGVtLnN0YXR1cyA9PT0gJ3NlbGVjdGVkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gc2VsZWN0ZWRGaWxlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkRmlsZXMuZmluZEluZGV4KGYgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgZi5uYW1lID09PSBmaWxlSXRlbS5maWxlLm5hbWUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgZi5zaXplID09PSBmaWxlSXRlbS5maWxlLnNpemUgJiZcclxuICAgICAgICAgICAgICAgICAgICBmLmxhc3RNb2RpZmllZCA9PT0gZmlsZUl0ZW0uZmlsZS5sYXN0TW9kaWZpZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdXBsb2Fkc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVVcGxvYWQoZmlsZUl0ZW0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBmb3JtYXRGaWxlU2l6ZShieXRlcykge1xyXG4gICAgICAgICAgICBpZiAoYnl0ZXMgPT09IDApIHJldHVybiAnMCBCeXRlcyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGsgPSAxMDI0O1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InXTtcclxuICAgICAgICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChieXRlcyAvIE1hdGgucG93KGssIGkpICogMTAwKSAvIDEwMCArICcgJyArIHNpemVzW2ldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0RmlsZUljb24oZmlsZSkge1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsZS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLWNoZWNrLWNpcmNsZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLXNwaW5uZXIgZmEtc3Bpbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZpbGUuZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKCcucGRmJykpIHJldHVybiAnZmEgZmEtZmlsZS1wZGYnO1xyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8c3ZnfHdlYnApJC8pKSByZXR1cm4gJ2ZhIGZhLWZpbGUtaW1hZ2UnO1xyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuKGRvY3xkb2N4KSQvKSkgcmV0dXJuICdmYSBmYS1maWxlLXdvcmQnO1xyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvXFwuKHhsc3x4bHN4KSQvKSkgcmV0dXJuICdmYSBmYS1maWxlLWV4Y2VsJztcclxuICAgICAgICAgICAgaWYgKG5hbWUubWF0Y2goL1xcLih6aXB8cmFyfDd6fHRhcnxneikkLykpIHJldHVybiAnZmEgZmEtZmlsZS1hcmNoaXZlJztcclxuICAgICAgICAgICAgaWYgKG5hbWUubWF0Y2goL1xcLihtcDR8YXZpfG1vdnx3bXZ8Zmx2KSQvKSkgcmV0dXJuICdmYSBmYS1maWxlLXZpZGVvJztcclxuICAgICAgICAgICAgaWYgKG5hbWUubWF0Y2goL1xcLihtcDN8d2F2fG9nZ3xmbGFjKSQvKSkgcmV0dXJuICdmYSBmYS1maWxlLWF1ZGlvJztcclxuICAgICAgICAgICAgcmV0dXJuICdmYSBmYS1maWxlJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZFBlcm1pc3Npb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wZXJtaXNzaW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndXNlcicsXHJcbiAgICAgICAgICAgICAgICB1c2VySWRzOiBbXSwgLy8gQXJyYXkgb2YgdXNlciBJRHMgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgcm9sZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RpemVJbnN0YW5jZTogbnVsbCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdGl6ZUpTIGFmdGVyIFZ1ZSBoYXMgcmVuZGVyZWRcclxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0aXplKGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICByZW1vdmVQZXJtaXNzaW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSB0aGlzLnBlcm1pc3Npb25zW2luZGV4XTtcclxuICAgICAgICAgICAgLy8gRGVzdHJveSBTZWxlY3RpemVKUyBpbnN0YW5jZSBpZiBpdCBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJlaW5pdGlhbGl6ZSBTZWxlY3RpemVKUyBmb3IgcmVtYWluaW5nIHBlcm1pc3Npb25zXHJcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcm0udHlwZSA9PT0gJ3VzZXInICYmICFwZXJtLnNlbGVjdGl6ZUluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGl6ZShpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRTZWxlY3RpemUoaW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IHRoaXMucGVybWlzc2lvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIXBlcm1pc3Npb24gfHwgcGVybWlzc2lvbi50eXBlICE9PSAndXNlcicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IHRoaXMuJHJlZnNbYHVzZXJTZWxlY3QtJHtpbmRleH1gXTtcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXRyeSBpZiBlbGVtZW50IG5vdCByZW5kZXJlZCB5ZXRcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0U2VsZWN0aXplKGluZGV4KSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgalF1ZXJ5IGlzIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy4kID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignalF1ZXJ5IGlzIG5vdCBhdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0U2VsZWN0aXplKGluZGV4KSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgU2VsZWN0aXplSlMgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LiQuZm4uc2VsZWN0aXplKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlbGVjdGl6ZUpTIG5vdCBsb2FkZWQgeWV0LCByZXRyeWluZy4uLicpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRTZWxlY3RpemUoaW5kZXgpLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEZXN0cm95IGV4aXN0aW5nIGluc3RhbmNlIGlmIGFueVxyXG4gICAgICAgICAgICBpZiAocGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgU2VsZWN0aXplSlNcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGl6ZSA9IHdpbmRvdy4kKHNlbGVjdEVsZW1lbnQpLnNlbGVjdGl6ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogWydyZW1vdmVfYnV0dG9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVGaWVsZDogJ2lkJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEZpZWxkOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRmllbGQ6IFsnbmFtZScsICdlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SXRlbXM6IG51bGwsIC8vIE5vIGxpbWl0XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25QYXJlbnQ6ICdib2R5JywgLy8gQXR0YWNoIGRyb3Bkb3duIHRvIGJvZHkgdG8gYXZvaWQgc2Nyb2xsIGlzc3Vlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWQ6IChxdWVyeSwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeSB8fCBxdWVyeS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgL2FwaS91c2Vycy9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9JmxpbWl0PTIwYCwgdGhpcy5hZGRDc3JmVG9GZXRjaE9wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEudXNlcnMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYCR7dXNlci5uYW1lfSAoJHt1c2VyLmVtYWlsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpemVKUyB3aXRoIG11bHRpcGxlIGNhbiByZXR1cm4gZWl0aGVyIGFuIGFycmF5IG9yIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24udXNlcklkcyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi51c2VySWRzID0gdmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24udXNlcklkcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLnNlbGVjdGl6ZUluc3RhbmNlID0gc2VsZWN0aXplWzBdLnNlbGVjdGl6ZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBTZWxlY3RpemVKUzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIHVwbG9hZEZpbGVzKCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgb25seSBmaWxlcyB0aGF0IGFyZSBub3QgYWxyZWFkeSB1cGxvYWRpbmdcclxuICAgICAgICAgICAgY29uc3QgZmlsZXNUb1VwbG9hZCA9IHRoaXMuc2VsZWN0ZWRGaWxlcy5maWx0ZXIoZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMudXBsb2Fkcy5maW5kKHUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgdS5maWxlLm5hbWUgPT09IGZpbGUubmFtZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICB1LmZpbGUuc2l6ZSA9PT0gZmlsZS5zaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdS5maWxlLmxhc3RNb2RpZmllZCA9PT0gZmlsZS5sYXN0TW9kaWZpZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZpbGVzVG9VcGxvYWQubGVuZ3RoID09PSAwIHx8IHRoaXMudXBsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBudW1iZXIgb2YgZmlsZXMgdG8gdXBsb2FkXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsRmlsZXMgPSBmaWxlc1RvVXBsb2FkLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlZEZpbGVzID0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlc1RvVXBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWRJZCA9IERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1cGxvYWRJZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3VwbG9hZGluZycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwbG9hZEZpbGUoZmlsZSwgdXBsb2FkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZEZpbGVzKys7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZXIgbGVzIGVycmV1cnMgZCdhbm51bGF0aW9uIChjJ2VzdCBub3JtYWwgcXVhbmQgb24gZmVybWUgbGEgbW9kYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICdVcGxvYWQgY2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3VyIGxlcyBhdXRyZXMgZXJyZXVycywgb24gY29udGludWUgcXVhbmQgbcOqbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVXBsb2FkIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2kgbCd1cGxvYWQgZXN0IGFubnVsw6ksIG9uIGFycsOqdGUgbGEgYm91Y2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdVcGxvYWQgY2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGFsbCBmaWxlcyBhcmUgY29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkRmlsZXMgPT09IHRvdGFsRmlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBbGwgZmlsZXMgdXBsb2FkZWQsIGNoZWNrIGlmIG1vZGFsIHNob3VsZCBjbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FuZENsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIHVwbG9hZEZpbGUoZmlsZSwgdXBsb2FkSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvbGRlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmb2xkZXJJZCcsIHRoaXMuZm9sZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gU3RvY2tlciBsYSByw6lmw6lyZW5jZSBYSFIgcG91ciBwb3V2b2lyIGwnYW5udWxlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgeGhyUmVmID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHhocjogeGhyLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZElkOiB1cGxvYWRJZCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVhoclJlcXVlc3RzLnB1c2goeGhyUmVmKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGxvYWQgPSB0aGlzLnVwbG9hZHMuZmluZCh1ID0+IHUuaWQgPT09IHVwbG9hZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0aXJlciBsYSByw6lmw6lyZW5jZSBYSFIgZGUgbGEgbGlzdGUgZGVzIHJlcXXDqnRlcyBhY3RpdmVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVYaHJSZXF1ZXN0KHVwbG9hZElkKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZCA9IHRoaXMudXBsb2Fkcy5maW5kKHUgPT4gdS5pZCA9PT0gdXBsb2FkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQucHJvZ3Jlc3MgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gJ2NvbXBsZXRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHBlcm1pc3Npb25zIGlmIGFueSBhbmQgdXNlciBpcyBhZG1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBZG1pbiAmJiB0aGlzLnBlcm1pc3Npb25zLmxlbmd0aCA+IDAgJiYgZGF0YS5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRQZXJtaXNzaW9uc1RvRmlsZShkYXRhLmZpbGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSB1cGxvYWRzIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVVwbG9hZCh1cGxvYWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkRmlsZXMgaWYgc3RpbGwgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZUluZGV4ID0gdGhpcy5zZWxlY3RlZEZpbGVzLmZpbmRJbmRleChmID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYubmFtZSA9PT0gZmlsZS5uYW1lICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYuc2l6ZSA9PT0gZmlsZS5zaXplICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5sYXN0TW9kaWZpZWQgPT09IGZpbGUubGFzdE1vZGlmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGVzLnNwbGljZShmaWxlSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdVcGxvYWQgbm90IGZvdW5kJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkID0gdGhpcy51cGxvYWRzLmZpbmQodSA9PiB1LmlkID09PSB1cGxvYWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkLmVycm9yID0gZGF0YS5lcnJvciB8fCAnRXJyZXVyIGxvcnMgZHUgdMOpbMOpdmVyc2VtZW50JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkLmVycm9yID0gJ0VycmV1ciBsb3JzIGR1IHTDqWzDqXZlcnNlbWVudCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1VwbG9hZCBmYWlsZWQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJldGlyZXIgbGEgcsOpZsOpcmVuY2UgWEhSIGRlIGxhIGxpc3RlIGRlcyByZXF1w6p0ZXMgYWN0aXZlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlWGhyUmVxdWVzdCh1cGxvYWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkID0gdGhpcy51cGxvYWRzLmZpbmQodSA9PiB1LmlkID09PSB1cGxvYWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQuZXJyb3IgPSAnRXJyZXVyIHLDqXNlYXUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignTmV0d29yayBlcnJvcicpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0aXJlciBsYSByw6lmw6lyZW5jZSBYSFIgZGUgbGEgbGlzdGUgZGVzIHJlcXXDqnRlcyBhY3RpdmVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVYaHJSZXF1ZXN0KHVwbG9hZElkKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdVcGxvYWQgY2FuY2VsbGVkJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJy9hcGkvZmlsZXMvdXBsb2FkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgQ1NSRiB0b2tlbiBoZWFkZXJcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLUNTUkYtVG9rZW4nLCB0aGlzLmNzcmZUb2tlbik7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgYWRkUGVybWlzc2lvbnNUb0ZpbGUoZmlsZUlkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGVybSBvZiB0aGlzLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVybS50eXBlID09PSAndXNlcicgJiYgcGVybS51c2VySWRzICYmIHBlcm0udXNlcklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG9uZSBwZXJtaXNzaW9uIHBlciBzZWxlY3RlZCB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB1c2VySWQgb2YgcGVybS51c2VySWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUGVybWlzc2lvblRvRmlsZShmaWxlSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcm0udHlwZSA9PT0gJ3JvbGUnICYmIHBlcm0ucm9sZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUGVybWlzc2lvblRvRmlsZShmaWxlSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBwZXJtLnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcm0udHlwZSA9PT0gJ2dyb3VwJyAmJiBwZXJtLmdyb3VwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFBlcm1pc3Npb25Ub0ZpbGUoZmlsZUlkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogcGVybS5ncm91cElkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBhZGRQZXJtaXNzaW9uVG9GaWxlKGZpbGVJZCwgcGVybWlzc2lvbkRhdGEpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBmaWxlSWQgaXMgYSBudW1iZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGZpbGVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlkIHx8IGlzTmFOKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgZmlsZSBJRDonLCBmaWxlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9maWxlcy8ke2lkfS9wZXJtaXNzaW9uc2AsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwZXJtaXNzaW9uRGF0YSksXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHBlcm1pc3Npb246JywgZXJyb3JEYXRhLmVycm9yIHx8ICdVbmtub3duIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcGVybWlzc2lvbjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbW92ZVVwbG9hZCh1cGxvYWRJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBsb2Fkcy5maW5kSW5kZXgodSA9PiB1LmlkID09PSB1cGxvYWRJZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVtb3ZlWGhyUmVxdWVzdCh1cGxvYWRJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYWN0aXZlWGhyUmVxdWVzdHMuZmluZEluZGV4KHIgPT4gci51cGxvYWRJZCA9PT0gdXBsb2FkSWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVYaHJSZXF1ZXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbm51bGVyIHRvdXMgbGVzIHTDqWzDqXZlcnNlbWVudHMgZW4gY291cnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjYW5jZWxBbGxVcGxvYWRzKCkge1xyXG4gICAgICAgICAgICAvLyBBbm51bGVyIHRvdXRlcyBsZXMgcmVxdcOqdGVzIFhNTEh0dHBSZXF1ZXN0IGFjdGl2ZXNcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVYaHJSZXF1ZXN0cy5mb3JFYWNoKHJlZiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVmLnhociAmJiByZWYueGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWYueGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbCfDqXRhdCBkJ3VwbG9hZFxyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVhoclJlcXVlc3RzID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHw6lyZXIgbGEgZmVybWV0dXJlIGRlIGxhIG1vZGFsIGF2ZWMgYW5udWxhdGlvbiBkZXMgdXBsb2FkcyBlbiBjb3Vyc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGhhbmRsZUNsb3NlKCkge1xyXG4gICAgICAgICAgICAvLyBTaSBkZXMgdXBsb2FkcyBzb250IGVuIGNvdXJzLCBsZXMgYW5udWxlclxyXG4gICAgICAgICAgICBpZiAodGhpcy51cGxvYWRpbmcgfHwgdGhpcy5hY3RpdmVYaHJSZXF1ZXN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEFsbFVwbG9hZHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTmV0dG95ZXIgbGVzIFNlbGVjdGl6ZUpTIGluc3RhbmNlc1xyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmZvckVhY2gocGVybWlzc2lvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIMOJbWV0dHJlIGwnw6l2w6luZW1lbnQgZGUgZmVybWV0dXJlXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBjaGVja0FuZENsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIG1vZGFsIGlmIGFsbCBmaWxlcyBhcmUgdXBsb2FkZWQgYW5kIG5vIGZpbGVzIGFyZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvLyBVc2UgVnVlLm5leHRUaWNrIHRvIGVuc3VyZSByZWFjdGl2aXR5IGhhcyB1cGRhdGVkXHJcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1VwbG9hZHMgPSB0aGlzLnVwbG9hZHMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1NlbGVjdGVkRmlsZXMgPSB0aGlzLnNlbGVjdGVkRmlsZXMubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0FsbEZpbGVzID0gdGhpcy5hbGxGaWxlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1VwbG9hZHMgJiYgIWhhc1NlbGVjdGVkRmlsZXMgJiYgIWhhc0FsbEZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVzdHJveSBhbGwgU2VsZWN0aXplSlMgaW5zdGFuY2VzIGJlZm9yZSBjbGVhcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuZm9yRWFjaChwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uc2VsZWN0aXplSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgYXN5bmMgbG9hZFJvbGVzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9yb2xlcycsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZVJvbGVzID0gZGF0YS5yb2xlcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcm9sZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgdG8gZGVmYXVsdCByb2xlcyBpZiBBUEkgZmFpbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlUm9sZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ1JPTEVfVVNFUicsIGxhYmVsOiAnVXNlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnUk9MRV9URUNITklDSUVOJywgbGFiZWw6ICdUZWNobmljaWVuJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdST0xFX0FETUlOJywgbGFiZWw6ICdBZG1pbicgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGxvYWRHcm91cHMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dyb3VwcycsIHRoaXMuYWRkQ3NyZlRvRmV0Y2hPcHRpb25zKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUdyb3VwcyA9IGRhdGEuZ3JvdXBzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBncm91cHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVHcm91cHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBwZXJtaXNzaW9uczoge1xyXG4gICAgICAgICAgICBoYW5kbGVyKG5ld1Blcm1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIFNlbGVjdGl6ZUpTIGZvciBuZXcgdXNlciBwZXJtaXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Blcm1zLmZvckVhY2goKHBlcm0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVybS50eXBlID09PSAndXNlcicgJiYgIXBlcm0uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdGl6ZShpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcm0udHlwZSAhPT0gJ3VzZXInICYmIHBlcm0uc2VsZWN0aXplSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlc3Ryb3kgU2VsZWN0aXplSlMgaWYgdHlwZSBjaGFuZ2VzIGZyb20gdXNlciB0byByb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtLnNlbGVjdGl6ZUluc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm0uc2VsZWN0aXplSW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gTG9hZCBhdmFpbGFibGUgcm9sZXMgYW5kIGdyb3VwcyBvbmx5IGlmIHVzZXIgaXMgYWRtaW4gKG5vbi1ibG9ja2luZylcclxuICAgICAgICBpZiAodGhpcy5pc0FkbWluKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZSBzZXRUaW1lb3V0IHRvIG1ha2UgaXQgbm9uLWJsb2NraW5nXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUm9sZXMoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2lsZW50bHkgZmFpbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlUm9sZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkR3JvdXBzKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbGVudGx5IGZhaWxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUdyb3VwcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgaW5pdGlhbCBmaWxlcyBpZiBwcm92aWRlZFxyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxGaWxlcyAmJiB0aGlzLmluaXRpYWxGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXModGhpcy5pbml0aWFsRmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgZHJhZyBiZWhhdmlvcnMgb24gdGhlIGRvY3VtZW50IHRvIGF2b2lkIG9wZW5pbmcgZmlsZXNcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0cyA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy5wcmV2ZW50RGVmYXVsdHMsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdMOpbMOpdmVyc2VtZW50cyBlbiBjb3VycyBhdmFudCBkZSBkw6l0cnVpcmUgbGUgY29tcG9zYW50XHJcbiAgICAgICAgdGhpcy5jYW5jZWxBbGxVcGxvYWRzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRGVzdHJveSBhbGwgU2VsZWN0aXplSlMgaW5zdGFuY2VzXHJcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5mb3JFYWNoKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbi5zZWxlY3RpemVJbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmVudERlZmF1bHRzKSB7XHJcbiAgICAgICAgICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMucHJldmVudERlZmF1bHRzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnNlbGVjdGVkLWZpbGVzIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLmZpbGUtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uZmlsZS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZpbGUtaXRlbS0tdXBsb2FkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNlN2YzZmY7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMDIwNDM7XHJcbn1cclxuXHJcbi5maWxlLWl0ZW0tLWNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjhhNzQ1O1xyXG59XHJcblxyXG4uZmlsZS1pdGVtLS1lcnJvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZGMzNTQ1O1xyXG59XHJcblxyXG4uZmlsZS1pdGVtX19pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5maWxlLWl0ZW1fX3Byb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmZpbGUtaXRlbV9fcHJvZ3Jlc3MtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZmlsZS1pdGVtX19zdGF0dXMge1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLmZpbGUtaXRlbV9fZXJyb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uZmlsZS1zaXplIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLnBlcm1pc3Npb25zLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbnMtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnBlcm1pc3Npb24taXRlbV9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHRzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1yZXN1bHQtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxufVxyXG5cclxuLnVzZXItcmVzdWx0LWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX292ZXJsYXlcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gbnVsbFxuICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ2FuY2VsLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19jb250ZW50IGZpbGUtbW9kYWxfX2NvbnRlbnQtLWNvbmZpcm1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbVwiLCBvbjogeyBjbGljazogX3ZtLmhhbmRsZUNhbmNlbCB9IH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF92bS50eXBlID09PSBcImRhbmdlclwiXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb25maXJtLW1vZGFsX19pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9KSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS50eXBlID09PSBcImVycm9yXCJcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbmZpcm0tbW9kYWxfX2ljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lcy1jaXJjbGVcIiB9KSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS50eXBlID09PSBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29uZmlybS1tb2RhbF9faWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29uZmlybS1tb2RhbF9fbWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnN1Yk1lc3NhZ2VcbiAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb25maXJtLW1vZGFsX19zdWItbWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN1Yk1lc3NhZ2UpKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uY2FuY2VsVGV4dFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ2FuY2VsIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY2FuY2VsVGV4dCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY29uZmlybUJ1dHRvbkNsYXNzLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ubG9hZGluZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ29uZmlybSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jb25maXJtVGV4dCkpXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF92bS52aXNpYmxlXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRleHQtbWVudVwiLFxuICAgICAgICAgIHN0eWxlOiBfdm0ubWVudVN0eWxlLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGV4dC1tZW51X19pdGVtXCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlT3BlbiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uaXRlbS50eXBlID09PSBcImZvbGRlclwiID8gXCJmYS1mb2xkZXItb3BlblwiIDogXCJmYS1leWVcIixcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIiBcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbS50eXBlID09PSBcImZvbGRlclwiID8gXCJPdXZyaXJcIiA6IFwiVm9pclwiKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaXNBZG1pbiB8fCBfdm0uaXRlbS5jYW5EZWxldGUgfHwgX3ZtLml0ZW0uY2FuRWRpdFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRleHQtbWVudV9fc2VwYXJhdG9yXCIgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY3VycmVudFZpZXcgIT09IFwidHJhc2hcIiAmJiBfdm0uaXRlbS5jYW5FZGl0XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGV4dC1tZW51X19pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZVJlbmFtZSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZWRpdFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFJlbm9tbWVyXFxuICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY3VycmVudFZpZXcgPT09IFwidHJhc2hcIiAmJiBfdm0uaXRlbS5jYW5EZWxldGVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZXh0LW1lbnVfX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlUmVzdG9yZSB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdW5kb1wiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFJlc3RhdXJlclxcbiAgICBcIiksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmN1cnJlbnRWaWV3ID09PSBcInRyYXNoXCIgJiYgX3ZtLml0ZW0uY2FuRGVsZXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGV4dC1tZW51X19pdGVtIGRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVQZXJtYW5lbnREZWxldGUgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgU3VwcHJpbWVyIGTDqWZpbml0aXZlbWVudFxcbiAgICBcIiksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmN1cnJlbnRWaWV3ICE9PSBcInRyYXNoXCIgJiYgX3ZtLmlzQWRtaW5cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZXh0LW1lbnVfX2l0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlUGVybWlzc2lvbnMgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2tcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBQZXJtaXNzaW9uc1xcbiAgICBcIiksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmN1cnJlbnRWaWV3ICE9PSBcInRyYXNoXCIgJiYgX3ZtLml0ZW0uY2FuRGVsZXRlXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGV4dC1tZW51X19zZXBhcmF0b3JcIiB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5jdXJyZW50VmlldyAhPT0gXCJ0cmFzaFwiICYmIF92bS5pdGVtLmNhbkRlbGV0ZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRleHQtbWVudV9faXRlbSBkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlRGVsZXRlIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFN1cHByaW1lclxcbiAgICBcIiksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX292ZXJsYXlcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gbnVsbFxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2NvbnRlbnQgZmlsZS1tb2RhbF9fY29udGVudC0tZm9sZGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiTm91dmVhdSBkb3NzaWVyXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2JvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvbGRlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9sZGVyTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZjogXCJuYW1lSW5wdXRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiTm9tIGR1IGRvc3NpZXJcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9sZGVyTmFtZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY3JlYXRlRm9sZGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBfdm0uZm9sZGVyTmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaXNBZG1pbiA/IF9jKFwiaHJcIikgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaXNBZG1pblxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIlBlcm1pc3Npb25zXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMC44NzVyZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIETDqWZpbmlzc2V6IGxlcyBwZXJtaXNzaW9ucyBwb3VyIGNlIGRvc3NpZXIuIExlcyB1dGlsaXNhdGV1cnMvcsO0bGVzIGF2ZWMgdW5lIHBlcm1pc3Npb24gYXVyb250IGFjY8OocyBlbiBsZWN0dXJlIGV0IHTDqWzDqWNoYXJnZW1lbnQgdW5pcXVlbWVudC4gTGVzIHBlcm1pc3Npb25zIHBldXZlbnQgw6p0cmUgbW9kaWZpw6llcyB1bHTDqXJpZXVyZW1lbnQuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9ucy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGVybWlzc2lvbnMsIGZ1bmN0aW9uIChwZXJtaXNzaW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbV9fZ3JpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWl0ZW1fX3R5cGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUeXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBlcm1pc3Npb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJtaXNzaW9uLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBwZXJtaXNzaW9uLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwidXNlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVdGlsaXNhdGV1clwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJyb2xlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcImdyb3VwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdyb3VwZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbV9fdmFsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24udHlwZSA9PT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVXRpbGlzYXRldXJzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwZXJtaXNzaW9uLnR5cGUgPT09IFwicm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24tbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR3JvdXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi50eXBlID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uLWlucHV0LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlclNlbGVjdC1cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHVzZXItc2VsZWN0aXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVjaGVyY2hlciBldCBzw6lsZWN0aW9ubmVyIGRlcyB1dGlsaXNhdGV1cnMuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGVybWlzc2lvbi50eXBlID09PSBcInJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBlcm1pc3Npb24ucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVybWlzc2lvbi5yb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTw6lsZWN0aW9ubmVyIHVuIHLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF2YWlsYWJsZVJvbGVzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJvbGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb2xlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJvbGUubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBlcm1pc3Npb24uZ3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvbi5ncm91cElkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTw6lsZWN0aW9ubmVyIHVuIGdyb3VwZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdmFpbGFibGVHcm91cHMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZ3JvdXAubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWl0ZW1fX2FjdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyIHBlcm1pc3Npb24tcmVtb3ZlLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXBwcmltZXIgY2V0dGUgcGVybWlzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlUGVybWlzc2lvbihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5IHBlcm1pc3Npb24tYWRkLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZFBlcm1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFqb3V0ZXIgdW5lIHBlcm1pc3Npb25cXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJBbm51bGVyXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNhbkNyZWF0ZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlRm9sZGVyIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQ3LDqWVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwibGFiZWxcIiwgW1xuICAgICAgX3ZtLl92KFwiTm9tIGR1IGRvc3NpZXIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbX3ZtLl92KFwiKlwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1icmVhZGNydW1iXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLWJyZWFkY3J1bWJfX2l0ZW1cIixcbiAgICAgICAgICBjbGFzczogeyBcImRyYWctb3ZlclwiOiBfdm0uZHJhZ092ZXJJdGVtSWQgPT09IFwicm9vdFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcIm5hdmlnYXRlXCIsIG51bGwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJhZ292ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEcmFnT3ZlcihcInJvb3RcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRyYWdsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyYWdMZWF2ZShcInJvb3RcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRHJvcChudWxsLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ob21lXCIgfSksIF92bS5fdihcIiBBY2N1ZWlsXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLWJyZWFkY3J1bWJfX3NlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIi9cIiksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtYnJlYWRjcnVtYl9faXRlbVwiLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogaW5kZXggPT09IF92bS5pdGVtcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIFwiZHJhZy1vdmVyXCI6IF92bS5kcmFnT3Zlckl0ZW1JZCA9PT0gaXRlbS5pZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJuYXZpZ2F0ZVwiLCBpdGVtKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZHJhZ292ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyYWdPdmVyKGl0ZW0uaWQsICRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRyYWdsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEcmFnTGVhdmUoaXRlbS5pZClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyb3AoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0ubmFtZSkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBpbmRleCA8IF92bS5pdGVtcy5sZW5ndGggLSAxXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJzZXAtXCIgKyBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1icmVhZGNydW1iX19zZXBhcmF0b3JcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIvXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1ncmlkXCIgfSxcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLmZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImZvbGRlci1cIiArIGZvbGRlci5pZCxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtZ3JpZF9faXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJkcmFnLW92ZXJcIjogX3ZtLmRyYWdPdmVyRm9sZGVySWQgPT09IGZvbGRlci5pZCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgZHJhZ292ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRHJhZ092ZXIoZm9sZGVyLCAkZXZlbnQpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRyYWdsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRHJhZ0xlYXZlKGZvbGRlcilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEcm9wKGZvbGRlciwgJGV2ZW50KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiRmlsZUl0ZW1cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGl0ZW06IHsgLi4uZm9sZGVyLCB0eXBlOiBcImZvbGRlclwiIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IF92bS5pc1NlbGVjdGVkKGZvbGRlciwgXCJmb2xkZXJcIiksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ2xpY2soZm9sZGVyLCBcImZvbGRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEYmxDbGljayhmb2xkZXIsIFwiZm9sZGVyXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGFyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZVN0YXIoZm9sZGVyLCBcImZvbGRlclwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVNb3JlKHsgLi4uZm9sZGVyLCB0eXBlOiBcImZvbGRlclwiIH0sICRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY29udGV4dC1tZW51XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ29udGV4dE1lbnUoXG4gICAgICAgICAgICAgICAgICAgIHsgLi4uZm9sZGVyLCB0eXBlOiBcImZvbGRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBrZXk6IFwiZmlsZS1cIiArIGZpbGUuaWQsIHN0YXRpY0NsYXNzOiBcImZpbGUtZ3JpZF9faXRlbVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJGaWxlSXRlbVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaXRlbTogeyAuLi5maWxlLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBfdm0uaXNTZWxlY3RlZChmaWxlLCBcImZpbGVcIiksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ2xpY2soZmlsZSwgXCJmaWxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURibENsaWNrKGZpbGUsIFwiZmlsZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVTdGFyKGZpbGUsIFwiZmlsZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9yZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVNb3JlKHsgLi4uZmlsZSwgdHlwZTogXCJmaWxlXCIgfSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjb250ZXh0LW1lbnVcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVDb250ZXh0TWVudShcbiAgICAgICAgICAgICAgICAgICAgeyAuLi5maWxlLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1pdGVtXCIsXG4gICAgICBjbGFzczogeyBzZWxlY3RlZDogX3ZtLnNlbGVjdGVkLCBkcmFnZ2luZzogX3ZtLmlzRHJhZ2dpbmcgfSxcbiAgICAgIGF0dHJzOiB7IGRyYWdnYWJsZTogXCJ0cnVlXCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGRyYWdzdGFydDogX3ZtLmhhbmRsZURyYWdTdGFydCxcbiAgICAgICAgZHJhZ2VuZDogX3ZtLmhhbmRsZURyYWdFbmQsXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgfSxcbiAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGJsY2xpY2tcIilcbiAgICAgICAgfSxcbiAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY29udGV4dC1tZW51XCIsICRldmVudClcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtaXRlbV9fc3RhclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwiZmlsZS1pdGVtX19zdGFyLS1zdGFycmVkXCI6IF92bS5pdGVtLmlzU3RhcnJlZCB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogX3ZtLml0ZW0uaXNTdGFycmVkXG4gICAgICAgICAgICAgID8gXCJSZXRpcmVyIGRlcyBmYXZvcmlzXCJcbiAgICAgICAgICAgICAgOiBcIkFqb3V0ZXIgYXV4IGZhdm9yaXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInN0YXJcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5pdGVtLmlzU3RhcnJlZCA/IFwiZmEtc3RhclwiIDogXCJmYS1zdGFyLW9cIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uaXRlbS5pc1N0YXJyZWQgPyBcIiNGRkNCMDBcIiA6IFwiIzAwMFwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLWl0ZW1fX2ljb25cIixcbiAgICAgICAgICBjbGFzczogX3ZtLmdldEZpbGVJY29uQ2xhc3MoX3ZtLml0ZW0pLFxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5nZXRGaWxlSWNvbihfdm0uaXRlbSkgfSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtaXRlbV9fbmFtZVwiLCBhdHRyczogeyB0aXRsZTogX3ZtLml0ZW0ubmFtZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLml0ZW0udHlwZSA9PT0gXCJmaWxlXCJcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtaXRlbV9fbWV0YVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLml0ZW0uZm9ybWF0dGVkU2l6ZSkgKyBcIlxcbiAgICBcIiksXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtaXRlbV9fYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJQbHVzIGQnb3B0aW9uc1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJtb3JlXCIsICRldmVudClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZWxsaXBzaXMtdlwiIH0pXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1saXN0XCIsXG4gICAgICBjbGFzczogeyBcImRyYWctb3ZlclwiOiBfdm0uaXNEcmFnZ2luZ0ZpbGVzIH0sXG4gICAgICBvbjoge1xuICAgICAgICBkcmFnb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVGaWxlRHJhZ092ZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgICBkcmFnZW50ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRmlsZURyYWdFbnRlci5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgIH0sXG4gICAgICAgIGRyYWdsZWF2ZTogX3ZtLmhhbmRsZUZpbGVEcmFnTGVhdmUsXG4gICAgICAgIGRyb3A6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRmlsZURyb3AuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxpc3RfX2JvZHlcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5mb2xkZXJzLCBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZm9sZGVyLVwiICsgZm9sZGVyLmlkLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbGlzdF9faXRlbVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogX3ZtLmlzU2VsZWN0ZWQoZm9sZGVyLCBcImZvbGRlclwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZHJhZy1vdmVyXCI6IF92bS5kcmFnT3ZlckZvbGRlcklkID09PSBmb2xkZXIuaWQsXG4gICAgICAgICAgICAgICAgICBkcmFnZ2luZzpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRyYWdnZWRJdGVtICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5kcmFnZ2VkSXRlbS5pZCA9PT0gZm9sZGVyLmlkICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5kcmFnZ2VkSXRlbS50eXBlID09PSBcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZHJhZ2dhYmxlOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBkcmFnc3RhcnQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEcmFnU3RhcnQoZm9sZGVyLCBcImZvbGRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZHJhZ2VuZDogX3ZtLmhhbmRsZURyYWdFbmQsXG4gICAgICAgICAgICAgICAgICBkcmFnb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyYWdPdmVyKGZvbGRlciwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRyYWdsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyYWdMZWF2ZShmb2xkZXIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyb3AoZm9sZGVyLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVDbGljayhmb2xkZXIsIFwiZm9sZGVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURibENsaWNrKGZvbGRlciwgXCJmb2xkZXJcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZUNvbnRleHRNZW51KFxuICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZm9sZGVyLCB0eXBlOiBcImZvbGRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMC43NXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmNiMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEuMjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCI1MDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmb2xkZXIubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZvcm1hdERhdGUoZm9sZGVyLnVwZGF0ZWRBdCkpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoZm9sZGVyLm93bmVyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxpc3RfX2FjdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbGlzdF9fYWN0aW9uLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZm9sZGVyLmlzU3RhcnJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmV0aXJlciBkZXMgZmF2b3Jpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJBam91dGVyIGF1eCBmYXZvcmlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlU3Rhcihmb2xkZXIsIFwiZm9sZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmb2xkZXIuaXNTdGFycmVkID8gXCJmYS1zdGFyXCIgOiBcImZhLXN0YXItb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImZpbGUtXCIgKyBmaWxlLmlkLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbGlzdF9faXRlbVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogX3ZtLmlzU2VsZWN0ZWQoZmlsZSwgXCJmaWxlXCIpLFxuICAgICAgICAgICAgICAgICAgZHJhZ2dpbmc6XG4gICAgICAgICAgICAgICAgICAgIF92bS5kcmFnZ2VkSXRlbSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uZHJhZ2dlZEl0ZW0uaWQgPT09IGZpbGUuaWQgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRyYWdnZWRJdGVtLnR5cGUgPT09IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZHJhZ2dhYmxlOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBkcmFnc3RhcnQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVEcmFnU3RhcnQoZmlsZSwgXCJmaWxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkcmFnZW5kOiBfdm0uaGFuZGxlRHJhZ0VuZCxcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ2xpY2soZmlsZSwgXCJmaWxlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURibENsaWNrKGZpbGUsIFwiZmlsZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ29udGV4dE1lbnUoXG4gICAgICAgICAgICAgICAgICAgICAgeyAuLi5maWxlLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5nZXRGaWxlSWNvbihmaWxlKSwgX3ZtLmdldEZpbGVJY29uQ2xhc3MoZmlsZSldLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMC43NXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMS4yNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXdlaWdodFwiOiBcIjUwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLmZvcm1hdHRlZFNpemUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZvcm1hdERhdGUoZmlsZS51cGRhdGVkQXQpKSldKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGZpbGUub3duZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbGlzdF9fYWN0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1saXN0X19hY3Rpb24tYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmaWxlLmlzU3RhcnJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUmV0aXJlciBkZXMgZmF2b3Jpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJBam91dGVyIGF1eCBmYXZvcmlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlU3RhcihmaWxlLCBcImZpbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpbGUuaXNTdGFycmVkID8gXCJmYS1zdGFyXCIgOiBcImZhLXN0YXItb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbGlzdF9faGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIk5vbVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJUYWlsbGVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiTW9kaWZpw6lcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiUHJvcHJpw6l0YWlyZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJBY3Rpb25zXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1hbmFnZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiRmlsZVNpZGViYXJcIiwge1xuICAgICAgICByZWY6IFwic2lkZWJhclwiLFxuICAgICAgICBhdHRyczogeyBcImN1cnJlbnQtdmlld1wiOiBfdm0uY3VycmVudFZpZXcgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInZpZXctY2hhbmdlZFwiOiBfdm0uY2hhbmdlVmlldyxcbiAgICAgICAgICBcImZvbGRlci1zZWxlY3RlZFwiOiBfdm0ubmF2aWdhdGVUb0ZvbGRlcixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1tYW5hZ2VyX19jb250ZW50XCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVDb250ZW50Q2xpY2sgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiRmlsZVRvb2xiYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJjdXJyZW50LWZvbGRlclwiOiBfdm0uY3VycmVudEZvbGRlcixcbiAgICAgICAgICAgICAgXCJzZWxlY3RlZC1pdGVtc1wiOiBfdm0uc2VsZWN0ZWRJdGVtcyxcbiAgICAgICAgICAgICAgXCJzZWFyY2gtcXVlcnlcIjogX3ZtLnNlYXJjaFF1ZXJ5LFxuICAgICAgICAgICAgICBcImN1cnJlbnQtdmlld1wiOiBfdm0uY3VycmVudFZpZXcsXG4gICAgICAgICAgICAgIFwidmlldy1tb2RlXCI6IF92bS52aWV3TW9kZSxcbiAgICAgICAgICAgICAgXCJjYW4tdXBsb2FkLWZpbGVcIjogX3ZtLmNhblVwbG9hZEZpbGUsXG4gICAgICAgICAgICAgIFwiY2FuLWNyZWF0ZS1mb2xkZXJcIjogX3ZtLmNhbkNyZWF0ZUZvbGRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICB1cGxvYWQ6IF92bS5oYW5kbGVVcGxvYWQsXG4gICAgICAgICAgICAgIFwiY3JlYXRlLWZvbGRlclwiOiBfdm0uaGFuZGxlQ3JlYXRlRm9sZGVyLFxuICAgICAgICAgICAgICBkZWxldGU6IF92bS5oYW5kbGVEZWxldGUsXG4gICAgICAgICAgICAgIHNlYXJjaDogX3ZtLmhhbmRsZVNlYXJjaCxcbiAgICAgICAgICAgICAgXCJ2aWV3LW1vZGUtY2hhbmdlZFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnZpZXdNb2RlID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmJyZWFkY3J1bWIubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcIkZpbGVCcmVhZGNydW1iXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmJyZWFkY3J1bWIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBuYXZpZ2F0ZTogX3ZtLm5hdmlnYXRlVG9Gb2xkZXIsIGRyb3A6IF92bS5oYW5kbGVEcm9wIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1hbmFnZXJfX3ZpZXdcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxvYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2hhcmdlbWVudC4uLlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uZmlsZXMubGVuZ3RoID09PSAwICYmIF92bS5mb2xkZXJzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLW1hbmFnZXJfX2VtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJkcmFnLW92ZXJcIjogX3ZtLmRyYWdPdmVyUm9vdCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVJvb3REcmFnT3Zlci5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2xlYXZlOiBfdm0uaGFuZGxlUm9vdERyYWdMZWF2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3A6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5oYW5kbGVSb290RHJvcC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZm9sZGVyLW9wZW4gZmEtM3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBcIjFyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkNlIGRvc3NpZXIgZXN0IHZpZGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5kcmFnT3ZlclJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAyMDQzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1oYW5kLXBvaW50ZXJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgRMOpcG9zZXIgaWNpIHBvdXIgZMOpcGxhY2VyIHZlcnMgbGEgcmFjaW5lXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLnZpZXdNb2RlID09PSBcImdyaWRcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJGaWxlR3JpZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IF92bS5maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzOiBfdm0uZm9sZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkLWl0ZW1zXCI6IF92bS5zZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3NyZi10b2tlblwiOiBfdm0uY3NyZlRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX3ZtLmhhbmRsZVNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0uaGFuZGxlT3BlbixcbiAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfdm0uaGFuZGxlTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRleHQtbWVudVwiOiBfdm0uaGFuZGxlQ29udGV4dE1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcDogX3ZtLmhhbmRsZURyb3AsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX2MoXCJGaWxlTGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IF92bS5maWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzOiBfdm0uZm9sZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGVkLWl0ZW1zXCI6IF92bS5zZWxlY3RlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY3NyZi10b2tlblwiOiBfdm0uY3NyZlRva2VuLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX3ZtLmhhbmRsZVNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBfdm0uaGFuZGxlT3BlbixcbiAgICAgICAgICAgICAgICAgICAgICBtb3JlOiBfdm0uaGFuZGxlTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbnRleHQtbWVudVwiOiBfdm0uaGFuZGxlQ29udGV4dE1lbnUsXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcDogX3ZtLmhhbmRsZURyb3AsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmaWxlLWRyb3BcIjogX3ZtLmhhbmRsZUZpbGVEcm9wLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dVcGxvYWRlclxuICAgICAgICA/IF9jKFwiVXBsb2FkTW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJmb2xkZXItaWRcIjogX3ZtLmN1cnJlbnRGb2xkZXI/LmlkLFxuICAgICAgICAgICAgICBcImluaXRpYWwtZmlsZXNcIjogX3ZtLmRyb3BwZWRGaWxlcyxcbiAgICAgICAgICAgICAgXCJpcy1hZG1pblwiOiBfdm0uaXNBZG1pbixcbiAgICAgICAgICAgICAgXCJjc3JmLXRva2VuXCI6IF92bS5jc3JmVG9rZW4sXG4gICAgICAgICAgICAgIFwibWF4LWZpbGUtc2l6ZVwiOiBfdm0ubWF4RmlsZVNpemUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgdXBsb2FkZWQ6IF92bS5oYW5kbGVGaWxlVXBsb2FkZWQsXG4gICAgICAgICAgICAgIGNsb3NlOiBfdm0uaGFuZGxlQ2xvc2VVcGxvYWRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvd0NyZWF0ZUZvbGRlclxuICAgICAgICA/IF9jKFwiQ3JlYXRlRm9sZGVyTW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJwYXJlbnQtZm9sZGVyLWlkXCI6IF92bS5jdXJyZW50Rm9sZGVyPy5pZCxcbiAgICAgICAgICAgICAgXCJpcy1hZG1pblwiOiBfdm0uaXNBZG1pbixcbiAgICAgICAgICAgICAgXCJjc3JmLXRva2VuXCI6IF92bS5jc3JmVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY3JlYXRlZDogX3ZtLmhhbmRsZUZvbGRlckNyZWF0ZWQsXG4gICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3dDcmVhdGVGb2xkZXIgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wcmV2aWV3RmlsZVxuICAgICAgICA/IF9jKFwiRmlsZVByZXZpZXdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgZmlsZTogX3ZtLnByZXZpZXdGaWxlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5wcmV2aWV3RmlsZSA9IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGVybWlzc2lvblJlc291cmNlXG4gICAgICAgID8gX2MoXCJQZXJtaXNzaW9uTWFuYWdlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByZXNvdXJjZTogX3ZtLnBlcm1pc3Npb25SZXNvdXJjZSxcbiAgICAgICAgICAgICAgXCJjc3JmLXRva2VuXCI6IF92bS5jc3JmVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ucGVybWlzc2lvblJlc291cmNlID0gbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZW5hbWVJdGVtXG4gICAgICAgID8gX2MoXCJSZW5hbWVNb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBpdGVtOiBfdm0ucmVuYW1lSXRlbSwgXCJjc3JmLXRva2VuXCI6IF92bS5jc3JmVG9rZW4gfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHJlbmFtZWQ6IF92bS5oYW5kbGVSZW5hbWVkLFxuICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5yZW5hbWVJdGVtID0gbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jb250ZXh0TWVudS52aXNpYmxlXG4gICAgICAgID8gX2MoXCJDb250ZXh0TWVudVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2aXNpYmxlOiBfdm0uY29udGV4dE1lbnUudmlzaWJsZSxcbiAgICAgICAgICAgICAgaXRlbTogX3ZtLmNvbnRleHRNZW51Lml0ZW0sXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBfdm0uY29udGV4dE1lbnUucG9zaXRpb24sXG4gICAgICAgICAgICAgIFwiY3VycmVudC12aWV3XCI6IF92bS5jdXJyZW50VmlldyxcbiAgICAgICAgICAgICAgXCJpcy1hZG1pblwiOiBfdm0uaXNBZG1pbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBvcGVuOiBfdm0uaGFuZGxlT3BlbixcbiAgICAgICAgICAgICAgcmVuYW1lOiBfdm0uaGFuZGxlUmVuYW1lLFxuICAgICAgICAgICAgICBkZWxldGU6IF92bS5oYW5kbGVEZWxldGVJdGVtLFxuICAgICAgICAgICAgICByZXN0b3JlOiBfdm0uaGFuZGxlUmVzdG9yZSxcbiAgICAgICAgICAgICAgXCJwZXJtYW5lbnQtZGVsZXRlXCI6IF92bS5oYW5kbGVQZXJtYW5lbnREZWxldGUsXG4gICAgICAgICAgICAgIHBlcm1pc3Npb25zOiBfdm0uaGFuZGxlTW9yZSxcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY29udGV4dE1lbnUgPSB7XG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jb25maXJtTW9kYWwudmlzaWJsZVxuICAgICAgICA/IF9jKFwiQ29uZmlybU1vZGFsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBfdm0uY29uZmlybU1vZGFsLnRpdGxlLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBfdm0uY29uZmlybU1vZGFsLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIFwic3ViLW1lc3NhZ2VcIjogX3ZtLmNvbmZpcm1Nb2RhbC5zdWJNZXNzYWdlLFxuICAgICAgICAgICAgICB0eXBlOiBfdm0uY29uZmlybU1vZGFsLnR5cGUsXG4gICAgICAgICAgICAgIFwiY29uZmlybS10ZXh0XCI6IF92bS5jb25maXJtTW9kYWwuY29uZmlybVRleHQsXG4gICAgICAgICAgICAgIFwiY2FuY2VsLXRleHRcIjogX3ZtLmNvbmZpcm1Nb2RhbC5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uY29uZmlybU1vZGFsLmxvYWRpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLmNvbmZpcm1Nb2RhbC5vbkNvbmZpcm0sXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jb25maXJtTW9kYWwgPSB7IHZpc2libGU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX292ZXJsYXkgZmlsZS1wcmV2aWV3LW92ZXJsYXlcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gbnVsbFxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fY29udGVudCBmaWxlLXByZXZpZXctY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19oZWFkZXIgZmlsZS1wcmV2aWV3LWhlYWRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb24oKSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIwLjc1cmVtXCIsIFwiZm9udC1zaXplXCI6IFwiMS41cmVtXCIgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUubmFtZSkpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy1hY3Rpb25zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZG93bmxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICBkb3dubG9hZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlTDqWzDqWNoYXJnZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWRcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgVMOpbMOpY2hhcmdlclxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJQYXJ0YWdlclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zaGFyZUZpbGUgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNoYXJlLWFsdFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBQYXJ0YWdlclxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1jbG9zZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkZlcm1lclwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2JvZHkgZmlsZS1wcmV2aWV3LWJvZHlcIiB9LCBbXG4gICAgICAgICAgX3ZtLmZpbGUuaXNJbWFnZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy1pbWFnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmV2aWV3LWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5wcmV2aWV3VXJsLCBhbHQ6IF92bS5maWxlLm5hbWUgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLmZpbGUuaXNWaWRlb1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy12aWRlb1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJldmlldy12aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5wcmV2aWV3VXJsLCBjb250cm9sczogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBWb3RyZSBuYXZpZ2F0ZXVyIG5lIHN1cHBvcnRlIHBhcyBsYSBsZWN0dXJlIHZpZMOpby5cXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uZmlsZS5pc1BkZlxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy1wZGZcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwZGYtdG9vbGJhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBkZi10b29sYmFyLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZG93bmxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlTDqWzDqWNoYXJnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWRcIiB9KV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwZGYtdG9vbGJhci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJJbXByaW1lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wcmludFBkZiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcHJpbnRcIiB9KV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwZGYtdG9vbGJhci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJQbGVpbiDDqWNyYW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlRnVsbHNjcmVlbiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmlzRnVsbHNjcmVlbiA/IFwiZmEtY29tcHJlc3NcIiA6IFwiZmEtZXhwYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBkZi12aWV3ZXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwicGRmSWZyYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBkZi12aWV3ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlld1VybCB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5maWxlLmlzVGV4dFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC10b29sYmFyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC10b29sYmFyLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZG93bmxvYWRVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlTDqWzDqWNoYXJnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZG93bmxvYWRcIiB9KV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRleHRDb250ZW50KSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1wcmV2aWV3LXVuc3VwcG9ydGVkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1maWxlIGZhLTV4XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjAuM1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMjA0M1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxLjEyNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2NjZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQXBlcsOndSBub24gZGlzcG9uaWJsZSBwb3VyIGNlIHR5cGUgZGUgZmljaGllclwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5kb3dubG9hZFVybCwgZG93bmxvYWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWRvd25sb2FkXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBUw6lsw6ljaGFyZ2VyIGxlIGZpY2hpZXJcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19mb290ZXIgZmlsZS1wcmV2aWV3LWZvb3RlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy1tZXRhZGF0YVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWV0YWRhdGEtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmlsZVwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUYWlsbGU6XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5maWxlLmZvcm1hdHRlZFNpemUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1ldGFkYXRhLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRhZ1wiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJUeXBlOlwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZmlsZS5taW1lVHlwZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWV0YWRhdGEtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJBam91dMOpIHBhcjpcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmZpbGUub3duZXIubmFtZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWV0YWRhdGEtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2xvY2tcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiQWpvdXTDqSBsZTpcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmZvcm1hdERhdGUoX3ZtLmZpbGUuY3JlYXRlZEF0KSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiRmVybWVyXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJ0b2FzdFwiIH0gfSwgW1xuICAgICAgICBfdm0uc2hvd1RvYXN0XG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJldmlldy10b2FzdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS50b2FzdE1lc3NhZ2UpICsgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2lkZWJhclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2lkZWJhcl9fc2VjdGlvblwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1zaWRlYmFyX190aXRsZVwiIH0sIFtfdm0uX3YoXCJOYXZpZ2F0aW9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zaWRlYmFyX19pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudFZpZXcgPT09IFwiaG9tZVwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInZpZXctY2hhbmdlZFwiLCBcImhvbWVcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWhvbWVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBBY2N1ZWlsXFxuICAgICAgICBcIiksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zaWRlYmFyX19pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudFZpZXcgPT09IFwic3RhcnJlZFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInZpZXctY2hhbmdlZFwiLCBcInN0YXJyZWRcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXN0YXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBGYXZvcmlzXFxuICAgICAgICBcIiksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1zaWRlYmFyX19pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uY3VycmVudFZpZXcgPT09IFwidHJhc2hcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJ2aWV3LWNoYW5nZWRcIiwgXCJ0cmFzaFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2hcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBDb3JiZWlsbGVcXG4gICAgICAgIFwiKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXRvb2xiYXJcIiB9LCBbXG4gICAgX3ZtLmNhblVwbG9hZEZpbGVcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXRvb2xiYXJfX2J1dHRvbiBwcmltYXJ5XCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJ1cGxvYWRcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS11cGxvYWRcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBUw6lsw6l2ZXJzZXJcXG4gICAgXCIpLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jYW5DcmVhdGVGb2xkZXJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXRvb2xiYXJfX2J1dHRvblwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY3JlYXRlLWZvbGRlclwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZvbGRlci1wbHVzXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgTm91dmVhdSBkb3NzaWVyXFxuICAgIFwiKSxcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS10b29sYmFyX19zZXBhcmF0b3JcIiB9KVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgX3ZtLmNhbkRlbGV0ZVNlbGVjdGVkXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS10b29sYmFyX19idXR0b25cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRlbGV0ZVwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uY3VycmVudFZpZXcgPT09IFwidHJhc2hcIiA/IFwiZmEtdHJhc2hcIiA6IFwiZmEtdHJhc2hcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIiBcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uY3VycmVudFZpZXcgPT09IFwidHJhc2hcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiU3VwcHJpbWVyIGTDqWZpbml0aXZlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJTdXBwcmltZXJcIlxuICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWxlY3RlZEl0ZW1zLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiKVxcbiAgICBcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtdG9vbGJhcl9fc2VwYXJhdG9yXCIgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtdG9vbGJhcl9fYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnZpZXdNb2RlID09PSBcImdyaWRcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwidmlldy1tb2RlLWNoYW5nZWRcIiwgXCJncmlkXCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGhcIiB9KV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXRvb2xiYXJfX2J1dHRvblwiLFxuICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS52aWV3TW9kZSA9PT0gXCJsaXN0XCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInZpZXctbW9kZS1jaGFuZ2VkXCIsIFwibGlzdFwiKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWxpc3RcIiB9KV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXRvb2xiYXJfX3NlYXJjaFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUmVjaGVyY2hlci4uLlwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoUXVlcnkgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcInNlYXJjaFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19vdmVybGF5XCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkgcmV0dXJuIG51bGxcbiAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19jb250ZW50IGZpbGUtbW9kYWxfX2NvbnRlbnQtLXBlcm1pc3Npb25zXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiR2VzdGlvbiBkZXMgcGVybWlzc2lvbnNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc21cIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICFfdm0ucmVzb3VyY2VJZFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkVycmV1cjpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCIgSUQgZGUgcmVzc291cmNlIGludmFsaWRlLiBWZXVpbGxleiBmZXJtZXIgY2V0dGUgbW9kYWxlIGV0IHLDqWVzc2F5ZXIuXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0ubG9hZGluZ1xuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1sb2FkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2hhcmdlbWVudC4uLlxcbiAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9ucy1lbXB0eVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWluZm8tY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIkF1Y3VuZSBwZXJtaXNzaW9uIHNww6ljaWZpcXVlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9ucy1jdXJyZW50LWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wZXJtaXNzaW9ucywgZnVuY3Rpb24gKHBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwZXJtaXNzaW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1jdXJyZW50LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24udXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlIHBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZS0tdXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdXNlclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBlcm1pc3Npb24udXNlci5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBlcm1pc3Npb24uZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcm1pc3Npb24tY3VycmVudC1pdGVtX19iYWRnZSBwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS11c2Vyc1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBlcm1pc3Npb24uZ3JvdXAubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fYmFkZ2UgcGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2JhZGdlLS1yb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zaGllbGRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwZXJtaXNzaW9uLnJvbGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uLWN1cnJlbnQtaXRlbV9fZ3JhbnRlZC1ieVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3Jkw6kgcGFyIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBlcm1pc3Npb24uZ3JhbnRlZEJ5Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVybWlzc2lvbi1jdXJyZW50LWl0ZW1fX2RlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIlN1cHByaW1lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlUGVybWlzc2lvbihwZXJtaXNzaW9uLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2hcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiQWpvdXRlciB1bmUgcGVybWlzc2lvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjAuODc1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBMZXMgdXRpbGlzYXRldXJzL3LDtGxlcyBhdmVjIHVuZSBwZXJtaXNzaW9uIGF1cm9udCBhY2PDqHMgZW4gbGVjdHVyZSBldCB0w6lsw6ljaGFyZ2VtZW50IHVuaXF1ZW1lbnQuIExlcyBwZXJtaXNzaW9ucyBwZXV2ZW50IMOqdHJlIG1vZGlmacOpZXMgdWx0w6lyaWV1cmVtZW50LlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9ucy1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbV9fZ3JpZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1pdGVtX190eXBlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUeXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdQZXJtaXNzaW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdQZXJtaXNzaW9uLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld1Blcm1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcInVzZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXRpbGlzYXRldXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcInJvbGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUsO0bGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcImdyb3VwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkdyb3VwZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1pdGVtX192YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld1Blcm1pc3Npb24udHlwZSA9PT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJVdGlsaXNhdGV1cnNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm5ld1Blcm1pc3Npb24udHlwZSA9PT0gXCJyb2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSw7RsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiR3JvdXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uZXdQZXJtaXNzaW9uLnR5cGUgPT09IFwidXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWlucHV0LXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInVzZXJTZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gdXNlci1zZWxlY3RpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlY2hlcmNoZXIgZXQgc8OpbGVjdGlvbm5lciBkZXMgdXRpbGlzYXRldXJzLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubmV3UGVybWlzc2lvbi50eXBlID09PSBcInJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UGVybWlzc2lvbi5yb2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1Blcm1pc3Npb24ucm9sZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU8OpbGVjdGlvbm5lciB1biByw7RsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXZhaWxhYmxlUm9sZXMsIGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJvbGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHJvbGUudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJvbGUubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UGVybWlzc2lvbi5ncm91cElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1Blcm1pc3Npb24uZ3JvdXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmV3UGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU8OpbGVjdGlvbm5lciB1biBncm91cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsYWJsZUdyb3VwcywgZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBncm91cC52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZ3JvdXAubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1pdGVtX19hY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBwZXJtaXNzaW9uLWFkZC1jb25maXJtLWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uY2FuQWRkUGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWpvdXRlciBjZXR0ZSBwZXJtaXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGRQZXJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIEFqb3V0ZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkZlcm1lclwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImg0XCIsIFtcbiAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXNoaWVsZC1hbHRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIwLjVyZW1cIiwgY29sb3I6IFwiIzAwMjA0M1wiIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIlBlcm1pc3Npb25zIGFjdHVlbGxlc1wiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcInNtYWxsXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiU2V1bCBsJ2FkbWluaXN0cmF0ZXVyIGF1cmEgYWNjw6hzIMOgIGNldHRlIHJlc3NvdXJjZVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX292ZXJsYXlcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gbnVsbFxuICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2NvbnRlbnQgZmlsZS1tb2RhbF9fY29udGVudC0tcmVuYW1lXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlJlbm9tbWVyIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW0udHlwZSA9PT0gXCJmb2xkZXJcIiA/IFwibGUgZG9zc2llclwiIDogXCJsZSBmaWNoaWVyXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1vZGFsX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOb21cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3TmFtZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZjogXCJuYW1lSW5wdXRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IF92bS5pdGVtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld05hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVJlbmFtZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgX3ZtLm5ld05hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2Zvb3RlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQW5udWxlclwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5uZXdOYW1lIHx8IF92bS5uZXdOYW1lLnRyaW0oKSA9PT0gXCJcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlUmVuYW1lIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgUmVub21tZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX292ZXJsYXlcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSByZXR1cm4gbnVsbFxuICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlQ2xvc2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbW9kYWxfX2NvbnRlbnQgZmlsZS1tb2RhbF9fY29udGVudC0tdXBsb2FkXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9faGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiVMOpbMOpdmVyc2VyIGRlcyBmaWNoaWVyc1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc21cIiwgb246IHsgY2xpY2s6IF92bS5oYW5kbGVDbG9zZSB9IH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWRlcl9fZHJvcHpvbmVcIixcbiAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgZHJhZ292ZXI6IF92bS5pc0RyYWdnaW5nLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZmlsZXNcIjogX3ZtLmFsbEZpbGVzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyb3AuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRyYWdvdmVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaGFuZGxlRHJhZ092ZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRyYWdlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZURyYWdFbnRlci5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZHJhZ2xlYXZlOiBfdm0uaGFuZGxlRHJhZ0xlYXZlLFxuICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS50cmlnZ2VyRmlsZUlucHV0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG91ZC11cGxvYWQgZmEtM3hcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIwLjg3NXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMC41cmVtIDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwib3VcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcImZpbGVJbnB1dFwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbXVsdGlwbGU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uaGFuZGxlRmlsZVNlbGVjdCB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFsbEZpbGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGVjdGVkLWZpbGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIxLjVyZW0gMFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMjA0M1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIEZpY2hpZXJzIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmFsbEZpbGVzLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIpXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZC1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbGxGaWxlcywgZnVuY3Rpb24gKGZpbGVJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlSXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZS11cGxvYWQtaXRlbS0tdXBsb2FkaW5nXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlSXRlbS5zdGF0dXMgPT09IFwidXBsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxlLXVwbG9hZC1pdGVtLS1jb21wbGV0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVJdGVtLnN0YXR1cyA9PT0gXCJjb21wbGV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtdXBsb2FkLWl0ZW0tLWVycm9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlSXRlbS5zdGF0dXMgPT09IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtaXRlbV9faW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0RmlsZUljb24oZmlsZUl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUl0ZW0uc3RhdHVzID09PSBcImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMyOGE3NDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmlsZUl0ZW0uc3RhdHVzID09PSBcInVwbG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMwMDIwNDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmlsZUl0ZW0uc3RhdHVzID09PSBcImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2RjMzU0NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMwMDIwNDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgZmxleDogXCIxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWxlSXRlbS5maWxlLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGUtc2l6ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RmlsZVNpemUoZmlsZUl0ZW0uZmlsZS5zaXplKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUl0ZW0uc3RhdHVzID09PSBcInVwbG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZC1pdGVtX19wcm9ncmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpbGUtdXBsb2FkLWl0ZW1fX3Byb2dyZXNzLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChmaWxlSXRlbS5wcm9ncmVzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNlOWVjZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZ3Jlc3MtYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZmlsZUl0ZW0ucHJvZ3Jlc3MgKyBcIiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDIwNDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInByb2dyZXNzYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW5vd1wiOiBmaWxlSXRlbS5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtYXhcIjogXCIxMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUl0ZW0uc3RhdHVzID09PSBcImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtaXRlbV9fc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIwLjI1cmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjAuODEyNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzI4YTc0NVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjAuMjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVMOpbMOpdmVyc8OpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlSXRlbS5zdGF0dXMgPT09IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtaXRlbV9fZXJyb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZGMzNTQ1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjAuODEyNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjAuMjVyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhmaWxlSXRlbS5lcnJvcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpbGVJdGVtLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUl0ZW0uc3RhdHVzID09PSBcInVwbG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiSW1wb3NzaWJsZSBkZSBzdXBwcmltZXIgcGVuZGFudCBsZSB0w6lsw6l2ZXJzZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlN1cHByaW1lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVGaWxlSXRlbShmaWxlSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFsbEZpbGVzLmxlbmd0aCA+IDAgJiYgIV92bS51cGxvYWRpbmcgJiYgX3ZtLmlzQWRtaW5cbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb25zLXNlY3Rpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIsIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjEuNXJlbSAwXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBEw6lmaW5pc3NleiBsZXMgcGVybWlzc2lvbnMgcG91ciBsZXMgZmljaGllcnMgdMOpbMOpdmVyc8Opcy4gTGVzIHV0aWxpc2F0ZXVycy9yw7RsZXMgYXZlYyB1bmUgcGVybWlzc2lvbiBhdXJvbnQgYWNjw6hzIGVuIGxlY3R1cmUgZXQgdMOpbMOpY2hhcmdlbWVudCB1bmlxdWVtZW50LiBDZXMgcGVybWlzc2lvbnMgcydhcHBsaXF1ZXJvbnQgw6AgdG91cyBsZXMgZmljaGllcnMgc8OpbGVjdGlvbm7DqXMuXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9ucy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGVybWlzc2lvbnMsIGZ1bmN0aW9uIChwZXJtaXNzaW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbV9fZ3JpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwZXJtaXNzaW9uLWl0ZW1fX3R5cGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUeXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBlcm1pc3Npb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJtaXNzaW9uLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBwZXJtaXNzaW9uLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwidXNlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJVdGlsaXNhdGV1clwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJyb2xlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcImdyb3VwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdyb3VwZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24taXRlbV9fdmFsdWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24udHlwZSA9PT0gXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVXRpbGlzYXRldXJzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwZXJtaXNzaW9uLnR5cGUgPT09IFwicm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBlcm1pc3Npb24tbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR3JvdXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi50eXBlID09PSBcInVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uLWlucHV0LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlclNlbGVjdC1cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHVzZXItc2VsZWN0aXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVjaGVyY2hlciBldCBzw6lsZWN0aW9ubmVyIGRlcyB1dGlsaXNhdGV1cnMuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGVybWlzc2lvbi50eXBlID09PSBcInJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBlcm1pc3Npb24ucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVybWlzc2lvbi5yb2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHBlcm1pc3Npb24tc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG8uX3ZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTw6lsZWN0aW9ubmVyIHVuIHLDtGxlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF2YWlsYWJsZVJvbGVzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJvbGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb2xlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyb2xlLmxhYmVsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGVybWlzc2lvbi5ncm91cElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uLmdyb3VwSWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gcGVybWlzc2lvbi1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JvdXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlPDqWxlY3Rpb25uZXIgdW4gZ3JvdXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF2YWlsYWJsZUdyb3VwcyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZ3JvdXAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBncm91cC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZ3JvdXAubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGVybWlzc2lvbi1pdGVtX19hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc20gYnRuLWRhbmdlciBwZXJtaXNzaW9uLXJlbW92ZS1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VwcHJpbWVyIGNldHRlIHBlcm1pc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVBlcm1pc3Npb24oaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSBwZXJtaXNzaW9uLWFkZC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hZGRQZXJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBBam91dGVyIHVuZSBwZXJtaXNzaW9uXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1tb2RhbF9fZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ2xvc2UgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQW5udWxlclwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5zZWxlY3RlZEZpbGVzQ291bnQgPT09IDAgfHwgX3ZtLnVwbG9hZGluZyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBsb2FkRmlsZXMgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXVwbG9hZFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiIFTDqWzDqXZlcnNlciAoXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkRmlsZXNDb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICBcIilcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInBcIiwgW19jKFwic3Ryb25nXCIsIFtfdm0uX3YoXCJHbGlzc2V6LWTDqXBvc2V6IHZvcyBmaWNoaWVycyBpY2lcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZm9sZGVyLW9wZW5cIiB9KSxcbiAgICAgIF92bS5fdihcIiBQYXJjb3VyaXJcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiaDVcIiwgW1xuICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2hpZWxkLWFsdFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjAuNXJlbVwiLCBjb2xvcjogXCIjMDAyMDQzXCIgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiUGVybWlzc2lvbnNcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db25maXJtTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwNDkwZGZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbmZpcm1Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmZpcm1Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29uZmlybU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgwNDkwZGZlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODA0OTBkZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODA0OTBkZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODA0OTBkZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbmZpcm1Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODA0OTBkZmUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODA0OTBkZmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9Db25maXJtTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzk5MWNlYWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy90aGliYXVsdGRlcmV2aWVyZS9Eb3dubG9hZHMvYmxvb2R5LW1hcnlzLXYyL2JsX3Rlcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOTkxY2VhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOTkxY2VhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOTkxY2VhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGV4dE1lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5OTFjZWFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM5OTFjZWFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvQ29udGV4dE1lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DcmVhdGVGb2xkZXJNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VlNjY1YmYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DcmVhdGVGb2xkZXJNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2VlNjY1YmYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNlZTY2NWJmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlZTY2NWJmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlZTY2NWJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlZTY2NWJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DcmVhdGVGb2xkZXJNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VlNjY1YmYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2VlNjY1YmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9DcmVhdGVGb2xkZXJNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVCcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZmVhMzg1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVCcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NmZWEzODVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NmZWEzODVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NmZWEzODVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZlYTM4NWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2ZlYTM4NWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlQnJlYWRjcnVtYi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVHcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjNmNGY5NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVHcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYyM2Y0Zjk2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyM2Y0Zjk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyM2Y0Zjk2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIzZjRmOTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjIzZjRmOTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlR3JpZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTBjZGUzYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q1MGNkZTNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q1MGNkZTNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q1MGNkZTNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDUwY2RlM2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDUwY2RlM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMTAxZWUyNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MxMDFlZTI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MxMDFlZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MxMDFlZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzEwMWVlMjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzEwMWVlMjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9GaWxlTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVNYW5hZ2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Yzg3YjdlNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlTWFuYWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVNYW5hZ2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GaWxlTWFuYWdlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03Yzg3YjdlNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2M4N2I3ZTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2M4N2I3ZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2M4N2I3ZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2M4N2I3ZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVNYW5hZ2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Yzg3YjdlNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Yzg3YjdlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyNmU3MmE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVQcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzI2ZTcyYTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzI2ZTcyYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzI2ZTcyYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVQcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MjZlNzJhOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MjZlNzJhOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVQcmV2aWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVNpZGViYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIyMmM5Zjg4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVTaWRlYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVNpZGViYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjIyYzlmODgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjIyYzlmODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjIyYzlmODgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVTaWRlYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMjJjOWY4OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMjJjOWY4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL0ZpbGVTaWRlYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVRvb2xiYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYTAwOGRiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVUb29sYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVRvb2xiYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZpbGVUb29sYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiYTAwOGRiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmEwMDhkYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy90aGliYXVsdGRlcmV2aWVyZS9Eb3dubG9hZHMvYmxvb2R5LW1hcnlzLXYyL2JsX3Rlcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYmEwMDhkYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYmEwMDhkYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYmEwMDhkYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZVRvb2xiYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiYTAwOGRiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiYTAwOGRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvZmlsZS1tYW5hZ2VyL2NvbXBvbmVudHMvRmlsZVRvb2xiYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QZXJtaXNzaW9uTWFuYWdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU4MWQ2ZGEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGVybWlzc2lvbk1hbmFnZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QZXJtaXNzaW9uTWFuYWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI1ODFkNmRhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1ODFkNmRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1ODFkNmRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1ODFkNmRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QZXJtaXNzaW9uTWFuYWdlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU4MWQ2ZGEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjU4MWQ2ZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9QZXJtaXNzaW9uTWFuYWdlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlbmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZmE1ZGVlYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZW5hbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlbmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3RoaWJhdWx0ZGVyZXZpZXJlL0Rvd25sb2Fkcy9ibG9vZHktbWFyeXMtdjIvYmxfdGVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VmYTVkZWVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VmYTVkZWVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VmYTVkZWVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZW5hbWVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWZhNWRlZWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWZhNWRlZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9maWxlLW1hbmFnZXIvY29tcG9uZW50cy9SZW5hbWVNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzEzYjViMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9VcGxvYWRNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9VcGxvYWRNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYzEzYjViMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmMxM2I1YjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvdGhpYmF1bHRkZXJldmllcmUvRG93bmxvYWRzL2Jsb29keS1tYXJ5cy12Mi9ibF90ZXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmMxM2I1YjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmMxM2I1YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmMxM2I1YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzEzYjViMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYzEzYjViMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2ZpbGUtbWFuYWdlci9jb21wb25lbnRzL1VwbG9hZE1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmlybU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250ZXh0TWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVCcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVCcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlTWFuYWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlTWFuYWdlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTaWRlYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTaWRlYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlVG9vbGJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlVG9vbGJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVybWlzc2lvbk1hbmFnZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVybWlzc2lvbk1hbmFnZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlbmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlbmFtZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9VcGxvYWRNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9VcGxvYWRNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZpcm1Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODA0OTBkZmUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRleHRNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTkxY2VhYSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlZTY2NWJmJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2ZlYTM4NWEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVHcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjNmNGY5NiZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZUl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1MGNkZTNhJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzEwMWVlMjQmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVNYW5hZ2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Yzg3YjdlNiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyNmU3MmE4JlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlU2lkZWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjIyYzlmODgmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVUb29sYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmEwMDhkYiZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVybWlzc2lvbk1hbmFnZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ODFkNmRhJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZW5hbWVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWZhNWRlZWEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzEzYjViMCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00LnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25maXJtTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODA0OTBkZmUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlRm9sZGVyTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2VlNjY1YmYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZU1hbmFnZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2M4N2I3ZTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVRvb2xiYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmJhMDA4ZGImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXBsb2FkTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmMxM2I1YjAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiXSwibmFtZXMiOlsiZ2V0RmlsZUljb24iLCJpdGVtIiwidHlwZSIsImV4dGVuc2lvbiIsImlzUGRmIiwiaXNUZXh0IiwiaXNJbWFnZSIsImluY2x1ZGVzIiwiaXNWaWRlbyIsImdldEZpbGVJY29uQ2xhc3MiLCJWdWUiLCJGaWxlTWFuYWdlciIsIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3NyZlRva2VuIiwiRklMRV9NQU5BR0VSX0NTUkZfVE9LRU4iLCJnZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwiZXJyb3IiLCJhcHAiLCJlbCIsImNvbXBvbmVudHMiLCJkYXRhIiwidGVtcGxhdGUiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZGVmYXVsdCIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInN1Yk1lc3NhZ2UiLCJ2YWxpZGF0b3IiLCJ2YWx1ZSIsImNvbmZpcm1UZXh0IiwiY2FuY2VsVGV4dCIsImxvYWRpbmciLCJCb29sZWFuIiwiY29tcHV0ZWQiLCJjb25maXJtQnV0dG9uQ2xhc3MiLCJtZXRob2RzIiwiaGFuZGxlQ29uZmlybSIsIiRlbWl0IiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlS2V5ZG93biIsImV2ZW50Iiwia2V5IiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidmlzaWJsZSIsIk9iamVjdCIsInBvc2l0aW9uIiwieCIsInkiLCJjdXJyZW50VmlldyIsImlzQWRtaW4iLCJtZW51U3R5bGUiLCJsZWZ0IiwidG9wIiwiaGFuZGxlT3BlbiIsImhhbmRsZVJlbmFtZSIsImhhbmRsZURlbGV0ZSIsImhhbmRsZVJlc3RvcmUiLCJoYW5kbGVQZXJtYW5lbnREZWxldGUiLCJoYW5kbGVQZXJtaXNzaW9ucyIsImhhbmRsZUNsaWNrT3V0c2lkZSIsIiRlbCIsImNvbnRhaW5zIiwidGFyZ2V0IiwicGFyZW50Rm9sZGVySWQiLCJOdW1iZXIiLCJmb2xkZXJOYW1lIiwicGVybWlzc2lvbnMiLCJzZWFyY2hUaW1lb3V0IiwiYXZhaWxhYmxlUm9sZXMiLCJhdmFpbGFibGVHcm91cHMiLCJjYW5DcmVhdGUiLCJ0cmltIiwibGVuZ3RoIiwid2F0Y2giLCJoYW5kbGVyIiwibmV3UGVybXMiLCIkbmV4dFRpY2siLCJmb3JFYWNoIiwicGVybSIsImlkeCIsInNlbGVjdGl6ZUluc3RhbmNlIiwiaW5pdFNlbGVjdGl6ZSIsImRlc3Ryb3kiLCJkZWVwIiwic2V0VGltZW91dCIsImxvYWRSb2xlcyIsImNhdGNoIiwibG9hZEdyb3VwcyIsIiRyZWZzIiwibmFtZUlucHV0IiwiZm9jdXMiLCJwZXJtaXNzaW9uIiwiZ2V0Q3NyZkhlYWRlcnMiLCJhZGRDc3JmVG9GZXRjaE9wdGlvbnMiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImpzb24iLCJyb2xlcyIsImxhYmVsIiwiZ3JvdXBzIiwiYWRkUGVybWlzc2lvbiIsImluZGV4IiwicHVzaCIsInVzZXJJZHMiLCJyb2xlIiwiZ3JvdXBJZCIsInJlbW92ZVBlcm1pc3Npb24iLCJzcGxpY2UiLCJzZWxlY3RFbGVtZW50IiwiZm4iLCJzZWxlY3RpemUiLCJ3YXJuIiwicGx1Z2lucyIsInZhbHVlRmllbGQiLCJsYWJlbEZpZWxkIiwic2VhcmNoRmllbGQiLCJjcmVhdGUiLCJtYXhJdGVtcyIsImRyb3Bkb3duUGFyZW50IiwibG9hZCIsInF1ZXJ5IiwiY2FsbGJhY2siLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0aGVuIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJvbkNoYW5nZSIsIkFycmF5IiwiaXNBcnJheSIsInNwbGl0IiwiY3JlYXRlRm9sZGVyIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsImZvbGRlcklkIiwiZm9sZGVyIiwiaXNOYU4iLCJwZXJtaXNzaW9uRXJyb3JzIiwidXNlcklkIiwic2VuZFBlcm1pc3Npb25Ub1NlcnZlciIsInBlcm1pc3Npb25EYXRhIiwiZXJyb3JEYXRhIiwiRXJyb3IiLCJpdGVtcyIsImRyYWdPdmVySXRlbUlkIiwiaGFuZGxlRHJhZ092ZXIiLCJpdGVtSWQiLCJkYXRhVHJhbnNmZXIiLCJ0eXBlcyIsImRyb3BFZmZlY3QiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcm9wIiwiZHJhZ2dlZERhdGEiLCJnZXREYXRhIiwiZHJhZ2dlZCIsInBhcnNlIiwidGFyZ2V0Rm9sZGVyIiwiZSIsIkZpbGVJdGVtIiwiZmlsZXMiLCJmb2xkZXJzIiwic2VsZWN0ZWRJdGVtcyIsImxhc3RDbGlja1RpbWUiLCJsYXN0Q2xpY2tJdGVtIiwiY2xpY2tUaW1lb3V0IiwiZHJhZ092ZXJGb2xkZXJJZCIsImRyYWdnZWRJdGVtIiwiaXNTZWxlY3RlZCIsInNvbWUiLCJpIiwiaGFuZGxlQ2xpY2siLCJjdHJsS2V5IiwibWV0YUtleSIsInN0b3BQcm9wYWdhdGlvbiIsIm5vdyIsIkRhdGUiLCJ0aW1lRGlmZiIsImNsZWFyVGltZW91dCIsImhhbmRsZURibENsaWNrIiwiaGFuZGxlTW9yZSIsImhhbmRsZUNvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTdGFyIiwiaXNTdGFycmVkIiwic3RhcnJlZCIsInNlbGVjdGVkIiwiaXNEcmFnZ2luZyIsImhhbmRsZURyYWdTdGFydCIsImVmZmVjdEFsbG93ZWQiLCJzZXREYXRhIiwic2V0RHJhZ0ltYWdlIiwiaGFuZGxlRHJhZ0VuZCIsImlzRHJhZ2dpbmdGaWxlcyIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJoYW5kbGVGaWxlRHJhZ0VudGVyIiwiaGFuZGxlRmlsZURyYWdPdmVyIiwiaGFuZGxlRmlsZURyYWdMZWF2ZSIsImN1cnJlbnRUYXJnZXQiLCJyZWxhdGVkVGFyZ2V0IiwiaGFuZGxlRmlsZURyb3AiLCJmcm9tIiwiRmlsZVNpZGViYXIiLCJGaWxlVG9vbGJhciIsIkZpbGVCcmVhZGNydW1iIiwiRmlsZUdyaWQiLCJGaWxlTGlzdCIsIlVwbG9hZE1vZGFsIiwiQ3JlYXRlRm9sZGVyTW9kYWwiLCJGaWxlUHJldmlldyIsIlBlcm1pc3Npb25NYW5hZ2VyIiwiUmVuYW1lTW9kYWwiLCJDb250ZXh0TWVudSIsIkNvbmZpcm1Nb2RhbCIsInZpZXdNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRGb2xkZXIiLCJicmVhZGNydW1iIiwic2hvd1VwbG9hZGVyIiwic2hvd0NyZWF0ZUZvbGRlciIsInByZXZpZXdGaWxlIiwicGVybWlzc2lvblJlc291cmNlIiwic2VhcmNoUXVlcnkiLCJkcmFnT3ZlclJvb3QiLCJyZW5hbWVJdGVtIiwiZHJvcHBlZEZpbGVzIiwiY2FuVXBsb2FkRmlsZSIsImNhbkNyZWF0ZUZvbGRlciIsIm1heEZpbGVTaXplIiwiY29udGV4dE1lbnUiLCJjb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJuZXdNb2RlIiwic2V0SXRlbSIsImxvYWRVc2VySW5mbyIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZm9sZGVySWRGcm9tVXJsIiwiZ2V0IiwiaW5pdGlhbEZvbGRlcklkIiwicGFyc2VJbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiaHJlZiIsImxvYWRGb2xkZXIiLCJoYW5kbGVQb3BTdGF0ZSIsImJlZm9yZVVubW91bnQiLCJzaG93Q29uZmlybU1vZGFsIiwiY29uZmlnIiwic2hvd0Vycm9yTW9kYWwiLCJ1cGRhdGVVcmwiLCJwYXJhbXMiLCJ1cGRhdGVVcmxXaXRoRm9sZGVySWQiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJkZWxldGUiLCJwdXNoU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVZpZXciLCJ2aWV3IiwibG9hZFN0YXJyZWQiLCJsb2FkVHJhc2giLCJuYXZpZ2F0ZVRvRm9sZGVyIiwiaGFuZGxlU2VsZWN0IiwiZmluZEluZGV4IiwiaGFuZGxlQ29udGVudENsaWNrIiwiaXNJbnRlcmFjdGl2ZSIsImNsb3Nlc3QiLCJjbGllbnRYIiwicGFnZVgiLCJjbGllbnRZIiwicGFnZVkiLCJoYW5kbGVSZW5hbWVkIiwiaGFuZGxlRGVsZXRlSXRlbSIsImRlbGV0ZUl0ZW0iLCJwZXJmb3JtUGVybWFuZW50RGVsZXRlIiwiaGFuZGxlVXBsb2FkIiwiaGFuZGxlQ3JlYXRlRm9sZGVyIiwiaGFuZGxlRm9sZGVyQ3JlYXRlZCIsImlzVHJhc2giLCJwZXJmb3JtRGVsZXRlIiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVTZWFyY2giLCJwZXJmb3JtU2VhcmNoIiwicSIsImFwcGVuZCIsInRvU3RyaW5nIiwiaGFuZGxlUm9vdERyYWdPdmVyIiwiaGFuZGxlUm9vdERyYWdMZWF2ZSIsImhhbmRsZVJvb3REcm9wIiwibW92ZUl0ZW0iLCJfcmVmIiwidGFyZ2V0Rm9sZGVySWQiLCJoYW5kbGVGaWxlVXBsb2FkZWQiLCJfcmVmMiIsImhhbmRsZUNsb3NlVXBsb2FkZXIiLCJmaWxlIiwidGV4dENvbnRlbnQiLCJpc0Z1bGxzY3JlZW4iLCJzaG93VG9hc3QiLCJ0b2FzdE1lc3NhZ2UiLCJwcmV2aWV3VXJsIiwiZG93bmxvYWRVcmwiLCJsb2FkVGV4dENvbnRlbnQiLCJ0ZXh0IiwicHJpbnRQZGYiLCJwZGZJZnJhbWUiLCJjb250ZW50V2luZG93IiwicHJpbnQiLCJ0b2dnbGVGdWxsc2NyZWVuIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzaGFyZUZpbGUiLCJmaWxlVXJsIiwib3JpZ2luIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY2FuRGVsZXRlU2VsZWN0ZWQiLCJjYW5EZWxldGUiLCJyZXNvdXJjZSIsInVzZXJSZXN1bHRzIiwibmV3UGVybWlzc2lvbiIsImNhbkFkZFBlcm1pc3Npb24iLCJyZXNvdXJjZVR5cGUiLCJyZXNvdXJjZUlkIiwidGVzdCIsImxvYWRQZXJtaXNzaW9ucyIsIm5ld1Blcm1pc3Npb24udHlwZSIsIm5ld1R5cGUiLCJzZWFyY2hVc2VycyIsInNlbGVjdFVzZXIiLCJ1c2VyU2VsZWN0IiwiZXJyb3JzIiwiam9pbiIsInJlc2V0TmV3UGVybWlzc2lvbiIsImRlbGV0ZVBlcm1pc3Npb24iLCJwZXJtaXNzaW9uSWQiLCJjb25maXJtIiwibmV3TmFtZSIsInNlbGVjdCIsImluaXRpYWxGaWxlcyIsInNlbGVjdGVkRmlsZXMiLCJ1cGxvYWRzIiwidXBsb2FkaW5nIiwiYWN0aXZlWGhyUmVxdWVzdHMiLCJhbGxGaWxlcyIsInVwbG9hZCIsImZpbmQiLCJ1Iiwic2l6ZSIsImxhc3RNb2RpZmllZCIsInN0YXR1cyIsInByb2dyZXNzIiwic2VsZWN0ZWRGaWxlc0NvdW50IiwiZmlsdGVyIiwidHJpZ2dlckZpbGVJbnB1dCIsImZpbGVJbnB1dCIsImNsaWNrIiwiaGFuZGxlRmlsZVNlbGVjdCIsImFkZEZpbGVzIiwiaGFuZGxlRHJhZ0VudGVyIiwibWF4U2l6ZU1CIiwiTWF0aCIsInJvdW5kIiwiZmlsZVNpemVNQiIsImYiLCJyZW1vdmVGaWxlSXRlbSIsImZpbGVJdGVtIiwicmVtb3ZlVXBsb2FkIiwiZm9ybWF0RmlsZVNpemUiLCJieXRlcyIsImsiLCJzaXplcyIsImZsb29yIiwibG9nIiwicG93IiwidG9Mb3dlckNhc2UiLCJlbmRzV2l0aCIsIm1hdGNoIiwidXBsb2FkRmlsZXMiLCJmaWxlc1RvVXBsb2FkIiwidG90YWxGaWxlcyIsImNvbXBsZXRlZEZpbGVzIiwidXBsb2FkSWQiLCJyYW5kb20iLCJ1cGxvYWRGaWxlIiwiY2hlY2tBbmRDbG9zZU1vZGFsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJ4aHJSZWYiLCJsZW5ndGhDb21wdXRhYmxlIiwibG9hZGVkIiwidG90YWwiLCJyZW1vdmVYaHJSZXF1ZXN0IiwicmVzcG9uc2VUZXh0IiwiYWRkUGVybWlzc2lvbnNUb0ZpbGUiLCJmaWxlSW5kZXgiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJmaWxlSWQiLCJhZGRQZXJtaXNzaW9uVG9GaWxlIiwiciIsImNhbmNlbEFsbFVwbG9hZHMiLCJyZWYiLCJyZWFkeVN0YXRlIiwiRE9ORSIsImFib3J0IiwiaGFuZGxlQ2xvc2UiLCJoYXNVcGxvYWRzIiwiaGFzU2VsZWN0ZWRGaWxlcyIsImhhc0FsbEZpbGVzIiwicHJldmVudERlZmF1bHRzIiwiZXZlbnROYW1lIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwib24iLCIkZXZlbnQiLCJhcHBseSIsIl92IiwiX3MiLCJfZSIsImNsYXNzIiwiYXR0cnMiLCJkaXNhYmxlZCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJzdHlsZSIsImNhbkVkaXQiLCJfbSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwiZXhwcmVzc2lvbiIsInBsYWNlaG9sZGVyIiwiZG9tUHJvcHMiLCJrZXl1cCIsImluZGV4T2YiLCJfayIsImtleUNvZGUiLCJpbnB1dCIsImNvbXBvc2luZyIsInN0YXRpY1N0eWxlIiwiX2wiLCJjaGFuZ2UiLCIkJHNlbGVjdGVkVmFsIiwicHJvdG90eXBlIiwiY2FsbCIsIm8iLCJ2YWwiLCJfdmFsdWUiLCIkc2V0IiwibXVsdGlwbGUiLCJyZWZJbkZvciIsImdyb3VwIiwiZHJhZ292ZXIiLCJkcmFnbGVhdmUiLCJkcm9wIiwiYWN0aXZlIiwiZGJsY2xpY2siLCJzdGFyIiwibW9yZSIsImNvbnRleHQtbWVudSIsImRyYWdnaW5nIiwiZHJhZ2dhYmxlIiwiZHJhZ3N0YXJ0IiwiZHJhZ2VuZCIsImNvbnRleHRtZW51IiwiY29sb3IiLCJmb3JtYXR0ZWRTaXplIiwiZHJhZ2VudGVyIiwidXBkYXRlZEF0Iiwib3duZXIiLCJ2aWV3LW1vZGUtY2hhbmdlZCIsIm5hdmlnYXRlIiwib3BhY2l0eSIsInVwbG9hZGVkIiwiY2xvc2UiLCJjcmVhdGVkIiwicmVuYW1lZCIsInJlbmFtZSIsInJlc3RvcmUiLCJjYW5jZWwiLCJkb3dubG9hZCIsInNyYyIsImFsdCIsImNvbnRyb2xzIiwibWltZVR5cGUiLCJjcmVhdGVkQXQiLCJncmFudGVkQnkiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ2FwIiwid2lkdGgiLCJmbGV4IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==