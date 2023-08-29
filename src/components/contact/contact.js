import "./contact.scss"

const Contact = () => {
    return (
        <div className={"contact"}>
            <div className={'contact-content'}>
                <a href='mailto:karimmahfouznd@gmail.com'>
                    <div className={'link hover underline'}><h1>Email: karimmahfouznd@gmail.com </h1></div>
                </a>
                <a href={'tel:+14638671088'}>
                    <div className={'link hover underline'}><h1> Phone: (463) 867 1088 </h1></div>
                </a>
            </div>
        </div>
    )
}
export default Contact