import React from "react";
import styled from "styled-components";
import { DataWindow } from "../styles/sharedStyles";

const Wrapper = styled.section`
  margin-top:20px;
  text-align: left;
`;

const Content = styled(DataWindow)`
  padding: 4em;
  width: 100%;
  height: 350px;
  box-shadow: 0px 0.5px 1px #888888;
  border-radius: 6px;
  margin-top: 10px;
  overflow: scroll;
`;

const Title = styled.span`
`;

const Output = ({convertedData}) => {
    return (
        <Wrapper>
            <Title>Output</Title>
            <Content>
                {convertedData}
            </Content>
        </Wrapper>
    )
};
export default Output;