import "./home.scss"
import {useNavigate} from "react-router-dom";

const Home = () => {
    const nav = useNavigate()
    return (
        <div className={"home-wrapper"}>
            <div className={"home"}>
                <div className={"name-box"}>
                    Karim Mahfouz
                </div>
                <div className={"description-box"}>
                    Hello there
                </div>
            </div>
            <div className={"button-box"}>
                <div className={"work-link"} onClick={() => {
                    nav("/work")
                }}>Work
                </div>
                <div className={"contact-link"} onClick={() => {
                    nav("/contact")
                }}>Contact me
                </div>
            </div>
        </div>
    )
}

export default Home