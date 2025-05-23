export default function BetaCTA() {
  return (
    <section id="cta" className="bg-violet-700 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🎉 Vous pouvez encore rejoindre la bêta privée pendant 14 jours
        </h2>
        <p className="text-lg mb-8">
          Accédez gratuitement à toutes les fonctionnalités de Korpai.
          Aucune carte bancaire requise. Vos retours comptent vraiment.
        </p>
        <a
          href="/rejoindre"
          className="bg-white text-violet-800 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
        >
          Rejoindre la bêta maintenant
        </a>
      </div>
    </section>
  );
}
