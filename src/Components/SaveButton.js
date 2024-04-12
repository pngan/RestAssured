import React from 'react';
import styled from 'styled-components';
import JSZip from "jszip";

const Button = styled.button`
  margin-top: 20px;
`;

const SaveButton = ({ convertedData }) => {
  const saveOutput = () => {
      const JSZip = require("jszip");
      const link = document.createElement("a");
      link.download = "output";

      if (typeof convertedData[1] === 'object' && Object.keys(convertedData[1]).length) {
        // Zip file
        let zip = new JSZip();

        for (const [name, bru] of Object.entries(convertedData[1])) {
          zip.file('/bruno/' + name + '.bru', new Blob([bru], { type: "text/plain" }));
        }
        zip.generateAsync({type:"base64"}).then(function (base64) {
            link.href="data:application/zip;base64," + base64;
            link.click();
        });
      } else if (typeof(convertedData[0]) === 'string' && convertedData[0].length > 0) {
        // Regular file
        const blob = new Blob([convertedData[0]], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.click();
      }
  }
  return (
    <Button className='btn btn-secondary btn-sm' type="button" onClick={saveOutput}>Save</Button>
  );
};

export default SaveButton;
