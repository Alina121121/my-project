import s from "./SecondFooter.module.css"
import logo from "../images/logo.png"

const SecondFooter = () => {
    return (
        <div className={s.SecondFooter}>
            <img src={logo} alt="Brandi"></img>
            <h5>© 2014 Brandi. All Rights Reserved.</h5>
        </div>
    )
}
export default SecondFooter;