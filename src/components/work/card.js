import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useRef, useState} from "react";

export const Card = ({data}) => {

    const [clickCounter, setClickCounter] = useState(0)
    const [centerPosition, setCenterPosition] = useState(null)
    const [backgroundImg, setBackgroundImg] = useState('')

    const cardRef = useRef(null)
    const tools = data.tools
    const description = data.description
    const setClickedState = () => {
        setClickCounter(current => current + 1)
    }
    useEffect(() => {
        if (data.images) {
            setBackgroundImg(data.images[0])
        }
        else{
            setBackgroundImg('')
        }
    }, [data.images])
    useEffect(() => {
        const card = cardRef.current
        const getElementCenterPosition = () => {
            const rect = card.getBoundingClientRect();
            const elementCenterX = rect.left + rect.width / 2;
            const elementCenterY = rect.height / 2;
            return {x: elementCenterX, y: elementCenterY};
        };
        const position = getElementCenterPosition();
        setCenterPosition(position)
    }, [cardRef, clickCounter])


    return (
        <div className="card-container">
            <div className={"card-container-background"}></div>
            <div className={"card-content"}>
                <div className={"card hover"} ref={cardRef} onClick={() => {
                    setClickedState()
                }}>
                    <img src={backgroundImg} alt={"Project Image"}/>
                    {data.images.length < 1 ? <h1>Coming Soon</h1> : ""}</div>
                <div className={'description-container'}>
                    <h1>{data.title}</h1>
                    <div className={"description"}>
                        <div className={"paragraph"}>
                            {description.brief}
                        </div>
                        <div>
                            <ul className={'list'}>
                                {Object.values(tools).map((tool, index) => {
                                    return (
                                        <li key={index}> {tool}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
              description.long &&  <ExpandedCard coords={centerPosition} clickCounter={clickCounter} setClickedState={setClickedState}
                              projectData={data}></ExpandedCard>
            }


        </div>
    )
}

export default Card
