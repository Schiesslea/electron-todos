// Processus principal

const {app, BrowserWindow} = require("electron")
const path = require('path')

// Créer la fenêtre principale
function createWindow () {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Accès aux API Node depuis le processus de rendu
            contextIsolation: true,
            preload: path.join(__dirname, 'src/js/preload.js'),
        }
    })

    window.loadFile('src/pages/index.html')
}

// Attendre l'initialisation de l'application
app.whenReady().then( () => {
    console.log('Application iniatialisée !')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// Darwin = MacOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})