import React from "react";
import {FaPenNib, FaBriefcase, FaStar} from "react-icons/fa";
import joinUsImg from "../../assets/join-us-img.png";
import {useNavigate} from "react-router";
import {Bounce, Fade} from "react-awesome-reveal";
const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Fade cascade damping={0.2} direction="up" triggerOnce>
        <div className="border border-accent shadow-lg bg-base-300 rounded-lg p-5 my-10 flex flex-col items-center md:flex-row md:gap-5">
          <div className="bg-[#E7E7E7] rounded-lg">
            <img
              className="w-full rounded-lg h-120 md:h-140 object-cover"
              src={joinUsImg}
              alt=""
            />
          </div>
          <div className=" px-4 md:px-10 py-12 text-base-content">
                <Bounce duration={1500} damping={0.1} direction="up" triggerOnce >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
                Up your work game, it’s easy
              </h2>

              <div className="space-y-6 text-left">
                {/* Point 1 */}
                <div className="flex gap-4 items-start">
                  <FaPenNib className="text-secondary text-xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">
                      No cost to join
                    </h3>
                    <p className="text-sm text-base-content/70">
                      Register and browse talent profiles, explore projects, or
                      even book a consultation.
                    </p>
                  </div>
                 
                </div>

                {/* Point 2 */}
                <div className="flex gap-4 items-start">
                  <FaBriefcase className="text-secondary text-xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">
                      Post a job and hire top talent
                    </h3>
                    <p className="text-sm text-base-content/70">
                      Finding talent doesn’t have to be a chore. Post a job or
                      we can search for you!
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4 items-start">
                  <FaStar className="text-secondary text-xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold font-heading">
                      Work with the best—without breaking the bank
                    </h3>
                    <p className="text-sm text-base-content/70">
                      AppMaze makes it affordable to post tasks and take
                      advantage of low transaction fees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-start gap-4">
                <button
                  onClick={() => navigate("/addTasks")}
                  className="btn btn-secondary"
                >
                  Add Your Task
                </button>
                <button onClick={() => navigate("/browseTasks")} className="btn btn-outline btn-secondary">
                  Browse task
                </button>
              </div>
            </div>
             </Bounce>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default JoinUs;
