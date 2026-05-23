import Vue from 'vue';
import FileManager from './components/FileManager.vue';
import './file-manager.scss';

// Import jQuery explicitly to ensure it's available globally
import $ from 'jquery';
window.$ = window.jQuery = $;

// Import SelectizeJS CSS
import 'selectize/dist/css/selectize.bootstrap3.css';

// Import SelectizeJS standalone version (includes jQuery dependency handling)
require('selectize/dist/js/standalone/selectize.min.js');

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('file-manager-app');
    
    // Get CSRF token from window or data attribute
    const csrfToken = window.FILE_MANAGER_CSRF_TOKEN || 
                      appElement?.getAttribute('data-csrf-token') || 
                      '';

    if (!csrfToken) {
        console.error('CSRF token not found! API requests will fail.');
    }

    const app = new Vue({
        el: '#file-manager-app',
        components: {
            FileManager
        },
        data() {
            return {
                csrfToken: csrfToken
            };
        },
        template: '<FileManager :csrf-token="csrfToken" />'
    });
});

