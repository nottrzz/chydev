import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiTailwindcss, SiLaravel, SiMysql,SiVite,SiBootstrap, SiVercel } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skills = [
    { name: 'Vite', icon: SiVite, color: 'text-white' },
    { name: 'Reactjs', icon: FaReact, color: 'text-white' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-primary' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-primary' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-primary' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-primary' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-primary' },
    { name: 'MYSQL', icon: SiMysql, color: 'text-primary' },
    { name: 'Git', icon: FaGitAlt, color: 'text-primary' },
    { name: 'Vercel', icon: SiVercel, color: 'text-primary' },
  ]

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="bg-dark-light p-6 rounded-xl border border-primary/30 hover:border-primary group cursor-pointer"
              >
                <IconComponent className={`text-5xl mx-auto mb-3 text-custom group-hover:scale-110 transition-transform`} />
                <p className="text-center font-medium">{skill.name}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills