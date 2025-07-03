import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Settings 
} from 'lucide-react'

const Skills = () => {
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
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS/Swift', level: 70 },
        { name: 'Android/Kotlin', level: 70 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 80 },
      ]
    },
    {
      icon: Settings,
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack/Vite', level: 85 },
        { name: 'Testing', level: 80 },
      ]
    },
  ]

  const ProgressBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
          {skill.name}
        </span>
        <span className="text-sm text-secondary-500 dark:text-secondary-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
          className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
        />
      </div>
    </div>
  )

  return (
    <section id="skills" ref={ref} className="section-padding bg-secondary-50 dark:bg-secondary-800">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="card p-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <ProgressBar
                        key={skill.name}
                        skill={skill}
                        delay={categoryIndex * 0.2 + skillIndex * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-secondary-900 dark:text-white">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'GraphQL', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase', 'Prisma',
                'Jest', 'Cypress', 'Storybook', 'Framer Motion', 'Three.js', 'WebGL',
                'PWA', 'WebRTC', 'Socket.io', 'Stripe', 'PayPal', 'Algolia'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 cursor-default border border-secondary-200 dark:border-secondary-600"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills