import React, { useState } from 'react';
import { User, Briefcase, TrendingUp, Edit2, Check, X, LogOut, Plus, MessageCircle, CreditCard, Upload, FileText, Users, ChevronDown, ChevronUp, Eye, Download, Bell, Settings, LayoutDashboard, ClipboardList, CheckCircle, Shield, Edit3, AlertCircle, Info } from 'lucide-react';

export default function VaultApp() {
  const [activeSection, setActiveSection] = useState('profil');
  const [credits, setCredits] = useState(3);
  const [dossierOuvert, setDossierOuvert] = useState('Jean Dupont');
  const [showDossierMenu, setShowDossierMenu] = useState(false);
  
  const [carrieres, setCarrieres] = useState([
    {
      id: 1,
      nom: 'Carrière actuelle',
      data: [
        { annee: 2002, debut: '25/07/2002', fin: '31/08/2002', structure: 'ACTIVITÉ SALARIÉE (MSA)', activite: 'Salarié agricole', salaireDefplafonne: 1157, salairePlafonne: 1157, trimestres: 0, regimeBase: 'MSA', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 5.84 },
        { annee: 2003, debut: '31/07/2003', fin: '29/08/2003', structure: 'ACTIVITÉ SALARIÉE (MSA)', activite: 'Salarié agricole', salaireDefplafonne: 1755, salairePlafonne: 1755, trimestres: 1, regimeBase: 'MSA', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 8.71 },
        { annee: 2004, debut: '26/07/2004', fin: '04/11/2004', structure: 'MAIRIE', activite: 'Contractuel fct. Publique', salaireDefplafonne: 827, salairePlafonne: 827, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 8 },
        { annee: 2004, debut: '20/09/2004', fin: '31/12/2004', structure: 'THE REWARD', activite: 'Salarié du privé', salaireDefplafonne: 1868, salairePlafonne: 1868, trimestres: 1, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 9.07 },
        { annee: 2005, debut: '01/01/2005', fin: '31/12/2005', structure: 'THE REWARD', activite: 'Salarié du privé', salaireDefplafonne: 10098, salairePlafonne: 10098, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 47.86 },
        { annee: 2006, debut: '01/01/2006', fin: '31/12/2006', structure: 'THE REWARD', activite: 'Salarié du privé', salaireDefplafonne: 13038, salairePlafonne: 13038, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 60.05 },
        { annee: 2007, debut: '01/01/2007', fin: '30/07/2007', structure: 'THE REWARD', activite: 'Salarié du privé', salaireDefplafonne: 7488, salairePlafonne: 7488, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 33.26 },
        { annee: 2007, debut: '02/07/2007', fin: '31/08/2007', structure: 'COLORZ', activite: 'Salarié du privé', salaireDefplafonne: 1080, salairePlafonne: 1080, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2008, debut: '01/01/2008', fin: '31/12/2008', structure: 'COLORZ', activite: 'Salarié du privé', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2009, debut: '01/01/2009', fin: '30/06/2009', structure: 'COLORZ', activite: 'Salarié du privé', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2009, debut: '12/08/2009', fin: '31/10/2009', structure: 'CHÔMAGE', activite: '', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2009, debut: '16/11/2009', fin: '31/12/2009', structure: 'VISUAL LINK PARIS', activite: 'Salarié du privé', salaireDefplafonne: 3733, salairePlafonne: 3733, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 20.97 },
        { annee: 2010, debut: '01/01/2010', fin: '31/12/2010', structure: 'VISUAL LINK PARIS', activite: 'Salarié du privé', salaireDefplafonne: 30580, salairePlafonne: 30580, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 169.11 },
        { annee: 2011, debut: '01/01/2011', fin: '31/12/2011', structure: 'VISUAL LINK PARIS', activite: 'Salarié du privé', salaireDefplafonne: 32482, salairePlafonne: 32482, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 174.12 },
        { annee: 2012, debut: '01/01/2012', fin: '31/12/2012', structure: 'VISUAL LINK PARIS', activite: 'Salarié du privé', salaireDefplafonne: 9937, salairePlafonne: 9937, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 205.91 },
        { annee: 2012, debut: '19/03/2012', fin: '31/12/2012', structure: 'ACTI', activite: 'Salarié du privé', salaireDefplafonne: 28458, salairePlafonne: 28458, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2013, debut: '01/01/2013', fin: '31/12/2013', structure: 'ACTI', activite: 'Salarié du privé', salaireDefplafonne: 36360, salairePlafonne: 36360, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 184.99 },
        { annee: 2014, debut: '01/01/2014', fin: '31/12/2014', structure: 'ACTI', activite: 'Salarié du privé', salaireDefplafonne: 37583, salairePlafonne: 37583, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 191.83 },
        { annee: 2014, debut: '01/10/2014', fin: '31/12/2014', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 2040, salairePlafonne: 2040, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 23 },
        { annee: 2015, debut: '01/01/2015', fin: '31/12/2015', structure: 'ACTI', activite: 'Salarié du privé', salaireDefplafonne: 40322, salairePlafonne: 40322, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 196.29 },
        { annee: 2015, debut: '01/01/2015', fin: '31/12/2015', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 2040, salairePlafonne: 2040, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 23 },
        { annee: 2016, debut: '01/01/2016', fin: '31/12/2016', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 2078, salairePlafonne: 2078, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 24 },
        { annee: 2016, debut: '01/01/2016', fin: '06/12/2016', structure: 'ACTI', activite: 'Salarié du privé', salaireDefplafonne: 38839, salairePlafonne: 38839, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 194.8 },
        { annee: 2016, debut: '07/12/2016', fin: '31/12/2016', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 2610, salairePlafonne: 2610, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 0 },
        { annee: 2017, debut: '01/01/2017', fin: '31/12/2017', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 2496, salairePlafonne: 2496, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 75 },
        { annee: 2017, debut: '01/01/2017', fin: '31/12/2017', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 50314, salairePlafonne: 50314, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 262.92 },
        { annee: 2018, debut: '01/01/2018', fin: '31/12/2018', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 77262, salairePlafonne: 77262, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 516.32 },
        { annee: 2018, debut: '01/01/2018', fin: '31/12/2018', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 348, salairePlafonne: 348, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 11 },
        { annee: 2019, debut: '01/01/2019', fin: '31/12/2019', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 78672, salairePlafonne: 78672, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 530.98 },
        { annee: 2019, debut: '01/01/2019', fin: '31/12/2019', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 11940, salairePlafonne: 11940, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 375 },
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 84454, salairePlafonne: 84454, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 583.89 },
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 23071, salairePlafonne: 23071, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 719 },
        { annee: 2020, debut: '07/09/2020', fin: '17/09/2020', structure: 'CONGÉ PATERNITÉ', activite: 'NA', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'NA', pointsComplementaires: 0 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 109053, salairePlafonne: 109053, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 811.59 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', structure: 'PAYE SANS ORDON. ESI LYON', activite: 'Contractuel fct. Publique', salaireDefplafonne: 24289, salairePlafonne: 24289, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 754 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 130532, salairePlafonne: 130532, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 1018.14 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', structure: 'UNIVERSITE LYON 3', activite: 'Contractuel fct. Publique', salaireDefplafonne: 21952, salairePlafonne: 21952, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 674 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2013', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 142862, salairePlafonne: 142862, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 1057.96 },
        { annee: 2023, debut: '25/07/2023', fin: '18/08/2023', structure: 'CONGÉ PATERNITÉ', activite: 'NA', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 0, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'NA', pointsComplementaires: 0 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', structure: 'UNIVERSITE LYON 3', activite: 'Contractuel fct. Publique', salaireDefplafonne: 32356, salairePlafonne: 32356, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 947 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 132982, salairePlafonne: 132982, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 1000.10 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', structure: 'UNIVERSITE LYON 3', activite: 'Contractuel fct. Publique', salaireDefplafonne: 25842, salairePlafonne: 25842, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 718 },
        { annee: 2025, debut: '01/01/2025', fin: '31/12/2025', structure: 'NEOVIA', activite: 'Salarié du privé', salaireDefplafonne: 132982, salairePlafonne: 132982, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Agirc-Arrco', pointsComplementaires: 1000.10 },
        { annee: 2025, debut: '01/01/2025', fin: '31/12/2025', structure: 'UNIVERSITE LYON 3', activite: 'Contractuel fct. Publique', salaireDefplafonne: 25842, salairePlafonne: 25842, trimestres: 4, regimeBase: 'CNAV', pointsBase: 0, regimeComplementaire: 'Ircantec', pointsComplementaires: 718 }
      ]
    },
    {
      id: 2,
      nom: 'Statut PDT de SAS',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', structure: 'SAS Tech', activite: 'PDT SAS', salaireDefplafonne: 45000, salairePlafonne: 41136, trimestres: 4, regimeBase: 'CNAV', pointsBase: 210, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1650 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', structure: 'SAS Tech', activite: 'PDT SAS', salaireDefplafonne: 47000, salairePlafonne: 41136, trimestres: 4, regimeBase: 'CNAV', pointsBase: 215, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1720 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', structure: 'SAS Tech', activite: 'PDT SAS', salaireDefplafonne: 49000, salairePlafonne: 41136, trimestres: 2, regimeBase: 'CNAV', pointsBase: 220, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1780 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', structure: 'SAS Tech', activite: 'PDT SAS', salaireDefplafonne: 51000, salairePlafonne: 43992, trimestres: 4, regimeBase: 'CNAV', pointsBase: 225, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1850 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', structure: 'SAS Tech', activite: 'PDT SAS', salaireDefplafonne: 53000, salairePlafonne: 46368, trimestres: 4, regimeBase: 'CNAV', pointsBase: 230, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1920 }
      ]
    },
    {
      id: 3,
      nom: 'Chômage',
      data: [
        { annee: 2020, debut: '01/01/2020', fin: '31/12/2020', structure: 'Pôle Emploi', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2021, debut: '01/01/2021', fin: '31/12/2021', structure: 'Pôle Emploi', activite: 'Chômage', salaireDefplafonne: 8000, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2022, debut: '01/01/2022', fin: '31/12/2022', structure: 'Pôle Emploi', activite: 'Chômage', salaireDefplafonne: 15000, salairePlafonne: 0, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2023, debut: '01/01/2023', fin: '31/12/2023', structure: 'Pôle Emploi', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 0, trimestres: 3, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 },
        { annee: 2024, debut: '01/01/2024', fin: '31/12/2024', structure: 'Pôle Emploi', activite: 'Chômage', salaireDefplafonne: 0, salairePlafonne: 5000, trimestres: 4, regimeBase: 'CNAV', pointsBase: 180, regimeComplementaire: 'AGIRC-ARRCO', pointsComplementaires: 1200 }
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
  const [expandedYears, setExpandedYears] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCompleteCarriereModal, setShowCompleteCarriereModal] = useState(false);
  const [showLegendeModal, setShowLegendeModal] = useState(false);
  const [inflationRate, setInflationRate] = useState(2);
  
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
      // Trouver le scénario "Carrière actuelle" pour le copier
      const carriereActuelle = carrieres.find(c => c.nom === 'Carrière actuelle');

      const newCarriere = {
        id: carrieres.length + 1,
        nom: nouveauNomCarriere,
        // Copier les données de la carrière actuelle si elle existe, sinon tableau vide
        data: carriereActuelle ? [...carriereActuelle.data.map(ligne => ({ ...ligne }))] : []
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
    setEditingLigne(`${ligne.annee}-${ligne._index}`);
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

  const duplicateDerniereAnnee = () => {
    const carriere = carrieres.find(c => c.id === carriereActive);
    if (!carriere) return;

    // Trouver la dernière année avec des données
    const derniereAnnee = Math.max(...carriere.data.map(l => l.annee));
    const lignesDerniereAnnee = carriere.data.filter(l => l.annee === derniereAnnee);

    if (lignesDerniereAnnee.length === 0) return;

    // Créer les nouvelles lignes pour l'année suivante
    const nouvellesLignes = lignesDerniereAnnee.map(ligne => ({
      ...ligne,
      annee: derniereAnnee + 1,
      debut: `01/01/${derniereAnnee + 1}`,
      fin: `31/12/${derniereAnnee + 1}`
    }));

    // Ajouter les nouvelles lignes à la carrière
    setCarrieres(carrieres.map(c => {
      if (c.id === carriereActive) {
        return {
          ...c,
          data: [...c.data, ...nouvellesLignes]
        };
      }
      return c;
    }));

    setShowCompleteCarriereModal(false);
  };

  const projeterJusquAuTauxPlein = () => {
    const carriere = carrieres.find(c => c.id === carriereActive);
    if (!carriere) return;

    // Calculer les trimestres acquis
    const trimestresAcquis = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
    const trimestresCibles = 172; // Pour une personne née après 1973
    const trimestresManquants = Math.max(0, trimestresCibles - trimestresAcquis);

    if (trimestresManquants === 0) {
      alert('Le taux plein est déjà atteint !');
      setShowCompleteCarriereModal(false);
      return;
    }

    // Calculer le nombre d'années complètes nécessaires
    const anneesNecessaires = Math.ceil(trimestresManquants / 4);

    // Trouver la dernière année avec des données
    const derniereAnnee = Math.max(...carriere.data.map(l => l.annee));
    const lignesDerniereAnnee = carriere.data.filter(l => l.annee === derniereAnnee);

    if (lignesDerniereAnnee.length === 0) return;

    // Créer les nouvelles lignes pour chaque année manquante
    const nouvellesLignes = [];
    for (let i = 1; i <= anneesNecessaires; i++) {
      const nouvelleAnnee = derniereAnnee + i;
      const facteurInflation = Math.pow(1 + (inflationRate / 100), i);

      lignesDerniereAnnee.forEach(ligne => {
        // Appliquer l'inflation sur les salaires et points
        const nouveauSalaireDepl = Math.round(ligne.salaireDefplafonne * facteurInflation);
        const nouveauSalairePlaf = Math.round(ligne.salairePlafonne * facteurInflation);
        const nouveauxPoints = ligne.pointsComplementaires !== 0 && ligne.pointsComplementaires !== null
          ? parseFloat((ligne.pointsComplementaires * facteurInflation).toFixed(2))
          : ligne.pointsComplementaires;

        nouvellesLignes.push({
          ...ligne,
          annee: nouvelleAnnee,
          debut: `01/01/${nouvelleAnnee}`,
          fin: `31/12/${nouvelleAnnee}`,
          salaireDefplafonne: nouveauSalaireDepl,
          salairePlafonne: nouveauSalairePlaf,
          pointsComplementaires: nouveauxPoints
        });
      });
    }

    // Ajouter les nouvelles lignes à la carrière
    setCarrieres(carrieres.map(c => {
      if (c.id === carriereActive) {
        return {
          ...c,
          data: [...c.data, ...nouvellesLignes]
        };
      }
      return c;
    }));

    setShowCompleteCarriereModal(false);
  };

  const checkLigneIncoherence = (ligne) => {
    const messages = [];

    if (ligne.trimestres < 0 || ligne.trimestres > 4) {
      messages.push('Trimestres invalides (doit être entre 0 et 4)');
    }

    // Vérification : absence de trimestres (sauf pour congés paternité et chômage sans activité)
    if (ligne.trimestres === 0 && ligne.activite !== 'NA' && ligne.activite !== '') {
      messages.push('Absence de trimestres validés');
    }

    // Vérification : absence de points complémentaires (sauf pour congés paternité)
    if ((ligne.pointsComplementaires === 0 || ligne.pointsComplementaires === null) &&
        ligne.regimeComplementaire !== 'NA' &&
        ligne.activite !== 'NA' &&
        ligne.salaireDefplafonne > 0) {
      messages.push('Absence de points complémentaires');
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

  const toggleExpandYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const getYearStatus = (annee, hasError) => {
    if (annee === 2025) return 'certified';
    if (annee === 2024) return 'certified';
    if (annee === 2023) return 'corrected';
    if (!hasError) return 'coherent';
    return 'error';
  };

  const getStatusBadgeColor = (statut, index) => {
    const colors = [
      'bg-blue-100 text-blue-700',
      'bg-green-100 text-green-700',
      'bg-purple-100 text-purple-700',
      'bg-pink-100 text-pink-700',
      'bg-indigo-100 text-indigo-700',
      'bg-yellow-100 text-yellow-700',
      'bg-teal-100 text-teal-700',
      'bg-orange-100 text-orange-700'
    ];
    return colors[index % colors.length];
  };

  // Couleurs pour les régimes (caisses) - tons pastel plus doux
  const getRegimeColor = (regime) => {
    const regimeColors = {
      'CNAV': 'bg-blue-200 text-blue-900',
      'MSA': 'bg-green-200 text-green-900',
      'Agirc-Arrco': 'bg-purple-200 text-purple-900',
      'Ircantec': 'bg-pink-200 text-pink-900',
      'NA': 'bg-gray-200 text-gray-700',
      'Non renseigné': 'bg-gray-200 text-gray-700'
    };
    return regimeColors[regime] || 'bg-slate-200 text-slate-900';
  };

  // Couleurs pour les statuts (activités) - tons chauds pour différencier
  const getStatutColor = (statut) => {
    const statutColors = {
      'Salarié agricole': 'bg-amber-100 text-amber-800',
      'Contractuel fct. Publique': 'bg-rose-100 text-rose-800',
      'Salarié du privé': 'bg-cyan-100 text-cyan-800',
      'NA': 'bg-gray-100 text-gray-600',
      'Non renseigné': 'bg-gray-100 text-gray-600',
      'Chômage': 'bg-orange-100 text-orange-800',
      'Salarié': 'bg-teal-100 text-teal-800',
      'PDT SAS': 'bg-violet-100 text-violet-800'
    };
    return statutColors[statut] || 'bg-lime-100 text-lime-800';
  };

  const groupDataByYear = (data) => {
    const grouped = {};
    data.forEach(ligne => {
      if (!grouped[ligne.annee]) {
        grouped[ligne.annee] = [];
      }
      grouped[ligne.annee].push(ligne);
    });
    return grouped;
  };

  const createSyntheseLigne = (annee, lignes) => {
    // Date de début : la plus proche du 1er janvier
    const debuts = lignes.map(l => new Date(l.debut.split('/').reverse().join('-')));
    const debutMin = new Date(Math.min(...debuts));
    const debutStr = lignes.find(l => new Date(l.debut.split('/').reverse().join('-')).getTime() === debutMin.getTime())?.debut;

    // Date de fin : la plus proche du 31 décembre
    const fins = lignes.map(l => new Date(l.fin.split('/').reverse().join('-')));
    const finMax = new Date(Math.max(...fins));
    const finStr = lignes.find(l => new Date(l.fin.split('/').reverse().join('-')).getTime() === finMax.getTime())?.fin;

    // Structures uniques
    const structures = [...new Set(lignes.map(l => l.structure))];

    // Statuts uniques
    const statuts = [...new Set(lignes.map(l => l.activite))].filter(s => s);

    // Somme des salaires
    const salaire = lignes.reduce((sum, l) => sum + l.salaireDefplafonne, 0);

    // Somme des trimestres (max 4)
    const trimestres = Math.min(4, lignes.reduce((sum, l) => sum + l.trimestres, 0));

    // Régimes de base uniques
    const regimesBase = [...new Set(lignes.map(l => l.regimeBase))].filter(r => r);

    // Régimes complémentaires uniques
    const regimesCompl = [...new Set(lignes.map(l => l.regimeComplementaire))].filter(r => r);

    return {
      annee,
      debut: debutStr,
      fin: finStr,
      structure: 'Plusieurs structures enregistrées',
      structures,
      activite: statuts,
      statuts,
      salaireDefplafonne: salaire,
      salairePlafonne: salaire,
      trimestres,
      regimeBase: regimesBase,
      regimesBase,
      regimeComplementaire: regimesCompl,
      regimesCompl,
      pointsComplementaires: 'NA',
      isSynthese: true,
      lignesDetail: lignes
    };
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
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-orange-600" />
                  </div>
                  Scénarios de carrière
                </h2>
              </div>

              <div className="flex gap-2 mb-6 flex-wrap items-center">
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
                <button
                  onClick={() => setShowCarriereForm(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  <Plus className="w-5 h-5" />
                  Scénario supplémentaire
                </button>
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

                // Grouper les données par année
                const groupedByYear = groupDataByYear(carriere.data);
                const displayData = [];

                Object.keys(groupedByYear).sort((a, b) => parseInt(a) - parseInt(b)).forEach(year => {
                  const lignes = groupedByYear[year];
                  if (lignes.length > 1) {
                    // Créer une ligne de synthèse
                    displayData.push(createSyntheseLigne(parseInt(year), lignes));
                    // Ajouter les lignes de détail si expanded
                    if (expandedYears[year]) {
                      lignes.forEach(l => displayData.push({ ...l, isDetail: true }));
                    }
                  } else {
                    // Une seule ligne pour cette année
                    displayData.push(lignes[0]);
                  }
                });

                // Catégoriser les années par statut avec détails des erreurs
                const anneesParStatut = {
                  incoherentes: [],
                  absentes: [],
                  corrigees: [],
                  coherentes: [],
                  certifiees: []
                };

                displayData.forEach(ligne => {
                  if (ligne.isSynthese) {
                    // Pour les synthèses, vérifier toutes les lignes de détail
                    const erreursDetail = [];
                    ligne.lignesDetail?.forEach(l => {
                      const messages = checkLigneIncoherence(l);
                      if (messages.length > 0) {
                        erreursDetail.push(...messages);
                      }
                    });
                    const hasError = erreursDetail.length > 0;
                    const status = getYearStatus(ligne.annee, hasError);
                    if (status === 'error') anneesParStatut.incoherentes.push({ annee: ligne.annee, erreurs: erreursDetail });
                    else if (status === 'missing') anneesParStatut.absentes.push(ligne.annee);
                    else if (status === 'corrected') anneesParStatut.corrigees.push(ligne.annee);
                    else if (status === 'coherent') anneesParStatut.coherentes.push(ligne.annee);
                    else if (status === 'certified') anneesParStatut.certifiees.push(ligne.annee);
                  } else if (!ligne.isDetail) {
                    const erreurs = checkLigneIncoherence(ligne);
                    const hasError = erreurs.length > 0;
                    const status = getYearStatus(ligne.annee, hasError);
                    if (status === 'error') anneesParStatut.incoherentes.push({ annee: ligne.annee, erreurs });
                    else if (status === 'missing') anneesParStatut.absentes.push(ligne.annee);
                    else if (status === 'corrected') anneesParStatut.corrigees.push(ligne.annee);
                    else if (status === 'coherent') anneesParStatut.coherentes.push(ligne.annee);
                    else if (status === 'certified') anneesParStatut.certifiees.push(ligne.annee);
                  }
                });

                // Calculer les trimestres
                const trimestresAcquis = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
                const trimestresCibles = 172; // Exemple pour une personne née après 1973
                const trimestresRestants = Math.max(0, trimestresCibles - trimestresAcquis);

                return (
                  <>
                    {/* Deux zones d'information au-dessus du tableau */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Zone de gauche : État des années */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-5">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <ClipboardList className="w-5 h-5 text-blue-600" />
                            État de la carrière
                          </h3>
                          <button
                            onClick={() => setShowLegendeModal(true)}
                            className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            Légende
                          </button>
                        </div>

                        <div className="space-y-2 mb-4">
                          {anneesParStatut.incoherentes.length > 0 && (
                            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                              <div className="flex items-center gap-1 mb-2">
                                <AlertCircle className="w-4 h-4 text-red-700" />
                                <span className="font-semibold text-red-900 text-sm">Années incohérentes</span>
                              </div>
                              <div className="space-y-2 ml-5">
                                {anneesParStatut.incoherentes.map((item, idx) => (
                                  <div key={idx} className="text-xs">
                                    <span className="font-bold text-red-800">{item.annee} :</span>
                                    <ul className="mt-1 space-y-0.5 text-red-700">
                                      {item.erreurs.map((erreur, eidx) => (
                                        <li key={eidx}>• {erreur}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {anneesParStatut.absentes.length > 0 && (
                            <div className="flex items-start gap-2">
                              <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium whitespace-nowrap">
                                <Info className="w-3 h-3" />
                                <span>Info absente</span>
                              </div>
                              <div className="text-xs text-gray-700 flex-1">
                                {anneesParStatut.absentes.join(', ')}
                              </div>
                            </div>
                          )}

                          {anneesParStatut.corrigees.length > 0 && (
                            <div className="flex items-start gap-2">
                              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium whitespace-nowrap">
                                <Edit3 className="w-3 h-3" />
                                <span>Corrigée</span>
                              </div>
                              <div className="text-xs text-gray-700 flex-1">
                                {anneesParStatut.corrigees.join(', ')}
                              </div>
                            </div>
                          )}

                          {anneesParStatut.coherentes.length > 0 && (
                            <div className="flex items-start gap-2">
                              <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap">
                                <CheckCircle className="w-3 h-3" />
                                <span>Cohérent</span>
                              </div>
                              <div className="text-xs text-gray-700 flex-1">
                                {anneesParStatut.coherentes.join(', ')}
                              </div>
                            </div>
                          )}

                          {anneesParStatut.certifiees.length > 0 && (
                            <div className="flex items-start gap-2">
                              <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium whitespace-nowrap">
                                <Shield className="w-3 h-3" />
                                <span>Certifiée</span>
                              </div>
                              <div className="text-xs text-gray-700 flex-1">
                                {anneesParStatut.certifiees.join(', ')}
                              </div>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => setShowCompleteCarriereModal(true)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                          <Plus className="w-4 h-4" />
                          Compléter la carrière
                        </button>
                      </div>

                      {/* Zone de droite : Projections de retraite */}
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200 p-5">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          Projection de départ à la retraite
                        </h3>

                        <div className="space-y-3 mb-4">
                          <div className="bg-white rounded-lg p-3 border border-orange-100">
                            <div className="text-xs text-gray-600 mb-1">Âge de départ à taux plein</div>
                            <div className="text-xl font-bold text-orange-600">62 ans et 8 mois</div>
                          </div>

                          <div className="bg-white rounded-lg p-3 border border-orange-100">
                            <div className="text-xs text-gray-600 mb-1">Date de départ à taux plein</div>
                            <div className="text-xl font-bold text-orange-600">1er septembre 2045</div>
                          </div>

                          <div className="bg-white rounded-lg p-3 border border-orange-100">
                            <div className="text-xs text-gray-600 mb-1">Trimestres de cotisation</div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold text-orange-600">{trimestresAcquis}</span>
                              <span className="text-sm text-gray-600">acquis /</span>
                              <span className="text-lg font-semibold text-gray-700">{trimestresCibles}</span>
                              <span className="text-sm text-gray-600">requis</span>
                            </div>
                            {trimestresRestants > 0 && (
                              <div className="text-xs text-orange-700 mt-1">
                                {trimestresRestants} trimestre{trimestresRestants > 1 ? 's' : ''} restant{trimestresRestants > 1 ? 's' : ''}
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveSection('projections')}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium"
                        >
                          <Eye className="w-4 h-4" />
                          Voir les projections
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <th className="py-3 px-2 text-center font-bold w-20">Action</th>
                          <th className="py-3 px-2 text-center font-bold w-24">État</th>
                          <th className="py-3 px-2 text-left font-bold w-16">Année</th>
                          <th className="py-3 px-2 text-left font-bold">Début</th>
                          <th className="py-3 px-2 text-left font-bold">Fin</th>
                          <th className="py-3 px-2 text-left font-bold">Structure</th>
                          <th className="py-3 px-2 text-left font-bold">Statut</th>
                          <th className="py-3 px-2 text-right font-bold">Salaire (€)</th>
                          <th className="py-3 px-2 text-center font-bold">Trim.</th>
                          <th className="py-3 px-2 text-left font-bold">Régime base</th>
                          <th className="py-3 px-2 text-left font-bold">Régime compl.</th>
                          <th className="py-3 px-2 text-right font-bold">Pts compl.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayData.map((ligne, index) => {
                          const incoherences = ligne.isSynthese ? [] : checkLigneIncoherence(ligne);
                          const hasError = ligne.isSynthese
                            ? ligne.lignesDetail?.some(l => checkLigneIncoherence(l).length > 0) || false
                            : incoherences.length > 0;
                          const isSynthese = ligne.isSynthese;
                          const isDetail = ligne.isDetail;

                          // Mode édition
                          if (editingLigne === `${ligne.annee}-${index}` && !isSynthese) {
                            return (
                              <tr
                                key={`${ligne.annee}-${index}`}
                                className={`border-b border-gray-200 bg-blue-50 ${isDetail ? 'bg-gray-100' : ''}`}
                              >
                                {/* Actions */}
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
                                {/* État */}
                                <td className="py-2 px-2"></td>
                                                                {/* Année */}
                                <td className="py-2 px-2 font-bold text-gray-700">{ligne.annee}</td>
                                {/* Début */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.debut}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, debut: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Fin */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.fin}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, fin: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Structure */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.structure}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, structure: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Statut */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.activite}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, activite: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Salaire */}
                                <td className="py-2 px-2">
                                  <input
                                    type="number"
                                    value={tempLigneData.salaireDefplafonne}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, salaireDefplafonne: parseFloat(e.target.value) })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                  />
                                </td>
                                {/* Trimestres */}
                                <td className="py-2 px-2">
                                  <input
                                    type="number"
                                    value={tempLigneData.trimestres}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, trimestres: parseInt(e.target.value) })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                  />
                                </td>
                                {/* Régime base */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.regimeBase}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, regimeBase: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Régime compl. */}
                                <td className="py-2 px-2">
                                  <input
                                    type="text"
                                    value={tempLigneData.regimeComplementaire}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, regimeComplementaire: e.target.value })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs"
                                  />
                                </td>
                                {/* Pts compl. */}
                                <td className="py-2 px-2">
                                  <input
                                    type="number"
                                    value={tempLigneData.pointsComplementaires}
                                    onChange={(e) => setTempLigneData({ ...tempLigneData, pointsComplementaires: parseFloat(e.target.value) })}
                                    className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-right"
                                  />
                                </td>
                              </tr>
                            );
                          }

                          // Mode affichage
                          return (
                            <tr
                              key={`${ligne.annee}-${index}`}
                              className={`border-b border-gray-200 ${
                                hasError ? 'bg-red-50' :
                                isSynthese ? 'bg-blue-50 font-semibold' :
                                isDetail ? 'bg-gray-50' :
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              } hover:bg-blue-100 transition`}
                            >
                              {/* Actions */}
                              <td className="py-2 px-2">
                                <div className="flex gap-1 justify-center">
                                  {isSynthese ? (
                                    <button
                                      onClick={() => toggleExpandYear(ligne.annee)}
                                      className="p-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                                    >
                                      {expandedYears[ligne.annee] ? (
                                        <ChevronUp className="w-3 h-3" />
                                      ) : (
                                        <ChevronDown className="w-3 h-3" />
                                      )}
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => startEditLigne({ ...ligne, _index: index })}
                                      className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                      <Edit2 className="w-3 h-3" />
                                    </button>
                                  )}
                                </div>
                              </td>
                              {/* État */}
                              <td className="py-2 px-2">
                                <div className="flex justify-center">
                                  {(() => {
                                    const yearStatus = getYearStatus(ligne.annee, hasError);
                                    if (yearStatus === 'certified') {
                                      return (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                          <Shield className="w-3 h-3" />
                                          <span>Certifiée</span>
                                        </div>
                                      );
                                    }
                                    if (yearStatus === 'corrected') {
                                      return (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                                          <Edit3 className="w-3 h-3" />
                                          <span>Corrigée</span>
                                        </div>
                                      );
                                    }
                                    if (yearStatus === 'coherent') {
                                      return (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                                          <CheckCircle className="w-3 h-3" />
                                          <span>Cohérent</span>
                                        </div>
                                      );
                                    }
                                    if (yearStatus === 'error') {
                                      return (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                                          <AlertCircle className="w-3 h-3" />
                                          <span>Incohérent</span>
                                        </div>
                                      );
                                    }
                                    if (yearStatus === 'missing') {
                                      return (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                          <Info className="w-3 h-3" />
                                          <span>Information absente</span>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })()}
                                </div>
                              </td>
                              {/* Année */}
                              <td className={`py-2 px-2 ${isDetail ? 'pl-6' : ''}`}>
                                <span className="font-bold text-gray-700">{ligne.annee}</span>
                              </td>
                              {/* Début */}
                              <td className="py-2 px-2 text-gray-600">{ligne.debut}</td>
                              {/* Fin */}
                              <td className="py-2 px-2 text-gray-600">{ligne.fin}</td>
                              {/* Structure */}
                              <td className="py-2 px-2 text-gray-600 text-xs">
                                {isSynthese ? ligne.structure : ligne.structure}
                              </td>
                              {/* Statut */}
                              <td className="py-2 px-2">
                                {isSynthese ? (
                                  <div className="flex flex-wrap gap-1">
                                    {ligne.statuts.map((statut, idx) => (
                                      <span key={idx} className={`px-2 py-0.5 ${getStatutColor(statut)} rounded text-xs font-medium`}>
                                        {statut}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  ligne.activite && (
                                    <span className={`px-2 py-1 ${getStatutColor(ligne.activite)} rounded text-xs font-medium`}>
                                      {ligne.activite}
                                    </span>
                                  )
                                )}
                              </td>
                              {/* Salaire */}
                              <td className="py-2 px-2 text-right font-medium text-gray-800">
                                {ligne.salaireDefplafonne?.toLocaleString() || 0}
                              </td>
                              {/* Trimestres */}
                              <td className={`py-2 px-2 text-center font-bold ${
                                ligne.trimestres === 0 ? 'text-red-600' :
                                ligne.trimestres < 4 ? 'text-orange-600' :
                                'text-green-600'
                              }`}>
                                {ligne.trimestres}
                              </td>
                              {/* Régime base */}
                              <td className="py-2 px-2 text-xs">
                                {isSynthese ? (
                                  <div className="flex flex-wrap gap-1">
                                    {ligne.regimesBase.map((regime, idx) => (
                                      <span key={idx} className={`px-2 py-0.5 ${getRegimeColor(regime)} rounded font-medium`}>
                                        {regime}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <span className={`px-2 py-0.5 ${getRegimeColor(ligne.regimeBase)} rounded font-medium`}>{ligne.regimeBase}</span>
                                )}
                              </td>
                              {/* Régime compl. */}
                              <td className="py-2 px-2 text-xs">
                                {isSynthese ? (
                                  <div className="flex flex-wrap gap-1">
                                    {ligne.regimesCompl.map((regime, idx) => (
                                      <span key={idx} className={`px-2 py-0.5 ${getRegimeColor(regime)} rounded font-medium`}>
                                        {regime}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <span className={`px-2 py-0.5 ${getRegimeColor(ligne.regimeComplementaire)} rounded font-medium`}>{ligne.regimeComplementaire}</span>
                                )}
                              </td>
                              {/* Pts compl. */}
                              <td className="py-2 px-2 text-right text-gray-700">
                                {isSynthese ? 'NA' : ligne.pointsComplementaires}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Bouton Compléter la carrière */}
                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => setShowCompleteCarriereModal(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
                    >
                      <Plus className="w-5 h-5" />
                      Compléter la carrière
                    </button>
                  </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Modal Compléter la carrière */}
        {showCompleteCarriereModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Plus className="w-6 h-6 text-blue-600" />
                  Compléter la carrière
                </h3>
                <button
                  onClick={() => setShowCompleteCarriereModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Option 1 : Dupliquer la dernière année */}
                <button
                  onClick={duplicateDerniereAnnee}
                  className="w-full p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dupliquer la dernière année</h4>
                      <p className="text-sm text-gray-600">Créer une nouvelle année avec les mêmes données que la dernière année de carrière</p>
                    </div>
                  </div>
                </button>

                {/* Option 2 : Dupliquer jusqu'au taux plein */}
                <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">Dupliquer jusqu'au taux plein</h4>
                      <p className="text-sm text-gray-600 mb-3">Projeter les années manquantes pour atteindre le taux plein avec inflation</p>
                    </div>
                  </div>

                  <div className="ml-13 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inflation annuelle des revenus (%)
                      </label>
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(parseFloat(e.target.value) || 0)}
                        min="0"
                        max="10"
                        step="0.1"
                        className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </div>

                    <button
                      onClick={projeterJusquAuTauxPlein}
                      className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-medium"
                    >
                      Projeter jusqu'au taux plein
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCompleteCarriereModal(false)}
                className="mt-6 w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Modal Légende */}
        {showLegendeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Info className="w-6 h-6 text-blue-600" />
                  Légende - États des enregistrements
                </h3>
                <button
                  onClick={() => setShowLegendeModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Enregistrement incohérent */}
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-medium">
                      <AlertCircle className="w-4 h-4" />
                      <span>Enregistrement incohérent</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Les données enregistrées par les caisses ne sont pas cohérentes entre elles ou avec les règles des caisses de retraites correspondantes ou avec le profil de l'assuré saisi dans Vault.
                  </p>
                </div>

                {/* Enregistrement cohérent */}
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>Enregistrement cohérent</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Les données enregistrées par les caisses sont cohérentes entre elles et avec les règles des caisses de retraites correspondantes et avec le profil de l'assuré saisi dans Vault.
                  </p>
                </div>

                {/* Enregistrement absent */}
                <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                      <Info className="w-4 h-4" />
                      <span>Enregistrement absent</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Il y a une absence de donnée sur une période alors que le profil de l'assuré nécessite un enregistrement auprès des caisses.
                  </p>
                </div>

                {/* Enregistrement corrigé */}
                <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm font-medium">
                      <Edit3 className="w-4 h-4" />
                      <span>Enregistrement corrigé</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    L'enregistrement a été corrigé dans Vault pour être en cohérence avec le profil de l'assuré et les règles des caisses de retraites. Rendez-vous dans la section Suivi dossier pour régulariser l'enregistrement auprès de la caisse concernée.
                  </p>
                </div>

                {/* Enregistrement certifié */}
                <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                      <Shield className="w-4 h-4" />
                      <span>Enregistrement certifié</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Des documents ont été transmis à la plateforme Vault et ont permis de vérifier que l'enregistrement auprès des caisses est conforme au profil de l'assuré et aux cotisations qui ont réellement été effectuées.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowLegendeModal(false)}
                className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        {activeSection === 'projections' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                Tableau comparatif des pensions par âge de départ
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="py-3 px-4 text-left font-bold border border-blue-700" rowSpan="2">Âge de départ</th>
                      <th className="py-3 px-4 text-left font-bold border border-blue-700" rowSpan="2">Date de départ</th>
                      {carrieres.map((carriere) => (
                        <th key={`${carriere.id}-nette`} colSpan="3" className="py-3 px-4 text-center font-bold border border-blue-700">
                          {carriere.nom}
                        </th>
                      ))}
                    </tr>
                    <tr className="bg-blue-500 text-white">
                      {carrieres.map((carriere) => (
                        <React.Fragment key={`${carriere.id}-headers`}>
                          <th className="py-2 px-4 text-center text-xs border border-blue-600">Net mensuel</th>
                          <th className="py-2 px-4 text-center text-xs border border-blue-600">Net annuel</th>
                          <th className="py-2 px-4 text-center text-xs border border-blue-600">Cumul sur espérance de vie</th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      // Précalculer tous les gains cumulés pour trouver le maximum
                      const agesAvecMois = [
                        { age: 60, mois: 0 },
                        { age: 60, mois: 6 },
                        { age: 61, mois: 0 },
                        { age: 61, mois: 6 },
                        { age: 62, mois: 0 },
                        { age: 62, mois: 6 },
                        { age: 63, mois: 0 },
                        { age: 63, mois: 6 },
                        { age: 64, mois: 0 },
                        { age: 64, mois: 6 },
                        { age: 65, mois: 0 },
                        { age: 65, mois: 6 },
                        { age: 66, mois: 0 },
                        { age: 66, mois: 6 },
                        { age: 67, mois: 0 }
                      ];

                      const ageTauxPlein = 62;
                      const esperanceVie = 85;
                      const dateNaissance = new Date(1983, 0, 1); // 1er janvier 1983 (exemple)

                      // Calculer tous les cumuls pour trouver le max par carrière
                      const cumulesParCarriere = carrieres.map(carriere => {
                        return agesAvecMois.map(({ age, mois }) => {
                          const ageDecimal = age + (mois / 12);
                          const anneesRetraite = esperanceVie - ageDecimal;

                          const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
                          const totalPointsBase = carriere.data.reduce((sum, ligne) => sum + ligne.pointsBase, 0);
                          const totalPointsComplementaires = carriere.data.reduce((sum, ligne) => sum + ligne.pointsComplementaires, 0);

                          const valeurPointBase = 0.6734;
                          const valeurPointComplementaire = 1.4159;

                          const pensionBase = totalPointsBase * valeurPointBase * 12;
                          const pensionComplementaire = totalPointsComplementaires * valeurPointComplementaire * 12;
                          let pensionBruteAnnuelle = pensionBase + pensionComplementaire;

                          if (age < ageTauxPlein) {
                            const anneesDecote = ageTauxPlein - age - (mois / 12);
                            const tauxDecote = 1 - (anneesDecote * 0.05);
                            pensionBruteAnnuelle = pensionBruteAnnuelle * Math.max(tauxDecote, 0.75);
                          } else if (age > ageTauxPlein || (age === ageTauxPlein && mois > 0)) {
                            const anneesSurcote = age - ageTauxPlein + (mois / 12);
                            const tauxSurcote = 1 + (anneesSurcote * 0.05);
                            pensionBruteAnnuelle = pensionBruteAnnuelle * tauxSurcote;
                          }

                          const pensionNetteAnnuelle = pensionBruteAnnuelle * 0.9;
                          const pensionCumulee = pensionNetteAnnuelle * anneesRetraite;

                          return pensionCumulee;
                        });
                      });

                      // Trouver le maximum par carrière
                      const maxParCarriere = cumulesParCarriere.map(cumules => Math.max(...cumules));

                      return agesAvecMois.map(({ age, mois }, idx) => {
                        const ageDecimal = age + (mois / 12);
                        const anneesRetraite = esperanceVie - ageDecimal;

                        // Calculer la date de départ
                        const dateDepart = new Date(dateNaissance);
                        dateDepart.setFullYear(dateNaissance.getFullYear() + age);
                        dateDepart.setMonth(dateNaissance.getMonth() + mois);

                        const jour = dateDepart.getDate();
                        const jourFormate = jour === 1 ? '1er' : jour;
                        const moisNoms = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
                        const dateFormatee = `${jourFormate} ${moisNoms[dateDepart.getMonth()]} ${dateDepart.getFullYear()}`;

                        // Formater l'âge
                        const ageFormate = mois === 0 ? `${age} ans` : `${age} ans et ${mois} mois`;

                        return (
                          <tr key={`${age}-${mois}`} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-4 font-bold text-gray-800 border border-gray-300">
                              {ageFormate}
                              {age === ageTauxPlein && mois === 0 && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Taux plein</span>}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600 border border-gray-300">
                              {dateFormatee}
                            </td>
                            {carrieres.map((carriere, carriereIdx) => {
                              const totalTrimestres = carriere.data.reduce((sum, ligne) => sum + ligne.trimestres, 0);
                              const totalPointsBase = carriere.data.reduce((sum, ligne) => sum + ligne.pointsBase, 0);
                              const totalPointsComplementaires = carriere.data.reduce((sum, ligne) => sum + ligne.pointsComplementaires, 0);

                              const valeurPointBase = 0.6734;
                              const valeurPointComplementaire = 1.4159;

                              const pensionBase = totalPointsBase * valeurPointBase * 12;
                              const pensionComplementaire = totalPointsComplementaires * valeurPointComplementaire * 12;
                              let pensionBruteAnnuelle = pensionBase + pensionComplementaire;

                              if (age < ageTauxPlein) {
                                const anneesDecote = ageTauxPlein - age - (mois / 12);
                                const tauxDecote = 1 - (anneesDecote * 0.05);
                                pensionBruteAnnuelle = pensionBruteAnnuelle * Math.max(tauxDecote, 0.75);
                              } else if (age > ageTauxPlein || (age === ageTauxPlein && mois > 0)) {
                                const anneesSurcote = age - ageTauxPlein + (mois / 12);
                                const tauxSurcote = 1 + (anneesSurcote * 0.05);
                                pensionBruteAnnuelle = pensionBruteAnnuelle * tauxSurcote;
                              }

                              const pensionNetteAnnuelle = pensionBruteAnnuelle * 0.9;
                              const pensionNetteMensuelle = pensionNetteAnnuelle / 12;
                              const pensionCumulee = pensionNetteAnnuelle * anneesRetraite;

                              // Vérifier si c'est le maximum pour cette carrière
                              const isMax = Math.abs(pensionCumulee - maxParCarriere[carriereIdx]) < 1;

                              return (
                                <React.Fragment key={`${carriere.id}-${age}-${mois}`}>
                                  <td className="py-3 px-4 text-right text-sm text-gray-700 border border-gray-300">
                                    {pensionNetteMensuelle.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
                                  </td>
                                  <td className="py-3 px-4 text-right font-semibold text-gray-800 border border-gray-300">
                                    {pensionNetteAnnuelle.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
                                  </td>
                                  <td className={`py-3 px-4 text-right font-semibold border border-gray-300 ${isMax ? 'bg-green-100 text-green-800' : 'text-blue-700'}`}>
                                    {pensionCumulee.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} €
                                    {isMax && <span className="ml-2 text-xs">⭐</span>}
                                  </td>
                                </React.Fragment>
                              );
                            })}
                          </tr>
                        );
                      });
                    })()}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2">Légende et hypothèses</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• <strong>Âge du taux plein :</strong> 62 ans (âge légal)</li>
                  <li>• <strong>Décote :</strong> -5% par année de départ avant 62 ans (minimum 75% de la pension)</li>
                  <li>• <strong>Surcote :</strong> +5% par année de départ après 62 ans</li>
                  <li>• <strong>Espérance de vie :</strong> 85 ans (estimation)</li>
                  <li>• <strong>Prélèvements sociaux :</strong> 10% (CSG + CRDS)</li>
                  <li>• <strong>Pension nette annuelle :</strong> Avant impôt sur le revenu</li>
                  <li>• <strong>Cumul sur espérance de vie :</strong> Pension annuelle × (85 ans - âge de départ)</li>
                </ul>
              </div>
            </div>

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

              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Section en cours</p>
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
