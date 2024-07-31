import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RiversideParkDevelopment from "../../components/RiversideParkDevelopment";
import ProjectscoloredRowprojectsOne from "./ProjectscoloredRowprojectsOne";
import React, { Suspense } from "react";

const data = [
    {
        userImage: "images/img_1_52.png",
        title: "Riverside Park Development",
        description:
            "The Riverside Park Development project focuses on transforming the area along the city's riverbank into a vibrant public park. This initiative includes creating walking trails, p",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_2_1.png",
        title: "Traffic Management System",
        description:
            "The Smart Traffic Management System project aims to modernize the city's traffic infrastructure by implementing advanced traffic control technologies. This initiative includes the",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_3_1.png",
        title: "Riverside Park Development",
        description:
            "The Riverside Park Development project focuses on transforming the area along the city's riverbank into a vibrant public park. This initiative includes creating walking trails, p",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_4_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city&#39;s public transportation system. This initiative includes adding new bus routes, increasing the frequer",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_5_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city&#39;s public transportation system. This initiative includes adding new bus routes, increasing the frequer",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_6_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city&#39;s public transportation system. This initiative includes adding new bus routes, increasing the frequer",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_7_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city&#39;s public transportation system. This initiative includes adding new bus routes, increasing the frequer",
        seeMoreButton: "See More",
    },
    {
        userImage: "images/img_8_1.png",
        title: "Expansion of Public Transit Network",
        description:
            "The Expansion of Public Transit Network project focuses on extending the city&#39;s public transportation system. This initiative includes adding new bus routes, increasing the frequer",
        seeMoreButton: "See More",
    }
];

export default function ProjectsColoredPage() {
  return (
    <>
      <Helmet>
        <title>Rishi Rishav&#39;s Application2</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="flex flex-col items-center gap-[136px] md:gap-[102px] sm:gap-[68px]">
          <ProjectscoloredRowprojectsOne />
          <div className="container-xs md:p-5">
            <div className="grid grid-cols-2 justify-center gap-6 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <RiversideParkDevelopment {...d} key={"projectscolored" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
        <Footer className="mt-[136px]" />
      </div>
    </>
  );
}
