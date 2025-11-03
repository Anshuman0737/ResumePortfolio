import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const mainProjects = [
  {
    title: 'TheatreNow',
    subtitle: 'Movie Ticket Booking Platform',
    description: 'JWT-secured booking system with role-based access and seat-locking functionality',
    tech: ['PHP', 'MySQL', 'Apache', 'JWT'],
    stats: ['40% reduction in double-booking', '25% latency improvement'],
    period: 'Jun - Jul 2025'
  },
  {
    title: 'MindWave',
    subtitle: 'EEG Emotion Detection',
    description: 'CNN-LSTM model for real-time emotion detection from EEG streams with Streamlit dashboard',
    tech: ['TensorFlow', 'Streamlit', 'Python', 'TensorFlow Lite'],
    stats: ['93.4% accuracy', '<150ms inference time'],
    period: 'Oct - Nov 2024'
  },
  {
    title: 'B2Me',
    subtitle: 'Online Bookstore',
    description: 'Full-featured e-commerce platform with authentication, cart, and checkout functionality',
    tech: ['Java', 'MySQL', 'Servlet'],
    stats: ['200+ test users', '20% faster load times'],
    period: 'Mar - Apr 2023'
  }
];

const freelanceProjects = [
  {
    title: 'Business Chatbots',
    description: 'Custom WhatsApp and web chatbots integrated with Dialogflow',
    tech: ['Dialogflow', 'Node.js']
  },
  {
    title: 'E-commerce Dashboard',
    description: 'MERN stack analytics and sales visualization platform',
    tech: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    title: 'Animated Portfolios',
    description: 'Modern marketing pages with GSAP animations',
    tech: ['GSAP', 'TailwindCSS', 'React']
  },
  {
    title: 'CRM Automation',
    description: 'API-driven integrations for marketing workflows',
    tech: ['REST APIs', 'Node.js', 'Automation']
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Building innovative solutions from AI systems to full-stack applications
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-lavender mb-8 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-primary to-pink-accent rounded-full" />
            Main Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`main-project-${index}`}
              >
                <Card className="h-full bg-black/40 border-purple-primary/30 backdrop-blur-sm group hover:border-purple-primary hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  
                  <CardHeader>
                    <div className="h-32 bg-gradient-to-br from-purple-primary/20 to-pink-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-6xl opacity-20">{project.title.charAt(0)}</div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                    <p className="text-sm text-lavender">{project.subtitle}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-300">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-purple-primary/40 text-purple-primary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-800">
                      {project.stats.map((stat) => (
                        <div key={stat} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="text-purple-primary">▸</span>
                          {stat}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="text-xs text-gray-500">
                    {project.period}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Freelance Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-lavender mb-8 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-primary to-pink-accent rounded-full" />
            Freelance Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {freelanceProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`freelance-project-${index}`}
              >
                <Card className="h-full bg-black/30 border-purple-primary/20 backdrop-blur-sm hover:border-purple-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                    <p className="text-xs text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] bg-purple-primary/10 border border-purple-primary/20 rounded text-lavender"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
