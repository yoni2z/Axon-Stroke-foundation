import React from "react";
import TitleBanner from "../components/TitleBanner";
//Components
import Cards from "../components/What We Do/Cards";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";
import VolunteerBg1 from "../assets/volunteer-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

import { useParams } from "react-router-dom";

const WhatWeDoProjects = () => {
  const { id } = useParams();
  return (
    <div className="font-poppins">
      <TitleBanner title="Our Projects" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-30">
        <div className="mb-[77px] text-center">
          <h3 className="text-4xl font-bold font-poppins mb-5">
            Our <span className="text-primary">Projects</span>
          </h3>
        </div>

        {/* Render What We Do Cards */}
        <div>
          {id === "3" && (
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
              <Cards
                photo={VolunteerBg3}
                title="National Stroke Awareness Campaign"
                description="A nationwide initiative to educate communities about the signs and symptoms of stroke, emphasizing the need for early medical intervention. The campaign includes TV ads, community seminars, and educational materials."
              />
              <Cards
                photo={VolunteerBg2}
                title="Stroke Awareness in Schools"
                description="A targeted outreach program that educates school-age children about stroke prevention and awareness, helping them recognize symptoms and respond quickly in emergency situations. This program partners with schools and youth organizations to reach the next generation."
              />
              <Cards
                photo={VolunteerBg3}
                title="Community Stroke Education Workshops"
                description="Regular workshops in local communities across Ethiopia to provide education on stroke prevention and the importance of healthy living. These workshops include information on diet, exercise, and managing risk factors like hypertension and diabetes."
              />
              <Cards
                photo={VolunteerBg2}
                title="Mobile Stroke Awareness Clinics"
                description="A mobile initiative that travels to rural and underserved areas to offer free stroke screenings, educational materials, and consultations on stroke prevention and lifestyle changes."
              />
              <Cards
                photo={VolunteerBg3}
                title="Stroke Awareness Corners"
                description="Interactive booths set up in collaboration with the Ministry of Health Ethiopia, placed in major hospitals and health centers. These booths will be equipped with engaging materials, including brochures, posters, and digital displays, to educate patients and visitors about stroke prevention, risk factors, and early detection. The corners aim to engage the community and raise awareness in high-traffic health facilities."
              />
            </div>
          )}
          {id === "2" && (
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
              <Cards
                photo={VolunteerBg3}
                title="Stroke Rehabilitation Access Initiative"
                description="A project that connects stroke survivors with free physical and occupational therapy at local clinics, ensuring they receive the care they need to regain mobility and independence."
              />
              <Cards
                photo={VolunteerBg3}
                title="Telehealth Stroke Therapy"
                description="A remote therapy service that allows stroke survivors to access physical and speech therapy sessions via video calls, making therapy accessible even in remote or underserved regions."
              />
              <Cards
                photo={VolunteerBg2}
                title="Post-Stroke Cognitive Rehabilitation"
                description="A program offering free cognitive therapy for stroke survivors experiencing memory and cognitive challenges. This initiative is designed to help patients regain essential skills for daily living."
              />
              <Cards
                photo={VolunteerBg2}
                title="Stroke Survivor Support Groups"
                description="A network of support groups for stroke survivors and their families to share experiences, receive emotional support, and learn about available therapy options. These groups meet regularly and offer both in-person and virtual meetings."
              />
            </div>
          )}
          {id === "3" && (
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
              <Cards
                photo={VolunteerBg3}
                title="Stroke Prevention Research Grants"
                description="A funding initiative to support local researchers conducting studies on stroke prevention methods and strategies specific to African populations. The aim is to develop region-specific guidelines and interventions."
              />
              <Cards
                photo={VolunteerBg3}
                title="Healthcare Provider Training Workshops"
                description="A program designed to train healthcare providers on the latest stroke care protocols, rehabilitation techniques, and the importance of early diagnosis. Workshops are offered in partnership with hospitals and medical institutions."
              />
              <Cards
                photo={VolunteerBg3}
                title="Stroke Research Symposium"
                description="An annual conference that brings together global and local experts to present the latest stroke research findings. The symposium aims to share knowledge, encourage collaboration, and highlight emerging treatment options."
              />
              <Cards
                photo={VolunteerBg2}
                title="Public Stroke Education Platform"
                description="An online platform that offers free resources such as webinars, articles, and courses on stroke prevention, treatment, and rehabilitation. The platform is designed for both the public and healthcare professionals to access vital stroke-related information."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoProjects;
