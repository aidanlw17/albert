const { app, BrowserWindow } = require("electron")

let win

function createWindow () {
    // Create browser window
    win  = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // Load index.html of the app
    win.loadFile('index.html')

    // Open the DevTools
    win.webContents.openDevTools()

    // Emitted when the window is closed
    win.on('closed', () => {
        // Dereference the window object
        win = null
    })
}

// Called when initialization finishes and electron is ready
// to create browser windows
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // For macOS when apps remain open until user uses cmd+Q
    // to explicitly quit
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS, common to recreate a window in the app when the dock
    // icon is clicked and there are no other windows open
    if (win === null) {
        createWindow()
    }
})

// Include rest of app's main process code, or put them in specific files
// and require them here