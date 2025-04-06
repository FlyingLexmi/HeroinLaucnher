const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    startMinecraft: (username, version) => ipcRenderer.send('LaunchMinecraft', username, version),
    config: (nickname) => ipcRenderer.send("config", nickname)

});
