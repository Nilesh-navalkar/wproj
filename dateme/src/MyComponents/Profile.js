import React from 'react'
import { useState } from "react";


const Profile = ({name,prof,age,user,desc,url,phone,gender}) => {
    //console.log(name,prof,age,user,desc)
   

  return (
    <div class="container emp-profile" style={{fontFamily:"Monaco",marginTop:"20px"}}>
    <form method="post">
        <div class="row">
            <div class="col-md-4">
                <div class="profile-img">
                    <img  class="img-fluid" style={{borderRadius:"200px"}} src={url} alt=""/>
                    <div>
                        {/*<label for="files" class="btn btn-outline-dark" style={{border:"none"}}>Change Profile Pic</label>
                    <input style={{display:"none"}} type="file" id="files" name="files"/>*/}
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-head" style={{margin:"20px 20px"}}>
                            <h2>
                                {user}
                            </h2>
                </div>
                <div >
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Name : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p> {name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Email : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{user}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Age : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{age}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Profession : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{prof}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone no. : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{phone}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Gender : </label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>{gender}</p>
                                    </div>
                                </div>
                    </div>
                    
                </div>


            </div>

            </div>
       
        </div>
        <div >


        </div>
    </form>           
</div>
  )
}


export default Profile;