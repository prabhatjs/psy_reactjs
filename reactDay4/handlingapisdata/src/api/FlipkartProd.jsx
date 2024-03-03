export default function FlipkartProd(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url==='https://example.com/api/Products'){
                resolve({
                    status:200,
                    message:'Success',
                    data:{
                        Products:[
                            {id:'Prod-M1',name:'Samsung',Price:20000},
                            {id:'Prod-T1',name:'T-Shirt',Price:200},
                            {id:'Prod-J1',name:'Jeans',Price:1000},
                            {id:'Prod-C1',name:'Coat Pant',Price:5000},
                            {id:'Prod-S1',name:'Sweater',Price:900}
                        ]
                    }
                })
            }else{
                reject({
                    status:404,
                    message:"Citys Data not Found"
                });
            }
        },2000);
    })
}