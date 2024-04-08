import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top:20px;
`;

const Content = styled.section`
  padding: 4em;
  box-shadow: 0px 0.5px 1px #888888;
  margin: 0 20px;
  border-radius: 6px;
`;

const Title = styled.span`

`;

const LeftPanel = () => {
    return (
        <Wrapper>
            <Title>Endpoints to Convert</Title>
            <Content>
                Left Panel here
            </Content>
        </Wrapper>
    )
};
export default LeftPanel;