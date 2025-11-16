import React, { useState } from 'react';
import { User, Briefcase, TrendingUp, Edit2, Check, X, LogOut, Plus, MessageCircle, CreditCard, Upload, FileText, Users, ChevronDown, ChevronUp, Eye, Download, Bell, Settings, LayoutDashboard, ClipboardList } from 'lucide-react';

export default function VaultApp() {
  const [activeSection, setActiveSection] = useState('profil');
  const [credits, setCredits] = useState(3);
  const [dossierOuvert, setDossierOuvert] = useState('M. IBANEZ');
  const [showDossierMenu, setShowDossierMenu] = useState(false);
  
  const [carrieres, setCarrieres] = useState([
    {
      id: 1,
      nom: 'Carrière actuelle',
      data: [
        {
          annee: 2002,
          debut: '18/03/2002',
          fin: '21/07/2005',
          employeur: 'TRANSDEV MEDITERRANEE',
          activite: 'Salarié',
          revenu: 80636,
          trimestres: 0,
          regimeBase: '',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2002,
          debut: '18/03/2002',
          fin: '21/07/2005',
          employeur: 'RESEAU BATIPRO',
          activite: 'Salarié',
          revenu: 80635,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: '',
          pointsComplementaires: 0
        },
        {
          annee: 2005,
          debut: '01/09/2005',
          fin: '17/12/2005',
          employeur: 'SARL BATI',
          activite: 'Salarié',
          revenu: 5560,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2006,
          debut: '01/01/2006',
          fin: '01/01/2006',
          employeur: 'TRANSDEV MEDITERRANEE',
          activite: 'Salarié',
          revenu: 1470,
          trimestres: 0,
          regimeBase: '',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2007,
          debut: '01/10/2007',
          fin: '30/09/2008',
          employeur: 'MED MATERIAUX',
          activite: 'Salarié',
          revenu: 22888,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2007,
          debut: '16/04/2007',
          fin: '30/09/2007',
          employeur: 'TOP MATERIAUX',
          activite: 'Salarié',
          revenu: 9740,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2008,
          debut: '01/10/2008',
          fin: '31/12/2008',
          employeur: 'S.A.S. GROUPE M',
          activite: 'Salarié',
          revenu: 6290,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2009,
          debut: '01/01/2009',
          fin: '22/04/2010',
          employeur: 'MED MATERIAUX',
          activite: 'Salarié',
          revenu: 34865,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2010,
          debut: '01/04/2010',
          fin: '06/04/2010',
          employeur: 'STOCKMATERIAUX',
          activite: 'Salarié',
          revenu: 493,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: '',
          pointsComplementaires: 0
        },
        {
          annee: 2010,
          debut: '26/04/2010',
          fin: '30/05/2013',
          employeur: 'STOCKMATERIAUX',
          activite: 'Salarié',
          revenu: 100999,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2013,
          debut: '03/06/2013',
          fin: '30/06/2020',
          employeur: 'BIOMATERIAUX GROUP C',
          activite: 'Salarié',
          revenu: 343874,
          trimestres: 0,
          regimeBase: '',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2013,
          debut: '03/06/2013',
          fin: '31/12/2024',
          employeur: 'ACTIVITÉ SALARIÉE (MSA)',
          activite: 'Salarié MSA',
          revenu: 445489,
          trimestres: 0,
          regimeBase: 'MSA',
          pointsBase: 0,
          regimeComplementaire: '',
          pointsComplementaires: 0
        },
        {
          annee: 2020,
          debut: '01/08/2020',
          fin: '31/12/2024',
          employeur: 'BIOMATERIAUX GROUP C',
          activite: 'Salarié',
          revenu: 252408,
          trimestres: 0,
          regimeBase: '',
          pointsBase: 0,
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 0
        },
        {
          annee: 2024,
          debut: '01/01/2024',
          fin: '31/12/2024',
          employeur: 'SYNTHÈSE ANNÉE 2024',
          activite: 'Synthèse',
          revenu: 158824,
          trimestres: 4,
          regimeBase: 'CNAV',
          pointsBase: 'N/A',
          regimeComplementaire: 'Agirc-Arrco, Ircantec',
          pointsComplementaires: 'N/A'
        },
        {
          annee: 2024,
          debut: '01/01/2024',
          fin: '31/12/2024',
          employeur: 'Centrale achats',
          activite: 'Salarié du privé',
          revenu: 132982,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 'N/A',
          regimeComplementaire: 'Agirc-Arrco',
          pointsComplementaires: 1000.10
        },
        {
          annee: 2024,
          debut: '01/01/2024',
          fin: '31/12/2024',
          employeur: 'UNIVERSITE PARIS 8',
          activite: 'Agent salarié non titulaire',
          revenu: 25842,
          trimestres: 0,
          regimeBase: 'CNAV',
          pointsBase: 'N/A',
          regimeComplementaire: 'Ircantec',
          pointsComplementaires: 718.00
        }
      ]
    },
    {
      id: 2,
      nom: 'Statut PDT de SAS',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', employeur: '', activite: 'PDT SAS', revenu: 45000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 210, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1650 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', employeur: '', activite: 'PDT SAS', revenu: 47000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 215, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1720 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', employeur: '', activite: 'PDT SAS', revenu: 49000, trimestres: 2, regimeBase: 'CNAV', pointsBase: 220, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1780 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', employeur: '', activite: 'PDT SAS', revenu: 51000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 225, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1850 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', employeur: '', activite: 'PDT SAS', revenu: 53000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 230, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1920 }
      ]
    },
    {
      id: 3,
      nom: 'Chômage',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', employeur: '', activite: 'Chômage', revenu: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', employeur: '', activite: 'Chômage', revenu: 8000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', employeur: '', activite: 'Chômage', revenu: 15000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', employeur: '', activite: 'Chômage', revenu: 0, trimestres: 3, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', employeur: '', activite: 'Chômage', revenu: 5000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 }
      ]
    }
  ]);
  
  const [carriereActive, setCarriereActive] = useState(1);
  const [showCarriereForm, setShowCarriereForm] = useState(false);
  const [nouveauNomCarriere, setNouveauNomCarriere] = useState('');
  const [carriereToDelete, setCarriereToDelete] = useState(null);
  const [editingLigne, setEditingLigne] = useState(null);
  const [tempLigneData, setTempLigneData] = useState(null);
  const [expandedYears, setExpandedYears] = useState({});
  
  const [profil, setProfil] = useState({
    nom: 'Bellanger',
    prenom: 'Jean',
    civilite: 'M.',
    numeroSecu: '1 66 04 75 123 456 78',
    nombreEnfants: 2
  });

  const [enfants, setEnfants] = useState([
    { id: 1, prenom: 'Sophie', nom: 'Bellanger', dateNaissance: '15/03/2015' },
    { id: 2, prenom: 'Lucas', nom: 'Bellanger', dateNaissance: '22/08/2018' }
  ]);
  
  const [documents, setDocuments] = useState([
    { id: 1, nom: 'Relevé_carriere_2024.pdf', categorie: 'Relevé de carrière', date: '10/11/2025 14:32' },
    { id: 2, nom: 'Bulletin_salaire_octobre.pdf', categorie: 'Preuve de revenu', date: '08/11/2025 09:15' },
    { id: 3, nom: 'Livret_famille.pdf', categorie: 'Document familial', date: '05/11/2025 16:48' },
    { id: 4, nom: 'Notification_pension_retraite.pdf', categorie: 'Notification de pension', date: '01/11/2025 11:20' }
  ]);
  
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [editingEnfant, setEditingEnfant] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFileName, setUploadFileName] = useState('');
  const [uploadCategorie, setUploadCategorie] = useState('Relevé de carrière');
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedCarrieres, setExpandedCarrieres] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSimulationModal, setShowSimulationModal] = useState(false);
  const [tauxInflation, setTauxInflation] = useState(2);
  const [simulationType, setSimulationType] = useState('single');

  const [notifications] = useState([
    {
      id: 1,
      type: 'reglementaire',
      titre: 'Évolutions réglementaires',
      message: 'Voir tous les dossiers qui sont impactés par la réforme',
      date: '12/11/2025',
      isNew: true
    },
    {
      id: 2,
      type: 'capacite',
      titre: 'Capacité de dossiers presque atteinte',
      message: '23 dossiers réalisés sur 25 disponibles – Commandez un pack de dossiers supplémentaires ici',
      date: '10/11/2025',
      isNew: true
    }
  ]);

  const startEdit = (field, value) => {
    setEditingField(field);
    setTempValue(value);
  };

  const saveEdit = (field) => {
    setProfil({ ...profil, [field]: tempValue });
    setEditingField(null);
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue('');
  };

  const startEditEnfant = (enfantId) => {
    const enfant = enfants.find(e => e.id === enfantId);
    setEditingEnfant({ ...enfant });
  };

  const saveEnfant = () => {
    setEnfants(enfants.map(e => e.id === editingEnfant.id ? editingEnfant : e));
    setEditingEnfant(null);
  };

  const addEnfant = () => {
    const newEnfant = {
      id: enfants.length + 1,
      prenom: '',
      nom: profil.nom,
      dateNaissance: ''
    };
    setEditingEnfant(newEnfant);
  };

  const deleteEnfant = (id) => {
    setEnfants(enfants.filter(e => e.id !== id));
    setProfil({ ...profil, nombreEnfants: profil.nombreEnfants - 1 });
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadFileName(file.name);
    }
  };

  const handleUpload = () => {
    if (uploadFileName && uploadCategorie) {
      const newDoc = {
        id: documents.length + 1,
        nom: uploadFileName,
        categorie: uploadCategorie,
        date: new Date().toLocaleString('fr-FR', { 
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setDocuments([...documents, newDoc]);
      setShowUploadModal(false);
      setUploadFileName('');
      setUploadCategorie('Relevé de carrière');
      setSelectedFile(null);
    }
  };

  const deleteDocument = (id) => {
    setDocuments(documents.filter(d => d.id !== id));
  };

  const ajouterCarriere = () => {
    if (nouveauNomCarriere.trim()) {
      const newCarriere = {
        id: carrieres.length + 1,
        nom: nouveauNomCarriere,
        data: []
      };
      setCarrieres([...carrieres, newCarriere]);
      setNouveauNomCarriere('');
      setShowCarriereForm(false);
    }
  };

  const supprimerCarriere = (id) => {
    setCarrieres(carrieres.filter(c => c.id !== id));
    if (carriereActive === id) {
      setCarriereActive(1);
    }
    setCarriereToDelete(null);
  };

  const startEditLigne = (ligne) => {
    setEditingLigne(ligne.annee);
    setTempLigneData({ ...ligne });
  };

  const saveLigne = () => {
    setCarrieres(carrieres.map(c => {
      if (c.id === carriereActive) {
        return {
          ...c,
          data: c.data.map(l => l.annee === editingLigne ? tempLigneData : l)
        };
      }
      return c;
    }));
    setEditingLigne(null);
    setTempLigneData(null);
  };

  const cancelEditLigne = () => {
    setEditingLigne(null);
    setTempLigneData(null);
  };

  const checkLigneIncoherence = (ligne) => {
    const messages = [];

    if (ligne.trimestres < 0 || ligne.trimestres > 4) {
      messages.push('Trimestres invalides (doit être entre 0 et 4)');
    }

    if (ligne.trimestres === 0 && (ligne.activite === 'Salarié' || ligne.activite === 'Salarié MSA')) {
      messages.push('0 trimestre pour une activité salariée');
    }

    return messages;
  };

  const toggleExpandYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleExpandCarriere = (id) => {
    setExpandedCarrieres(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const simulerAjouterLigne = () => {
    const carriere = carrieres.find(c => c.id === carriereActive);
    if (!carriere || carriere.data.length === 0) return;

    // Trouver la dernière ligne (non-synthèse)
    const derniereAnnee = Math.max(...carriere.data.filter(l => l.activite !== 'Synthèse').map(l => l.annee));
    const dernieresLignes = carriere.data.filter(l => l.annee === derniereAnnee && l.activite !== 'Synthèse');

    if (dernieresLignes.length === 0) return;

    // Prendre la dernière ligne comme modèle
    const derniereLigne = dernieresLignes[dernieresLignes.length - 1];

    // Créer une nouvelle ligne pour l'année suivante
    const nouvelleLigne = {
      ...derniereLigne,
      annee: derniereAnnee + 1,
      debut: `01/01/${derniereAnnee + 1}`,
      fin: `31/12/${derniereAnnee + 1}`,
      revenu: Math.round(derniereLigne.revenu * (1 + tauxInflation / 100)),
      pointsBase: typeof derniereLigne.pointsBase === 'number' ? Math.round(derniereLigne.pointsBase * (1 + tauxInflation / 100) * 100) / 100 : 'N/A',
      pointsComplementaires: typeof derniereLigne.pointsComplementaires === 'number' ? Math.round(derniereLigne.pointsComplementaires * (1 + tauxInflation / 100) * 100) / 100 : 'N/A'
    };

    setCarrieres(carrieres.map(c => {
      if (c.id === carriereActive) {
        return {
          ...c,
          data: [...c.data, nouvelleLigne]
        };
      }
      return c;
    }));

    setShowSimulationModal(false);
  };

  const simulerTauxPlein = () => {
    const carriere = carrieres.find(c => c.id === carriereActive);
    if (!carriere || carriere.data.length === 0) return;

    const trimestresRequis = 172;
    const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);

    if (totalTrimestres >= trimestresRequis) {
      alert('Le taux plein est déjà atteint !');
      return;
    }

    const trimestresManquants = trimestresRequis - totalTrimestres;
    const anneesNecessaires = Math.ceil(trimestresManquants / 4);

    // Trouver la dernière ligne (non-synthèse)
    const derniereAnnee = Math.max(...carriere.data.filter(l => l.activite !== 'Synthèse').map(l => l.annee));
    const dernieresLignes = carriere.data.filter(l => l.annee === derniereAnnee && l.activite !== 'Synthèse');

    if (dernieresLignes.length === 0) return;

    // Prendre la dernière ligne comme modèle
    const derniereLigne = dernieresLignes[dernieresLignes.length - 1];

    // Créer les nouvelles lignes
    const nouvellesLignes = [];
    for (let i = 1; i <= anneesNecessaires; i++) {
      const annee = derniereAnnee + i;
      const facteurInflation = Math.pow(1 + tauxInflation / 100, i);

      nouvellesLignes.push({
        ...derniereLigne,
        annee: annee,
        debut: `01/01/${annee}`,
        fin: `31/12/${annee}`,
        revenu: Math.round(derniereLigne.revenu * facteurInflation),
        trimestres: i === anneesNecessaires ? (trimestresManquants % 4 || 4) : 4,
        pointsBase: typeof derniereLigne.pointsBase === 'number' ? Math.round(derniereLigne.pointsBase * facteurInflation * 100) / 100 : 'N/A',
        pointsComplementaires: typeof derniereLigne.pointsComplementaires === 'number' ? Math.round(derniereLigne.pointsComplementaires * facteurInflation * 100) / 100 : 'N/A'
      });
    }

    setCarrieres(carrieres.map(c => {
      if (c.id === carriereActive) {
        return {
          ...c,
          data: [...c.data, ...nouvellesLignes]
        };
      }
      return c;
    }));

    setShowSimulationModal(false);
  };

  const handleSimulation = () => {
    if (simulationType === 'single') {
      simulerAjouterLigne();
    } else if (simulationType === 'tauxPlein') {
      simulerTauxPlein();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg border-b-4 border-blue-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  VAULT
                </h1>
                <p className="text-xs text-gray-500 font-medium">Plateforme Expert Retraite</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-full hover:bg-blue-50 transition"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  {notifications.filter(n => n.isNew).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {notifications.filter(n => n.isNew).length}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-bold text-gray-800">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notif => (
                        <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${notif.isNew ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-gray-800">{notif.titre}</h4>
                              <p className="text-sm text-gray-600 mt-1">{notif.message}</p>
                              <p className="text-xs text-gray-400 mt-2">{notif.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setShowDossierMenu(!showDossierMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition border border-blue-200"
                >
                  <User className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{dossierOuvert}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                
                {showDossierMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-2">
                      <button className="w-full text-left px-4 py-2 hover:bg-indigo-50 rounded-lg flex items-center gap-2 text-sm text-indigo-600 font-medium">
                        <LayoutDashboard className="w-4 h-4" />
                        <span>Tableau de bord</span>
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">M. IBANEZ</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>Marie Martin</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>Paul Durand</span>
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button className="w-full text-left px-4 py-2 hover:bg-blue-50 rounded-lg flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <Plus className="w-4 h-4" />
                        <span>Nouveau dossier</span>
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg flex items-center gap-2 text-sm text-gray-700">
                        <Settings className="w-4 h-4" />
                        <span>Paramètres</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-red-50 rounded-lg flex items-center gap-2 text-sm text-red-600 font-medium">
                        <LogOut className="w-4 h-4" />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200 hover:from-amber-100 hover:to-yellow-100 transition">
                <MessageCircle className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-800">Obtenir de l'aide ?</span>
                <span className="text-xs font-bold text-amber-600">({credits} crédits)</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveSection('profil')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeSection === 'profil'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <User className="w-5 h-5" />
            Profil
          </button>
          <button
            onClick={() => setActiveSection('documents')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeSection === 'documents'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <FileText className="w-5 h-5" />
            Documents
          </button>
          <button
            onClick={() => setActiveSection('carriere')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeSection === 'carriere'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Carrières
          </button>
          <button
            onClick={() => setActiveSection('projections')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeSection === 'projections'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Projections
          </button>
          <button
            onClick={() => setActiveSection('suivi')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
              activeSection === 'suivi'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <ClipboardList className="w-5 h-5" />
            Suivi dossier
          </button>
        </div>

        {activeSection === 'profil' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                Informations personnelles
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(profil).map(([key, value]) => (
                  <div key={key} className="group">
                    <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      {key === 'nom' ? 'Nom' : 
                       key === 'prenom' ? 'Prénom' : 
                       key === 'civilite' ? 'Civilité' : 
                       key === 'numeroSecu' ? 'N° Sécurité sociale' : 
                       'Nombre d\'enfants'}
                    </label>
                    <div className="flex items-center gap-2">
                      {editingField === key ? (
                        <>
                          <input
                            type="text"
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="flex-1 px-4 py-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            autoFocus
                          />
                          <button
                            onClick={() => saveEdit(key)}
                            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                          >
                            <Check className="w-5 h-5" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 font-medium text-gray-800">
                            {value}
                          </div>
                          <button
                            onClick={() => startEdit(key, value)}
                            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition opacity-0 group-hover:opacity-100"
                          >
                            <Edit2 className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  Enfants ({enfants.length})
                </h2>
                <button
                  onClick={addEnfant}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  <Plus className="w-5 h-5" />
                  Ajouter un enfant
                </button>
              </div>
              
              <div className="space-y-4">
                {enfants.map((enfant) => (
                  <div key={enfant.id} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    {editingEnfant?.id === enfant.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Prénom"
                          value={editingEnfant.prenom}
                          onChange={(e) => setEditingEnfant({ ...editingEnfant, prenom: e.target.value })}
                          className="w-full px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <input
                          type="text"
                          placeholder="Nom"
                          value={editingEnfant.nom}
                          onChange={(e) => setEditingEnfant({ ...editingEnfant, nom: e.target.value })}
                          className="w-full px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <input
                          type="text"
                          placeholder="Date de naissance (JJ/MM/AAAA)"
                          value={editingEnfant.dateNaissance}
                          onChange={(e) => setEditingEnfant({ ...editingEnfant, dateNaissance: e.target.value })}
                          className="w-full px-4 py-2 border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={saveEnfant}
                            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                          >
                            Enregistrer
                          </button>
                          <button
                            onClick={() => setEditingEnfant(null)}
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                          >
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-gray-800">{enfant.prenom} {enfant.nom}</p>
                          <p className="text-sm text-gray-600">Né(e) le {enfant.dateNaissance}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditEnfant(enfant.id)}
                            className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteEnfant(enfant.id)}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'carriere' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                  </div>
                  Scénarios de carrière
                </h2>
                <button
                  onClick={() => setShowCarriereForm(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  <Plus className="w-5 h-5" />
                  Nouveau scénario
                </button>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap">
                {carrieres.map((carriere) => (
                  <div key={carriere.id} className="relative group">
                    <button
                      onClick={() => setCarriereActive(carriere.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        carriereActive === carriere.id
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {carriere.nom}
                    </button>
                    {carrieres.length > 1 && (
                      <button
                        onClick={() => setCarriereToDelete(carriere.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {showCarriereForm && (
                <div className="mb-6 p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <h3 className="font-bold text-gray-800 mb-3">Créer un nouveau scénario</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={nouveauNomCarriere}
                      onChange={(e) => setNouveauNomCarriere(e.target.value)}
                      placeholder="Nom du scénario..."
                      className="flex-1 px-4 py-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                      onClick={ajouterCarriere}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Créer
                    </button>
                    <button
                      onClick={() => {
                        setShowCarriereForm(false);
                        setNouveauNomCarriere('');
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}

              {carriereToDelete && (
                <div className="mb-6 p-4 bg-red-50 rounded-lg border-2 border-red-200">
                  <p className="text-gray-800 mb-3">
                    Êtes-vous sûr de vouloir supprimer le scénario "<strong>{carrieres.find(c => c.id === carriereToDelete)?.nom}</strong>" ?
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => supprimerCarriere(carriereToDelete)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                      Confirmer la suppression
                    </button>
                    <button
                      onClick={() => setCarriereToDelete(null)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              )}

              {(() => {
                const carriere = carrieres.find(c => c.id === carriereActive);
                if (!carriere) return null;

                return (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <th className="py-3 px-2 text-left font-bold">Année</th>
                          <th className="py-3 px-2 text-left font-bold">Début</th>
                          <th className="py-3 px-2 text-left font-bold">Fin</th>
                          <th className="py-3 px-2 text-left font-bold">Employeur</th>
                          <th className="py-3 px-2 text-left font-bold">Activité</th>
                          <th className="py-3 px-2 text-right font-bold">Revenu (€)</th>
                          <th className="py-3 px-2 text-center font-bold">Trim.</th>
                          <th className="py-3 px-2 text-left font-bold">Régime base</th>
                          <th className="py-3 px-2 text-right font-bold">Pts base</th>
                          <th className="py-3 px-2 text-left font-bold">Régime compl.</th>
                          <th className="py-3 px-2 text-right font-bold">Pts compl.</th>
                          <th className="py-3 px-2 text-center font-bold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carriere.data.map((ligne, index) => {
                          const incoherences = checkLigneIncoherence(ligne);
                          const hasError = incoherences.length > 0;
                          const isSynthese = ligne.activite === 'Synthèse';
                          const isYearExpanded = expandedYears[ligne.annee];

                          // Vérifier si cette ligne est un détail d'une année avec synthèse
                          const hasSyntheseForYear = carriere.data.some(l => l.annee === ligne.annee && l.activite === 'Synthèse');
                          const isDetail = hasSyntheseForYear && !isSynthese;

                          // Vérifier s'il y a d'autres lignes suivantes avec la même année (pour savoir si on doit afficher le chevron)
                          const nextLigne = index < carriere.data.length - 1 ? carriere.data[index + 1] : null;
                          const hasDetails = isSynthese && nextLigne && nextLigne.annee === ligne.annee;

                          // Si c'est une ligne de détail et que l'année n'est pas déployée, ne pas afficher
                          if (isDetail && !isYearExpanded) {
                            return null;
                          }

                          return (
                            <tr
                              key={index}
                              className={`border-b border-gray-200 ${
                                hasError ? 'bg-red-50' :
                                isSynthese ? 'bg-blue-50 font-semibold' :
                                isDetail ? 'bg-gray-100' :
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              } hover:bg-blue-50 transition`}
                            >
                              {editingLigne === ligne.annee ? (
                                <>
                                  <td className="py-2 px-2 font-bold text-gray-700">{ligne.annee}</td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.debut}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, debut: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.fin}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, fin: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.employeur}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, employeur: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.activite}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, activite: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.revenu}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, revenu: parseFloat(e.target.value) })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.trimestres}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, trimestres: parseInt(e.target.value) })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.regimeBase}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, regimeBase: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.pointsBase}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, pointsBase: parseFloat(e.target.value) })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="text"
                                      value={tempLigneData.regimeComplementaire}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, regimeComplementaire: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.pointsComplementaires}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, pointsComplementaires: parseFloat(e.target.value) })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <div className="flex gap-1 justify-center">
                                      <button
                                        onClick={saveLigne}
                                        className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                                      >
                                        <Check className="w-3 h-3" />
                                      </button>
                                      <button
                                        onClick={cancelEditLigne}
                                        className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    </div>
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="py-2 px-2 font-bold text-gray-700">
                                    <div className="flex items-center gap-2">
                                      <div className="relative group w-4">
                                        {hasError && (
                                          <>
                                            <span className="text-red-600 font-bold cursor-help">⚠</span>
                                            <div className="absolute top-full left-0 mt-1 hidden group-hover:block w-64 p-2 bg-red-600 text-white text-xs rounded shadow-lg z-10">
                                              {incoherences.map((msg, idx) => (
                                                <div key={idx}>• {msg}</div>
                                              ))}
                                            </div>
                                          </>
                                        )}
                                      </div>
                                      {hasDetails && (
                                        <button
                                          onClick={() => toggleExpandYear(ligne.annee)}
                                          className="text-blue-600 hover:text-blue-800 focus:outline-none"
                                        >
                                          {isYearExpanded ? (
                                            <ChevronDown className="w-4 h-4" />
                                          ) : (
                                            <ChevronUp className="w-4 h-4" />
                                          )}
                                        </button>
                                      )}
                                      {isDetail && <span className="text-gray-400 text-xs ml-2">↳</span>}
                                      <span>{ligne.annee}</span>
                                    </div>
                                  </td>
                                  <td className="py-2 px-2 text-gray-600">{ligne.debut}</td>
                                  <td className="py-2 px-2 text-gray-600">{ligne.fin}</td>
                                  <td className="py-2 px-2 text-gray-600">{ligne.employeur}</td>
                                  <td className="py-2 px-2">
                                    {isSynthese ? (
                                      <div className="flex flex-col gap-1">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                          Salarié du privé
                                        </span>
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                                          Agent salarié non titulaire
                                        </span>
                                      </div>
                                    ) : (
                                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        ligne.activite === 'Agent salarié non titulaire'
                                          ? 'bg-green-100 text-green-700'
                                          : 'bg-blue-100 text-blue-700'
                                      }`}>
                                        {ligne.activite}
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-2 px-2 text-right font-medium text-gray-800">
                                    {ligne.revenu.toLocaleString()}
                                  </td>
                                  <td className={`py-2 px-2 text-center font-bold ${
                                    ligne.trimestres === 0 ? 'text-red-600' :
                                    ligne.trimestres < 4 ? 'text-orange-600' :
                                    'text-green-600'
                                  }`}>
                                    {ligne.trimestres}
                                  </td>
                                  <td className="py-2 px-2 text-gray-600 text-xs">{ligne.regimeBase}</td>
                                  <td className="py-2 px-2 text-right text-gray-700">{ligne.pointsBase}</td>
                                  <td className="py-2 px-2 text-gray-600 text-xs">{ligne.regimeComplementaire}</td>
                                  <td className="py-2 px-2 text-right text-gray-700">{ligne.pointsComplementaires}</td>
                                  <td className="py-2 px-2">
                                    <div className="flex gap-1 justify-center">
                                      {!isSynthese && (
                                        <button
                                          onClick={() => startEditLigne(ligne)}
                                          className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                          <Edit2 className="w-3 h-3" />
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={() => setShowSimulationModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition shadow-lg"
                      >
                        <TrendingUp className="w-5 h-5" />
                        Simuler la suite de la carrière
                      </button>
                    </div>
                  </div>
                );
              })()}

              {showSimulationModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Simuler la suite de la carrière</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type de simulation :
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                            <input
                              type="radio"
                              name="simulationType"
                              value="single"
                              checked={simulationType === 'single'}
                              onChange={(e) => setSimulationType(e.target.value)}
                              className="w-4 h-4 text-blue-600"
                            />
                            <div>
                              <div className="font-medium text-gray-800">Ajouter une ligne</div>
                              <div className="text-xs text-gray-500">Ajouter une seule année supplémentaire</div>
                            </div>
                          </label>
                          <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition">
                            <input
                              type="radio"
                              name="simulationType"
                              value="tauxPlein"
                              checked={simulationType === 'tauxPlein'}
                              onChange={(e) => setSimulationType(e.target.value)}
                              className="w-4 h-4 text-blue-600"
                            />
                            <div>
                              <div className="font-medium text-gray-800">Dupliquer jusqu'au taux plein</div>
                              <div className="text-xs text-gray-500">Ajouter les années nécessaires pour atteindre 172 trimestres</div>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Taux d'inflation annuel (%) :
                        </label>
                        <input
                          type="number"
                          value={tauxInflation}
                          onChange={(e) => setTauxInflation(parseFloat(e.target.value))}
                          step="0.1"
                          min="0"
                          max="10"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Le revenu et les points seront ajustés selon ce taux chaque année
                        </p>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <button
                          onClick={handleSimulation}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition font-medium"
                        >
                          Lancer la simulation
                        </button>
                        <button
                          onClick={() => setShowSimulationModal(false)}
                          className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'projections' && (
          <div className="space-y-6">
            {carrieres.map((carriere) => {
              const isExpanded = expandedCarrieres[carriere.id];
              const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
              const totalPointsBase = carriere.data.reduce((sum, ligne) => sum + ligne.pointsBase, 0);
              const totalPointsComplementaires = carriere.data.reduce((sum, ligne) => sum + ligne.pointsComplementaires, 0);
              
              const valeurPointBase = 0.6734;
              const valeurPointComplementaire = 1.4159;
              
              const pensionBase = totalPointsBase * valeurPointBase * 12;
              const pensionComplementaire = totalPointsComplementaires * valeurPointComplementaire * 12;
              const pensionBruteAnnuelle = pensionBase + pensionComplementaire;
              const pensionNetteAnnuelleBase = pensionBruteAnnuelle * 0.9;
              
              const trimestresRequis = 172;

              return (
                <div key={carriere.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleExpandCarriere(carriere.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-800">{carriere.nom}</h3>
                        <p className="text-sm text-gray-600">{totalTrimestres} trimestres validés</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{pensionNetteAnnuelleBase.toFixed(0)} €</p>
                        <p className="text-xs text-gray-500">Pension nette annuelle estimée</p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-6 border-t border-gray-200 space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                          <p className="text-sm font-semibold text-blue-800 mb-1">Trimestres validés</p>
                          <p className="text-3xl font-bold text-blue-600">{totalTrimestres}</p>
                          <p className="text-xs text-blue-600 mt-1">sur {trimestresRequis} requis</p>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                          <p className="text-sm font-semibold text-purple-800 mb-1">Points régime de base</p>
                          <p className="text-3xl font-bold text-purple-600">{totalPointsBase.toFixed(0)}</p>
                          <p className="text-xs text-purple-600 mt-1">CNAV</p>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200">
                          <p className="text-sm font-semibold text-pink-800 mb-1">Points complémentaires</p>
                          <p className="text-3xl font-bold text-pink-600">{totalPointsComplementaires.toFixed(0)}</p>
                          <p className="text-xs text-pink-600 mt-1">AGIRC-ARRCO</p>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Calcul détaillé de la pension</h4>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b border-green-200">
                            <span className="text-sm text-gray-600">Pension régime de base (mensuelle) :</span>
                            <span className="font-semibold text-gray-800">{(pensionBase / 12).toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-500 -mt-2 mb-2">
                            <span>{totalPointsBase.toFixed(0)} points × {valeurPointBase} € = {(totalPointsBase * valeurPointBase).toFixed(2)} €/mois</span>
                          </div>
                          
                          <div className="flex justify-between items-center pb-2 border-b border-green-200">
                            <span className="text-sm text-gray-600">Pension complémentaire (mensuelle) :</span>
                            <span className="font-semibold text-gray-800">{(pensionComplementaire / 12).toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-500 -mt-2 mb-2">
                            <span>{totalPointsComplementaires.toFixed(0)} points × {valeurPointComplementaire} € = {(totalPointsComplementaires * valeurPointComplementaire).toFixed(2)} €/mois</span>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2 border-t-2 border-green-400">
                            <span className="font-bold text-gray-800">Pension brute annuelle (taux plein) :</span>
                            <span className="text-xl font-bold text-blue-700">{pensionBruteAnnuelle.toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Prélèvements sociaux (≈10%) :</span>
                            <span className="font-semibold text-red-600">- {(pensionBruteAnnuelle * 0.1).toFixed(2)} €</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t-2 border-blue-300">
                            <span className="font-bold text-gray-800">Pension nette avant IR (taux plein) :</span>
                            <span className="text-xl font-bold text-green-700">{pensionNetteAnnuelleBase.toFixed(2)} €</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Analyse du scénario</h4>
                        
                        <div className="space-y-4">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                              Situation du scénario
                            </h5>
                            <p className="text-sm text-gray-700">
                              {totalTrimestres >= trimestresRequis ? (
                                <>Vous disposez de <strong>{totalTrimestres} trimestres</strong>, ce qui est suffisant pour bénéficier du <strong>taux plein</strong> (172 trimestres requis). Vous pouvez partir à la retraite dès 64 ans sans décote.</>
                              ) : (
                                <>Vous disposez de <strong>{totalTrimestres} trimestres sur {trimestresRequis} requis</strong>. Il vous manque <strong>{trimestresRequis - totalTrimestres} trimestres</strong> pour le taux plein. Un départ anticipé entraînera une décote sur votre pension.</>
                              )}
                            </p>
                          </div>

                          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                            <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                              Anomalies et incohérences
                            </h5>
                            <div className="text-sm text-gray-700">
                              {(() => {
                                const anomalies = [];
                                carriere.data.forEach(ligne => {
                                  const messages = checkLigneIncoherence(ligne);
                                  if (messages.length > 0) {
                                    anomalies.push(`Année ${ligne.annee}: ${messages.join(', ')}`);
                                  }
                                });
                                
                                return anomalies.length > 0 ? (
                                  <ul className="list-disc list-inside space-y-1">
                                    {anomalies.map((msg, idx) => (
                                      <li key={idx}>{msg}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>✓ Aucune anomalie détectée dans ce scénario de carrière.</p>
                                );
                              })()}
                            </div>
                          </div>

                          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <h5 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                              Rachat de trimestres
                            </h5>
                            <p className="text-sm text-gray-700">
                              {totalTrimestres < trimestresRequis ? (
                                <>Vous pouvez racheter jusqu'à <strong>12 trimestres</strong> pour compléter votre carrière. Le coût varie selon votre âge et revenus (estimé entre 3 000€ et 6 000€ par trimestre). Racheter <strong>{Math.min(trimestresRequis - totalTrimestres, 12)} trimestres</strong> vous permettrait d'atteindre le taux plein.</>
                              ) : (
                                <>Vous avez déjà le nombre de trimestres requis. Le rachat de trimestres supplémentaires peut néanmoins augmenter votre pension via la surcote (1,25% par trimestre au-delà de 64 ans).</>
                              )}
                            </p>
                          </div>

                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
                              Retraite progressive
                            </h5>
                            <p className="text-sm text-gray-700">
                              À partir de <strong>60 ans</strong>, vous pouvez bénéficier d'une retraite progressive en réduisant votre temps de travail (entre 40% et 80%) tout en percevant une fraction de votre pension. Cela permet une transition en douceur vers la retraite complète.
                            </p>
                          </div>

                          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                            <h5 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
                              Carrière longue
                            </h5>
                            <p className="text-sm text-gray-700">
                              Si vous avez commencé à travailler avant <strong>20 ans</strong> et justifiez d'une longue carrière, vous pourriez partir dès <strong>60 ans</strong> sans décote avec au moins 5 trimestres avant 20 ans et {trimestresRequis} trimestres cotisés. Vérifiez votre relevé de carrière pour cette option.
                            </p>
                          </div>

                          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <h5 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
                              Cumul emploi-retraite
                            </h5>
                            <p className="text-sm text-gray-700">
                              Une fois à la retraite au <strong>taux plein</strong>, vous pouvez reprendre une activité professionnelle sans limitation de revenus tout en cumulant votre pension. Si vous partez avec décote, le cumul est plafonné (environ 20 000€/an selon votre situation).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeSection === 'suivi' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-indigo-600" />
                </div>
                Suivi du dossier
              </h2>
              
              <div className="space-y-6">
                {/* Timeline de suivi */}
                <div className="relative border-l-4 border-indigo-200 pl-6 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-green-900">Dossier créé</h3>
                        <span className="text-xs text-green-600">15/10/2025</span>
                      </div>
                      <p className="text-sm text-gray-700">Le dossier de M. IBANEZ a été créé avec succès.</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-blue-900">Documents reçus</h3>
                        <span className="text-xs text-blue-600">22/10/2025</span>
                      </div>
                      <p className="text-sm text-gray-700">Réception du relevé de carrière et des bulletins de salaire.</p>
                      <ul className="mt-2 text-xs text-gray-600 space-y-1">
                        <li>• Relevé de carrière CNAV</li>
                        <li>• 3 derniers bulletins de salaire</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 bg-orange-500 rounded-full border-4 border-white"></div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-orange-900">Analyse en cours</h3>
                        <span className="text-xs text-orange-600">05/11/2025</span>
                      </div>
                      <p className="text-sm text-gray-700">Analyse des données de carrière et détection d'incohérences.</p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="flex-1 bg-orange-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <span className="text-xs font-semibold text-orange-700">65%</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-600">Simulation pension</h3>
                        <span className="text-xs text-gray-500">En attente</span>
                      </div>
                      <p className="text-sm text-gray-500">Calcul des projections de retraite.</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-8 w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-600">Rapport final</h3>
                        <span className="text-xs text-gray-500">En attente</span>
                      </div>
                      <p className="text-sm text-gray-500">Génération du rapport complet et recommandations.</p>
                    </div>
                  </div>
                </div>

                {/* Statistiques du dossier */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Temps écoulé</p>
                    <p className="text-2xl font-bold text-blue-600">29 jours</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                    <p className="text-sm font-semibold text-purple-800 mb-1">Documents analysés</p>
                    <p className="text-2xl font-bold text-purple-600">4/6</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                    <p className="text-sm font-semibold text-green-800 mb-1">Progression</p>
                    <p className="text-2xl font-bold text-green-600">65%</p>
                  </div>
                </div>

                {/* Actions rapides */}
                <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200 mt-6">
                  <h3 className="font-bold text-indigo-900 mb-4">Actions rapides</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg hover:bg-indigo-100 transition border border-indigo-300">
                      <Upload className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">Ajouter un document</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg hover:bg-indigo-100 transition border border-indigo-300">
                      <MessageCircle className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">Contacter le conseiller</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg hover:bg-indigo-100 transition border border-indigo-300">
                      <Download className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">Télécharger le rapport</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg hover:bg-indigo-100 transition border border-indigo-300">
                      <Bell className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-gray-700">Gérer les notifications</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'documents' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                Documents ({documents.length})
              </h2>
              <button
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <Upload className="w-5 h-5" />
                Importer un document
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Nom du fichier</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Catégorie</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Date d'upload</th>
                    <th className="text-center py-3 px-4 font-bold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-800">{doc.nom}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {doc.categorie}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">{doc.date}</td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteDocument(doc.id)}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showUploadModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Importer un document</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Nom du fichier
                      </label>
                      <input
                        type="text"
                        value={uploadFileName}
                        onChange={(e) => setUploadFileName(e.target.value)}
                        placeholder="Entrez le nom du fichier..."
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Catégorie
                      </label>
                      <select
                        value={uploadCategorie}
                        onChange={(e) => setUploadCategorie(e.target.value)}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        <option>Relevé de carrière</option>
                        <option>Preuve de revenu</option>
                        <option>Document familial</option>
                        <option>Notification de pension</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Fichier
                      </label>
                      <input
                        type="file"
                        onChange={handleFileSelect}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleUpload}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                    >
                      Importer
                    </button>
                    <button
                      onClick={() => {
                        setShowUploadModal(false);
                        setUploadFileName('');
                        setUploadCategorie('Relevé de carrière');
                        setSelectedFile(null);
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="bg-white border-t border-gray-200 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-600 transition">Sécurité RGPD</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-blue-600 transition">Mentions légales</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-blue-600 transition">FAQ</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-blue-600 transition">Contactez-nous</a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">VAULT 2025 - Tous droits réservés</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
