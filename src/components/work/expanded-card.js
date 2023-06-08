import './expanded-card.scss'
import {useEffect, useRef, useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export const ExpandedCard = ({clickCounter, setClickedState, coords}) => {

    const [showContent, setShowContent] = useState(false)

    const imageContainer = useRef(null)
    const detailsContainer = useRef(null)

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
                 }}></div>
            {showContent ?
                <div className={"expanded-card"} onClick={() => {
                    setClickedState()
                }}>
                    <div className={'content-container'}>
                        <div className={"image-container"} ref={imageContainer}>
                            <img src="../../logo.svg" alt="logo"/>
                        </div>
                        <div className={"details-container"} ref={detailsContainer}>
                            asdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfadfasd fadfaasdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaa
                            sdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf
                            asdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            asdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaas
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaasdfas
                            dfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadf
                            aasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            fadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf ad
                            fasdfadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfa
                            dfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdfadfaasd
                            asdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfadfasd fadfaasdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaa
                            sdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf
                            asdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            asdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaas
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaasdfas
                            dfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadf
                            aasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            fadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf ad
                            fasdfadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfa
                            dfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdfadfaasd
                            asdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfadfasd fadfaasdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaa
                            sdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf
                            asdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            asdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaas
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaasdfas
                            dfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadf
                            aasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            fadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf ad
                            fasdfadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfa
                            dfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdfadfaasd
                            asdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfadfasd fadfaasdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaa
                            sdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf
                            asdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            asdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaas
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaasdfas
                            dfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadf
                            aasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            fadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf ad
                            fasdfadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfa
                            dfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdfadfaasd
                            asdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdfadfaa
                            sdfasdfafasdfadfasd fadfaasdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdfadfaa sdfasdfafasdfa
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaa
                            sdfasdfafasdfadfasdfadfaas dfasdfafasdfadfasdf
                            asdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            asdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaas
                            dfasdfadfaasdfasdfafasdfadfasdf adfasdfadfaasdfas
                            dfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasdfadf
                            aasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf adfasd
                            fadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdf ad
                            fasdfadfaasdfasdfafasdfadfasdfadfaasdfasdfafasdfa
                            dfasdfafasdfadfasdfadfaasdfasdfafasdfadfasdfadfaasd

                        </div>
                    </div>
                </div>
                : ""}
        </>


    )
}