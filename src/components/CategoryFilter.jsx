import { motion } from 'framer-motion';
import { categories } from '../data/tools';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">按类型筛选</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center space-x-2 px-4 py-3 rounded-lg border transition-all duration-200
              ${activeCategory === category.id 
                ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white border-primary-500 shadow-lg' 
                : 'bg-white text-foreground border-border hover:border-primary-300 hover:shadow-md'
              }
            `}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}