import React from "react";
import Link from "next/link";

const ServiceCard = ({ id, title, description, icon, color }) => {
  return (
    <div className={`${color} rounded-lg shadow-lg overflow-hidden`}>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <Link
          href={`/services/${id}`}
          className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
