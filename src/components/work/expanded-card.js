import './expanded-card.scss'
import {createRef} from "react";

export const ExpandedCard = (props) => {
    const elementRef = createRef()
    return(
    <div className={"expanded-card"} ref={elementRef} onClick={()=>{
            console.log(props.isClicked)
        props.callback(false)
    }}>
    </div>
    )
}