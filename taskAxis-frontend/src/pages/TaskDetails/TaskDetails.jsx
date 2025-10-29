import React, {useContext, useState} from "react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaEnvelope,
  FaTags,
  FaTasks,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import {useLoaderData} from "react-router";
import {toast} from "react-toastify";
import {AuthContext} from "../../provider/Contexts";

const TaskDetails = () => {
  const task = useLoaderData();
  const {user} = useContext(AuthContext);
  const [bidCount, setBidCount] = useState(task.bidCount);
const [showBidCount,setShowBidCount] = useState(true)
  const handleBidCount = (id) => {
  const biddersData = {
    taskId: task._id,
    name: user.displayName,
    email: user.email,
    bidTime: new Date().toISOString(),
  };

  fetch(`http://localhost:3000/tasks/${id}/bidCount`, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        setBidCount((prev) => prev + 1);
        setShowBidCount(true); 

        const timeout = setTimeout(() => {
          setShowBidCount(false);
        }, 7000);

        return () => clearTimeout(timeout);
      }
    });

  // Store bid info in DB
  fetch("http://localhost:3000/bids", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(biddersData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.insertedId) {
        toast.success("You bidded for this task");
      }
    });
};
  if (!task) {
    return (
      <div>
        <h1>No Task Found</h1>
      </div>
    );
  }

  const {title, description, name, email, category, deadline, budget, _id} =
    task;

  return (
    <div className="w-full p-8 bg-base-300 rounded-lg shadow-lg">
      {/* Top section showing user bid count */}
      <div className="text-lg font-semibold mb-4 text-center text-secondary">
        {bidCount > 0 && showBidCount && (
          <p>
            🎯 You bid for{" "}
            <span className="font-bold text-base-content">
              {bidCount}
            </span>{" "}
            opportunities
          </p>
        )}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-3 font-heading">
        <FaTasks className="text-secondary" /> {title}
      </h1>

      {/* Description */}
      <p className="mb-6 text-lg">{description}</p>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base-content text-lg">
        <div className="flex items-center gap-3">
          <FaTags size={23} className="text-secondary " />
          <span>
            <strong>Category:</strong> {category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCalendarAlt size={23} className="text-secondary" />
          <span>
            <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaDollarSign size={23} className="text-secondary" />
          <span>
            <strong>Budget:</strong> ${budget}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaUsers size={23} className="text-secondary" />
          <span>
            <strong>Total Bids:</strong> {bidCount}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaUser size={23} className="text-secondary" />
          <span>
            <strong>Posted by:</strong> {name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope size={23} className="text-secondary" />
          <span>
            <strong>Email:</strong> {email}
          </span>
        </div>
      </div>

      {/* Bid Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => handleBidCount(_id)}
          className="block btn text-lg btn-secondary w-full btn-md"
        >
          Bid
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
