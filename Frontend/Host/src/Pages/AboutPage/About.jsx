import React from 'react';
import style from './About.module.css';
import {Link} from 'react-router-dom';
import TitleBanner from '../../components/blog/TitleBanner';
import AboutBg from "../../assets/about-title-bg.jpg";
import About01 from "../../assets/about-01.jpg";
import About02 from "../../assets/about-02.jpg";
import VolenteerCard from '../../components/volenteer-with-us/VolenteerCard';
import Contacts from '../Contacts';

const About = () => {
  return (
    <>
      <TitleBanner title={"WHO WE ARE"} backgroundImage={AboutBg} />
      <div className={style.about_container}>
        <div className={style.abt_topdiv}>
          <div className={style.abt_desc}>
            <h1>
              We are Axon Stroke <span>Foundation</span>
            </h1>
            <p>
            The Axon Stroke Foundation is a non-profit organization focused on stroke awareness,
             therapeutic support, and advancing education and research in Ethiopia and across Africa.
             We are committed to improving access to stroke care and recovery through education, research,
              and collaboration with local and global partners.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>{" "}
              {/* FontAwesome arrow */}
            </button>
          </div>
          <div className={style.abt_photo}>
            <img src={About01} />
          </div>
        </div>
        <div className={style.abt_bottomdiv}>
          <div className={style.abt_photo}>
            <div className={style.playIcon}>
              <a href="#">
                <i className="fas fa-play"></i>
              </a>
            </div>
            <img src={About02} />
          </div>
          <div className={style.abt_desc}>
            <h1>
              We have a strong
              <span> Mission</span>
            </h1>
            <p>
            To raise awareness about stroke, provide therapeutic support, 
            and advance education and research for better prevention, treatment, 
            and recovery in Ethiopia and Africa.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className={style.abt_topdiv}>
            <div className={style.abt_desc}>
              <h1>
                We have a clear <span>Vision</span>
              </h1>
              <p>
              A world where stroke prevention, treatment, and recovery are accessible to all.
              </p>
              <button className={style.readMoreButton}>
                Read More
                <i className="fas fa-arrow-right ml-2"></i>{" "}
                {/* FontAwesome arrow */}
              </button>
            </div>
            <div className={style.abt_photo}>
              <img src={About01} />
            </div>
          </div>
          <div className={style.abt_topdiv}>
          <div className={style.abt_photo}>
            <img src={About01} />
          </div>
          <div className={style.abt_desc}>
            <h1>
              Our core <span>Values</span>
            </h1>
            <p>
            <span>Compassion</span> We make a meaningful impact with empathy and care for every individual.
            </p>
            <p>
            <span>Empowerment</span> We equip individuals with the knowledge and resources for health and recovery. 
            </p>
            <p>
            <span> Education</span> We spread knowledge to prevent strokes and improve outcomes.
            </p>
            <p>
            <span>Collaboration</span> We work with partners to create sustainable change in stroke care.
            </p>
            <p>
            <span>Integrity</span> We maintain transparency and ethics in all our efforts.
            </p>
            <button className={style.readMoreButton}>
              Read More
              <i className="fas fa-arrow-right ml-2"></i>{" "}
              {/* FontAwesome arrow */}
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className={style}>

      </div>
      <Contacts />
      <VolenteerCard />
    </>
  );
};

export default About;