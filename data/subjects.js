module.exports = {
  "Higher Math": {
    icon: "🧮",
    title: "HSC Higher Mathematics 2nd Paper",
    tiers: {
      S: {
        name: "S-Tier: Top Priority",
        chapters: [
          { num: 4, name: "Polynomials & Equations", cqRange: "1.5-2.5", importance: 95 },
          { num: 6, name: "Conics", cqRange: "1.5-2.5", importance: 95 },
          { num: 7, name: "Inverse Trig & Equations", cqRange: "1-2", importance: 85 },
          { num: 8, name: "Statics", cqRange: "2-3", importance: 90 },
          { num: 9, name: "Dynamics", cqRange: "2-3", importance: 90 },
          { num: 3, name: "Complex Numbers", cqRange: "1-1.5", importance: 88 },
          { num: 5, name: "Binomial Expansion", cqRange: "0.5-1", importance: 80 }
        ]
      },
      A: {
        name: "A-Tier: Essential Chapters",
        chapters: [
          { num: 2, name: "Straight Line", cqRange: "0.5-1", importance: 75 },
          { num: 10, name: "Probability", cqRange: "0.5-1", importance: 70 }
        ]
      },
      B: {
        name: "B-Tier: Backup Chapter",
        chapters: [
          { num: 1, name: "Real Numbers & Inequalities", cqRange: "0-0.5", importance: 55 }
        ]
      }
    },
    stats: {
      totalChapters: 10,
      totalCQ: 18.5,
      sTierHours: 70,
      estimatedCreativeQs: 5
    },
    checklist: [
      "Symmetric functions of roots; Common roots (quadratic/cubic); Nature of roots",
      "Deriving equations (Parabola/Ellipse/Hyperbola) from focal distance/directrix; Eccentricity; Tangents/Normals",
      "Proving complex inverse trigonometric identities; Solving functional equations",
      "Lami's Theorem applications; Equilibrium of concurrent forces",
      "Projectile motion (range, trajectory); Motion under gravity",
      "De Moivre's theorem; Properties of roots of unity; Proofs involving modulus and argument",
      "General term, Middle term, Independent term, Coefficient finding",
      "Angle between lines; Distance formula; Equation of line in various forms"
    ],
    studyPlan: [4, 6, 7, 8, 9, 3, 5, 2, 10, 1]
  },

  "Physics": {
    icon: "⚛️",
    title: "HSC Physics 2nd Paper",
    tiers: {
      S: {
        name: "S-Tier: Top Priority",
        chapters: [
          { num: 1, name: "Thermodynamics", cqRange: "1-2", importance: 95 },
          { num: 3, name: "Current Electricity", cqRange: "1-2", importance: 95 },
          { num: 7, name: "Physical Optics", cqRange: "1", importance: 90 },
          { num: 9, name: "Atomic Model & Nuclear Physics", cqRange: "1", importance: 92 }
        ]
      },
      A: {
        name: "A-Tier: Important",
        chapters: [
          { num: 2, name: "Electrostatics", cqRange: "1", importance: 75 },
          { num: 8, name: "Modern Physics", cqRange: "1", importance: 78 }
        ]
      },
      B: {
        name: "B-Tier: Standard",
        chapters: [
          { num: 10, name: "Semiconductors", cqRange: "0.7-1", importance: 58 },
          { num: 4, name: "Magnetism", cqRange: "0.5-1", importance: 55 },
          { num: 5, name: "Electromagnetic Induction", cqRange: "0.5-1", importance: 50 },
          { num: 6, name: "Geometrical Optics", cqRange: "0.4-1", importance: 45 }
        ]
      }
    },
    stats: {
      totalChapters: 10,
      totalCQ: 16.5,
      sTierHours: 65,
      estimatedCreativeQs: 5
    },
    checklist: [
      "First Law, Entropy, Adiabatic process, Carnot cycle",
      "Coulomb's Law and electric field intensity",
      "Kirchhoff's laws and circuit analysis",
      "Why is the Carnot engine ideal? Explain the two statements of the Second Law",
      "Coherent source, Huygen's Principle, Diffraction grating",
      "Explain aberration in slits. Explain the effect of immersion (water) on fringe width",
      "Inertial frame, Photoelectric effect, de Broglie wavelength",
      "Explain the relativity of length/time/mass. Explain wave-particle duality",
      "Mass defect, Binding energy, Nuclear fission/decay",
      "Explain fusion vs. fission properties. Explain the application of the decay formula",
      "Forward/reverse bias, Transistor alpha/beta, Logic gate",
      "Explain diode characteristics graphs. Explain voltage/power amplification"
    ],
    studyPlan: [3, 9, 1, 7, 2, 8, 10, 4, 5, 6]
  },

  "Chemistry": {
    icon: "🧪",
    title: "HSC Chemistry 2nd Paper",
    tiers: {
      S: {
        name: "S-Tier: Top Priority",
        chapters: [
          { num: 2, name: "Organic Chemistry", cqRange: "3-4", importance: 95 },
          { num: 3, name: "Quantitative Chemistry", cqRange: "1-2", importance: 93 },
          { num: 4, name: "Electrochemistry", cqRange: "1-2", importance: 90 }
        ]
      },
      A: {
        name: "A-Tier: Important",
        chapters: [
          { num: 1, name: "Environmental Chemistry", cqRange: "1-2", importance: 75 }
        ]
      },
      B: {
        name: "B-Tier: Standard",
        chapters: [
          { num: 5, name: "Economic Chemistry", cqRange: "0-1", importance: 58 }
        ]
      }
    },
    stats: {
      totalChapters: 5,
      totalCQ: 17,
      sTierHours: 68,
      estimatedCreativeQs: 5
    },
    checklist: [
      "Aromatic Electrophilic Substitution (EAS) mechanisms",
      "Differentiation tests (Carbyl Amine, Iodoform, Tollen's/Fehling's)",
      "Titration problems and purity calculations",
      "Nernst equation applications",
      "Faraday's Laws of Electrolysis",
      "BOD methodology and calculations",
      "Gas deviation analysis using compressibility factor",
      "Acid rain and greenhouse gases"
    ],
    studyPlan: [2, 3, 4, 1, 5]
  },

  "Biology": {
    icon: "🧬",
    title: "HSC Biology 2nd Paper (Zoology)",
    tiers: {
      S: {
        name: "S-Tier: Top Priority",
        chapters: [
          { num: 4, name: "Blood and Circulation", cqRange: "1-2", importance: 95 },
          { num: 6, name: "Waste and Excretion", cqRange: "1-2", importance: 98 },
          { num: 11, name: "Genetics and Evolution", cqRange: "1-2", importance: 93 }
        ]
      },
      A: {
        name: "A-Tier: Important",
        chapters: [
          { num: 2, name: "Hydra & Grasshopper", cqRange: "0.8-1", importance: 75 },
          { num: 1, name: "Animal Diversity", cqRange: "0.5-1", importance: 78 }
        ]
      },
      B: {
        name: "B-Tier: Standard",
        chapters: [
          { num: 3, name: "Human Reproduction", cqRange: "0.5-1", importance: 60 },
          { num: 5, name: "Plant Diversity", cqRange: "0.5-1", importance: 55 },
          { num: 7, name: "Biotechnology", cqRange: "0.5-1", importance: 50 },
          { num: 8, name: "Ecology & Environment", cqRange: "0.5-1", importance: 45 },
          { num: 9, name: "Biodiversity Conservation", cqRange: "0.5-1", importance: 40 },
          { num: 10, name: "Evolution", cqRange: "0.5-1", importance: 40 }
        ]
      }
    },
    stats: {
      totalChapters: 11,
      totalCQ: 19,
      sTierHours: 75,
      estimatedCreativeQs: 6
    },
    checklist: [
      "Structure of the Human Heart and Cardiac Cycle",
      "Structure of the Nephron and Urine Formation",
      "Dihybrid cross and Test Cross using Punnett Square",
      "Mechanism of Nematocyst Firing",
      "Classification Hierarchy and Symmetry types",
      "Coelom types (Acoelomate, Pseudocoelomate, Coelomate)",
      "Rh-Factor Incompatibility during pregnancy",
      "Apposition vs. Superposition Vision"
    ],
    studyPlan: [6, 4, 11, 2, 1, 3, 5, 7, 8, 9, 10]
  },

  "ICT": {
    icon: "💻",
    title: "HSC ICT",
    tiers: {
      S: {
        name: "S-Tier: The Numerical Core",
        chapters: [
          { num: 3.1, name: "Number System", cqRange: "1.0-1.5", importance: 95 },
          { num: 4, name: "Web Design & HTML", cqRange: "1.0-1.2", importance: 92 },
          { num: 5, name: "Programming Language (C)", cqRange: "1.0-1.3", importance: 95 }
        ]
      },
      A: {
        name: "A-Tier: The Hybrid Cluster",
        chapters: [
          { num: 3.2, name: "Digital Devices", cqRange: "1.0", importance: 80 },
          { num: 2, name: "Networking", cqRange: "0.8", importance: 75 }
        ]
      },
      B: {
        name: "B-Tier: Backup & Short Questions",
        chapters: [
          { num: 6, name: "Database", cqRange: "0.6-1", importance: 58 },
          { num: 1, name: "ICT World", cqRange: "0.5-1", importance: 55 }
        ]
      }
    },
    stats: {
      totalChapters: 6,
      totalCQ: 16.5,
      sTierHours: 62,
      estimatedCreativeQs: 5
    },
    checklist: [
      "Binary arithmetic (2's complement subtraction)",
      "Base conversions (Binary, Octal, Decimal, Hexadecimal)",
      "Writing HTML code for Tables and Forms",
      "C programming (Factorial, Fibonacci, Sum of Series)",
      "Deriving/Simplifying Boolean expressions",
      "Designing circuits for Half/Full Adders",
      "Comparing transmission modes (Simplex, Half-Duplex, Full-Duplex)",
      "Writing basic SQL queries (SELECT, INSERT, UPDATE)"
    ],
    studyPlan: [3.1, 4, 5, 3.2, 2, 6, 1]
  },

  "English": {
    icon: "📚",
    title: "HSC English 2nd Paper",
    tiers: {
      S: {
        name: "S-Tier: Strategic Mastery (Grammar)",
        chapters: [
          { num: 6, name: "Change of Sentences", cqRange: "0.5-1", importance: 95 },
          { num: 7, name: "Narration", cqRange: "0.5-1", importance: 95 },
          { num: 5, name: "Right Form of Verbs", cqRange: "0.5-1", importance: 98 }
        ]
      },
      A: {
        name: "A-Tier: Foundation & Consistency",
        chapters: [
          { num: 2, name: "Prepositions", cqRange: "0.5-1", importance: 75 },
          { num: 4, name: "Completing Sentence", cqRange: "0.5-1", importance: 78 },
          { num: 8, name: "Punctuation", cqRange: "0.5-1", importance: 78 },
          { num: 10, name: "Composition Writing (Essays)", cqRange: "1-1.5", importance: 80 }
        ]
      },
      B: {
        name: "B-Tier: Contextual Application",
        chapters: [
          { num: 1, name: "Articles", cqRange: "0.5-1", importance: 60 },
          { num: 3, name: "Phrases & Clauses (Special Uses)", cqRange: "0.5-1", importance: 58 },
          { num: 11, name: "Formal Letter/E-mail", cqRange: "1-1.5", importance: 65 },
          { num: 12, name: "Report Writing", cqRange: "1-1.5", importance: 63 },
          { num: 13, name: "Paragraph Writing", cqRange: "1-1.5", importance: 62 }
        ]
      }
    },
    stats: {
      totalChapters: 13,
      totalCQ: 20,
      sTierHours: 80,
      estimatedCreativeQs: 6
    },
    checklist: [
      "Active to Passive conversion rules",
      "Tense shifting in narration",
      "Gerunds vs. Infinitives usage",
      "Punctuation precision (semicolons and colons)",
      "Preposition usage in context",
      "Sentence completion with proper grammar",
      "Article usage rules",
      "Structural blueprints for essays"
    ],
    studyPlan: [5, 6, 7, 10, 2, 4, 8, 11, 12, 13, 1, 3]
  },

  "Bangla": {
    icon: "🇧🇩",
    title: "HSC Bangla 2nd Paper",
    tiers: {
      S: {
        name: "S-Tier: Top Priority Units",
        chapters: [
          { num: 1, name: "উচ্চারণ রীতি (Pronunciation)", cqRange: "0.5", importance: 98 },
          { num: 2, name: "পারিভাষিক শব্দ (Technical Terms)", cqRange: "0.5", importance: 95 },
          { num: 3, name: "বাংলা বানান শুদ্ধিকরণ (Spelling)", cqRange: "0.5", importance: 92 },
          { num: 4, name: "প্রবন্ধ রচনা (Essay)", cqRange: "1.5-2", importance: 98 },
          { num: 5, name: "প্রতিবেদন (Report Writing)", cqRange: "1", importance: 90 },
          { num: 6, name: "আবেদনপত্র / ই-মেইল (Application)", cqRange: "1", importance: 88 }
        ]
      },
      A: {
        name: "A-Tier: Essential Units",
        chapters: [
          { num: 7, name: "সমাস ও প্রত্যয় (Compounds/Suffixes)", cqRange: "0.5", importance: 78 },
          { num: 8, name: "সারাংশ/সারমর্ম (Summary)", cqRange: "1", importance: 75 },
          { num: 9, name: "বাক্য রূপান্তর/শুদ্ধিকরণ (Transformation/Correction)", cqRange: "0.5", importance: 70 }
        ]
      },
      B: {
        name: "B-Tier: Backup Unit",
        chapters: [
          { num: 10, name: "ব্যাকরণিক শব্দশ্রেণি (Word Categories)", cqRange: "0.5", importance: 58 },
          { num: 11, name: "ভাবসম্প্রসারণ / সংলাপ (Idea Expansion)", cqRange: "0.5-1", importance: 55 }
        ]
      }
    },
    stats: {
      totalChapters: 11,
      totalCQ: 20.5,
      sTierHours: 82,
      estimatedCreativeQs: 6
    },
    checklist: [
      "সন্ধি বিচ্ছেদ (Sandhi)",
      "সমাস (Compound words)",
      "কারক ও বিভক্তি (Case markers)",
      "বাক্য শুদ্ধিকরণ (Sentence correction)",
      "রচনার ভূমিকা ও উপসংহার",
      "আবেদন পত্রের ফরম্যাট",
      "অনুচ্ছেদের গঠন",
      "প্রতিবেদন লেখার নিয়ম"
    ],
    studyPlan: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }
};
