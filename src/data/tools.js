export const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "text",
    description: "强大的文本对话AI助手",
    features: ["对话聊天", "文本生成", "代码编写", "翻译"],
    website: "https://chat.openai.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/240px-ChatGPT_logo.svg.png",
    isFree: false,
    rating: 4.8
  },
  {
    id: 2,
    name: "Claude",
    category: "text", 
    description: "专注于安全性和创造性的AI助手",
    features: ["长文本处理", "创意写作", "安全对话", "文件分析"],
    website: "https://claude.ai",
    logo: "https://www.anthropic.com/images/meta/claude-og-image.png",
    isFree: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Midjourney",
    category: "image",
    description: "AI图像生成平台",
    features: ["图像生成", "风格转换", "艺术创作", "AI绘画"],
    website: "https://www.midjourney.com",
    logo: "https://cdn.midjourney.com/31b46bc4-0e5c-4b6d-a5c1-7e8e2b5e4a1a/grid_0.png",
    isFree: false,
    rating: 4.6
  },
  {
    id: 4, 
    name: "DALL-E",
    category: "image",
    description: "OpenAI的图像生成模型",
    features: ["图片生成", "图像编辑", "创意设计", "概念艺术"],
    website: "https://openai.com/dall-e-2",
    logo: "https://openai.com/content/images/2022/05/dall-e-2.jpg",
    isFree: false,
    rating: 4.5
  },
  {
    id: 5,
    name: "Runway",
    category: "video",
    description: "AI视频创作平台",
    features: ["视频生成", "特效制作", "文本转视频", "视频编辑"],
    website: "https://runwayml.com",
    logo: "https://runwayml.com/images/logo-runway.png",
    isFree: true,
    rating: 4.4
  },
  {
    id: 6,
    name: "Synthesia",
    category: "video",
    description: "AI视频生成和虚拟形象",
    features: ["虚拟主播", "多语言视频", "人像生成", "企业培训"],
    website: "https://www.synthesia.io",
    logo: "https://www.synthesia.io/images/logo.png",
    isFree: false,
    rating: 4.3
  },
  {
    id: 7,
    name: "Murf AI",
    category: "audio",
    description: "AI语音生成平台",
    features: ["文本转语音", "语音克隆", "多语言支持", "情感表达"],
    website: "https://murf.ai",
    logo: "https://murf.ai/images/logo.svg",
    isFree: true,
    rating: 4.2
  },
  {
    id: 8,
    name: "ElevenLabs",
    category: "audio", 
    description: "高质量语音合成",
    features: ["语音合成", "语音克隆", "音频优化", "多语言支持"],
    website: "https://elevenlabs.io",
    logo: "https://elevenlabs.io/images/logo.svg",
    isFree: true,
    rating: 4.6
  },
  {
    id: 9,
    name: "Whisper",
    category: "audio",
    description: "OpenAI的语音转文本模型",
    features: ["语音识别", "多语言转录", "实时转写", "音频分析"],
    website: "https://openai.com/research/whisper",
    logo: "https://openai.com/content/images/2023/10/openai-whisper.png",
    isFree: true,
    rating: 4.5
  },
  {
    id: 10,
    name: "Jasper",
    category: "text",
    description: "AI写作助手",
    features: ["内容创作", "营销文案", "博客写作", "广告文案"],
    website: "https://www.jasper.ai",
    logo: "https://www.jasper.ai/images/logo.svg",
    isFree: false,
    rating: 4.4
  },
  {
    id: 11,
    name: "Stable Diffusion",
    category: "image",
    description: "开源图像生成模型",
    features: ["开源模型", "本地部署", "自定义训练", "社区支持"],
    website: "https://stability.ai",
    logo: "https://stability.ai/images/logo.png",
    isFree: true,
    rating: 4.3
  },
  {
    id: 12,
    name: "Canva AI",
    category: "image",
    description: "Canva AI设计工具",
    features: ["智能设计", "模板生成", "图片优化", "一键美化"],
    website: "https://www.canva.com/ai-tools",
    logo: "https://static.canva.com/static/images/logo-canva-2024.svg",
    isFree: true,
    rating: 4.7
  }
];

export const categories = [
  { id: 'all', name: '全部工具', icon: '🔧' },
  { id: 'text', name: '文本处理', icon: '📝' },
  { id: 'image', name: '图像生成', icon: '🖼️' },
  { id: 'video', name: '视频创作', icon: '🎥' },
  { id: 'audio', name: '音频处理', icon: '🎵' }
];

export const featuredTools = [1, 2, 5, 8, 12];