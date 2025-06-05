export default function BetaCTA() {
  return (
    <section id="cta" className="bg-violet-700 text-white py-35 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🎉 Il est encore temps pour rejoindre la bêta privée
        </h2>
        <p className="text-lg mb-8">
          Accédez gratuitement à toutes les fonctionnalités de Korpai.
          Aucune carte bancaire requise.
        </p>
        <a
          href="/rejoindre"
          className="bg-white text-violet-800 px-10 py-6 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
        >
          Rejoindre la bêta maintenant
        </a>
      </div>
    </section>
  );
}
