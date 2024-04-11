import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
`;

const SaveButton = ({ convertedData }) => {
  const saveOutput = () => {
      const blob = new Blob([convertedData], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "output";
      link.href = url;
      link.click();
  }
  return (
    <Button type="button" onClick={saveOutput}>Save</Button>
  );
};

export default SaveButton;
