import React from 'react'
import {logout, useAuth, db } from "./firebase";
import { collection,addDoc,getDocs,query,where} from "firebase/firestore";
const Card = ({nm,ag,em,pf,pc,current}) => {
    const ndb = collection(db, "notif");
    async function fill(f,t)
    {
      await addDoc(ndb,{cfrom:f,cto:t});
    }
    function handelClick(user)
    {
        //console.log(user["em"])
        fill(current,user["em"])
    }
        return (

    <>
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
 <div>
            
                <div class="text-center card-box " style={{border:"solid black 1px",borderRadius:"20px",margin:"5px 5px",overflow:"hidden"}}>
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto " style={{float:"left"}}><img src={pc} class="rounded-circle img-thumbnail" alt="profile-image" style={{maxHeight:"350px",maxWidth:"350px"}} /></div>
                        <div class="">
                            <h4>{em}</h4>
                            <p class="text-muted">Name : {nm}</p>
                            <p class="text-muted">Age : {ag}</p>
                            <p class="text-muted">Proffession : {pf}</p>
                        </div>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" onClick={()=>handelClick({em})}>Connect</button>
                    </div>
                </div>
            </div>

        

    </>
  )
}


export default Card;
