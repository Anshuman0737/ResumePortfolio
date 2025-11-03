import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Code,
    title: 'LeetCode Excellence',
    description: 'Top 18.73% globally',
    details: '200+ problems solved including 50+ Hard difficulty challenges',
    color: '#5227FF'
  },
  {
    icon: Trophy,
    title: 'Pre-Placement Offer',
    description: 'Mawai Infotech Ltd.',
    details: 'Earned PPO for exceptional performance and technical excellence',
    color: '#FF9FFC'
  },
  {
    icon: Users,
    title: 'CODE Club President',
    description: 'Led 200+ students across Delhi-NCR',
    details: 'Organized 5+ technical events and 3+ coding workshops for underprivileged students',
    color: '#B19EEF'
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Deep Learning & NLP',
    details: 'C++ OOP Fundamentals, Deep Neural Networks Optimization, NLP with Transformers (Coursera)',
    color: '#5227FF'
  }
];

export default function AchievementsSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Achievements & Recognition
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Milestones that showcase dedication, growth, and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isFlipped = flipped === index;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, rotateY: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`achievement-${index}`}
              >
                <div
                  className="relative h-64 cursor-pointer perspective"
                  onClick={() => setFlipped(isFlipped ? null : index)}
                  style={{ perspective: '1000px' }}
                  data-testid={`achievement-card-${index}`}
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <Card
                      className="absolute inset-0 bg-black/40 border-purple-primary/30 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                      style={{
                        backfaceVisibility: 'hidden',
                        borderColor: `${achievement.color}40`
                      }}
                      data-testid={`achievement-front-${index}`}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{
                          backgroundColor: `${achievement.color}20`,
                          boxShadow: `0 0 20px ${achievement.color}30`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: achievement.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-sm text-lavender">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-4">Click to view details</p>
                    </Card>

                    {/* Back Face */}
                    <Card
                      className="absolute inset-0 bg-black/60 border-purple-primary/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderColor: `${achievement.color}60`
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: `${achievement.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: achievement.color }} />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-3">{achievement.title}</h4>
                      <p className="text-xs text-gray-300">{achievement.details}</p>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
