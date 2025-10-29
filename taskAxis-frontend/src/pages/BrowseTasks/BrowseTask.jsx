import React from "react";
import {FaEye} from "react-icons/fa";
import {Link} from "react-router";

const BrowseTask = ({task, index}) => {
  const {_id, title, category, budget, deadline, name} = task || {};
  return (
    <tr className="border-b border-accent ">
      <td className="px-4 py-4">{index + 1}</td>
      <td className="px-4 py-4 whitespace-nowrap">{title}</td>
      <td className="px-4 py-4">{category}</td>
      <td className="px-4 py-4">${budget}</td>
      <td className="px-4 py-4">{new Date(deadline).toLocaleDateString()}</td>
      <td className="px-4 py-4">{name}</td>
      <td className="px-4 py-4">
        <Link to={`/tasks/${_id}`}>
          <button className="border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg flex items-center px-3 py-2 gap-1 cursor-pointer text-sm">
            <FaEye size={25}/> See Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default BrowseTask;
