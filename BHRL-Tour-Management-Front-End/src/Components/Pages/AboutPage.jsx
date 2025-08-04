import React from "react";

// --- Mocking dependencies to ensure the component is self-contained ---

// 1. Mock framer-motion
const motion = {
  div: React.forwardRef(({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )),
  h1: React.forwardRef(({ children, ...props }, ref) => (
    <h1 ref={ref} {...props}>
      {children}
    </h1>
  )),
  p: React.forwardRef(({ children, ...props }, ref) => (
    <p ref={ref} {...props}>
      {children}
    </p>
  )),
};

// 2. Mock useScrollToTop hook
const useScrollToTop = () => {
  React.useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      console.error("Could not scroll to top", e);
    }
  }, []);
};

// 3. Inline SVG Icons
const FaHeart = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
  </svg>
);
const FaShieldAlt = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80A48 48 0 0032 127.4V341.3a48 48 0 0020.7 40.5l192 120a48.15 48.15 0 0036.9 0l192-120A48 48 0 00480 341.3V127.4a48 48 0 00-13.5-33.7zM256 448l-160-100V150.2l160 66.7v231.1zm0-273.1l-160-66.7L256 48l160 66.7-160 66.7z"></path>
  </svg>
);
const FaLeaf = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M562.8 216.3c-5.4-1.8-11.2-2.1-16.8-1.2-5.6.9-10.9 3.3-15.2 6.9L384 340.2V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v20.2l-49-65.3c-4.4-5.9-11.4-9.6-19-10.4-7.6-.8-15.1 1.2-21.2 5.3L128 344.4V160c0-17.7-14.3-32-32-32S64 142.3 64 160v200c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-20.2l149.2-124.3c5.9-4.9 9.6-12.1 10.4-19.8.8-7.6-1.2-15.1-5.2-21.2zM0 480c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"></path>
  </svg>
);
const FaGithub = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 496 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.9-7.8 72.1 25.5 21.3-5.6 44.4-8.3 67.6-8.3 23.2 0 46.3 2.8 67.6 8.3 50.2-33.3 72.1-25.5 72.1-25.5 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.8 17.6 22.9 17.6 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 389.9 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);
const FaLinkedin = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);

const AboutPage = () => {
  useScrollToTop();
  return (
    <div className="bg-slate-50">
      {/* Header Section */}
      <header className="bg-slate-800 py-20 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Tour With BHRL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            The story, mission, and values that drive our passion for
            exploration.
          </motion.p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto md:px-24 px-4 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Tour With BHRL, our mission is to craft unforgettable travel
                experiences that connect people with the world's most incredible
                cultures, landscapes, and communities. We believe travel should
                be authentic, sustainable, and deeply personal.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We meticulously design each tour to ensure safety, comfort, and
                a genuine sense of adventure, empowering you to explore with
                confidence and create memories that last a lifetime.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Travelers enjoying a view"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The principles that guide every journey we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart />,
                title: "Passion for Travel",
                desc: "We are explorers at heart, driven by a love for discovering new places and sharing them with you.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Commitment to Safety",
                desc: "Your well-being is our top priority. We adhere to the highest safety standards on all our tours.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainable Tourism",
                desc: "We are dedicated to protecting our planet and supporting local communities through responsible travel.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-xl text-center border border-slate-200"
              >
                <div className="text-4xl text-teal-600 mb-4 inline-block">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet the Developer
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The mind behind the platform.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="md:w-1/3 mb-6 md:mb-0 flex-shrink-0">
                <img
                  src="https://placehold.co/200x200/1e293b/f59e0b?text=JD"
                  alt="Developer John Doe"
                  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Rafayet
                </h3>
                <p className="text-teal-600 font-semibold mb-4">
                  Full Stack Developer & Travel Enthusiast
                </p>
                <p className="text-slate-600 mb-6">
                  I'm passionate about building digital solutions that connect
                  people and inspire adventure. I created Tour With BHRL to help
                  travelers discover the beauty of the world while supporting
                  local tourism in a meaningful way.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
