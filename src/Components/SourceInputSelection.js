import React, {useRef, useState} from "react";
import { useApp } from "../AppProvider";
import styled from 'styled-components';
import { InputWrapper, Label } from '../styles/sharedStyles'

const LoadButton = styled.button`
  border-radius: 0 2px 2px 0 ;
`
const BrowseButton = styled.button`
  border-radius: 0;
`
const FileInput = styled.input`
  display: none;
`
const SourceInput = styled.input`
  flex-basis: 50px;
`

const InputButtonWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
`

const SourceInputSelection = (props) => {
  const [fileOrUrl, setFileOrUrl] = useState('https://petstore3.swagger.io/api/v3/openapi.json');
  const { loadOpenApiContentFromFileOrRequest } = useApp();
  const inputElement = useRef();
  const updateSourceValue = (event) => {
    // add debounce
    setFileOrUrl(event.target.value)
  }

  const loadOpenApiContent = async (event) => {
    const data = await loadOpenApiContentFromFileOrRequest(fileOrUrl);

    if(data === undefined) {
      props.setData([]);
    } else {
      props.setData(data);
    } 
  };

  const fileUploadSelect = () => {
    inputElement.current.click();
  };

  const fileInputSelection = () => {
    setFileOrUrl(inputElement.current?.files[0]?.path);
  }

  return (
    <InputWrapper>
      <Label>URL or File:</Label>
      <InputButtonWrapper>
        <SourceInput className='form-form-control-sm' type='text' onChange={updateSourceValue} value={fileOrUrl} />
        <FileInput onChange={fileInputSelection} type={'file'} ref={inputElement} />
        <BrowseButton className="input-group-text btn-outline-secondary btn-sm" onClick={fileUploadSelect}>Browse</BrowseButton>
        <LoadButton className="input-group-text btn-outline-secondary btn-sm" type="button" onClick={loadOpenApiContent}>Load</LoadButton>
      </InputButtonWrapper>
    </InputWrapper>
  );
};
export default SourceInputSelection;
