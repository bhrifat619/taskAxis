import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../provider/Contexts";
import MyPostedTask from "./MyPostedTask";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import {useNavigate} from "react-router";
import noTaskImg from "../../assets/creatively-designed-flat-conceptual-icon-of-no-task-vector-removebg-preview.png";
const MyPostedTasks = () => {
  const {user} = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.email) return;
    setIsLoading(true);
    fetch(`http://localhost:3000/tasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTasks(data);
        setIsLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMyTasks(myTasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };
  if (isLoading) {
    return <Spinner />;
  }
  if (myTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center bg-base-300 rounded-lg shadow border border-accent">
        <div className="w-40 h-40 mx-auto pl-4">
          <img
            src={noTaskImg}
            alt="No tasks"
            className="w-full mb-6  "
          />
        </div>

        <h2 className="text-2xl font-semibold text-base-content mb-2">
          No Tasks Posted Yet
        </h2>
        <p className="text-base-200 mb-4">
          You haven't added any tasks. Start by posting one!
        </p>
        <button
          onClick={() => navigate("/addTasks")}
          className="bg-secondary text-white px-6 py-2 rounded-lg cursor-pointer transition"
        >
          Add a Task
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold text-center mb-6">My Posted Tasks</h1>

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
            {myTasks?.map((task, index) => (
              <MyPostedTask
                key={task._id}
                handleDelete={handleDelete}
                task={task}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedTasks;
