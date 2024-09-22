"use client";

import React, { useState } from "react";
import Head from "next/head";

import Project from "@/components/Project";

import projectsData from "@/data/projects";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(
      projectsData.map((project) => {
        const tech = project.technologies[0];
        return tech.includes(".js")
          ? "Web Development"
          : tech === "Flutter"
          ? "Mobile App"
          : "Web Development";
      })
    ),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => {
          const tech = project.technologies[0];
          const category = tech.includes(".js")
            ? "Web Development"
            : tech === "Flutter"
            ? "Mobile App"
            : "Web Development";
          return category === filter;
        });

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>GUMUH Projects | Innovative Solutions for Cameroon</title>
        <meta
          name="description"
          content="Explore GUMUH's innovative projects driving digital transformation across Cameroon and Africa."
        />

        <meta property="og:title" content="GUMUH Projects" />
        <meta
          property="og:description"
          content="Explore GUMUH's innovative projects driving digital transformation across Cameroon and Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gumuh.com/projects" />
        <meta
          property="og:image"
          content="https://gumuh.com/images/projects.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="GUMUH" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="fr_FR" />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-xl mb-8">
              Discover how GUMUH is driving innovation and solving real-world
              challenges in Cameroon and beyond.
            </p>
          </div>
        </section>

        {/* Project Filter */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full ${
                    filter === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 hover:bg-blue-100"
                  } transition-colors duration-300`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.image}
                  achievements={project.achievements}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <p className="text-gray-600">Successful Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <p className="text-gray-600">Industries Served</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  50%+
                </div>
                <p className="text-gray-600">
                  Average Improvement in Key Metrics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
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
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
