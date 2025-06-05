export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-gray-100 py-20 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Ce qu’en disent les premiers utilisateurs
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic mb-4">
              “J’ai envoyé 15 vidéos avec Korpai la première semaine. J’ai reçu 5 réponses
              et booké 2 appels sans rien écrire moi-même. Les gens m’ont dit qu’ils avaient
              cliqué parce que je leur parlais directement dans la vidéo.”
            </p>
            <p className="text-sm font-semibold text-violet-700">— Mélanie, UX Designer freelance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic mb-4">
              “J’ai mis en place ma campagne en 20 minutes. 3 jours après, j’avais une réponse
              d’un prospect prêt à acheter. Pour moi, c’est la nouvelle façon de faire du B2B.”
            </p>
            <p className="text-sm font-semibold text-violet-700">— Sami, consultant marketing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic mb-4">
              “Je pensais que l’IA allait juste m’économiser du temps. En réalité, elle a doublé mes réponses dès la première semaine. Je n’ai jamais eu autant de rendez-vous sans relancer à la main.”
            </p>
            <p className="text-sm font-semibold text-violet-700">— Amélie, freelance B2B</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-800 italic mb-4">
              “Je gère une agence à 1 seule personne. Mes clients croient que j’ai une équipe. Les vidéos font tout le travail. J’ai converti 4 leads en 10 jours facilement.”
            </p>
            <p className="text-sm font-semibold text-violet-700">— Maxime, agence solo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
