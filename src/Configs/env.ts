import { config } from "dotenv";
config();

export const ENV = {
  nodeEnv: process.env.NODE_ENV || "development",
  dbUser: process.env.DB_USER!,
  dbPass: process.env.DB_PASS!,
  dbName: process.env.DB_NAME!,
  dbServer: process.env.DB_SERVER!,
};
