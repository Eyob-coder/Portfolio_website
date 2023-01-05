import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";
import OverlapMob from "../components/OverlapMob";
import PortalPopup from "../components/PortalPopup";
import "./Mobile.css";

const Mobile = () => {
  const [isOverlapMobOpen, setOverlapMobOpen] = useState(false);
  const [isOverlapMob1Open, setOverlapMob1Open] = useState(false);
  const [isOverlapMob2Open, setOverlapMob2Open] = useState(false);
  const [isOverlapMob3Open, setOverlapMob3Open] = useState(false);
  const [isOverlapMob4Open, setOverlapMob4Open] = useState(false);
  const [isOverlapMob5Open, setOverlapMob5Open] = useState(false);
  const [isOverlapMob6Open, setOverlapMob6Open] = useState(false);
  const [isOverlapMob7Open, setOverlapMob7Open] = useState(false);
  const [isOverlapMob8Open, setOverlapMob8Open] = useState(false);

  const openOverlapMob = useCallback(() => {
    setOverlapMobOpen(true);
  }, []);

  const closeOverlapMob = useCallback(() => {
    setOverlapMobOpen(false);
  }, []);

  const openOverlapMob1 = useCallback(() => {
    setOverlapMob1Open(true);
  }, []);

  const closeOverlapMob1 = useCallback(() => {
    setOverlapMob1Open(false);
  }, []);

  const openOverlapMob2 = useCallback(() => {
    setOverlapMob2Open(true);
  }, []);

  const closeOverlapMob2 = useCallback(() => {
    setOverlapMob2Open(false);
  }, []);

  const openOverlapMob3 = useCallback(() => {
    setOverlapMob3Open(true);
  }, []);

  const closeOverlapMob3 = useCallback(() => {
    setOverlapMob3Open(false);
  }, []);

  const openOverlapMob4 = useCallback(() => {
    setOverlapMob4Open(true);
  }, []);

  const closeOverlapMob4 = useCallback(() => {
    setOverlapMob4Open(false);
  }, []);

  const openOverlapMob5 = useCallback(() => {
    setOverlapMob5Open(true);
  }, []);

  const closeOverlapMob5 = useCallback(() => {
    setOverlapMob5Open(false);
  }, []);

  const openOverlapMob6 = useCallback(() => {
    setOverlapMob6Open(true);
  }, []);

  const closeOverlapMob6 = useCallback(() => {
    setOverlapMob6Open(false);
  }, []);

  const openOverlapMob7 = useCallback(() => {
    setOverlapMob7Open(true);
  }, []);

  const closeOverlapMob7 = useCallback(() => {
    setOverlapMob7Open(false);
  }, []);

  const openOverlapMob8 = useCallback(() => {
    setOverlapMob8Open(true);
  }, []);

  const closeOverlapMob8 = useCallback(() => {
    setOverlapMob8Open(false);
  }, []);

  return (
    <>
      <div className="mobile">
        <img className="hepha-hero-icon" alt="" src="../hephahero@2x.png" />
        <img className="logo-icon" alt="" src="../logo@2x.png" />
        <img className="ham-icon" alt="" src="../ham.svg" />
        <div className="i-am-a">I AM A CREATIVE</div>
        <b className="designer">DESIGNER</b>
        <b className="programmer">PROGRAMMER</b>
        <div className="hero-interest-peak">
          Music, Art, Friendship ...some of the places people find peace and
          serenity in.
        </div>
        <div className="hero-more">
          I a designer find that a purpose can be the most peaceful place anyone
          can reside in. My purposes are designing and programming till i see my
          products change someone’s life and maybe someday the world
        </div>
        <img className="info-athena-icon" alt="" src="../infoathena@2x.png" />
        <img className="info-img-icon" alt="" src="../infoimg@2x.png" />
        <div className="intro-greet">
          <span className="hello-i-am">HELLO, I AM</span>
          <b className="eyob">
            <span className="span">{` `}</span>
            <span>EYOB,</span>
          </b>
        </div>
        <div className="intro-name">EYOB BERHANEMESKEL</div>
        <img className="div1-3-icon" alt="" src="../div1-3@2x.png" />
        <div className="intro-detail">
          <p className="i-design-revolutionary-designs">
            <span className="i-design-revolutionary">
              I DESIGN REVOLUTIONARY DESIGNS AND REPUTABLE SOFTWARES THAT MAKE
              AN IMPACT ON BOTH THE CLIENT AND THE DESIGN COMMUNITY.
            </span>
          </p>
          <p className="i-design-revolutionary-designs">
            <span className="i-design-revolutionary">
              I BELIEVE THAT THE CREATIONS THAT MAKE THE GREATEST RIPPLE EFFECT
              THROUGHOUT HISTORY ARE ONES’ THOUGHT TO BE EITHER TO SILLY OR JUST
              IMPOSSIBLE.
            </span>
          </p>
          <p className="i-design-revolutionary-designs">
            <span className="i-design-revolutionary">
              AS A DESIGNER AND A SOFTWARE DEVELOPER, I PLAN TO TACKLE THE
              BIGGEST AND SOMEHOW IMPOSSIBLE SEEMING PROBLEMS KNOWN TO THE
              WORLD.
            </span>
          </p>
          <p className="and-i-shall">
            <span className="and-i-shall1">
              <span>AND I SHALL</span>
              <span className="span1">.</span>
            </span>
          </p>
        </div>
        <div className="box3-pro" />
        <div className="box2-pro" />
        <div className="box1-pro" />
        <div className="from-cal">from CAL-ARTS</div>
        <div className="from-meta">from META</div>
        <div className="cer-cal">Graphic Design Certification</div>
        <div className="cer-meta">Front-end Web Development Certification</div>
        <div className="pro1">A logo for a tech company,</div>
        <div className="pro3">
          A logo design for a tech company that specializes on space exploration
        </div>
        <div className="pro5">{`A detailed variation of a branding project for a tech company `}</div>
        <div className="pro2">A greek mythology inspired personal project</div>
        <div className="pro4">
          A branding project for an asian themed noodle restaurant
        </div>
        <div className="pro6">
          A minimalistic variation of the project on the left for the same tech
          company
        </div>
        <div className="certificates">CERTIFICATES</div>
        <div className="certificates1">CERTIFICATES</div>
        <div className="div3">
          <img className="div1-4-icon" alt="" src="../div1-4@2x.png" />
          <img className="div1-1-icon" alt="" src="../div1-1@2x.png" />
        </div>
        <div className="div2">
          <img className="div1-4-icon1" alt="" src="../div1-41@2x.png" />
          <img className="div1-1-icon1" alt="" src="../div1-11@2x.png" />
        </div>
        <div className="div1">
          <img className="div1-4-icon2" alt="" src="../div1-42@2x.png" />
          <img className="div1-1-icon2" alt="" src="../div1-12@2x.png" />
        </div>
        <div className="about-me">ABOUT ME</div>
        <div className="certificates2">CERTIFICATES</div>
        <div className="certificates3">CERTIFICATES</div>
        <div className="certificates4">CERTIFICATES</div>
        <div className="certificates5">CERTIFICATES</div>
        <div className="certificates6">CERTIFICATES</div>
        <div className="projects">PROJECTS</div>
        <div className="projects1">PROJECTS</div>
        <div className="about-me1">ABOUT ME</div>
        <div className="about-me2">ABOUT ME</div>
        <div className="about-me3">ABOUT ME</div>
        <div className="about-me4">ABOUT ME</div>
        <div className="projects2">PROJECTS</div>
        <div className="projects3">PROJECTS</div>
        <div className="projects4">PROJECTS</div>
        <div className="projects5">PROJECTS</div>
        <img className="cer1-icon" alt="" src="../cer1@2x.png" />
        <img className="cer3-icon" alt="" src="../cer3@2x.png" />
        <img className="cer6-icon" alt="" src="../cer6@2x.png" />
        <img className="cer2-icon" alt="" src="../cer2@2x.png" />
        <div className="cer7" />
        <img className="cer5-icon" alt="" src="../cer5@2x.png" />
        <img className="cer4-icon" alt="" src="../cer4@2x.png" />
        <img className="pr-1-1-icon" alt="" src="../pr11@2x.png" />
        <img className="pr-1-2-icon" alt="" src="../pr12@2x.png" />
        <img className="pr-2-1-icon" alt="" src="../pr21@2x.png" />
        <img className="pr-2-2-icon" alt="" src="../pr22@2x.png" />
        <img className="pr-2-3-icon" alt="" src="../pr23@2x.png" />
        <img className="pr-1-3-icon" alt="" src="../pr13@2x.png" />
        <div className="about-me5">ABOUT ME</div>
        <div className="about-box1" />
        <img className="div1-3-icon1" alt="" src="../div1-31@2x.png" />
        <div className="about-box11" />
        <b className="who-is-eyob">WHO IS EYOB?</b>
        <img className="eth-king-icon" alt="" src="../ethking@2x.png" />
        <div className="a-little-bit">A little bit about me</div>
        <div className="me">
          A Male Software engineer and Graphic designer based in ETHIOPIA (more
          about that later on). Living in the capital city Addis Ababa making me
          more exposed to the society and foreign influence making me a social
          and well informed person. I am proficient and certified Graphic
          designer, experienced in UI/UX design, a pretty good web developer and
          soon to graduate from ALX program with a software engineering
          certificate.
        </div>
        <img className="eth-queen-icon" alt="" src="../ethqueen@2x.png" />
        <b className="ethiopia">ETHIOPIA</b>
        <div className="mother-land">Mother Land</div>
        <div className="about-eth">
          <p className="i-design-revolutionary-designs">
            <span className="i-come-from">
              I come from a very culturally rich country for we are the only
              people who didn’t get colonized for we fought with such courage
              and bravery that we didn’t even require an outsider’s help to
              defend ourselves.
            </span>
          </p>
          <p className="i-design-revolutionary-designs">
            <span className="i-come-from"> “</span>
            <b className="gofere">GOFERE</b>
            <span className="i-come-from">
              ” is our signature haircut for men (mostly) which is a combed up
              hair on all sides resembling that of a mane of an Alpha male lion,
              symbolizing and reminding us of the lions we once were and the
              lions we are meant to be: thus giving us unseen and unheard-of
              confidence boost and sense of power.
            </span>
          </p>
          <p className="shuruba-is-the-signature-hair">
            <span className="i-come-from"> “</span>
            <b className="gofere">SHURUBA</b>
            <span className="is-the-signature">
              ” is the signature hair style for the women in our country. which
              basically is a continuous and carefully intertwined groups of hair
              signifying how the women should unite the society.
            </span>
          </p>
        </div>
        <div className="meet">LET’S MEET IN ETHIOPIA</div>
        <b className="feedback">What are your thought on my website?</b>
        <TextField
          className="comment"
          sx={{ width: 274 }}
          color="primary"
          variant="outlined"
          multiline
          label="Label"
          placeholder="Textarea placeholder"
          margin="none"
        />
        <BsButton className="feedback-submit" variant="outline-primary">
          submit
        </BsButton>
        <div className="cp">
          <div className="copyright">Copyright</div>
          <img
            className="ricopyright-fill-icon"
            alt=""
            src="../ricopyrightfill.svg"
          />
        </div>
        <div className="tm">
          <div className="jobera-designs">Jobera_designs</div>
          <img className="mditm-icon" alt="" src="../mditm.svg" />
        </div>
        <a
          className="instagram"
          href="https://www.instagram.com/jobera_z_abyssinian/"
          target="_blank"
        >
          <img className="vector-icon" alt="" src="../vector.svg" />
        </a>
        <a
          className="facebook"
          href="https://www.facebook.com/robera.berhanemeskel"
          target="_blank"
        >
          <img className="vector-icon1" alt="" src="../vector1.svg" />
        </a>
        <a
          className="twitter"
          href="https://twitter.com/EyobBerhanemes1"
          target="_blank"
        >
          <img className="vector-icon" alt="" src="../group.svg" />
        </a>
        <a className="telegram" href="Telegram/@J0bera" target="_blank">
          <img className="group-icon1" alt="" src="../group1.svg" />
        </a>
        <div className="regarding1">FOR ANYTHING REGARDING:</div>
        <div className="software" onClick={openOverlapMob}>
          <div className="software-child" />
          <b className="software-dev">SOFTWARE DEV.</b>
        </div>
        <div className="front" onClick={openOverlapMob1}>
          <div className="software-child" />
          <b className="software-dev">FRONT-END DEV.</b>
        </div>
        <div className="brand" onClick={openOverlapMob2}>
          <div className="software-child" />
          <b className="software-dev">BRANDING</b>
        </div>
        <div className="app" onClick={openOverlapMob3}>
          <div className="software-child" />
          <b className="software-dev">APP DEVELOPMENT</b>
        </div>
        <div className="logo" onClick={openOverlapMob4}>
          <div className="software-child" />
          <b className="software-dev">LOGO DESIGN</b>
        </div>
        <div className="consult" onClick={openOverlapMob5}>
          <div className="software-child" />
          <b className="software-dev">CONSULTING</b>
        </div>
        <div className="web" onClick={openOverlapMob6}>
          <div className="software-child" />
          <b className="software-dev">WEB-SITE DEV</b>
        </div>
        <div className="banner" onClick={openOverlapMob7}>
          <div className="software-child" />
          <b className="software-dev">BANNER DESIGN</b>
        </div>
        <div className="drinks" onClick={openOverlapMob8}>
          <div className="software-child" />
          <b className="software-dev">DRINKS</b>
        </div>
        <div className="connect">
          <p className="i-design-revolutionary-designs">LET’S</p>
          <p className="shuruba-is-the-signature-hair">CONNECT</p>
        </div>
        <img className="logo-icon1" alt="" src="../logo1@2x.png" />
        <div className="hero-interest-peak1">JOBERA DESIGNS</div>
      </div>
      {isOverlapMobOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob}
        >
          <OverlapMob onClose={closeOverlapMob} />
        </PortalPopup>
      )}
      {isOverlapMob1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob1}
        >
          <OverlapMob onClose={closeOverlapMob1} />
        </PortalPopup>
      )}
      {isOverlapMob2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob2}
        >
          <OverlapMob onClose={closeOverlapMob2} />
        </PortalPopup>
      )}
      {isOverlapMob3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob3}
        >
          <OverlapMob onClose={closeOverlapMob3} />
        </PortalPopup>
      )}
      {isOverlapMob4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob4}
        >
          <OverlapMob onClose={closeOverlapMob4} />
        </PortalPopup>
      )}
      {isOverlapMob5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob5}
        >
          <OverlapMob onClose={closeOverlapMob5} />
        </PortalPopup>
      )}
      {isOverlapMob6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob6}
        >
          <OverlapMob onClose={closeOverlapMob6} />
        </PortalPopup>
      )}
      {isOverlapMob7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob7}
        >
          <OverlapMob onClose={closeOverlapMob7} />
        </PortalPopup>
      )}
      {isOverlapMob8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlapMob8}
        >
          <OverlapMob onClose={closeOverlapMob8} />
        </PortalPopup>
      )}
    </>
  );
};

export default Mobile;
