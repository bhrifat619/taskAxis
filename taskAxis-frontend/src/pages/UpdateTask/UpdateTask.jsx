import React, {useContext} from "react";
import {FaArrowLeftLong} from "react-icons/fa6";

import {useLoaderData, useNavigate} from "react-router";
import Swal from "sweetalert2";
import {AuthContext} from "../../provider/Contexts";
const UpdateTask = () => {
  const navigate = useNavigate();
  const taskData = useLoaderData();
  const {_id, title, category, budget, deadline, description} = taskData || {};
  
  const {user} = useContext(AuthContext);
  const handleUpdateTask = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formdata = Object.fromEntries(form);

    const updatedTaskData = {
      ...formdata,
      bidCount: 0,
    };

    //     Data Send To DB
    fetch(`http://localhost:3000/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Task Updated!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <>
      <div className="md:w-11/12 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className=" text-2xl btn bg-transparent shadow-none border-none shadow-text font-heading"
        >
          {" "}
          <FaArrowLeftLong size={18} />
          Go Back
        </button>
      </div>
      <div className="md:w-11/12 mx-auto mt-5 p-10 bg-base-300 text-base-content text-center rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-base-content  shadow-text font-heading">
          Update Task
        </h1>
        <p className="text-base-200 text-center mt-2">
          Edit and update the details of your posted task. You can change the
          title, category, deadline, budget, and{" "}
          <br className="hidden lg:block" /> description. Make sure to save your
          changes to keep the task listing up to date.
        </p>
        <form
          onSubmit={handleUpdateTask}
          className="text-left mt-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-5"
          action=""
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Task Title
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none text-base-200 rounded-lg w-full"
              name="title"
              defaultValue={title}
              required
              placeholder="Enter your task title"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Category
            </legend>
            <select
              name="category"
              defaultValue={category}
              className="select input outline-none border-none focus-none text-base-200 rounded-lg w-full"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option>Web Development</option>
              <option>Web Design</option>
              <option>Ai & Machine Learning</option>
              <option>Video Editing</option>
              <option>Graphics Design</option>
              <option>UI & UX</option>
              <option>Writing</option>
              <option>Marketing</option>
              <option>Other</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Deadline
            </legend>
            <input
              type="date"
              name="deadline"
              required
              defaultValue={deadline}
              className="input outline-none border-none focus-none text-base-200 rounded-lg w-full"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Budget
            </legend>
            <div className="relative ">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                $
              </span>
              <input
                type="number"
                name="budget"
                min="1"
                required
                defaultValue={budget}
                className="input pl-3 outline-none border-none  focus-none text-base-200 rounded-lg w-full "
                placeholder="Ex: 25.00"
              />
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Your Name
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none focus:outline-none text-base-200 rounded-lg w-full"
              name="name"
              readOnly
              defaultValue={user?.displayName}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Your Email
            </legend>
            <input
              type="text"
              className="input outline-none border-none focus-none focus:outline-none text-base-200 rounded-lg w-full"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder=""
            />
          </fieldset>
          <fieldset className="col-span-full fieldset">
            <legend className="fieldset-legend text-lg font-semibold">
              Description
            </legend>
            <textarea
              name="description"
              defaultValue={description}
              className="input outline-none border-none focus:outline-none text-primary-content rounded-lg w-full py-2 min-h-15 box-border resize-none whitespace-pre-wrap break-words"
              placeholder="Enter your task Desciption"
              required
            ></textarea>
          </fieldset>
          <input
            className="mt-4 w-full col-span-full btn-secondary btn  text-xl text-white  hover:bg-hover-color"
            type="submit"
            value="Update Task"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateTask;
