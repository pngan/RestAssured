import React, { useState } from 'react';
import { CheckboxLabel } from './EndpointsList';


const SelectAllCheckbox = ({ data, setSelectedEndpoints }) => {
    const [selectAll, setSelectAll] = useState(false)
    const handleSelectAll = (event) => {
      const isChecked = event.target.checked;
      setSelectAll(!selectAll)
      if(isChecked){
        const endpointsIdArr = data.map(({id}) => id)
        setSelectedEndpoints(endpointsIdArr)
      } else {
        setSelectedEndpoints([])
      }
    }

    return(
      <div>
        <input onChange={handleSelectAll} id="select_all_checkbox" type='checkbox' checked={selectAll}/>
        <CheckboxLabel htmlFor="select_all_checkbox">Select all</CheckboxLabel>
      </div>
    )
  }

  export default SelectAllCheckbox;
