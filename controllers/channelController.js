const Channel = require('./../models/channelModel')


exports.getAllChannel =async(req,res)=>{

    const page = req.query.page || 1
    const limit = req.query.limit || 10

    const query = Channel.find()

    if(page && limit){
        let offset = (page - 1) * limit +1
        if(page == 1){
            query.skip(0).limit(limit)
        }else{
            query.skip(offset-1).limit(limit)
        }
    
    const user = await query

    return res.status(200).json({
        status:'success',
        result : user.length,
        data:{
            user
        }
    })
}const user = await query

res.status(200).json({
   status:'success',
   result : user.length,
   data:{
       user
   }
})

}



exports.getUserById = async(req,res)=>{

    const query = User.findById(req.params.id)

    const user = await query

    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
} 

exports.updateUserById = async(req,res)=>{

    const query = User.findByIdAndUpdate(req.params.id,req.body, {
        new: true
    })

    const user = await query

    res.status(200).json({
        status:'updated',
        data:{
            user
        }
    })
} 
exports.createChannel = async(req,res)=>{

    const query = Channel.create(req.body)
    const channel = await query

    res.status(201).json({
        status:'created',
        data:{
            channel
        }
    })
}

exports.getChannelById = async(req,res)=>{
    try {
        const query= Channel.findById(req.params.id)
        const  channel = await query
     
         res.status(200).json({
             status :'success',
             data:{
                 channel
             }
         })
    }catch(err){
        console.log(err)
    }
  
 }

 exports.updateChannelById = async(req,res)=>{

    const query= Channel.findByIdAndUpdate(req.params.id,req.body)
    const  channel = await query
 
     res.status(200).json({
         status :'updated',
         data:{
             channel
         }
     })
 }

 exports.deleteAllChannel = async(req,res)=>{

    const query= Channel.deleteMany()
    const  channel = await query
 
     res.status(200).json({
         status :'deleted',
         data:{
             
         }
     })
 }
