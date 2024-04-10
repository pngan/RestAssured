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
    let refs = await OpenAPIParser.resolve(strDocPath);
    arrEndpoints = [];
    Object.entries(api.paths).forEach(([endpoint, methods], pathIndex) => {
      Object.entries(methods).forEach(( [method, data], methodIndex ) => {
        data['method'] = method.toUpperCase();
        data['path'] = endpoint;
        data['is_selected'] = true;
        data['query_parameters'] = [];
        data['id'] = `${pathIndex}${methodIndex}${Math.floor(Math.random() * 10000000).toString()}`;

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
      });
    });
    return { response: 'success', data: { arrEndpoints: arrEndpoints, refs: refs } };
  } catch (err) {
      console.log(err);
      return {response: 'failed', data: "Unable to parse OpenApi document"};
  }
}

module.exports = { getOpenApiEndpoints };