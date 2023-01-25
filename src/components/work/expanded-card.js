import './expanded-card.scss'
import {createRef} from "react";

export const ExpandedCard = (props) => {
    const elementRef = createRef()
    return(
    <div className={"expanded-card-container"} ref={elementRef} onClick={()=>{
        props.callback(false)
    }}>
        <div className={"expanded-card"}> hello</div>
    </div>
    )
}