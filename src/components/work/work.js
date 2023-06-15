import "./work.scss"
import {Card} from './card'
import data from '../../project-info.json'
const Work = () => {


//TODO: Orchid,rob boss
    return (
        <div className={"work"}>
            <p> Projects</p>
            {data.map((element,index) => {
                return (
                   <Card index={index} data={element} key={index}></Card>
                )
            })}
        </div>
    )
}
export default Work