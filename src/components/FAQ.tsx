export default function FAQ() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Questions fréquentes
        </h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-lg font-semibold text-violet-700 mb-1">
              Est-ce que je dois enregistrer chaque vidéo manuellement ?
            </h3>
            <p className="text-gray-700">
              Non. Vous faites un seul enregistrement. Korpai utilise votre voix et votre visage pour générer toutes les vidéos à partir de scripts uniques.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-violet-700 mb-1">
              Est-ce légal d’utiliser ce type de vidéo IA ?
            </h3>
            <p className="text-gray-700">
              Absolument. Vous vous filmez vous-même. Il n’y a aucune usurpation d’identité — c’est vous qui parlez, mais à grande échelle.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-violet-700 mb-1">
              Est-ce que j’ai besoin d’un CRM pour utiliser Korpai ?
            </h3>
            <p className="text-gray-700">
              Non. Korpai fonctionne en toute autonomie. Vous pouvez gérer votre prospection directement dans l’interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
