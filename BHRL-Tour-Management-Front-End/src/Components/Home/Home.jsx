import React from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import useScrollToTop from "../../Hooks/useScrollToTop"; // Assuming this hook exists
import { Button } from "../ui/button"; // Assuming you have a ShadCN/UI button or similar
import Hero from "./Hero";
import Featured from "./Featured";

const Home = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen pt-10 bg-slate-50">
      {/* Hero Section */}
      <Hero></Hero>
      <Featured></Featured>

      
    </div>
  );
};

export default Home;
