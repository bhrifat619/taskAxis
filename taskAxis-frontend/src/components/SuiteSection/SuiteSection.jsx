import {FaTools, FaTasks, FaHeadset} from "react-icons/fa";
import suiteImg from "../../assets/find-talent.jpg";
import {  Fade } from "react-awesome-reveal";
const SuiteSection = () => {
  return (
   
      <div className="my-5 rounded-lg flex flex-col lg:flex-row bg-secondary text-white">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 lg:p-16 space-y-6">
         <Fade cascade damping={0.2} direction="up" triggerOnce>
          <p className="uppercase tracking-wide font-heading font-semibold ">
            Taskly Suite
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight font-heading">
            This is how <br />
            <span>great task creators</span> <br />
            find great help.
          </h2>
          <p className="text-base text-white/80">
            Reach top talent for your tasks with Taskly. Post, manage, and grow
            — powered by a modern workflow.
          </p>

          <ul className="space-y-4  text-sm">
            <li className="flex items-start gap-3">
              <FaTools className=" mt-1" />
              Access skilled talent to complete your tasks efficiently
            </li>
            <li className="flex items-start gap-3">
              <FaTasks className=" mt-1" />
              Manage your workflow: assign, review, and reward with ease
            </li>
            <li className="flex items-start gap-3">
              <FaHeadset className="mt-1" />
              Get our support for smooth task posting & hiring
            </li>
          </ul>

          <button className="btn text-white btn-primary mt-2">
            Learn more
          </button>
          </Fade>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 h-[400px] lg:h-auto">
          <img
            src={suiteImg}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    
  );
};

export default SuiteSection;
