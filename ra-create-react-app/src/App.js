import React, { useContext, useState } from 'react';
import logo from './logo.svg';
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
