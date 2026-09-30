import React from 'react';

export const articleData: Record<string, any> = {
  'bpc-157': {
    title: 'BPC-157',
    badge: 'PRIMARY OVERVIEW',
    leftTags: ['Tissue REPAIR', 'RECOVERY', 'HEALING POTENTIAL'],
    bgImage: '/dfeerewev44.png', 
    footerTitle: 'What is BPC-157? Evidence, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what BPC-157 is, how it works, the potential benefits for tissue repair and recovery, and what the current research says — including important safety considerations.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'tb-500': {
    title: 'TB-500',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'THYMOSIN BETA 4',
    leftTags: ['TISSUE REPAIR', 'MUSCULAR RECOVERY', 'ENHANCED MOBILITY'],
    bgImage: '/2343443333.png', 
    rightHexImage: '/image 203.png', // The single composite image containing all 3 hexes (194x610)
    rightHexText: [
      { 
        title: 'MUSCLE REPAIR', 
        desc: 'Supports muscle and soft tissue recovery.' 
      },
      { 
        title: 'TENDON HEALTH', 
        desc: 'May promote tendon and ligament regeneration.' 
      },
      { 
        title: 'IMPROVED CIRCULATION', 
        desc: 'Supports blood vessel formation (angiogenesis).' 
      }
    ],
    footerTitle: 'Thymosin Beta-4 (TB-500): A Comprehensive Review of Biological Functions and Therapeutic Potential',
    footerDesc: 'An easy-to-understand overview of what TB-500 is, how it works, the potential benefits for tissue repair and recovery, and what the current research says.',
    publisher: 'Frontiers In Pharmacology',
    year: '2023',
  },

  'ghk-cu': {
    title: 'GHK-Cu',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'COPPER TRIPEPTIDE-1',
    leftTags: ['SKIN REJUVENATION', 'TISSUE REPAIR', 'CELLULAR HEALTH', 'ANTI-INFLAMMATORY'],
    bgImage: '/2434weurhwer.png', 
    rightHexText: [
      { 
        title: 'SKIN REJUVENATION', 
        desc: 'May support collagen, elastin and healthier skin appearance.' 
      },
      { 
        title: 'TISSUE REPAIR', 
        desc: 'Supports cellular repair and wound healing processes.' 
      },
      { 
        title: 'ANTI-INFLAMMATORY', 
        desc: 'May help modulate inflammation and support overall tissue health.' 
      }
    ],
    footerTitle: 'GHK-Cu: A Comprehensive Review of its Biological Activities, Therapeutic Potential and Safety',
    footerDesc: 'An easy-to-understand overview of GHK-Cu, including what it is, how it works, and current research findings.',
    publisher: 'International Journal of Molecular Sciences',
    year: '2018',
  },

 '5-amino-1mq': {
    title: '5-AMINO-1MQ',
    badge: 'RESEARCH OVERVIEW',
    subtitle: '5-AMINO-1-METHYLQUINOLINIUM',
    leftTags: ['NEUROPROTECTION', 'MITOCHONDRIAL SUPPORT', 'COGNITIVE FUNCTION', 'CELLULAR ENERGY'],
    bgImage: '/KLOW Background.png', 
    rightHexText: [
      { 
        title: 'SKIN REJUVENATION', 
        desc: 'May support collagen, elastin and healthier skin appearance.' 
      },
      { 
        title: 'TISSUE REPAIR', 
        desc: 'Supports cellular repair and wound healing processes.' 
      },
      { 
        title: 'ANTI-INFLAMMATORY', 
        desc: 'May help modulate inflammation and support overall tissue health.' 
      }
    ],
    footerTitle: '5-Amino-1MQ: Emerging Research on a Mitochondrial Target for Cognitive Health and Neuroprotection',
    footerDesc: 'An easy-to-understand overview of 5-Amino-1MQ, including what it is, how it may support brain health and cellular energy, and important safety considerations.',
    publisher: 'Frontiers In Aging Neuroscience',
    year: '2023',
  },

  'retatrutide': {
    title: 'RETATRUTIDE',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'TRIPLE AGONIST (GLP-1 / GIP / GLUCAGON)',
    leftTags: ['WEIGHT MANAGEMENT', 'METABOLIC HEALTH', 'CARDIOVASCULAR SUPPORT', 'IMPROVED BODY COMPOSITION'],
    bgImage: '/image 205.png', 
    rightHexText: [
      { 
        title: 'APPETITE REGULATION', 
        desc: 'May help reduce hunger and support healthy eating behaviours.' 
      },
      { 
        title: 'METABOLIC HEALTH', 
        desc: 'May help improve insulin sensitivity and metabolic function.' 
      },
      { 
        title: 'CARDIOVASCULAR SUPPORT', 
        desc: 'May support cardiometabolic health.' 
      },
      { 
        title: 'LEAN MASS PRESERVATION', 
        desc: 'May help support lean muscle during weight loss.' 
      }
    ],
    footerTitle: 'Retatrutide: A Triple-Hormone Agonist for Obesity and Metabolic Disease — What the Research Shows',
    footerDesc: 'An easy-to-understand overview of retatrutide, including what it is, how it works as a triple agonist, current research findings, and important safety considerations.',
    publisher: 'The New England Journal Of Medicine',
    year: '2023',
  },

  'tirzepatide': {
    title: 'TIRZEPATIDE',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'DUAL AGONIST (GLP-1 / GIP)',
    leftTags: ['APPETITE REGULATION', 'METABOLIC HEALTH', 'WEIGHT MANAGEMENT', 'IMPROVED BODY COMPOSITION'],
    bgImage: '/image 207.png', 
    rightHexText: [
      { 
        title: 'APPETITE REGULATION', 
        desc: 'May help reduce hunger and support healthy eating behaviours.' 
      },
      { 
        title: 'METABOLIC HEALTH', 
        desc: 'May help improve insulin sensitivity and metabolic function.' 
      },
      { 
        title: 'WEIGHT MANAGEMENT', 
        desc: 'May support clinically significant weight loss.' 
      },
      { 
        title: 'LEAN MASS PRESERVATION', 
        desc: 'May help preserve lean muscle during weight loss.' 
      }
    ],
    footerTitle: 'Tirzepatide: A Dual GLP-1 and GIP Receptor Agonist for the Treatment of Obesity and Metabolic Disease',
    footerDesc: 'An easy-to-understand overview of tirzepatide, including what it is, how it works as a dual agonist (GLP-1 and GIP), current research findings, and important safety considerations.',
    publisher: 'The New England Journal Of Medicine',
    year: '2022',
  },

  'mots-c': {
    title: 'MOTS-C',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'CELLULAR ENERGY\nMETABOLIC HEALTH\nINSULIN SENSITIVITY',
    bgImage: '/MOTS-c Background.png', 
    rightText: (
      <>
        ACTIVATING A<br/>
        HEALTHIER<br/>
        TOMORROW
      </>
    ),
    footerTitle: 'What Is MOTS-c? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what MOTS-c is, how it works, the potential benefits for cellular energy, metabolic health and insulin sensitivity, and what the current research says.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'ss-31': {
    title: 'SS-31',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'MITOCHONDRIAL HEALTH\nCELLULAR PROTECTION\nRECOVERY & RESILIENCE',
    bgImage: '/SS-31 Background.png', 
    rightText: (
      <>
        SUPPORTING<br/>
        HEALTHIER CELLS<br/>
        LONGER
      </>
    ),
    footerTitle: 'What Is SS-31? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what SS-31 is, how it works, the potential benefits for mitochondrial health and cellular protection, and what the current research says.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'semax': {
    title: 'SEMAX',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'COGNITIVE PERFORMANCE\nNEUROPROTECTION\nFOCUS & EMOTIONAL BALANCE',
    bgImage: '/SEMAX Background.png', 
    rightText: (
      <>
        ADVANCING BRAIN<br/>
        HEALTH THROUGH<br/>
        SCIENCE
      </>
    ),
    footerTitle: 'What Is SEMAX? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what SEMAX is, how it works, the potential benefits for cognitive performance and neuroprotection, and what the current research says.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'wolverine': {
    title: 'WOLVERINE',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'BPC-157 10MG | TB-500 10MG\nSYNERGISTIC SUPPORT FOR TISSUE\nREPAIR & RECOVERY',
    bgImage: '/WOLVERINE Background.png', 
    leftIcons: [
      { label: 'TISSUE REPAIR', icon: '/Group 34.png' },
      { label: 'ENHANCED HEALING', icon: '/Group 35.png' },
      { label: 'IMPROVED MOBILITY', icon: '/Group 36.png' },
      { label: 'RECOVERY SUPPORT', icon: '/Group 37.png' }
    ],
    rightText: (
      <>
        <span className="text-[#B98135]">TB-500:</span> SUPPORTS<br/>
        CELLULAR REPAIR &<br/>
        ANGIOGENESIS<br/>
        <span className="text-[#B98135]">BPC-157:</span> PROMOTES<br/>
        TISSUE HEALING & GUT<br/>
        SUPPORT REBUILD<br/>
        RECOVER MOVE FORWARD
      </>
    ),
    footerTitle: 'What Is WOLVERINE? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what WOLVERINE is, how it works, the potential benefits for tissue repair and recovery support, and what the current research says.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'klow': {
    title: 'KLOW',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'GHK-Cu 50MG | BPC-157 10MG |\nTB-500 10MG | KPV 10MG',
    leftTags: ['REPAIR | REGENERATE | RESTORE | OPTIMIZE'],
    bgImage: '/image 169.png', 
    rightText: (
      <>
        REPAIR |<br/>
        REGENERATE |<br/>
        RESTORE | OPTIMIZE
      </>
    ),
    footerTitle: 'What Is KLOW? Research, Benefits & Safety',
    footerDesc: 'An easy-to-understand overview of what KLOW is, how its four complementary peptides work together, the potential benefits for tissue repair, recovery and overall wellness.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'glow': {
    title: 'GLOW',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'GHK-Cu 50MG | BPC-157 10MG |\nTB-500 10MG',
    leftTags: ['REPAIR | REGENERATE | RESTORE | OPTIMIZE'],
    bgImage: '/GLOW Background 1.png', 
    rightText: (
      <>
        SKIN HEALTH.<br/>
        TISSUE REPAIR.<br/>
        REGENERATION.<br/>
        LONGEVITY. RADIANT<br/>
        POTENTIAL.
      </>
    ),
    footerTitle: 'What Is GLOW? Research, Benefits & Safety',
    footerDesc: 'An easy-to-understand overview of what GLOW is, how its complementary peptides work together, the potential benefits for skin health, tissue repair and overall regenerative support.',
    publisher: 'The Peptide Center',
    year: '2024',
  },

  'tesamorelin': {
    title: 'TESAMORELIN',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'VISCERAL FAT REDUCTION\nGROWTH HORMONE SUPPORT\nSLEEP & RECOVERY',
    bgImage: '/TESAMORELINE Background.png', 
    rightText: (
      <>
        CELLULAR RENEWAL<br/>
        METABOLIC<br/>
        BALANCE
      </>
    ),
    footerTitle: 'What Is Tesamorelin? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what tesamorelin is, how it works, the potential benefits for visceral fat reduction and growth hormone support, and what the current research says.',
    publisher: 'The Peptide Center',
    year: '2024',
  },
  'selank': {
    title: 'SELANK',
    badge: 'RESEARCH OVERVIEW',
    subtitle: 'ANXIOLYTIC SUPPORT\nSTRESS RESILIENCE\nCOGNITIVE CLARITY',
    bgImage: '/SELANK Background.png', 
    rightText: (
      <>
        SUPPORTING<br/>
        BALANCE IN A<br/>
        STRESSFUL WORLD
      </>
    ),
    footerTitle: 'What Is SELANK? Benefits, Research & Safety',
    footerDesc: 'An easy-to-understand overview of what SELANK is, how it works, the potential benefits for anxiety support and cognitive clarity, and what the current research says — including important safety considerations.',
    publisher: 'The Peptide Center',
    year: '2024',
  }
};