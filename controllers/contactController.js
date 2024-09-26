const getContacts=async(req,res)=>
    {
        res.status(200).json({message:"Get all contacts"});
    };
const createContact=async(req,res)=>
    {
        console.log("The request body is:",req.body)
        const {name,email,phone}=req.body;
        if(!name || !email || !phone)
        {
res.status(400);
throw new Error("All fields are mandatory")
        }
        res.status(201).json({message:"Create contacts"});
    }
 const getContact=async(req,res)=>
    (req,res)=>
        {
            res.status(200).json({message:`Get contacts for ${req.params.id}`});
        };

const updateContact=async(req,res)=>
    {
        res.status(200).json({message:`Update contacts for ${req.params.id}`});
    };
const deleteContact=async(req,res)=>
    (req,res)=>
        {
            res.status(200).json({message:`Delete contacts for ${req.params.id}`});
        };
module.exports={getContacts,createContact, getContact,updateContact,deleteContact};
    