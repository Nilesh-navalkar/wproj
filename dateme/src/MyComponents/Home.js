import React,{useState} from 'react';
import Card from "./Card";
import Profile from './Profile';

const Home = () => {
  //const name="John Doe",age=69,desc="",prof="web",user="hard coded";
  const [show, setShow] = useState(0)
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light"  style={{fontFamily: "Acme, sans-serif",color: "#f70063",backgroundColor:"peachpuff"}}>
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
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}  onClick={()=>setShow(1)} >Profile</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}  onClick={()=>setShow(2)}>Notifications</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-outline-dark" style={{border:"none",margin:"5px 5px"}}>Sign-out</button>
      </li>
      </ul>
  </div>
  </div>
</nav>
{ show === 0 ? <Card/> :"" }

{ show === 1 ? <Profile/>: ""}





<footer class="bg-dark text-center text-white"  style={{fontFamily: "Concert One",color: "#333",backgroundColor:"rgba(0, 0, 0, 0.2)",marginTop:"5.5%",bottom:"0",position:"relative",width:"100%"}}>
  
  <div class="container p-4">
    
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
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
              <a href="#!" class="text-white">600032000</a>
            </li>
            <li>
              <a href="#!" class="text-white">github</a>
            </li>
            <li>
              <a href="#!" class="text-white">instagram</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Nilesh Navalkar</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">60003200076</a>
            </li>
            <li>
              <a href="https://github.com/ixphoria" class="text-white">github</a>
            </li>
            <li>
              <a href="#!" class="text-white">instagram</a>
            </li>
            </ul>
        </div>
 
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Jemish Patel</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">600032000</a>
            </li>
            <li>
              <a href="#!" class="text-white">github</a>
            </li>
            <li>
              <a href="#!" class="text-white">instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
  </div>
  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright : 
    <a class="text-white" style={{textDecoration:"none"}}> group name</a>
  </div>
</footer>


    
    </>
  )
}

export default Home;