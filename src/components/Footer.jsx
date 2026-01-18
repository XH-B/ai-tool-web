import { Heart, Mail, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">AI工具导航</h3>
                <p className="text-sm text-muted-foreground">让AI工具发现更简单</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
              我们致力于为您提供最新、最好用的AI工具导航服务，帮助您在人工智能的浪潮中找到最适合的解决方案。
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@aitools.com" className="text-muted-foreground hover:text-primary-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">首页</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">文本工具</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">图像工具</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">视频工具</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">音频工具</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">资源</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">使用指南</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">工具评测</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">更新日志</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">联系我们</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-600 transition-colors">帮助中心</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AI工具导航. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary-600 text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-muted-foreground hover:text-primary-600 text-sm transition-colors">服务条款</a>
            <a href="#" className="text-muted-foreground hover:text-primary-600 text-sm transition-colors">免责声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}