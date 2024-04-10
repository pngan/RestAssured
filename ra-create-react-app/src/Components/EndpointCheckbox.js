import React, { useState } from 'react';
import styled from 'styled-components'

const CheckboxLabel = styled.label `
  margin-left: 10px
`;

const EndpointCheckbox = ({data, selectedEndpoints, setSelectedEndpoints}) => {
  const [checked, setChecked] = useState(false)
  const handleOnChange = (event) => {
    const {value} = event.target;
    const isChecked = event.target.checked
    
    if(isChecked){
      setSelectedEndpoints([value, ...selectedEndpoints])
    } else {
      const filteredEndpoints = selectedEndpoints.filter((endpoint) => endpoint !== value)
      setSelectedEndpoints(filteredEndpoints)
    }
    setChecked(isChecked)
  }
  const test = `${data.method}-${data.path}`
  return (
  <div key={test}>
    <input onChange={handleOnChange} id={test} type='checkbox' checked={checked} value={data.operationId}/>
    <CheckboxLabel for={test}>{`${data.method} ${data.path}`} </CheckboxLabel>
  </div>)
}

export default EndpointCheckbox;
