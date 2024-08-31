import React from "react";
import Image from "next/image";

const TeamMember = ({ name, role, image, bio }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <Image
      src={image}
      alt={name}
      width={300}
      height={300}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <p className="text-gray-700">{bio}</p>
    </div>
  </div>
);

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Engr. Ndjock Michel Junior",
      role: "Founder & CEO",
      image: "/images/ndjockjunior.jpeg",
      bio: "With a Masters of Engineering Science in Software Engineering from NAHPI, Ndjock has over 10 years of experience in Software Development and machine learning. He founded MADTECH with a vision to drive technological innovation in Cameroon and across Africa.",
    },
    {
      name: "Jean-Paul Eyinga",
      role: "CTO",
      image: "/images/team/jean-paul.jpg",
      bio: "Jean-Paul is a seasoned software architect with expertise in blockchain and cloud technologies. He leads our technical strategy and ensures we're always at the cutting edge of technology.",
    },
    {
      name: "Marie Tchamba",
      role: "Head of Product",
      image: "/images/team/marie.jpg",
      bio: "Marie brings a decade of experience in product management from Silicon Valley. She's passionate about creating user-centric products that solve real African challenges.",
    },
    {
      name: "Kamdem Tchiengue",
      role: "Lead Mobile Developer",
      image: "/images/team/kamdem.jpg",
      bio: "Kamdem is our mobile app wizard, with numerous successful apps under his belt. He's committed to creating seamless mobile experiences for our diverse user base.",
    },
    {
      name: "Fatou Diop",
      role: "AI Research Scientist",
      image: "/images/team/fatou.jpg",
      bio: "Fatou leads our AI research initiatives. Her work focuses on applying machine learning to solve unique challenges in agriculture, healthcare, and education across Africa.",
    },
    {
      name: "Omar Njie",
      role: "Business Development Manager",
      image: "/images/team/omar.jpg",
      bio: "Omar has a strong background in tech sales and partnerships. He's responsible for growing MADTECH's presence across Africa and fostering key industry relationships.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At MADTECH, our strength lies in our diverse, talented team. Each
          member brings unique expertise and a shared passion for leveraging
          technology to drive positive change in Africa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
