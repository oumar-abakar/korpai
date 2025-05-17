export default function EmailExample() {
  return (
    <section className="bg-white py-20 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Voici un exemple de ce que vous pouvez envoyer à vos prospects avec Korpai 👇
        </h2>
        <div className="bg-gray-100 text-left text-sm p-6 rounded-lg shadow-md font-mono whitespace-pre-wrap">
{`Objet : Une vidéo pour vous aider à mieux vendre (1 min max)

Bonjour [Prénom],

J’ai vu votre dernière [publication ou projet spécifique],
et ça m’a inspiré 3 idées pour booster vos résultats.

🎥 J’ai fait une vidéo pour vous en 60 secondes : [Lien vers la vidéo IA]

J’espère que ça vous sera utile,

[Votre prénom]

PS : Si ça vous intéresse d’en parler, je suis dispo.`}
        </div>
        <div className="mt-8">
          <a
            href="/rejoindre"
            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-800 transition"
          >
            Je veux envoyer ce type d’email
          </a>
        </div>
      </div>
    </section>
  );
}
