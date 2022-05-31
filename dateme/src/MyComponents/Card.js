import React from 'react'

const Card = ({nm,ag,em,pf}) => {
    
        return (

    <>
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
 <div>
            
                <div class="text-center card-box " style={{border:"solid black 1px",borderRadius:"20px",margin:"5px 5px",overflow:"hidden"}}>
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto " style={{float:"left"}}><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div class="">
                            <h4>{em}</h4>
                            <p class="text-muted">Name : {nm}</p>
                            <p class="text-muted">Age : {ag}</p>
                            <p class="text-muted">Proffession : {pf}</p>
                        </div>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Connect</button>
                    </div>
                </div>
            </div>

        

    </>
  )
}


export default Card;
