import React,{useState} from 'react';
import Card from "./Card";
import Profile from './Profile';
import {logout, useAuth, db } from "./firebase";
import { collection,addDoc,getDocs,query,where} from "firebase/firestore";
import Notifs from "./notifs"
let n,p,a,u,ph,g;
let alldocs=[];
let somedocs=[];
let dict={};

let th ;
const Home = () => {
  const users = collection(db, "users");
  const [call, setCall] = useState(false)
  const currentUser = useAuth();
  const current=currentUser?.email;
  let data,i;

 
  //const name="John Doe",age=69,desc="",prof="web",user="hard coded";
 
  const [show, setShow] = useState(0)
  const [ loading, setLoading ] = useState(false);
  
  async function ftch(){
  const q = query(users, where("email", "==", current ));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => { data=doc.data()});
  //console.log(data.name)
  n=data.name;
  a=data.age;
  p=data.prof;
  u=data.pic;
  ph=data.phone;
  g=data.gender;
  //console.log(u)
  }
  ftch();

  async function getMarker() {
    getDocs(users)
    .then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        alldocs.push({...doc.data()})
      })
    })
   
    dict= Object.assign({}, ...alldocs.map((x) => ({[x.name]: x.email})));
    //console.log(alldocs)
    //for (var i=0, iLen=alldocs.length; i<iLen; i++) {
    //  if (alldocs[i].age === 69) 
    //  console.log(alldocs[i]);
    //}
    //th = alldocs.filter(u => u.age == "66");
    //console.log(th)
}
//for(let i=0;i<alldocs.length;i++)
//console.log(alldocs[i])
  function handel()
  {
    if(!call){
    ftch()
    getMarker();

    setCall(true)
    }
    const indexOfObject = alldocs.findIndex(object => {
      return object.email === currentUser?.email;
    });
// remove object
try {
  if(indexOfObject===-1)
    indexOfObject=1000
    alldocs.splice( indexOfObject, 1 );
  
} catch (error) {
  
}
somedocs=alldocs.filter(function(item)
{
 return item.gender!=g;
})


  //for(let i=0;i<alldocs.length;i++)
  //{
  //  if(alldocs[i].gender===g)
  //  alldocs.splice(i,1)
  //}
    
    
    //console.log(indexOfObject)
    //console.log("all",alldocs)
    //console.log("some",somedocs)
    
    //console.log(dict)
    setShow(1)
  }
  //console.log(n,a,p)
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <>
    
    <nav class="navbar navbar-expand-lg navbar-light"  style={{fontFamily:"Monaco",color: "#f70063",backgroundColor:"rgb(229, 194, 240)"}}>
    <div className="container-fluid">
  <a class="navbar-brand" style={{margin:"5px 5px"}}>dateMe</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>		

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}  onClick={()=>setShow(0)}>Explore</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}  onClick={handel} >Profile</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}  onClick={()=>setShow(2)}>Notifications</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}} onClick={handleLogout}>Sign-out</button>
      </li>
      </ul>
  </div>
  </div>
</nav>

{ show === 0 ? somedocs.map((user)=>(<Card nm={user.name} ag={user.email} pf={user.prof} current={currentUser?.email} em={user.email} pc={user.pic} phone={ph}/>)) :"" }

{ show === 1 ? <Profile  user={currentUser?.email} age={a}  name={n}  prof={p} url={u} phone={ph} gender={g} />: ""}


{ show === 2 ? <Notifs  user={currentUser?.email}/>: ""}





<footer class="bg-dark text-center text-white"  style={{fontFamily: "Concert One",color: "#333",backgroundColor:"rgba(0, 0, 0, 0.2)",marginTop:"5.5%",bottom:"0",position:"relative",width:"100%"}}>
  
  <div class="container p-4">
    
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1"  role="button"
        ><i class="fab fa-facebook-f"></i></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://mobile.twitter.com/Ixphoriann" role="button"
        ><i class="fab fa-twitter"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/nil.arts/" role="button"
        ><i class="fab fa-instagram"></i></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/mwlite/in/nilesh-navalkar-149212236" role="button"
        ><i class="fab fa-linkedin-in"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/ixphoria" role="button"
        ><i class="fab fa-github"></i></a>
    </section>
    <section class="">
      <form action="">
       

        
      </form>
    </section>
    

    <section class="mb-4">
      <p>
        This project was made by :<br/>
      </p>
    </section>
    <section class="">
      
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Akash Goradia</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a  class="text-white">60003200086</a>
            </li>
            <li>
              <a  class="text-white">github</a>
            </li>
            <li>
              <a  class="text-white">instagram</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Nilesh Navalkar</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a  class="text-white">60003200076</a>
            </li>
            <li>
              <a href="https://github.com/ixphoria" class="text-white">github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/nil.arts/" class="text-white">instagram</a>
            </li>
            </ul>
        </div>
 
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Jemish Patel</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a  class="text-white">60003200083</a>
            </li>
            <li>
              <a  class="text-white">github</a>
            </li>
            <li>
              <a  class="text-white">instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
  </div>
  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright : 
    <a class="text-white" style={{textDecoration:"none"}}> Nilesh Navalkar and group </a>
  </div>
</footer>


    
    </>
  )
}

export default Home;