// // we can put all our helper functions in this lib folder
// // import mysql from "serverless-mysql";
// import { createConnection } from "mysql2/promise";

// export const db = createConnection({
//   config: {
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//   },
// });

// export async function sql_query(query_string, values = []) {
//   try {
//     const results = await db.query(query_string, values);
//     await db.end();
//     return results;
//   } catch (e) {
//     throw Error(e.message);
//   }
// }

import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
});

export async function sql_query(query_string, values = []) {
  try {
    const connection = await pool.getConnection();
    const results = await connection.execute(query_string, values);
    connection.release();
    return results[0];
  } catch (e) {
    throw Error(e.message);
  }
}
