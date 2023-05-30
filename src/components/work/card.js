import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useRef, useState} from "react";

export const Card = () => {

    const [clickCounter, setClickCounter] = useState(0)
    const [centerPosition, setCenterPosition] = useState(null)
    const cardRef = useRef(null)

    const setClickedState = () => {
        setClickCounter(current => current + 1)
    }

    useEffect(()=>{
        const card = cardRef.current
        const parent = card.parentElement
        const getElementCenterPosition = () => {
            const rect = card.getBoundingClientRect();
            const parentRect = parent.getBoundingClientRect();
            const elementCenterX = rect.left - parentRect.left + rect.width/2;
            const elementCenterY = rect.height/2 ;
            return { x: elementCenterX, y: elementCenterY };
        };
        const position = getElementCenterPosition();
        setCenterPosition(position)
    },[])

    return (
        <div className="card-container">
            <div className={"card-container-background"}></div>
            <div className={"card-content"} >
                <div className={"card hover"} ref={cardRef} onClick={() => {setClickedState()
                }}/>
                <div className={"description"} >Brief description
                    <ul>
                        <li>Language</li>
                        <li>Framework</li>
                    </ul></div>
            </div>
            <ExpandedCard coords={centerPosition} clickCounter={clickCounter} setClickedState={setClickedState}></ExpandedCard>
        </div>
    )
}

export default Card
