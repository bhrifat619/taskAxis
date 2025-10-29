import React from "react";

import {FaDollarSign, FaRegCalendarAlt} from "react-icons/fa";
import {Link} from "react-router";
import pin from "../../assets/pin.png";
const FeatureTask = ({task}) => {
  const {_id, title, category, budget, deadline, name, description} =
    task || {};
  return (
    <Link to={`/tasks/${_id}`} className="block h-full  ">
      <div className="min-h-60 border border-accent flex flex-col justify-between rounded-lg shadow bg-base-300 text-base-content transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="py-5 px-4 space-y-3 flex flex-col flex-1">
          {/* Task Title */}
          <div className="flex items-center gap-2">
            <img className="w-7 rotate-280" src={pin} alt="" />
            <h2 className="font-bold text-xl text-base-content "> {title}</h2>
          </div>

          {/* Task Info */}
          <div className="text-sm space-y-1 flex items-center justify-between">
            <p className="font-medium">
              Posted by : <span className="text-base-200">{name}</span>
            </p>
            <button className="capitalize btn btn-outline btn-secondary border-secondary btn-sm rounded-full bg-secondary/5 hover:text-secondary hover:shadow-none">
              {category}
            </button>
          </div>

          {/* Spacer to push footer down */}
          <div className="flex-grow">
            <p className="text-sm text-base-200">
              {description.length > 80
                ? `${description.slice(0, 40)}...`
                : description}
            </p>
          </div>

          {/* Budget & Deadline */}
          <div className="flex justify-between items-center text-sm pt-4 border-t border-base-content/10">
            <div className="flex items-center font-semibold">
              Budget:{" "}
              <span className="text-secondary flex items-center">
                <FaDollarSign />
                {budget}
              </span>
            </div>
            <div className="flex items-center gap-1 ">
              <FaRegCalendarAlt />
              <span>Deadline: <span className="text-secondary">{new Date(deadline).toLocaleDateString()}</span> </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureTask;
