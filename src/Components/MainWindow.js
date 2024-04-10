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
  const { convertSelectedEndpoints } = useApp();


  const convertOpenApi = async (event) => {
    // TODO: get selected endpoints and output format
    const data = await convertSelectedEndpoints({}, {});
    console.log(data);
  };

    return (
      <Container className="container">
        <div className='row'>
          <div className='col-6'>
            <SourceInputSelection setData={setData}/>
          </div>
          <div className='col-1'/>
          <div className='col-5'>
            <label>
              Output Format:
              <input/>
            </label>
          </div>
        <div className="row">
            <div className="col-6">
                <EndpointsList data={data}/>
            </div>
            <div className="col-6">
            <button type="button" onClick={convertOpenApi}>Convert</button>
            </div>

            <div className="col-6">
                <RightPanel/>
            </div>
        </div>
        </div>
      </Container>
    );
};

export default MainWindow;