// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//1. CONECTAR A FIRESTORE CON OTRO IMPORT
import {getFirestore,doc,getDoc, collection, query, where,getDocs, addDoc}from "firebase/firestore";



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
console.log(dataDocs);
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
    console.log('esta es la orden '+JSON.stringify(order));
    console.log("entre en createBuyOrder");

    //const docRef = await addDoc(collection(db, "orders"),order); 
      /*
    const docRef = await addDoc(collection(db, "cities"), {
        name: "Tokyo",
        country: "Japan"
      });
      console.log("Document written with ID: ", docRef.id);


*/
    const orderCollection=collection(db,"orders");
    const orderDoc=await addDoc(orderCollection,order);
    console.log(orderDoc.id);
return orderDoc.id;
}