import { getConnection } from "../../Dbconnection/db.js";

export async function getAllProducts() {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM products.product");
  return result.recordset;
}