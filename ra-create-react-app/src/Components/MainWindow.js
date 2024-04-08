import React from "react"; 
import styled from "styled-components";
import SourceInputSelection from "./SourceInputSelection";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const MainWindow = () => {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-6'>
            <SourceInputSelection/>
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
                <LeftPanel/>
            </div>
            <div className="col-6">
                <RightPanel/>
            </div>
        </div>
        </div>
      </div>
    );
};

export default MainWindow;