const isDev = import('electron-is-dev');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const getOpenApiEndpoints = require('../../converter/getOpenApiEndpoints.js');
const ConverterCollection = require('../../converter/converter.js');

function createWindow() {
  const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, '../src/preload.js'),
    nodeIntegration: true,
  },
 });
mainWindow.loadURL(
  isDev
  ? "http://localhost:3000"
  : `file://${join(__dirname, "../build/index.html")}`
 );
if (isDev) {
  mainWindow.webContents.openDevTools();
 }
 return mainWindow;
}

app.whenReady().then(() => {
  const win = createWindow();
  app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  ipcMain.handle('triggerFileLoad', async (_event, data) => {
    // console.log(data);
    let strDocPath = '../converter/data/api-docs.yaml';
    let response = await getOpenApiEndpoints.getOpenApiEndpoints(strDocPath);
    win.webContents.send('file-data-loaded', response.data);
  });
  // ipcMain.on('file-data-loaded', (_event, value) => {
  //   console.log(value) // will print value to Node console
  // })
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

let mainWindow;