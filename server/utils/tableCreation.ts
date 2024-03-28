import { query } from "./queryUtils";

export const createTables = async (tableQueries: string[]): Promise<void> => {
  try {
    for (const queries of tableQueries) {
      await query(queries);
    }
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};

export const tableCreation = async (): Promise<void> => {
  const tableQueries = [
    `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `,
    `CREATE TABLE IF NOT EXISTS contractors (
        id SERIAL PRIMARY KEY,
        user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        mobile_number VARCHAR(20) UNIQUE,
        job_title VARCHAR(255),
        money NUMERIC,
        duration VARCHAR(50),
        location VARCHAR(255),
        pincode VARCHAR(20),
        description TEXT
    );`,
    `
        CREATE TABLE IF NOT EXISTS applicants (
          id SERIAL PRIMARY KEY ,
          user_id INT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(20) NOT NULL,
          skills TEXT[] NOT NULL,
          experienceyears INTEGER NOT NULL,
          workexperience TEXT NOT NULL,
          appliedposition VARCHAR(255) NOT NULL,
          status VARCHAR(50) NOT NULL,
          subscribed BOOLEAN NOT NULL
        );
      `,
  ];

  await createTables(tableQueries);
};
