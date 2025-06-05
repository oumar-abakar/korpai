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

J’ai vu votre dernière [publication récente sur un sujet spécifique] + [compliment],

Je me permets de vous contacter car j'ai visité votre [page de vente] et ça m’a inspiré 2 idées d'amélioration pour booster vos ventes.

🎥 J’ai fait une petite vidéo d'une minute pour vous expliquer mes pistes : [Lien vers la vidéo IA]

J’espère que ça vous sera utile,

[Votre prénom]

PS : Si ça vous intéresse que je vous aide à rédiger [vos pages de vente/fiches produits], je suis disponible pour un appel !`}
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
