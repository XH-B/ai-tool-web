import { useState } from 'react';
import { Search, Menu, X, Brain } from 'lucide-react';

export default function Header({ onSearch, onCategoryChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">AI工具导航</h1>
              <p className="text-xs text-muted-foreground">发现最佳AI工具</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onCategoryChange('all')}
              className="text-foreground hover:text-primary-600 transition-colors"
            >
              全部工具
            </button>
            <button 
              onClick={() => onCategoryChange('text')}
              className="text-foreground hover:text-primary-600 transition-colors"
            >
              文本处理
            </button>
            <button 
              onClick={() => onCategoryChange('image')}
              className="text-foreground hover:text-primary-600 transition-colors"
            >
              图像生成
            </button>
            <button 
              onClick={() => onCategoryChange('video')}
              className="text-foreground hover:text-primary-600 transition-colors"
            >
              视频创作
            </button>
            <button 
              onClick={() => onCategoryChange('audio')}
              className="text-foreground hover:text-primary-600 transition-colors"
            >
              音频处理
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="搜索AI工具..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="搜索AI工具..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => {
                  onCategoryChange('all');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                全部工具
              </button>
              <button 
                onClick={() => {
                  onCategoryChange('text');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                文本处理
              </button>
              <button 
                onClick={() => {
                  onCategoryChange('image');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                图像生成
              </button>
              <button 
                onClick={() => {
                  onCategoryChange('video');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                视频创作
              </button>
              <button 
                onClick={() => {
                  onCategoryChange('audio');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                音频处理
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}