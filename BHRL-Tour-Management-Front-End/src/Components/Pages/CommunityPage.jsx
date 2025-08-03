import { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaWhatsapp, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useScrollToTop from '../../Hooks/useScrollToTop';

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  useScrollToTop();
  
  // Sample stories data
  const [stories, setStories] = useState([
    {
      id: 1,
      title: 'My Amazing Trip to Sundarbans',
      author: 'Traveler123',
      date: '2023-05-15',
      content: 'The Sundarbans was breathtaking! Saw so many wildlife including the famous Royal Bengal Tiger...',
      likes: 24,
      isLiked: false,
    },
    {
      id: 2,
      title: 'Exploring the Tea Gardens of Sylhet',
      author: 'NatureLover',
      date: '2023-04-22',
      content: 'The lush green tea gardens were absolutely mesmerizing. The cool breeze and the aroma of fresh tea leaves...',
      likes: 18,
      isLiked: true,
    },
    {
      id: 3,
      title: 'Beach Vacation in Cox\'s Bazar',
      author: 'BeachBum',
      date: '2023-03-10',
      content: 'Spent a wonderful week at the longest natural sea beach in the world. The sunset views were incredible...',
      likes: 32,
      isLiked: false,
    },
    {
      id: 4,
      title: 'Cultural Experience in Old Dhaka',
      author: 'HistoryBuff',
      date: '2023-02-28',
      content: 'The rich history and vibrant culture of Old Dhaka left me speechless. The food, the people, the architecture...',
      likes: 15,
      isLiked: false,
    },
  ]);

  const handleLike = (id) => {
    setStories(stories.map(story => 
      story.id === id 
        ? { 
            ...story, 
            likes: story.isLiked ? story.likes - 1 : story.likes + 1,
            isLiked: !story.isLiked 
          } 
        : story
    ));
  };

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Travel Community
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Share your experiences and connect with fellow travelers
          </p>
        </motion.div>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search stories..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{story.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleLike(story.id)}
                      className={`flex items-center space-x-1 ${story.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill={story.isLiked ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{story.likes}</span>
                    </button>
                    <span className="text-sm text-gray-500">By {story.author}</span>
                  </div>
                  <div className="flex space-x-2">
                    <FacebookShareButton
                      url={`https://yourwebsite.com/stories/${story.id}`}
                      quote={`Check out this travel story: ${story.title}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebook className="h-5 w-5" />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://yourwebsite.com/stories/${story.id}`}
                      title={story.title}
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter className="h-5 w-5" />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url={`https://yourwebsite.com/stories/${story.id}`}
                      title={story.title}
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaWhatsapp className="h-5 w-5" />
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
            className="text-center py-12"
          >
            <h3 className="text-lg font-medium text-gray-900">No stories found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </motion.div>
        )}

        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;