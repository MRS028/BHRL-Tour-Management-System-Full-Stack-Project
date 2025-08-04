import React, { useState } from "react";

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

// 3. Mock react-share components
const FacebookShareButton = ({ children, url, quote }) => (
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(quote)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
const TwitterShareButton = ({ children, url, title }) => (
  <a
    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
const WhatsappShareButton = ({ children, url, title }) => (
  <a
    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
      title + " " + url
    )}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

// 4. Inline SVG Icons
const FaSearch = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
  </svg>
);
const FaHeart = ({ isLiked }) => (
  <svg
    className="h-5 w-5"
    fill={isLiked ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
    />
  </svg>
);
const FaFacebook = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
  </svg>
);
const FaTwitter = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);
const FaWhatsapp = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-66.2-10.8-94.6-30.6l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);
const FaPlus = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
  </svg>
);

const CommunityPage = () => {
  useScrollToTop();
  const [searchTerm, setSearchTerm] = useState("");
  const [stories, setStories] = useState([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "https://placehold.co/100x100/1e293b/f59e0b?text=AJ",
      title: "My Amazing Trip to the Sundarbans",
      date: "2025-07-28",
      content:
        "The Sundarbans was breathtaking! Saw so many wildlife including the famous Royal Bengal Tiger. The silence of the jungle, broken only by the chirping of birds, was a surreal experience. Our guide was incredibly knowledgeable.",
      likes: 24,
      isLiked: false,
    },
    {
      id: 2,
      author: "Maria Garcia",
      avatar: "https://placehold.co/100x100/475569/f59e0b?text=MG",
      title: "Exploring the Tea Gardens of Sreemangal",
      date: "2025-06-15",
      content:
        "The lush green tea gardens were absolutely mesmerizing. The cool breeze and the aroma of fresh tea leaves made for a perfect relaxing getaway. Highly recommend the seven-layer tea!",
      likes: 18,
      isLiked: true,
    },
    {
      id: 3,
      author: "David Chen",
      avatar: "https://placehold.co/100x100/0f172a/f59e0b?text=DC",
      title: "Beach Vacation in Cox's Bazar",
      date: "2025-04-02",
      content:
        "Spent a wonderful week at the longest natural sea beach in the world. The sunset views were incredible, and the local seafood was delicious. A must-visit destination in Bangladesh.",
      likes: 32,
      isLiked: false,
    },
  ]);

  const handleLike = (id) => {
    setStories(
      stories.map((story) =>
        story.id === id
          ? {
              ...story,
              likes: story.isLiked ? story.likes - 1 : story.likes + 1,
              isLiked: !story.isLiked,
            }
          : story
      )
    );
  };

  const filteredStories = stories.filter(
    (story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-100">
      <header className="bg-slate-800 py-20 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            TravelX Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Share your adventures and connect with a global community of
            explorers.
          </motion.p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Create Post & Search Section */}
          <div className="grid w-[90%] md:w-full mx-auto grid-cols-1 md:grid-cols-2 mb-8 justify-around gap-6">
            {/* Share Story Button */}
            <div className="w-full flex justify-center">
              <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
                <FaPlus /> Share Your Story
              </button>
            </div>

            {/* Empty Column to balance center alignment in md:grid-cols-3 */}
            {/* <div className="hidden md:block"></div> */}

            {/* Search Bar */}
            <div className="relative  md:w-[90%]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-slate-400 text-lg" />
              </div>
              <input
                type="text"
                placeholder="Search stories by title or author..."
                className="block w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg bg-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Stories Feed */}
          <div className="space-y-8">
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white w-[90%] mx-auto rounded-xl shadow-lg border border-slate-200 overflow-hidden"
              >
                <div className="p-6 ">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-slate-200"
                    />
                    <div>
                      <h3 className="font-bold text-slate-800">
                        {story.author}
                      </h3>
                      <p className="text-sm text-slate-500">{story.date}</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">
                    {story.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {story.content}
                  </p>

                  <div className="flex items-center justify-between border-t pt-4">
                    <button
                      onClick={() => handleLike(story.id)}
                      className={`flex items-center gap-2 font-semibold transition-colors ${
                        story.isLiked
                          ? "text-pink-500"
                          : "text-slate-500 hover:text-pink-500"
                      }`}
                    >
                      <FaHeart isLiked={story.isLiked} />
                      <span>{story.likes} Likes</span>
                    </button>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-slate-500">
                        Share:
                      </span>
                      <FacebookShareButton
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        quote={story.title}
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <FaFacebook size={20} />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        title={story.title}
                        className="text-slate-400 hover:text-sky-500 transition-colors"
                      >
                        <FaTwitter size={20} />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        title={story.title}
                        className="text-slate-400 hover:text-green-500 transition-colors"
                      >
                        <FaWhatsapp size={20} />
                      </WhatsappShareButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-800">
                No stories found
              </h3>
              <p className="mt-2 text-slate-500">
                Try adjusting your search, or be the first to share a story!
              </p>
            </motion.div>
          )}

          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition">
              Load More Stories
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommunityPage;
