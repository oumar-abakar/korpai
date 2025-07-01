import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center pt-20 flex-1">
        <h1 className="text-4xl font-bold mb-6 text-center">Tableau de bord utilisateur</h1>
        <button className="bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-800 transition">
          Créer une nouvelle campagne
        </button>
      </main>
      <Footer />
    </div>
  );
}
