import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    const script2 = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    script2.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script2.async = true;
    script2.defer = true;

    document.body.appendChild(script);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Contact form */}
        <div className="lg:w-1/3 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <form>
              <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Let's Connect!
              </h2>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Github card */}
        <div className="lg:w-2/3 md:w-1/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-align justify-center relative">
          <div
            className="github-card flex flex-col items-center justify-center"
            data-github="dennismacc"
            data-width="300"
            data-height="200"
            data-theme="default"
          ></div>
          {/* LinkedIn card */}
          <div>
            <div
              className="badge-base LI-profile-badge flex-col items-center justify-center"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="VERTICAL"
              data-vanity="dennis-maccarthy-31501821b"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="www.linkedin.com/in/dennis-maccarthy-31501821b"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
