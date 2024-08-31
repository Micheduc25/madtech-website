"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
// import { useRouter } from "next/navigation";

import projectDetails from "@/data/projectDetails";

const ProjectDetailsPage = ({ params }) => {
  const projectData = projectDetails.find(
    (project) => project.slug === params.slug
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{`${projectData.title} | MADTECH Projects`}</title>
        <meta name="description" content={projectData.description} />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {projectData.title}
            </h1>
            <p className="text-xl mb-8">{projectData.description}</p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2">
                <Image
                  src={projectData.image}
                  alt={projectData.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-600 mb-6">
                  {projectData.fullDescription}
                </p>
                <h3 className="text-2xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Key Achievements
                </h3>
                <ul className="list-disc pl-5 text-gray-600 mb-6">
                  {projectData.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Challenges and Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Challenges</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {projectData.challenges.map((challenge, index) => (
                    <li key={index} className="mb-2">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Solutions</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {projectData.solutions.map((solution, index) => (
                    <li key={index} className="mb-2">
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projectData.impact.map((impact, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-600">{impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl font-light italic mb-4">
              "{projectData.testimonial.quote}"
            </blockquote>
            <p className="font-semibold">{projectData.testimonial.author}</p>
            <p className="text-sm">{projectData.testimonial.position}</p>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project Timeline
            </h2>
            <div className="max-w-2xl mx-auto">
              {projectData.timeline.map((item, index) => (
                <div key={index} className="flex mb-4">
                  <div className="flex-shrink-0 w-24 text-sm font-semibold text-blue-600">
                    {item.date}
                  </div>
                  <div className="flex-grow pl-8 border-l-2 border-blue-600">
                    <p className="font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Next Big Idea?
            </h2>
            <p className="mb-8 text-xl">
              Let's collaborate to create innovative solutions that drive your
              business forward in Cameroon.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetailsPage;
