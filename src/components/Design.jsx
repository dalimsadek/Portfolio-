import React from 'react'

export default function Design(){
  return (
    <section id="design" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="serif text-2xl font-bold">Philosophie de conception</h3>
        <p className="mt-6 text-lg leading-relaxed">Je crois au pouvoir discret des matériaux : la couture d’un lin, l’émaillage d’une faïence, la façon dont la lumière révèle le veinage du bois. Mon approche mêle artisanat, durabilité et une écriture rigoureuse — chaque objet doit avoir sa raison d’être.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Savoir-faire</h4>
            <p className="mt-2 text-sm text-gray-600">Partenariats avec des artisans locaux, détails sur-mesure et finitions durables.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Durabilité</h4>
            <p className="mt-2 text-sm text-gray-600">Approche responsable, sélection de matériaux pour la longévité.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Lumière & Matière</h4>
            <p className="mt-2 text-sm text-gray-600">Composition entre lumière, textures et échelle humaine.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
