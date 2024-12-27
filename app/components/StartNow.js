import React from "react";

function StartNow() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FF0050] to-[#8134AF] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Exploring Now!</h2>
        <p className="text-xl mb-8 opacity-90">
          Download Geotok today and start turning TikTok inspiration into
          real-world adventures.
        </p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-[#ff0050] hover:bg-gray-100">
          👉 Download Now
        </button>
      </div>
    </section>
  );
}

export default StartNow;
