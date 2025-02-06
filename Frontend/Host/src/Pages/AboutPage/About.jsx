import React, { useState, useEffect } from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import TitleBanner from "../../components/blog/TitleBanner";
import Members from "../../components/Members/Members";
import VolenteerCard from "../../components/volenteer-with-us/VolenteerCard";
import Contacts from "../Contacts";

const About = () => {
  const [membersList, setMembersList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/board-members")
      .then((response) => response.json())
      .then((data) => setMembersList(data))
      .catch((error) => console.error("Error fetching member list", error));
  }, []);

  return (
    <>
      <TitleBanner
        title="ABOUT AXON"
        backgroundImage={
          "https://s3-alpha-sig.figma.com/img/5c70/bf26/430db1c27406e4fe493ce581c6303976?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GsYqbs5DllCBdVvD2INFL5bxSjtrhrFnr7xP6mZ1AF08-MypnjSKyPqBs22hMBYys47ua397WarR~1mNW3~gYulYop2SzCfBDBr37XFdZMrMzhPEwpzFNUfldUlvjJ8i5QCzUe1ZjLz9LWwDnDeXHf1fRkwHNgINoN3I6Z3NIWfH39~0OQZbVvIO2oO5YxRa-4KO9b2iF16R~IN6D2YaG-imfl4eRWPh9xyH5jPPne6WoMBpOHb78GZSnhxzoShWug3O6hxH4sKBNdq8jenstjVBAGne1KliRdOAoHF8712IT5lB~I7Gqg6iHnzFKNyXKl4IppB2vBpLGgVe9VmT-g__"
        }
      />

      <div className={style.container}>
        {/* WHO ARE WE? Section */}
        <section className={style.whoarewe}>
          <h1>WHO ARE WE?</h1>
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
          <img
            src="https://s3-alpha-sig.figma.com/img/9695/4275/e3a1b9621ba0ad95620c88e134132af5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VdQsiseu7uLTCkl7gkzK37UCrrbpBPmhNpQ62JV1mXVIzZzwasciOxXPgZlqqVoh8cxuoPTNSHYtE7CnVQw8arkjub7Rl5S-4GVWxMwPs4XNyKwvj1jV35xb~y30cDSro6k~VAegqDo-ebMeYfjKxP0nLAP4y4hWxGCR6ulsl0-Lkk-NfKVKjsyzqch0pUanHP4xLtdN-M5x5z5Cg~e07T3r9vjIVdjSwg8PIQVNE9ouDoSeURnYDHClz2kKJajNOfoIhoSSZtKBslBj~nkEHspgpGKAipsc-sFUywCQSuKw27Cfs9DkWLd1yA360W5AFSWx1l828dpybE2oUhKzCw__"
            alt="Brain illustration"
            className={style.image}
          />
          <div className={style.content}>
            <div className={style.text}>
              <h2>MISSION</h2>
              <p>
                To promote stroke awareness, provide therapeutic support, and
                advance research for better
                <br /> prevention, treatment, and recovery in Ethiopia and
                Africa.
              </p>
              <h3 className="mt-8 font-bold text-lg">
                Core <span className="text-red-500">Missions</span>
              </h3>
              <ul>
                <li>Raise awareness about stroke.</li>
                <li>Provide therapeutic support.</li>
                <li>Advance education and research for better prevention.</li>
                <li>
                  Enhance treatment and recovery efforts in Ethiopia and Africa.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className={style.vision}>
          <div className={style.content}>
            <div className={style.text}>
              <h2>VISION</h2>
              <p>
                A world where stroke prevention, treatment, and recovery are
                available for all.
              </p>
              <h3 className="mt-8 font-bold text-lg">
                Core <span className="text-red-500">Values</span>
              </h3>
              <ul>
                <li>
                  <span className="text-gray-500 font-bold">Compassion</span>:
                  We make a meaningful impact with empathy and care for every
                  individual.
                </li>
                <li>
                  <span className="text-gray-500 font-bold">Empowerment</span>:
                  We equip individuals with the knowledge and resources for
                  health and recovery.
                </li>
                <li>
                  <span className="text-gray-500 font-bold">Education</span>: We
                  spread knowledge to prevent strokes and improve outcomes.
                </li>
                <li>
                  <span className="text-gray-500 font-bold">Collaboration</span>
                  : We work with partners to create sustainable change in stroke
                  care.
                </li>
                <li>
                  <span className="text-gray-500 font-bold">Integrity</span>: We
                  maintain transparency and ethics in all our efforts.
                </li>
              </ul>
            </div>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/9695/4275/e3a1b9621ba0ad95620c88e134132af5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VdQsiseu7uLTCkl7gkzK37UCrrbpBPmhNpQ62JV1mXVIzZzwasciOxXPgZlqqVoh8cxuoPTNSHYtE7CnVQw8arkjub7Rl5S-4GVWxMwPs4XNyKwvj1jV35xb~y30cDSro6k~VAegqDo-ebMeYfjKxP0nLAP4y4hWxGCR6ulsl0-Lkk-NfKVKjsyzqch0pUanHP4xLtdN-M5x5z5Cg~e07T3r9vjIVdjSwg8PIQVNE9ouDoSeURnYDHClz2kKJajNOfoIhoSSZtKBslBj~nkEHspgpGKAipsc-sFUywCQSuKw27Cfs9DkWLd1yA360W5AFSWx1l828dpybE2oUhKzCw__"
            alt="Brain illustration"
            className={style.image}
          />
        </section>
        <h2 className="text-40px mb-8 font-bold ml-10">OUR DOCTORS</h2>
        {/* Our Doctors Section */}
        <section className={style.ourdoctors}>
          <img
            src="https://s3-alpha-sig.figma.com/img/23e6/602b/780604fed7b7888c3847e142e1c7e501?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XQ8G-MFVOqsyGWz0GjnpWIIGAIROH2PCOlDQOkSU4gkEHrwJRGyRMybu7lrIjKHh4kxzSXi1Udj8CV0o1g0EKw1l9kREMIkXgWCgCQ3NsESlJdNOLQNTHbWi4gdkY4H2saGcT1-vcuWYmjalB2pTQE4bqlxBeLbIhoxpdwRg9x3TyWvnNEcEomA5fYHkY2QtKfDg8W1bzj~7KaswlYu984ROlp0F7hPeoViNWqSxlQxu0T3l04TcH9zoEAWYvTPASwJiArLcVYdy0RbKd40Kg2XCppWQphdPIz306kCc6oGKFvx43Q26GfF6TciFfH~L6prMlY-K35Szvn-tIes6SA__"
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
      <div className="flex gap-8 flex-wrap justify-center mt-20 mb-40">
        {membersList.map((member, index) => (
          <Members
            key={index}
            photo={member.image}
            name={member.name}
            discription={member.role}
          />
        ))}
      </div>
      <div class="flex flex-col items-center justify-center bg-white">
        <h1 class="text-4xl font-bold text-center">WANT TO KNOW MORE?</h1>
        <p class="text-lg text-gray-600 text-center">
          Subscribe to never miss out on any events.
        </p>

        <div class="flex items-center w-full max-w-md border border-gray-300 bg-gray-300 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-3 bg-gray-300  focus:outline-none "
          />
          <button class="px-6 py-3 bg-gray-800 text-white font-semibold  hover:bg-gray-800">
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
