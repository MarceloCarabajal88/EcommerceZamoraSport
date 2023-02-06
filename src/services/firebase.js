// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//1. CONECTAR A FIRESTORE CON OTRO IMPORT
import {getFirestore,doc,getDoc, collection, query, where,getDocs, addDoc,updateDoc}from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBTavLvsjob2pHl4lphQXkT0sz76O3dsKE",
  authDomain: "react-ecommercezamora.firebaseapp.com",
  projectId: "react-ecommercezamora",
  storageBucket: "react-ecommercezamora.appspot.com",
  messagingSenderId: "178568373651",
  appId: "1:178568373651:web:eae93e06ef2dbabe193466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getISingletem (itemid){
    
const docRef = doc(db,"productos",itemid);

const snapshot= await getDoc(docRef);

const docData=snapshot.data();
docData.id=snapshot.id;
console.log("estoy en getsingleitem");

return docData;

}

export async function getItems(){

    const productCollection=collection(db,"productos");
const querySnapshot= await getDocs(productCollection);
const dataDocs= querySnapshot.docs.map(doc=>({...doc.data(), id: doc.id}));

return dataDocs;
}


export async function getItembyCategory(categoryid){

    console.log("estre a la funcion item by cat");
    const productCollectionRef=collection(db,"productos");
const q= query(productCollectionRef, where("categoria","==",categoryid));

const querySnapshot=await getDocs(q);

const dataDocs=querySnapshot.docs.map((doc)=>({
    ...doc.data(),
    id: doc.id,
}));





return dataDocs;
}


export async function createBuyOrder(order){
   

 
    const orderCollection=collection(db,"orders");
    const orderDoc=await addDoc(orderCollection,order);
    console.log(orderDoc.id);
return orderDoc.id;
}

export async function updateStock(itemscart){

  const querySnapshot = await getDocs(collection(db, "productos"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
 // console.log(doc.id, " => ", doc.data());
});

const dataDocs=querySnapshot.docs.map((doc)=>({
  ...doc.data(),
  id: doc.id,
}));


  itemscart.forEach((item)=>{
   
    const myVal = dataDocs.find(function(element) {
      return element.id === item.id;
    });

    // Create a query against the collection.
    console.log("el filtro "+  JSON.stringify(myVal))

console.log("el stock "+  myVal['stock'])
    


   let newstock=myVal['stock']-item.cantidad;

    

//ACTUALIZO EL PRODUCTO
    const productosref = doc(db,'productos', item.id)
    updateDoc(productosref,{
      stock:newstock,
     
    } ).then(response => {
      console.log("updated")
    }).catch(error =>{
      console.log(error.message)
    })



  })
  //console.log('esta es la orden '+JSON.stringify(order));
  

  // Set the 'capital' field of the city





}