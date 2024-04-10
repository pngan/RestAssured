import React, { useMemo, useState } from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import EndpointsList from "./EndpointsList";
import Output from "./Output";
import { useApp } from "../AppProvider";
import { ConverterCollection } from "../converter/converter";

const Container = styled.div`
  margin-top: 50px;
`

const MainWindow = () => {
  const [data, setData] = useState([]);
  const [convertedData, setConvertedData] = useState('');
  const [outputFormat, setOutputFormat] = useState('Rest Client');
  const { convertSelectedEndpoints } = useApp();

  const handleOutputFormat = (event) => {
    setConvertedData('');
    setOutputFormat(event.target.value);
  };

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

  const { converters } = new ConverterCollection();

  const converterList = useMemo(() => {
    if(converters){
      return converters.map((converter) => {
        return (<option key={converter.name} value={converter.name}>{converter.name}</option>);
      })
    } else {
      return (<option>None available</option>);
    }
  },[converters]);

    return (
      <Container className="container">
        <div className='row'>
          <div className='col-5'>
            <SourceInputSelection setData={setData}/>
          </div>

          <div className='col-2'/>

          <div className='col-5'>
            <label>
              Output Format:
              <select onChange={handleOutputFormat}>
                {converterList}
              </select>
            </label>
          </div>
          
        <div className="row">
            <div className="col-5">
                <EndpointsList data={data}/>
            </div>

            <div className="col-2">
            <button type="button" onClick={convertOpenApi}>Convert</button>
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