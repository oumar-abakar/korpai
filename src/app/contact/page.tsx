"use client";

import { useForm, ValidationError } from "@formspree/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  const [state, handleSubmit] = useForm("xbloqjwn"); // Ton ID Formspree ici

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-violet-700 mb-4">
            ✉️ Nous contacter
          </h1>
          <p className="text-lg text-gray-600">
            Une question ? Une demande ? Écrivez-nous et on vous répond vite.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {state.succeeded ? (
            <p className="text-green-600 text-lg font-medium text-center">
              Merci ! Votre message a bien été envoyé 🙌
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-violet-500 focus:border-violet-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-violet-500 focus:border-violet-500"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-800 transition disabled:opacity-50"
                >
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
