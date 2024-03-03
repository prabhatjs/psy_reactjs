export default function Transaction(url){
        return new Promise((resolve,reject)=>{
            
            setTimeout(()=>{
                if(url==="http://transaction.com/api/transactions"){
                    resolve({
                        status:200,
                        message:"Success",
                        data:{
                            Transaction:[
                                {id:1,Amount:1000,Date:'20-Jan-24',platform:"Google Pay"},
                                {id:2,Amount:3000,Date:'20-Feb-24',platform:"PayTm"},
                                {id:3,Amount:45000,Date:'20-Mar-24',platform:"PhonePay"},
                                {id:4,Amount:6000,Date:'01-Jan-24',platform:"Stripe"},
                                {id:5,Amount:500,Date:'25-Jan-24',platform:"NEFT"},
                                {id:6,Amount:3500,Date:'26-Jan-24',platform:"Amazon Pay"}
                            ]
                        }
                    })
                }
                else{
                    reject({
                        status:404,
                        message:"Citys Data not Found"
                    });
                }
            },3000)
        })
}