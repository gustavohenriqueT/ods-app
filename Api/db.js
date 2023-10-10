// async function connect(){
//   if(global.connection && global.connection.state !== 'disconnected')
//     return global.connection;

//   const mysql = require("mysql2/promise");
//   const connection = await mysql.createConnection("mysql://root:root@localhost:3306/projeto")
//   console.log("Conectou no MySql!");
//   global.connection = connection;
//   return connection;
// }
// connect();

// async function selectCustomers(){
//   const conn = await connect();
//   return await conn.query('SELECT * FROM teste;');
// }

// async function insertCustomers(customer){
//   const conn = await connect();
//   const sql = 'INSERT INTO teste(idteste, testecol) VALUES (?,?);';
//   const values = [customer.idteste, customer.testecol];
//   return await conn.query(sql, values);
// }

// async function updateCustomers(id, customer){
//   const conn = await connect();
//   const sql = 'UPDATE teste SET testecol=? WHERE idteste=?';;
//   const values = [customer.testecol, id];
//   return await conn.query(sql, values);
// }

// async function deleteCustomers(id){
//   const conn = await connect();
//   const sql = 'DELETE FROM teste WHERE idteste=?;';
//   return await conn.query (sql, [id]);
// }

// module.exports = {selectCustomers, insertCustomers, updateCustomers, deleteCustomers}