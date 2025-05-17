export default function WhyItWorks() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pourquoi Korpai fonctionne (et pourquoi les prospects répondent)
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Les prospects sont bombardés d’emails génériques. Ce que fait Korpai, c’est de 
          <strong className="text-violet-700"> créer une vraie rupture</strong> dans leur boîte de réception.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">📸 Effet miroir</h3>
            <p className="text-gray-700">
              Le prospect voit une vidéo avec votre visage qui s’adresse à lui personnellement.
              Il se sent immédiatement concerné.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">🧠 Script IA contextuel</h3>
            <p className="text-gray-700">
              Le message est unique pour chaque personne, généré en fonction de son profil.
              Ça ne ressemble pas à une séquence automatisée classique.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">⚙️ Automatisation intelligente</h3>
            <p className="text-gray-700">
              Tout se lance en 10 minutes, mais la séquence est optimisée pour paraître
              humaine, cohérente et engageante.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/rejoindre"
            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-800 transition"
          >
            Je veux voir ça en action
          </a>
        </div>
      </div>
    </section>
  );
}
