import React, {useState} from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import EndpointsList from "./EndpointsList";
import RightPanel from "./RightPanel";
import { useApp } from "../AppProvider";

const Container = styled.div`
  margin-top: 50px;
`

const MainWindow = () => {
  const [data, setData] = useState([]);
  const [convertedData, setConvertedData] = useState('');
  const { convertSelectedEndpoints } = useApp();


  const convertOpenApi = async (event) => {
    // TODO: get selected endpoints and output format
    const fileData = await convertSelectedEndpoints({arrEndpoints: data}, {});
    setConvertedData(fileData);
    console.log(fileData);
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

          <div className='col-2'/>

          <div className='col-5'>
            <label>
              Output Format:
              <input/>
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
                <RightPanel convertedData={convertedData}/>
                <button type="button" onClick={saveOutput}>Save</button>
            </div>
        </div>
        </div>
      </Container>
    );
};

export default MainWindow;