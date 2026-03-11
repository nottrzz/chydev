import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Particles from './Particles'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="relative py-20 bg-dark overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ff0000", "#b91c1c", "#ffffff"]}
          particleCount={250}
          particleSpread={15}
          speed={0.5}
          particleBaseSize={90}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          pixelRatio={1}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Contact Info & Personal Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Glass Card for Personal Message */}
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm always excited to collaborate on innovative projects, discuss tech ideas, or just have a good conversation. 
                Whether you need a developer for your next big thing or want to geek out about the latest in web development, 
                my inbox is always open.
              </p>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaGithub /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter /></a>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group">
                <FaEnvelope className="text-primary text-xl mb-2" />
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-400 text-sm">rosizamhari@gmail.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group">
                <FaPhone className="text-primary text-xl mb-2" />
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+62 81 779 802 449</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group sm:col-span-2">
                <FaMapMarkerAlt className="text-primary text-xl mb-2" />
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-400 text-sm">Lombok NTB, Indonesia (Remote Worldwide)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <textarea 
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-secondary rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  <FaEnvelope /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact