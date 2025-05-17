"use client";

import { useForm, ValidationError } from "@formspree/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RejoindreBeta() {
  const [state, handleSubmit] = useForm("xbloqjwn"); // Ton ID Formspree

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-700 mb-4">
          Demander un accés anticipé
        </h1>
        <p className="text-2xl md:text-xl mb-8 text-gray-600">
          Multipliez par 3 vos réponses à froid en 10 minutes par jour, sans dépenser en publicité. Rejoignez la bêta privée gratuite.
        </p>

        {state.succeeded ? (
          <p className="text-green-600 text-lg font-medium">
            ✅ Vous êtes bien inscrit à la liste d’attente.<br />
            Nous vous recontacterons très vite.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Votre adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-violet-500 focus:border-violet-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-800 transition disabled:opacity-50"
            >
              Rejoindre la liste
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
