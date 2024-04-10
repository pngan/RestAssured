import React, { useState } from 'react';
import styled from 'styled-components'
import { CheckboxLabel } from './EndpointsList';


const EndpointCheckbox = ({data, selectedEndpoints, setSelectedEndpoints}) => {
  const handleOnChange = (event) => {
    const {value} = event.target;
    const isChecked = event.target.checked
    
    if(isChecked){
      setSelectedEndpoints([value, ...selectedEndpoints])
    } else {
      const filteredEndpoints = selectedEndpoints.filter((endpoint) => endpoint !== value)
      setSelectedEndpoints(filteredEndpoints)
    }
  }
  return (
  <div key={data.id}>
    <input onChange={handleOnChange} id={data.id} type='checkbox' checked={selectedEndpoints.includes(data.id)} value={data.id}/>
    <CheckboxLabel for={data.id}>{`${data.method} ${data.path}`} </CheckboxLabel>
  </div>)
}

export default EndpointCheckbox;
