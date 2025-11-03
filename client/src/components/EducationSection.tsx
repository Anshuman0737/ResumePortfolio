import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ScrollReveal from './ScrollReveal';

export default function EducationSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" data-testid="education-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Education
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Building a strong foundation in AI and Computer Science
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card 
            className="bg-black/40 border-purple-primary/30 backdrop-blur-sm overflow-hidden group hover:border-purple-primary/60 transition-all duration-300"
            data-testid="education-card"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-primary/20 rounded-lg backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8 text-purple-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-1">Bennett University</h3>
                  <p className="text-lavender font-medium">B.Tech in Computer Science Engineering (AI)</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2022 - Present</span>
                    <span className="mx-2">•</span>
                    <span>CGPA: 7.0</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-primary mb-2">Specialization</h4>
                <p className="text-gray-300">Artificial Intelligence & Machine Learning</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-primary mb-2">Key Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {['Deep Learning', 'Full Stack Development', 'Data Structures', 'NLP', 'Computer Vision', 'Database Systems'].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm bg-purple-primary/10 border border-purple-primary/30 rounded-full text-lavender"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-primary mb-2">Achievements</h4>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-primary mt-1">•</span>
                    <span>President of CODE Club - Led 200+ students across Delhi-NCR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-primary mt-1">•</span>
                    <span>Organized 5+ technical events and 3+ coding workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-primary mt-1">•</span>
                    <span>Active participant in AI/ML hackathons and competitions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Scroll Reveal Quote */}
        <div className="mt-20 max-w-4xl mx-auto">
          <ScrollReveal 
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            className="text-center text-gray-300/80"
          >
            Education is not the learning of facts, but the training of the mind to think
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
