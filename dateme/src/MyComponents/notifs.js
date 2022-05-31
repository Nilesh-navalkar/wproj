import React from 'react'
import {logout, useAuth, db } from "./firebase";
import { collection,addDoc,getDocs,query,where} from "firebase/firestore";
import Entry from "./entry"
const alldocs=[];
let didrun=false;
export default function notifs({user}) {
    
    const nf = collection(db, "notif");
    async function getMarker() {
        getDocs(nf)
        .then((snapshot)=>{
          snapshot.docs.forEach((doc)=>{
            alldocs.push({...doc.data()})
          })
        })

        didrun=true
    }
    if(!didrun)
    getMarker();
    console.log(alldocs)
  return (
    
    alldocs.map((user)=>(<Entry field={user.cto}/>))
    
  )
}
