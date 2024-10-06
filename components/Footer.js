import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-[#feb543]">
                <Image
                  src="/images/logo-white.png"
                  width={150}
                  height={50}
                  alt="Gumuh Logo"
                />
              </h5>
              <ul>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-300">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-[#feb543]">
                Our Services
              </h5>
              <ul>
                <li>
                  <Link
                    href="/services/custom-software-development"
                    className="hover:text-gray-300"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-app-development"
                    className="hover:text-gray-300"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-machine-learning"
                    className="hover:text-gray-300"
                  >
                    AI Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-[#feb543]">
                Contact Us
              </h5>
              <ul>
                <li>Afeme Nord, Yaoundé, Cameroon</li>
                <li>Phone: +237 681 757 514</li>
                <li>Email: contact@gumuh.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="social-box flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/images/fb.png"
                  alt="Facebook"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/images/linkedin1.png"
                  alt="LinkedIn"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/images/instagram1.png"
                  alt="Instagram"
                  width={35}
                  height={35}
                />
              </a>
            </div>
            {/* <div className="newsletter-form">
              <form className="flex flex-col md:flex-row items-center">
                <label htmlFor="newsletter" className="mr-4 text-lg uppercase">
                  Newsletter
                </label>
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Enter your email"
                  className="w-full md:w-64 h-10 px-4 rounded-md text-gray-900 mb-4 md:mb-0 md:mr-4"
                />
                <button
                  type="submit"
                  className="bg-[#d9c406] text-white px-6 py-2 rounded-md uppercase hover:bg-[#c0ae05] transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-800">
            © GUMUH {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
