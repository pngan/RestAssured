import React, {useContext, useState} from "react";
import { useApp } from "../AppProvider";

const SourceInputSelection = () => {
  const [fileOrUrl, setFileOrUrl] = useState('');
  const { loadOpenApiContentFromFileOrRequest } = useApp();
  const handleFilePicker = (event) => { 
    setFileOrUrl(event.target?.value);
  }
  
  const updateSourceValue = (event) => {
    // add debounce
    setFileOrUrl(event.target.value)
  }

  const loadOpenApiContent = async (event) => {
    const data = await loadOpenApiContentFromFileOrRequest(fileOrUrl);
    console.debug(data);  
  };

  return (
    <label>
      URL or File:
      <input type='text' onChange={updateSourceValue} value={fileOrUrl} />
      {/* <input id="selectedFile" onChange={handleFilePicker} type='file' /> */}
      <button type="button" onClick={loadOpenApiContent}>Load</button>
    </label>
  );
};
export default SourceInputSelection;
