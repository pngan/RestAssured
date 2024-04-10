class ConverterCollection {
    constructor() {
        this.converters.push(new RestClientConverter());
        this.converters.push(new BrunoConverter());
    }

    converters = [];

    getSelectedConverter() {
        return this.converters.find((c) => c.isSelected === true);
    }
}

class RestClientConverter {
    name = 'Rest Client';
    isSelected = true;

    convert(data) {
        let arrEndpoints = data.arrEndpoints;
        let refs = data.refs;
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

            }

            // if (ep.requestBody && ep.requestBody.content) {
            //     try {
            //         // console.log(ep.requestBody.content);
            //         for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
            //             console.log('Content-Type: ' + enctype);

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
            //                     console.log('\n' + JSON.stringify(body, null, 4));
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
        let refs = data.refs;

        for (let ep of arrEndpoints) {
            console.log('meta {');
            console.log('  name: ' + ep.summary);
            console.log('  type: http');
            console.log('}\n');
            switch (ep.method) {
                case 'GET':
                    console.log('get {');
                    console.log('  url: ' + ep.path);
                    console.log('  body: none');
                    console.log('  auth: none');
                    console.log('}\n');
                    break;

                case 'POST':
                    console.log('post {');
                    console.log('  url: ' + ep.path);
                    console.log('}\n');
                    break;

                case 'PUT':
                    console.log('put {');
                    console.log('  url: ' + ep.path);
                    console.log('}\n');
                    break;

                case 'PATCH':
                    console.log('patch {');
                    console.log('  url: ' + ep.path);
                    console.log('}\n');
                    break;

                case 'DELETE':
                    console.log('delete {');
                    console.log('  url: ' + ep.path);
                    console.log('}\n');
                    break;

            }

            // Output query parameters
            let required_params = ep.query_parameters.filter((p) => p.required === true);
            if (required_params.length > 0) {
                console.log('\nquery {');
                for (const param of required_params) {
                    console.log("  " + param.name + ": " + param.type);
                }
                console.log('}\n');
            }

            // Output request body parameters
            if (ep.requestBody && ep.requestBody.content) {
                try {
                    // console.log(ep.requestBody.content);
                    for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
                        let schema = content['schema'] ?? null;
                        let properties;
                        if (schema.$ref) {
                            properties = refs.get(schema.$ref)?.properties ?? null;
                        } else {
                            properties = schema['properties'] ?? null;
                        }
                        // console.log(properties);

                        // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
                        switch (enctype) {
                            case 'multipart/form-data':
                                // for (const [key, property] of Object.entries(properties)) {
                                //     console.log(key);
                                // }
                                break;
                            case 'application/json':
                                let body = [];
                                for (const [key, property] of Object.entries(properties)) {
                                    body.push('  ' + key + ': \'' + (property['type'] ?? '') + '\'');
                                }
                                console.log('body {\n' + body.join('\n') + '\n}');
                                break;
                            default:
                        }
                    }
                } catch (err) {
                    console.log('Unable to parse request body for ' + ep.method + ' ' + ep.path);
                    console.log(err);
                }
            }

            console.log('\n----------------------------------------\n\n');
        }
    };
}

module.exports = { ConverterCollection };