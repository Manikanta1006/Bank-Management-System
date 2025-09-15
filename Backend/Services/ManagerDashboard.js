const loanModel = require("../Model/LoanModel")
const accountModel = require("../Model/CreateAccount.model")
const getloans = async () => {
    try {
        const loan = await loanModel.aggregate([
            {
                $group: {
                    _id: "$LoanType",
                    count: { $sum: 1 }
                },

            }
        ])
        // console.log(loan, "lllllllllll")
        return loan;
    }
    catch (e) {
        console.log(e, "manager dashbord getting error")
    }
}

const Bargraph = async () => {
    try {
        const Loans = await loanModel.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    loans: { $sum: 1 }
                }
            }
        ])
        // console.log(Loans, "LoansLoansLoansLoans")

        const Accounts = await accountModel.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    accounts: { $sum: 1 }
                }
            }
        ]);

        // console.log(Accounts, "AccountsAccountsAccounts")

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const monthlyData = months.map((month, i) => {
            let accounts = 0
            const accountFound = Accounts.find((a) => {
                return a._id === i + 1
            })
            if (accountFound) {
                accounts = accountFound.accounts;
            }


            let loans = 0

            const loansFound = Loans.find((l) => {
                return l._id === i + 1
            })

            if (loansFound) {
                loans = loansFound.loans
            }

            return { month: month, accounts: accounts, loans: loans }
        })


        return (monthlyData)
    }
    catch (err) {
        console.log(err, "errr")
    }
}

const GetAccounts = async()=>{
    try{
        const accounts = await accountModel.find()
        console.log(accounts,"acacaacacac")
        return accounts;
    }
    catch(err){
        console.log(err,"managerdash board error")
    }
}

module.exports = {
    getloans,
    Bargraph,
    GetAccounts
}