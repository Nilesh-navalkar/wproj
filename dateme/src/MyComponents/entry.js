import React from 'react'
import {logout, useAuth, db } from "./firebase";
import { collection,addDoc,getDocs,query,where} from "firebase/firestore";
let link="http://Wa.me/+91"
let linkb="?text=hey+I+got+matched+with+you"
let n,a,p,u;
let flink;
let data=[];
const Entry = ({field,phone}) => {

  


    const users = collection(db, "users");
    async function ftch(){
        const q = query(users, where("email", "==", field ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => { data=doc.data()});
        //console.log(data.name)
        n=data.name;
        a=data.age;
        p=data.prof;
        u=data.pic;
        console.log(data.name,field)
        window.open(u,'popup','width=600,height=600')
        //console.log(u)
        }

    function handel()
    {
        //cp=phone
        flink=link+phone+linkb;
        //alert("contact : ",cp)
        //console.log(flink)
        //http://Wa.me/+91{phone}?text=hey+I+got+matched+with+you
        ftch()
        window.open(flink,'_blank')
    }

    
        return (

    <>
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
 <div>
            
                <div class="text-center card-box " style={{fontFamily:"Monaco",border:"solid black 1px",borderRadius:"20px",margin:"5px 5px",overflow:"hidden"}}>
                    <div class="member-card pt-2 pb-2">
                        
                            <p>connect request from {field}</p>
                        
                        <button id="btn" type="button" style={{fontFamily:"Monaco",borderRadius:"7px"}} class="btn btn-outline-danger mt-3 btn-rounded waves-effect w-md waves-light" onClick={handel} >accept</button>
                    </div>
                </div>
            </div>

        

    </>
  )
}


export default Entry;
