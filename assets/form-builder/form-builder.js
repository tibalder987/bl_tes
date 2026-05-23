import Vue from 'vue';
import App from './App.vue';

// Mount the Vue app on a dedicated div
document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('form-builder-app');
    if (el) {
        // We can pass data initialized from the backend (like existing schema or configuration)
        const initialSchema = el.dataset.schema ? JSON.parse(el.dataset.schema) : null;
        const initialConfig = el.dataset.config ? JSON.parse(el.dataset.config) : null;

        new Vue({
            render: h => h(App, {
                props: {
                    initialSchema,
                    initialConfig
                }
            })
        }).$mount('#form-builder-app');
    }
});
