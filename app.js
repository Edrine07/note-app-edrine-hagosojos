const add = require('./add')
const read = require('./read')
const del = require('./del')
const update = require('./update')

const cmd = process.argv;

if(cmd[2] === 'add') {
  
    const note = { 
        "id": cmd[3],
        "title": cmd[4],
        "body": cmd[5]
    }

    const oldNote = read()
   
    add(note,oldNote);
    console.log (add)

}


if(cmd[2] === 'read') {
    const present = require('./present')
    present(read())
    console.log (read)
}

if(cmd[2] === "delete") {
    const id = cmd[3]
    const oldNote = read ()
    del (id, oldNote)
    console.log (del)
}
    

if (cmd[2] === 'update') {
    let note  = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
}
 
    const newNote = read ()
    update (note, newNote)

     
    const present = require('./present')
    present(read())
    console.log (update)
    
}  
        
    