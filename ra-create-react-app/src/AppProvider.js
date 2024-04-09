import React, { useContext } from "react";

const AppContext = React.createContext({});


const AppProvider = ({children}) => {

  const getFileOrURLData = async (fileOrUrl) => {
    // ipcRenderer.send('triggerFileLoad', {fileName: fileOrUrl});
    const response = await window.convert.triggerFileLoad(fileOrUrl);

    window.convert.fileLoadData((value) => {
      console.log('here');
      console.debug(value);
    });
  };


  return (
    <AppContext.Provider value={{
        getFileOrURLData
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export {AppProvider as default, useApp};