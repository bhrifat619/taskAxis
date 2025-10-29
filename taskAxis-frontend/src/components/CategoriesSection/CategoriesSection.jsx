import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaCode,
  FaPaintBrush,
  FaRobot,
  FaVideo,
  FaPencilRuler,
  FaDraftingCompass,
  FaPenNib,
  FaBullhorn,
  FaEllipsisH,
} from "react-icons/fa";

const categories = [
  {
    title: "Web Development",
    icon: <FaCode size={26} />,
    bg: "bg-blue-200",
  },
  {
    title: "AI & Machine Learning",
    icon: <FaRobot size={26} />,
    bg: "bg-indigo-200",
  },
  {
    title: "Video Editing",
    icon: <FaVideo size={26} />,
    bg: "bg-red-200",
  },
  {
    title: "Graphics Design",
    icon: <FaPencilRuler size={26} />,
    bg: "bg-green-200",
  },
  {
    title: "UI & UX",
    icon: <FaDraftingCompass size={26} />,
    bg: "bg-yellow-200",
  },
  {
    title: "Marketing",
    icon: <FaBullhorn size={26} />,
    bg: "bg-purple-200",
  }
];

const CategoriesSection = () => {
  return (
    <div className="mt-5 py-5  mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-left font-heading mb-5">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((cat, index) => (
          <Fade key={index} direction="up" triggerOnce delay={index * 50}>
            <div className={`rounded-lg p-6 shadow-md hover:shadow-lg h-40 lg:h-auto ${cat.bg} transition`}>
              <div className="flex flex-col items-center gap-4 mb-3 text-secondary">
                <div className="p-3 bg-white rounded-full shadow">{cat.icon}</div>
                <h3 className="text-lg font-semibold text-center">{cat.title}</h3>
              </div>
              
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
