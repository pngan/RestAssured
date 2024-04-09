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
    
    convert(arrEndpoints) {
        for (const ep of arrEndpoints) {
            console.log('\n### ' + ep.summary)
            switch(ep.method) {
                case 'GET':
                    console.log('GET ' + ep.path);
                    break;
                case 'POST':
                    console.log('POST ' + ep.path);
                    // console.log(ep.requestBody.content[Object.keys(ep.requestBody.content)[0]]);
                    // let content = ep.requestBody.content[Object.keys(ep.requestBody.content)[0]] ?? null;

                    try {
                        // console.log(ep.requestBody.content);
                        for (const [enctype, content] of Object.entries(ep.requestBody.content)) {
                            console.log('Content-Type: ' + enctype);

                            let schema = content['schema'] ?? null;
                            let properties = schema['properties'] ?? null;
                            // console.log(properties);

                            // TODO: if not one of the recognized content-types, do we skip. Can do different handling for multipart/form-data and application/json for example
                            switch (enctype) {
                                case 'multipart/form-data':
                                    // for (const [key, property] of Object.entries(properties)) {
                                    //     console.log(key);
                                    // }
                                    break;
                                case 'application/json':
                                    break;
                                default:
                            }
                        }
                    } catch (err) {
                        console.log('Unable to parse content for POST' + ep.path);
                    }
                    break;
                case 'PUT':
                    try {
                        console.log('PUT ' + ep.path);
                        console.log('Content-Type: ' + Object.keys(ep.requestBody.content)[0]);
                    } catch (err) {
                        console.log('Unable to parse content for PUT' + ep.path);
                    }
                    break;

                case 'PATCH':
                    try {
                        console.log('PATCH ' + ep.path);
                        console.log('Content-Type: ' + Object.keys(ep.requestBody.content)[0]);
                    } catch (err) {
                        console.log('Unable to parse content for PATCH' + ep.path);
                    }
                    break;

                case 'DELETE':
                    console.log('DELETE ' + ep.path);
                    break;

            }
        }
    };
}

class BrunoConverter {
    name = "Bruno";
    isSelected = false;
    convert(arrEndpoints) {
        for (let ep in arrEndpoints) {
            console.log(ep);
        }
    };
}

module.exports = { ConverterCollection };