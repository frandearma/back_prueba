const db = require ('./db');
const config = require ('../config');

async function getAll (){
    const rows = await db.query (
        `SELECT id, name FORM curso`
    );
    const data = rows;
    
    return {
        data
    }
}



module.exports = {
    getAll
}
