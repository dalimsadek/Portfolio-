import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{paddingTop: '6rem'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full">
        <div className="relative h-[70vh] md:h-[85vh] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505692952047-5d5b09c7b3b6?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center transform-gpu scale-100" style={{filter:'brightness(0.78)'}}> </div>

          {/* color tint overlay — change the class to bg-clay/25 or bg-sage/30 or bg-warmblack/40 to adjust the section color */}
          <div className="absolute inset-0 pointer-events-none bg-clay/25 mix-blend-multiply"></div>

          {/* subtle topographic lines SVG */}
          <div className="absolute inset-0 pointer-events-none hero-decor">
            <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
                <path d="M0,420 C150,360 300,460 450,420 C600,380 750,460 900,420 C1050,380 1200,460 1200,460" />
                <path d="M0,360 C150,300 300,380 450,340 C600,300 750,380 900,340 C1050,300 1200,380 1200,380" />
                <path d="M0,300 C150,240 300,320 450,280 C600,240 750,320 900,280 C1050,240 1200,320 1200,320" />
              </g>
              <g fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="2">
                <path d="M0,200 C200,150 400,220 600,200 C800,180 1000,220 1200,200" />
              </g>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center">
              {/* smaller, elegant pill panel */}
              <div className="inline-flex flex-col items-center gap-3 bg-white/6 backdrop-blur-md border border-white/10 px-6 py-4 md:px-8 md:py-6 rounded-3xl max-w-xl">
                <h1 className="serif text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-ivory text-center">Des espaces qui racontent une histoire</h1>
                <p className="mt-1 text-sm md:text-base text-ivory/90 max-w-lg text-center">Un mariage du minimalisme moderne et du savoir-faire artisanal — intérieurs chaleureusement texturés, pensés pour durer.</p>
                <a href="#portfolio" className="mt-2 inline-flex items-center gap-3 text-sm md:text-base text-ivory/95 hover:text-softgold transition">
                  <span>Faites défiler — plongez dans mon art</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 text-sm">Faites défiler ↓</div>
        </div>
      </motion.div>
    </section>
  )
}
