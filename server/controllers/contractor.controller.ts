import { query } from "../utils/queryUtils";
import { Contractor } from "../types/type";

export async function createContractor(contractorData: Contractor) {
  try {
    const { name, mobile_number, job_title, money, duration, location, pincode, description } = contractorData;
    const queryArgs = `
      INSERT INTO contractors (name, mobile_number, job_title, money, duration, location, pincode, description)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [name, mobile_number, job_title, money, duration, location, pincode, description];
    const result = await query(queryArgs, values);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating contractor: ${error}`);
  }
}

export async function getContractorById(id: number) {
  try {
    const queryArgs = `
      SELECT * FROM contractors WHERE id = $1;
    `;
    const result = await query(queryArgs, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error retrieving contractor by ID: ${error}`);
  }
}
