import React, {useState} from "react";

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
    let strDocPath = 'petstore.yaml';
  
      (async() => {
        // TODO: add call
      })();
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
