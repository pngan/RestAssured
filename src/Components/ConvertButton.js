import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 30px;
`;

const ConvertButton = ({
  data,
  outputFormat,
  setConvertedData,
  selectedEndpoints,
  convertSelectedEndpoints
}) => {
  const convertOpenApi = async (event) => {
    const filteredData = data.filter((endpoint) => {
      return selectedEndpoints.includes(endpoint.id);
    });
    const fileData = await convertSelectedEndpoints({arrEndpoints: filteredData}, outputFormat);
    setConvertedData(fileData);
  };

  return (
    <Button type="button" onClick={convertOpenApi}>{`Convert =>`}</Button>
  );
};

export default ConvertButton;
