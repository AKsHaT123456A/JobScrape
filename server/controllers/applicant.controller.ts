import { passHash } from "../utils/passHash";
import { query } from "../utils/queryUtils";
import { Applicant } from "../utils/type";

export const getApplicants = async (): Promise<Applicant[]> => {
  try {
    const queries = "SELECT * FROM applicants";
    const result = await query(queries);

    return result.rows;
  } catch (error) {
    throw new Error(`Error getting applicants: ${error}`);
  }
};
export const createApplicant = async (
    newApplicant: Applicant
  ): Promise<Applicant> => {
    try {
      const {
        name,
        email,
        phone,
        skills,
        experienceyears,
        workexperience,
        appliedposition,
        status,
        password,
        subscribed,
      } = newApplicant;
  
      // Start a transaction
      await query("BEGIN");
  
      // Insert data into the users table
      const userQuery = `
          INSERT INTO users (username, email,password) 
          VALUES ($1, $2,$3)
          RETURNING id;
        `;
      const hashPassword = await passHash(password);
  
      const userValues = [name, email, hashPassword];
      const userResult = await query(userQuery, userValues);
      const userId = userResult.rows[0].id;
  
      // Insert data into the applicants table with the userId as a foreign key
      const applicantQuery = `
          INSERT INTO applicants (user_id, name, email, phone, skills, experienceyears, workexperience, appliedposition, status, subscribed)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING *;
        `;
      const applicantValues = [
        userId,
        name,
        email,
        phone,
        skills,
        experienceyears,
        workexperience,
        appliedposition,
        status,
        subscribed,
      ];
      const applicantResult = await query(applicantQuery, applicantValues);
  
      // Commit the transaction
      await query("COMMIT");
  
      // Return the newly created applicant
      return applicantResult.rows[0];
    } catch (error) {
      // Rollback the transaction if an error occurs
      await query("ROLLBACK");
      throw new Error(`Error creating applicant: ${error}`);
    }
  };
  

export const getApplicantById = async (
  id: number
): Promise<Applicant | null> => {
  try {
    const queries = "SELECT * FROM applicants WHERE id = $1";
    const result = await query(queries, [id]);
    return result.rows[0] || null;
  } catch (error) {
    throw new Error(`Error getting applicant by ID: ${error}`);
  }
};

export const toggleSubscription = async (id: number): Promise<boolean> => {
  try {
    const queries =
      "UPDATE applicants SET subscribed = NOT subscribed WHERE id = $1 RETURNING subscribed";
    const result = await query(queries, [id]);
    return result.rows[0]?.subscribed;
  } catch (error) {
    throw new Error(`Error toggling subscription: ${error}`);
  }
};

export const updateApplicant = async (
  id: number,
  updatedApplicant: Partial<Applicant>
): Promise<Applicant | null> => {
  try {
    const {
      name,
      email,
      phone,
      skills,
      experienceyears,
      workexperience,
      appliedposition,
      status,
      subscribed,
    } = updatedApplicant;
    const queries = `
        UPDATE applicants
        SET name = $1, email = $2, phone = $3, skills = $4, experienceyears = $5, 
            workexperience = $6, appliedposition = $7, status = $8, subscribed = $9
        WHERE id = $10
        RETURNING *;
      `;
    const values = [
      name,
      email,
      phone,
      skills,
      experienceyears,
      workexperience,
      appliedposition,
      status,
      subscribed,
      id,
    ];
    const result = await query(queries, values);
    return result.rows[0] || null;
  } catch (error) {
    throw new Error(`Error updating applicant: ${error}`);
  }
};
