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
    contextIsolation: false
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
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

let mainWindow;

ipcMain.on('triggerFileLoad', (event, arg) => {
  const { fileName } = arg;
  console.log(fileName);



let strDocPath = '../converter/data/api-docs.yaml';

(async() => {
    let response = await getOpenApiEndpoints.getOpenApiEndpoints(strDocPath);
    
    let converterCollection = new ConverterCollection.ConverterCollection();
    let converter = converterCollection.getSelectedConverter();
    converter.convert(response.data);
  })();
});