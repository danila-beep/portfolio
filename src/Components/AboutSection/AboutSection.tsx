import s from "./aboutSection.module.css";
import Button from "../../shared/Button";
import Heading from "../../shared/Heading";

const AboutSection = () => {
  return (
    <section className={s.aboutWrapper} id={"about"}>
      <div className={s.aboutContainer}>
        <Heading>
          About <span>Me</span>
        </Heading>

        <div className={s.aboutRow}>
          <div className={s.photoColumn}>
            <div className={s.aboutImgWrapper}>
              <div className={s.aboutPhoto}></div>
              <div className={s.circleSpin}></div>
            </div>
          </div>

          <div className={s.contentColumn}>
            <div className={s.aboutContent}>
              <h3>Front-End Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                ducimus expedita illum laborum, laudantium maxime minus odit
                praesentium qui quo quod unde? Alias consectetur facere itaque
                natus nulla possimus veritatis. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Autem ducimus expedita illum
                laborum, laudantium maxime minus odit praesentium qui quo quod
                unde? Alias consectetur facere itaque natus nulla possimus
                veritatis.
              </p>
            </div>
          </div>
        </div>
        <div className={s.btnBox}>
          <Button title={"Read More"} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
