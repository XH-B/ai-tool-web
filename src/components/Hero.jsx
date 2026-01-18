import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            发现
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {" "}最佳AI工具
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            一站式AI工具导航平台，为您精选文本、图像、视频、音频等各类人工智能工具，
            帮助您快速找到最适合的AI解决方案
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              开始探索
            </button>
            <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200">
              了解详情
            </button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-4 h-4 bg-accent-500 rounded-full opacity-20"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-6 h-6 bg-primary-500 rounded-full opacity-20"
        ></motion.div>
      </div>
    </div>
  );
}