import React from "react";
import Image from "next/image";
import Link from "next/link";
import OurTeam from "@/components/OurTeam";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GUMUH</h1>
          <p className="text-xl mb-8">Empowering Africa's Digital Future</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/team.jpeg"
              alt="GUMUH Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              GUMUH is a pioneering Cameroonian software startup founded in
              2020. We are a team of passionate tech enthusiasts, innovative
              developers, and creative problem-solvers dedicated to leveraging
              cutting-edge technologies to address Africa's unique challenges
              and opportunities.
            </p>
            <p className="mb-4">
              Our diverse team brings together expertise in artificial
              intelligence, blockchain, cloud computing, and mobile
              technologies. We believe in the power of technology to transform
              lives and businesses across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovate</h3>
              <p>
                We strive to create innovative solutions that address the unique
                needs of African businesses and consumers, pushing the
                boundaries of what's possible with technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Empower</h3>
              <p>
                Our goal is to empower individuals and businesses across Africa
                with tools and technologies that enhance productivity,
                efficiency, and growth in the digital age.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p>
                We aim to bridge the digital divide and connect Africa to the
                global tech ecosystem, fostering collaboration and knowledge
                exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>
                Responsive, scalable web applications using modern frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p>
                Native and cross-platform mobile applications for iOS and
                Android
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p>
                Custom AI and machine learning solutions for business
                intelligence
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white rounded-full p-4 inline-block mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
              <p>
                Secure and transparent blockchain solutions for various
                industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Driving Digital Transformation
              </h3>
              <p className="mb-4">
                Since our inception, we've helped over 50 businesses across
                Cameroon and neighboring countries embrace digital solutions,
                resulting in an average 30% increase in operational efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Nurturing Tech Talent
              </h3>
              <p className="mb-4">
                Through our internship and mentorship programs, we've trained
                more than 100 young Cameroonian developers, contributing to the
                growth of the local tech ecosystem.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Innovating for Social Good
              </h3>
              <p className="mb-4">
                Our AI-powered crop disease detection app has helped over 1,000
                small-scale farmers improve their yield and reduce crop losses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Promoting Financial Inclusion
              </h3>
              <p className="mb-4">
                Our blockchain-based microfinance platform has facilitated over
                10,000 micro-loans to unbanked individuals, fostering
                entrepreneurship and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="mb-8 text-xl">
            Let's collaborate to create innovative solutions that drive your
            business forward.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Our team section */}

      <OurTeam />
    </div>
  );
};

export default AboutPage;
