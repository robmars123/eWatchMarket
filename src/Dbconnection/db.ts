import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASS || "Password@123",
  database: process.env.DB_NAME || "EFM.Database",
  server: process.env.DB_SERVER || "TENTON",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // required for Azure SQL
    trustServerCertificate: true, // change to false for production with proper certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (err) {
    console.error("SQL connection error:", err);
    throw err;
  }
}
