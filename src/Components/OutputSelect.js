import React, { useMemo } from 'react';
import { ConverterCollection } from "../converter/converter";
import { InputWrapper, Label } from '../styles/sharedStyles'

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
      <select onChange={handleOutputFormat}>
        {converterList}
      </select>
    </InputWrapper>
  )
}

export default OutputSelect;
