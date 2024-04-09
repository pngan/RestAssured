import React, {useContext, useState} from "react";
import { useApp } from "../AppProvider";

const SourceInputSelection = () => {
  const [fileOrUrl, setFileOrUrl] = useState('');
  const { getFileOrURLData } = useApp();
  const handleFilePicker = (event) => { 
    setFileOrUrl(event.target?.value);
  }
  
  const updateSourceValue = (event) => {
    // add debounce
    setFileOrUrl(event.target.value)
  }

  const triggerConvert = async(event) => {
    const data = getFileOrURLData(fileOrUrl).then((data) => {
    console.debug(data);  
    });
    
  };

  return (
    <label>
      URL or File:
      <input type='text' onChange={updateSourceValue} value={fileOrUrl} />
      {/* <input id="selectedFile" onChange={handleFilePicker} type='file' /> */}
      <button type="button" onClick={triggerConvert}>Load</button>
    </label>
  );
};
export default SourceInputSelection;
