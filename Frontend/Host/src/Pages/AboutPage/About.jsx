import React, { useState, useEffect } from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import TitleBanner from "../../components/blog/TitleBanner";
import Members from "../../components/Members/Members";
import VolenteerCard from "../../components/volenteer-with-us/VolenteerCard";
import Contacts from "../Contacts";
import { Partner } from "../../components/Partner/Partner";
import VolunteerBg2 from "../../assets/blog2.png";
import Brain from "../../assets/brain.png";
import Doctors from "../../assets/doctors.jpg";

const About = () => {
  const [membersList, setMembersList] = useState([]);

  useEffect(() => {
    fetch("https://axonstroke.org/api/board-members")
      .then((response) => response.json())
      .then((data) => setMembersList(data))
      .catch((error) => console.error("Error fetching member list", error));
  }, []);

  return (
    <>
      <TitleBanner title="ABOUT &nbsp; US" backgroundImage={VolunteerBg2} />

      <div className={style.container}>
        {/* WHO ARE WE? Section */}
        <section className={style.whoarewe}>
          <h1>WHO WE ARE</h1>
          <p>
            <span className={style.a}>A </span>{" "}
            <span className={style.highlight}>NON</span>
            <span className={style.a}>-PROFIT ORGANIZATION</span>
            <br />
            Axon Stroke Foundation is a non-profit organization focused on
            stroke awareness, therapeutic support, and advancing education and
            research in Ethiopia and across Africa. We are committed to
            improving access to stroke care and recovery through education,
            research, and collaboration with local and global partners.
          </p>
        </section>

        {/* Mission Section */}
        <section className={style.mission}>
          <img src={Brain} alt="Brain illustration" className={style.image} />
          <div className={style.content}>
            <div className={style.text}>
              <h2>MISSION</h2>
              <p>
                To raise awareness about stroke, provide therapeutic support,
                and advance education <br />
                and research for better prevention, treatment, and recovery in
                Ethiopia and Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className={style.vision}>
          <div className={style.content}>
            <div className={style.text}>
              <h2>VISION</h2>
              <p>
                In a world where stroke prevention is a priority, everyone has
                access to the education and healthcare needed <br /> to reduce
                their risk and stay healthy. With advanced treatment and
                comprehensive <br />
                rehabilitation, stroke survivors receive the care they need to
                recover and regain their independence.
              </p>
            </div>
          </div>
          <img src={Brain} alt="Brain illustration" className={style.image} />
        </section>

        <section className={style.mission}>
          <img src={Brain} alt="Brain illustration" className={style.image} />
          <div className={style.content}>
            <div className={style.text}>
              <h2 className="mt-8 font-PlayfairDisplay text-lg">
                Core <span className="text-red-500">Values</span>
              </h2>
              <ul>
                <li>
                  <span className="text-gray-500 font-PlayfairDisplay">
                    Compassion
                  </span>
                  : We make a meaningful impact with empathy and care for every
                  individual.
                </li>
                <li>
                  <span className="text-gray-500 font-PlayfairDisplay">
                    Empowerment
                  </span>
                  : We equip individuals with the knowledge and resources for
                  health and recovery.
                </li>
                <li>
                  <span className="text-gray-500 font-PlayfairDisplay">
                    Education
                  </span>
                  : We spread knowledge to prevent strokes and improve outcomes.
                </li>
                <li>
                  <span className="text-gray-500 font-PlayfairDisplay">
                    Collaboration
                  </span>
                  : We work with partners to create sustainable change in stroke
                  care.
                </li>
                <li>
                  <span className="text-gray-500 font-PlayfairDisplay">
                    Integrity
                  </span>
                  : We maintain transparency and ethics in all our efforts.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <h2 className="text-4xl text-[#26358a] mb-8 font-PlayfairDisplay ml-10">
          OUR DOCTORS
        </h2>
        {/* Our Doctors Section */}
        <section className={style.ourdoctors}>
          <img
            src={Doctors}
            alt="Group of doctors"
            className={style.image}
          />
          <p>
            Meet the dedicated team of doctors who are passionately committed to
            providing exceptional care and unwavering support for stroke
            patients. With years of experience and expertise in stroke
            prevention, treatment, and recovery, our team works tirelessly to
            ensure that every patient receives the highest standard of medical
            attention. Beyond their clinical skills, these professionals embody
            compassion, understanding, and a deep commitment to improving the
            lives of patients and their families. They are not only healthcare
            providers but also advocates for raising awareness about stroke and
            promoting accessible care for everyone in need.{" "}
          </p>
        </section>
      </div>
      <div
        className={`flex gap-40 p-10 mt-20 mb-40 ${style["scrollbar-custom"]}`}
      >
        {membersList.map((member, index) => (
          <Members
            key={index}
            photo={member.image}
            name={member.name}
            discription={member.role}
          />
        ))}
      </div>
      <Partner />
      <div class="flex flex-col items-center justify-center bg-white my-20">
        <h1 class="text-4xl font-PlayfairDisplay text-center">
          WANT TO KNOW MORE?
        </h1>
        <p class="text-lg text-gray-600 text-center font-Montserrat">
          Subscribe to never miss out on any events.
        </p>

        <div class="flex items-center w-full max-w-md border border-gray-300 bg-gray-300 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-3 bg-gray-300  focus:outline-none "
          />
          <button class="px-6 py-3 bg-gray-800 text-white font-Montserrat  hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
      <Contacts />
      <VolenteerCard />
    </>
  );
};

export default About;
