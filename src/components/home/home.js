import "./home.scss"
import {useEffect, useRef, useState} from "react";
import Work from "../work/work.js";
import Contact from "../contact/contact";

const Home = () => {

    const workRef = useRef(null)
    const contactRef = useRef(null)

    const [isWork,setIsWork] = useState(false)
    const [isContact,setIsContact] = useState(false)

    useEffect(()=>{
        if( isWork){
            workRef.current.scrollIntoView({behavior: 'smooth'})
            setIsWork(false)
        }
        if(isContact){
            contactRef.current.scrollIntoView({behavior: 'smooth'})
        setIsContact(false)
        }
},[isWork,isContact])
    return (

        <div className={'website-container'}>
        <div className={"home-container"}>
            <div className={"home"}>
                <div className={"name-box"}>
                    Karim Mahfouz
                    <br/>
                    Software Developer
                </div>
                <div className={"description-box"}>
                    Hello there
                </div>
            </div>
            <div className={"button-box"}>
                <div className={"link hover underline"} onClick={() => {setIsWork(true)}}>Work</div>
                <div className={"link hover underline"} onClick={() => {setIsContact(true)}}>Contact me</div>
                <div className={"link hover underline"} onClick={() => {setIsContact(true)}}>Resume</div>
            </div>
        </div>
            <div className={"work-container"} ref={workRef}>
                <Work/>
            </div>
            <div className={"contact-container"} ref={contactRef}>
                <Contact/>
            </div>
        </div>
    )
}

export default Home