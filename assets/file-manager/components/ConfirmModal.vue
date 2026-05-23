<template>
    <div class="file-modal__overlay" @click.self="handleCancel">
        <div class="file-modal__content file-modal__content--confirm">
            <div class="file-modal__header">
                <h3>{{ title }}</h3>
                <button class="btn btn-sm" @click="handleCancel">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            
            <div class="file-modal__body">
                <div class="confirm-modal__icon" v-if="type === 'danger'">
                    <i class="fa fa-exclamation-triangle"></i>
                </div>
                <div class="confirm-modal__icon" v-else-if="type === 'error'">
                    <i class="fa fa-times-circle"></i>
                </div>
                <div class="confirm-modal__icon" v-else-if="type === 'warning'">
                    <i class="fa fa-exclamation-circle"></i>
                </div>
                <p class="confirm-modal__message">{{ message }}</p>
                <p v-if="subMessage" class="confirm-modal__sub-message">{{ subMessage }}</p>
            </div>
            
            <div class="file-modal__footer">
                <button 
                    v-if="cancelText" 
                    class="btn" 
                    @click="handleCancel">
                    {{ cancelText }}
                </button>
                <button 
                    class="btn" 
                    :class="confirmButtonClass"
                    @click="handleConfirm"
                    :disabled="loading">
                    <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                    <span v-else>{{ confirmText }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Confirmation',
        },
        message: {
            type: String,
            required: true,
        },
        subMessage: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'confirm', // 'confirm', 'danger', 'warning', 'error'
            validator: (value) => ['confirm', 'danger', 'warning', 'error'].includes(value),
        },
        confirmText: {
            type: String,
            default: 'Confirmer',
        },
        cancelText: {
            type: String,
            default: 'Annuler',
        },
        loading: {
            type: Boolean,
            default: false,
        },
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
        },
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
        },
    },
    mounted() {
        // Close on Escape key
        document.addEventListener('keydown', this.handleKeydown);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
};
</script>

<style>
.confirm-modal__icon {
    text-align: center;
    margin-bottom: 1rem;
    
    i {
        font-size: 3rem;
        color: #dc3545;
        
        &.fa-exclamation-triangle {
            color: #ffc107;
        }
        
        &.fa-times-circle {
            color: #dc3545;
        }
        
        &.fa-exclamation-circle {
            color: #ffc107;
        }
    }
}

.confirm-modal__message {
    font-size: 1rem;
    color: #202124;
    margin: 0;
    text-align: center;
    line-height: 1.5;
}

.confirm-modal__sub-message {
    font-size: 0.875rem;
    color: #5f6368;
    margin: 0.75rem 0 0 0;
    text-align: center;
    line-height: 1.5;
}

.file-modal__footer {
    .btn-danger {
        background: #dc3545;
        color: white;
        
        &:hover:not(:disabled) {
            background: #c82333;
            /* Removed transform and box-shadow to prevent size changes */
        }
    }
    
    .btn-warning {
        background: #ffc107;
        color: #212529;
        
        &:hover:not(:disabled) {
            background: #e0a800;
            /* Removed transform and box-shadow to prevent size changes */
        }
    }
}
</style>

