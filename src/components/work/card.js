import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useState} from "react";

export const Card = () =>{

    const [isClicked, setIsClicked] = useState(false)

    const minimizeCard = (bool) =>{
        setIsClicked(bool)
    }

    useEffect(() => {
            console.log(isClicked)
        },
        [isClicked])

    return(
        <div className="card-container">
            {/*<div className={"card-container-background"} ></div>*/}
            <div className={"card-content"} >
                <div className={isClicked ? "card expand-card" : "card"} onClick={()=>setIsClicked(true)} />
                <div className={"description"}>Brief description
                <ul>
                    <li>Language</li>
                    <li>Framework</li>
                </ul></div>
                {isClicked ? <ExpandedCard callback = {minimizeCard} isClicked={isClicked} ></ExpandedCard>: ''}
            </div>
        </div>

    )
}

export default Card