const { app, BrowserWindow, webFrame } = require('electron')

function createWindow () {
   // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 785,
    height: 600,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      nodeIntegration: true,
      contextIsolation:true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

