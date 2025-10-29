import React, {useState} from "react";
import {Link} from "react-router";

const MyPostedTask = ({task, index, handleDelete}) => {
  const {_id, title, category, budget, deadline, name} = task || {};
  const [bidsData, setBidsData] = useState([]);

  const handleBids = (id) => {
    fetch(`http://localhost:3000/bids/${id}`)
      .then((res) => res.json())
      .then((data) => setBidsData(data));
  };
  const modalId = `modal_${_id}`;
  return (
    <tr className="border-b border-accent relative">
      <td className="px-4 py-4">{index + 1}</td>
      <td className="px-4 py-4 whitespace-nowrap">{title}</td>
      <td className="px-4 py-4">{category}</td>
      <td className="px-4 py-4">${budget}</td>
      <td className="px-4 py-4">{new Date(deadline).toLocaleDateString()}</td>
      <td className="px-4 py-4">{name}</td>

      <td className="space-y-2 lg:space-y-0">
        <Link to={`/updateTask/${_id}`} className="block lg:inline ">
          <button className="btn btn-sm btn-info text-white mr-2">
            Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(task._id)}
          className="btn btn-sm btn-error text-white mr-2"
        >
          Delete
        </button>

        <>
          <button
            onClick={() => {
              document.getElementById(modalId).showModal();
              handleBids(task._id);
            }}
            className="lg:mt-2 xl:mt-0 btn btn-sm btn-secondary"
          >
            Bids
          </button>
          <dialog id={modalId} className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm bg-transparent btn-circle hover:bg-secondary hover:text-white  absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-bold text-lg mb-4">
                Total Bids for this Task {bidsData.length}
              </h3>

              {bidsData.length > 0 ? (
                <div className="space-y-3">
                  {bidsData.map((bid) => (
                    <div
                      key={bid._id}
                      className="p-3 border border-accent rounded-md bg-base-300"
                    >
                      <p>
                        <strong>Bidder Name:</strong> {bid.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {bid.email}
                      </p>
                      <p>
                        <strong>Bid Time:</strong>{" "}
                        {new Date(bid.bidTime).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No bids yet.</p>
              )}
            </div>
          </dialog>
        </>
      </td>
    </tr>
  );
};

export default MyPostedTask;
