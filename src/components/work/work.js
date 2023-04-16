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

/*
TODO: figure out how to pass ExpandedCard information
the issue with setstyle is that its setting every card container. so it wont work. i need it to set the element iteslf within that first map
 */
