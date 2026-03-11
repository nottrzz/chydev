import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects: Project[] = [
    {
      title: 'E-Commerce App',
      description: 'Full-stack e-commerce dengan React, Node.js, dan MongoDB. Fitur lengkap: auth, payment, admin panel.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Manager Pro',
      description: 'Aplikasi manajemen tugas real-time dengan kolaborasi tim, notifikasi, dan progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Vue', 'Express', 'PostgreSQL', 'Socket.io'],
      link: '#',
    },
    {
      title: 'WeatherAI',
      description: 'Aplikasi cuaca dengan prediksi berbasis AI, visualisasi interaktif, dan peta real-time.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      link: '#',
    },
    {
      title: 'Portfolio 2025',
      description: 'Portfolio pribadi dengan efek parallax, glassmorphism, dan performa optimal.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer'],
      link: '#',
    },
    {
      title: 'Social Analytics',
      description: 'Dashboard analitik media sosial dengan real-time data dan visualisasi interaktif.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['Next.js', 'Prisma', 'Chart.js', 'Redis'],
      link: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'Generator konten berbasis AI untuk artikel, deskripsi produk, dan ide kreatif.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Swipe or drag to explore my latest work
        </motion.p>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          className="projects-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-dark/80 backdrop-blur-xl p-[2px] rounded-2xl h-full">
                  <div className="bg-dark-light rounded-2xl p-6 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl mb-4 h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects