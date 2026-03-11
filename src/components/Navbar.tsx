import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: 'Home', href: '/', isHash: false },
    { name: 'About', href: '#about', isHash: true },
    { name: 'Skills', href: '#skills', isHash: true },
    { name: 'Projects', href: '#projects', isHash: true },
    { name: 'Contact', href: '#contact', isHash: true },
    { name: '🎮 Game', href: '/game', isHash: false },
  ]

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome && href.startsWith('#')) {
      window.location.href = '/' + href
      return
    }
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-4 border-b border-primary/30' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
            onClick={closeMenu}
          >
            &lt;ChyDev/&gt;
          </Link>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                {link.isHash ? (
                  <a 
                    href={link.href} 
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="hover:text-primary transition-colors text-lg"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className="hover:text-primary transition-colors text-lg"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-3xl text-primary focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl md:hidden z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  {link.isHash ? (
                    <a 
                      href={link.href} 
                      onClick={(e) => handleHashClick(e, link.href)}
                      className="block text-3xl py-4 hover:text-primary transition-colors border-b border-white/10 font-light"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      onClick={closeMenu}
                      className="block text-3xl py-4 hover:text-primary transition-colors border-b border-white/10 font-light"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar