import { pool } from "../config/constants";

export async function query(text: string, params?: any[]) {
    try {
      const res = await pool.query(text, params);
      return res;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }