import React from 'react'
let cp="";
const Entry = ({field,phone}) => {

    function handel()
    {
        cp=phone
        alert("contact : ",cp)
        //console.log(cp)
        //http://Wa.me/+91{phone}?text=hey+I+got+matched+with+you
    }

    
        return (

    <>
    
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
 <div>
            
                <div class="text-center card-box " style={{fontFamily:"Monaco",border:"solid black 1px",borderRadius:"20px",margin:"5px 5px",overflow:"hidden"}}>
                    <div class="member-card pt-2 pb-2">
                        
                            <p>connect request from {field}</p>
                        
                        <button type="button" style={{fontFamily:"Monaco",borderRadius:"7px"}} class="btn btn-outline-danger mt-3 btn-rounded waves-effect w-md waves-light" onClick={handel} >accept</button>
                    </div>
                </div>
            </div>

        

    </>
  )
}


export default Entry;
