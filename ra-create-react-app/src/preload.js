const { contextBridge, ipcRenderer } = require("electron"); 
process.once("loaded", () => {
    window.ipcRenderer = ipcRenderer; 
    }
);