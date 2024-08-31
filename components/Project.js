import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({
  title,
  description,
  imageSrc,
  achievements,
  technologies,
  link,
  isFeature = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg ${
        isFeature ? "md:flex" : ""
      }`}
    >
      <div
        className={`relative ${isFeature ? "md:w-1/2" : "w-full"} h-44 sm:h-96`}
      >
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105 object-cover h-fit"
        />
      </div>
      <div className={`p-6 ${isFeature ? "md:w-1/2" : "w-full"}`}>
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {achievements && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">
              Key Achievements:
            </h4>
            <ul className="list-disc pl-5 text-gray-600">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        {technologies && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-700 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {link && (
          <Link
            href={link}
            className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
