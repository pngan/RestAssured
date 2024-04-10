import React, {useState} from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import EndpointsList from "./EndpointsList";
import RightPanel from "./RightPanel";

const Container = styled.div`
  margin-top: 50px;
`

const MainWindow = () => {
  const [data, setData] = useState([]);



  const convertOpenApi =  (event) => {
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