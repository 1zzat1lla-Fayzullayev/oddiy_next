import React from "react";
import Wrapper from "./Wrapper";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <Wrapper>
      <div className="text-center py-12 mx-[20px] xl:mx-0">
        <h2 className="text-4xl font-bold mb-6">Features You&apos;ll Love</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Say goodbye to messy screenshots and scattered notes—Geotok makes
          travel planning effortless.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon="/features_video.svg"
            title="Video-to-Map Conversion"
            description="Turn TikTok videos into Google Map pins instantly"
          />
          <FeatureCard
            icon="/features_location.svg"
            title="Custom Travel Maps"
            description="Personalize your itineraries and keep all your dream destinations in one place"
          />
          <FeatureCard
            icon="/features_group.svg"
            title="Collaborative Planning"
            description="Share your maps with friends and plan trips together effortlessly"
          />
          <FeatureCard
            icon="/features_trending.svg"
            title="Discover Hotspots"
            description="Explore the most viral and trending TikTok locations in any city"
          />
        </div>

        <button className="inline-flex items-center justify-center transition-all ease-in-out gap-2 text-sm font-medium text-black border border-[#ff0050] hover:bg-[#ff0050] hover:text-white h-11 px-8 rounded-md mt-[25px]">
          Learn More
        </button>
      </div>
    </Wrapper>
  );
}

export default Features;
