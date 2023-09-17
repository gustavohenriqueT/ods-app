(async () => {
  const db = require("./db");

  // SELECT
  const teste = await db.selectCustomers();
  console.log(teste);

  // INSERT
  console.log ('INSERT INTO teste');
  const insert = await db.insertCustomers({idteste: 3, testecol: "foi"});
  console.log(insert);

  // UPDATE
  const update = await db.updateCustomers(3, {testecol:"arrumando"});
  console.log(update);

  // DELETE
  const delet = await db.deleteCustomers(3);
  console.log(delet);

})();