class ConverterCollection {
    constructor() {
        this.converters.push(new RestClientConverter());
        this.converters.push(new BrunoConverter());
    }

    converters = [];

    getSelectedConverter() {
        return this.converters.find((c) => c.isSelected === true);
    }

    setSelectedConverter(name) {
        for(let converter of this.converters) {
            converter.isSelected = converter.name === name;
        }
    }
}

class RestClientConverter {
    name = 'Rest Client';
    isSelected = true;

    convert(data) {
        let arrEndpoints = data.arrEndpoints;
     //   let refs = data.refs;
        let stringReturn = '';
        for (const ep of arrEndpoints) {
            stringReturn += `### ${ep.summary}\n`;
            stringReturn += `${ep.method} ${ep.path}\n`;
            stringReturn += `\n`;
            switch (ep.method) {
                case 'GET':
                    break;
                case 'POST':
                    // console.log(ep.requestBody.content[Object.keys(ep.requestBody.content)[0]]);
                    // let content = ep.requestBody.content[Object.keys(ep.requestBody.content)[0]] ?? null;
                    break;
                case 'PUT':
                    break;
                case 'PATCH':
                    break;
                case 'DELETE':
                    break;
                default:
                    // do nothing
            }

            // if (ep.requestBody && ep.requestBody.content) {
            //     try {
            //         // console.log(ep.requestBody.content);
            //         for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
            //             stringReturn += 'Content-Type: ' + enctype;

            //             let schema = content['schema'] ?? null;
            //             let properties;
            //             if (schema.$ref) {
            //                 properties = refs.get(schema.$ref)?.properties ?? null;
            //             } else {
            //                 properties = schema['properties'] ?? null;
            //             }
            //             // console.log(properties);

            //             // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
            //             switch (enctype) {
            //                 case 'multipart/form-data':
            //                     // for (const [key, property] of Object.entries(properties)) {
            //                     //     console.log(key);
            //                     // }
            //                     break;
            //                 case 'application/json':
            //                     let body = {};
            //                     for (const [key, property] of Object.entries(properties)) {
            //                         body[key] = property['type'] ?? '';
            //                     }
            //                     stringReturn += '\n' + JSON.stringify(body, null, 4);
            //                     break;
            //                 default:
            //             }
            //         }
            //     } catch (err) {
            //         console.log(err);
            //         // console.log('Unable to parse content for ' + ep.method + ' ' + ep.path);
            //     }
            // }
        }
        stringReturn += '\n\n';
        return stringReturn;
    }
}

class BrunoConverter {
    name = "Bruno";
    isSelected = false;
    convert(data) {
        let arrEndpoints = data.arrEndpoints;
       // let refs = data.refs;
        let stringReturn = '';

        // TODO: 1) CHANGE CONSOLE TO stringReturn 2) look into splitting individual files for zip output


        for (let ep of arrEndpoints) {
            stringReturn += 'meta {';
            stringReturn += '  name: ' + ep.summary;
            stringReturn += '  type: http';
            stringReturn += '}\n';
            switch (ep.method) {
                case 'GET':
                    stringReturn += 'get {';
                    stringReturn += '  url: ' + ep.path;
                    stringReturn += '  body: none';
                    stringReturn += '  auth: none';
                    stringReturn += '}\n';
                    break;

                case 'POST':
                    stringReturn += 'post {';
                    stringReturn += '  url: ' + ep.path;
                    stringReturn += '}\n';
                    break;

                case 'PUT':
                    stringReturn += 'put {';
                    stringReturn += '  url: ' + ep.path;
                    stringReturn += '}\n';
                    break;

                case 'PATCH':
                    stringReturn += 'patch {';
                    stringReturn += '  url: ' + ep.path;
                    stringReturn += '}\n';
                    break;

                case 'DELETE':
                    stringReturn += 'delete {';
                    stringReturn += '  url: ' + ep.path;
                    stringReturn += '}\n';
                    break;
                default:
                    // do nothing
            }

            // Output query parameters
            let required_params = ep.query_parameters.filter((p) => p.required === true);
            if (required_params.length > 0) {
                stringReturn += '\nquery {';
                for (const param of required_params) {
                    stringReturn += '  ' + param.name + ': ' + param.type;
                }
                stringReturn += '}\n';
            }

            // Output request body parameters
            // if (ep.requestBody && ep.requestBody.content) {
            //     try {
            //         // console.log(ep.requestBody.content);
            //         for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
            //             let schema = content['schema'] ?? null;
            //             let properties;
            //             if (schema.$ref) {
            //                 properties = refs.get(schema.$ref)?.properties ?? null;
            //             } else {
            //                 properties = schema['properties'] ?? null;
            //             }
            //             // console.log(properties);

            //             // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
            //             switch (enctype) {
            //                 case 'multipart/form-data':
            //                     // for (const [key, property] of Object.entries(properties)) {
            //                     //     console.log(key);
            //                     // }
            //                     break;
            //                 case 'application/json':
            //                     let body = [];
            //                     for (const [key, property] of Object.entries(properties)) {
            //                         body.push('  ' + key + ': \'' + (property['type'] ?? '') + '\'');
            //                     }
            //                     stringReturn += 'body {\n' + body.join('\n') + '\n}';
            //                     break;
            //                 default:
            //             }
            //         }
            //     } catch (err) {
            //         console.log('Unable to parse request body for ' + ep.method + ' ' + ep.path);
            //         console.log(err);
            //     }
            // }

            stringReturn += '\n----------------------------------------\n\n';
        }
        return stringReturn;
    };
}

module.exports = { ConverterCollection };