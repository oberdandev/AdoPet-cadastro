import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: 6,
    },
});

UserSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    next()
});

const User = mongoose.model("userpets", UserSchema)

export {User};