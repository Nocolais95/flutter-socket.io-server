const {v4: uuidV4} = require('uuid'); // con esto creamos id unicos

class Band {

    constructor(name='no-name'){
        this.id = uuidV4();
        this.name = name;
        this.votes = 0;
    }
}
// Exportamos la clase
module.exports = Band;