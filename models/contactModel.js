const { timeStamp } = require("console")
const mongoose=require("mongoose")
const { type } = require("os")
const contactSchema=mongoose.Schema({
    name:{
        type: String, 
        required: [true, "Please add the contact name"]
    },
    email:{
        type:String,
        required: [true, "Please add the contact email address"]
    },
    phone:{
        type:String,
        required: [true, "Please add the contact phone number"]
    },

},
{
    timeStamp: true,
}
)
module.exports=mongoose.model("Contact", contactSchema);