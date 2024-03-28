import {
  createUser,
  getAllUsers,
  getUsersById,
} from "../controllers/authcontroller";
import {
  createApplicant,
  getApplicants,
  getApplicantById,
} from "../controllers/applicant.controller";
import { Applicant, Contractor } from "../utils/type";
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
      args: { input: { name: string; email: string; password: string } },
      context: any,
      info: any
    ) => createUser(args.input.name, args.input.email, args.input.password),
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
  },
};