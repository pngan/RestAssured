import React, { useState } from "react";
import styled from "styled-components";
import EndpointCheckbox from "./EndpointCheckbox";
import SelectAllCheckbox from "./SelectAllCheckbox";

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

export const CheckboxLabel = styled.label `
  margin-left: 10px
`;

const EndpointsList = ({data}) => {
  const [selectedEndpoints, setSelectedEndpoints] = useState([])
  

  return (
        <Wrapper>
            <Title>Endpoints to Convert</Title>
            <Content>
                {data.length > 0 && <SelectAllCheckbox data={data} setSelectedEndpoints={setSelectedEndpoints}/>}
                {data.map((endpoint) => 
                <React.Fragment key={endpoint.id}>
                  <EndpointCheckbox selectedEndpoints={selectedEndpoints} setSelectedEndpoints={setSelectedEndpoints} data={endpoint}/>
                </React.Fragment>)}
            </Content>
        </Wrapper>
    )
};
export default EndpointsList;
