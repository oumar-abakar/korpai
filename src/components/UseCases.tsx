export default function UseCases() {
  return (
    <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Des cas concrets d'utilisation de Korpai
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">🧑‍💼 Freelance B2B</h3>
            <p className="text-gray-700">
              Envoie des vidéos IA pour relancer ses prospects LinkedIn sans y passer 2h par jour.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">🏢 PME en prospection</h3>
            <p className="text-gray-700">
              Automatise les séquences commerciales en gardant une touche humaine.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-violet-700 mb-2">🎯 Agence de service</h3>
            <p className="text-gray-700">
              Présente son offre à chaud via vidéo personnalisée pour convertir plus vite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
