<template>
    <div class="modal fade" id="revisionsModal" tabindex="-1" role="dialog" aria-hidden="true" ref="modal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><i class="fa fa-history me-2"></i> Historique des révisions</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <div v-if="loading" class="text-center py-5">
                        <i class="fa fa-spinner fa-spin fa-3x text-muted"></i>
                        <p class="mt-2 text-muted">Chargement de l'historique...</p>
                    </div>

                    <div v-else-if="error" class="alert alert-danger">
                        {{ error }}
                    </div>

                    <div v-else-if="revisions.length === 0" class="text-center py-5 text-muted">
                        <i class="fa fa-file-alt fa-3x mb-3"></i>
                        <p>Aucune révision trouvée pour ce contenu.</p>
                    </div>

                    <div v-else class="list-group">
                        <div v-for="revision in revisions" :key="revision.id" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="mb-1"><i class="fa fa-calendar-alt text-muted me-2"></i> {{ formatDate(revision.createdAt) }}</h6>
                                <small class="text-muted"><i class="fa fa-user me-1"></i> {{ revision.author }}</small>
                            </div>
                            <div class="d-flex gap-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary" @click.prevent="previewRevision(revision)">
                                    <i class="fa fa-eye me-1"></i> Prévisualiser
                                </button>
                                <button type="button" class="btn btn-sm btn-outline-primary" @click.prevent="restoreRevision(revision)">
                                    <i class="fa fa-undo me-1"></i> Restaurer
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        }
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
                 if(window.jQuery) {
                    window.jQuery(this.$refs.modal).modal('show');
                    this.fetchRevisions();
                 }
            }
        },
        hide() {
            if (this.modalInstance) {
                this.modalInstance.hide();
            } else if (window.jQuery) {
                window.jQuery(this.$refs.modal).modal('hide');
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
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors du chargement des révisions');
                    }
                    return response.json();
                })
                .then(data => {
                    this.revisions = data;
                })
                .catch(error => {
                    this.error = error.message;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('fr-FR', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
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
}
</script>

<style scoped>
.list-group-item {
    transition: background-color 0.15s ease;
}
.list-group-item:hover {
    background-color: #f8f9fa;
}
</style>
