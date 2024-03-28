import { pool } from "./constants";

export const connectDb = async () => {
  try {
    
    const client = await pool.connect();
    client.release();
    console.log("Connection to database successful".red);
  } catch (err: any) {
    console.error("Error connecting to database:", err.stack);
  }
};


