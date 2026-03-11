import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Particles from './Particles'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ff0000", "#ff4444"]} // putih dan merah
          particleCount={100}
          particleSpread={15}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-4"
        >
          Hi, I'm <span className="text-primary">rzmhr</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 h-16 mt-10"
        >
          <TypeAnimation
            sequence={[
              'Front End Developer',
              2000,
              'React Enthusiast',
              2000,
              'UI/UX Enthusiast',
              2000,
              'Lombok Devlab',
              2000,
              'Kuandesshicuyy',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary bg-white py-1 rounded-sm px-2"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary hover:bg-secondary rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            View Work
          </a>
          <Link 
            to="/game" 
            className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all"
          >
            Play Game
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero