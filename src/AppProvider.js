import React, { useContext } from "react";

const AppContext = React.createContext({});


const AppProvider = ({children}) => {

  const loadOpenApiContentFromFileOrRequest = async (fileOrUrl) => await window.convert.triggerFileLoad(fileOrUrl);
  
  const convertSelectedEndpoints = async (endpointData, outputFormat) => await window.convert.convertSelectedEndpoints(endpointData, outputFormat);

  return (
    <AppContext.Provider value={{
        loadOpenApiContentFromFileOrRequest,
        convertSelectedEndpoints
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export {AppProvider as default, useApp};