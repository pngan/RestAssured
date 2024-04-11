import React, { useState } from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import EndpointsList from "./EndpointsList";
import Output from "./Output";
import { useApp } from "../AppProvider";
import OutputSelect from "./OutputSelect";
import SaveButton from "./SaveButton";
import { CenterCol, LeftCol, RightCol } from "../styles/sharedStyles";
import ConvertButton from "./ConvertButton";

const Container = styled.div`
  margin-top: 20px;
`
const ButtonColWrapper = styled(CenterCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SaveWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const Wrapper = styled.div`
  display: flex;
`;

const MainWindow = () => {
  const [data, setData] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const [outputFormat, setOutputFormat] = useState('Rest Client');
  const { convertSelectedEndpoints } = useApp();
  const [selectedEndpoints, setSelectedEndpoints] = useState([])

  return (
    <Container className="container">
      <div className='row'>
        <LeftCol>
          <SourceInputSelection setData={setData}/>
        </LeftCol>

        <CenterCol/>

        <RightCol>
          <OutputSelect
            setConvertedData={setConvertedData}
            setOutputFormat={setOutputFormat}/>
        </RightCol>
        
      <Wrapper>
          <LeftCol>
              <EndpointsList
                setSelectedEndpoints={setSelectedEndpoints}
                selectedEndpoints={selectedEndpoints}
                data={data}/>
          </LeftCol>

          <ButtonColWrapper>
            <ConvertButton 
              data={data}
              outputFormat={outputFormat}
              convertSelectedEndpoints={convertSelectedEndpoints}
              selectedEndpoints={selectedEndpoints}
              setConvertedData={setConvertedData}/>
          </ButtonColWrapper>

          <RightCol>
              <Output convertedData={convertedData[0]}/>
              <SaveWrapper>
                <SaveButton convertedData={convertedData}/>
              </SaveWrapper>
          </RightCol>
      </Wrapper>
      </div>
    </Container>
  );
};

export default MainWindow;