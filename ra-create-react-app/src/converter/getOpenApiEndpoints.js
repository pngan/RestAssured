// const OpenAPIParser = require("@readme/openapi-parser");
import OpenAPIParser from '@readme/openapi-parser';
// import OpenAPIParser from 'openapi-parser';
// let strDocPath = './data/api-docs.yaml';
// let strDocPath = './data/invalid.yaml';

// Example of calling function
/*******
(async() => {
  let response = await getOpenApiEndpoints(strDocPath);
  console.log(response);
})();
******/

async function getOpenApiEndpoints(strDocPath) {
  try {
    let api = await OpenAPIParser.parse(strDocPath);
    let objEndpoint = {};

    for (const [endpoint, methods] of Object.entries(api.paths)) {
      for (const [method, data] of Object.entries(methods)) {
        data['method'] = method.toUpperCase();
        data['path'] = endpoint;
        data['is_selected'] = true;

        objEndpoint[method.toUpperCase() + ' ' + endpoint] = data;
      }
    }

    return {response: 'success', data: objEndpoint};
  } catch (err) {
    console.log(err);
    return {response: 'failed', data: "Unable to parse OpenApi document"};
  }
}

export default getOpenApiEndpoints;