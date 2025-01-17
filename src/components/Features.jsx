import s from "./Features.module.css"
import list from "../images/ic-leaf.png";
import pencil from "../images/ic-penсil.png"; 
import speack from "../images/ic-speack.png";
import SideBar from './SideBar';
import { Link } from "react-router-dom";

const Features = () => {
    return(
     <div className={s.features}>
              <SideBar />
        <div className={s.nav}>
        <h1>FEATURES</h1>
        </div>
        <div className={s.featuresRow}>
        <div className={s.branding}>
            <div className={s.brandingRow}>
            <Link><img src={list} alt="branding"></img></Link>
            <Link><h5>Branding</h5></Link>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        <div className={s.development}>
            <div className={s.developmentRow}>
            <Link><img src={pencil} alt="development"></img></Link>
            <Link><h5>Development</h5></Link>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        <div className={s.consulting}>
        <div className={s.consultingRow}>
            <Link><img src={speack} alt="consulting"></img></Link>
            <Link><h5>Consulting</h5></Link>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        </div>
     </div>
    )
 }
 export default Features;