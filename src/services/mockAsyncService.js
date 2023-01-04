const Productos=[{
    id:1,
    categoria:"Remera",
    stock:20,
    title:"Remera PSG",
    price:1200,
    detail:"PARIS SAINT GERMAIN",
    imgurl:"/assets/img/paris-nino.png",
    imgurl2:"/assets/img/paris2.png",
    },
    
    {id:2,
    categoria:"Remera",
    stock:20,
    title:"Remera Real Madrid",
    price:900,
    detail:"Real Madrid",
    imgurl:"/assets/img/realmadrid.jpg",
    imgurl2:"/assets/img/realmadrid2.jpg",
    },
    
    {id:3,
    categoria:"Remera",
    stock:20,
    title:"Remera Barcelona",
    price:1000,
    detail:"FC Barcelona",
    imgurl:"/assets/img/barcelonanino.jpg",
    imgurl2:"/assets/img/barcelona2.png",
    },
    
    {id:4,
    categoria:"Remera",
    stock:10,
    title:"Remera Liverpool",
    price:1300,
    detail:"Liverpool FC",
    imgurl:"/assets/img/liverpool.jpg",
    imgurl2:"/assets/img/liverpool2.jpg",
    },
    ];



function getItems (){
    return new Promise((resolve)=>{
        console.log("aca carga productos");
        setTimeout(()=>{
          
            resolve(Productos);},2000);
        
    });

   /* getItem.then(()=>{
    console.log("resuelta");
    }).catch((errormsg)=>console.log(errormsg));*/
}

export default getItems;