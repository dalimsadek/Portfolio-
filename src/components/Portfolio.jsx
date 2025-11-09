import React, {useState} from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

const initialProjects = [
  {id:1,title:'Sage Living Room',category:"Résidentiel",img: import.meta.env.BASE_URL + 'image1.png',desc:'Palette chaleureuse, textures superposées.'},
  {id:2,title:'Studio Office',category:"Résidentiel",img: import.meta.env.BASE_URL + 'Image2.png',desc:'Lignes minimalistes et bois travaillé.'},
  {id:3,title:'Kitchen Story',category:"Commercial",img: import.meta.env.BASE_URL + 'image3.png',desc:'Carreaux faits main et détails en laiton.'},
  {id:4,title:'Gallery Installation',category:'Commercial',img: import.meta.env.BASE_URL + 'image4.png',desc:'Pièce textile in situ.'},
]

export default function Portfolio(){
  const [filter, setFilter] = useState('Tous')
  const [modal, setModal] = useState(null)

  const categories = ['Tous','Résidentiel','Commercial','Installations artistiques']
  const projects = initialProjects.filter(p => filter==='Tous' ? true : p.category===filter)

  return (
    <section id="portfolio" className="py-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="serif text-2xl font-bold">Projets</h3>
        <p className="mt-2 text-sm text-gray-600">Projets sélectionnés — survolez pour les détails. Cliquez pour agrandir.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map(c => (
            <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded-full ${filter===c ? 'bg-clay text-white' : 'bg-white/60 text-warmblack'}`}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.div
              key={p.id}
              layout
              className="group card-fancy relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={()=>setModal(p)}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="card-inner w-full h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="card-shine" aria-hidden></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4"
              >
                <div>
                  <h4 className="font-semibold text-white drop-shadow">{p.title}</h4>
                  <p className="text-sm text-white/90 mt-1">{p.desc}</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-3 left-3 category-pill px-2 py-1 rounded text-xs text-warmblack"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >{p.category}</motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {modal && <ProjectModal project={modal} onClose={()=>setModal(null)} />}
    </section>
  )
}
