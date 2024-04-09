import React, {useState} from "react";
const { ipcRenderer } = window.require('electron');

const SourceInputSelection = () => {
      const [fileOrUrl, setFileOrUrl] = useState('');
  
  const handleFilePicker = (event) => { 
    setFileOrUrl(event.target?.value);
  }
  
  const updateSourceValue = (event) => {
    // add debounce
    setFileOrUrl(event.target.value)
  }

  const triggerConvert = (event) => {
    // TODO: add call to convertra-create-react-app/src/converter/data/api-docs.yaml
    // window.console.debug(mainProcess);
    ipcRenderer.send('triggerFileLoad', {fileName: fileOrUrl});
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
