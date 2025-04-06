const { app, BrowserWindow, ipcMain } = require('electron/main');  
const path = require('path');
const { minecraftLauncher } = require("./src/module/minecraftLauncher");
const { createPLayer } = require("./src/module/createUser");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'src/module/preloader.js') 
    }
  });

  win.loadFile(path.join(__dirname, 'src/render/index.html'));
}

app.whenReady().then(createWindow);

ipcMain.on('LaunchMinecraft', (event, username, version) => {
    minecraftLauncher(username, version);
});



ipcMain.on("config", (event, username) => {
  createPLayer(username);
});