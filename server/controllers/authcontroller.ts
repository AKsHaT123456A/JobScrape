import { query } from "../utils/queryUtils";
import { passHash } from "../utils/passHash";

export async function createUser(username: string, email: string, password: string) {
  try {
    const queryArgs = `
      INSERT INTO users (username, email, password, created_at)
      VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
    `;
    const hashPassword = await passHash(password);
    const values = [username, email, hashPassword];
    const result = await query(queryArgs, values);
    console.log('User inserted successfully', result.rows);
    return result;
  } catch (error:any) {
    if (error.code === '23505' && error.constraint === 'users_email_key') {
      return "Duplicate email"; 
    }
    console.error('Error inserting user:', error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const queryArgs = `
      SELECT * FROM users;
    `;
    const result = await query(queryArgs);
    console.log('Users retrieved successfully', result.rows);
    return result.rows;
  } catch (error) {
    console.error('Error retrieving users:', error);
    throw error;
  }
 
}

export async function getUsersById(id: number) {
  try {
    
    const queryArgs = `
      SELECT * FROM users WHERE id = $1;
    `;
    const result = await query(queryArgs, [id]);
    return result.rows;
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    throw error;
  }
}
