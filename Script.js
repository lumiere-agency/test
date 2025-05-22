document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const convertBtn = document.getElementById('convertBtn');
    const fileInfo = document.getElementById('fileInfo');
    const uploadBox = document.querySelector('.upload-box');

    // Gestion du drag and drop
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.border = "2px dashed #4361ee";
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        fileInput.files = e.dataTransfer.files;
        updateFileInfo();
    });

    // Gestion de la sélection de fichiers
    fileInput.addEventListener('change', updateFileInfo);

    function updateFileInfo() {
        if(fileInput.files.length > 0) {
            const totalSize = Array.from(fileInput.files).reduce((sum, file) => sum + file.size, 0);
            fileInfo.textContent = `${fileInput.files.length} fichier(s) - ${formatSize(totalSize)}`;
            convertBtn.disabled = false;
        }
    }

    function formatSize(bytes) {
        const sizes = ['o', 'Ko', 'Mo'];
        if (bytes === 0) return '0 o';
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    }
});
