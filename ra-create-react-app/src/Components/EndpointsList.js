import React, { useState } from "react";
import styled from "styled-components";
import EndpointCheckbox from "./EndpointCheckbox";

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

const LeftPanel = ({data}) => {
  const [selectedEndpoints, setSelectedEndpoints] = useState([])

  console.log('data', data)

  return (
        <Wrapper>
            <Title>Endpoints to Convert</Title>
            <Content>
                {data.map((endpoint) => <EndpointCheckbox selectedEndpoints={selectedEndpoints} setSelectedEndpoints={setSelectedEndpoints} data={endpoint}/>)}
            </Content>
        </Wrapper>
    )
};
export default LeftPanel;