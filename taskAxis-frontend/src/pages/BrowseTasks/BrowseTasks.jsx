import React from "react";

import BrowseTask from "./BrowseTask";
import {useLoaderData} from "react-router";

const BrowseTasks = () => {
  const tasks = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Browse Tasks</h1>

      <div className="overflow-x-auto h-full rounded-lg border-t border-x border-accent">
        <table className="table bg-base-300 w-full ">
          <thead className="bg-secondary text-white ">
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Deadline</th>
              <th>Posted By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="rounded-b-lg">
            {tasks?.map((task, index) => (
              <BrowseTask key={task._id} task={task} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTasks;
