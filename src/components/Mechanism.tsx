export default function Mechanism() {
  return (
    <section id="mecanisme" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          🔧 Comment ça fonctionne ?
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          La méthode Korpai repose sur un mécanisme unique : <strong>votre clonage IA + l’automatisation des envois</strong>.<br />
          Ce duo vous permet d’envoyer des vidéos ultra-personnalisées à grande échelle — <span className="text-violet-700 font-semibold">et de tripler vos taux de réponse sans effort</span>.
        </p>
        {/* Image illustrative */}
        <div className="mb-12">
          <img
            src="/looms.png"
            alt="Illustration du mécanisme de prospection IA"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md"
          />
        </div>

        {/* Étapes */}
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-violet-700 mb-2">📍 Étape 1 : Prospection ciblée</h3>
            <p>
              Korpai identifie automatiquement les prospects les plus pertinents dans votre niche.
            </p>
            <h3 className="text-xl font-semibold text-violet-700 mt-6 mb-2">🎯 Étape 2 : Script IA personnalisé</h3>
            <p>
              Pour chaque prospect, l’IA génère un script unique adapté à son profil, ton de voix, et contexte.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-violet-700 mb-2">🎥 Étape 3 : Vidéo deepfake... de vous-même</h3>
            <p>
              En un clic, vous générez une vidéo IA de vous-même, qui lit un script ultra-personnalisé pour chacun de vos prospects.
            </p>
            <h3 className="text-xl font-semibold text-violet-700 mt-6 mb-2">📬 Étape 4 : Envoi automatisé</h3>
            <p>
              Les vidéos + emails partent dans une séquence intelligente sans aucune action manuelle.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/rejoindre"
            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-800 transition"
          >
            Je veux tester ce mécanisme
          </a>
        </div>
      </div>
    </section>
  );
}
