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

  return (
    <label>
      URL or File:
      <input type='text' onChange={updateSourceValue} value={fileOrUrl} />
      <input id="selectedFile" onChange={handleFilePicker} type='file' />
    </label>
  );
};
export default SourceInputSelection;
