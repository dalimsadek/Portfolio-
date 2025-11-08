import React from 'react'

export default function Furniture(){
  return (
    <section id="furniture" className="py-20 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.02))]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="serif text-2xl font-bold">Notre mobilier d'intérieur — conseil et vente</h3>
        <p className="mt-4 text-gray-700">Samar'Art propose une sélection de mobilier contemporain et artisanal, choisie pour sa qualité et son histoire. Nous offrons un service de conseil personnalisé, de la sélection des pièces à la livraison et l'installation.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Sélection curatée</h4>
            <p className="mt-2 text-sm text-gray-600">Pièces uniques, éditions limitées et créations sur-mesure.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Conseil</h4>
            <p className="mt-2 text-sm text-gray-600">Accompagnement pour composer des ambiances et choisir les matériaux adaptés.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Vente & installation</h4>
            <p className="mt-2 text-sm text-gray-600">Livraison, installation et suivi jusqu'à la finalisation du projet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
