import React from 'react';
import './App.css';
import MainWindow from './Components/MainWindow';
import AppProvider from './AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <MainWindow />
      </AppProvider>
    </div>
  );
}

export { App as default };
