import useScrollToTop from "@/Hooks/useScrollToTop";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaHeart, FaPlus, FaSearch, FaTwitter, FaWhatsapp } from "react-icons/fa";

// 3. Mock react-share components


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
            BHRL Community
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
                      <FaFacebook
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        quote={story.title}
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <FaFacebook size={20} />
                      </FaFacebook>
                      <FaTwitter
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        title={story.title}
                        className="text-slate-400 hover:text-sky-500 transition-colors"
                      >
                        <FaTwitter size={20} />
                      </FaTwitter>
                      <FaWhatsapp
                        url={`https://yourwebsite.com/stories/${story.id}`}
                        title={story.title}
                        className="text-slate-400 hover:text-green-500 transition-colors"
                      >
                        <FaWhatsapp size={20} />
                      </FaWhatsapp>
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
