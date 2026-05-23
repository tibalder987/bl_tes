import Vue from 'vue';
import FileSelector from './FileSelector.vue';
import './file-selector.scss';

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('file-selector-app');
    
    if (!appElement) return;
    
    // Get CSRF token
    const csrfToken = window.FILE_SELECTOR_CSRF_TOKEN || 
                      appElement?.getAttribute('data-csrf-token') || 
                      '';

    if (!csrfToken) {
        console.error('CSRF token not found for file selector!');
    }

    const app = new Vue({
        el: '#file-selector-app',
        components: {
            FileSelector
        },
        data() {
            return {
                csrfToken: csrfToken
            };
        },
        template: '<FileSelector :csrf-token="csrfToken" />'
    });
});

