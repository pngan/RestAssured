import { BrunoConverter } from "./BrunoConverter";
import { RestClientConverter } from "./RestClientConverter";

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

export default ConverterCollection;
