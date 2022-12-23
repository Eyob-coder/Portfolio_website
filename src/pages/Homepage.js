import { useEffect } from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "@mui/material";
import { Button as AntButton } from "antd";
import { Button as BsButton } from "react-bootstrap";
import "./Homepage.css";

const Homepage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="homepage">
      <img className="cont-1-icon" alt="" src="../cont-1@2x.png" />
      <div className="rectangle-div" />
      <img
        className="ellipse-icon"
        alt=""
        src="../ellipse-2.svg"
        data-animate-on-scroll
      />
      <img className="rectangle-icon" alt="" src="../rectangle-1@2x.png" />
      <div className="rectangle-div1" />
      <div className="california-institute-of-arts">
        CALIFORNIA INSTITUTE OF ARTS
      </div>
      <img
        className="ellipse-icon1"
        alt=""
        src="../ellipse-1.svg"
        data-animate-on-scroll
      />
      <img className="main-2-icon" alt="" src="../main-2@2x.png" />
      <h2 className="dec-23" data-animate-on-scroll>
        <p className="dec">DEC</p>
        <p className="p">23</p>
      </h2>
      <div className="designer">DESIGNER</div>
      <div className="e-talent">E-TALENT</div>
      <div className="generation-z">GENERATION Z</div>
      <div className="bemmy-technology">BEMMY TECHNOLOGY</div>
      <div className="multiple-hotels">
        <p className="dec">MULTIPLE</p>
        <p className="p">HOTELS</p>
      </div>
      <div className="meta">META</div>
      <div className="lets-connect">
        <p className="dec">LET’S</p>
        <p className="p">CONNECT</p>
      </div>
      <div className="uiux-design">UI/UX DESIGN</div>
      <div className="logo-design">LOGO DESIGN</div>
      <div className="web-site-development">WEB-SITE DEVELOPMENT</div>
      <div className="consultation">CONSULTATION</div>
      <div className="graphic-design">GRAPHIC DESIGN</div>
      <div className="front-end-development">FRONT-END DEVELOPMENT</div>
      <div className="introduction-to-front-end-deve">
        <p className="dec">INTRODUCTION TO</p>
        <p className="p">FRONT-END DEVELOPMENT</p>
      </div>
      <div className="programming-with-javascript">
        <p className="dec">PROGRAMMING WITH</p>
        <p className="p">JAVASCRIPT</p>
      </div>
      <div className="advanced-html-css">
        <p className="dec">ADVANCED</p>
        <p className="p">{`HTML & CSS`}</p>
      </div>
      <TextField
        className="rectangle-textfield"
        sx={{ width: 433 }}
        color="primary"
        variant="outlined"
        multiline
        label="Label"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <div className="version-control">VERSION CONTROL</div>
      <div className="for-anything-regarding">FOR ANYTHING REGARDING:</div>
      <div className="fundamentals-of-graphic-design">
        FUNDAMENTALS OF GRAPHIC DESIGN
      </div>
      <div className="typography-certificate">
        <p className="dec">TYPOGRAPHY</p>
        <p className="p">CERTIFICATE</p>
      </div>
      <img className="design-fun-1" alt="" src="../design-fun-1@2x.png" />
      <div className="i-am-a-creative">I AM A CREATIVE</div>
      <div className="want-to-learn-more">WANT TO LEARN MORE?</div>
      <div className="programmer">PROGRAMMER</div>
      <button className="hero-contact" id="contact">
        <div className="rectangle-div2" />
        <b className="contact-me">CONTACT ME</b>
      </button>
      <button className="body-contact">
        <div className="rectangle-div3" />
        <b className="contact-me1">CONTACT ME</b>
      </button>
      <div className="hello-i-am-eyob">
        <span>{`HELLO, I AM `}</span>
        <span className="eyob">EYOB</span>
      </div>
      <div className="projects">PROJECTS</div>
      <div className="certifications-earned">CERTIFICATIONS EARNED</div>
      <img className="ux-1-icon" alt="" src="../ux-1@2x.png" />
      <div className="eyob-berhanemeskel">EYOB BERHANEMESKEL</div>
      <div className="i-design-revolutionary-designs">
        <p className="dec">
          <span>
            I DESIGN REVOLUTIONARY DESIGNS AND REPUTABLE SOFTWARES THAT MAKE AN
            IMPACT ON BOTH THE CLIENT AND THE DESIGN COMMUNITY.
          </span>
        </p>
        <p className="dec">
          <span>
            I BELIEVE THAT THE CREATIONS THAT MAKE THE GREATEST RIPPLE EFFECT
            THROUGHOUT HISTORY ARE ONES’ THOUGHT TO BE EITHER TO SILLY OR JUST
            IMPOSSIBLE.
          </span>
        </p>
        <p className="dec">
          <span className="as-a-designer">
            AS A DESIGNER AND A SOFTWARE DEVELOPER
          </span>
          <span>{`, I PLAN TO TACKLE THE BIGGEST AND SOMEHOW IMPOSSIBLE SEEMING PROBLEMS KNOWN TO THE `}</span>
          <span className="world">WORLD</span>
          <span className="span">.</span>
        </p>
        <p className="and-i-shall-do-so">
          <span>AND I SHALL DO SO</span>
        </p>
      </div>
      <div className="music-art-friendship-some">
        <p className="dec">
          <span className="music-art-friendship">Music, Art, Friendship</span>
          <span> ...some of the places people find peace and serenity in.</span>
        </p>
        <p className="dec">
          <span>&nbsp;</span>
        </p>
        <p className="dec">
          <span>&nbsp;</span>
        </p>
        <p className="p">
          <span className="music-art-friendship">I</span>
          <span>
            {" "}
            a designer based in Ethiopia find that a purpose can be the most
            peaceful place anyone can reside in. My purposes are designing and
            programming till i see my products change someone’s life and maybe
            someday the world
          </span>
        </p>
      </div>
      <b className="b">{`&`}</b>
      <div className="frame-div">
        <AntButton className="home" type="dashed" size="middle" shape="default">
          HOME
        </AntButton>
      </div>
      <div className="frame-div1">
        <AntButton className="home" type="dashed" size="middle" shape="default">
          ABOUT
        </AntButton>
      </div>
      <div className="frame-div2">
        <AntButton className="home" type="dashed" size="middle" shape="default">
          PROJECTS
        </AntButton>
      </div>
      <div className="frame-div3">
        <AntButton className="home" type="dashed" size="middle" shape="default">
          CERTIFICATIONS
        </AntButton>
      </div>
      <div className="frame-div4">
        <AntButton className="home" type="dashed" size="middle" shape="default">
          CONTACT ME
        </AntButton>
      </div>
      <img className="img-black-1" alt="" src="../img-black-1@2x.png" />
      <div className="line-div" />
      <div className="rectangle-div4" />
      <img className="ellipse-icon2" alt="" src="../ellipse-11.svg" />
      <button className="see-details" id="details">
        <div className="rectangle-div5" />
        <b className="see-details1">SEE DETAILS</b>
      </button>
      <img className="logo-1-icon" alt="" src="../logo-1@2x.png" />
      <div className="rectangle-div6" />
      <img
        className="programming-1-icon"
        alt=""
        src="../programming-1@2x.png"
      />
      <div className="rectangle-div7" />
      <img className="idea-1-icon" alt="" src="../idea-1@2x.png" />
      <div className="rectangle-div8" />
      <img className="design-typo-1" alt="" src="../design-typo-1@2x.png" />
      <img className="meta-intro-1" alt="" src="../meta-intro-1@2x.png" />
      <img className="javascript-1-icon" alt="" src="../javascript-1@2x.png" />
      <img className="depth-html-1" alt="" src="../depth-html-1@2x.png" />
      <img className="version-1-icon" alt="" src="../version-1@2x.png" />
      <a
        className="frame-a"
        href="mailto:oddjobera@gmail.com?subject=I am looking for a software developer"
        id="sware"
      >
        <div className="component-1">
          <div className="rectangle-div3" />
          <b className="software-dev">SOFTWARE DEV.</b>
        </div>
      </a>
      <a
        className="frame-a1"
        href="mailto:oddjobera@gmail.com?subject=i need an app developed, let's talk."
        id="app"
      >
        <div className="component-11">
          <div className="rectangle-div3" />
          <b className="software-dev">APP DEVELOPMENT</b>
        </div>
      </a>
      <a
        className="frame-a2"
        href="mailto:oddjobera@gmail.com?subject=i am looking to get my website developed , let's talk."
        id="web"
      >
        <div className="component-12">
          <div className="rectangle-div3" />
          <b className="software-dev">WEB-SITE DEV</b>
        </div>
      </a>
      <a
        className="frame-a3"
        href="mailto:oddjobera@gmail.com?subject=i am looking for a front-end developer"
        id="fend"
      >
        <div className="component-13">
          <div className="rectangle-div3" />
          <b className="software-dev">FRONT-END DEV.</b>
        </div>
      </a>
      <a
        className="frame-a4"
        href="mailto:oddjobera@gmail.com?subject=i need you to create or rebrand a logo."
        id="logo"
      >
        <div className="component-14">
          <div className="rectangle-div3" />
          <b className="software-dev">LOGO DESIGN</b>
        </div>
      </a>
      <a
        className="frame-a5"
        href="mailto:oddjobera@gmail.com?subject=i need a banner designed."
        id="banner"
      >
        <div className="component-15">
          <div className="rectangle-div3" />
          <b className="software-dev">BANNER DESIGN</b>
        </div>
      </a>
      <a
        className="frame-a6"
        href="mailto:oddjobera@gmail.com?subject=are you the one that does branding? i've got a job for you."
        id="brand"
      >
        <div className="component-16">
          <div className="rectangle-div3" />
          <b className="software-dev">BRANDING</b>
        </div>
      </a>
      <a
        className="frame-a7"
        href="mailto:oddjobera@gmail.com?subject=i am in need of consulting."
        id="consult"
      >
        <div className="component-17">
          <div className="rectangle-div3" />
          <b className="software-dev">CONSULTING</b>
        </div>
      </a>
      <a
        className="frame-a8"
        href="mailto:oddjobera@gmail.com?subject=Let's get a drink sometime and unwind to each other."
        id="drink"
      >
        <div className="component-18">
          <div className="rectangle-div3" />
          <b className="software-dev">DRINKS</b>
        </div>
      </a>
      <a className="telegram" href="Telegram/@J0bera" target="_blank">
        <img className="group-icon" alt="" src="../group.svg" />
      </a>
      <a
        className="facebook"
        href="https://www.facebook.com/robera.berhanemeskel"
        target="_blank"
      >
        <img className="vector-icon" alt="" src="../vector.svg" />
      </a>
      <a
        className="twitter"
        href="https://twitter.com/EyobBerhanemes1"
        target="_blank"
      >
        <img className="group-icon1" alt="" src="../group1.svg" />
      </a>
      <a
        className="instagram"
        href="https://www.instagram.com/jobera_z_abyssinian/"
        target="_blank"
      >
        <img className="group-icon1" alt="" src="../vector1.svg" />
      </a>
      <div className="line-div1" />
      <div className="line-div2" />
      <div className="line-div3" />
      <div className="line-div4" />
      <div className="copyright">COPYRIGHT</div>
      <div className="jobera-designs">Jobera_designs</div>
      <img
        className="ricopyright-fill-icon"
        alt=""
        src="../ricopyrightfill.svg"
      />
      <img className="mditm-icon" alt="" src="../mditm.svg" />
      <img className="vector-icon2" alt="" src="../vector-1.svg" />
      <img className="vector-icon3" alt="" src="../vector-2.svg" />
      <BsButton className="component-5" variant="outline-primary">
        submit
      </BsButton>
      <b className="what-are-your-thought-on-my-we">
        What are your thought on my website?
      </b>
    </div>
  );
};

export default Homepage;
