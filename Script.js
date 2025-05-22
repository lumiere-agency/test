// Sélection des éléments
const fileInput = document.getElementById('fileInput');
const convertBtn = document.getElementById('convertBtn');
const fileInfo = document.getElementById('fileInfo');
const uploadBox = document.querySelector('.upload-box');

// Gestion du drag and drop
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = '#4361ee';
    uploadBox.style.backgroundColor = '#f0f4ff';
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.borderColor = '#ddd';
    uploadBox.style.backgroundColor = 'white';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.borderColor = '#ddd';
    uploadBox.style.backgroundColor = 'white';
    
    if(e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        updateFileInfo();
    }
});

// Gestion de la sélection de fichiers
fileInput.addEventListener('change', updateFileInfo);

function updateFileInfo() {
    if(fileInput.files.length > 0) {
        let totalSize = 0;
        for(let file of fileInput.files) {
            totalSize += file.size;
        }
        
        fileInfo.textContent = `${fileInput.files.length} fichier(s) sélectionné(s) - ${formatFileSize(totalSize)}`;
        convertBtn.disabled = false;
    } else {
        fileInfo.textContent = 'Aucun fichier sélectionné';
        convertBtn.disabled = true;
    }
}

function formatFileSize(bytes) {
    // Fonction de formatage...
}

// Simulation de conversion
convertBtn.addEventListener('click', () => {
    // Ici vous ajouterez la vraie logique de conversion
    alert('Fonctionnalité de conversion à implémenter');
});