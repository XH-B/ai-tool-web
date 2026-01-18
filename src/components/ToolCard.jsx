import { motion } from 'framer-motion';
import { ExternalLink, Star, Crown, Sparkles } from 'lucide-react';

export default function ToolCard({ tool, index, isFeatured = false }) {
  const categoryIcons = {
    text: '📝',
    image: '🖼️',
    video: '🎥',
    audio: '🎵'
  };

  const handleCardClick = () => {
    window.open(tool.website, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <div 
        onClick={handleCardClick}
        className={`
          bg-white rounded-xl shadow-lg border border-border overflow-hidden
          transition-all duration-300 group-hover:shadow-xl
          ${isFeatured ? 'ring-2 ring-accent-500 ring-opacity-50' : ''}
        `}
      >
        {/* Header */}
        <div className={`
          relative p-6
          ${isFeatured ? 'bg-gradient-to-r from-accent-500 to-purple-600' : 'bg-gradient-to-r from-primary-500 to-blue-500'}
        `}>
          {isFeatured && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
              <Crown className="h-3 w-3 mr-1" />
              精选
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg backdrop-blur-sm">
              <span className="text-2xl">{categoryIcons[tool.category]}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                {tool.isFree && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    免费
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-white text-sm ml-1">{tool.rating}</span>
                </div>
                <span className="text-white text-sm">{tool.category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {tool.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">主要功能</h4>
            <div className="flex flex-wrap gap-2">
              {tool.features.slice(0, 3).map((feature, i) => (
                <span 
                  key={i}
                  className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                >
                  {feature}
                </span>
              ))}
              {tool.features.length > 3 && (
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                  +{tool.features.length - 3}更多
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <button className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium text-sm
              transition-all duration-200 transform group-hover:scale/105
              ${isFeatured ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-primary-600 to-blue-600'}
            `}>
              <ExternalLink className="h-4 w-4" />
              <span>访问网站</span>
            </button>
            
            {tool.isFree && (
              <Sparkles className="h-5 w-5 text-green-500" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
