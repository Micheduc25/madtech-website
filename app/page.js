"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { StringManipulator } from "string-capitalizer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Project from "@/components/Project";
import projects from "@/data/projects";
import services from "@/data/services";
import Head from "next/head";

const HomePage = () => {
  const sliderItems = [
    {
      title: "Empowering Cameroon's Digital Future",
      description:
        "GUMUH is at the forefront of Cameroon's tech revolution, developing innovative solutions that address local challenges and drive economic growth.",
      image: "/images/bg1.jpg",
    },
    {
      title: "Bridging the Digital Divide",
      description:
        "Our solutions aim to increase digital literacy and access to technology across Cameroon, from bustling cities to rural communities.",
      image: "/images/bg2.jpg",
    },
    {
      title: "Cultivating Local Tech Talent",
      description:
        "We're committed to nurturing the next generation of Cameroonian tech professionals through training programs and internships.",
      image: "/images/bg3.jpg",
    },
  ];

  const stringManipulator = new StringManipulator("About GUMUH");

  return (
    <>
      <Head>
        <title>GUMUH | Home</title>
        <meta
          name="description"
          content="GUMUH is a leading Cameroonian tech startup dedicated to driving digital innovation and empowering businesses across Africa."
        />
        <meta
          name="keywords"
          content="Cameroon tech startup, digital innovation, tech solutions, digital literacy, tech talent, Cameroonian tech professionals, AI solutions, machine learning, digital transformation, tech business, tech services, tech projects, digital growth, tech training, tech internships"
        />

        <meta key="robots" name="robots" content="index, follow" />
        <meta key="author" name="author" content="GUMUH" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta property="og:title" content="GUMUH | Home" />
        <meta
          property="og:description"
          content="GUMUH is a leading Cameroonian tech startup dedicated to driving digital innovation and empowering businesses across Africa."
        />
        <meta property="og:image" content="/images/bg1.jpg" />
        <meta property="og:url" content="https://gumuh.com" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-blue-900 text-white py-16">
            <div className="container mx-auto px-6">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="h-[500px]"
              >
                {sliderItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col md:flex-row items-center h-full">
                      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">
                          {item.title}
                        </h1>
                        <p className="mb-8">{item.description}</p>
                        <Link
                          href="/about"
                          className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                      <div className="md:w-1/2 relative h-64 md:h-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* About Us Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                {stringManipulator.capitalizeString()}
              </h2>
              <p className="text-center max-w-2xl mx-auto mb-8">
                GUMUH is a leading Cameroonian tech startup dedicated to driving
                digital innovation and empowering businesses across Africa. With
                5 years of experience and over 100 satisfied clients, we're
                committed to bridging the digital divide and fostering
                technological growth in our communities.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">5+</span>
                  <p>Years of Experience</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">100+</span>
                  <p>Clients Served</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-600">3</span>
                  <p>National Awards</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/about"
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p>{service.description}</p>
                    <Link
                      href={`/services/${service.id}`}
                      className="text-blue-600 hover:underline mt-4 inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Project Section */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                Featured Project
              </h2>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="h-[500px]"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Project
                      title={project.title}
                      description={project.description}
                      imageSrc={project.image}
                      achievements={project.achievements}
                      technologies={project.technologies}
                      link={project.link}
                      isFeature={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16 bg-blue-900 text-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">
                What Our Clients Say
              </h2>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-xl italic mb-4">
                  "GUMUH's innovative solutions have transformed our business
                  operations. Their expertise in AI and machine learning has
                  given us a competitive edge in the market."
                </p>
                <p className="font-semibold">
                  - Jean-Pierre Kouam, CEO of TechVision Cameroon
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-yellow-500">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                Ready to Transform Your Business?
              </h2>
              <p className="mb-8 text-blue-900">
                Let's discuss how GUMUH can help you achieve your digital goals.
              </p>
              <Link
                href="/contact"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
