import { useState, useEffect } from 'react';
import VaultApp from './VaultApp';
import LoginPage from './LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier la session au chargement
  useEffect(() => {
    const authenticated = localStorage.getItem('vault_authenticated');
    const savedUser = localStorage.getItem('vault_user');

    if (authenticated === 'true' && savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('vault_authenticated');
    localStorage.removeItem('vault_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Écran de chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Afficher login ou application
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <VaultApp user={user} onLogout={handleLogout} />;
}

export default App;
