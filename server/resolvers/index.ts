import {
  createUser,
  getAllUsers,
  getUsersById,
} from "../controllers/auth.controller";
import {
  createApplicant,
  getApplicants,
  getApplicantById,
  login,
} from "../controllers/applicant.controller";
import { Applicant, Contractor,Login } from "../types/type";
import { createContractor } from "../controllers/contractor.controller";

export const resolvers = {
  Query: {
    apiStatus: () => ({
      status: "API is running",
    }),
    getAllUsers: () => getAllUsers(),
    getUserById: (parent: any, args: { id: number }, context: any, info: any) =>
      getUsersById(args.id),
    getApplicants: () => getApplicants(),
    getApplicantById: (
      parent: any,
      args: { id: number },
      context: any,
      info: any
    ) => getApplicantById(args.id),
  },
  Mutation: {
    createUser: (
      parent: any,
      args: { input: any},
      context: any,
      info: any
    ) => createUser(args.input.name, args.input.email, args.input.password,args.input.role,args.input.Applicant,args.input.Contractor),
    createApplicant: (
      parent: any,
      args: { input: Applicant },
      context: any,
      info: any
    ) => createApplicant(args.input),
    createContractor: (
      parent: any,
      args: { input: Contractor },
      context: any,
      info: any
    ) => createContractor(args.input),
    login:(_:any,args: { input: Login },context:any,info:any)=> login(args.input),
  },
};
