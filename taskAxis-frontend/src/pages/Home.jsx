import React from "react";
import Slider from "../components/Slider/Slider";
import FeatureTasks from "../components/FeatureTasks/FeatureTasks";
import JoinUs from "../components/JoinUs/JoinUs";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import SuiteSection from "../components/SuiteSection/SuiteSection";

const Home = () => {
  return (
    <div>
      <section className="w-full rounded-lg">
        {/* Slider */}
        <Slider></Slider>
      </section>
      {/* Categories Section */}
      <section>
        <CategoriesSection />
      </section>
      {/* Feature Tasks */}
      <section>
        <FeatureTasks />
      </section>
      {/* Join Us Section */}
      <section>
        <JoinUs />
      </section>
      {/* Suite Section */}
      <section>
        <SuiteSection />
      </section>
    </div>
  );
};

export default Home;
