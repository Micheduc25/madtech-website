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
      style={{ objectPosition: "center 15%" }}
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
      name: "Ndjock Michel",
      role: "Founder & CEO",
      image: "/images/ndjockjunior.jpeg",
      bio: "With a Masters of Engineering Science in Software Engineering from NAHPI, Ndjock has over 10 years of experience in Software Development and Cloud DevOps. He founded MADTECH with a vision to drive technological innovation in Cameroon and across Africa.",
    },
    {
      name: "Kunde Godfrey",
      role: "CTO",
      image: "/images/godfrey.jpeg",
      bio: "Godfrey is a seasoned software architect with expertise in Software Design and Machine. He leads our technical strategy and ensures we're always at the cutting edge of technology.",
    },
    {
      name: "Njimukara Brian",
      role: "Head of Product",
      image: "/images/brian.jpeg",
      bio: "Brian brings a decade of experience in product management from the National Higher Polytechnic Institute. He's passionate about creating user-centric products that solve real African challenges.",
    },
    {
      name: "Ndifon Titiana",
      role: "Lead UI/UX Designer",
      image: "/images/titiana.jpeg",
      bio: "Titiana is a highly skilled UI/UX designer with expertise in creating beautiful and intuitive user interfaces. With a strong eye for detail and a passion for user experience, Titiana ensures that our products are not only visually appealing but also easy to use.",
    },
    {
      name: "Tangu Achilis",
      role: "Lead Front-End Developer",
      image: "/images/achilis.jpeg",
      bio: "Tangu is a highly skilled front-end developer with expertise in building responsive and user-friendly web and mobile applications. With a strong eye for design and attention to detail, Tangu ensures that our front-end development meets the highest standards of quality and usability.",
    },
    {
      name: "Sahla Sandrine",
      role: "Cybersecurity Specialist",
      image: "/images/sandrine.jpeg",
      bio: "Sahla is a highly skilled cybersecurity specialist with expertise in securing networks and systems. With a deep understanding of the latest threats and vulnerabilities, Sahla ensures that our clients' data and infrastructure are protected from cyber attacks. Her meticulous approach to security and strong problem-solving skills make her an invaluable member of our team.",
    },
    {
      name: "Ndogmo Kevin",
      role: "Lead Backend Developer",
      image: "/images/team/omar.jpg",
      bio: "Kevin is a highly skilled backend developer with expertise in building scalable and efficient server-side applications. With a strong understanding of databases and APIs, Kevin ensures that our backend systems are robust and performant. His problem-solving skills and attention to detail make him an invaluable member of our team.",
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
