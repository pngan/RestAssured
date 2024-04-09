const OpenAPIParser = require("@readme/openapi-parser");

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
    arrEndpoints = [];


    //console.log(api.components.schemas);


    for (const [endpoint, methods] of Object.entries(api.paths)) {
      for (const [method, data] of Object.entries(methods)) {
        data['method'] = method.toUpperCase();
        data['path'] = endpoint;
        data['is_selected'] = true;
        data['query_parameters'] = [];

        // Parser query parameters
        if (data.parameters !== undefined) {
          for(const parameter of data.parameters) {
            let p = {};
            p.name = parameter.name;
            p.type = parameter.schema.type;
            p.required = parameter.required;
            data['query_parameters'].push(p);
          }
        }
        arrEndpoints.push(data);
      }
    }

    // console.log(arrEndpoints);

    return {response: 'success', data: arrEndpoints};
  } catch (err) {
    console.log(err);
    return {response: 'failed', data: "Unable to parse OpenApi document"};
  }
}

module.exports = { getOpenApiEndpoints };