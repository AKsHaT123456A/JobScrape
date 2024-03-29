export const typeDefs = `
    #graphql
    type Query {
        apiStatus: ApiStatus
        getAllUsers: [User]
        getUserById(id:ID): [User]
        getApplicants: [Applicant]              
        getApplicantById(id: ID!): Applicant   
    }
    
    type Mutation {
        createUser(input: UserInput): User
        createApplicant(input: ApplicantInput): Applicant  
        createContractor(input:ContractorInput):Contractor
        login(input: LoginUserInput):AuthPayload!
    }
    
    type ApiStatus {
        status: String
    }

    type User {
        id: ID
        name: String
        email: String
        password: String
    }
    
    type Applicant {
        id: ID 
        name: String
        email: String
        phone: String
        skills: [String]
        experienceyears: Int
        workexperience: String
        appliedposition: String
        status: String
        user_id:Int
        subscribed: Boolean
    }
    
    input UserInput {
        name: String
        email: String
        password: String
        role: String
        Applicant:ApplicantInput
        Contractor:ContractorInput
    }

    input ApplicantInput {
        name: String
        email: String
        phone: String
        skills: [String]
        experienceyears: Int
        workexperience: String
        appliedposition: String
        status: String
        subscribed: Boolean
        password: String
    }
    type Contractor {
        id: ID 
        name: String
        mobileNumber: String
        jobTitle: String
        money: Float
        duration: String
        location: String
        pincode: String
        description: String
      }
      
      input ContractorInput {
        name: String
        mobileNumber: String
        jobTitle: String
        money: Float
        duration: String
        location: String
        pincode: String
        description: String
      }

      input LoginUserInput {
        email: String
        password: String
      }

      type AuthPayload{
        token: String!
        user: String!
      }
`;
