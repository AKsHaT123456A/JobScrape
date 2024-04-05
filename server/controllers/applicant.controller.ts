import { query } from "../utils/queryUtils";
import { Applicant,Login } from "../types/type";
import { checkPassword } from "../utils/passHash";
import { generateToken } from "../utils/jwtFunctions";

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
        subscribed,
        user_id
      } = newApplicant;
  
      await query("BEGIN");
  
  
      const applicantQuery = `
          INSERT INTO applicants (user_id, name, email, phone, skills, experienceyears, workexperience, appliedposition, status, subscribed)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING *;
        `;
      const applicantValues = [
        user_id,
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
        await query("COMMIT");
        return applicantResult.rows[0];
    } catch (error) {
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


export const login = async(input:Login):Promise<any>=>{
  try {
    const queries = "Select * from applicants where email = $1";
    const result  = await query(queries,[input.email]);
    const user = result.rows[0];
    if(!user) throw new Error(`Could not find`);
    if(!checkPassword(input.password,user.password)){
      throw new Error(`Invalid password`);
    }else{
      return {token: generateToken(user.id,"applicant")};
    }
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed');
  }
}