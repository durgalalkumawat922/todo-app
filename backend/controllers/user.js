import bcrypt from "bcrypt"
import USER from "../Models/user.js";


export const userRegister =  async(req, res)=>{

    const { username, email, password } = req.body;


    if(!username ){
        res.status(404).json({ success:true, message:"username Required"});
        return;
    }
    if(!email ){
        res.status(404).json({ success:true, message:"email Required"});
        return;
    }
    if(!password ){
        res.status(404).json({ success:true, message:"password Required"});
       return;
    }


    const hashPassword = await bcrypt.hashSync(password, 10);

    const newUser = new USER({
      username: username,
      email:email,
      password: hashPassword
    });


    const saveUser = await newUser.save();

    if(!saveUser){
        
        res.status(404).json({ success:false, message:"User not registered"});
        return;
    }


    // const { ,  ...rest }  = newUser;

    res.status(200).json({ success:true, message:"user registered successfully", data: saveUser});



}