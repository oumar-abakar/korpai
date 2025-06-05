export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600">
      <div className="max-w-4xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Korpai. Tous droits réservés.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#features" className="hover:text-violet-600">Fonctionnalités</a>
          <a href="#contact" className="hover:text-violet-600">Contact</a>
          <a href="#" className="hover:text-violet-600">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
