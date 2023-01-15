import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useState} from "react";

export const Card = (props) =>{

    const [isClicked, setIsClicked] = useState(false)

    const minimizeCard = (bool) =>{
        setIsClicked(bool)
    }

    useEffect(() => {
            console.log(isClicked)
        },
        [isClicked])

    return(
        <>
            <div className={`card-container`} >
                <div className={'card'} onClick={()=>setIsClicked(true)} />
                <div className={"description"}>Cat</div>
                {isClicked ? <ExpandedCard callback = {minimizeCard} isClicked={isClicked} ></ExpandedCard>: ''}
            </div>
        </>

    )
}

export default Card