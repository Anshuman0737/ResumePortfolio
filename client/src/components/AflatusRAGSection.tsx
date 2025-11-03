import { motion } from 'framer-motion';
import { Brain, Database, Settings, BarChart3, Link2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const subsystems = [
  {
    icon: Brain,
    title: 'AI Core',
    subtitle: 'RAG & LangChain',
    description: 'Advanced retrieval-augmented generation system powering intelligent responses',
    color: '#5227FF'
  },
  {
    icon: Settings,
    title: 'Backend',
    subtitle: 'FastAPI / Node.js',
    description: 'High-performance API layer handling real-time data processing',
    color: '#FF9FFC'
  },
  {
    icon: Database,
    title: 'Knowledge Base',
    subtitle: 'Vector Database',
    description: 'Pinecone/Chroma integration for contextual document retrieval',
    color: '#B19EEF'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    subtitle: 'React Frontend',
    description: 'Real-time insights and visualization for business intelligence',
    color: '#5227FF'
  },
  {
    icon: Link2,
    title: 'System Integration',
    subtitle: 'ERP / CRM',
    description: 'Seamless connection with production databases and enterprise systems',
    color: '#FF9FFC'
  }
];

export default function AflatusRAGSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden" data-testid="afflatus-section">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-primary rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: [null, Math.random() * 100 + '%'],
              y: [null, Math.random() * 100 + '%'],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary via-pink-accent to-lavender">
            Afflatus RAG
          </h2>
          <p className="text-xl md:text-2xl text-lavender mb-6">
            The Intelligent Core of Afflatus Gravures
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            An AI-powered knowledge system connecting company data, operations, and decision-making through advanced RAG architecture and enterprise integration.
          </p>
        </motion.div>

        <div className="mb-16">
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur={true}
            baseRotation={2}
            blurStrength={8}
            className="text-center text-gray-300/70 max-w-4xl mx-auto"
          >
            Transforming raw data into actionable intelligence through the power of AI
          </ScrollReveal>
        </div>

        {/* Subsystems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subsystems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`subsystem-${index}`}
              >
                <Card className="h-full bg-black/40 border-purple-primary/20 backdrop-blur-sm group hover:border-opacity-100 transition-all duration-500 cursor-pointer overflow-hidden">
                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${system.color} 0%, transparent 70%)`
                    }}
                  />

                  <CardContent className="pt-6 relative z-10">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${system.color}20`,
                        boxShadow: `0 0 20px ${system.color}40`
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: system.color }} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{system.title}</h3>
                    <p className="text-sm text-lavender mb-3">{system.subtitle}</p>
                    <p className="text-sm text-gray-400">{system.description}</p>

                    {/* Expanding "Learn More" on Hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <a 
                        href="#"
                        className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                        style={{ color: system.color }}
                      >
                        Learn More
                        <span>→</span>
                      </a>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-primary to-pink-accent hover:scale-105 transition-all duration-300 text-white font-semibold px-8"
            data-testid="button-explore-afflatus"
          >
            Explore Full Case Study
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
