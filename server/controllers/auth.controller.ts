import { insertDataByRole, query } from "../utils/queryUtils";
import { passHash } from "../utils/passHash";
import { Applicant, Contractor } from "../types/type";

export async function createUser(
  username: string,
  email: string,
  password: string,
  role: string,
  applicantData: Applicant | null,
  contractorData: Contractor | null
) {
  try {
    const queryArgs = `
            INSERT INTO users (username, email, password, role, created_at)
            VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
            RETURNING id;
        `;
    const hashPassword = await passHash(password);
    const values = [username, email, hashPassword, role];
    const result = await query(queryArgs, values);

    const userDataId = result.rows[0].id;

    if (role === "contractor" && contractorData) {
      await insertDataByRole(role, contractorData, userDataId);
    } else if (role === "applicant" && applicantData) {
      await insertDataByRole(role, applicantData, userDataId);
    }

    console.log("User inserted successfully", result.rows);
    return result;
  } catch (error: any) {
    if (error.code === "23505" && error.constraint === "users_email_key") {
      return "Duplicate email";
    }
    console.error("Error inserting user:", error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const queryArgs = `
            SELECT * FROM users;
        `;
    const result = await query(queryArgs);
    console.log("Users retrieved successfully", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error retrieving users:", error);
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
    console.error("Error retrieving user by ID:", error);
    throw error;
  }
}
