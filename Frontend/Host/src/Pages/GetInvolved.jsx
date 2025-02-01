import React, { useEffect, useState } from "react";
import VolunteerCard from "../components/Volunteer/VolunteerCard";
import VolunteerForm from "../components/Volunteer/VolunteerForm";
import TitleBanner from "../components/TitleBanner";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";

const GetInvolved = () => {
  return (
    <div className="font-poppins">
      <TitleBanner title="GET INVOLVED" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-5xl font-bold font-poppins mb-5 pb-5">
            WAYS TO GET <span className="text-primary">INVOLVED</span>
          </h1>
          <p className="text-secondary max-w-[80%] mx-auto">
            At Axon Stroke Foundation, we believe that everyone has a role to
            play in improving stroke care and raising awareness. Whether you're
            an individual looking to contribute your time or resources, a
            business seeking partnership opportunities, or an organization
            interested in collaboration, there are several ways to get involved
            and make a difference.
          </p>
        </div>
      </div>

      {/* Become a Volunteer Section */}
      <div>
        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center items-center">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-poppins mb-5">
                VOLUNTEER WITH <span className="text-primary">US</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto">
                Your time and skills can make a significant impact on our
                efforts. Volunteers help us run community workshops, assist in
                events, provide administrative support, and contribute to our
                outreach programs. Whether you have healthcare expertise or just
                a passion for helping others, your contribution will be valued.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="mb-[77px] text-center">
            <h1 className="text-4xl font-bold font-poppins mb-5">
              FUNDRAISE FOR{" "}
              <span className="text-primary">STROKE AWARENESS AND CARE</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto">
              Organize a fundraising event in your community or online to
              support our programs. You can host charity walks, auctions, and
              more. Every penny raised will go toward supporting stroke
              survivors, increasing awareness, and providing free or discounted
              therapy and care.
            </p>
            <a href="*" className="text-button m-4 font-bold">
              Start Your Fundraising Campaign{" "}
            </a>
          </div>
        </div>

        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center items-center">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-poppins mb-5">
                DONATE TO{" "}
                <span className="text-primary">SUPPORT STROKE PROGRAMS</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto">
                Donations are vital to sustaining our programs. Your generous
                contribution can help provide free stroke therapy, fund stroke
                education, and support our research initiatives. You can donate
                a one-time gift or set up a recurring donation to make a lasting
                impact.
              </p>
              <a href="*" className="text-button m-4 font-bold">
                Donate Now{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="mb-[77px] text-center">
            <h1 className="text-4xl font-bold font-poppins mb-5">
              BECOME A <span className="text-primary">CORPORATE PARTNER</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto">
              Corporations play a crucial role in making a difference. By
              partnering with Axon Stroke Foundation, businesses can sponsor
              events, provide in-kind donations, and collaborate on awareness
              campaigns. Together, we can amplify our message and reach more
              people in need.
            </p>
            <a href="*" className="text-button m-4 font-bold">
              Learn More About Corporate Partnerships
            </a>
          </div>
        </div>

        <div className="py-[95px] bg-background">
          <div className="flex flex-col mx-10 justify-center items-center">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-poppins mb-5">
                ADVOCATE FOR{" "}
                <span className="text-primary">STROKE AWARENESS</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto">
                Help spread the word about stroke prevention and care in your
                community. Whether through social media, word of mouth, or local
                community groups, advocacy plays a huge role in increasing
                awareness and reducing the impact of stroke. Join our advocacy
                network and help us create change at the local, national, and
                international levels.
              </p>
              <a href="*" className="text-button m-4 font-bold">
                Join the Advocacy Network
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-10 justify-center items-center py-[95px] bg-white">
          <div className="mb-[77px] text-center">
            <h1 className="text-4xl font-bold font-poppins mb-5">
              PARTNER WITH US FOR{" "}
              <span className="text-primary">RESEARCH AND EDUCATION</span>
            </h1>
            <p className="text-secondary max-w-[80%] mx-auto">
              Research and education are key to improving stroke outcomes. If
              you represent an academic institution, research organization, or
              medical facility, we welcome collaborations that aim to advance
              stroke research, improve treatment methods, and educate healthcare
              providers. Together, we can push the boundaries of what’s possible
              in stroke care.
            </p>
            <a href="*" className="text-button my-16 font-bold">
              Partner with Us for Research and Education
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
