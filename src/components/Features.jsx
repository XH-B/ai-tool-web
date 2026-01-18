import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "精选高质量工具",
      description: "严格筛选，只推荐最好用的AI工具"
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "所有工具都经过安全检测和用户体验评估"
    },
    {
      icon: Globe,
      title: "全球覆盖",
      description: "涵盖国内外主流AI平台和应用"
    },
    {
      icon: Users,
      title: "用户评价",
      description: "基于真实用户反馈的评分系统"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            为什么选择我们？
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们致力于为您提供最优质、最全面的AI工具导航服务
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-primary-500 to-blue-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              立即开始您的AI之旅
            </h3>
            <p className="text-muted-foreground mb-6">
              发现最适合您的AI工具，提升工作效率和创造力
            </p>
            <button className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              探索所有工具
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}