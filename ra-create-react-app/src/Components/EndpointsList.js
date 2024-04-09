import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.section`
  padding: 1em;
  box-shadow: 0px 0.5px 1px #888888;
  margin: 0 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  overflow-y: scroll;
`;

const Title = styled.span`
  margin: 0 0 10px 20px;
`;

const testData = [
  {
    summary: 'List all pets',
    operationId: 'listPets',
    tags: [ 'pets' ],
    parameters: [ [Object] ],
    responses: { '200': [Object], default: [Object] },
    method: 'GET',
    path: '/pets',
    is_selected: true
  },
  {
    summary: 'Create a pet',
    operationId: 'createPets',
    tags: [ 'pets' ],
    requestBody: { content: [Object], required: true },
    responses: { '201': [Object], default: [Object] },
    method: 'POST',
    path: '/pets',
    is_selected: true
  },
  {
    summary: 'Info for a specific pet',
    operationId: 'showPetById',
    tags: [ 'pets' ],
    parameters: [ [Object] ],
    responses: { '200': [Object], default: [Object] },
    method: 'GET',
    path: '/pets/{petId}',
    is_selected: true
  }
]



const LeftPanel = () => {
  const [selectedEndpoints, setSelectedEndpoints] = useState([])

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

  console.log('selectedEndpoints', selectedEndpoints)

  const Endpoint = ({data}) => {
    const test = `${data.method}-${data.path}`
    return (
    <div key={test}>
      <input onChange={handleOnChange} id={test} type='checkbox' value={data.operationId}/>
      <label for={test}>{`${data.method} ${data.path}`} </label>
    </div>)
  }

  return (
        <Wrapper>
            <Title>Endpoints to Convert</Title>
            <Content>
                {testData.map((endpoint) => <Endpoint data={endpoint}/>)}
            </Content>
        </Wrapper>
    )
};
export default LeftPanel;