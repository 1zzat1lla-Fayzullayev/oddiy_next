import Image from "next/image";

function TravelCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-white transition-colors text-center">
      <div className="w-16 h-16 rounded-full bg-[#ff00501a] text-primary flex items-center justify-center mx-auto mb-6">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="w-[2rem] h-[2rem] "
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default TravelCard;
