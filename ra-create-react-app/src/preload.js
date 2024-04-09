const { contextBridge, ipcRenderer, ipcMain } = require("electron"); 

process.once("loaded", () => {
    window.ipcRenderer = ipcRenderer; 
    }
);

contextBridge.exposeInMainWorld('convert', {
    triggerFileLoad: (args) => {
        ipcRenderer.invoke('triggerFileLoad', args);
    },
    fileLoadData: (callback) => {
        ipcRenderer.on('file-data-loaded', (_event, value) => {
            callback(value)
        })
    },


});