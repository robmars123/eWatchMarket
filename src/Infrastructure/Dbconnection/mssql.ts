import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER || "host.docker.internal", // or "mssql-db" if DB is containerized
  port: parseInt(process.env.DB_PORT || "1433", 10),  
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,               // set true if using Azure SQL or TLS
    trustServerCertificate: true, // safe for local dev; set false with proper certs in prod
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log("Connected to MSSQL");
    return pool;
  } catch (err) {
    console.error("SQL connection error:", err);
    throw err;
  }
}
