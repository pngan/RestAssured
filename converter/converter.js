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
                    console.log('Content-Type: ' + Object.keys(ep.requestBody.content)[0]);
                    console.log(ep.requestBody.content);
                    break;

                case 'PUT':
                    console.log('PUT ' + ep.path);
                    console.log('Content-Type: ' + Object.keys(ep.requestBody.content)[0]);
                    break;

                case 'PATCH':
                    console.log('PATCH ' + ep.path);
                    console.log('Content-Type: ' + Object.keys(ep.requestBody.content)[0]);
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