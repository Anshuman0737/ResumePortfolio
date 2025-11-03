import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code2, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:pandeyanshuman212@gmail.com',
    label: 'pandeyanshuman212@gmail.com',
    color: '#5227FF'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/anshuman0',
    label: 'linkedin.com/in/anshuman0',
    color: '#FF9FFC'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Anshuman0737',
    label: 'github.com/Anshuman0737',
    color: '#B19EEF'
  },
  {
    name: 'LeetCode',
    icon: Code2,
    href: 'https://leetcode.com/u/anshuman737',
    label: 'leetcode.com/u/anshuman737',
    color: '#5227FF'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success toast with particle effect
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden" data-testid="contact-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-primary to-pink-accent">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Whether you're interested in collaboration, have a project idea, or just want to chat about tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Form - 60% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-black/40 border-purple-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-black/30 border-purple-primary/30 text-white placeholder:text-gray-500 focus:border-purple-primary transition-colors"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-black/30 border-purple-primary/30 text-white placeholder:text-gray-500 focus:border-purple-primary transition-colors"
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-black/30 border-purple-primary/30 text-white placeholder:text-gray-500 focus:border-purple-primary transition-colors resize-none"
                        data-testid="textarea-message"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-primary to-pink-accent hover:scale-105 transition-all duration-300 text-white font-semibold"
                      data-testid="button-submit-form"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Links - 40% */}
          <div className="lg:col-span-2 space-y-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  <Card className="bg-black/40 border-purple-primary/30 backdrop-blur-sm hover:border-purple-primary/60 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                        data-testid={`contact-${link.name.toLowerCase()}`}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${link.color}20`,
                            boxShadow: `0 0 20px ${link.color}20`
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: link.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-white mb-0.5">{link.name}</h3>
                          <p className="text-xs text-gray-400 flex items-center gap-1 truncate">
                            {link.label}
                            <ExternalLink className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500">
            © 2025 Anshuman Pandey. Built with passion using React, Three.js, and GSAP.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
