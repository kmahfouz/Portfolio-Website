import './expanded-card.scss'
import {useEffect, useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export const ExpandedCard = ({clickCounter, setClickedState, coords}) => {

    const [showContent, setShowContent] = useState(false)

    let posX = 0
    let posY = 0
    if (coords) {
        posX = coords.x
        posY = coords.y
    }
    let styles = {
        top: posY,
        left: posX
    }


    useEffect(() => {
        if (clickCounter % 2 === 0) {
            enableBodyScroll(document.body)
            setShowContent(false)
        } else {
            disableBodyScroll(document.body)
            setShowContent(true)
        }
    }, [clickCounter])
    return (
        <>
            <div style={styles}
                 className={`expanded-card-container ${(clickCounter === 0) ? "" : (clickCounter % 2 === 0) ? "shrink" : "expand"}`}
                 onClick={() => {
                     setClickedState()
                 }}></div>
            {showContent ?
                <div className={"expanded-card"} onClick={()=>{setClickedState()}}>
                    <div className={'content-container'}>
                        <div className={"image-container"}>
                            <img src="../../logo.svg" alt="logo"/>
                        </div>
                        <div className={"details-container"}>
                       </div>
                    </div>
                </div>
                : ""}
        </>


    )
}