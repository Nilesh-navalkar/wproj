import React from 'react'

const Entry = ({field}) => {
    
        return (

    <>
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
 <div>
            
                <div class="text-center card-box " style={{border:"solid black 1px",borderRadius:"20px",margin:"5px 5px",overflow:"hidden"}}>
                    <div class="member-card pt-2 pb-2">
                        
                            <p>connect request from {field}</p>
                        
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light" >accept</button>
                    </div>
                </div>
            </div>

        

    </>
  )
}


export default Entry;
