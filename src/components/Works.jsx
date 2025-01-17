import s from "./Works.module.css"
import branding from "../images/photo-1.png"
import design from "../images/photo-2.jpg"
import photograpthy from "../images/photo-3.jpg"

const Works = () => {
    return(
     <div className={s.works}>
        <h1>WORKS</h1>
        <p className={s.worksP}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eque ipsa quae ab illo inventore</p>
        <div className={s.cardsContainer}>
        <div className={s.branding}>
          <img src={branding} alt="BRANDING" className={s.cardImage} />
          <h3 className={s.cardTitle}>BRANDING</h3>
          <p className={s.cardDescriptionBranding}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <button className={s.cardButtonBranding}>READ MORE &gt;&gt;</button>
        </div>
        <div className={s.design}>
          <img src={design} alt="LOGO DESIGN" className={s.cardImage} />
          <h3 className={s.cardTitle}>LOGO DESIGN</h3>
          <p className={s.cardDescriptionDesign}>Lorem ipsum dolor sit amet</p>
          <button className={s.cardButton}>READ MORE &gt;&gt;</button>
        </div>
        <div className={s.photograpthy}>
          <img src={photograpthy} alt="PHOTOGRAPHY" className={s.cardImage} />
          <h3 className={s.cardTitle}>PHOTOGRAPHY</h3>
          <p className={s.cardDescriptionPhoto}>Lorem ipsum dolor sit amet</p>
          <button className={s.cardButton}>READ MORE &gt;&gt;</button>
        </div>
    </div>
     </div>
    )
 }
 export default Works;