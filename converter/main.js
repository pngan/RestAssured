#!/usr/bin/env node

const getOpenApiEndpoints = require('./getOpenApiEndpoints.js');
const ConverterCollection = require('./converter.js');

let strDocPath = './data/api-docs.yaml';

(async() => {
    let response = await getOpenApiEndpoints.getOpenApiEndpoints(strDocPath);
    
    let converterCollection = new ConverterCollection.ConverterCollection();
    let converter = converterCollection.getSelectedConverter();
    converter.convert(response.data);
  })();