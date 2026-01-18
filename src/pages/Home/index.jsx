import { useState, useMemo, useRef, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import CategoryFilter from '../../components/CategoryFilter';
import ToolCard from '../../components/ToolCard';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import { aiTools, featuredTools } from '../../data/tools';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const filterSectionRef = useRef(null);

  // 处理搜索
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // 处理分类切换
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // 滚动到分类筛选区域
    setTimeout(() => {
      filterSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  // 筛选工具
  const filteredTools = useMemo(() => {
    // 清理搜索关键词
    const cleanQuery = searchQuery.trim().toLowerCase();
    
    if (!cleanQuery && activeCategory === 'all') {
      // 无搜索条件，返回所有工具
      return aiTools;
    }
    
    // 根据搜索条件和分类筛选
    return aiTools.filter(tool => {
      // 检查分类匹配
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      
      if (!matchesCategory) return false;
      
      // 检查搜索匹配（如果有关键词）
      if (!cleanQuery) return true;
      
      return tool.name.toLowerCase().includes(cleanQuery) ||
             tool.description.toLowerCase().includes(cleanQuery) ||
             tool.features.some(feature => feature.toLowerCase().includes(cleanQuery));
    });
  }, [searchQuery, activeCategory]);

  // 精选工具
  const featuredToolsList = useMemo(() => {
    return aiTools.filter(tool => featuredTools.includes(tool.id));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
      
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 精选工具区域 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">🔥 精选工具推荐</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredToolsList.map((tool, index) => (
              <ToolCard 
                key={tool.id}
                tool={tool}
                index={index}
                isFeatured={true}
              />
            ))}
          </div>
        </section>

        {/* 分类筛选区域 - 添加引用 */}
        <div ref={filterSectionRef}>
          <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* 全部工具区域 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              {activeCategory === 'all' ? '🔧 全部工具' : 
               activeCategory === 'text' ? '📝 文本处理工具' :
               activeCategory === 'image' ? '🖼️ 图像生成工具' :
               activeCategory === 'video' ? '🎥 视频创作工具' : '🎵 音频处理工具'}
              <span className="text-lg font-normal text-muted-foreground ml-2">
                ({filteredTools.length} 个工具)
              </span>
            </h2>
          </div>

          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">未找到相关工具</h3>
              <p className="text-muted-foreground">尝试调整搜索关键词或选择其他分类</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard 
                  key={tool.id}
                  tool={tool}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Features />
      <Footer />
    </div>
  );
}