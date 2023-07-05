import './expanded-card.scss'
import {useEffect, useRef, useState} from "react";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

export const ExpandedCard = ({clickCounter, setClickedState, coords, projectData}) => {

    const [showContent, setShowContent] = useState(false)
    const [backgroundImg, setBackgroundImg] = useState( "")
    const [images,setImages] = useState([])

    const imageContainer = useRef(null)
    const detailsContainer = useRef(null)


    useEffect(()=>{
        if(projectData.images){
            setBackgroundImg(projectData.images[0])
            setImages(projectData.images)
        }
    },[projectData.images])

    let posX = 0
    let posY = 0

    if (coords) {
        posX = coords.x -200
        posY = coords.y
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


    let posStyle = {
        top: posY,
        left: posX,
    }
    const backgroundStyle ={
        backgroundImage: `url(${backgroundImg})`,
    }

    return (
        <>
            <div style={posStyle}
                 className={`expanded-card-container ${(clickCounter === 0) ? "" : (clickCounter % 2 === 0) ? "shrink" : "expand"}`}
                 onClick={() => {
                     setClickedState()
                 }}
           >
            </div>
            {showContent ?
                <div style={backgroundStyle} className={"expanded-card"} onClick={() => {
                    setClickedState()
                }}
                >
                    <div className={'content-container'}>
                        <div className={"image-container"} ref={imageContainer}>
                            {images.map((image,index)=>{
                                const fileExtension = image.substring(image.lastIndexOf('.')).toLowerCase();
                                return (
                                   <div className={'image'}>
                                       {(fileExtension ===".mp4") ?
                                           <video src={`${image}`} width={'100%'} height={'100%'} controls/>
                                           :
                                           <img src={`${image}`} alt="project" width="100%" height="100%" /> }
                                   </div>)
                            })}

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