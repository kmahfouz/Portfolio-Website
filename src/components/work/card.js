import './card.scss'
import {ExpandedCard} from "./expanded-card";
import {useEffect, useState} from "react";

export const Card = () => {

    const [clickCounter, setClickCounter] = useState(0)
    const [isMinimized, setIsMinimized] = useState(false)

    const setClickedState = () => {
        setClickCounter(clickCounter + 1)
    }
    const setMinimizedState = (bool) => {
        setIsMinimized(bool)
    }

    let mounted = false
    useEffect(() => {
            if (mounted === true) {
                console.log("what")
                if (!(clickCounter === 0) && clickCounter % 2 === 0) {
                    setIsMinimized(true)
                }
            } else {
                mounted = true
            }
        },
        [clickCounter])

//should be minimized after it is clicked for teh second time

    const setContent = () => {

        console.log('clicked ' + clickCounter)
        console.log('minimized ' + isMinimized)

        if (clickCounter === 0){
            return <div></div>

        } else if(clickCounter % 2 === 0 && isMinimized) {
            return <div className={'expanded-card-wrapper shrink'}></div>
        }
        else{
            return (<div className={'expanded-card-wrapper expand'}>
                <ExpandedCard minimize={setMinimizedState} click={setClickedState}></ExpandedCard>
            </div>)

        }
    }

    return (
        <div className="card-container">
            <div className={"card-container-background"}></div>
            <div className={"card-content"}>
                <div className={"card hover"} onClick={() => {setClickedState()
                }}/>
                {
                    setContent()
                }
                <div className={"description"}>Brief description
                    <ul>
                        <li>Language</li>
                        <li>Framework</li>
                    </ul></div>
            </div>


        </div>
    )
}

export default Card