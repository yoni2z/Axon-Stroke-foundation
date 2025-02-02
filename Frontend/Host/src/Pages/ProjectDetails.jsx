import { useParams, useNavigate } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";
import CauseTitleBg from "../assets/cause-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

const ProjectDetails = () => {
  // Define project data
  const projectsData = {
    1: [
      {
        photo: VolunteerBg3,
        title: "National Stroke Awareness Campaign",
        description:
          "A nationwide initiative to educate communities about the signs and symptoms of stroke, emphasizing the need for early medical intervention. The campaign includes TV ads, community seminars, and educational materials.",
      },
      {
        photo: VolunteerBg2,
        title: "Stroke Awareness in Schools",
        description:
          "A targeted outreach program that educates school-age children about stroke prevention and awareness, helping them recognize symptoms and respond quickly in emergency situations.",
      },
      {
        photo: VolunteerBg3,
        title: "Community Stroke Education Workshops",
        description:
          "Regular workshops in local communities across Ethiopia to provide education on stroke prevention and the importance of healthy living.",
      },
      {
        photo: VolunteerBg2,
        title: "Mobile Stroke Awareness Clinics",
        description:
          "A mobile initiative that travels to rural and underserved areas to offer free stroke screenings, educational materials, and consultations.",
      },
      {
        photo: VolunteerBg3,
        title: "Stroke Awareness Corners",
        description:
          "Interactive booths set up in collaboration with the Ministry of Health Ethiopia, placed in major hospitals and health centers.",
      },
    ],
    2: [
      {
        photo: VolunteerBg3,
        title: "Stroke Rehabilitation Access Initiative",
        description:
          "A project that connects stroke survivors with free physical and occupational therapy at local clinics.",
      },
      {
        photo: VolunteerBg3,
        title: "Telehealth Stroke Therapy",
        description:
          "A remote therapy service that allows stroke survivors to access physical and speech therapy sessions via video calls.",
      },
      {
        photo: VolunteerBg2,
        title: "Post-Stroke Cognitive Rehabilitation",
        description:
          "A program offering free cognitive therapy for stroke survivors experiencing memory and cognitive challenges.",
      },
      {
        photo: VolunteerBg2,
        title: "Stroke Survivor Support Groups",
        description:
          "A network of support groups for stroke survivors and their families to share experiences and receive emotional support.",
      },
    ],
    3: [
      {
        photo: VolunteerBg3,
        title: "Stroke Prevention Research Grants",
        description:
          "A funding initiative to support local researchers conducting studies on stroke prevention methods.",
      },
      {
        photo: VolunteerBg3,
        title: "Healthcare Provider Training Workshops",
        description:
          "A program designed to train healthcare providers on the latest stroke care protocols and rehabilitation techniques.",
      },
      {
        photo: VolunteerBg3,
        title: "Stroke Research Symposium",
        description:
          "An annual conference that brings together global and local experts to present the latest stroke research findings.",
      },
      {
        photo: VolunteerBg2,
        title: "Public Stroke Education Platform",
        description:
          "An online platform that offers free resources such as webinars, articles, and courses on stroke prevention, treatment, and rehabilitation.",
      },
    ],
  };

  const { id, projectIndex } = useParams();
  const navigate = useNavigate();

  const categoryId = parseInt(id);
  const index = parseInt(projectIndex);
  const projects = projectsData[categoryId];

  if (!projects || !projects[index]) {
    return <div className="text-center text-xl mt-20">Project Not Found</div>;
  }

  const project = projects[index];

  // Navigation Handlers
  const handlePrev = () => {
    if (index > 0) {
      navigate(`/whatwedo/projects/details/${categoryId}/${index - 1}`);
    }
  };

  const handleNext = () => {
    if (index < projects.length - 1) {
      navigate(`/whatwedo/projects/details/${categoryId}/${index + 1}`);
    }
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="PROJECT DETAILS" backgroundImage={CauseTitleBg} />
      <div className="py-[95px] sm:mx-10 mx-3 flex flex-col items-center">
        <CausesCard
          causesImage={project.photo}
          Title={project.title}
          Description={project.description}
          detailView={true}
          extraFields={{
            buttons: [
              {
                label: "Prev",
                style: "bg-button text-white hover:bg-black",
                onClick: handlePrev,
                disabled: index === 0,
              },
              {
                label: "Next",
                style: "bg-button text-white hover:bg-black",
                onClick: handleNext,
                disabled: index === projects.length - 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
