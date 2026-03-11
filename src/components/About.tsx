import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const personalInfo = [
    { label: 'Name', value: 'Rosi zamhari' },
    { label: 'Email', value: 'rzmhr@gmail.com' },
    { label: 'Location', value: 'Lombok NTB, ID' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Language', value: 'EN, ID' },
  ]

  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      <div ref={parallaxRef} className="parallax-bg">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Get to know more about me and my professional journey
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative bg-dark-light p-1 rounded-3xl">
                <div className="bg-dark rounded-3xl p-6 text-center">
                  <div className="relative w-64 h-70 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-primary/30">
                    <img
                      src="https://c.top4top.io/p_37212zfea1.jpg"
                      alt="Profile"
                      className="min-w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Rosi Zamhari</h3>
                  <p className="text-primary mb-4">Web Developer</p>
                  <div className="flex justify-center gap-4 text-xl">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaGithub /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaEnvelope /></a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:w-2/3"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate programmer with over 5 years of experience in building web applications 
              using modern technologies. I specialize in creating elegant solutions for complex problems 
              and delivering high-quality code with exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My journey in tech started with a curiosity about how things work, and evolved into a 
              career where I get to build things that impact people's lives. I'm constantly learning 
              and adapting to new technologies to stay at the forefront of web development.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {personalInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#ff0000' }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-primary transition-all"
                >
                  <h4 className="text-xs text-primary font-semibold mb-1">{item.label}</h4>
                  <p className="text-white font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded-full transition-all shadow-lg shadow-primary/30"
            >
              <FaDownload /> Download ma CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About