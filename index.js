const { app, BrowserWindow, webContents, ipcMain } = require('electron')
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 600,
      height: 600,
      icon: __dirname + '/factory/system/resources/images/logo.ico',
      title: "GlideBrowser",
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
        height: 30,
      },
      webPreferences: {
        webviewTag: true,
        devTools: true,
        preload: path.join(__dirname, '/preload.js')
      }
    })
    win.setBackgroundColor('#000000')
    win.loadFile('index.html')

  }
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })