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
        for (let ep in arrEndpoints) {
            console.log(ep);
        }
    };
}

class BrunoConverter {
    name = "Bruno";
    isSelected = false;

}

module.exports = { ConverterCollection };