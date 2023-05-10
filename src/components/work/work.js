import "./work.scss"
import {Card} from './card'
const Work = () => {


    const cardArray = [1, 2, 3, 4]

    return (
        <div className={"work"}>
            <p> Projects</p>
            {cardArray.map((element,index) => {
                return (
                   <Card index={index}></Card>
                )
            })}
        </div>
    )
}
export default Work