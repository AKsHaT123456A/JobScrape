import { pool } from "../config/constants";
import { createApplicant } from "../controllers/applicant.controller";
import { createContractor } from "../controllers/contractor.controller";

export async function query(text: string, params?: any[]) {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}
export async function insertDataByRole(role: string, data: any,userId: string){
  switch (role) {
    case "applicant":
      createApplicant({...data,user_id: userId});
      break;
    case "contractor":
     createContractor({...data,user_id: userId});
      break;
   }
}
