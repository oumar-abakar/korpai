import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Section Qui suis-je */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/profil-ai.png"
                alt="Moi"
                width={500}
                height={500}
                className="rounded-xl w-full max-w-sm mx-auto shadow-lg object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qui suis-je ?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Je m&#39appelle <strong className="text-violet-700">Abakar Oumar</strong> et je suis le créateur de <strong>Korpai</strong>.
                J&#39ai conçu ce projet comme un manifeste : prouver qu&#39un solo entrepreneur peut aller aussi loin qu&#39une équipe entière.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Mon métier ? Créer, automatiser, itérer. Grâce à mes agents IA et mes clones vidéo,
                je gère ma prospection sans jamais devoir sacrifier mon temps ni mon énergie.
              </p>
              <p className="text-lg text-gray-700">
                Aujourd&#39hui, j&#39accompagne d&#39autres indépendants à faire pareil — et à rejoindre le mouvement
                des <strong>entrepreneurs augmentés</strong>.
              </p>
            </div>
          </section>

          {/* Vision SoloCorp */}
          <section>
            <h2 className="text-4xl font-bold text-violet-800 mb-6">
              👥 Découvrez le concept de la SoloCorp™
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Une entreprise composée de <strong>moi</strong>, de mes <strong>agents IA</strong> et de mes <strong>clones IA</strong>.
              Une structure déjà active, pensée pour fonctionner <em>sans équipe classique</em>.
            </p>

            <ul className="text-base md:text-lg text-gray-800 space-y-2 mb-6">
              <li>🧠 Les agents IA analysent, planifient, automatisent.</li>
              <li>🎥 Les clones IA parlent à vos prospects comme si c&#39était moi.</li>
              <li>👤 Et moi ? Je pilote l&#39ensemble.</li>
            </ul>

            <p className="text-md text-gray-700 mb-6">
              🎯 <strong>Notre mission :</strong> Prouver qu&#39une SoloCorp™ peut rivaliser avec une multinationale.
              Et à terme, créer la première <strong>corporation individuelle à échelle mondiale</strong>.
            </p>
          </section>

          {/* Agents IA et Clones */}
          <section className="grid md:grid-cols-3 gap-8 text-center text-sm">
            <div>
              <Image
                src="/profil-ai.png"
                alt="Moi"
                width={240}
                height={240}
                className="rounded-md mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-lg">Moi</h3>
              <p className="text-gray-600">Créateur, pilote, unique membre humain.</p>
            </div>

            <div>
              <Image
                src="/agent-ia1.png"
                alt="Agent IA"
                width={160}
                height={160}
                className="rounded-md mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-lg">Agents IA</h3>
              <p className="text-gray-600">Ils rédigent, analysent, planifient, exécutent.</p>
            </div>

            <div>
              <Image
                src="/clone-ia2.png"
                alt="Clone IA"
                width={240}
                height={240}
                className="rounded-md mx-auto mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-lg">Clones IA</h3>
              <p className="text-gray-600">Des doubles vidéos qui parlent à vos prospects.</p>
            </div>
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Ma mission avec Korpai
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              Je ne vends pas seulement un logiciel, je partage une philosophie :
            </p>
            <blockquote className="text-lg border-l-4 border-violet-700 pl-4 font-bold text-gray-700 mb-6">
               Rendre la prospection intelligente accessible à ceux qui entreprennent seuls.
            </blockquote>
            <p className="text-lg text-gray-700">
              Mon but : permettre à un freelance ou une petite structure de devenir aussi puissant
              qu&#39un département marketing complet — grâce à l&#39<strong>IA</strong>, l&#39<strong>automatisation</strong> et une <strong>stratégie ultra-personnalisée</strong>.
            </p>
          </section>

          {/* Conclusion */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🤝 Et vous, vous embarquez ?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Korpai est encore jeune.  
              Mais ceux qui rejoignent la bêta aujourd&#39hui ne testent pas juste un produit.  
              <strong>Ils rejoignent un mouvement</strong> : celui des <em>entrepreneurs augmentés</em>.
            </p>
            <a
              href="/rejoindre"
              className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-800 transition"
            >
              Rejoindre la bêta →
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
