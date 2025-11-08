import React from 'react'

const reviews = [
  {id:1, text:"Décor magnifique — une ambiance unique qui a enchanté nos clients.", author:'Google Review — Le Jaune de Damas'},
  {id:2, text:"Une transformation remarquable : chaleur et caractère pour notre restaurant.", author:'Avis client'},
  {id:3, text:"Les détails et la lumière rendent l'espace vivant et accueillant.", author:'Critique locale'}
]

export default function Testimonials(){
  const [i, setI] = React.useState(0)
  React.useEffect(()=>{
    const t = setInterval(()=> setI(x => (x+1)%reviews.length), 4500)
    return ()=>clearInterval(t)
  },[])

  return (
    <section className="py-16 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h4 className="serif text-xl font-bold">ILS PARLENT DE NOUS</h4>
        <div className="mt-6 p-6 bg-white/60 rounded-lg shadow">
          <p className="italic text-lg">“{reviews[i].text}”</p>
          <p className="mt-4 signature text-sm">{reviews[i].author}</p>
        </div>
        <p className="mt-4 text-sm text-gray-600">Certaines citations proviennent d'avis publics (Google Reviews) et sont utilisées ici à titre représentatif. Je suis l'auteur de la décoration du restaurant Le Jaune de Damas.</p>
      </div>
    </section>
  )
}
