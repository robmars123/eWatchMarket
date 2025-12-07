import { getConnection } from "../../Infrastructure/Dbconnection/mssql.js";
import sql from "mssql";

export async function getAllProducts() {
  const pool = await getConnection();
  const result = await pool.request().query(
    "SELECT * FROM products.product WHERE IsDeleted = 0" // hardcoded for testing. This should be implemented at database level.
  );
  return result.recordset;
}

export async function getProductById(id: string) {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input("Id", sql.UniqueIdentifier, id) // bind as UUID
      .query("SELECT * FROM products.product WHERE Id = @Id ");

    return result.recordset[0]; // undefined if not found
  } catch (err) {
    console.error("Error fetching product by id:", err);
    throw new Error("Database query failed");
  }
}