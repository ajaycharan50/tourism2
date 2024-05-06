import User from '../models/User.js'


//create newUser
export const createUser = async (req,res) => {
    const newuser = newUser(req.body)
    try{
        const saveduser = await newuser.save()
        res
        .status(200)
        .json({
            success:true,
            message:"Successfully created",
            data:savedUser
        });
    } catch(err) {
        res
        .status(500)
        .json({success:false,message:'failed to created.Try again'});
    }
};

//update User
export const updateUser = async(req, res) =>{
const id = req.params.id

    try{
         const updatedUser = await User.findByIdAndupdate(
            id, 
            {
            $set: req.body,
         },
        {new:'true'}
    );
    res.status(200).json({
        success: true,
        message: "successfully updated",
        data: updateUser,
    });
    } catch(err){
        res.status(500).json({
            success:false,
            message: "failed to update",
        });

    }
};
//delete User
export const deteleUser = async(req, res) =>{
    const id = req.params.id

    try{
       await User.findByIdAndDelete({})
  
     res.status(200).json({
        success: true,
        message: "successfully deleted",
           });
    } catch(err){
        res.status(500).json({
            success:false,
            message: "failed to deleted",
        });

    }
};
//getSingle User
export const getSingleUser = async(req, res) =>{
    try{
       const user= await User.findById({})
   
      res.status(200).json({
         success: true,
         message: "successfully deleted",
         data: user
     });
     } catch(err){
         res.status(500).json({
             success:false,
             message: "not found",
         });
 
     }
};
//getAll User
export const getAllUser = async(req, res) =>{
  
    try{

        const users = await User.find({ })

        res.status(200).json({
            success:true,
            message: "Successful",
            data: users });
    } catch(err){
        res.status(404).json({
            success:false,
            message: "not found",});

    }
};
