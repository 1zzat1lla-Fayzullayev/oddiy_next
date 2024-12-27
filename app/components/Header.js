import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FF0050] to-[#8134AF]">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 xl:px-0">
          <div className="flex-1 text-center lg:text-left text-white">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <Image
                src="/video.svg"
                alt="Video Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <Image
                src="/location.svg"
                alt="Location Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Turn TikTok Videos into Your Perfect Travel Map
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Transform TikTok inspiration into effortless itineraries. Discover must-see landmarks 
              and hidden gems, all organized in your personalized Google Map.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#ff0050] bg-white hover:bg-gray-100 h-11 px-8 rounded-md shadow-md">
                👉 Download Now
              </button>
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white border border-white hover:bg-white/10 h-11 px-8 rounded-md">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="animate-float">
              <Image
                src="/placeholder.svg"
                alt="Geotok App Preview"
                width={300}
                height={300}
                className="w-full max-w-[300px] mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
