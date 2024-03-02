export default function Fetchapi(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                if(url==='https://example.com/api/citys'){
                    resolve({
                        status:200,
                        message:'Success',
                        data:{
                            citys:[
                                {id:'KNP',city:'Kanpur',state:'UP'},
                                {id:'NOD',city:'Noida',state:'UP'},
                                {id:'AGR',city:'Agra',state:'UP'},
                                {id:'MUM',city:'Mumbai',state:'MH'},
                                {id:'JAI',city:'Jaipur',state:'RAJ'}
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