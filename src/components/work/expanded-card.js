import './expanded-card.scss'
import {useEffect, useRef, useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export const ExpandedCard = ({clickCounter, setClickedState, coords, projectData}) => {

    const [showContent, setShowContent] = useState(false)

    const imageContainer = useRef(null)
    const detailsContainer = useRef(null)

    let posX = 0
    let posY = 0
    let width
    let height

    if (coords) {
        posX = coords.x - 200
        posY = coords.y - 100
    }
    let styles = {
        top: posY,
        left: posX
    }


    useEffect(() => {
        if (clickCounter % 2 === 0) {
            enableBodyScroll(detailsContainer)
            setShowContent(false)
        } else {
            disableBodyScroll(detailsContainer)
            setShowContent(true)
        }
    }, [clickCounter])
    return (
        <>
            <div style={styles}
                 className={`expanded-card-container ${(clickCounter === 0) ? "" : (clickCounter % 2 === 0) ? "shrink" : "expand"}`}
                 onClick={() => {
                     setClickedState()
                 }}
           ></div>
            {showContent ?
                <div className={"expanded-card"} onClick={() => {
                    setClickedState()
                }}
                >
                    <div className={'content-container'}>
                        <div className={"image-container"} ref={imageContainer}>
                            <img src="../../logo.svg" alt="logo"/>
                        </div>
                        <div className={"details-container"} ref={detailsContainer}>
                            {projectData.description.long}
                        </div>
                    </div>
                </div>
                : ""}
        </>


    )
}