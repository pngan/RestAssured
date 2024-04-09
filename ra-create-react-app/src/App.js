import React, { useContext } from 'react';
import './App.css';
import MainWindow from './Components/MainWindow';


const AppContext = React.createContext({});

const AppProvider = ({children}) => {
    return (<AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
    );
};

const useApp = () => useContext(AppContext);
function App() {
  return (
    <div className="App">
      <AppProvider>
        <MainWindow />
      </AppProvider>
    </div>
  );
}

export default App;
