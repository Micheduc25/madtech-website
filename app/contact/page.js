"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, AlertCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      try {
        // Simulating an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Contact MADTECH
        </h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full border  py-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full border py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isSubmitting
                      ? "bg-indigo-400"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
                <AlertCircle className="mr-2" size={20} />
                An error occurred. Please try again later.
              </div>
            )}
          </div>

          {/* Company Information and Map */}
          <div className="w-full md:w-1/2 bg-indigo-700 text-white p-8">
            <h2 className="text-2xl font-semibold mb-6">Our Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-2" size={20} />
                Afeme Nord, Douala, Cameroon
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={20} />
                +237 681 757 514
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={20} />
                contact@madtech.cm
              </p>
            </div>

            {/* Map Placeholder */}
            {/* <div className="mt-8 aspect-w-4 aspect-h-3">
              <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Map Placeholder</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600">
            We're open Monday to Friday, 9:00 AM - 6:00 PM (GMT+1).
            <br />
            Come see how we're revolutionizing tech in Cameroon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
