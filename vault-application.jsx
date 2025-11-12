const { useState } = React;

// Icônes SVG en ligne
const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Briefcase = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ClipboardList = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

function VaultApp() {
  const [activeSection, setActiveSection] = useState('profil');

  const sections = [
    { id: 'profil', nom: 'Profil', icon: User },
    { id: 'carrieres', nom: 'Carrières', icon: Briefcase },
    { id: 'projections', nom: 'Projections', icon: TrendingUp },
    { id: 'demandes', nom: 'Demandes Caisses', icon: ClipboardList }
  ];

  const renderProfil = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <User className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Profil</h2>
      </div>
      <div className="text-gray-600 space-y-4">
        <p className="text-lg">Section Profil - Contenu à produire</p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <p className="text-sm text-blue-800">
            Cette section contiendra les informations personnelles et professionnelles de l'utilisateur.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCarrieres = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Carrières</h2>
      </div>
      <div className="text-gray-600 space-y-4">
        <p className="text-lg">Section Carrières - Contenu à produire</p>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
          <p className="text-sm text-purple-800">
            Cette section affichera l'historique professionnel et les évolutions de carrière.
          </p>
        </div>
      </div>
    </div>
  );

  const renderProjections = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Projections</h2>
      </div>
      <div className="text-gray-600 space-y-4">
        <p className="text-lg">Section Projections - Contenu à produire</p>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
          <p className="text-sm text-green-800">
            Cette section présentera les projections financières et les indicateurs de performance.
          </p>
        </div>
      </div>
    </div>
  );

  const renderDemandesCaisses = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <ClipboardList className="w-8 h-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Demandes Caisses</h2>
      </div>
      <div className="text-gray-600 space-y-4">
        <p className="text-lg">Section Demandes Caisses - Contenu à produire</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
          <p className="text-sm text-yellow-800">
            Cette section permettra de gérer les demandes de caisse et suivre leur statut.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header avec logo */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">V</span>
            </div>
            <h1 className="ml-3 text-3xl font-bold text-gray-900">VAULT</h1>
            <span className="ml-3 text-sm text-gray-500 hidden sm:block">Système de Gestion Intégré</span>
          </div>
        </div>
      </header>

      {/* Menu horizontal */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center px-4 py-4 border-b-2 font-medium transition-all whitespace-nowrap ${
                    activeSection === section.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{section.nom}</span>
                  <span className="sm:hidden">{section.nom.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {activeSection === 'profil' && renderProfil()}
          {activeSection === 'carrieres' && renderCarrieres()}
          {activeSection === 'projections' && renderProjections()}
          {activeSection === 'demandes' && renderDemandesCaisses()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Sécurité & RGPD
            </button>
            <span className="hidden sm:inline text-gray-300">•</span>
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Mentions légales
            </button>
            <span className="hidden sm:inline text-gray-300">•</span>
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              FAQ
            </button>
            <span className="hidden sm:inline text-gray-300">•</span>
            <button className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Contactez-nous
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm">
            VAULT 2025 - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
