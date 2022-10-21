const fs = require('fs');
const read = function() {
    if(fs.existsSync('./Note.txt')) {
        return fs.readFileSync('Note.txt', 'utf8');
    } else {
        return '[]'
    }
}

module.exports = read