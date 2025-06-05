export default function Hero() {
  return (
    <section className="relative text-white py-13 px-6 text-center overflow-hidden">

      {/* Background image with fixed parallax effect */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800 to-violet-300 opacity-90 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto mt-12 mb-9">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Triplez votre taux de réponses<br />
          avec des vidéos de prospection IA <span className="underline">sans y passer des dizaines heures par mois.</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Korpai génère à votre place des vidéos personnalisées de vous-même.<br />
          Votre script, votre visage, votre ton — à l’échelle, en quelques clics.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <a
            href="/rejoindre"
            className="bg-white text-violet-800 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Rejoindre la bêta privée
          </a>
          <span className="text-sm italic">
            🕒 Inscriptions ouvertes
          </span>
        </div>
      </div>
    </section>
  );
}
