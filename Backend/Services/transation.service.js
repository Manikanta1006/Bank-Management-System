const { default: mongoose } = require("mongoose")
const UserAccount = require("../Model/CreateAccount.model")
const Transation = require("../Model/Transation.model")


const AmountDeposite = async (managerId, AccountId, amount, TransationType) => {
    console.log(AccountId, "useriduseridserid")

    try {
        if (TransationType === 'Deposite') {

            const deposite = await UserAccount.findById(AccountId)
            console.log(deposite, "dpsppspdfpfpdp")

            if (!deposite) {
                throw new Error("User Account not found");
            }

            deposite.InitialDiposit = deposite.InitialDiposit + amount
            await deposite.save()
            const depositeRecord = await Transation.create({
                managerId,
                AccountId,
                amount,
                TransationType
            })


            return {
                deposite,
                depositeRecord
            }
        }
        

    // withdraw


     if (TransationType === 'Withdraw') {

            const withdraw = await UserAccount.findById(AccountId)
            console.log(withdraw, "dpsppspdfpfpdp")

            if (!withdraw) {
                throw new Error("User Account not found");
            }

            withdraw.InitialDiposit = withdraw.InitialDiposit - amount
            await withdraw.save()
            const depositeRecord = await Transation.create({
                managerId,
                AccountId,
                amount,
                TransationType
            })


            return {
                withdraw,
                depositeRecord
            }
        }
    
        
    //   const account = await UserAccount.findById(AccountId)
    //         console.log(account,"acaccacaca")
    //     const intrest = 4;
    //      const monthlyIntrest = (account.InitialDiposit * intrest) / 12 /100

    //      account.InitialDiposit = account.InitialDiposit+monthlyIntrest

    //         await account.save()

    //          await Transation.create({
    //             // managerId,
    //             AccountId,
    //             amount:monthlyIntrest,
    //             TransationType:'Intrest'
    //         })

    }

    catch (err) {
        console.log(err)
    }

}



// get trasation with account number

const getTransationswithAc = async (id) => {
    console.log(id, "ssssssssss")
    try {
        const accId = new mongoose.Types.ObjectId(id)
        const transation = await Transation.find({ AccountId: accId })
        console.log(transation, "trtrtrtrtrtrtrt")
        return transation;
    }
    catch (err) {
        console.log(err, "account with transation gettting error")
    }
}

module.exports = {
    AmountDeposite,
    getTransationswithAc
}