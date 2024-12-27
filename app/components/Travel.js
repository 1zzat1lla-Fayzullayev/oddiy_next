import React from "react";
import Wrapper from "../components/Wrapper";
import TravelCard from "./TravelCard";
import StartNow from "./StartNow";

const Travel = () => {
  const travel = [
    {
      title: "Travelers",
      description:
        "Turn wanderlust into reality with simple, organized itineraries",
      icon: "/user.svg",
    },
    {
      title: "Content Lovers",
      description: "Save and explore every viral spot you want to visit",
      icon: "/camera.svg",
    },
    {
      title: "Planners",
      description: "Make trips stress-free with interactive, easy-to-use maps",
      icon: "/planners.svg",
    },
    {
      title: "Groups",
      description: "Share and plan adventures with friends and family",
      icon: "/features_group.svg",
    },
  ];

  return (
    <div className="bg-[#f9fafb]">
      <Wrapper>
        <div className="mx-[20px] xl:mx-0">
          <h2 className="text-4xl font-bold text-center mb-6 pt-[100px]">
            Who is Geotok For?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Whether you're a solo explorer or planning with friends, Geotok
            helps you turn travel dreams into reality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travel.map((feature, index) => (
              <TravelCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <div className="mt-[100px]">
      <StartNow />
      </div>
    </div>
  );
};

export default Travel;
