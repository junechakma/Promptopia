import { Schema, model, models } from "mongoose";
import { stringify } from "postcss";

const UserSchema = newSchema({
    email:{
        type:String,
        unique:[true, 'Email'],
        required:[true,'EMail is required']
    },
    username:{
        type:String,
        required:[true, 'Username is required']
    },
    image:{
        type:String,
    }
})

const User = model("User", UserSchema);

export default User;