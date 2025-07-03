import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Lightbulb, label: 'Creative Solutions', value: '100+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
  ]

  const techStack = [
    { name: 'Frontend', technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL'] },
    { name: 'Tools', technologies: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'] },
    { name: 'Mobile', technologies: ['React Native', 'Flutter', 'iOS', 'Android'] },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-secondary-900">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions and beautiful user experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. I specialize in modern web technologies 
                  and love turning complex problems into simple, beautiful designs.
                </p>
                
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying up-to-date with the latest industry trends.
                </p>
                
                <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  I'm currently focused on building scalable web applications using React, TypeScript, 
                  and modern backend technologies. I'm always excited to work on challenging projects 
                  that push the boundaries of what's possible on the web.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>

            {/* Right Column - Stats and Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="card p-6 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                        <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary-600 dark:text-secondary-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Tech Stack */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Tech Stack</h3>
                <div className="space-y-4">
                  {techStack.map((category) => (
                    <div key={category.name}>
                      <h4 className="font-medium text-secondary-900 dark:text-white mb-2">
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About