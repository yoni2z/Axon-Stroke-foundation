import React from "react";
import TitleBanner from "../components/TitleBanner";
//Components
import Cards from "../components/What We Do/Cards";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";

import { useParams } from "react-router-dom";

const WhatWeDoProjects = () => {
  const { id } = useParams();
  return (
    <div className="font-poppins">
      <TitleBanner title="Our Projects" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            Our <span className="text-primary">Projects</span>
          </h1>
        </div>

        {/* Render What We Do Cards */}
        <div>
          {id === "1" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
              <Cards
                photo={VolunteerBg}
                title="National Stroke Awareness Campaign"
                description="A nationwide initiative to educate communities about the signs and symptoms of stroke, emphasizing the need for early medical intervention. The campaign includes TV ads, community seminars, and educational materials."
              />
              <Cards
                photo={VolunteerBg}
                title="Stroke Awareness in Schools"
                description="A targeted outreach program that educates school-age children about stroke prevention and awareness, helping them recognize symptoms and respond quickly in emergency situations. This program partners with schools and youth organizations to reach the next generation."
              />
              <Cards
                photo={VolunteerBg}
                title="Community Stroke Education Workshops"
                description="Regular workshops in local communities across Ethiopia to provide education on stroke prevention and the importance of healthy living. These workshops include information on diet, exercise, and managing risk factors like hypertension and diabetes."
              />
              <Cards
                photo={VolunteerBg}
                title="Mobile Stroke Awareness Clinics"
                description="A mobile initiative that travels to rural and underserved areas to offer free stroke screenings, educational materials, and consultations on stroke prevention and lifestyle changes."
              />
              <Cards
                photo={VolunteerBg}
                title="Stroke Awareness Corners"
                description="Interactive booths set up in collaboration with the Ministry of Health Ethiopia, placed in major hospitals and health centers. These booths will be equipped with engaging materials, including brochures, posters, and digital displays, to educate patients and visitors about stroke prevention, risk factors, and early detection. The corners aim to engage the community and raise awareness in high-traffic health facilities."
              />
            </div>
          )}
          {id === "2" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
              <Cards
                photo={VolunteerBg}
                title="Stroke Rehabilitation Access Initiative"
                description="A project that connects stroke survivors with free physical and occupational therapy at local clinics, ensuring they receive the care they need to regain mobility and independence."
              />
              <Cards
                photo={VolunteerBg}
                title="Telehealth Stroke Therapy"
                description="A remote therapy service that allows stroke survivors to access physical and speech therapy sessions via video calls, making therapy accessible even in remote or underserved regions."
              />
              <Cards
                photo={VolunteerBg}
                title="Post-Stroke Cognitive Rehabilitation"
                description="A program offering free cognitive therapy for stroke survivors experiencing memory and cognitive challenges. This initiative is designed to help patients regain essential skills for daily living."
              />
              <Cards
                photo={VolunteerBg}
                title="Stroke Survivor Support Groups"
                description="A network of support groups for stroke survivors and their families to share experiences, receive emotional support, and learn about available therapy options. These groups meet regularly and offer both in-person and virtual meetings."
              />
            </div>
          )}
          {id === "3" && (
            <Cards
              photo={VolunteerBg}
              title="Stroke Education & Research Programs"
              description="Our Stroke Education & Research Programs focus on advancing the knowledge of stroke, its prevention, and innovative treatments. We are committed to supporting research and spreading vital information to both the public and healthcare professionals."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoProjects;
