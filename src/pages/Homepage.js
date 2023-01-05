import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";
import OverlayDesk from "../components/OverlayDesk";
import PortalPopup from "../components/PortalPopup";
import "./Homepage.css";

const Homepage = () => {
  const [isOverlayDeskOpen, setOverlayDeskOpen] = useState(false);
  const [isOverlayDesk1Open, setOverlayDesk1Open] = useState(false);
  const [isOverlayDesk2Open, setOverlayDesk2Open] = useState(false);
  const [isOverlayDesk3Open, setOverlayDesk3Open] = useState(false);
  const [isOverlayDesk4Open, setOverlayDesk4Open] = useState(false);
  const [isOverlayDesk5Open, setOverlayDesk5Open] = useState(false);
  const [isOverlayDesk6Open, setOverlayDesk6Open] = useState(false);
  const [isOverlayDesk7Open, setOverlayDesk7Open] = useState(false);
  const [isOverlayDesk8Open, setOverlayDesk8Open] = useState(false);

  const openOverlayDesk = useCallback(() => {
    setOverlayDeskOpen(true);
  }, []);

  const closeOverlayDesk = useCallback(() => {
    setOverlayDeskOpen(false);
  }, []);

  const openOverlayDesk1 = useCallback(() => {
    setOverlayDesk1Open(true);
  }, []);

  const closeOverlayDesk1 = useCallback(() => {
    setOverlayDesk1Open(false);
  }, []);

  const openOverlayDesk2 = useCallback(() => {
    setOverlayDesk2Open(true);
  }, []);

  const closeOverlayDesk2 = useCallback(() => {
    setOverlayDesk2Open(false);
  }, []);

  const openOverlayDesk3 = useCallback(() => {
    setOverlayDesk3Open(true);
  }, []);

  const closeOverlayDesk3 = useCallback(() => {
    setOverlayDesk3Open(false);
  }, []);

  const openOverlayDesk4 = useCallback(() => {
    setOverlayDesk4Open(true);
  }, []);

  const closeOverlayDesk4 = useCallback(() => {
    setOverlayDesk4Open(false);
  }, []);

  const openOverlayDesk5 = useCallback(() => {
    setOverlayDesk5Open(true);
  }, []);

  const closeOverlayDesk5 = useCallback(() => {
    setOverlayDesk5Open(false);
  }, []);

  const openOverlayDesk6 = useCallback(() => {
    setOverlayDesk6Open(true);
  }, []);

  const closeOverlayDesk6 = useCallback(() => {
    setOverlayDesk6Open(false);
  }, []);

  const openOverlayDesk7 = useCallback(() => {
    setOverlayDesk7Open(true);
  }, []);

  const closeOverlayDesk7 = useCallback(() => {
    setOverlayDesk7Open(false);
  }, []);

  const openOverlayDesk8 = useCallback(() => {
    setOverlayDesk8Open(true);
  }, []);

  const closeOverlayDesk8 = useCallback(() => {
    setOverlayDesk8Open(false);
  }, []);

  const onHeroContactContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerImgImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aBOUTMEText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='infoImgImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pROJECTSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCERTIFICATIONSTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='cERTIFICATESText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="about-box2" />
        <div className="about-box12" />
        <img className="eth-king-icon1" alt="" src="../ethking1@2x.png" Loading='lazy' />
        <img className="eth-queen-icon1" alt="" src="../ethqueen1@2x.png" Loading='lazy' />
        <b className="who-is-eyob1">WHO IS EYOB?</b>
        <b className="ethiopia1">ETHIOPIA</b>
        <div className="a-little-bit1">A little bit about me</div>
        <div className="mother-land1">Mother Land</div>
        <div className="me1">
          A Male Software engineer and Graphic designer based in ETHIOPIA (more
          about that later on). Living in the capital city Addis Ababa making me
          more exposed to the society and foreign influence making me a social
          and well informed person. I am proficient and certified Graphic
          designer, experienced in UI/UX design, a pretty good web developer and
          soon to graduate from ALX program with a software engineering
          certificate.
        </div>
        <div className="about-eth1">
          <p className="i-come-from-a-very-culturally1">
            <span className="i-come-from1">
              I come from a very culturally rich country for we are the only
              people who didn’t get colonized for we fought with such courage
              and bravery that we didn’t even require an outsider’s help to
              defend ourselves.
            </span>
          </p>
          <p className="i-come-from-a-very-culturally1">
            <span className="i-come-from1"> “</span>
            <b className="gofere1">GOFERE</b>
            <span className="i-come-from1">
              ” is our signature haircut for men (mostly) which is a combed up
              hair on all sides resembling that of a mane of an Alpha male lion,
              symbolizing and reminding us of the lions we once were and the
              lions we are meant to be: thus giving us unseen and unheard-of
              confidence boost and sense of power.
            </span>
          </p>
          <p className="shuruba-is-the-signature-hair1">
            <span className="i-come-from1"> “</span>
            <b className="gofere1">SHURUBA</b>
            <span className="is-the-signature1">
              ” is the signature hair style for the women in our country. which
              basically is a continuous and carefully intertwined groups of hair
              signifying how the women should unite the society.
            </span>
          </p>
        </div>
        <div className="meet1">LET’S MEET IN ETHIOPIA</div>
        <img className="hepha-hero-icon1" alt="" src="../hephahero1@2x.png" Loading='lazy' />
        <b className="designer1">DESIGNER</b>
        <div className="i-am-a1">I AM A CREATIVE</div>
        <b className="programmer1">PROGRAMMER</b>
        <b className="b">{`&`}</b>
        <div className="hero-interest-peak2">
          <span>Music, Art, Friendship</span>
          <span className="a-designer-find"> .</span>
          <span className="some-of-the">
            ..some of the places people find peace and serenity in.
          </span>
        </div>
        <div className="hero-interest-peak3">JOBERA DESIGNS</div>
        <div className="intro-greet1">
          <span className="hello-i-am1">HELLO, I AM</span>
          <b className="eyob1">
            <span className="span7">{` `}</span>
            <span>EYOB</span>
          </b>
        </div>
        <div className="div31">
          <img className="div1-4-icon3" alt="" src="../div1-43@2x.png" Loading='lazy' />
          <img className="div1-1-icon3" alt="" src="../div1-43@2x.png" Loading='lazy' />
        </div>
        <div className="div21">
          <img className="div1-4-icon4" alt="" src="../div1-44@2x.png" Loading='lazy' />
          <img className="div1-1-icon4" alt="" src="../div1-44@2x.png" Loading='lazy' />
        </div>
        <div className="div11">
          <img className="div1-4-icon3" alt="" src="../div1-43@2x.png" Loading='lazy' />
          <img className="div1-1-icon3" alt="" src="../div1-43@2x.png" Loading='lazy' />
        </div>
        <div className="certificates7" data-scroll-to="cERTIFICATESText">
          CERTIFICATES
        </div>
        <div className="projects6" data-scroll-to="pROJECTSText">
          PROJECTS
        </div>
        <div className="about-me6" data-scroll-to="aBOUTMEText">
          ABOUT ME
        </div>
        <div className="intro-name1">EYOB BERHANEMESKEL</div>
        <b className="comma">,</b>
        <div className="intro-detail1">
          <p className="i-come-from-a-very-culturally1">
            <span>
              I DESIGN REVOLUTIONARY DESIGNS AND REPUTABLE SOFTWARES THAT MAKE
              AN IMPACT ON BOTH THE CLIENT AND THE DESIGN COMMUNITY.
            </span>
          </p>
          <p className="i-come-from-a-very-culturally1">
            <span>
              I BELIEVE THAT THE CREATIONS THAT MAKE THE GREATEST RIPPLE EFFECT
              THROUGHOUT HISTORY ARE ONES’ THOUGHT TO BE EITHER TO SILLY OR JUST
              IMPOSSIBLE.
            </span>
          </p>
          <p className="i-come-from-a-very-culturally1">
            <span>
              AS A DESIGNER AND A SOFTWARE DEVELOPER, I PLAN TO TACKLE THE
              BIGGEST AND SOMEHOW IMPOSSIBLE SEEMING PROBLEMS KNOWN TO THE
              WORLD.
            </span>
          </p>
          <p className="and-i-shall2">
            <span>AND I SHALL.</span>
          </p>
        </div>
        <img className="cer1-icon1" alt="" src="../cer11@2x.png" Loading='lazy' />
        <img className="cer3-icon1" alt="" src="../cer31@2x.png" Loading='lazy' />
        <img className="cer6-icon1" alt="" src="../cer61@2x.png" Loading='lazy' />
        <img className="cer2-icon1" alt="" src="../cer21@2x.png" Loading='lazy' />
        <div className="cer71" />
        <img className="cer5-icon1" alt="" src="../cer51@2x.png" Loading='lazy' />
        <img className="cer4-icon1" alt="" src="../cer41@2x.png" Loading='lazy' />
        <img className="pr-1-1-icon1" alt="" src="../pr111@2x.png" Loading='lazy' />
        <img className="pr-2-1-icon1" alt="" src="../pr211@2x.png" Loading='lazy' />
        <img className="pr-1-2-icon1" alt="" src="../pr121@2x.png" Loading='lazy' />
        <img className="pr-2-2-icon1" alt="" src="../pr221@2x.png" Loading='lazy' />
        <img className="pr-2-3-icon1" alt="" src="../pr231@2x.png" Loading='lazy' />
        <img className="pr-1-3-icon1" alt="" src="../pr131@2x.png" Loading='lazy' />
        <img
          className="footer-img-icon"
          alt=""
          src="../footerimg@2x.png"
          data-scroll-to="footerImgImage" Loading='lazy'
        />
        <img className="info-athena-icon1" alt="" src="../infoathena1@2x.png" Loading='lazy' />
        <div className="hero-more1">
          <span>I</span>
          <span className="a-designer-find">
            {" "}
            a designer find that a purpose can be the most peaceful place anyone
            can reside in. My purposes are designing and programming till i see
            my products change someone’s life and maybe someday the world
          </span>
        </div>
        <div className="connect2">
          <p className="i-come-from-a-very-culturally1">LET’S</p>
          <p className="shuruba-is-the-signature-hair1">CONNECT</p>
        </div>
        <TextField
          className="comment1"
          sx={{ width: 433 }}
          color="primary"
          variant="outlined"
          multiline
          label="Write your thoughts here"
          placeholder="So? what do you think?"
          margin="none"
        />
        <div className="regarding3">FOR ANYTHING REGARDING:</div>
        <a
          className="soft"
          href="mailto:oddjobera@gmail.com?subject=I am looking for a software developer"
          id="sware"
          onClick={openOverlayDesk}
        >
          <div className="component-1">
            <div className="component-1-child" />
            <b className="software-dev9">SOFTWARE DEV.</b>
          </div>
        </a>
        <a
          className="app1"
          href="mailto:oddjobera@gmail.com?subject=i need an app developed, let's talk."
          id="app"
          onClick={openOverlayDesk1}
        >
          <div className="component-11">
            <div className="component-1-child" />
            <b className="software-dev9">APP DEVELOPMENT</b>
          </div>
        </a>
        <a
          className="web1"
          href="mailto:oddjobera@gmail.com?subject=i am looking to get my website developed , let's talk."
          id="web"
          onClick={openOverlayDesk2}
        >
          <div className="component-12">
            <div className="component-1-child" />
            <b className="software-dev9">WEB-SITE DEV</b>
          </div>
        </a>
        <a
          className="front1"
          href="mailto:oddjobera@gmail.com?subject=i am looking for a front-end developer"
          id="fend"
          onClick={openOverlayDesk3}
        >
          <div className="component-13">
            <div className="component-1-child" />
            <b className="software-dev9">FRONT-END DEV.</b>
          </div>
        </a>
        <a
          className="logo-des"
          href="mailto:oddjobera@gmail.com?subject=i need you to create or rebrand a logo."
          id="logo"
          onClick={openOverlayDesk4}
        >
          <div className="component-14">
            <div className="component-1-child" />
            <b className="software-dev9">LOGO DESIGN</b>
          </div>
        </a>
        <a
          className="banner1"
          href="mailto:oddjobera@gmail.com?subject=i need a banner designed."
          id="banner"
          onClick={openOverlayDesk5}
        >
          <div className="component-15">
            <div className="component-1-child" />
            <b className="software-dev9">BANNER DESIGN</b>
          </div>
        </a>
        <a
          className="branding"
          href="mailto:oddjobera@gmail.com?subject=are you the one that does branding? i've got a job for you."
          id="brand"
          onClick={openOverlayDesk6}
        >
          <div className="component-16">
            <div className="component-1-child" />
            <b className="software-dev9">BRANDING</b>
          </div>
        </a>
        <a
          className="cosult"
          href="mailto:oddjobera@gmail.com?subject=i am in need of consulting."
          id="consult"
          onClick={openOverlayDesk7}
        >
          <div className="component-17">
            <div className="component-1-child" />
            <b className="software-dev9">CONSULTING</b>
          </div>
        </a>
        <a
          className="drinks1"
          href="mailto:oddjobera@gmail.com?subject=Let's get a drink sometime and unwind to each other."
          id="drink"
          onClick={openOverlayDesk8}
        >
          <div className="component-18">
            <div className="component-1-child" />
            <b className="software-dev9">DRINKS</b>
          </div>
        </a>
        <a className="telegram1" href="Telegram/@J0bera" target="_blank">
          <img className="group-icon2" alt="" src="../group2.svg" />
        </a>
        <a
          className="facebook1"
          href="https://www.facebook.com/robera.berhanemeskel"
          target="_blank"
        >
          <img className="vector-icon2" alt="" src="../vector2.svg" />
        </a>
        <a
          className="twitter1"
          href="https://twitter.com/EyobBerhanemes1"
          target="_blank"
        >
          <img className="group-icon3" alt="" src="../group3.svg" />
        </a>
        <a
          className="instagram1"
          href="https://www.instagram.com/jobera_z_abyssinian/"
          target="_blank"
        >
          <img className="group-icon3" alt="" src="../vector3.svg" />
        </a>
        <div className="footer-div" />
        <div className="copyright-parent">
          <div className="copyright1">Copyright</div>
          <img
            className="ricopyright-fill-icon1"
            alt=""
            src="../ricopyrightfill1.svg"
          />
        </div>
        <div className="tm1">
          <div className="jobera-designs1">Jobera_designs</div>
          <img className="mditm-icon1" alt="" src="../mditm1.svg" />
        </div>
        <BsButton className="feedback-submit1" variant="outline-primary">
          submit
        </BsButton>
        <b className="feedback1">What are your thought on my website?</b>
        <img
          className="info-img-icon1"
          alt=""
          src="../infoimg1@2x.png"
          data-scroll-to="infoImgImage"
        />
        <div className="hero-contact" onClick={onHeroContactContainerClick}>
          <div className="hero-contact-child" />
          <b className="contact-me">Contact me</b>
        </div>
        <img
          className="logo-icon2"
          alt=""
          src="../logo2@2x.png"
          data-scroll-to="logoImage"
        />
        <div className="about" onClick={onABOUTContainerClick}>
          <b className="about-me7">ABOUT ME</b>
        </div>
        <div className="nav">
          <div className="home-wrapper" onClick={onFrameContainerClick}>
            <b className="home">HOME</b>
          </div>
          <div className="intro-wrapper" onClick={onFrameContainer1Click}>
            <b className="home">INTRO</b>
          </div>
          <div className="projects-wrapper" onClick={onFrameContainer2Click}>
            <b className="home">PROJECTS</b>
          </div>
          <div className="certifications-wrapper">
            <b className="certifications" onClick={onCERTIFICATIONSTextClick}>
              CERTIFICATIONS
            </b>
          </div>
        </div>
      </div>
      {isOverlayDeskOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk}
        >
          <OverlayDesk onClose={closeOverlayDesk} />
        </PortalPopup>
      )}
      {isOverlayDesk1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk1}
        >
          <OverlayDesk onClose={closeOverlayDesk1} />
        </PortalPopup>
      )}
      {isOverlayDesk2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk2}
        >
          <OverlayDesk onClose={closeOverlayDesk2} />
        </PortalPopup>
      )}
      {isOverlayDesk3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk3}
        >
          <OverlayDesk onClose={closeOverlayDesk3} />
        </PortalPopup>
      )}
      {isOverlayDesk4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk4}
        >
          <OverlayDesk onClose={closeOverlayDesk4} />
        </PortalPopup>
      )}
      {isOverlayDesk5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk5}
        >
          <OverlayDesk onClose={closeOverlayDesk5} />
        </PortalPopup>
      )}
      {isOverlayDesk6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk6}
        >
          <OverlayDesk onClose={closeOverlayDesk6} />
        </PortalPopup>
      )}
      {isOverlayDesk7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk7}
        >
          <OverlayDesk onClose={closeOverlayDesk7} />
        </PortalPopup>
      )}
      {isOverlayDesk8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOverlayDesk8}
        >
          <OverlayDesk onClose={closeOverlayDesk8} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
