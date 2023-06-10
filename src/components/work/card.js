import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useRef, useState} from "react";

export const Card = ({data}) => {

    const [clickCounter, setClickCounter] = useState(0)
    const [centerPosition, setCenterPosition] = useState(null)
    const cardRef = useRef(null)
    const tools = data.tools
    const description = data.description
    const setClickedState = () => {
        setClickCounter(current => current + 1)
    }

    useEffect(()=>{
        const card = cardRef.current
        const parent = card.parentElement
        const getElementCenterPosition = () => {
            const rect = card.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width/2;
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
                <div className={'description-container'}>
                    <h1>{data.title}</h1>
                    <div className={"description"} >
                        <div className={"paragraph"}>
                            {description.brief}
                        </div>
                        <div>
                            <ul className={'list'}>
                                {Object.values(tools).map((tool)=>{
                                    return(
                                        <li> {tool}</li>
                                    )
                                })}
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
            <ExpandedCard coords={centerPosition} clickCounter={clickCounter} setClickedState={setClickedState} projectData={data}></ExpandedCard>

        </div>
    )
}

export default Card
