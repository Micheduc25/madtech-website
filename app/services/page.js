import React from "react";
import Head from "next/head";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Our Services | GUMUH</title>
        <meta
          name="description"
          content="Explore GUMUH's comprehensive range of tech services tailored for businesses in Cameroon and across Africa."
        />

        <meta property="og:title" content="Our Services | GUMUH" />
        <meta
          property="og:description"
          content="Explore GUMUH's comprehensive range of tech services tailored for businesses in Cameroon and across Africa."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gumuh.com/services" />
        <meta
          property="og:image"
          content="https://gumuh.com/images/services.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="GUMUH" />
      </Head>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl mb-8">
              Empowering Cameroonian businesses with cutting-edge technology
              solutions
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose GUMUH?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                <p>
                  We understand the unique challenges and opportunities in the
                  Cameroonian market.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Solutions
                </h3>
                <p>
                  We leverage cutting-edge technologies to deliver
                  forward-thinking solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Customized Approach
                </h3>
                <p>
                  We tailor our services to meet the specific needs of each
                  client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl">
              Let's discuss how GUMUH can help you achieve your technology
              goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
