export default function Productapi(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url==='https:productapi.com/api/products'){
                resolve({
                    status:200,
                    message:'Success',
                    data:{
                        products:[
                                {id:'m1',category:"Mobile",name:"Google Pixel",price:40000},
                                {id:'m2',category:"Mobile",name:"Iphone",price:100000},
                                {id:'m3',category:"Mobile",name:"Samsun Galexy",price:90000},
                                {id:'m4',category:"Mobile",name:"Nokia",price:40000},
                                {id:'m5',category:"Mobile",name:"RedMi",price:20000},
                        ]
                    }
                })
            }else{
                reject({
                    status:404,
                    message:"Citys Data not Found"
                });
            }
        },2000)
    })
}