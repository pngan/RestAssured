import React, { useState } from "react";
import styled from "styled-components";
import EndpointCheckbox from "./EndpointCheckbox";
import SelectAllCheckbox from "./SelectAllCheckbox";
import { DataWindow } from "../styles/sharedStyles";

const Wrapper = styled.section`
  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled(DataWindow)`
  padding: 1em;
  width: 100%;
  box-shadow: 0px 0.5px 1px #888888;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  overflow: scroll;
`;

const Title = styled.span`
  margin-bottom: 10px ;
`;

export const CheckboxLabel = styled.label `
  margin-left: 10px
`;

const EndpointsList = ({data, selectedEndpoints, setSelectedEndpoints}) => (
    <Wrapper>
        <Title>Endpoints to Convert</Title>
        <Content>
            {
              data.length > 0 && 
              <SelectAllCheckbox 
                data={data}
                setSelectedEndpoints={setSelectedEndpoints}/>
            }
            {
              data.map((endpoint) => 
                <React.Fragment key={endpoint.id}>
                  <EndpointCheckbox
                    selectedEndpoints={selectedEndpoints}
                    setSelectedEndpoints={setSelectedEndpoints}
                    data={endpoint}/>
                </React.Fragment>)
            }
        </Content>
    </Wrapper>
  );

export default EndpointsList;
