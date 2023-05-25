const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit()
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  const splash = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    alwaysOnTop: true,
  })

  splash.loadURL(path.resolve(__dirname, './../../src/splash/splash.html'))
  splash.center()

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  mainWindow.center()

  ipcMain.on('switch-window', (event) => {
    splash.destroy()
    mainWindow.show()
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
