const fs = require('fs')

const write = function(data='default') {
    fs.writeFileSync('Note.txt', data)

}

module.exports = write