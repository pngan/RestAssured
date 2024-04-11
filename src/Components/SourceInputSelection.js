import React, {useState} from "react";
import { useApp } from "../AppProvider";
import styled from 'styled-components';
import { InputWrapper, Label } from '../styles/sharedStyles'

const LoadButton = styled.button`
  margin-left: 10px;
  flex-grow: 1;
`

const SourceInput = styled.input`
  flex-grow:10;
`

const InputButtonWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
`

const SourceInputSelection = (props) => {
  const [fileOrUrl, setFileOrUrl] = useState('https://petstore3.swagger.io/api/v3/openapi.json');
  const { loadOpenApiContentFromFileOrRequest } = useApp();
  
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

  return (
    <InputWrapper>
      <Label>URL or File:</Label>
      <InputButtonWrapper>
        <SourceInput type='text' onChange={updateSourceValue} value={fileOrUrl} />
        <LoadButton type="button" onClick={loadOpenApiContent}>Load</LoadButton>
      </InputButtonWrapper>
    </InputWrapper>
  );
};
export default SourceInputSelection;
