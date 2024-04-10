import React, { useContext } from "react";

const AppContext = React.createContext({});


const AppProvider = ({children}) => {

  const loadOpenApiContentFromFileOrRequest = async (fileOrUrl) => await window.convert.triggerFileLoad(fileOrUrl);


  return (
    <AppContext.Provider value={{
        loadOpenApiContentFromFileOrRequest
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export {AppProvider as default, useApp};