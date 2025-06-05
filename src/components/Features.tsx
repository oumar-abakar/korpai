export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Deux outils. Un seul objectif : <br /> plus de réponses, plus vite.
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Korpai combine la puissance de l’IA avec un format vidéo ultra personnalisé pour
          <span className="font-semibold text-violet-700"> déclencher plus de conversations</span>, sans effort.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">
              🎥 Vidéo IA personnalisée
            </h3>
            <p className="text-gray-700">
              Générez une vidéo IA de vous-même en 1 clic, avec un script entièrement
              personnalisé pour chaque prospect. Votre visage, vos mots — mais sans tournage répétitif.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">
              ⚙️ Campagne IA automatisée
            </h3>
            <p className="text-gray-700">
              En quelques jours, Korpai construit une séquence intelligente : emails,
              relances, timing… Tout est généré et envoyé automatiquement, sans CRM ni copier-coller.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/rejoindre"
            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-800 transition"
          >
            Créer ma première campagne
          </a>
        </div>
      </div>
    </section>
  );
}
