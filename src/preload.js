const { contextBridge, ipcRenderer, ipcMain } = require("electron"); 

process.once("loaded", () => {
    window.ipcRenderer = ipcRenderer; 
    }
);

contextBridge.exposeInMainWorld('convert', {
    triggerFileLoad: async (args) => {
        return await ipcRenderer.invoke('trigger-file-load', args);
    },
});