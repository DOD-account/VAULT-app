const { useState } = React;

// Icônes SVG en ligne
const User = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Briefcase = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TrendingUp = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ClipboardList = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const Edit2 = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const Check = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const X = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Plus = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const Upload = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const FileText = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ChevronDown = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Users = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CreditCard = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const MessageCircle = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const LogOut = ({ className, size = 24 }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);



export default function VaultApp() {
  const [activeSection, setActiveSection] = useState('profil');
  const [credits] = useState(3);
  const [dossierOuvert] = useState('M. IBANEZ');
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
  
  const [profil, setProfil] = useState({
    nom: 'Bellanger',
    prenom: 'Jean',
    civilite: 'M.',
    numeroSecu: '1 66 04 75 123 456 78'
  });

  const [enfants, setEnfants] = useState([
    { id: 1, prenom: 'Sophie', nom: 'Bellanger', dateNaissance: '15/03/2015' },
    { id: 2, prenom: 'Lucas', nom: 'Bellanger', dateNaissance: '22/08/2018' }
  ]);
  
  const [documents] = useState([
    { id: 1, nom: 'Relevé_carriere_2024.pdf', categorie: 'Relevé de carrière', date: '10/11/2025 14:32' },
    { id: 2, nom: 'Bulletin_salaire_octobre.pdf', categorie: 'Preuve de revenu', date: '08/11/2025 09:15' },
    { id: 3, nom: 'Livret_famille.pdf', categorie: 'Document familial', date: '05/11/2025 16:48' },
    { id: 4, nom: 'Notification_pension_retraite.pdf', categorie: 'Notification de pension', date: '01/11/2025 11:20' }
  ]);
  
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [editingEnfant, setEditingEnfant] = useState(null);

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

  const startEditEnfant = (enfantId, field, value) => {
    setEditingEnfant({ id: enfantId, field });
    setTempValue(value);
  };

  const saveEditEnfant = () => {
    setEnfants(enfants.map(e => 
      e.id === editingEnfant.id 
        ? { ...e, [editingEnfant.field]: tempValue }
        : e
    ));
    setEditingEnfant(null);
  };

  const getCategorieColor = (categorie) => {
    const colors = {
      'Relevé de carrière': 'bg-blue-100 text-blue-700',
      'Preuve de revenu': 'bg-green-100 text-green-700',
      'Document familial': 'bg-purple-100 text-purple-700',
      'Notification de pension': 'bg-orange-100 text-orange-700'
    };
    return colors[categorie] || 'bg-gray-100 text-gray-700';
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

  const openEditLigne = (carriereId, ligneIndex) => {
    const carriere = carrieres.find(c => c.id === carriereId);
    const ligne = carriere.data[ligneIndex];
    setEditingLigne({ carriereId, ligneIndex });
    setTempLigneData({ ...ligne });
  };

  const saveLigneEdit = () => {
    if (!editingLigne || !tempLigneData) return;
    
    const newCarrieres = carrieres.map(c => {
      if (c.id === editingLigne.carriereId) {
        const newData = [...c.data];
        newData[editingLigne.ligneIndex] = { ...tempLigneData };
        return { ...c, data: newData };
      }
      return c;
    });
    
    setCarrieres(newCarrieres);
    setEditingLigne(null);
    setTempLigneData(null);
  };

  const cancelLigneEdit = () => {
    setEditingLigne(null);
    setTempLigneData(null);
  };

  const renderEditableField = (label, field, value) => {
    const isEditing = editingField === field;
    
    return (
      <div className="mb-6" key={field}>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
              <button
                onClick={() => saveEdit(field)}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <Check size={20} />
              </button>
              <button
                onClick={cancelEdit}
                className="p-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg text-gray-800 font-medium border border-gray-200">
                {value}
              </div>
              <button
                onClick={() => startEdit(field, value)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Edit2 size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <header className="bg-white shadow-md border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">VAULT</h1>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveSection('profil')}
                className={'flex items-center gap-2 px-6 py-2.5 rounded-lg transition font-semibold ' + (activeSection === 'profil' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600 hover:text-gray-800')}
              >
                <User size={18} />
                <span>PROFIL</span>
              </button>
              <button
                onClick={() => setActiveSection('carriere')}
                className={'flex items-center gap-2 px-6 py-2.5 rounded-lg transition font-semibold ' + (activeSection === 'carriere' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600 hover:text-gray-800')}
              >
                <Briefcase size={18} />
                <span>CARRIÈRE</span>
              </button>
              <button
                onClick={() => setActiveSection('projections')}
                className={'flex items-center gap-2 px-6 py-2.5 rounded-lg transition font-semibold ' + (activeSection === 'projections' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-600 hover:text-gray-800')}
              >
                <TrendingUp size={18} />
                <span>PROJECTIONS</span>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowDossierMenu(!showDossierMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition"
              >
                <FileText size={18} className="text-blue-600" />
                <span className="font-semibold text-blue-800">{dossierOuvert}</span>
                <ChevronDown size={16} className="text-blue-600" />
              </button>
              
              {showDossierMenu && (
                <div className="absolute top-full mt-2 right-0 bg-white border-2 border-gray-200 rounded-lg shadow-xl w-80 z-50">
                  <button className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100">
                    <Plus size={18} className="text-green-600" />
                    <span className="font-medium text-gray-700">Nouveau dossier</span>
                  </button>
                  <div className="w-full px-4 py-3 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <MessageCircle size={18} className="text-blue-600" />
                      <span className="font-medium text-gray-700">Contacter un expert</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-300 rounded-md">
                      <CreditCard size={14} className="text-amber-600" />
                      <span className="text-xs font-bold text-amber-800">{credits} crédits</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-red-600">
                    <LogOut size={18} />
                    <span className="font-medium">Fermer et sortir</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        {activeSection === 'profil' && (
          <div className="flex gap-6">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <User className="text-blue-600" />
                Informations personnelles
              </h2>
              
              <div className="space-y-2">
                {renderEditableField('Civilité', 'civilite', profil.civilite)}
                {renderEditableField('Nom', 'nom', profil.nom)}
                {renderEditableField('Prénom', 'prenom', profil.prenom)}
                {renderEditableField('Numéro de sécurité sociale', 'numeroSecu', profil.numeroSecu)}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Users className="text-purple-600" size={22} />
                    <span>{enfants.length <= 1 ? 'Enfant' : 'Enfants'} ({enfants.length})</span>
                  </h3>
                  <button
                    onClick={() => {
                      const newEnfant = {
                        id: Date.now(),
                        prenom: '',
                        nom: profil.nom,
                        dateNaissance: ''
                      };
                      setEnfants([...enfants, newEnfant]);
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-sm font-medium"
                  >
                    <Plus size={16} />
                    Ajouter un enfant
                  </button>
                </div>
                {enfants.map((enfant, index) => (
                  <div key={enfant.id} className="mb-4 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-purple-900">Enfant {index + 1}</div>
                      <button
                        onClick={() => {
                          const newEnfants = enfants.filter(e => e.id !== enfant.id);
                          setEnfants(newEnfants);
                        }}
                        className="p-1 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 transition"
                        title="Supprimer cet enfant"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Prénom</label>
                        {editingEnfant?.id === enfant.id && editingEnfant.field === 'prenom' ? (
                          <div className="flex gap-1">
                            <input
                              value={tempValue}
                              onChange={(e) => setTempValue(e.target.value)}
                              className="w-full px-2 py-1 border-2 border-blue-500 rounded text-sm"
                              autoFocus
                            />
                            <button onClick={saveEditEnfant} className="p-1 bg-green-500 text-white rounded">
                              <Check size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <div className="flex-1 px-2 py-1 bg-white rounded border border-purple-200 text-sm">
                              {enfant.prenom}
                            </div>
                            <button onClick={() => startEditEnfant(enfant.id, 'prenom', enfant.prenom)} className="p-1 bg-blue-500 text-white rounded">
                              <Edit2 size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Nom</label>
                        {editingEnfant?.id === enfant.id && editingEnfant.field === 'nom' ? (
                          <div className="flex gap-1">
                            <input
                              value={tempValue}
                              onChange={(e) => setTempValue(e.target.value)}
                              className="w-full px-2 py-1 border-2 border-blue-500 rounded text-sm"
                              autoFocus
                            />
                            <button onClick={saveEditEnfant} className="p-1 bg-green-500 text-white rounded">
                              <Check size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <div className="flex-1 px-2 py-1 bg-white rounded border border-purple-200 text-sm">
                              {enfant.nom}
                            </div>
                            <button onClick={() => startEditEnfant(enfant.id, 'nom', enfant.nom)} className="p-1 bg-blue-500 text-white rounded">
                              <Edit2 size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 mb-1 block">Date naissance</label>
                        {editingEnfant?.id === enfant.id && editingEnfant.field === 'dateNaissance' ? (
                          <div className="flex gap-1">
                            <input
                              value={tempValue}
                              onChange={(e) => setTempValue(e.target.value)}
                              className="w-full px-2 py-1 border-2 border-blue-500 rounded text-sm"
                              autoFocus
                            />
                            <button onClick={saveEditEnfant} className="p-1 bg-green-500 text-white rounded">
                              <Check size={14} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <div className="flex-1 px-2 py-1 bg-white rounded border border-purple-200 text-sm">
                              {enfant.dateNaissance}
                            </div>
                            <button onClick={() => startEditEnfant(enfant.id, 'dateNaissance', enfant.dateNaissance)} className="p-1 bg-blue-500 text-white rounded">
                              <Edit2 size={12} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-96 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="text-green-600" />
                  Documents
                </h2>
                <button className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition whitespace-nowrap">
                  <Upload size={18} />
                  <span className="text-sm font-medium">Uploader</span>
                </button>
              </div>
              
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 text-sm mb-1 truncate">{doc.nom}</div>
                        <div className={'inline-block px-2 py-1 rounded-full text-xs font-semibold ' + getCategorieColor(doc.categorie)}>
                          {doc.categorie}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{doc.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'carriere' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            {editingLigne && tempLigneData && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl mx-4 max-h-screen overflow-y-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Éditer la ligne - Année {tempLigneData.annee}</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Année</label>
                      <input
                        type="number"
                        value={tempLigneData.annee}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, annee: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Employeur</label>
                      <input
                        type="text"
                        value={tempLigneData.employeur}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, employeur: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Activité</label>
                      <input
                        type="text"
                        value={tempLigneData.activite}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, activite: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Date début</label>
                      <input
                        type="text"
                        value={tempLigneData.debut}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, debut: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Date fin</label>
                      <input
                        type="text"
                        value={tempLigneData.fin}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, fin: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Revenu (€)</label>
                      <input
                        type="number"
                        value={tempLigneData.revenu}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, revenu: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Trimestres</label>
                      <input
                        type="number"
                        min="0"
                        max="4"
                        value={tempLigneData.trimestres}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, trimestres: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Régime de base</label>
                      <input
                        type="text"
                        value={tempLigneData.regimeBase}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, regimeBase: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Points de base</label>
                      <input
                        type="number"
                        value={tempLigneData.pointsBase}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, pointsBase: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Régime complémentaire</label>
                      <input
                        type="text"
                        value={tempLigneData.regimeComplementaire}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, regimeComplementaire: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Points complémentaires</label>
                      <input
                        type="number"
                        value={tempLigneData.pointsComplementaires}
                        onChange={(e) => setTempLigneData({ ...tempLigneData, pointsComplementaires: parseInt(e.target.value) || 0 })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  {checkLigneIncoherence(tempLigneData).length > 0 && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-red-600 font-bold">⚠️ Attention :</span>
                        <div className="text-red-700">
                          {checkLigneIncoherence(tempLigneData).map((msg, i) => (
                            <div key={i}>• {msg}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-3 justify-end mt-6">
                    <button
                      onClick={cancelLigneEdit}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={saveLigneEdit}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {carriereToDelete && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md mx-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Confirmer la suppression</h3>
                  <p className="text-gray-600 mb-6">
                    Êtes-vous sûr de vouloir supprimer la carrière <strong>{carriereToDelete.nom}</strong> ?
                    <br /><br />
                    <span className="text-red-600 font-semibold">⚠️ Toutes les données associées seront définitivement perdues.</span>
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setCarriereToDelete(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={() => {
                        const newCarrieres = carrieres.filter(c => c.id !== carriereToDelete.id);
                        setCarrieres(newCarrieres);
                        if (carriereActive === carriereToDelete.id && newCarrieres.length > 0) {
                          setCarriereActive(newCarrieres[0].id);
                        }
                        setCarriereToDelete(null);
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {carrieres.map((carriere) => (
                  <div key={carriere.id} className="relative inline-block">
                    <button
                      onClick={() => setCarriereActive(carriere.id)}
                      className={'px-4 py-2 rounded-lg font-medium transition ' + (carriereActive === carriere.id ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
                    >
                      {carriere.nom}
                    </button>
                    {carrieres.length > 1 && (
                      <button
                        onClick={() => setCarriereToDelete(carriere)}
                        className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-md"
                        title="Supprimer cette carrière"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                ))}
                {showCarriereForm ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={nouveauNomCarriere}
                      onChange={(e) => setNouveauNomCarriere(e.target.value)}
                      placeholder="Nom de la carrière"
                      className="px-3 py-2 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        if (nouveauNomCarriere.trim()) {
                          const newCarriere = {
                            id: Date.now(),
                            nom: nouveauNomCarriere,
                            data: []
                          };
                          setCarrieres([...carrieres, newCarriere]);
                          setCarriereActive(newCarriere.id);
                          setNouveauNomCarriere('');
                          setShowCarriereForm(false);
                        }
                      }}
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      <Check size={20} />
                    </button>
                    <button
                      onClick={() => {
                        setShowCarriereForm(false);
                        setNouveauNomCarriere('');
                      }}
                      className="p-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowCarriereForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                  >
                    <Plus size={18} />
                    Ajouter une carrière
                  </button>
                )}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Informations :</strong> M. IBANEZ est né en 1966. Sa carrière débute en 1988 et ses droits sont enregistrés jusqu'en 2024.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {carrieres.find(c => c.id === carriereActive)?.nom}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Année</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Début</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Fin</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Employeur</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Activité</th>
                      <th className="px-3 py-3 text-right text-sm font-semibold border-r border-blue-500">Revenu (€)</th>
                      <th className="px-3 py-3 text-center text-sm font-semibold border-r border-blue-500">Trimestres</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Régime de base</th>
                      <th className="px-3 py-3 text-right text-sm font-semibold border-r border-blue-500">Points de base</th>
                      <th className="px-3 py-3 text-left text-sm font-semibold border-r border-blue-500">Régime complémentaire</th>
                      <th className="px-3 py-3 text-right text-sm font-semibold">Points complémentaires</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(carrieres.find(c => c.id === carriereActive)?.data || []).map((ligne, index) => {
                      const incoherences = checkLigneIncoherence(ligne);
                      const hasError = incoherences.length > 0;
                      
                      return (
                        <React.Fragment key={index}>
                          <tr 
                            className={(hasError ? 'bg-red-50 border-l-4 border-red-400' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')) + ' hover:bg-blue-50 cursor-pointer transition'}
                            onClick={() => openEditLigne(carriereActive, index)}
                          >
                            <td className="px-3 py-2 text-sm border-r border-gray-200 font-medium">
                              <div className="flex items-center gap-2">
                                {hasError && (
                                  <span className="text-red-600 font-bold">⚠️</span>
                                )}
                                <span>{ligne.annee}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.debut}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.fin}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.employeur}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.activite}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200 text-right font-medium">{ligne.revenu.toLocaleString('fr-FR')} €</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200 text-center font-semibold text-blue-600">{ligne.trimestres}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.regimeBase}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200 text-right font-medium">{ligne.pointsBase}</td>
                            <td className="px-3 py-2 text-sm border-r border-gray-200">{ligne.regimeComplementaire}</td>
                            <td className="px-3 py-2 text-sm text-right font-medium">{ligne.pointsComplementaires}</td>
                          </tr>
                          {hasError && (
                            <tr className="bg-red-50">
                              <td colSpan="12" className="px-3 py-2">
                                <div className="flex items-start gap-2 text-sm">
                                  <span className="text-red-600 font-bold">⚠️ Attention :</span>
                                  <div className="text-red-700">
                                    {incoherences.map((msg, i) => (
                                      <div key={i}>• {msg}</div>
                                    ))}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projections' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projections</h2>
            <p className="text-gray-500">Contenu à venir...</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <a href="securite-rgpd.html" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Sécurité & RGPD
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a href="mentions-legales.html" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Mentions légales
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a href="faq.html" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              FAQ
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a href="contact.html" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Contactez-nous
            </a>
          </div>
          <p className="text-center text-gray-500 text-sm">
            VAULT 2025 - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}