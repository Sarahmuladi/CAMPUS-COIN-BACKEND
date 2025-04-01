const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0 },
  savingsGoal: { type: Number, default: 0 },
  //phone: { type: String, required: true },
  //currency: { type: String, default: "TZS" },
}, { timestamps: true });


//static signup method
userSchema.statics.signup = async function ({ fullName, email, password }) {

  //Validation
  if (!email || !password || !fullName ){
    throw Error("All fields must be filled")
  }

  if (!validator.isEmail (email)){
    throw Error("Email is not valid")
  }

  if (!validator.isStrongPassword (password)){
    throw Error("Password is not strong enough")
  }

  //check if email is in use
  const existUser = await this.findOne({ email });
  if (existUser) {
    throw new Error("Email already in use");
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ fullName, email, password:hash });

    return user;
    };

    //static login method
    userSchema.statics.signin = async function ({ email, password }){

      if (!email || !password){
        throw Error("All fields must be filled")
      }
      
      const user = await this.findOne({ email });
      if (!user) {
        throw new Error("Incorrect email");
        }

      const match = await bcrypt.compare(password, user.password)

      if(!match){
        throw new Error("Incorrect password");
      }

     

      return user
    }




module.exports = mongoose.model("User", userSchema);
