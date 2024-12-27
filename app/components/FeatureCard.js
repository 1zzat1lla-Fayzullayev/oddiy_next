import Image from "next/image";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors text-start">
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="w-12 h-12 text-primary mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
