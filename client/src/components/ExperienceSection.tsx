import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const experiences = [
  {
    company: 'Weber Innovations',
    role: 'Associate, Digital Infrastructure Department',
    location: 'Remote / India',
    duration: 'Oct 2025 - Present',
    responsibilities: [
      'Design, develop, and manage corporate websites and digital platforms for energy and materials science initiatives',
      'Ensure uptime, security, and regular updates with monitoring and access controls',
      'Collaborate with creative, PR, and engineering teams for brand-consistent, SEO-optimized content',
      'Deploy analytics and performance tuning (Core Web Vitals) to improve traffic quality'
    ],
    color: '#5227FF'
  },
  {
    company: 'Mawai Infotech Ltd.',
    role: 'Full Stack Developer Intern',
    location: 'Noida, India',
    duration: 'Jun 2025 - Oct 2025',
    responsibilities: [
      'Built ERP modules in PHP and MySQL with 3+ REST endpoints for 500+ users',
      'Normalized schemas and added composite indexes, eliminating slow queries by 25%',
      'Coordinated release with senior engineers for successful go-live',
      'Earned Pre-Placement Offer (PPO) for exceptional performance'
    ],
    color: '#FF9FFC'
  }
];

export default function ExperienceSection() {
  return (
    <section className="relative py-24 px-4" data-testid="experience-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Professional Experience
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Delivering impactful solutions across web development and digital infrastructure
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-primary via-pink-accent to-lavender hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`experience-${index}`}
              >
                {/* Timeline Node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10"
                  style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}` }}
                />

                {/* Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="bg-black/40 border-purple-primary/30 backdrop-blur-sm group hover:border-purple-primary/60 transition-all duration-300">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"
                      style={{ backgroundImage: `linear-gradient(135deg, ${exp.color} 0%, transparent 100%)` }}
                    />
                    
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div 
                          className="p-2 rounded-lg backdrop-blur-sm"
                          style={{ backgroundColor: `${exp.color}20` }}
                        >
                          <Briefcase className="w-6 h-6" style={{ color: exp.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                          <p className="text-lavender font-medium">{exp.company}</p>
                          <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-purple-primary mt-1">✓</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
