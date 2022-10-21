const fs = require ('fs')
const update = function (note, oldNote) {
const updateData = JSON.parse(oldNote)

  const newNote = updateData.map (function(n,idx) {
    if (n.id == note.id){
      n.title =note.title
      n.body =note.body
    }
    return n
  })
  
  fs.writeFileSync('Note.txt', JSON.stringify(newNote))
}

module.exports = update