import './App.css';
import Home from "./MyComponents/Home"
import {useState,useRef,useEffect} from 'react';
import { signup, login, logout, useAuth, db } from "./MyComponents/firebase";
import { collection,addDoc,getDocs,query,where } from "firebase/firestore";

function App() {

  const [land, setLand] = useState(1)
  const [ loading, setLoading ] = useState(false);
  const [c, setC ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();     //taking email and pass from input fields
  const passwordRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const profRef = useRef();
  const uc=collection(db, "users");
  

 
  async function fill()
  {
    await addDoc(uc,{email:emailRef.current.value, name: nameRef.current.value,age:ageRef.current.value,prof:profRef.current.value});
  }

  async function handleSignup() {
    setLoading(true);
     try {
      await signup(emailRef.current.value, passwordRef.current.value);
      fill()
     } catch {
       alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  
  return (




    <>
    {
      !currentUser && land &&
      <section class="text-center" >
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      
      
      <div class="card mx-4 mx-md-5 shadow-5-strong pt-5 " style={{marginTop: "2.5px",marginBottom: "2.5px",background: "hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"}}>
        <div class="card-body py-5 px-md-5">
      
                
                <button  class="btn btn-primary btn-block mb-4"  onClick={()=>setLand(!land)}>
                  Get Started
                </button>
      
        </div>
      </div>
      </section>
    
    }



{
      !currentUser&& !land && !c && <>
      
<section class="text-center" >
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  

  <div class="card mx-4 mx-md-5 shadow-5-strong pt-5 " style={{marginTop: "2.5px",marginBottom: "2.5px",background: "hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"}}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up now</h2>
          <form>
            
          <div class="form-outline mb-4">
              <input type="text" id="form3Example3" class="form-control" ref={nameRef} required/>
              <label class="form-label" for="form3Example3" >Name</label>
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="number" id="form3Example1" class="form-control" ref={ageRef}/>
                  <label class="form-label" for="form3Example1">Age</label>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control" ref={profRef}/>
                  <label class="form-label" for="form3Example2">Proffession</label>
                </div>
              </div>
            </div>

            
            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control" ref={emailRef} required/>
              <label class="form-label" for="form3Example3" >Email address</label>
            </div>

            
            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" class="form-control" ref={passwordRef} required/>
              <label class="form-label" for="form3Example4" >Password</label>
            </div>

            
            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"  required/>
              <label class="form-check-label" for="form2Example33">
                I have read and agree with the terms and conditions
              </label>
            </div>

            
            <button  disabled={ loading || currentUser } class="btn btn-primary btn-block mb-4"  onClick={handleSignup}>
              Sign up
            </button>
            
            <div>
              <p class="mb-0">Already have an account? <button  style={{color:"black",border:"none",backgroundColor:"white"}} onClick={()=>{setC(!c)}} class="text-black-50 fw-bold">Login</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
{/*<button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>*/}
      {/*<button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>*/}
      </>}




      {
      !currentUser&& !land && c &&<>
      <body >
<section class="text-center" >
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: "40px",background: "hsla(0, 0%, 100%, 0.8)",backdropFilter: "blur(30px)"}}>
    <div class="card-body py-5 px-md-5" >

      <div class="row d-flex justify-content-center" >
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Login now</h2>
          <form>
            
            <div class="form-outline mb-4">
              <input type="email" id="form3Example3" class="form-control" ref={emailRef} required/>
              <label class="form-label" for="form3Example3" >Email address</label>
            </div>

            
            <div class="form-outline mb-4">
              <input type="password" id="form3Example4" class="form-control" required ref={passwordRef}/>
              <label class="form-label" for="form3Example4" >Password</label>
            </div>

            <button  disabled={ loading || currentUser } class="btn btn-primary btn-block mb-4"  onClick={handleLogin}>
              Login
            </button>
            
            <div>
              <p class="mb-0">Don't have an account? <button  style={{color:"black",border:"none",backgroundColor:"white"}} onClick={()=>{setC(!c)}} class="text-black-50 fw-bold">Sign Up</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</>}




    {
      currentUser && <Home/>
}
    </>
  );
}

export default App;
