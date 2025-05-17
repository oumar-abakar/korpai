import Link from "next/link";

export default function SoloCorpTeam() {
  return (
    <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texte */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            👥 Découvrez le concept de la <span className="text-violet-700">SoloCorp™</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Une entreprise composée de <strong>moi</strong>, de mes <strong>agents IA</strong> et de mes <strong>clones IA</strong>.
            Une structure déjà active, pensée pour fonctionner <em>sans équipe classique</em>.
          </p>

          <ul className="text-base md:text-lg text-gray-800 space-y-2 mb-6">
            <li>🧠 Les agents IA analysent, planifient, automatisent.</li>
            <li>🎥 Les clones IA parlent à vos prospects comme si c’était moi.</li>
            <li>👤 Et moi ? Je pilote l’ensemble.</li>
          </ul>

          <p className="text-md text-gray-700 mb-6">
            🎯 <strong>Notre mission ? :</strong> Prouver qu’une SoloCorp™ peut rivaliser avec une multinationale.
            Et à terme, créer la première <strong>corporation individuelle à échelle mondiale</strong>.
          </p>

          <Link
            href="/a-propos"
            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-800 transition"
          >
            Voir la vision complète →
          </Link>
        </div>

        {/* Visuel type trombinoscope */}
        <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-700">
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/profil-ai.png"
              alt="Moi"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Moi, Abakar</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/agent-ia1.png"
              alt="Agent IA 1"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Agent IA 1</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/agent-ia2.png"
              alt="Agent IA 2"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Agent IA 2</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/clone-ia.png"
              alt="Clone IA 1"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Clone IA 1</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/clone-ia.png"
              alt="Clone IA 2"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Clone IA 2</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="/clone-ia.png"
              alt="Clone IA 2"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-2"
            />
            <div className="font-semibold">Clone IA 2</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center">
            <span className="text-gray-400 text-xl mb-1">…</span>
            <span className="font-semiblod text-gray-500">Et une infinité</span>
          </div>
        </div>
      </div>
    </section>
  );
}
