import "./home.scss"
import {useEffect, useRef, useState} from "react";
import Work from "../work/work.js";
import Contact from "../contact/contact";
import resume from '../../Karim Mahfouz Resume.pdf'
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
                    <p>Software Engineer</p>
                </div>
                <div className={"description-box"}>
                    Bringing Ideas to Life Through Code
                </div>
            </div>
            <div className={"button-box"}>
                <div className={"link hover underline"} onClick={() => {setIsWork(true)}}>Work</div>
                <div className={"link hover underline"} onClick={() => {setIsContact(true)}}>Contact me</div>
                <a href={resume} download>
                    <div className={"link hover underline"} onClick={() => {setIsContact(true)}}>Resume</div>
                </a>
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