// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    //Basic config
    width: 720,
    height: 480,
    center:true,
    //Hide the menu bar, just cuz it's prettier
    autoHideMenuBar: true,

    webPreferences: {
      //Allow node in front
      nodeIntegration: true,
      //See: https://github.com/electron/electron/issues/28511
      nativeWindowOpen: true
    }
  });

  //Dev mode check
  var isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;
  console.log("\nAPP_DEV = " + isDev);

  if (isDev) {
    //Is running in dev mode
    console.log("App starting in dev mode");
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

  } else {
    //Is running in production mode (probably)
    console.log("App starting in prod mode");

  }

  //Load the index.html of the app.
  mainWindow.loadFile('./compiled/index.html')

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
