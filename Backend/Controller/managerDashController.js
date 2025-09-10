const managerDashboardService = require("../Services/ManagerDashboard")

const mdController = async(req,res)=>{
    try{
        const Controller = await managerDashboardService.getloans()
        res.status(201).json(Controller)
    }
    catch(err){
        res.status(500).message({message:err.message})
    }
}
module.exports ={
    mdController
}