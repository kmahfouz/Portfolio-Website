import './expanded-card.scss'
import {createRef, useEffect, useState} from "react";

export const ExpandedCard = (props) => {

    const elementRef = createRef()
    const [showContent,setShowContent] = useState(false)

     useEffect(()=>{
         setTimeout(() =>{setShowContent(true)},700)
     },[])
    return(
    <div className={`expanded-card-container `} ref={elementRef} onClick={()=>{
        props.minimize(true)
        props.click()
    }}>
        {/*{ showContent ?  <div className={"expanded-card"}> hello </div> :""}*/}
    </div>

    )
}