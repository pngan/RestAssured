import React, { useMemo } from 'react';
import { ConverterCollection } from "../converter/converter";
import { InputWrapper, Label } from '../styles/sharedStyles'
import styled from 'styled-components';

const Select = styled.select`
  height: 30px;
  width: 100%
`;

const OutputSelect = ({setConvertedData, setOutputFormat}) => {
  const { converters } = new ConverterCollection();
  
  const handleOutputFormat = (event) => {
     setOutputFormat(event.target.value);
   };

  const converterList = useMemo(() => {
    if(converters){
      return converters.map((converter) => {
        return (<option key={converter.name} value={converter.name}>{converter.name}</option>);
      })
    } else {
      return (<option>None available</option>);
    }
  },[converters]);

  return (
    <InputWrapper>
      <Label>Output Format:</Label>
      <Select className='form-select form-select-sm mb-3' onChange={handleOutputFormat}>
        {converterList}
      </Select>
    </InputWrapper>
  )
}

export default OutputSelect;
