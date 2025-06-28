export default function Stats() {
  return (
    <section className="bg-violet-700 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Ce que constatent nos premiers utilisateurs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold">+2042%</p>
            <p className="text-lg mt-2">de taux de réponse moyen</p>
          </div>
          <div>
            <p className="text-4xl font-bold">12 min</p>
            <p className="text-lg mt-2">pour lancer une campagne complète</p>
          </div>
          <div>
            <p className="text-4xl font-bold">5x plus</p>
            <p className="text-lg mt-2">de RDV obtenus que par email classique</p>
          </div>
        </div>
      </div>
    </section>
  );
}
