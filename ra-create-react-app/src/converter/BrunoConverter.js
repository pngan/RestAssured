export class BrunoConverter {
    name = "Bruno";
    isSelected = true;
    convert(arrEndpoints) {
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

            console.log('\n----------------------------------------\n\n');
        }
    };
}
