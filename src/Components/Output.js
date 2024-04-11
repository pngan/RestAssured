import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top:20px;
  text-align: left;
`;

const Content = styled.section`
  padding: 4em;
  width: 100%;
  height: 350px;
  overflow-y: scroll;
  box-shadow: 0px 0.5px 1px #888888;
  border-radius: 6px;
  margin-top: 10px;
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