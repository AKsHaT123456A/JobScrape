export interface Applicant {
  id?: number;
  user_id?: number;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experienceyears: number;
  workexperience: string;
  appliedposition: string;
  status: string;
  role:string;
  password: string;
  subscribed: boolean;
}
export interface Contractor {
  id?: number;
  name: string;
  mobile_number?: string;
  job_title?: string;
  money?: number;
  duration?: string;
  location?: string;
  pincode?: string;
  description?: string;
}

export interface Login {
  email:string;
  password: string;
}