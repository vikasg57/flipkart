const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},


},{
    versionKey:false,
    timestamps:true,
})

userSchema.pre("save", function (next){
    if(!this.isModified("password")) return next();

    let  hash=bcrypt.hashSync(this.password, 8);
    this.password=hash;

    next();

})

userSchema.methods.checkpassword = function (password) {
   return  bcrypt.compareSync(password, this.password); // true
}

module.exports = mongoose.model("user",userSchema)
