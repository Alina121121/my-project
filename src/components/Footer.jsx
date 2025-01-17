import s from "./Footer.module.css"
import footerImg from "../images/pic2.jpg"
import clock from "../images/ic-clock.png"
import users from "../images/ic-users.png"
import rocket from "../images/ic-rocket.png"
import cup from "../images/ic-cup.png"

const Footer = () => {
    return(
     <div className={s.footer}>
        <div className={s.footerImg}>
        <img src={footerImg} alt="footer"></img>
        </div>
        <div className={s.text}>
        <h1>SOME FUN FACTS</h1>
        </div>
        <div className={s.factsContainer}>
        <div className={s.clock}>
                    <img src={clock} alt="clock" />
                    <h3>3200</h3> 
                    <p>HOURS OF WORK</p>
                </div>
                <div className={s.users}>
                    <img src={users} alt="users" />
                    <h3>120</h3> 
                    <p>SATISFIED CLINETS</p>
                </div>
                <div  className={s.rocket}>
                    <img src={rocket} alt="rocket" />
                    <h3>360</h3> 
                    <p>PROJECTS DELIVERED</p>
                </div>
                <div  className={s.cup}>
                    <img src={cup} alt="cup" />
                    <h3>42</h3> 
                    <p>AWARDS WON</p>
                </div>
                </div>
        </div>
    );
 };
 export default Footer;