import React, { useMemo, useState } from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import EndpointsList from "./EndpointsList";
import Output from "./Output";
import { useApp } from "../AppProvider";
import OutputSelect from "./OutputSelect";

const Container = styled.div`
  margin-top: 50px;
`

const MainWindow = () => {
  const [data, setData] = useState([]);
  const [convertedData, setConvertedData] = useState('');
  const [outputFormat, setOutputFormat] = useState('Rest Client');
  const { convertSelectedEndpoints } = useApp();

 

  const convertOpenApi = async (event) => {
    const fileData = await convertSelectedEndpoints({arrEndpoints: data}, outputFormat);
    setConvertedData(fileData);
  };

  const saveOutput = () => {
      const blob = new Blob([convertedData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "output";
      link.href = url;
      link.click();
  }



    return (
      <Container className="container">
        <div className='row'>
          <div className='col-5'>
            <SourceInputSelection setData={setData}/>
          </div>

          <div className='col-sm-2'/>

          <div className='col-5'>
            <OutputSelect setConvertedData={setConvertedData} setOutputFormat={setOutputFormat}/>
          </div>
          
        <div className="row">
            <div className="col-5">
                <EndpointsList data={data}/>
            </div>

            <div className="col-2">
            <button type="button" onClick={convertOpenApi}>Convert =></button>
            </div>

            <div className="col-5">
                <Output convertedData={convertedData}/>
                <button type="button" onClick={saveOutput}>Save</button>
            </div>
        </div>
        </div>
      </Container>
    );
};

export default MainWindow;