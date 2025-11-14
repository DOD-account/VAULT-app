import React, { useState } from 'react';
import { User, Briefcase, TrendingUp, Edit2, Check, X, LogOut, Plus, MessageCircle, CreditCard, Upload, FileText, Users, ChevronDown, ChevronUp, Eye, Download, Bell, Settings, LayoutDashboard, ClipboardList, AlertCircle } from 'lucide-react';

export default function VaultApp() {
  const [activeSection, setActiveSection] = useState('profil');
  const [credits, setCredits] = useState(3);
  const [dossierOuvert, setDossierOuvert] = useState('Jean Dupont');
  const [showDossierMenu, setShowDossierMenu] = useState(false);
  
  const [carrieres, setCarrieres] = useState([
    { 
      id: 1, 
      nom: 'Carrière actuelle',
      data: Array.from({length: 37}, (_, i) => {
        const annee = 1988 + i;
        const salaire = 18500 + (i * 1000);
        let trimestres = 4;
        let salaireDefplafonne = salaire;
        let salairePlafonne = annee >= 2013 ? Math.min(salaire, 46368) : salaire;
        
        if (i === 4) trimestres = 2;
        if (i === 11) {
          salaireDefplafonne = 28000;
          salairePlafonne = 30000;
        }
        if (i === 19) trimestres = 0;
        if (i === 27) trimestres = 3;
        
        return {
          annee,
          debut: `01/01/${annee}`,
          fin: `31/12/${annee}`,
          activite: 'Salarié',
          salaireDefplafonne,
          salairePlafonne,
          trimestres,
          regimeBase: 'CNAV',
          pointsBase: 120 + (i * 3),
          regimeComplementaire: 'AGIRC-ARRCO',
          pointsComplementaires: 450 + (i * 40)
        };
      })
    },
    { 
      id: 2, 
      nom: 'Statut PDT de SAS',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', activite: 'PDT SAS', salaireDefplafonne: 45000, salairePlafonne: 41136, trimestres: 4, regimeBase: 'CNAV', pointsBase: 210, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1650 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', activite: 'PDT SAS', salaireDefplafonne: 47000, salairePlafonne: 41136, trimestres: 4, regimeBase: 'CNAV', pointsBase: 215, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1720 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', activite: 'PDT SAS', salaireDefplafonne: 49000, salairePlafonne: 41136, trimestres: 2, regimeBase: 'CNAV', pointsBase: 220, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1780 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', activite: 'PDT SAS', salaireDefplafonne: 51000, salairePlafonne: 43992, trimestres: 4, regimeBase: 'CNAV', pointsBase: 225, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1850 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', activite: 'PDT SAS', salaireDefplafonne: 53000, salairePlafonne: 46368, trimestres: 4, regimeBase: 'CNAV', pointsBase: 230, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1920 }
      ]
    },
    { 
      id: 3, 
      nom: 'Chômage',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', activite: 'Chômage', salaireDefplafonne: 8000, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', activite: 'Chômage', salaireDefplafonne: 15000, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 3, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 5000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 }
      ]
    }
  ]);
  
  const [carriereActive, setCarriereActive] = useState(1);
  const [showCarriereForm, setShowCarriereForm] = useState(false);
  const [nouveauNomCarriere, setNouveauNomCarriere] = useState('');
  const [carriereToDelete, setCarriereToDelete] = useState(null);
  const [showAddYearForm, setShowAddYearForm] = useState(false);
  const [newYear, setNewYear] = useState('');
  const [editingLigne, setEditingLigne] = useState(null);
  const [tempLigneData, setTempLigneData] = useState(null);
  
  const [profil, setProfil] = useState({
    nom: 'Dupont',
    prenom: 'Jean',
    civilite: 'M.',
    numeroSecu: '1 66 04 75 123 456 78',
    nombreEnfants: 2
  });
  
  const [enfants, setEnfants] = useState([
    { id: 1, prenom: 'Sophie', nom: 'Dupont', dateNaissance: '15/03/2015' },
    { id: 2, prenom: 'Lucas', nom: 'Dupont', dateNaissance: '22/08/2018' }
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
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [customDates, setCustomDates] = useState([]);
  
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

  const ajouterAnnee = () => {
    const year = parseInt(newYear);
    if (year && year >= 1950 && year <= 2100) {
      setCarrieres(carrieres.map(c => {
        if (c.id === carriereActive) {
          // Vérifier si l'année existe déjà
          if (c.data.some(ligne => ligne.annee === year)) {
            alert(`L'année ${year} existe déjà dans ce scénario.`);
            return c;
          }

          const newLigne = {
            annee: year,
            debut: '01/01',
            fin: '31/12',
            activite: 'Salarié',
            salaireDefplafonne: 0,
            salairePlafonne: 0,
            trimestres: 4,
            regimeBase: 'CNAV',
            pointsBase: 0,
            regimeComplementaire: 'AGIRC-ARRCO',
            pointsComplementaires: 0
          };

          const sortedData = [...c.data, newLigne].sort((a, b) => a.annee - b.annee);

          return {
            ...c,
            data: sortedData
          };
        }
        return c;
      }));

      setNewYear('');
      setShowAddYearForm(false);
    } else {
      alert('Veuillez entrer une année valide entre 1950 et 2100.');
    }
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
    
    if (ligne.trimestres === 0 && ligne.activite === 'Salarié') {
      messages.push('0 trimestre pour une activité salariée');
    }
    
    if (ligne.salaireDefplafonne < ligne.salairePlafonne) {
      messages.push('Salaire déplafonné < salaire plafonné');
    }
    
    if (ligne.activite === 'Chômage' && ligne.salaireDefplafonne > 0 && ligne.salairePlafonne === 0) {
      messages.push('Incohérence chômage: salaire déplafonné > 0 mais salaire plafonné = 0');
    }
    
    if (ligne.activite === 'Chômage' && ligne.salairePlafonne > 0 && ligne.salaireDefplafonne === 0) {
      messages.push('Incohérence chômage: salaire plafonné > 0 mais salaire déplafonné = 0');
    }
    
    return messages;
  };

  const toggleExpandCarriere = (id) => {
    setExpandedCarrieres(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatNumber = (num) => {
    return num.toLocaleString('fr-FR');
  };

  const addCustomDate = () => {
    if (selectedMonth && selectedYear) {
      const newDate = {
        id: Date.now(),
        month: selectedMonth,
        year: selectedYear,
        label: `${selectedMonth}/${selectedYear}`
      };
      setCustomDates([...customDates, newDate]);
      setShowDateSelector(false);
      setSelectedMonth('01');
      setSelectedYear('2025');
    }
  };

  const removeCustomDate = (id) => {
    setCustomDates(customDates.filter(d => d.id !== id));
  };

  // Fonction pour télécharger le tableau des simulations en Excel (CSV)
  const downloadExcel = (carriere, scenarios) => {
    const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
    const totalPointsBase = carriere.data.reduce((sum, ligne) => sum + ligne.pointsBase, 0);
    const totalPointsComplementaires = carriere.data.reduce((sum, ligne) => sum + ligne.pointsComplementaires, 0);

    // En-têtes CSV
    let csv = '\uFEFF'; // BOM pour UTF-8
    csv += `Simulations selon l'âge de départ - ${carriere.nom}\n\n`;
    csv += `Trimestres validés:,${totalTrimestres}\n`;
    csv += `Points régime de base:,${Math.round(totalPointsBase)}\n`;
    csv += `Points complémentaires:,${Math.round(totalPointsComplementaires)}\n\n`;

    csv += 'Âge de départ,Pension mensuelle (€),Pension annuelle (€),Coefficient (%),Gain cumulé jusqu\'à 85 ans (€),Statut\n';

    scenarios.forEach(scenario => {
      const isBest = scenario.gainCumule === Math.max(...scenarios.map(s => s.gainCumule));
      csv += `${scenario.age} ans,`;
      csv += `${Math.round(scenario.pensionMensuelle)},`;
      csv += `${Math.round(scenario.pensionAnnuelle)},`;
      csv += `${(scenario.coefficient * 100).toFixed(1)},`;
      csv += `${Math.round(scenario.gainCumule)},`;
      csv += `${isBest ? 'OPTIMAL' : scenario.type}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `simulation_retraite_${carriere.nom.replace(/\s/g, '_')}.csv`;
    link.click();
  };

  // Fonction pour télécharger les recommandations en Word (HTML)
  const downloadWord = (carriere) => {
    const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
    const trimestresRequis = 172;

    const anomalies = [];
    carriere.data.forEach(ligne => {
      const messages = checkLigneIncoherence(ligne);
      if (messages.length > 0) {
        anomalies.push(`Année ${ligne.annee}: ${messages.join(', ')}`);
      }
    });

    let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Recommandations - ${carriere.nom}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
    h1 { color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px; }
    h2 { color: #2563eb; margin-top: 30px; }
    .recommendation { margin: 20px 0; padding: 15px; border-left: 4px solid #3b82f6; background-color: #eff6ff; }
    .recommendation h3 { margin-top: 0; color: #1e40af; }
    strong { color: #1e40af; }
  </style>
</head>
<body>
  <h1>Analyse du scénario - ${carriere.nom}</h1>

  <div class="recommendation">
    <h3>1. Situation du scénario</h3>
    <p>${totalTrimestres >= trimestresRequis ?
      `Vous disposez de <strong>${formatNumber(totalTrimestres)} trimestres</strong>, ce qui est suffisant pour bénéficier du <strong>taux plein</strong> (${formatNumber(trimestresRequis)} trimestres requis). Vous pouvez partir à la retraite dès 64 ans sans décote.` :
      `Vous disposez de <strong>${formatNumber(totalTrimestres)} trimestres sur ${formatNumber(trimestresRequis)} requis</strong>. Il vous manque <strong>${formatNumber(trimestresRequis - totalTrimestres)} trimestres</strong> pour le taux plein. Un départ anticipé entraînera une décote sur votre pension.`
    }</p>
  </div>

  <div class="recommendation">
    <h3>2. Anomalies et incohérences</h3>
    ${anomalies.length > 0 ?
      '<ul>' + anomalies.map(msg => `<li>${msg}</li>`).join('') + '</ul>' :
      '<p>✓ Aucune anomalie détectée dans ce scénario de carrière.</p>'
    }
  </div>

  <div class="recommendation">
    <h3>3. Rachat de trimestres</h3>
    <p>${totalTrimestres < trimestresRequis ?
      `Vous pouvez racheter jusqu'à <strong>12 trimestres</strong> pour compléter votre carrière. Le coût varie selon votre âge et revenus (estimé entre ${formatNumber(3000)}€ et ${formatNumber(6000)}€ par trimestre). Racheter <strong>${Math.min(trimestresRequis - totalTrimestres, 12)} trimestres</strong> vous permettrait d'atteindre le taux plein.` :
      `Vous avez déjà le nombre de trimestres requis. Le rachat de trimestres supplémentaires peut néanmoins augmenter votre pension via la surcote (1,25% par trimestre au-delà de 64 ans).`
    }</p>
  </div>

  <div class="recommendation">
    <h3>4. Retraite progressive</h3>
    <p>À partir de <strong>60 ans</strong>, vous pouvez bénéficier d'une retraite progressive en réduisant votre temps de travail (entre 40% et 80%) tout en percevant une fraction de votre pension. Cela permet une transition en douceur vers la retraite complète.</p>
  </div>

  <div class="recommendation">
    <h3>5. Carrière longue</h3>
    <p>Si vous avez commencé à travailler avant <strong>20 ans</strong> et justifiez d'une longue carrière, vous pourriez partir dès <strong>60 ans</strong> sans décote avec au moins 5 trimestres avant 20 ans et ${formatNumber(trimestresRequis)} trimestres cotisés. Vérifiez votre relevé de carrière pour cette option.</p>
  </div>

  <div class="recommendation">
    <h3>6. Cumul emploi-retraite</h3>
    <p>Une fois à la retraite au <strong>taux plein</strong>, vous pouvez reprendre une activité professionnelle sans limitation de revenus tout en cumulant votre pension. Si vous partez avec décote, le cumul est plafonné (environ ${formatNumber(20000)}€/an selon votre situation).</p>
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `recommandations_${carriere.nom.replace(/\s/g, '_')}.doc`;
    link.click();
  };

  // Fonction pour télécharger le rapport complet en PDF (HTML à imprimer)
  const downloadPDF = (carriere, scenarios) => {
    const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
    const totalPointsBase = carriere.data.reduce((sum, ligne) => sum + ligne.pointsBase, 0);
    const totalPointsComplementaires = carriere.data.reduce((sum, ligne) => sum + ligne.pointsComplementaires, 0);
    const trimestresRequis = 172;

    const valeurPointBase = 0.6734;
    const valeurPointComplementaire = 1.4159;
    const pensionBase = totalPointsBase * valeurPointBase * 12;
    const pensionComplementaire = totalPointsComplementaires * valeurPointComplementaire * 12;
    const pensionBruteAnnuelle = pensionBase + pensionComplementaire;
    const pensionNetteAnnuelleBase = pensionBruteAnnuelle * 0.9;

    const anomalies = [];
    carriere.data.forEach(ligne => {
      const messages = checkLigneIncoherence(ligne);
      if (messages.length > 0) {
        anomalies.push(`Année ${ligne.annee}: ${messages.join(', ')}`);
      }
    });

    const bestScenario = scenarios.reduce((best, current) =>
      current.gainCumule > best.gainCumule ? current : best
    , scenarios[0]);

    let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Rapport de projection retraite - ${carriere.nom}</title>
  <style>
    @page { margin: 2cm; }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.5;
      color: #333;
    }
    h1 {
      color: #1e40af;
      border-bottom: 3px solid #1e40af;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    h2 {
      color: #2563eb;
      margin-top: 30px;
      border-left: 4px solid #3b82f6;
      padding-left: 10px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th {
      background-color: #1e40af;
      color: white;
      padding: 10px;
      text-align: left;
      font-weight: bold;
    }
    td {
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    tr:nth-child(even) { background-color: #f9fafb; }
    .highlight {
      background-color: #fef3c7 !important;
      font-weight: bold;
    }
    .recommendation {
      margin: 15px 0;
      padding: 15px;
      border-left: 4px solid #3b82f6;
      background-color: #eff6ff;
      page-break-inside: avoid;
    }
    .recommendation h3 {
      margin-top: 0;
      color: #1e40af;
      font-size: 14px;
    }
    .stats {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    .stat-box {
      flex: 1;
      margin: 0 10px;
      padding: 15px;
      border: 2px solid #3b82f6;
      border-radius: 8px;
      text-align: center;
    }
    .stat-value {
      font-size: 24px;
      font-weight: bold;
      color: #1e40af;
    }
    .stat-label {
      font-size: 12px;
      color: #6b7280;
    }
    strong { color: #1e40af; }
    @media print {
      body { margin: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <h1>Rapport de projection retraite</h1>
  <p><strong>Scénario :</strong> ${carriere.nom}</p>
  <p><strong>Date d'édition :</strong> ${new Date().toLocaleDateString('fr-FR')}</p>

  <h2>1. Simulations selon l'âge de départ</h2>
  <table>
    <thead>
      <tr>
        <th>Âge de départ</th>
        <th style="text-align: right;">Pension mensuelle</th>
        <th style="text-align: right;">Pension annuelle</th>
        <th style="text-align: right;">Coefficient</th>
        <th style="text-align: right;">Gain cumulé (85 ans)</th>
      </tr>
    </thead>
    <tbody>
      ${scenarios.map(scenario => `
        <tr class="${scenario.gainCumule === bestScenario.gainCumule ? 'highlight' : ''}">
          <td>${scenario.age} ans ${scenario.gainCumule === bestScenario.gainCumule ? '⭐ OPTIMAL' : ''}</td>
          <td style="text-align: right;">${formatNumber(Math.round(scenario.pensionMensuelle))} €</td>
          <td style="text-align: right;">${formatNumber(Math.round(scenario.pensionAnnuelle))} €</td>
          <td style="text-align: right;">${(scenario.coefficient * 100).toFixed(1)} %</td>
          <td style="text-align: right;">${formatNumber(Math.round(scenario.gainCumule))} €</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <h2>2. Analyse du scénario</h2>

  <div class="recommendation">
    <h3>Situation du scénario</h3>
    <p>${totalTrimestres >= trimestresRequis ?
      `Vous disposez de <strong>${formatNumber(totalTrimestres)} trimestres</strong>, ce qui est suffisant pour bénéficier du <strong>taux plein</strong> (${formatNumber(trimestresRequis)} trimestres requis). Vous pouvez partir à la retraite dès 64 ans sans décote.` :
      `Vous disposez de <strong>${formatNumber(totalTrimestres)} trimestres sur ${formatNumber(trimestresRequis)} requis</strong>. Il vous manque <strong>${formatNumber(trimestresRequis - totalTrimestres)} trimestres</strong> pour le taux plein. Un départ anticipé entraînera une décote sur votre pension.`
    }</p>
  </div>

  <div class="recommendation">
    <h3>Anomalies et incohérences</h3>
    ${anomalies.length > 0 ?
      '<ul>' + anomalies.map(msg => `<li>${msg}</li>`).join('') + '</ul>' :
      '<p>✓ Aucune anomalie détectée dans ce scénario de carrière.</p>'
    }
  </div>

  <div class="recommendation">
    <h3>Rachat de trimestres</h3>
    <p>${totalTrimestres < trimestresRequis ?
      `Vous pouvez racheter jusqu'à <strong>12 trimestres</strong> pour compléter votre carrière. Le coût varie selon votre âge et revenus (estimé entre ${formatNumber(3000)}€ et ${formatNumber(6000)}€ par trimestre). Racheter <strong>${Math.min(trimestresRequis - totalTrimestres, 12)} trimestres</strong> vous permettrait d'atteindre le taux plein.` :
      `Vous avez déjà le nombre de trimestres requis. Le rachat de trimestres supplémentaires peut néanmoins augmenter votre pension via la surcote (1,25% par trimestre au-delà de 64 ans).`
    }</p>
  </div>

  <div class="recommendation">
    <h3>Retraite progressive</h3>
    <p>À partir de <strong>60 ans</strong>, vous pouvez bénéficier d'une retraite progressive en réduisant votre temps de travail (entre 40% et 80%) tout en percevant une fraction de votre pension. Cela permet une transition en douceur vers la retraite complète.</p>
  </div>

  <div class="recommendation">
    <h3>Carrière longue</h3>
    <p>Si vous avez commencé à travailler avant <strong>20 ans</strong> et justifiez d'une longue carrière, vous pourriez partir dès <strong>60 ans</strong> sans décote avec au moins 5 trimestres avant 20 ans et ${formatNumber(trimestresRequis)} trimestres cotisés. Vérifiez votre relevé de carrière pour cette option.</p>
  </div>

  <div class="recommendation">
    <h3>Cumul emploi-retraite</h3>
    <p>Une fois à la retraite au <strong>taux plein</strong>, vous pouvez reprendre une activité professionnelle sans limitation de revenus tout en cumulant votre pension. Si vous partez avec décote, le cumul est plafonné (environ ${formatNumber(20000)}€/an selon votre situation).</p>
  </div>

  <h2>3. Analyse de la pension</h2>

  <div class="stats">
    <div class="stat-box">
      <div class="stat-value">${formatNumber(totalTrimestres)}</div>
      <div class="stat-label">Trimestres validés<br>(sur ${formatNumber(trimestresRequis)} requis)</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">${formatNumber(Math.round(totalPointsBase))}</div>
      <div class="stat-label">Points régime de base<br>CNAV</div>
    </div>
    <div class="stat-box">
      <div class="stat-value">${formatNumber(Math.round(totalPointsComplementaires))}</div>
      <div class="stat-label">Points complémentaires<br>AGIRC-ARRCO</div>
    </div>
  </div>

  <h3>Calcul détaillé de la pension</h3>
  <table>
    <tbody>
      <tr>
        <td>Pension régime de base (mensuelle)</td>
        <td style="text-align: right;"><strong>${formatNumber(Math.round(pensionBase / 12))} €</strong></td>
      </tr>
      <tr>
        <td style="padding-left: 30px; font-size: 12px; color: #6b7280;">
          ${formatNumber(Math.round(totalPointsBase))} points × ${valeurPointBase} € = ${formatNumber(Math.round(totalPointsBase * valeurPointBase))} €/mois
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Pension complémentaire (mensuelle)</td>
        <td style="text-align: right;"><strong>${formatNumber(Math.round(pensionComplementaire / 12))} €</strong></td>
      </tr>
      <tr>
        <td style="padding-left: 30px; font-size: 12px; color: #6b7280;">
          ${formatNumber(Math.round(totalPointsComplementaires))} points × ${valeurPointComplementaire} € = ${formatNumber(Math.round(totalPointsComplementaires * valeurPointComplementaire))} €/mois
        </td>
        <td></td>
      </tr>
      <tr style="background-color: #dbeafe;">
        <td><strong>Pension brute annuelle (taux plein)</strong></td>
        <td style="text-align: right;"><strong style="font-size: 18px;">${formatNumber(Math.round(pensionBruteAnnuelle))} €</strong></td>
      </tr>
      <tr>
        <td>Prélèvements sociaux (≈10%)</td>
        <td style="text-align: right; color: #dc2626;"><strong>- ${formatNumber(Math.round(pensionBruteAnnuelle * 0.1))} €</strong></td>
      </tr>
      <tr style="background-color: #dcfce7;">
        <td><strong>Pension nette avant IR (taux plein)</strong></td>
        <td style="text-align: right;"><strong style="font-size: 18px; color: #16a34a;">${formatNumber(Math.round(pensionNetteAnnuelleBase))} €</strong></td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 40px; text-align: center; color: #6b7280; font-size: 12px;">
    Document généré par VAULT - Plateforme Expert Retraite<br>
    ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
  </p>

  <script>
    window.onload = function() {
      window.print();
    };
  </script>
</body>
</html>`;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(html);
    newWindow.document.close();
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
                        <span className="font-medium">Jean Dupont</span>
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
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowAddYearForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <Plus className="w-5 h-5" />
                    Ajouter une année
                  </button>
                  <button
                    onClick={() => setShowCarriereForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                  >
                    <Plus className="w-5 h-5" />
                    Nouveau scénario
                  </button>
                </div>
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

              {showAddYearForm && (
                <div className="mb-6 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                  <h3 className="font-bold text-gray-800 mb-3">Ajouter une nouvelle année</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={newYear}
                      onChange={(e) => setNewYear(e.target.value)}
                      placeholder="Année (ex: 2025)..."
                      min="1950"
                      max="2100"
                      className="flex-1 px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button
                      onClick={ajouterAnnee}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Ajouter
                    </button>
                    <button
                      onClick={() => {
                        setShowAddYearForm(false);
                        setNewYear('');
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                      Annuler
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Cette année sera ajoutée au scénario actif avec des valeurs par défaut que vous pourrez ensuite modifier.
                  </p>
                </div>
              )}

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

                // Récupération de toutes les erreurs
                const toutesLesErreurs = [];
                carriere.data.forEach(ligne => {
                  const messages = checkLigneIncoherence(ligne);
                  if (messages.length > 0) {
                    toutesLesErreurs.push({
                      annee: ligne.annee,
                      messages: messages
                    });
                  }
                });

                return (
                  <div>
                    {/* Encadré récapitulatif des erreurs */}
                    {toutesLesErreurs.length > 0 && (
                      <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <h3 className="font-bold text-red-900">
                            {toutesLesErreurs.length} {toutesLesErreurs.length > 1 ? 'anomalies détectées' : 'anomalie détectée'} dans ce scénario
                          </h3>
                        </div>
                        <div className="space-y-2">
                          {toutesLesErreurs.map((erreur, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                              <span className="font-bold text-red-700 min-w-[60px]">Année {erreur.annee} :</span>
                              <ul className="list-disc list-inside text-sm text-red-800">
                                {erreur.messages.map((msg, msgIdx) => (
                                  <li key={msgIdx}>{msg}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <th className="py-3 px-2 text-left font-bold w-12"></th>
                            <th className="py-3 px-2 text-left font-bold">Année</th>
                          <th className="py-3 px-2 text-left font-bold">Début</th>
                          <th className="py-3 px-2 text-left font-bold">Fin</th>
                          <th className="py-3 px-2 text-left font-bold">Activité</th>
                          <th className="py-3 px-2 text-right font-bold">Salaire dépl. (€)</th>
                          <th className="py-3 px-2 text-right font-bold">Salaire plaf. (€)</th>
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

                          return (
                            <tr
                              key={index}
                              className={`border-b border-gray-200 ${
                                hasError ? 'bg-red-100 border-l-4 border-l-red-600' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              } hover:bg-blue-50 transition`}
                            >
                              {editingLigne === ligne.annee ? (
                                <>
                                  <td className="py-2 px-2 text-center">
                                    {hasError && <AlertCircle className="w-4 h-4 text-red-600 inline" />}
                                  </td>
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
                                      value={tempLigneData.activite}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, activite: e.target.value })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.salaireDefplafonne}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, salaireDefplafonne: parseFloat(e.target.value) })}
                                      className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                    />
                                  </td>
                                  <td className="py-2 px-2">
                                    <input
                                      type="number"
                                      value={tempLigneData.salairePlafonne}
                                      onChange={(e) => setTempLigneData({ ...tempLigneData, salairePlafonne: parseFloat(e.target.value) })}
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
                                  <td className="py-2 px-2 text-center">
                                    {hasError && <AlertCircle className="w-4 h-4 text-red-600 inline" />}
                                  </td>
                                  <td className={`py-2 px-2 font-bold ${hasError ? 'text-red-700' : 'text-gray-700'}`}>{ligne.annee}</td>
                                  <td className="py-2 px-2 text-gray-600">{ligne.debut}</td>
                                  <td className="py-2 px-2 text-gray-600">{ligne.fin}</td>
                                  <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                      {ligne.activite}
                                    </span>
                                  </td>
                                  <td className="py-2 px-2 text-right font-medium text-gray-800">
                                    {ligne.salaireDefplafonne.toLocaleString()}
                                  </td>
                                  <td className="py-2 px-2 text-right font-medium text-gray-800">
                                    {ligne.salairePlafonne.toLocaleString()}
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
                                      <button
                                        onClick={() => startEditLigne(ligne)}
                                        className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                      >
                                        <Edit2 className="w-3 h-3" />
                                      </button>
                                    </div>
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                );
              })()}
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

              // Calcul des simulations selon l'âge de départ
              const calculateRetirementScenario = (age, months = 0) => {
                const ageAtFullRate = 64;
                const trimestresManquants = Math.max(0, trimestresRequis - totalTrimestres);

                let coefficient = 1;
                let type = 'Taux plein';

                if (age < ageAtFullRate && trimestresManquants > 0) {
                  // Décote
                  const trimestresDecote = Math.min(20, trimestresManquants);
                  coefficient = 1 - (trimestresDecote * 0.0125);
                  type = 'Décote';
                } else if (age > ageAtFullRate || (age === ageAtFullRate && totalTrimestres >= trimestresRequis)) {
                  // Surcote
                  const anneesSupp = age - ageAtFullRate;
                  const trimestresSurcote = anneesSupp * 4;
                  coefficient = 1 + (trimestresSurcote * 0.0125);
                  type = 'Surcote';
                }

                const pension = pensionNetteAnnuelleBase * coefficient;
                const pensionMensuelle = pension / 12;
                const esperanceVie = 85;
                const anneesRetraite = esperanceVie - age;
                const gainCumule = pension * anneesRetraite;

                return {
                  age,
                  months,
                  type,
                  coefficient,
                  pensionMensuelle,
                  pensionAnnuelle: pension,
                  gainCumule
                };
              };

              const scenarios = [
                calculateRetirementScenario(60, 0),
                calculateRetirementScenario(62, 0),
                calculateRetirementScenario(64, 0),
                calculateRetirementScenario(67, 0),
                ...customDates.map(date => {
                  const year = parseInt(date.year);
                  const month = parseInt(date.month);
                  const currentYear = 2024;
                  const currentMonth = 11; // Mois actuel approximatif
                  const currentAge = 58; // Âge actuel approximatif basé sur les données

                  const yearsElapsed = year - currentYear;
                  const monthsElapsed = month - currentMonth;
                  const totalMonths = (yearsElapsed * 12) + monthsElapsed;

                  const ageYears = currentAge + Math.floor(totalMonths / 12);
                  const ageMonths = totalMonths % 12;

                  return { ...calculateRetirementScenario(ageYears, ageMonths), customId: date.id, label: date.label };
                })
              ];

              const bestScenario = scenarios.reduce((best, current) =>
                current.gainCumule > best.gainCumule ? current : best
              , scenarios[0]);

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
                        <p className="text-sm text-gray-600">{formatNumber(totalTrimestres)} trimestres validés</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{formatNumber(Math.round(pensionNetteAnnuelleBase))} €</p>
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

                      {/* 1. SIMULATIONS SELON L'ÂGE DE DÉPART */}
                      <div className="p-4 bg-white border-2 border-indigo-300 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-lg font-bold text-gray-800">Simulations selon l'âge de départ</h4>
                          <button
                            onClick={() => setShowDateSelector(!showDateSelector)}
                            className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Ajouter une date
                          </button>
                        </div>

                        {showDateSelector && (
                          <div className="mb-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                            <h5 className="font-semibold text-indigo-900 mb-3">Ajouter une date de départ supplémentaire dans la simulation</h5>
                            <div className="flex gap-3 items-end">
                              <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Mois</label>
                                <select
                                  value={selectedMonth}
                                  onChange={(e) => setSelectedMonth(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                  <option value="01">Janvier</option>
                                  <option value="02">Février</option>
                                  <option value="03">Mars</option>
                                  <option value="04">Avril</option>
                                  <option value="05">Mai</option>
                                  <option value="06">Juin</option>
                                  <option value="07">Juillet</option>
                                  <option value="08">Août</option>
                                  <option value="09">Septembre</option>
                                  <option value="10">Octobre</option>
                                  <option value="11">Novembre</option>
                                  <option value="12">Décembre</option>
                                </select>
                              </div>
                              <div className="flex-1">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Année</label>
                                <input
                                  type="number"
                                  value={selectedYear}
                                  onChange={(e) => setSelectedYear(e.target.value)}
                                  min="2025"
                                  max="2045"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                              </div>
                              <button
                                onClick={addCustomDate}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                              >
                                Ajouter
                              </button>
                              <button
                                onClick={() => setShowDateSelector(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                              >
                                Annuler
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr>
                                <th className="py-3 px-4 text-left font-bold text-gray-700 border-b-2 border-gray-300"></th>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <th
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center font-bold border-b-2 border-gray-300 ${
                                        isBest ? 'bg-yellow-50' : ''
                                      }`}
                                    >
                                      <div className="flex flex-col items-center gap-1">
                                        <span className="text-gray-800">
                                          {scenario.age} ans{scenario.months > 0 && ` et ${scenario.months} mois`}
                                        </span>
                                        {scenario.label && (
                                          <span className="text-xs text-gray-500 font-normal">({scenario.label})</span>
                                        )}
                                        {isBest && (
                                          <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs mt-1">
                                            OPTIMAL
                                          </span>
                                        )}
                                      </div>
                                    </th>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-gray-200">
                                <td className="py-3 px-4 font-semibold text-gray-700">Date de départ <span className="text-xs font-normal text-gray-500">(âge)</span></td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
                                  const currentYear = 2024;
                                  const currentAge = 58;
                                  const yearOfDeparture = currentYear + (scenario.age - currentAge);
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center ${isBest ? 'bg-yellow-50' : ''}`}
                                    >
                                      {scenario.label ? (
                                        <div>
                                          <div className="text-gray-800">{scenario.label}</div>
                                          <div className="text-xs text-gray-500 mt-1">
                                            ({scenario.age} ans{scenario.months > 0 && ` et ${scenario.months} mois`})
                                          </div>
                                        </div>
                                      ) : (
                                        <div>
                                          <div className="text-gray-800">01/01/{yearOfDeparture}</div>
                                          <div className="text-xs text-gray-500 mt-1">
                                            ({scenario.age} ans{scenario.months > 0 && ` et ${scenario.months} mois`})
                                          </div>
                                        </div>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="border-b border-gray-200">
                                <td className="py-3 px-4 font-semibold text-gray-700">Pension mensuelle</td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center ${isBest ? 'bg-yellow-50 font-semibold' : ''}`}
                                    >
                                      {formatNumber(Math.round(scenario.pensionMensuelle))} €
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="border-b border-gray-200">
                                <td className="py-3 px-4 font-semibold text-gray-700">Pension annuelle</td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center ${isBest ? 'bg-yellow-50 font-semibold' : ''}`}
                                    >
                                      {formatNumber(Math.round(scenario.pensionAnnuelle))} €
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="border-b border-gray-200">
                                <td className="py-3 px-4 font-semibold text-gray-700">Coefficient</td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center text-gray-600 ${isBest ? 'bg-yellow-50' : ''}`}
                                    >
                                      {(scenario.coefficient * 100).toFixed(1)} %
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr className="border-b border-gray-200">
                                <td className="py-3 px-4 font-semibold text-gray-700">Gain cumulé (jusqu'à 85 ans)</td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center font-bold text-blue-700 ${isBest ? 'bg-yellow-50' : ''}`}
                                    >
                                      {formatNumber(Math.round(scenario.gainCumule))} €
                                    </td>
                                  );
                                })}
                              </tr>
                              <tr>
                                <td className="py-3 px-4 font-semibold text-gray-700">Actions</td>
                                {scenarios.map((scenario, idx) => {
                                  const isBest = scenario.gainCumule === bestScenario.gainCumule;
                                  return (
                                    <td
                                      key={scenario.customId || idx}
                                      className={`py-3 px-4 text-center ${isBest ? 'bg-yellow-50' : ''}`}
                                    >
                                      {scenario.customId && (
                                        <button
                                          onClick={() => removeCustomDate(scenario.customId)}
                                          className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                          <X className="w-3 h-3" />
                                        </button>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            </tbody>
                          </table>
                          <p className="text-xs text-gray-500 mt-3 italic">* Les pensions sont nettes de prélèvements sociaux et avant imposition sur le revenu</p>
                        </div>

                        {/* Boutons de téléchargement en bas */}
                        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => downloadExcel(carriere, scenarios)}
                            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                            title="Télécharger le tableau en Excel"
                          >
                            <Download className="w-4 h-4" />
                            Excel
                          </button>
                          <button
                            onClick={() => downloadWord(carriere)}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
                            title="Télécharger les recommandations en Word"
                          >
                            <Download className="w-4 h-4" />
                            Word
                          </button>
                          <button
                            onClick={() => downloadPDF(carriere, scenarios)}
                            className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                            title="Télécharger le rapport complet en PDF"
                          >
                            <Download className="w-4 h-4" />
                            PDF
                          </button>
                        </div>
                      </div>

                      {/* 2. ANALYSE DU SCÉNARIO */}
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
                                <>Vous disposez de <strong>{formatNumber(totalTrimestres)} trimestres</strong>, ce qui est suffisant pour bénéficier du <strong>taux plein</strong> ({formatNumber(trimestresRequis)} trimestres requis). Vous pouvez partir à la retraite dès 64 ans sans décote.</>
                              ) : (
                                <>Vous disposez de <strong>{formatNumber(totalTrimestres)} trimestres sur {formatNumber(trimestresRequis)} requis</strong>. Il vous manque <strong>{formatNumber(trimestresRequis - totalTrimestres)} trimestres</strong> pour le taux plein. Un départ anticipé entraînera une décote sur votre pension.</>
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
                                <>Vous pouvez racheter jusqu'à <strong>12 trimestres</strong> pour compléter votre carrière. Le coût varie selon votre âge et revenus (estimé entre {formatNumber(3000)}€ et {formatNumber(6000)}€ par trimestre). Racheter <strong>{Math.min(trimestresRequis - totalTrimestres, 12)} trimestres</strong> vous permettrait d'atteindre le taux plein.</>
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
                              Si vous avez commencé à travailler avant <strong>20 ans</strong> et justifiez d'une longue carrière, vous pourriez partir dès <strong>60 ans</strong> sans décote avec au moins 5 trimestres avant 20 ans et {formatNumber(trimestresRequis)} trimestres cotisés. Vérifiez votre relevé de carrière pour cette option.
                            </p>
                          </div>

                          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <h5 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
                              <span className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
                              Cumul emploi-retraite
                            </h5>
                            <p className="text-sm text-gray-700">
                              Une fois à la retraite au <strong>taux plein</strong>, vous pouvez reprendre une activité professionnelle sans limitation de revenus tout en cumulant votre pension. Si vous partez avec décote, le cumul est plafonné (environ {formatNumber(20000)}€/an selon votre situation).
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 3. ANALYSE DE LA PENSION */}
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-300">
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Analyse de la pension</h4>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                            <p className="text-sm font-semibold text-blue-800 mb-1">Trimestres validés</p>
                            <p className="text-3xl font-bold text-blue-600">{formatNumber(totalTrimestres)}</p>
                            <p className="text-xs text-blue-600 mt-1">sur {formatNumber(trimestresRequis)} requis</p>
                          </div>

                          <div className="p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                            <p className="text-sm font-semibold text-purple-800 mb-1">Points régime de base</p>
                            <p className="text-3xl font-bold text-purple-600">{formatNumber(Math.round(totalPointsBase))}</p>
                            <p className="text-xs text-purple-600 mt-1">CNAV</p>
                          </div>

                          <div className="p-4 bg-white rounded-lg border border-pink-200 shadow-sm">
                            <p className="text-sm font-semibold text-pink-800 mb-1">Points complémentaires</p>
                            <p className="text-3xl font-bold text-pink-600">{formatNumber(Math.round(totalPointsComplementaires))}</p>
                            <p className="text-xs text-pink-600 mt-1">AGIRC-ARRCO</p>
                          </div>
                        </div>

                        <div className="space-y-3 bg-white p-4 rounded-lg border border-green-200">
                          <h5 className="font-bold text-gray-800 mb-3">Calcul détaillé de la pension</h5>

                          <div className="flex justify-between items-center pb-2 border-b border-green-200">
                            <span className="text-sm text-gray-600">Pension régime de base (mensuelle) :</span>
                            <span className="font-semibold text-gray-800">{formatNumber(Math.round(pensionBase / 12))} €</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-500 -mt-2 mb-2">
                            <span>{formatNumber(Math.round(totalPointsBase))} points × {valeurPointBase} € = {formatNumber(Math.round(totalPointsBase * valeurPointBase))} €/mois</span>
                          </div>

                          <div className="flex justify-between items-center pb-2 border-b border-green-200">
                            <span className="text-sm text-gray-600">Pension complémentaire (mensuelle) :</span>
                            <span className="font-semibold text-gray-800">{formatNumber(Math.round(pensionComplementaire / 12))} €</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-gray-500 -mt-2 mb-2">
                            <span>{formatNumber(Math.round(totalPointsComplementaires))} points × {valeurPointComplementaire} € = {formatNumber(Math.round(totalPointsComplementaires * valeurPointComplementaire))} €/mois</span>
                          </div>

                          <div className="flex justify-between items-center pt-2 border-t-2 border-green-400">
                            <span className="font-bold text-gray-800">Pension brute annuelle (taux plein) :</span>
                            <span className="text-xl font-bold text-blue-700">{formatNumber(Math.round(pensionBruteAnnuelle))} €</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Prélèvements sociaux (≈10%) :</span>
                            <span className="font-semibold text-red-600">- {formatNumber(Math.round(pensionBruteAnnuelle * 0.1))} €</span>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t-2 border-blue-300">
                            <span className="font-bold text-gray-800">Pension nette avant IR (taux plein) :</span>
                            <span className="text-xl font-bold text-green-700">{formatNumber(Math.round(pensionNetteAnnuelleBase))} €</span>
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
                {/* Anomalies détectées - EN PREMIER */}
                {(() => {
                  const carriere = carrieres.find(c => c.id === carriereActive);
                  if (!carriere) return null;

                  const toutesLesErreurs = [];
                  carriere.data.forEach(ligne => {
                    const messages = checkLigneIncoherence(ligne);
                    if (messages.length > 0) {
                      toutesLesErreurs.push({
                        annee: ligne.annee,
                        messages: messages
                      });
                    }
                  });

                  if (toutesLesErreurs.length === 0) {
                    return (
                      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <Check className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-green-900 text-lg">Aucune anomalie détectée</h3>
                            <p className="text-sm text-green-800 mt-1">
                              Les données de carrière du scénario "{carriere.nom}" sont cohérentes.
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        <h3 className="font-bold text-red-900 text-lg">
                          Anomalies à corriger ({toutesLesErreurs.length})
                        </h3>
                      </div>
                      <p className="text-sm text-red-800 mb-4">
                        Les incohérences suivantes ont été détectées dans le scénario "{carriere.nom}" et doivent être corrigées :
                      </p>
                      <div className="space-y-3">
                        {toutesLesErreurs.map((erreur, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-4 border border-red-200">
                            <div className="flex gap-3 items-start">
                              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-red-900 mb-2">Année {erreur.annee}</p>
                                <ul className="list-disc list-inside space-y-1">
                                  {erreur.messages.map((msg, msgIdx) => (
                                    <li key={msgIdx} className="text-sm text-red-800">{msg}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-red-700">
                        <AlertCircle className="w-4 h-4" />
                        <span className="font-semibold">
                          Ces anomalies peuvent impacter le calcul de votre pension. Veuillez les corriger dans la section "Carrières".
                        </span>
                      </div>
                    </div>
                  );
                })()}

                {/* Rubriques à construire */}
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Rubriques à construire</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Les sections suivantes sont en cours de développement et seront bientôt disponibles :
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="font-medium text-gray-800">Timeline de suivi du dossier</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">À venir</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="font-medium text-gray-800">Statistiques du dossier</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">À venir</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="font-medium text-gray-800">Actions rapides</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">À venir</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-300 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="font-medium text-gray-800">Historique des modifications</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">À venir</span>
                    </div>
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
