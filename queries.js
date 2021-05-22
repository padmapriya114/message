const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertmessage = (request, response) => {
const {id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified) = request.body
     pool.query( "INSERT INTO cbanc2.message (id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified],(error, results) => {
       if (error) {
         throw error
       }
       response.status(201).send('A new row is inserted in message')
       })
       }


module.exports = {
insertmessage
}
