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

const LoansAndAccController = async(req,res)=>{
    try{
        const loansaccount = await managerDashboardService.Bargraph()
        console.log(loansaccount,"rseersrsrrer")
        res.status(201).json(loansaccount)
    }
    catch(err){
        res.status(500).message({message:err.message})
    }
}

const mdGetAccounts = async(req,res)=>{
    try{
        const account = await managerDashboardService.GetAccounts()
        console.log(account,"acacacaca controller")
        res.status(201).json(account)
    }
    catch(err){
        res.status(500).message({message:err.message})
    }
}
module.exports ={
    mdController,
    LoansAndAccController,
    mdGetAccounts
}