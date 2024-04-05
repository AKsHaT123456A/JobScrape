import bcrypt from "bcrypt";
export const passHash = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt,);
};

export const checkPassword = async(password:string,hashedPassword:string)=>{
  const valid:boolean = bcrypt.compareSync(password,hashedPassword);
  return valid;
}