import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'TypeScript', 'SQL', 'PHP', 'HTML5', 'CSS3'],
    color: '#5227FF'
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express', 'Flask', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'NLTK'],
    color: '#FF9FFC'
  },
  {
    title: 'AI/ML & Data Science',
    skills: ['Deep Learning', 'NLP', 'Computer Vision', 'LangChain', 'BERT', 'Machine Learning', 'Data Analysis'],
    color: '#B19EEF'
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'Firebase', 'GCP', 'Apache', 'MySQL', 'PostgreSQL', 'REST APIs', 'CI/CD'],
    color: '#5227FF'
  }
];

export default function SkillsSection() {
  return (
    <section className="relative py-24 px-4" data-testid="skills-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, Full Stack Development, and DevOps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-black/30 border border-purple-primary/20 rounded-lg p-6 backdrop-blur-sm hover:border-purple-primary/40 transition-all duration-300"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.03) }}
                  >
                    <Badge
                      className="px-3 py-1.5 text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        backgroundColor: `${category.color}15`,
                        borderColor: `${category.color}40`,
                        color: category.color
                      }}
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating constellation visualization (simplified version) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 relative h-64 flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    backgroundColor: ['#5227FF', '#FF9FFC', '#B19EEF'][i % 3]
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15
                  }}
                />
              );
            })}
          </div>
          <div className="relative z-10 text-center">
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-pink-accent">
              Constantly Learning & Evolving
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
