import React from 'react'
import {logout, useAuth, db } from "./firebase";
import { collection,addDoc,getDocs,query,where} from "firebase/firestore";
import Entry from "./entry"
const alldocs=[];
let somedocs=[];
let ndocs=[];
let didrun=false;
export default function notifs({user}) {
    const current={user};
    const nf = collection(db, "notif");
    async function getMarker() {
        getDocs(nf)
        .then((snapshot)=>{
          snapshot.docs.forEach((doc)=>{
            alldocs.push({...doc.data()})
          })
        })
        const indexOfObject = alldocs.findIndex(object => {
          return object.cto != {user};
        });
    // remove object
    try {
      if(indexOfObject===-1)
        indexOfObject=1000
        alldocs.splice( indexOfObject, 1 );
      
    } catch (error) {
      
    }


  
        //console.log(alldocs.cto)
        //console.log(user)
        didrun=true
    }
    //for(let i=0;i<alldocs.length;i++)
    //{
    //  if(alldocs[i].cto!=current)
    //  alldocs.splice(i,1)
    //}
    if(!didrun)
    getMarker();
    somedocs=alldocs.filter(function(item)
    {
      return item.cto === user;
    })
    //console.log(somedocs)
    //console.log(ndocs)
  return (
    
    somedocs.map((user)=>(<Entry field={user.cfrom} phone={user.ph}/>))
    
  )
}
