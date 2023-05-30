import './expanded-card.scss'
import {useEffect} from "react";

export const ExpandedCard = ({clickCounter,setClickedState, coords}) => {

    // const elementRef = createRef()

    let posX = 0
    let posY = 0
        if(coords){
            posX = coords.x
            posY = coords.y
        }

    let styles = {
        top : posY,
        left: posX
    }

    useEffect(()=>{
        console.log("expanded card " + clickCounter)
     },[clickCounter])
    return(
        <div>
            <div style={styles} className={`expanded-card-container ${(clickCounter === 0) ? "" : (clickCounter %2 ===0)? "shrink" : "expand"}`} onClick={()=>{
                setClickedState()
            }}> </div>
            {/*{ showContent ?  <div className={"expanded-card"}> hello </div> :""}*/}
        </div>


    )
}