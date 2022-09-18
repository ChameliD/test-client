const slides=require('../modal/Slides')

module.exports.create=async function(req,res){
            
    const{url,title,subTitle}=req.body;
    try{
        const resp=await slides.create({
           
            url:url,
            title:title,
            subTitle:subTitle, 
        })
    
        res.send({
            success:true,
            data:resp,
        })
    }catch(e){
        console.log("Error: ",e)
    }
   
}

//get all slides
module.exports.get=async function(req,res){
    const{id}=req.params;
    try{
        slides.find({},(err,result)=>{
            if(err){
                res.json(err)
            }else{
                res.json(result)
            }
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}

//get by ID
module.exports.getById=async function(req,res){
    const{id}=req.params;
    try{
        console.log("variable__",id)
        const resp=await slides.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}