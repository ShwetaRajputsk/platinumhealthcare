import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';

const VideoBlogsSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const CHANNEL_ID = 'UC1CRRy_C7q3ycLsMJ1zTdsw';
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const fetchYouTubeVideos = async () => {
    try {
      // If API key is not available, use fallback static videos
      if (!API_KEY) {
        setVideos(getFallbackVideos());
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4&type=video`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data = await response.json();
      const videoData = data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        publishedAt: item.snippet.publishedAt
      }));

      setVideos(videoData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      // Use fallback videos on error
      setVideos(getFallbackVideos());
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFallbackVideos = () => {
    return [
      {
        id: 'fallback1',
        title: 'Carbon Laser Treatments',
        thumbnail: 'https://platinumhealthuae.com/wp-content/uploads/2024/10/Carbon-Laser-Treatements-3.jpg',
        channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`
      },
      {
        id: 'fallback2',
        title: 'Dental Care',
        thumbnail: 'https://platinumhealthuae.com/wp-content/uploads/2024/10/Dental-Care-Platinum.jpg',
        channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`
      },
      {
        id: 'fallback3',
        title: 'PRP Hair Transplantation',
        thumbnail: 'https://platinumhealthuae.com/wp-content/uploads/2024/08/PRP_Hair_Transplantation.jpg',
        channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`
      },
      {
        id: 'fallback4',
        title: 'HIFU Skin Treatment',
        thumbnail: 'https://platinumhealthuae.com/wp-content/uploads/2024/08/HIFU_Skin_Treatment.jpg',
        channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`
      }
    ];
  };

  const handleVideoClick = (video) => {
    if (video.id.startsWith('fallback')) {
      // Open YouTube channel for fallback videos
      window.open(video.channelUrl, '_blank');
    } else {
      // Open video in modal or new tab
      setSelectedVideo(video);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Video Blogs
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <img
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-lg"
                    src={video.thumbnail}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-cyan-500 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {video.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* View All Videos Button */}
          <div className="text-center mt-12">
            <a
              href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              <Youtube className="w-5 h-5" />
              <span>View All Videos</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default VideoBlogsSection;
