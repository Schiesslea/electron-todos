// Ce script sera exécuté avant le chargement de la page
// Accès aux API Node et Electron

const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('versions', {
    // Fonction qui récupère les versions via IPC
    getVersions: () => ipcRenderer.invoke('get-versions')
})

console.log("Preload script loaded !")