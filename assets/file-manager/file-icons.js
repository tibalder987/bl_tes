/**
 * Utilitaires pour la gestion des icônes de fichiers
 */

/**
 * Retourne la classe d'icône Font Awesome pour un fichier ou dossier
 * @param {Object} item - Fichier ou dossier
 * @returns {string} - Classe Font Awesome
 */
export function getFileIcon(item) {
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
export function getFileIconClass(item) {
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

