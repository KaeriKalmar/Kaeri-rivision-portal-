const mcqData = [
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "What is the correct order of taxonomic ranks from most to least inclusive?",
    options: [
      "Kingdom > Phylum > Class > Order > Family > Genus > Species",
      "Domain > Kingdom > Class > Phylum > Order > Family > Genus",
      "Species > Genus > Family > Order > Class > Phylum > Kingdom",
      "Phylum > Kingdom > Class > Order > Family > Genus > Species"
    ],
    correct: 0,
    explanation: "The standard hierarchy is: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species (DKPCOFGS)."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "Which naming convention requires italics for typed scientific names?",
    options: [
      "Only at genus level",
      "Only for subspecies",
      "For both genus and species names",
      "Only for handwritten names"
    ],
    correct: 2,
    explanation: "Binomial nomenclature requires italics for both genus and species names when typed."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "What is the science of classifying organisms called?",
    options: [
      "Ecology",
      "Taxonomy",
      "Phylogenetics",
      "Nomenclature"
    ],
    correct: 1,
    explanation: "Taxonomy involves identification, naming and classification of organisms."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "Which best defines a species in biological terms?",
    options: [
      "Organisms with similar DNA",
      "Organisms that can interbreed and produce fertile offspring",
      "Organisms sharing a habitat",
      "Organisms with identical morphology"
    ],
    correct: 1,
    explanation: "Biological species concept emphasizes reproductive compatibility."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "How should you write 'Escherichia coli' when handwriting?",
    options: [
      "ESCHERICHIA COLI",
      "Escherichia coli",
      "Escherichia coli", // Corrected option (should be underlined)
      "Escherichia coli"
    ],
    correct: 2,
    explanation: "Genus capitalized, species lowercase, and underlined."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "The plural of 'phylum' is:",
    options: ["Phylum", "Phyla", "Phylae", "Phylums"],
    correct: 1,
    explanation: "Latin-derived plural: phylum → phyla."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "⭐",
    q: "Which is NOT a kingdom in Whittaker's five-kingdom system?",
    options: ["Monera", "Protista", "Fungi", "Archaea"],
    correct: 3,
    explanation: "Archaea were later separated from Monera."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "Which would be considered a tautonym?",
    options: [
      "Homo sapiens",
      "Bison bison",
      "Escherichia coli",
      "Canis lupus"
    ],
    correct: 1,
    explanation: "A tautonym has identical genus and species names (e.g., Bison bison)."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "What is the primary purpose of a dichotomous key?",
    options: [
      "To show evolutionary relationships",
      "To identify organisms based on characteristics",
      "To classify viruses",
      "To name new species"
    ],
    correct: 1,
    explanation: "Dichotomous keys use paired statements to identify organisms through observable traits."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "Which taxonomic rank is more specific than Family but more general than Species?",
    options: [
      "Order",
      "Class",
      "Genus",
      "Phylum"
    ],
    correct: 2,
    explanation: "The sequence is: Family > Genus > Species."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "Which taxonomic rank was added above Kingdom in modern systems?",
    options: ["Phylum", "Domain", "Family", "Order"],
    correct: 1,
    explanation: "The three-domain system (Bacteria, Archaea, Eukarya) sits above Kingdoms."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "What is the primary purpose of binomial nomenclature?",
    options: [
      "To show evolutionary relationships",
      "To provide unique, universal names for species",
      "To classify organisms by habitat",
      "To identify viral strains"
    ],
    correct: 1,
    explanation: "Ensures each species has a standardized two-part name globally."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "What is the term for naming a species after its discoverer?",
    options: [
      "Tautonym",
      "Eponym",
      "Synonym",
      "Homonym"
    ],
    correct: 1,
    explanation: "E.g., 'smithii' honors a person named Smith."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "Which is true about type specimens?",
    options: [
      "They must be fossils",
      "They can be photos or drawings",
      "They serve as permanent references",
      "They are only for plants"
    ],
    correct: 2,
    explanation: "Preserved specimens anchor the definition of a species name."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "Hybrid organisms are named by:",
    options: [
      "Combining parent species names",
      "Using the mother's species name",
      "Creating a new genus",
      "Adding 'x' before the species name"
    ],
    correct: 3,
    explanation: "E.g., Quercus × alba for a hybrid oak."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🟩",
    q: "The International Code of Nomenclature for algae, fungi, and plants is abbreviated:",
    options: ["ICZN", "ICN", "ICBN", "ICNCP"],
    correct: 1,
    explanation: "ICN governs naming for these groups (was ICBN for plants)."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "What happens if a scientific name is not underlined when handwritten?",
    options: [
      "It becomes invalid",
      "It is considered provisional",
      "It violates nomenclature rules",
      "It must be italicized instead"
    ],
    correct: 2,
    explanation: "Handwritten scientific names must be underlined to substitute for italics."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "Which statement about type specimens is correct?",
    options: [
      "They show evolutionary relationships",
      "They serve as permanent references for species names",
      "They are only used for fossil species",
      "They represent hybrid organisms"
    ],
    correct: 1,
    explanation: "Type specimens are preserved examples that anchor the definition of a species."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "If two scientists name the same species differently, which name has priority?",
    options: [
      "The more descriptive name",
      "The name published first",
      "The name in Latin",
      "The longer name"
    ],
    correct: 1,
    explanation: "Principle of priority favors the earliest validly published name."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "Which is NOT a requirement for a valid species name?",
    options: [
      "Must be in Latin or Latinized",
      "Must be underlined when handwritten",
      "Must include the discoverer's name",
      "Must be unique for the genus"
    ],
    correct: 2,
    explanation: "Discoverer names are optional (e.g., in eponyms like 'smithii')."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "Why can't viruses be classified in the Linnaean system?",
    options: [
      "They are too small",
      "They lack cellular structure",
      "They mutate too quickly",
      "They are artificial"
    ],
    correct: 1,
    explanation: "Viruses are non-cellular and excluded from traditional taxonomy."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "❗",
    q: "Which taxonomic level is most inclusive after Domain?",
    options: ["Phylum", "Kingdom", "Class", "Order"],
    correct: 1,
    explanation: "Hierarchy: Domain → Kingdom → Phylum → Class → Order..."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "Which taxonomic tool uses molecular data like DNA sequences?",
    options: [
      "Dichotomous key",
      "Phylogenetic tree",
      "Binomial nomenclature",
      "Type specimen"
    ],
    correct: 1,
    explanation: "Phylogenetic trees visualize evolutionary relationships using genetic data."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "What is the main advantage of DNA barcoding?",
    options: [
      "Identifying species when morphology is unclear",
      "Naming new species",
      "Classifying viruses",
      "Studying fossil specimens"
    ],
    correct: 0,
    explanation: "DNA barcoding helps identify species using short genetic markers."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "What does a phylogenetic tree's branch length typically represent?",
    options: [
      "Physical size of organisms",
      "Geographic distribution",
      "Evolutionary time or divergence",
      "Number of species in a group"
    ],
    correct: 2,
    explanation: "Longer branches indicate greater evolutionary divergence."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "Which tool would you use to identify an unknown plant?",
    options: [
      "Cladogram",
      "Dichotomous key",
      "Karyotype",
      "Microscope slide"
    ],
    correct: 1,
    explanation: "Dichotomous keys use paired statements for identification."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "DNA barcoding identifies species using:",
    options: [
      "Mitochondrial genes",
      "Ribosomal proteins",
      "Cell wall composition",
      "Flagellar structure"
    ],
    correct: 0,
    explanation: "Typically uses CO1 gene in mitochondria for animals."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "A monophyletic group includes:",
    options: [
      "An ancestor and some descendants",
      "All descendants of a common ancestor",
      "Species with similar traits",
      "Unrelated species in a habitat"
    ],
    correct: 1,
    explanation: "Also called a clade - a complete evolutionary branch."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "A paraphyletic group excludes:",
    options: [
      "The common ancestor",
      "Some descendants of a common ancestor",
      "All extinct members",
      "Species with different traits"
    ],
    correct: 1,
    explanation: "E.g., Reptilia without birds is paraphyletic."
  },
  
  {
    type: "MCQ",
    topic: "Taxonomy",
    tag: "🔄",
    q: "Cyanobacteria were reclassified from plants to bacteria due to:",
    options: [
      "Lack of chloroplasts",
      "Prokaryotic cell structure",
      "Aquatic habitat",
      "Photosynthetic ability"
    ],
    correct: 1,
    explanation: "Their prokaryotic nature places them with bacteria."
  },
  { // This is the first virus question that was incomplete
    type: "MCQ",
    topic: "Viruses",
    year: "📅 2023 Test 2 Q1.i",
    tag: "⭐",
    q: "Which of the following statements supports the argument that viruses are nonliving?",
    options: ["They do not carry out metabolic processes.", "Their DNA does not encode proteins.", "They have RNA rather rather than DNA.", "They do not evolve."],
    correct: 0, // Added correct property
    explanation: "Viruses lack the cellular machinery to perform their own metabolic processes, such as generating energy or synthesizing proteins. They are like 'biological robots' that can only function and replicate by hijacking the machinery of a host cell. This absolute dependency on a host for basic life functions is a key reason they are considered nonliving entities." // Added explanation
  },
  { // This is the second virus question, which was correctly formatted
    type: "MCQ",
    topic: "Viruses",
    year: "📅 2023 Exam Q1",
    tag: "⭐❗",
    q: "Which of the following statements supports the argument that viruses are nonliving?",
    options: [
      "They do not carry out metabolic processes.",
      "Their DNA does not encode proteins.",
      "They have RNA rather than DNA.",
      "They do not evolve."
    ],
    correct: 0,
    explanation: "Viruses lack the cellular machinery to perform their own metabolic processes, such as generating energy or synthesizing proteins. Think of them like 'biological USB drives'—they must plug into a host cell to function. This absolute dependency is why they’re considered nonliving."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "📅 2023 Test 2 Q1.x",
    tag: "⭐",
    q: "In the current taxonomic system, families are grouped into:",
    options: ["classes", "phyla", "orders", "Genus"],
    correct: 2,
    explanation: "The taxonomic hierarchy (from broadest to most specific) is Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species. Therefore, families are grouped into orders. Mnemonic: 'Dear King Philip Came Over For Good Soup' helps remember the order of taxonomic ranks."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "📅 2015 Sessional Q4",
    tag: "❗",
    q: "Which of the following is not a protist?",
    options: ["Paramecium", "Plasmodium", "Penicillium", "Euglena"],
    correct: 2,
    explanation: "Paramecium, Plasmodium, and Euglena are all well-known examples of protists, a diverse kingdom of eukaryotic organisms. Penicillium, however, is a genus of fungi, known for producing the antibiotic penicillin. Think of it as 'P for Penicillium is P for Fungi', not Protista."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "📅 2021 Test 1 Q3",
    tag: "⭐",
    q: "Which taxonomic group is the most specific?",
    options: ["Phylum", "Class", "Genus", "Species"],
    correct: 3,
    explanation: "In the standard taxonomic hierarchy, 'Species' is the most specific rank, representing a group of organisms capable of interbreeding and producing fertile offspring. It's like the most detailed address in a biological classification system, narrowing down to a very specific group."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "📅 2016 Sessional Q5",
    tag: "🟩🔄",
    q: "Which of these is used to stain bacterial cell walls for classification?",
    options: ["Methylene blue", "Safranin", "Gram stain", "Crystal violet"],
    correct: 2,
    explanation: "The Gram stain is a differential staining technique used to classify bacteria into two large groups (Gram-positive and Gram-negative) based on their cell wall composition. It's not a single dye but a multi-step process involving several reagents, including crystal violet, iodine, alcohol, and safranin. Mnemonic: 'Gram = Groups' for bacterial classification."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "📅 2023 Sessional Q6",
    tag: "⭐",
    q: "Viruses are different from living organisms because they:",
    options: ["Are cellular", "Contain cytoplasm", "Lack ribosomes", "Reproduce independently"],
    correct: 2,
    explanation: "A defining characteristic of viruses is their acellular nature and lack of ribosomes. Ribosomes are essential for protein synthesis in all living cells, but viruses must rely on the host cell's ribosomes to produce their proteins. This makes them obligate intracellular parasites, unable to reproduce independently."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "📅 2014 Test 2 Q11",
    tag: "⭐",
    q: "A virus that infects bacteria is called a:",
    options: ["Phagocyte", "Bacteriophage", "Viroid", "Plasmid"],
    correct: 1,
    explanation: "A bacteriophage is a type of virus that specifically infects and replicates within bacteria. The name literally means 'bacteria eater' (from 'bacteri-' and 'phagein', to devour). Think: 'Bacteria + Phage = Bacteriophage'."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "📅 2017 Sessional Q4",
    tag: "🟩",
    q: "Trypanosoma is transmitted by which insect?",
    options: ["Anopheles mosquito", "Tsetse fly", "Tick", "Housefly"],
    correct: 1,
    explanation: "Trypanosoma brucei, the protist causing African sleeping sickness, is transmitted by the tsetse fly. It's a classic example of a vector-borne disease. Mnemonic: 'Tsetse for Trypanosoma'."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "📅 2019 Test 1 Q9",
    tag: "❗",
    q: "Which protist shows both plant and animal characteristics?",
    options: ["Amoeba", "Euglena", "Plasmodium", "Paramecium"],
    correct: 1,
    explanation: "Euglena is unique because it can perform photosynthesis like plants (due to chloroplasts) and also ingest food like animals (heterotrophic) in the absence of light. It's like a 'biological hybrid' that can switch its nutritional strategy."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "📅 2017 Test 2 Q6",
    tag: "⭐",
    q: "Plasmodium vivax causes:",
    options: ["Dengue", "Yellow fever", "Malaria", "Typhoid"],
    correct: 2,
    explanation: "Plasmodium vivax is one of the protozoan parasites that causes malaria in humans. The Plasmodium genus is notorious for causing this widespread parasitic disease. Mnemonic: 'Plasmodium = Painful Malaria'."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "📅 2014 Sessional Q10",
    tag: "⭐",
    q: "Which of the following groups is not a Kingdom in modern classification?",
    options: ["Plantae", "Monera", "Protista", "Virus"],
    correct: 3,
    explanation: "In modern biological classification, the main kingdoms are Plantae, Animalia, Fungi, Protista, and Bacteria (formerly Monera, but now often split into Bacteria and Archaea at the Domain level). Viruses are not considered a Kingdom because they are non-living entities and lack the cellular structure required for classification within the kingdoms of life."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "📅 2021 Sessional Q7",
    tag: "⭐",
    q: "All viruses contain:",
    options: ["Cytoplasm and cell wall", "DNA or RNA", "Ribosomes and nuclei", "Mitochondria and chloroplasts"],
    correct: 1,
    explanation: "The core components of any virus are its genetic material (either DNA or RNA, but not both simultaneously) and a protein coat (capsid) that protects it. Viruses lack the complex cellular structures like cytoplasm, cell walls, ribosomes, nuclei, mitochondria, and chloroplasts found in living cells."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "📅 2018 Test 2 Q4",
    tag: "🟩",
    q: "Ciliates are best represented by:",
    options: ["Amoeba", "Euglena", "Plasmodium", "Paramecium"],
    correct: 3,
    explanation: "Ciliates are a group of protists characterized by the presence of hair-like organelles called cilia, which they use for locomotion and feeding. Paramecium is the most well-known and classic example of a ciliate. Think: 'Cilia for Ciliates, like Paramecium'."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "📅 2020 Sessional Q9",
    tag: "⭐",
    q: "Which scientist developed the system of binomial nomenclature?",
    options: ["Aristotle", "Linnaeus", "Darwin", "Pasteur"],
    correct: 1,
    explanation: "Carl Linnaeus, a Swedish botanist, zoologist, and physician, is known as the 'father of modern taxonomy' for formalizing binomial nomenclature, the system of naming organisms with two terms, which are the genus and species. Mnemonic: 'Linnaeus = Latin Names'."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "📅 2014 Sessional Q1",
    tag: "⭐",
    q: "The Kingdom Animalia consists of only one correct set of organisms hereby listed as:",
    options: ["algae, amphibians, bacteria, fungi, snails", "archaea, blue-green algae, earthworms, gymnosperms, pteridophytes", "amphibians, cockroaches, earthworms, leeches, snails", "algae, angiosperms, bacteria, gymnosperms, mosses", "I do not know."],
    correct: 2,
    explanation: "The Kingdom Animalia comprises multicellular, eukaryotic organisms that are heterotrophic (obtain nutrition by consuming other organisms). From the given options, amphibians, cockroaches, earthworms, leeches, and snails are all examples of animals. Other options include non-animal organisms like algae (Protista), bacteria (Bacteria/Archaea), fungi (Fungi), gymnosperms (Plantae), and mosses (Plantae)."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "What is the primary focus of taxonomy?",
    options: [
      "Studying the behavior of organisms",
      "Describing, naming, and classifying organisms",
      "Analyzing the chemical composition of cells",
      "Investigating ecological interactions"
    ],
    correct: 1,
    explanation: "Taxonomy is the science of describing, identifying, naming, and classifying organisms into hierarchical groups based on shared characteristics or phylogenetic relationships. Option A focuses on behavior, C on chemistry, and D on ecology, which are not the primary focus of taxonomy."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Which scientist is considered the father of taxonomy?",
    options: [
      "Charles Darwin",
      "Carl Linnaeus",
      "Ernst Mayr",
      "Gregor Mendel"
    ],
    correct: 1,
    explanation: "Carl Linnaeus developed the Linnaean classification system and binomial nomenclature, earning him the title of the father of taxonomy. Darwin focused on evolution, Mayr on species concepts, and Mendel on genetics."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "In binomial nomenclature, how is the species name formatted?",
    options: [
      "Capitalized and italicized",
      "Lowercase and italicized",
      "Capitalized and not italicized",
      "Lowercase and not italicized"
    ],
    correct: 1,
    explanation: "In binomial nomenclature, the species name is lowercase and italicized (e.g., sapiens in Homo sapiens), while the genus is capitalized and italicized. Options A, C, and D do not follow these rules."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which taxonomic rank was introduced after Linnaeus time?",
    options: [
      "Kingdom",
      "Phylum",
      "Domain",
      "Class"
    ],
    correct: 2,
    explanation: "The domain rank was introduced in 1990, long after Linnaeus' classification system in 1735. Kingdom, phylum, and class were part of his original system."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "How many domains of life are recognized in modern taxonomy?",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 1,
    explanation: "Modern taxonomy recognizes three domains: Bacteria, Archaea, and Eukarya. Viruses are not included in domains, and no additional domains are recognized."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Which domain includes organisms with membrane-bound nuclei?",
    options: [
      "Bacteria",
      "Archaea",
      "Eukarya",
      "Viruses"
    ],
    correct: 2,
    explanation: "Eukarya includes organisms with membrane-bound nuclei, such as protists, fungi, plants, and animals. Bacteria and Archaea are prokaryotic, lacking nuclei, and viruses are non-cellular."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Archaea are distinguished from Bacteria by their:",
    options: [
      "Lack of a cell wall",
      "Ether-linked membrane lipids",
      "Presence of a nucleus",
      "Larger cell size"
    ],
    correct: 1,
    explanation: "Archaea have ether-linked lipids in their membranes, unlike the ester-linked lipids in Bacteria. Archaea have cell walls (not A), lack nuclei (not C), and are similar in size to Bacteria (not D)."
  },
  {
    type: "MCQ",
    topic: "Protista",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which kingdom is considered a link between plants, animals, and fungi?",
    options: [
      "Animalia",
      "Protista",
      "Fungi",
      "Plantae"
    ],
    correct: 1,
    explanation: "Protista includes organisms with traits resembling plants (algae), animals (protozoans), and fungi (slime molds), making it a link between these kingdoms. Animalia, Fungi, and Plantae are more specialized."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "What is the highest taxonomic rank in the classification hierarchy?",
    options: [
      "Kingdom",
      "Domain",
      "Phylum",
      "Class"
    ],
    correct: 1,
    explanation: "Domain is the most general taxonomic rank, followed by kingdom, phylum, and class, organizing organisms by broad cellular characteristics."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which phylum includes all vertebrate animals?",
    options: [
      "Arthropoda",
      "Chordata",
      "Mollusca",
      "Annelida"
    ],
    correct: 1,
    explanation: "Chordata includes vertebrates with a notochord or backbone. Arthropoda includes insects, Mollusca includes snails, and Annelida includes worms, none of which are vertebrates."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "The order Lepidoptera includes which organisms?",
    options: [
      "Bats",
      "Butterflies and moths",
      "Whales and dolphins",
      "Dogs and wolves"
    ],
    correct: 1,
    explanation: "Lepidoptera is the order of butterflies and moths, as established by Linnaeus. Bats (Chiroptera), whales (Cetaceans), and dogs (Carnivora) belong to different orders."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "In the order Carnivora, which family includes cats?",
    options: [
      "Canidae",
      "Felidae",
      "Ursidae",
      "Mephitidae"
    ],
    correct: 1,
    explanation: "Felidae is the family of cats in the order Carnivora. Canidae includes dogs, Ursidae includes bears, and Mephitidae includes skunks."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "What is the genus name for humans?",
    options: [
      "Sapiens",
      "Homo",
      "Hominidae",
      "Primates"
    ],
    correct: 1,
    explanation: "The genus for humans is Homo, as in Homo sapiens. Sapiens is the species, Hominidae is the family, and Primates is the order."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "How many species are estimated to exist on Earth?",
    options: [
      "8.7 million",
      "1.2 million",
      "15 million",
      "5 million"
    ],
    correct: 0,
    explanation: "The estimated number of species on Earth is 8.7 million, though most remain undiscovered. Other options are incorrect estimates."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Which language is commonly used in binomial nomenclature?",
    options: [
      "English",
      "Greek",
      "Latin",
      "French"
    ],
    correct: 2,
    explanation: "Binomial nomenclature uses Latin or Latinized forms for universal recognition, not English, Greek, or French."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "The biological species concept emphasizes:",
    options: [
      "Physical appearance",
      "Reproductive isolation",
      "Ecological niche",
      "Genetic diversity"
    ],
    correct: 1,
    explanation: "The biological species concept defines species by their ability to interbreed and be reproductively isolated. Appearance, niche, and diversity are secondary."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Why is the biological species concept not applicable to bacteria?",
    options: [
      "They lack a nucleus",
      "They reproduce asexually",
      "They are multicellular",
      "They have no cell wall"
    ],
    correct: 1,
    explanation: "Bacteria reproduce asexually via binary fission, making reproductive isolation irrelevant. They lack nuclei (A is false), are unicellular (C is false), and have cell walls (D is false)."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which organisms are known to reproduce by parthenogenesis?",
    options: [
      "Some lizards",
      "Mammals",
      "Birds",
      "Fungi"
    ],
    correct: 0,
    explanation: "Some lizards reproduce parthenogenetically, producing unfertilized eggs. Mammals, birds, and fungi typically use sexual reproduction."
  },
  {
    type: "MCQ",
    topic: "Animalia",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "What is the scientific name for the American black bear?",
    options: [
      "Ursus americanus",
      "Bufo americanus",
      "Homo sapiens",
      "Canis lupus"
    ],
    correct: 0,
    explanation: "Ursus americanus is the scientific name for the American black bear. Bufo americanus is a toad, Homo sapiens is human, and Canis lupus is a wolf."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "❗",
    q: "Hybrid zones complicate species classification because:",
    options: [
      "They prevent reproduction",
      "They allow interbreeding",
      "They isolate populations",
      "They reduce genetic diversity"
    ],
    correct: 1,
    explanation: "Hybrid zones involve interbreeding between species, blurring reproductive isolation required by the biological species concept. They do not prevent reproduction, isolate populations fully, or reduce diversity."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which phylum of Archaea includes methanogens?",
    options: [
      "Crenarchaeota",
      "Euryarchaeota",
      "Korarchaeota",
      "Proteobacteria"
    ],
    correct: 1,
    explanation: "Euryarchaeota includes methanogens, which produce methane. Crenarchaeota includes hyperthermophiles, Korarchaeota is less studied, and Proteobacteria is a bacterial phylum."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which type of bacteria is capable of photosynthesis?",
    options: [
      "Spirochetes",
      "Cyanobacteria",
      "Firmicutes",
      "Chlamydiae"
    ],
    correct: 1,
    explanation: "Cyanobacteria, also called blue-green algae, perform photosynthesis. Spirochetes, Firmicutes, and Chlamydiae do not."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Viruses are not classified in any domain because they:",
    options: [
      "Are multicellular",
      "Lack a cellular structure",
      "Have a nucleus",
      "Reproduce asexually"
    ],
    correct: 1,
    explanation: "Viruses are non-cellular, consisting of a nucleic acid and capsid, excluding them from domains. They are not multicellular, lack nuclei, and can reproduce (in hosts)."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "What is the protein coat of a virus called?",
    options: [
      "Nucleoid",
      "Capsid",
      "Envelope",
      "Sheath"
    ],
    correct: 1,
    explanation: "The protein coat of a virus is the capsid. Nucleoid is a prokaryotic DNA region, envelope is an outer layer in some viruses, and sheath is a bacteriophage structure."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "⭐",
    q: "Bacteriophages primarily infect:",
    options: [
      "Plants",
      "Animals",
      "Bacteria",
      "Fungi"
    ],
    correct: 2,
    explanation: "Bacteriophages (phages) infect bacteria, not plants, animals, or fungi, which may be infected by other viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which structure in bacteriophages attaches to the host cell?",
    options: [
      "Capsid",
      "Nucleic acid core",
      "Tail fibers",
      "Spiral sheath"
    ],
    correct: 2,
    explanation: "Tail fibers attach bacteriophages to bacterial cell wall receptors. Capsid protects nucleic acid, the core carries genes, and the sheath aids injection."
  },
  {
    type: "MCQ",
    topic: "Protista",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which kingdom was first described by Ernst Haeckel in 1886?",
    options: [
      "Animalia",
      "Protista",
      "Fungi",
      "Plantae"
    ],
    correct: 1,
    explanation: "Ernst Haeckel first described the kingdom Protista in 1886. Animalia, Fungi, and Plantae were recognized earlier."
  },
  {
    type: "MCQ",
    topic: "Protista",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Most protists are characterized by being:",
    options: [
      "Multicellular",
      "Prokaryotic",
      "Eukaryotic",
      "Non-motile"
    ],
    correct: 2,
    explanation: "Protists are eukaryotic, with membrane-bound nuclei. They can be unicellular or multicellular, motile or non-motile, and are not prokaryotic."
  },
  {
    type: "MCQ",
    topic: "Protista",
    year: "Elevate Your Potential Mentorship - TAXONOMY MCQs.pdf",
    tag: "🟩",
    q: "Which protozoan category moves using pseudopodia?",
    options: [
      "Sarcodinians",
      "Zooflagellates",
      "Ciliaphorans",
      "Sporozoans"
    ],
    correct: 0,
    explanation: "Sarcodinians move using pseudopodia (e.g., Amoeba). Zooflagellates use flagella, Ciliaphorans use cilia, and Sporozoans are non-motile."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "⭐",
    q: "Which concept defines a species as a group of organisms that can interbreed and produce fertile offspring?",
    options: [
      "Morphological Species Concept",
      "Ecological Species Concept",
      "Biological Species Concept",
      "Phylogenetic Species Concept"
    ],
    correct: 2,
    explanation: "The Biological Species Concept (BSC) emphasizes reproductive isolation as the key criterion for defining a species. Organisms are considered the same species if they can naturally interbreed and produce viable, fertile offspring."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "⭐",
    q: "The scientific name *Panthera leo* refers to the lion. In this name, *Panthera* represents the:",
    options: [
      "Species",
      "Family",
      "Genus",
      "Order"
    ],
    correct: 2,
    explanation: "In binomial nomenclature, the first part of the scientific name (e.g., Panthera) refers to the genus, and the second part (e.g., leo) refers to the specific epithet or species."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "🟩",
    q: "Which taxonomic rank is directly below Class and directly above Family?",
    options: [
      "Phylum",
      "Order",
      "Genus",
      "Species"
    ],
    correct: 1,
    explanation: "The correct order of taxonomic ranks is: Kingdom > Phylum > Class > Order > Family > Genus > Species. Therefore, Order is below Class and above Family."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "🟩",
    q: "In modern classification, organisms are grouped into three overarching categories called:",
    options: [
      "Kingdoms",
      "Phyla",
      "Domains",
      "Classes"
    ],
    correct: 2,
    explanation: "The highest taxonomic rank is Domain, which divides all cellular life into Bacteria, Archaea, and Eukarya."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "❗",
    q: "If a new species is discovered, which international code governs its naming for animals?",
    options: [
      "ICBN",
      "ICZN",
      "ICN",
      "ICNCP"
    ],
    correct: 1,
    explanation: "The International Code of Zoological Nomenclature (ICZN) provides the rules for the scientific naming of animals."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "2014-23 Sessional Papers",
    tag: "⭐",
    q: "The study of evolutionary relationships among organisms is called:",
    options: [
      "Ecology",
      "Taxonomy",
      "Phylogenetics",
      "Genetics"
    ],
    correct: 2,
    explanation: "Phylogenetics is the study of evolutionary relationships among biological entities – often species, individuals, or genes – and is a key aspect of modern taxonomy."
  },
  {
    type: "MCQ",
    topic: "Taxonomy",
    year: "📅 2022 Test 2",
    tag: "⭐",
    q: "What is the correct way to format a two-word scientific name when typed?",
    options: [
      "Both words capitalized and italicized.",
      "First word capitalized, second word lowercase, both italicized.",
      "Both words lowercase and italicized.",
      "First word lowercase, second word capitalized, both italicized."
    ],
    correct: 1,
    explanation: "In binomial nomenclature, the genus name (first word) is capitalized, and the species epithet (second word) is lowercase. Both are italicized when typed, or underlined when handwritten."
  },

  // Prokaryotes (Bacteria & Archaea) & Cyanobacteria MCQs
  {
    type: "MCQ",
    topic: "Prokaryotes (Bacteria & Archaea)",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the primary characteristic that distinguishes prokaryotes from eukaryotes?",
    options: [
      "Presence of a cell wall",
      "Lack of a membrane-bound nucleus",
      "Presence of chloroplasts",
      "Ability to perform photosynthesis"
    ],
    correct: 1,
    explanation: "Prokaryotes are distinguished from eukaryotes primarily by the absence of a membrane-bound nucleus. Their genetic material is located in a single circular chromosome in a region called the nucleoid, which lacks a surrounding membrane. Eukaryotes, in contrast, have a distinct nucleus enclosed by a membrane."
  },
  {
    type: "MCQ",
    topic: "Prokaryotes (Bacteria & Archaea)",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Approximately how many species of bacteria have been documented?",
    options: [
      "1,000",
      "5,200",
      "10,000",
      "50,000"
    ],
    correct: 1,
    explanation: "According to the provided notes, approximately 5,200 species of bacteria have been documented, though it is estimated that there could be 100,000 to 200,000 species in total."
  },
  {
    type: "MCQ",
    topic: "Prokaryotes (Bacteria & Archaea)",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic feature of prokaryotic cells?",
    options: [
      "Presence of mitochondria",
      "Single circular chromosome",
      "Membrane-bound nucleus",
      "Presence of nucleoli"
    ],
    correct: 1,
    explanation: "Prokaryotic cells are characterized by a single circular chromosome consisting of double-stranded DNA, located in the nucleoid region. They lack membrane-bound organelles such as mitochondria and nucleoli, which are found in eukaryotic cells."
  },
  {
    type: "MCQ",
    topic: "Prokaryotes (Bacteria & Archaea)",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Prokaryotes are classified into which two domains?",
    options: [
      "Bacteria and Eukarya",
      "Archaea and Eukarya",
      "Bacteria and Archaea",
      "Monera and Cyanophyta"
    ],
    correct: 2,
    explanation: "Modern classification divides prokaryotes into two domains: Bacteria and Archaea. The third domain, Eukarya, includes eukaryotic organisms. The older classification of Monera has been replaced by this system."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the main component of bacterial cell walls that differentiates them from Archaea?",
    options: [
      "Cellulose",
      "Peptidoglycan",
      "Chitin",
      "Glycogen"
    ],
    correct: 1,
    explanation: "The cell walls of bacteria contain peptidoglycan, a polymer of amino sugars and amino acids, which is absent in Archaea and eukaryotes. This makes peptidoglycan a key taxonomic marker for bacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which staining method is used to differentiate Gram-positive and Gram-negative bacteria?",
    options: [
      "Acid-fast stain",
      "Crystal Violet stain",
      "Safranin stain",
      "Gram's stain"
    ],
    correct: 3,
    explanation: "Gram's stain is a cytological staining method that differentiates bacteria based on their cell wall properties. Gram-positive bacteria retain the Crystal Violet stain, appearing purple, while Gram-negative bacteria do not and are counterstained pink with Safranin."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary function of the bacterial capsule?",
    options: [
      "Energy production",
      "Protection from antibiotics",
      "Nutrient storage",
      "DNA replication"
    ],
    correct: 1,
    explanation: "The bacterial capsule, a slime layer outside the cell wall, acts as a protective cover, particularly in pathogenic bacteria, shielding them from antibiotics and the host's immune system."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following bacteria is rod-shaped?",
    options: [
      "Streptococcus",
      "Bacillus",
      "Staphylococcus",
      "Spirillum"
    ],
    correct: 1,
    explanation: "Bacillus bacteria are rod-shaped, often referred to as bacilli. Streptococcus and Staphylococcus are spherical (cocci), while Spirillum bacteria are spiral-shaped."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which type of bacteria is highly motile and spiral-shaped?",
    options: [
      "Bacillus",
      "Coccus",
      "Spirillum",
      "Cyanobacteria"
    ],
    correct: 2,
    explanation: "Spirillum bacteria are spiral-shaped and highly motile, typically due to flagella. They are Gram-negative and distinct from rod-shaped Bacillus, spherical cocci, and photosynthetic cyanobacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the mode of reproduction in most bacteria?",
    options: [
      "Sexual reproduction",
      "Binary fission",
      "Budding",
      "Both B and C"
    ],
    correct: 3,
    explanation: "Most bacteria reproduce asexually through binary fission (splitting into two identical cells) or budding (forming a small outgrowth that develops into a new cell). Both methods are common among bacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Which disease is caused by Bacillus anthracis?",
    options: [
      "Cholera",
      "Anthrax",
      "Gonorrhoea",
      "Pneumonia"
    ],
    correct: 1,
    explanation: "Bacillus anthracis is the causative agent of anthrax, a soil-borne disease that affects animals and humans through contact or ingestion."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary vector for cholera?",
    options: [
      "Soil",
      "Human faeces",
      "Air",
      "Insects"
    ],
    correct: 1,
    explanation: "Cholera, caused by Vibrio cholerae, is primarily transmitted through contaminated water or food, with human faeces being the primary vector due to poor sanitation."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Which bacterium causes syphilis?",
    options: [
      "Neisseria gonorrhoeae",
      "Treponema pallidum",
      "Vibrio cholerae",
      "Mycobacterium tuberculosis"
    ],
    correct: 1,
    explanation: "Syphilis is a sexually transmitted disease caused by the bacterium Treponema pallidum, which can also be transmitted through kissing or from mother to fetus."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Tuberculosis is caused by which bacterium?",
    options: [
      "Streptococcus",
      "Mycobacterium tuberculosis",
      "Haemophilus",
      "Chlamydia"
    ],
    correct: 1,
    explanation: "Tuberculosis is caused by Mycobacterium tuberculosis, an airborne bacterium that primarily affects the lungs and is exacerbated by conditions like HIV/AIDS."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Cyanobacteria are classified under which division?",
    options: [
      "Schizophyta",
      "Cyanophyta",
      "Monera",
      "Eukarya"
    ],
    correct: 1,
    explanation: "Cyanobacteria, also known as blue-green algae, are classified under the division Cyanophyta (or Cyanochloronta), distinct from Schizophyta, which includes other bacteria."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Why are cyanobacteria not true algae?",
    options: [
      "They lack chlorophyll",
      "They are prokaryotic",
      "They cannot photosynthesize",
      "They lack cell walls"
    ],
    correct: 1,
    explanation: "Cyanobacteria are prokaryotic, lacking a membrane-bound nucleus and organelles, unlike true algae, which are eukaryotic. They do contain chlorophyll and can photosynthesize."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What pigment gives cyanobacteria their blue color?",
    options: [
      "Chlorophyll a",
      "Phycocyanin",
      "Phycoerythrin",
      "Glycogen"
    ],
    correct: 1,
    explanation: "Phycocyanin is the blue pigment in cyanobacteria, contributing to their characteristic color, while phycoerythrin is red and chlorophyll a is green."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the main storage product of cyanobacteria?",
    options: [
      "Starch",
      "Glycogen",
      "Cellulose",
      "Peptidoglycan"
    ],
    correct: 1,
    explanation: "Cyanobacteria store energy primarily as glycogen, unlike eukaryotic plants, which typically store starch."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the function of heterocysts in cyanobacteria?",
    options: [
      "Photosynthesis",
      "Nitrogen fixation",
      "Nutrient storage",
      "Locomotion"
    ],
    correct: 1,
    explanation: "Heterocysts are specialized cells in cyanobacteria with thick walls that prevent oxygen diffusion, enabling nitrogen fixation by the enzyme nitrogenase."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which enzyme is involved in nitrogen fixation in cyanobacteria?",
    options: [
      "Amylase",
      "Nitrogenase",
      "Lipase",
      "Protease"
    ],
    correct: 1,
    explanation: "Nitrogenase is the enzyme responsible for converting atmospheric nitrogen into ammonium during nitrogen fixation in cyanobacteria."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which cyanobacterium is known to live in the cavities of Azolla leaves?",
    options: [
      "Nostoc",
      "Anabaena azollae",
      "Oscillatoria",
      "Microcystis"
    ],
    correct: 1,
    explanation: "Anabaena azollae is a cyanobacterium that lives symbiotically in the leaf cavities of the water fern Azolla, contributing to nitrogen fixation."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "❗",
    q: "Which of the following is a neurotoxin produced by cyanobacteria?",
    options: [
      "Microcystin",
      "Cylindrospermopsin",
      "Anatoxin",
      "Hepatotoxin"
    ],
    correct: 2,
    explanation: "Anatoxin is a neurotoxin produced by some cyanobacteria, affecting the nervous system, while microcystin and cylindrospermopsin are hepatotoxins."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "❗",
    q: "In which year did a cyanobacteria-related outbreak cause 88 deaths in Itaparica Dam, Brazil?",
    options: [
      "1931",
      "1966",
      "1983",
      "1993"
    ],
    correct: 3,
    explanation: "The notes indicate that in 1993, a cyanobacteria outbreak involving Anabaena and Microcystis at Itaparica Dam, Brazil, caused gastroenteritis and 88 deaths, primarily among children."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary mode of nutrition for most bacteria?",
    options: [
      "Photosynthesis",
      "Absorption of nutrients",
      "Chemosynthesis",
      "Ingestion"
    ],
    correct: 1,
    explanation: "Most bacteria are heterotrophic, obtaining nutrients by absorbing complex organic molecules like amino acids and sugars from their environment."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which bacteria are responsible for the rotting of stored food?",
    options: [
      "Bacillus",
      "Streptococcus",
      "Spirillum",
      "Cyanobacteria"
    ],
    correct: 0,
    explanation: "Bacillus species, being rod-shaped Gram-positive bacteria, are known to cause the rotting of stored food due to their metabolic activities."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following is a Gram-positive coccus bacterium?",
    options: [
      "Escherichia coli",
      "Staphylococcus aureus",
      "Vibrio cholerae",
      "Treponema pallidum"
    ],
    correct: 1,
    explanation: "Staphylococcus aureus is a Gram-positive coccus bacterium that forms clusters and is known to cause diseases in humans. The others listed are Gram-negative or spiral-shaped."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the primary symptom of cholera?",
    options: [
      "Lung infection",
      "Severe diarrhoea",
      "Skin lesions",
      "Joint pain"
    ],
    correct: 1,
    explanation: "Cholera, caused by Vibrio cholerae, is characterized by severe diarrhoea and dehydration, often due to poor sanitation in developing countries."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which bacterial disease is transmitted through kissing or mother-to-fetus contact?",
    options: [
      "Cholera",
      "Syphilis",
      "Tuberculosis",
      "Anthrax"
    ],
    correct: 1,
    explanation: "Syphilis, caused by Treponema pallidum, can be transmitted through direct contact, including kissing or from mother to fetus, making it a sexually transmitted disease."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What structure in cyanobacteria is similar to chloroplasts in eukaryotic plants?",
    options: [
      "Heterocysts",
      "Thylakoids",
      "Glycogen granules",
      "Mucilaginous sheath"
    ],
    correct: 1,
    explanation: "Thylakoids in cyanobacteria are membrane layers where photosynthesis occurs, similar to the thylakoid membranes in eukaryotic chloroplasts."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following bacteria is spherical in shape?",
    options: [
      "Bacillus",
      "Spirillum",
      "Streptococcus",
      "Vibrio"
    ],
    correct: 2,
    explanation: "Streptococcus bacteria are spherical (cocci) and often form chains, unlike rod-shaped Bacillus, spiral-shaped Spirillum, or comma-shaped Vibrio."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the primary ecological role of cyanobacteria?",
    options: [
      "Decomposition",
      "Nitrogen fixation and carbon cycling",
      "Oxygen consumption",
      "Soil erosion"
    ],
    correct: 1,
    explanation: "Cyanobacteria play a significant role in global carbon and nitrogen cycles through photosynthesis and nitrogen fixation, contributing to nutrient availability in ecosystems."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "Which bacterium is responsible for gonorrhoea?",
    options: [
      "Treponema pallidum",
      "Neisseria gonorrhoeae",
      "Vibrio cholerae",
      "Bacillus anthracis"
    ],
    correct: 1,
    explanation: "Gonorrhoea is a sexually transmitted disease caused by Neisseria gonorrhoeae, with humans as the primary vector."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the purpose of Gram's iodine in the Gram staining process?",
    options: [
      "Decolorization",
      "Mordant to fix the dye",
      "Counterstain",
      "Primary stain"
    ],
    correct: 1,
    explanation: "Gram's iodine acts as a mordant in the Gram staining process, binding Crystal Violet to the cell wall to enhance stain retention in Gram-positive bacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of Gram-negative bacteria?",
    options: [
      "Thick peptidoglycan layer",
      "Retains Crystal Violet stain",
      "Thin peptidoglycan layer",
      "Lack of outer membrane"
    ],
    correct: 2,
    explanation: "Gram-negative bacteria have a thin peptidoglycan layer and an outer membrane, which prevents them from retaining Crystal Violet and causes them to appear pink after counterstaining with Safranin."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "❗",
    q: "Which cyanobacterium caused liver damage in Armidale, Australia, in 1983?",
    options: [
      "Anabaena",
      "Microcystis aeruginosa",
      "Oscillatoria",
      "Nostoc"
    ],
    correct: 1,
    explanation: "Microcystis aeruginosa caused liver damage (elevated g-glutamyltransfera) in Armidale, Australia, in 1983 due to its production of hepatotoxins."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary vector for tuberculosis?",
    options: [
      "Water",
      "Humans",
      "Soil",
      "Insects"
    ],
    correct: 1,
    explanation: "Tuberculosis, caused by Mycobacterium tuberculosis, is primarily transmitted through airborne droplets from infected humans."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following is a photosynthetic prokaryote?",
    options: [
      "Bacillus",
      "Cyanobacteria",
      "Staphylococcus",
      "Spirillum"
    ],
    correct: 1,
    explanation: "Cyanobacteria are photosynthetic prokaryotes, containing chlorophyll a and phycobilins, unlike the other listed bacteria, which are heterotrophic."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which pigment is responsible for the red color in some cyanobacteria?",
    options: [
      "Phycocyanin",
      "Chlorophyll a",
      "Phycoerythrin",
      "Carotene"
    ],
    correct: 2,
    explanation: "Phycoerythrin is the red pigment in cyanobacteria, complementing the blue phycocyanin and green chlorophyll a."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary purpose of the mucilaginous sheath in cyanobacteria?",
    options: [
      "Photosynthesis",
      "Binding cells or filaments together",
      "Nitrogen fixation",
      "Locomotion"
    ],
    correct: 1,
    explanation: "The mucilaginous sheath in cyanobacteria binds cells or filaments together, often being deeply pigmented and providing structural support."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which bacterial disease is associated with acute lung infection and sharp chest pains?",
    options: [
      "Cholera",
      "Pneumonia",
      "Anthrax",
      "Syphilis"
    ],
    correct: 1,
    explanation: "Pneumonia, caused by bacteria such as Streptococcus, is characterized by acute lung infection and sharp chest pains."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of spirilla bacteria?",
    options: [
      "Spherical shape",
      "Gram-negative",
      "Highly motile",
      "Form chains"
    ],
    correct: 2,
    explanation: "Spirilla bacteria are spiral-shaped, Gram-negative, and highly motile due to flagella, distinguishing them from spherical cocci or chain-forming bacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "⭐",
    q: "What is the main structural component of the bacterial cell wall?",
    options: [
      "Cellulose",
      "Peptidoglycan",
      "Chitin",
      "Glycogen"
    ],
    correct: 1,
    explanation: "Peptidoglycan is the primary structural component of bacterial cell walls, providing rigidity and shape, and is unique to bacteria."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which bacterium is responsible for pneumonia?",
    options: [
      "Vibrio cholerae",
      "Streptococcus",
      "Treponema pallidum",
      "Bacillus anthracis"
    ],
    correct: 1,
    explanation: "Streptococcus, along with other genera like Chlamydia and Mycoplasma, is a common cause of pneumonia, an acute lung infection."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary mode of transmission for anthrax?",
    options: [
      "Airborne",
      "Contact or ingestion",
      "Sexual contact",
      "Waterborne"
    ],
    correct: 1,
    explanation: "Anthrax, caused by Bacillus anthracis, is primarily transmitted through contact with or ingestion of contaminated materials, such as infected animal products."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "❗",
    q: "Which of the following is a hepatotoxin produced by cyanobacteria?",
    options: [
      "Anatoxin",
      "Microcystin",
      "Saxitoxin",
      "Neurotoxin"
    ],
    correct: 1,
    explanation: "Microcystin is a hepatotoxin produced by cyanobacteria, causing liver damage, as seen in outbreaks like the one in Armidale, Australia."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the function of flagella in bacteria?",
    options: [
      "Nutrient absorption",
      "Motility",
      "DNA replication",
      "Photosynthesis"
    ],
    correct: 1,
    explanation: "Flagella are filamentous appendages that enable motility in bacteria, allowing them to move toward favorable conditions."
  },
  {
    type: "MCQ",
    topic: "Cyanobacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "Which cyanobacterium is known for forming filaments up to 1 meter long?",
    options: [
      "Anabaena",
      "Nostoc",
      "Oscillatoria",
      "Microcystis"
    ],
    correct: 1,
    explanation: "Nostoc is a cyanobacterium known for forming long filaments, sometimes up to 1 meter, often bound by a mucilaginous sheath."
  },
  {
    type: "MCQ",
    topic: "Bacteria",
    year: "Elevate Your Potential Mentorship - DOMAIN BACTERIA MCQS .pdf",
    tag: "🟩",
    q: "What is the primary symptom of gonorrhoea?",
    options: [
      "Lung infection",
      "Sexually transmitted infection",
      "Diarrhoea",
      "Skin lesions"
    ],
    correct: 1,
    explanation: "Gonorrhoea, caused by Neisseria gonorrhoeae, is primarily a sexually transmitted infection affecting the reproductive and urinary systems."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Extreme thermophiles are found in which of the following locations?",
    options: [
      "Yellowstone Park's Prismatic Pool",
      "Arctic ice caps",
      "Tropical rainforests",
      "Grasslands"
    ],
    correct: 0,
    explanation: "Yellowstone Park's Prismatic Pool is a high-temperature environment ideal for extreme thermophiles."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "What is the primary source of energy for methanogens?",
    options: [
      "Glucose",
      "Ammonium ions",
      "Hydrogen",
      "Sodium chloride"
    ],
    correct: 2,
    explanation: "Methanogens primarily use hydrogen as an energy source, combining it with carbon dioxide to produce methane."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a key ecological role of prokaryotic organisms like Archaea?",
    options: [
      "Photosynthesis",
      "Bioremediation",
      "Seed dispersal",
      "Pollination"
    ],
    correct: 1,
    explanation: "Archaea contribute to bioremediation by degrading pollutants in extreme environments, aiding ecosystem cleanup."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Archaea are involved in the recycling of which elements?",
    options: [
      "Carbon, oxygen, and nitrogen",
      "Sulfur, phosphorus, and iron",
      "Calcium, magnesium, and potassium",
      "Sodium, chloride, and zinc"
    ],
    correct: 1,
    explanation: "Archaea play a key role in recycling sulfur, phosphorus, and iron in various ecosystems, especially extreme ones."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Some Archaea have symbiotic associations with vascular plants for:",
    options: [
      "Photosynthesis",
      "Nitrogen fixation",
      "Sulfur metabolism",
      "Oxygen production"
    ],
    correct: 1,
    explanation: "Some Archaea form symbiotic relationships with plants, aiding in nitrogen fixation to convert atmospheric nitrogen into usable forms."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "In biotechnology, Archaea are used in the production of:",
    options: [
      "Insulin and antibiotics",
      "Vaccines and enzymes",
      "Pesticides and herbicides",
      "Synthetic fibers"
    ],
    correct: 1,
    explanation: "Archaea, particularly thermophiles, are used to produce enzymes like DNA polymerase for PCR and other biotechnological applications."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Pseudomurein in Archaea cell walls consists of:",
    options: [
      "N-acetylglucosamine and cellulose",
      "N-acetylglucosamine and N-acetyltalosaminuronic acid",
      "Peptidoglycan and chitin",
      "Chitin and cellulose"
    ],
    correct: 1,
    explanation: "Pseudomurein is composed of N-acetylglucosamine and N-acetyltalosaminuronic acid, distinguishing it from bacterial peptidoglycan."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is NOT a common habitat for extreme thermophiles?",
    options: [
      "Hot springs",
      "Deep ocean vents",
      "Glaciers",
      "Obsidian pools"
    ],
    correct: 2,
    explanation: "Glaciers are cold environments, unsuitable for extreme thermophiles, which require high temperatures."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which group of Archaea is most likely to be found in rice fields?",
    options: [
      "Halophiles",
      "Methanogens",
      "Thermophiles",
      "Acidophiles"
    ],
    correct: 1,
    explanation: "Methanogens thrive in the anaerobic, waterlogged conditions of rice fields, producing methane."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "What is the primary metabolic process of extreme halophiles?",
    options: [
      "Anaerobic respiration",
      "Aerobic respiration",
      "Photosynthesis",
      "Fermentation"
    ],
    correct: 2,
    explanation: "Extreme halophiles primarily use photosynthesis, often via bacteriorhodopsin, to generate energy in high-salt environments."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a characteristic of extreme thermophile enzymes?",
    options: [
      "Unstable at high temperatures",
      "Stable at high temperatures",
      "Inactive above 40°C",
      "Require oxygen to function"
    ],
    correct: 1,
    explanation: "Enzymes from extreme thermophiles are stable at high temperatures, making them valuable in industrial applications like PCR."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which type of Archaea is most associated with anaerobic digesters?",
    options: [
      "Halophiles",
      "Methanogens",
      "Thermophiles",
      "Xerophiles"
    ],
    correct: 1,
    explanation: "Methanogens are key in anaerobic digesters, producing methane from organic waste in oxygen-free conditions."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "What gas is commonly emitted by thermophiles in hot springs?",
    options: [
      "Carbon dioxide",
      "Sulfur dioxide",
      "Methane",
      "Nitrogen"
    ],
    correct: 1,
    explanation: "Thermophiles in hot springs often metabolize sulfur, releasing sulfur dioxide as a byproduct."
  },
  {
    type: "MCQ",
    topic: "Prokaryotes (Bacteria & Archaea)",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a key difference between Archaea and Bacteria?",
    options: [
      "Archaea have peptidoglycan in their cell walls",
      "Archaea have branched membrane lipids",
      "Archaea have linear chromosomes",
      "Archaea are multicellular"
    ],
    correct: 1,
    explanation: "Archaea’s branched membrane lipids are a key distinction from Bacteria, which have unbranched lipids."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "⭐",
    q: "Which characteristic of Archaea makes them unique in extreme environments?",
    options: [
      "Presence of mitochondria",
      "Ether-linked lipids",
      "Peptidoglycan cell walls",
      "Linear chromosomes"
    ],
    correct: 1,
    explanation: "Ether-linked lipids in Archaea membranes provide stability in extreme conditions, unlike ester-linked lipids in other domains."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which of the following best describes the morphology of Archaea?",
    options: [
      "Multicellular with complex structures",
      "Similar to Bacteria",
      "Similar to Eukarya",
      "Always filamentous"
    ],
    correct: 1,
    explanation: "Archaea share similar simple, unicellular morphologies with Bacteria, such as cocci and bacilli."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which group of Archaea is least likely to require oxygen for survival?",
    options: [
      "Halophiles",
      "Methanogens",
      "Thermophiles",
      "Acidophiles"
    ],
    correct: 1,
    explanation: "Methanogens are strictly anaerobic, making them the least likely to require oxygen compared to other Archaea groups."
  },
  {
    type: "MCQ",
    topic: "Archaea",
    year: "Elevate Your Potential Mentorship - ARCHAEA QUIZ MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a key application of Archaea in environmental processes?",
    options: [
      "Producing oxygen",
      "Biodegradation and bioremediation",
      "Synthesizing sugars",
      "Pollination"
    ],
    correct: 1,
    explanation: "Archaea contribute to biodegradation and bioremediation by breaking down pollutants, especially in extreme environments."
  },
  // Protists MCQs
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Who first used the term 'Protista' to describe a kingdom of organisms?",
    options: [
      "Charles Darwin",
      "Ernst Haeckel",
      "Carl Linnaeus",
      "Robert Whittaker"
    ],
    correct: 1,
    explanation: "The term 'Protista' was coined by Ernst Haeckel in 1886 to describe a kingdom of single-celled eukaryotic organisms that form a link between plants, animals, and fungi. Charles Darwin focused on evolution, Carl Linnaeus developed binomial nomenclature, and Robert Whittaker proposed the five-kingdom classification, but none of them introduced the term 'Protista.'"
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "What distinguishes Kingdom Protista from other eukaryotic kingdoms?",
    options: [
      "They are exclusively multicellular",
      "They lack a membrane-bound nucleus",
      "They form a link between plants, animals, and fungi",
      "They are primarily terrestrial organisms"
    ],
    correct: 2,
    explanation: "Kingdom Protista includes diverse eukaryotic organisms that are primarily unicellular or colonial, lacking the specialized tissue organization of plants, animals, and fungi. Their diversity in structure, nutrition, and reproduction makes them a transitional group, bridging characteristics of other eukaryotic kingdoms."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is a primary characteristic of most protists in terms of their habitat?",
    options: [
      "They are primarily aquatic",
      "They are exclusively terrestrial",
      "They are found only in extreme environments",
      "They are restricted to dry climates"
    ],
    correct: 0,
    explanation: "Most protists are aquatic, thriving in water-containing environments such as freshwater bodies, oceans, or moist soil. While some live in other organisms (e.g., human digestive tracts), their primary habitat is aquatic, unlike terrestrial plants or animals."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How many phyla are estimated to be included in Kingdom Protista?",
    options: [
      "At least 10",
      "At least 16",
      "At least 20",
      "At least 25"
    ],
    correct: 1,
    explanation: "Kingdom Protista is a highly diverse group, comprising at least 16 phyla. This diversity reflects the wide range of morphologies, nutritional modes, and ecological roles among protists, such as protozoans and algae."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which protists are considered primary producers in aquatic ecosystems?",
    options: [
      "Amoebas",
      "Ciliates",
      "Algae",
      "Trypanosomes"
    ],
    correct: 2,
    explanation: "Algae, such as diatoms and green algae, are photosynthetic protists that serve as primary producers in aquatic ecosystems. They convert sunlight into energy, providing food and oxygen for other organisms, unlike amoebas, ciliates, or trypanosomes, which are heterotrophic."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which human disease is caused by the protist Plasmodium falciparum?",
    options: [
      "Amoebic dysentery",
      "Malaria",
      "Sleeping sickness",
      "Giardiasis"
    ],
    correct: 1,
    explanation: "Plasmodium falciparum is a protozoan parasite that causes malaria in humans, transmitted by Anopheles mosquitoes. Amoebic dysentery is caused by Entamoeba histolytica, sleeping sickness by Trypanosoma brucei, and giardiasis by Giardia lamblia."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What type of cellular organization is characteristic of protists?",
    options: [
      "Complex tissue organization",
      "Simple cellular organization",
      "No cellular organization",
      "Prokaryotic organization"
    ],
    correct: 1,
    explanation: "Protists typically have simple cellular organization, being unicellular, colonial, or multicellular without specialized tissues. This distinguishes them from plants, animals, and fungi, which have complex tissue organization, and from prokaryotes, which lack a nucleus."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which organelle in protists is responsible for cellular respiration?",
    options: [
      "Chloroplast",
      "Mitochondrion",
      "Nucleus",
      "Flagellum"
    ],
    correct: 1,
    explanation: "Mitochondria are the organelles responsible for cellular respiration in eukaryotic cells, including protists, converting nutrients into energy (ATP). Chloroplasts are for photosynthesis, the nucleus houses DNA, and flagella aid in locomotion."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How do some protists move?",
    options: [
      "Using pseudopodia, flagella, or cilia",
      "Using chloroplasts",
      "Using contractile vacuoles",
      "Using hyphae"
    ],
    correct: 0,
    explanation: "Protists use various structures for locomotion: pseudopodia (e.g., Amoeba), flagella (e.g., Euglena), or cilia (e.g., Paramecium). Chloroplasts are for photosynthesis, contractile vacuoles regulate water, and hyphae are characteristic of fungi, not protists."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is a common mode of reproduction in protists?",
    options: [
      "Binary fission only",
      "Both asexual and sexual reproduction",
      "Sexual reproduction only",
      "Budding only"
    ],
    correct: 1,
    explanation: "Protists reproduce both asexually (e.g., binary fission in Amoeba) and sexually (e.g., conjugation in Paramecium or gamete formation in Plasmodium). This dual capability distinguishes them from organisms restricted to one mode."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "In what environment do most protists thrive?",
    options: [
      "Dry deserts",
      "Water-containing environments",
      "High-altitude mountains",
      "Frozen tundras"
    ],
    correct: 1,
    explanation: "Protists primarily inhabit water-containing environments, such as freshwater, marine, or moist terrestrial habitats. Dry deserts, high-altitude mountains, and frozen tundras are less suitable for their survival due to their need for water."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protists are capable of forming cysts under adverse conditions?",
    options: [
      "All protists",
      "Some protists",
      "No protists",
      "Only multicellular protists"
    ],
    correct: 1,
    explanation: "Some protists, like Amoeba, form cysts to survive adverse conditions (e.g., drought or cold). Not all protists have this ability, and it is not exclusive to multicellular forms, making 'some protists' the most accurate choice."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How are protists classified within Kingdom Protista?",
    options: [
      "Into bacteria and archaea",
      "Into protozoans and algae",
      "Into fungi and plants",
      "Into autotrophs and heterotrophs only"
    ],
    correct: 1,
    explanation: "Kingdom Protista is divided into protozoans (animal-like, e.g., Amoeba) and algae (plant-like, e.g., Euglena). Bacteria and archaea are prokaryotic domains, and fungi and plants are separate kingdoms, not part of Protista."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist is an example of a source of food for humans?",
    options: [
      "Plasmodium",
      "Kelp",
      "Trypanosoma",
      "Giardia"
    ],
    correct: 1,
    explanation: "Kelp, a type of brown algae, is edible and used as a food source in many cultures. Plasmodium, Trypanosoma, and Giardia are pathogenic protists and not suitable for consumption."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is a commercial product derived from marine protists?",
    options: [
      "Sugar syrup",
      "Agar",
      "Starch",
      "Cellulose"
    ],
    correct: 1,
    explanation: "Agar, derived from red algae, is a commercial product used in microbiology and food industries. Sugar syrup and starch are not typically derived from marine protists, and cellulose is more associated with plants."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist is used in biological research due to its unicellular and non-motile nature?",
    options: [
      "Euglena",
      "Chlorella",
      "Paramecium",
      "Amoeba"
    ],
    correct: 1,
    explanation: "Chlorella, a unicellular, non-motile green alga, is widely used in biological research for studying photosynthesis and cellular processes. Euglena and Paramecium are motile, and Amoeba lacks chloroplasts."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which protist is responsible for causing late blight in potatoes?",
    options: [
      "Plasmodium",
      "Saprolegnia",
      "Phytophthora",
      "Euglena"
    ],
    correct: 2,
    explanation: "Phytophthora, a water mould-like protist, causes late blight in potatoes. Plasmodium causes malaria, Saprolegnia infects aquatic organisms, and Euglena is not pathogenic."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the primary mode of nutrition for dinoflagellates?",
    options: [
      "Heterotrophic only",
      "Autotrophic or heterotrophic",
      "Chemotrophic",
      "Saprotrophic only"
    ],
    correct: 1,
    explanation: "Dinoflagellates can be autotrophic (photosynthetic) or heterotrophic (e.g., filter-feeding), depending on the species and conditions. They are not exclusively chemotrophic or saprotrophic."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which structure is used by Amoeba for locomotion?",
    options: [
      "Flagellum",
      "Cilia",
      "Pseudopodia",
      "Hyphae"
    ],
    correct: 2,
    explanation: "Amoeba moves by extending pseudopodia (false feet), formed by cytoplasmic streaming. Flagella and cilia are used by other protists (e.g., Euglena and Paramecium), and hyphae are fungal structures."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the Greek origin of the term 'Amoeba'?",
    options: [
      "Movement",
      "Change",
      "Life",
      "Water"
    ],
    correct: 1,
    explanation: "The term 'Amoeba' comes from the Greek word 'amoibe,' meaning change, reflecting its ability to change shape during movement. It does not directly refer to movement, life, or water."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the function of the contractile vacuole in Amoeba?",
    options: [
      "Digestion of food",
      "Regulation of water balance",
      "Locomotion",
      "Photosynthesis"
    ],
    correct: 1,
    explanation: "The contractile vacuole in Amoeba pumps out excess water to maintain osmotic balance, preventing the cell from bursting in hypotonic environments. It is not involved in digestion, locomotion, or photosynthesis."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which protist causes amoebic dysentery in humans?",
    options: [
      "Entamoeba histolytica",
      "Plasmodium falciparum",
      "Trypanosoma brucei",
      "Giardia lamblia"
    ],
    correct: 0,
    explanation: "Entamoeba histolytica, an amoeba, causes amoebic dysentery through contaminated water. Plasmodium falciparum causes malaria, Trypanosoma brucei causes sleeping sickness, and Giardia lamblia causes giardiasis."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How many species of Plasmodium are known to infect humans?",
    options: [
      "5",
      "11",
      "20",
      "200"
    ],
    correct: 1,
    explanation: "Over 200 Plasmodium species exist, but only 11 are known to infect humans, with Plasmodium falciparum being the most severe. The other options are incorrect based on the notes."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which organism serves as a vector for Plasmodium in its life cycle?",
    options: [
      "Tsetse fly",
      "Anopheles mosquito",
      "Housefly",
      "Tick"
    ],
    correct: 1,
    explanation: "The Anopheles mosquito (female) is the vector for Plasmodium, transmitting malaria to humans. The tsetse fly transmits Trypanosoma, and houseflies and ticks are not vectors for Plasmodium."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What form of Plasmodium is injected into the human bloodstream by a mosquito?",
    options: [
      "Merozoites",
      "Sporozoites",
      "Gametocytes",
      "Oocysts"
    ],
    correct: 1,
    explanation: "Sporozoites are the infectious form of Plasmodium injected by the mosquito into the human bloodstream, initiating the malaria life cycle. Merozoites, gametocytes, and oocysts are later stages."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Where do sporozoites initially travel after entering the human bloodstream?",
    options: [
      "Red blood cells",
      "Liver cells",
      "Salivary glands",
      "Digestive tract"
    ],
    correct: 1,
    explanation: "Sporozoites travel to the liver, where they infect hepatocytes and multiply into merozoites. They do not initially target red blood cells, salivary glands, or the digestive tract."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the role of gametocytes in the Plasmodium life cycle?",
    options: [
      "They infect liver cells",
      "They develop into sporozoites",
      "They are sexual forms that circulate in the blood",
      "They cause red blood cell lysis"
    ],
    correct: 2,
    explanation: "Gametocytes are the sexual forms of Plasmodium that circulate in the human bloodstream, ready to be ingested by a mosquito to continue the life cycle. They do not infect liver cells or cause lysis directly."
  },
  {
    type: "MCQ",
    topic: "Plasmodium",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "In which part of the mosquito does the Plasmodium zygote develop into oocysts?",
    options: [
      "Salivary glands",
      "Mid-gut wall",
      "Body cavity",
      "Proboscis"
    ],
    correct: 1,
    explanation: "In the mosquito, the zygote develops into oocysts in the mid-gut wall, where they produce sporozoites. This is distinct from the salivary glands, body cavity, or proboscis."
  },
  {
    type: "MCQ",
    topic: "Euglena",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist is classified under the phylum Euglenophyta?",
    options: [
      "Amoeba",
      "Paramecium",
      "Euglena",
      "Saprolegnia"
    ],
    correct: 2,
    explanation: "Euglena belongs to the phylum Euglenophyta (or Euglenozoa), characterized by its flagellate structure and dual nutrition. Amoeba, Paramecium, and Saprolegnia belong to different groups."
  },
  {
    type: "MCQ",
    topic: "Euglena",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "What is a key feature of Euglena chloroplasts compared to those of plants?",
    options: [
      "They have one membrane",
      "They have three membranes",
      "They lack pyrenoids",
      "They are non-photosynthetic"
    ],
    correct: 1,
    explanation: "Euglena chloroplasts have three membranes, unlike the two membranes in plant and green algae chloroplasts, reflecting their evolutionary origin. They contain pyrenoids and are photosynthetic."
  },
  {
    type: "MCQ",
    topic: "Euglena",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the function of pyrenoids in Euglena?",
    options: [
      "Locomotion",
      "Synthesis of paramylon starch",
      "Water regulation",
      "Digestion"
    ],
    correct: 1,
    explanation: "Pyrenoids in Euglena synthesize paramylon starch, a polysaccharide unique to euglenoids, used for energy storage. They are not involved in locomotion, water regulation, or digestion."
  },
  {
    type: "MCQ",
    topic: "Euglena",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Why are some Euglena species classified as animal-like?",
    options: [
      "They lack chloroplasts",
      "They are motile and can be heterotrophic",
      "They have complex tissue organization",
      "They reproduce only asexually"
    ],
    correct: 1,
    explanation: "Some Euglena species lack chloroplasts and feed heterotrophically, and their motility (via flagella) resembles animal-like behavior. They do not have complex tissues and can reproduce both ways."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What material composes the cell walls of water moulds like Saprolegnia?",
    options: [
      "Chitin",
      "Cellulose",
      "Peptidoglycan",
      "Silica"
    ],
    correct: 1,
    explanation: "Water moulds like Saprolegnia have cell walls made of cellulose, unlike fungi (chitin) or bacteria (peptidoglycan). Silica is characteristic of diatom cell walls."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How do water moulds like Saprolegnia reproduce asexually?",
    options: [
      "By binary fission",
      "By producing zoosporangia",
      "By budding",
      "By forming gametocytes"
    ],
    correct: 1,
    explanation: "Saprolegnia reproduces asexually by forming zoosporangia, which release motile zoospores. Binary fission, budding, and gametocyte formation are not typical for water moulds."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is a common habitat for Saprolegnia species?",
    options: [
      "Dry soil",
      "Freshwater bodies",
      "Desert environments",
      "High-altitude air"
    ],
    correct: 1,
    explanation: "Saprolegnia, a water mould, is primarily found in freshwater bodies, where it can be saprobic or parasitic. It is not suited to dry soil, deserts, or high-altitude environments."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist group is a major component of plankton?",
    options: [
      "Protozoans",
      "Algae",
      "Water moulds",
      "Amoebas"
    ],
    correct: 1,
    explanation: "Algae, such as diatoms and dinoflagellates, are major components of plankton, serving as primary producers. Protozoans and water moulds are less dominant, and amoebas are not typical plankton."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What type of respiration is common among protists living in mud or digestive tracts?",
    options: [
      "Aerobic only",
      "Facultative anaerobic",
      "Chemotrophic",
      "Photosynthetic"
    ],
    correct: 1,
    explanation: "Protists in low-oxygen environments like mud or digestive tracts often use facultative anaerobic respiration, allowing them to switch between aerobic and anaerobic metabolism."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist group includes filter-feeding flagellates?",
    options: [
      "Ciliates",
      "Dinoflagellates",
      "Euglenoids",
      "Diatoms"
    ],
    correct: 1,
    explanation: "Some dinoflagellates are filter-feeding heterotrophs, using flagella to capture food. Ciliates use cilia, euglenoids are not typically filter-feeders, and diatoms are primarily autotrophic."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the primary source of minerals like iodine in kelps?",
    options: [
      "Photosynthesis",
      "Mineral absorption from water",
      "Heterotrophic feeding",
      "Symbiotic bacteria"
    ],
    correct: 1,
    explanation: "Kelps absorb minerals like iodine, sodium, and potassium directly from seawater, not through photosynthesis, heterotrophic feeding, or symbiotic bacteria."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist is known for producing an anti-cancer compound?",
    options: [
      "Chlorella",
      "Lyngbya",
      "Saprolegnia",
      "Plasmodium"
    ],
    correct: 1,
    explanation: "Lyngbya, a cyanobacterium-like protist, produces anti-cancer compounds. Chlorella is used in research, Saprolegnia is a water mould, and Plasmodium is pathogenic."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the primary mode of nutrition for phagotrophic protists?",
    options: [
      "Photosynthesis",
      "Ingestion of solid food particles",
      "Absorption of dissolved organic matter",
      "Chemosynthesis"
    ],
    correct: 1,
    explanation: "Phagotrophic protists, like Amoeba, ingest solid food particles via phagocytosis, forming food vacuoles. This differs from photosynthesis, osmotrophy, or chemosynthesis."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which organelle in phagotrophic protists digests food particles?",
    options: [
      "Contractile vacuole",
      "Lysosome",
      "Chloroplast",
      "Nucleus"
    ],
    correct: 1,
    explanation: "Lysosomes in phagotrophic protists release hydrolytic enzymes to digest food particles in food vacuoles. Contractile vacuoles regulate water, chloroplasts are for photosynthesis, and the nucleus houses DNA."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the term for heterotrophic protists that absorb soluble food?",
    options: [
      "Phagotrophs",
      "Osmotrophs",
      "Phototrophs",
      "Chemotrophs"
    ],
    correct: 1,
    explanation: "Osmotrophs absorb soluble organic matter from their surroundings, unlike phagotrophs (ingest solids), phototrophs (photosynthesize), or chemotrophs (use chemical energy)."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist is an example of a predator?",
    options: [
      "Euglena",
      "Paramecium",
      "Chlorella",
      "Diatoms"
    ],
    correct: 1,
    explanation: "Paramecium is a predatory ciliate that feeds on smaller organisms like bacteria. Euglena can be autotrophic, Chlorella is non-motile and autotrophic, and diatoms are primarily photosynthetic."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the largest size an Amoeba can reach?",
    options: [
      "0.1 mm",
      "1 mm",
      "10 mm",
      "100 mm"
    ],
    correct: 1,
    explanation: "The largest Amoeba species can measure up to 1 mm across, making them visible to the naked eye. The other sizes are either too small or too large for Amoeba."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which part of the Amoeba is lighter and located near the plasma membrane?",
    options: [
      "Endoplasm",
      "Ectoplasm",
      "Nucleus",
      "Contractile vacuole"
    ],
    correct: 1,
    explanation: "The ectoplasm is the lighter, clearer outer layer of Amoeba's cytoplasm, near the plasma membrane, involved in movement. The endoplasm is denser and internal, while the nucleus and contractile vacuole have specific functions."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "How does Amoeba reproduce during favorable conditions?",
    options: [
      "Meiosis",
      "Binary fission",
      "Budding",
      "Sporulation"
    ],
    correct: 1,
    explanation: "Amoeba reproduces asexually by binary fission, dividing into two identical cells. Meiosis is for sexual reproduction, budding is typical of yeast, and sporulation is not typical for Amoeba."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which protist is transmitted by the tsetse fly?",
    options: [
      "Plasmodium",
      "Trypanosoma",
      "Giardia",
      "Amoeba"
    ],
    correct: 1,
    explanation: "Trypanosoma, causing sleeping sickness, is transmitted by the tsetse fly. Plasmodium uses mosquitoes, Giardia is waterborne, and Amoeba is not typically vector-transmitted."
  },
  {
    type: "MCQ",
    topic: "Euglena",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the role of the stigma in Euglena?",
    options: [
      "Locomotion",
      "Photosynthesis",
      "Light detection",
      "Digestion"
    ],
    correct: 2,
    explanation: "The stigma (eyespot) in Euglena detects light, aiding in phototaxis. It does not contribute to locomotion, photosynthesis, or digestion directly."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist group includes species that infect the gills of fish?",
    options: [
      "Euglenoids",
      "Water moulds",
      "Dinoflagellates",
      "Ciliates"
    ],
    correct: 1,
    explanation: "Water moulds like Saprolegnia are parasitic and can infect fish gills. Euglenoids, dinoflagellates, and ciliates are not typically associated with fish infections."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the primary component of the cell wall in diatoms?",
    options: [
      "Cellulose",
      "Chitin",
      "Silica",
      "Peptidoglycan"
    ],
    correct: 2,
    explanation: "Diatoms have cell walls (frustules) made of silica, giving them a glass-like structure. Cellulose is found in water moulds, chitin in fungi, and peptidoglycan in bacteria."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "❗",
    q: "Which protist is known for its role in red tides?",
    options: [
      "Dinoflagellates",
      "Green algae",
      "Brown algae",
      "Diatoms"
    ],
    correct: 0,
    explanation: "Dinoflagellates, like those causing red tides, produce toxins during blooms. Green and brown algae are not typically associated with red tides, and diatoms cause different blooms."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What type of spores do water moulds produce for asexual reproduction?",
    options: [
      "Gametocytes",
      "Zoospores",
      "Merozoites",
      "Sporozoites"
    ],
    correct: 1,
    explanation: "Water moulds like Saprolegnia produce motile zoospores in zoosporangia for asexual reproduction. Gametocytes, merozoites, and sporozoites are associated with Plasmodium."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist group is characterized by the presence of two flagella?",
    options: [
      "Ciliates",
      "Dinoflagellates",
      "Amoebas",
      "Red algae"
    ],
    correct: 1,
    explanation: "Dinoflagellates typically have two flagella, one transverse and one longitudinal, for movement. Ciliates use cilia, amoebas use pseudopodia, and red algae lack flagella."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "What is the primary ecological role of algae in aquatic ecosystems?",
    options: [
      "Decomposers",
      "Primary producers",
      "Predators",
      "Parasites"
    ],
    correct: 1,
    explanation: "Algae are photosynthetic primary producers, forming the base of aquatic food chains by producing energy and oxygen. They are not primarily decomposers, predators, or parasites."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "Which protist is both autotrophic and heterotrophic depending on conditions?",
    options: [
      "Amoeba",
      "Euglena",
      "Paramecium",
      "Saprolegnia"
    ],
    correct: 1,
    explanation: "Euglena can photosynthesize (autotrophic) with chloroplasts or feed heterotrophically without them, depending on light availability. Amoeba and Paramecium are heterotrophic, and Saprolegnia is saprobic or parasitic."
  },
  {
    type: "MCQ",
    topic: "Amoeba",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "What is the term for the hard wall formed by Amoeba during unfavorable conditions?",
    options: [
      "Cyst",
      "Spore",
      "Oocyst",
      "Zoospora"
    ],
    correct: 0,
    explanation: "Amoeba forms a cyst, a protective hard wall, to survive adverse conditions like drought. Spores, oocysts, and zoospores are associated with other organisms or reproductive stages."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which protist group is known for its role in forming coral reefs?",
    options: [
      "Red algae",
      "Brown algae",
      "Green algae",
      "Diatoms"
    ],
    correct: 0,
    explanation: "Red algae contribute to coral reef formation through calcium carbonate deposition. Brown and green algae are not major reef builders, and diatoms are planktonic."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "⭐",
    q: "What is the primary method of locomotion for Paramecium?",
    options: [
      "Pseudopodia",
      "Flagella",
      "Cilia",
      "Hyphae"
    ],
    correct: 2,
    explanation: "Paramecium uses cilia, hair-like structures, for locomotion and feeding. Pseudopodia are for Amoeba, flagella for Euglena, and hyphae are fungal structures."
  },
  {
    type: "MCQ",
    topic: "Protists",
    year: "Elevate Your Potential Mentorship - KINGDOM PROTISTA .pdf",
    tag: "🟩",
    q: "Which compound derived from algae is used as a blood coagulant?",
    options: [
      "Agar",
      "Sodium laminaria sulphate",
      "Carrageenan",
      "Algin"
    ],
    correct: 1,
    explanation: "Sodium laminaria sulphate, derived from algae, is used as a blood coagulant. Agar and carrageenan are gelling agents, and algin is used in food and industry but not as a coagulant."
  },

  // Fungi MCQs
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "What is the primary characteristic that distinguishes fungi from plants?",
    options: [
      "Presence of chlorophyll",
      "Lack of vascular tissues",
      "Presence of cell walls made of chitin",
      "Ability to perform photosynthesis"
    ],
    correct: 2,
    explanation: "Fungi have cell walls made of chitin, a key distinguishing feature from plants, which have cell walls made of cellulose. Unlike plants, fungi lack chlorophyll and cannot perform photosynthesis, and while they also lack vascular tissues, the presence of chitin is the primary characteristic."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is NOT a common example of fungi?",
    options: [
      "Yeast",
      "Mushrooms",
      "Algae",
      "Moulds"
    ],
    correct: 2,
    explanation: "Yeast, mushrooms, and moulds are all examples of fungi, as noted in the document. Algae, however, belong to a different group, often classified under Protista or Plantae, and are photosynthetic, unlike fungi."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Fungi typically thrive in environments that are:",
    options: [
      "Dry and cold",
      "Moist and warm",
      "Moist and cold",
      "Dry and warm"
    ],
    correct: 1,
    explanation: "The document states that fungi, such as those causing black spots on bread or mushrooms, grow in moist and warm conditions, which are ideal for their growth and reproduction."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the main structural component of a fungal body?",
    options: [
      "Chloroplasts",
      "Hyphae",
      "Roots",
      "Stems"
    ],
    correct: 1,
    explanation: "The fungal body consists of hyphae, which are filamentous structures that may be single-celled or form branched networks, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "The mass of hyphae in fungi is referred to as:",
    options: [
      "Mycelium",
      "Sporangium",
      "Zygospore",
      "Ascospore"
    ],
    correct: 0,
    explanation: "The document defines the mycelium as the mass of hyphae, forming the main body of multicellular fungi."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following best describes fungi as heterotrophic organisms?",
    options: [
      "They produce their own food using sunlight",
      "They digest food externally and then absorb it",
      "They ingest food and digest it internally",
      "They do not require food for survival"
    ],
    correct: 1,
    explanation: "Fungi are heterotrophic and differ from other heterotrophs by digesting food externally using enzymes and then absorbing the nutrients, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the primary sterol found in fungal cell membranes?",
    options: [
      "Cholesterol",
      "Ergosterol",
      "Glycogen",
      "Cellulose"
    ],
    correct: 1,
    explanation: "The document specifies that ergosterol is the major sterol in fungal cell membranes, regulating permeability and fluidity, unlike cholesterol in mammalian cells."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which type of fungi feeds on dead and decaying matter?",
    options: [
      "Parasitic",
      "Saprophytic",
      "Symbiotic",
      "Predatory"
    ],
    correct: 1,
    explanation: "Saprophytic fungi feed on dead and decaying matter, as stated in the document, unlike parasitic or symbiotic fungi."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "What is a key feature of fungal reproduction?",
    options: [
      "Photosynthetic reproduction",
      "Spore production",
      "Embryonic development",
      "Binary fission"
    ],
    correct: 1,
    explanation: "Fungi develop from spores, both sexually and asexually, which is a key reproductive feature highlighted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is a symbiotic relationship between fungi and plant roots?",
    options: [
      "Lichen",
      "Mycorrhizae",
      "Sporangium",
      "Conidia"
    ],
    correct: 1,
    explanation: "Mycorrhizae are associations between fungi and plant roots, benefiting both, as described in the document. Lichens involve algae, not plant roots."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which type of mycorrhizae forms a sheath around the plant root?",
    options: [
      "Endomycorrhizae",
      "Ectomycorrhizae",
      "Saprophytic mycorrhizae",
      "Parasitic mycorrhizae"
    ],
    correct: 1,
    explanation: "The document explains that ectomycorrhizae form a sheath around the root, with hyphae extending into the soil, unlike endomycorrhizae."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Endomycorrhizae differ from ectomycorrhizae because they:",
    options: [
      "Form a sheath around the root",
      "Penetrate deeper into cortical cells",
      "Are less common in plants",
      "Do not involve hyphae"
    ],
    correct: 1,
    explanation: "Endomycorrhizae penetrate deeper into the cortical cells of the plant root, while ectomycorrhizae form a sheath without deep penetration, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which group of fungi is classified as imperfect fungi due to the absence of sexual reproduction?",
    options: [
      "Zygomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    correct: 3,
    explanation: "Deuteromycetes, or imperfect fungi, do not follow a regular sexual reproduction cycle, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What type of spores are produced by Ascomycetes?",
    options: [
      "Zygospores",
      "Ascospores",
      "Basidiospores",
      "Conidiospores"
    ],
    correct: 1,
    explanation: "Ascomycetes, also called sac fungi, produce sexual spores called ascospores, as stated in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following fungi is an example of a Basidiomycete?",
    options: [
      "Saccharomyces",
      "Penicillium",
      "Mushrooms",
      "Trichoderma"
    ],
    correct: 2,
    explanation: "The document identifies mushrooms as the most commonly found basidiomycetes, which often live as parasites."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Oomycetes are also known as:",
    options: [
      "True fungi",
      "Water molds",
      "Sac fungi",
      "Club fungi"
    ],
    correct: 1,
    explanation: "The document refers to oomycetes as water molds, distinguishing them from true fungi due to their closer relation to algae."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is a distinguishing feature of oomycete zoospores?",
    options: [
      "They lack flagella",
      "They have both tinsel and whiplash flagella",
      "They are produced in asci",
      "They are non-motile"
    ],
    correct: 1,
    explanation: "Oomycete zoospores have both a tinsel and a whiplash flagellum, typically attached in a ventral groove, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following diseases is caused by oomycetes?",
    options: [
      "Athlete's foot",
      "Late blight of potato",
      "Ringworm",
      "Yeast infection"
    ],
    correct: 1,
    explanation: "The document lists late blight of potato as a notable disease caused by oomycetes, unlike the other options caused by true fungi."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "How do fungi store their food?",
    options: [
      "As starch",
      "As glycogen",
      "As cellulose",
      "As lipids"
    ],
    correct: 1,
    explanation: "Fungi store their food in the form of glycogen, as noted in the document, unlike plants that store starch."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the role of pheromones in fungi?",
    options: [
      "To attract prey",
      "To facilitate sexual reproduction",
      "To digest food externally",
      "To form spores"
    ],
    correct: 1,
    explanation: "Pheromones are chemical substances produced by fungi to facilitate sexual reproduction between male and female fungal cells, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following is an example of a symbiotic relationship involving fungi?",
    options: [
      "Penicillin production",
      "Lichens",
      "Food spoilage",
      "Parasitic infections"
    ],
    correct: 1,
    explanation: "Lichens are a symbiotic association between algae and fungi, where both benefit, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the primary mode of asexual reproduction in fungi?",
    options: [
      "Budding",
      "Spore formation",
      "Fragmentation",
      "Binary fission"
    ],
    correct: 1,
    explanation: "The document states that the most common mode of asexual reproduction in fungi is through the formation of asexual spores."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which type of spore is produced in a sporangium?",
    options: [
      "Conidiospores",
      "Ascospores",
      "Sporangiospores",
      "Basidiospores"
    ],
    correct: 2,
    explanation: "Sporangiospores are produced in a sporangium, as noted in the document, unlike other spore types."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "What is the term for the fusion of two haploid cells during fungal sexual reproduction?",
    options: [
      "Karyogamy",
      "Plasmogamy",
      "Meiosis",
      "Mitosis"
    ],
    correct: 1,
    explanation: "Plasmogamy is the fusion of two haploid cells' cytoplasm, leading to a dikaryotic stage, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which stage of fungal sexual reproduction involves the fusion of haploid nuclei?",
    options: [
      "Plasmogamy",
      "Karyogamy",
      "Meiosis",
      "Sporulation"
    ],
    correct: 1,
    explanation: "Karyogamy is the stage where haploid nuclei fuse to form a diploid zygote nucleus, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is a characteristic of homothallic fungi?",
    options: [
      "They require two different mycelia to reproduce sexually",
      "They are self-fertile",
      "They lack sexual reproduction",
      "They only reproduce asexually"
    ],
    correct: 1,
    explanation: "Homothallic fungi are self-fertile, meaning both mating types are present in the same mycelium, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is a benefit of mycorrhizal associations for plants?",
    options: [
      "Increased chlorophyll production",
      "Enhanced water and nutrient uptake",
      "Protection from sunlight",
      "Reduced root growth"
    ],
    correct: 1,
    explanation: "Mycorrhizal fungi increase the plant's ability to obtain water and nutrients from the soil, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which group of fungi includes the yeast Saccharomyces?",
    options: [
      "Zygomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    correct: 1,
    explanation: "Saccharomyces is an example of an Ascomycete, or sac fungus, as stated in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the primary function of ergosterol in fungal cell membranes?",
    options: [
      "Energy storage",
      "Regulating permeability and fluidity",
      "Photosynthesis",
      "Spore production"
    ],
    correct: 1,
    explanation: "Ergosterol regulates the permeability and fluidity of fungal cell membranes, similar to cholesterol in mammalian cells, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which type of fungi is most likely to cause skin infections?",
    options: [
      "Saprophytic",
      "Parasitic",
      "Symbiotic",
      "Oomycetes"
    ],
    correct: 1,
    explanation: "Parasitic fungi live on other organisms and are responsible for many skin infections, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What type of reproduction in fungi involves fragmentation of hyphae?",
    options: [
      "Sexual reproduction",
      "Vegetative reproduction",
      "Asexual reproduction",
      "Spore dispersal"
    ],
    correct: 1,
    explanation: "Vegetative reproduction in fungi includes fragmentation of hyphae, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is NOT a type of asexual spore in fungi?",
    options: [
      "Conidiospores",
      "Sporangiospores",
      "Ascospores",
      "Zoospores"
    ],
    correct: 2,
    explanation: "Ascospores are sexual spores produced by Ascomycetes, while conidiospores, sporangiospores, and zoospores are asexual, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "What is the primary role of fungi in recycling?",
    options: [
      "Producing oxygen",
      "Decomposing dead organic matter",
      "Synthesizing carbohydrates",
      "Fixing nitrogen"
    ],
    correct: 1,
    explanation: "Fungi, particularly saprophytic ones, play a major role in recycling by decomposing dead organic matter, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following is an example of a fungal antibiotic?",
    options: [
      "Penicillin",
      "Aspirin",
      "Insulin",
      "Morphine"
    ],
    correct: 0,
    explanation: "Penicillin, derived from the fungus Penicillium, is a well-known fungal antibiotic, as stated in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the term for fungi that live in a mutually beneficial relationship with algae?",
    options: [
      "Mycorrhizae",
      "Lichens",
      "Parasites",
      "Saprophytes"
    ],
    correct: 1,
    explanation: "Lichens are the symbiotic association between fungi and algae, where fungi provide shelter and algae synthesize carbohydrates, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which fungal group is characterized by the absence of septa in their hyphae?",
    options: [
      "Ascomycetes",
      "Basidiomycetes",
      "Zygomycetes",
      "Deuteromycetes"
    ],
    correct: 2,
    explanation: "Zygomycetes have hyphae without septa, unlike other fungal groups, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the primary mode of nutrition for parasitic fungi?",
    options: [
      "Absorbing nutrients from dead matter",
      "Absorbing nutrients from living hosts",
      "Photosynthesis",
      "Synthesizing carbohydrates"
    ],
    correct: 1,
    explanation: "Parasitic fungi obtain nutrients by living on and absorbing from living hosts, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is a spore produced from a sporangium?",
    options: [
      "Ascospore",
      "Basidiospore",
      "Zoospore",
      "Conidiospore"
    ],
    correct: 2,
    explanation: "Zoospores, particularly in oomycetes, are produced in sporangia, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is a key difference between oomycetes and true fungi?",
    options: [
      "Oomycetes have chlorophyll",
      "Oomycetes are more closely related to algae",
      "Oomycetes lack hyphae",
      "Oomycetes reproduce only sexually"
    ],
    correct: 1,
    explanation: "Oomycetes are more closely related to algae and green plants than to true fungi, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of fungal mitosis?",
    options: [
      "Dissolution of the nuclear envelope",
      "No dissolution of the nuclear envelope",
      "Formation of chloroplasts",
      "Production of flagella"
    ],
    correct: 1,
    explanation: "Fungal mitosis occurs without the dissolution of the nuclear envelope, as stated in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What type of spores are produced by Basidiomycetes?",
    options: [
      "Ascospores",
      "Basidiospores",
      "Zygospores",
      "Sporangiospores"
    ],
    correct: 1,
    explanation: "Basidiomycetes produce sexual spores called basidiospores, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following is a harmful effect of fungi?",
    options: [
      "Antibiotic production",
      "Food spoilage",
      "Recycling organic matter",
      "Biocontrol of pests"
    ],
    correct: 1,
    explanation: "Fungi cause significant food spoilage, leading to economic losses, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the role of the fungal partner in a lichen?",
    options: [
      "Photosynthesis",
      "Providing shelter",
      "Nutrient absorption from soil",
      "Spore production"
    ],
    correct: 1,
    explanation: "In lichens, the fungal partner provides shelter for the algae, which synthesize carbohydrates, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following fungi is used in beer and bread production?",
    options: [
      "Penicillium",
      "Saccharomyces",
      "Rhizopus",
      "Trichoderma"
    ],
    correct: 1,
    explanation: "Saccharomyces, a yeast, is commonly used in the production of beer and bread, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "What is the term for the stage in fungal sexual reproduction where two haploid nuclei coexist in a single cell?",
    options: [
      "Dikaryotic stage",
      "Diploid stage",
      "Haploid stage",
      "Zygotic stage"
    ],
    correct: 0,
    explanation: "The dikaryotic stage occurs after plasmogamy, where two haploid nuclei coexist in a single cell, as described in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "Which type of mycorrhizae is more common in plants?",
    options: [
      "Ectomycorrhizae",
      "Endomycorrhizae",
      "Parasitic mycorrhizae",
      "Saprophytic mycorrhizae"
    ],
    correct: 1,
    explanation: "Endomycorrhizae are far more common than ectomycorrhizae in plants, as stated in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the primary method of spore dispersal in fungi?",
    options: [
      "Water absorption",
      "Wind or animal dispersal",
      "Photosynthetic release",
      "Root absorption"
    ],
    correct: 1,
    explanation: "Fungal spores are primarily dispersed by wind or animals, allowing colonization of new environments, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following is a feature of fungal cell walls?",
    options: [
      "Cellulose",
      "Chitin",
      "Lignin",
      "Pectin"
    ],
    correct: 1,
    explanation: "Fungal cell walls are made of chitin, a distinguishing feature from plant cell walls, as noted in the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "🟩",
    q: "What is the term for the sexual reproductive structure in Ascomycetes?",
    options: [
      "Sporangium",
      "Ascus",
      "Basidium",
      "Conidium"
    ],
    correct: 1,
    explanation: "The ascus is the sexual reproductive structure in Ascomycetes where ascospores are produced, as per the document."
  },
  {
    type: "MCQ",
    topic: "Fungi",
    year: "Elevate Your Potential Mentorship - Fungi MCQs .pdf",
    tag: "⭐",
    q: "Which of the following is a major economic benefit of fungi?",
    options: [
      "Causing plant diseases",
      "Producing antibiotics",
      "Spoiling stored food",
      "Causing skin infections"
    ],
    correct: 1,
    explanation: "Fungi, such as Penicillium, produce antibiotics like penicillin, a major economic benefit, as described in the document."
  },

  // Viruses MCQs
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary structural component of a virus that surrounds its nucleic acid core?",
    options: [
      "Capsid",
      "Envelope",
      "Spiral sheath",
      "End plate"
    ],
    correct: 0,
    explanation: "The capsid is the protein coat that surrounds the nucleic acid core of a virus, providing protection to the genetic material. The notes specify that viruses are composed of a nucleic acid (DNA or RNA) core surrounded by a protein envelope called the capsid."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following best describes why viruses are not considered cells?",
    options: [
      "They lack a nucleic acid core",
      "They are metabolically active outside a host",
      "They lack cytoplasm and biosynthetic machinery",
      "They can grow on non-living media"
    ],
    correct: 2,
    explanation: "Viruses are not considered cells because they lack cytoplasm and the enzymatic and biosynthetic machinery necessary for independent cellular activities. The notes emphasize that viruses are non-cellular and rely on host cells for replication."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What term is used to describe a single infective viral particle?",
    options: [
      "Viroid",
      "Virion",
      "Capsid",
      "Prophage"
    ],
    correct: 1,
    explanation: "A virion is defined as a single infective viral particle, as stated in the notes under the introduction section, distinguishing it from viroids, capsids, or prophages."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which type of nucleic acid can a virus contain?",
    options: [
      "Both DNA and RNA simultaneously",
      "Either DNA or RNA, but not both",
      "Only double-stranded DNA",
      "Only single-stranded RNA"
    ],
    correct: 1,
    explanation: "The notes clearly state that a virus is called either a DNA virus or an RNA virus, depending on whether it contains DNA or RNA, and it cannot have both."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary function of the capsid in a virus?",
    options: [
      "Replication of genetic material",
      "Protection of the nucleic acid from degradation",
      "Attachment to the host cell wall",
      "Synthesis of viral proteins"
    ],
    correct: 1,
    explanation: "The capsid's primary function, as noted in the structure of viruses section, is to protect the nucleic acid from destruction, such as by DNase enzymes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Bacteriophages are viruses that primarily infect:",
    options: [
      "Plants",
      "Animals",
      "Bacteria",
      "Fungi"
    ],
    correct: 2,
    explanation: "Bacteriophages, or phages, are viruses that infect bacteria, as described in the notes under the structure of viruses section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Who coined the term 'bacteriophage'?",
    options: [
      "Wendell Stanley",
      "Twort",
      "dHerelle",
      "T-even"
    ],
    correct: 2,
    explanation: "The notes state that the term bacteriophage, meaning to eat bacteria, was coined by dHerelle due to their ability to destroy infected bacterial cells through lysis."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which structural component of a bacteriophage facilitates the injection of nucleic acid into the host cell?",
    options: [
      "Capsid",
      "Spiral protein sheath",
      "Tail fibers",
      "End plate"
    ],
    correct: 1,
    explanation: "The spiral protein sheath retracts to allow the nucleic acid to pass from the capsid into the host cell's cytoplasm, as detailed in the notes under the structure of viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "During which stage of viral infection does the phage genome take over the host's synthetic machinery?",
    options: [
      "Attachment",
      "Injection",
      "Synthesis",
      "Release"
    ],
    correct: 2,
    explanation: "In the synthesis stage of viral infection, the phage genome subverts the host's synthetic machinery to produce new phage components, as outlined in the viral infection section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What enzyme is involved in perforating the bacterial cell wall during phage infection?",
    options: [
      "Reverse transcriptase",
      "Early muramidase",
      "Late muramidase",
      "DNA polymerase"
    ],
    correct: 1,
    explanation: "The notes specify that early muramidase perforates the bacterial cell wall during the injection stage, enabling the phage nucleic acid to enter the host cell."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a characteristic of the lytic cycle?",
    options: [
      "The host cell survives and reproduces",
      "The viral genome integrates into the host DNA",
      "The host cell is lysed after viral replication",
      "The virus remains dormant indefinitely"
    ],
    correct: 2,
    explanation: "The lytic cycle involves the immediate replication of the virion, followed by lysis and destruction of the host cell, as described in the lytic and lysogenic cycles section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the term for a bacteriophage that can undergo both lytic and lysogenic cycles?",
    options: [
      "Virulent phage",
      "Temperate phage",
      "Prophage",
      "Viroid"
    ],
    correct: 1,
    explanation: "Temperate phages can undergo both lytic and lysogenic cycles, as noted in the lysogenic cycle section, unlike virulent phages which only follow the lytic cycle."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "In the lysogenic cycle, the viral genome is referred to as:",
    options: [
      "Capsid",
      "Prophage",
      "Virion",
      "End plate"
    ],
    correct: 1,
    explanation: "During the lysogenic cycle, the viral genome integrates into the host DNA and is called a prophage, as per the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following viruses is responsible for causing elongated colored stripes on maize leaves?",
    options: [
      "Tobacco mosaic virus",
      "Cassava mosaic virus",
      "Maize streak virus",
      "Cucumber mosaic virus"
    ],
    correct: 2,
    explanation: "The notes under the maize streak virus section state that this virus causes elongated colored stripes on the leaves of maize plants."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary mode of transmission for the Ebola virus?",
    options: [
      "Airborne droplets",
      "Contact with infected bodily fluids",
      "Insect bites",
      "Contaminated food"
    ],
    correct: 1,
    explanation: "The notes indicate that Ebola is primarily transmitted through contact with infected bodily fluids, such as blood or semen."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which viral disease was eradicated globally by 1977?",
    options: [
      "Chicken pox",
      "Smallpox",
      "Ebola",
      "Rabies"
    ],
    correct: 1,
    explanation: "The notes mention that the last recorded case of smallpox was in 1977, and a global vaccination campaign eradicated the disease."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the genome type of the Varicella zoster virus?",
    options: [
      "Single-stranded RNA",
      "Double-stranded DNA",
      "Single-stranded DNA",
      "Double-stranded RNA"
    ],
    correct: 1,
    explanation: "The notes under the chicken pox section specify that the Varicella zoster virus has a double-stranded DNA genome."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a symptom of Ebola viral disease?",
    options: [
      "Chronic fatigue",
      "Extensive hemorrhage",
      "Joint stiffness",
      "Skin discoloration"
    ],
    correct: 1,
    explanation: "The notes list extensive hemorrhage as a symptom of Ebola viral disease, along with fever, muscle pains, and others."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "The Human Immunodeficiency Virus (HIV) belongs to which viral family?",
    options: [
      "Filoviridae",
      "Retroviridae",
      "Rhabdoviridae",
      "Begomovirus"
    ],
    correct: 1,
    explanation: "HIV is a member of the Retroviridae family, as noted in the acquired immune deficiency syndrome section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary target of HIV in the human body?",
    options: [
      "Red blood cells",
      "CD4 cells",
      "Liver cells",
      "Nerve cells"
    ],
    correct: 1,
    explanation: "The notes state that HIV targets CD4 cells, which are critical for the immune response, leading to immune system destruction."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which enzyme allows retroviruses like HIV to integrate their genetic material into the host's DNA?",
    options: [
      "DNA polymerase",
      "Reverse transcriptase",
      "RNA polymerase",
      "Late muramidase"
    ],
    correct: 1,
    explanation: "The notes explain that retroviruses like HIV use reverse transcriptase to convert their RNA into DNA, which integrates into the host's DNA."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is a viroid?",
    options: [
      "A virus with a protein capsid",
      "An infectious particle lacking a protein coat",
      "A bacteriophage",
      "A dormant virus particle"
    ],
    correct: 1,
    explanation: "The notes define viroids as infective virus particles that do not have protein capsids, distinguishing them from typical viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of plant viruses?",
    options: [
      "They are mostly double-stranded DNA viruses",
      "They are primarily single-stranded RNA viruses",
      "They can replicate outside a host",
      "They infect only animals"
    ],
    correct: 1,
    explanation: "The notes state that the majority of plant viruses are single-stranded RNA viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "What is the approximate global economic loss caused by viral diseases in agriculture annually?",
    options: [
      "$5 billion",
      "$10 billion",
      "$15 billion",
      "$20 billion"
    ],
    correct: 2,
    explanation: "The notes estimate that global losses due to viral diseases in agriculture are about $15 billion annually."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which virus is transmitted by insects and affects maize plants?",
    options: [
      "Cassava mosaic virus",
      "Maize streak virus",
      "Tobacco mosaic virus",
      "Tomato yellow leaf curl virus"
    ],
    correct: 1,
    explanation: "The maize streak virus is transmitted by insects and affects maize plants, as noted in the maize streak virus section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What enzyme is involved in perforating the bacterial cell wall during phage infection?",
    options: [
      "Reverse transcriptase",
      "Early muramidase",
      "Late muramidase",
      "DNA polymerase"
    ],
    correct: 1,
    explanation: "The notes specify that early muramidase perforates the bacterial cell wall during the injection stage, enabling the phage nucleic acid to enter the host cell."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a characteristic of the lytic cycle?",
    options: [
      "The host cell survives and reproduces",
      "The viral genome integrates into the host DNA",
      "The host cell is lysed after viral replication",
      "The virus remains dormant indefinitely"
    ],
    correct: 2,
    explanation: "The lytic cycle involves the immediate replication of the virion, followed by lysis and destruction of the host cell, as described in the lytic and lysogenic cycles section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the term for a bacteriophage that can undergo both lytic and lysogenic cycles?",
    options: [
      "Virulent phage",
      "Temperate phage",
      "Prophage",
      "Viroid"
    ],
    correct: 1,
    explanation: "Temperate phages can undergo both lytic and lysogenic cycles, as noted in the lysogenic cycle section, unlike virulent phages which only follow the lytic cycle."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "In the lysogenic cycle, the viral genome is referred to as:",
    options: [
      "Capsid",
      "Prophage",
      "Virion",
      "End plate"
    ],
    correct: 1,
    explanation: "During the lysogenic cycle, the viral genome integrates into the host DNA and is called a prophage, as per the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following viruses is responsible for causing elongated colored stripes on maize leaves?",
    options: [
      "Tobacco mosaic virus",
      "Cassava mosaic virus",
      "Maize streak virus",
      "Cucumber mosaic virus"
    ],
    correct: 2,
    explanation: "The notes under the maize streak virus section state that this virus causes elongated colored stripes on the leaves of maize plants."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary mode of transmission for the Ebola virus?",
    options: [
      "Airborne droplets",
      "Contact with infected bodily fluids",
      "Insect bites",
      "Contaminated food"
    ],
    correct: 1,
    explanation: "The notes indicate that Ebola is primarily transmitted through contact with infected bodily fluids, such as blood or semen."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which viral disease was eradicated globally by 1977?",
    options: [
      "Chicken pox",
      "Smallpox",
      "Ebola",
      "Rabies"
    ],
    correct: 1,
    explanation: "The notes mention that the last recorded case of smallpox was in 1977, and a global vaccination campaign eradicated the disease."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the genome type of the Varicella zoster virus?",
    options: [
      "Single-stranded RNA",
      "Double-stranded DNA",
      "Single-stranded DNA",
      "Double-stranded RNA"
    ],
    correct: 1,
    explanation: "The notes under the chicken pox section specify that the Varicella zoster virus has a double-stranded DNA genome."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a symptom of Ebola viral disease?",
    options: [
      "Chronic fatigue",
      "Extensive hemorrhage",
      "Joint stiffness",
      "Skin discoloration"
    ],
    correct: 1,
    explanation: "The notes list extensive hemorrhage as a symptom of Ebola viral disease, along with fever, muscle pains, and others."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "The Human Immunodeficiency Virus (HIV) belongs to which viral family?",
    options: [
      "Filoviridae",
      "Retroviridae",
      "Rhabdoviridae",
      "Begomovirus"
    ],
    correct: 1,
    explanation: "HIV is a member of the Retroviridae family, as noted in the acquired immune deficiency syndrome section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary target of HIV in the human body?",
    options: [
      "Red blood cells",
      "CD4 cells",
      "Liver cells",
      "Nerve cells"
    ],
    correct: 1,
    explanation: "The notes state that HIV targets CD4 cells, which are critical for the immune response, leading to immune system destruction."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which enzyme allows retroviruses like HIV to integrate their genetic material into the host's DNA?",
    options: [
      "DNA polymerase",
      "Reverse transcriptase",
      "RNA polymerase",
      "Late muramidase"
    ],
    correct: 1,
    explanation: "The notes explain that retroviruses like HIV use reverse transcriptase to convert their RNA into DNA, which integrates into the host's DNA."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is a viroid?",
    options: [
      "A virus with a protein capsid",
      "An infectious particle lacking a protein coat",
      "A bacteriophage",
      "A dormant virus particle"
    ],
    correct: 1,
    explanation: "The notes define viroids as infective virus particles that do not have protein capsids, distinguishing them from typical viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of plant viruses?",
    options: [
      "They are mostly double-stranded DNA viruses",
      "They are primarily single-stranded RNA viruses",
      "They can replicate outside a host",
      "They infect only animals"
    ],
    correct: 1,
    explanation: "The notes state that the majority of plant viruses are single-stranded RNA viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "What is the approximate global economic loss caused by viral diseases in agriculture annually?",
    options: [
      "$5 billion",
      "$10 billion",
      "$15 billion",
      "$20 billion"
    ],
    correct: 2,
    explanation: "The notes estimate that global losses due to viral diseases in agriculture are about $15 billion annually."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which virus is transmitted by insects and affects maize plants?",
    options: [
      "Cassava mosaic virus",
      "Maize streak virus",
      "Tobacco mosaic virus",
      "Tomato yellow leaf curl virus"
    ],
    correct: 1,
    explanation: "The maize streak virus is transmitted by insects and affects maize plants, as noted in the maize streak virus section."
  },
  


  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "The term 'virulent' refers to:",
    options: [
      "A virus's ability to remain dormant",
      "An agent that causes infectious disease",
      "A virus's protein coat",
      "A non-infectious viral particle"
    ],
    correct: 1,
    explanation: "The notes define 'virulent' as referring to an agent that causes infectious disease."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is NOT a mode of Ebola virus transmission?",
    options: [
      "Contact with contaminated needles",
      "Consumption of bush meat",
      "Airborne transmission",
      "Contact with infected semen"
    ],
    correct: 2,
    explanation: "The notes do not list airborne transmission as a mode of Ebola virus transmission, but include contact with bodily fluids, bush meat, and contaminated equipment."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the incubation period for rabies symptoms to appear?",
    options: [
      "221 days",
      "10 days",
      "13 months",
      "6-12 months"
    ],
    correct: 1,
    explanation: "The notes specify that rabies symptoms appear after an incubation period of 10 days."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which virus is responsible for cassava mosaic disease?",
    options: [
      "Mastrevirus",
      "Begomovirus",
      "Lentivirus",
      "Filovirus"
    ],
    correct: 1,
    explanation: "The notes state that cassava mosaic disease is caused by a virus belonging to the genus Begomovirus."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary function of tail fibers in bacteriophages?",
    options: [
      "Protection of the nucleic acid",
      "Attachment to the host cell",
      "Injection of genetic material",
      "Lysis of the host cell"
    ],
    correct: 1,
    explanation: "The notes indicate that tail fibers, along with the end plate, are responsible for attaching the phage to specific receptor sites on the host cell wall."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following viruses has a filamentous shape?",
    options: [
      "Ebola virus",
      "Smallpox virus",
      "HIV",
      "Rabies virus"
    ],
    correct: 0,
    explanation: "The notes describe Ebola virus particles as filamentous under the Ebola virus disease section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the name of the protein coat surrounding the viral genome?",
    options: [
      "Capsid",
      "Envelope",
      "Sheath",
      "Virion"
    ],
    correct: 0,
    explanation: "The capsid is the protein coat surrounding the viral genome, as defined in the nature of viruses section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which viral disease is transmitted by infected animals such as bats and dogs?",
    options: [
      "Ebola",
      "Rabies",
      "Chicken pox",
      "AIDS"
    ],
    correct: 1,
    explanation: "The notes state that rabies is transmitted by infected animals such as bats, foxes, and dogs."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary mode of HIV transmission?",
    options: [
      "Airborne droplets",
      "Sexual intercourse",
      "Insect bites",
      "Contaminated water"
    ],
    correct: 1,
    explanation: "The notes identify sexual intercourse as the major mode of HIV transmission, particularly through seminal fluid."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a characteristic of the lysogenic cycle?",
    options: [
      "Immediate lysis of the host cell",
      "Integration of viral DNA into the host genome",
      "Production of viroids",
      "Lack of viral replication"
    ],
    correct: 1,
    explanation: "The lysogenic cycle involves the integration of the viral genome into the host DNA, as described in the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the genome type of the Ebola virus?",
    options: [
      "Double-stranded DNA",
      "Single-stranded RNA",
      "Single-stranded DNA",
      "Double-stranded RNA"
    ],
    correct: 1,
    explanation: "The notes specify that the Ebola virus has a single-stranded RNA genome."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "Which of the following is NOT a symptom of Ebola viral disease?",
    options: [
      "Fever",
      "Muscle pains",
      "Blindness",
      "Hemorrhage"
    ],
    correct: 2,
    explanation: "The notes list fever, muscle pains, and hemorrhage as symptoms of Ebola, but blindness is not mentioned."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary vector for maize streak virus?",
    options: [
      "Bats",
      "Insects",
      "Primates",
      "Contaminated soil"
    ],
    correct: 1,
    explanation: "The notes state that maize streak virus is transmitted by insects."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "Which virus was first identified in Los Angeles in 1981?",
    options: [
      "Ebola virus",
      "HIV",
      "Rabies virus",
      "Smallpox virus"
    ],
    correct: 1,
    explanation: "The notes mention that HIV was first identified in Los Angeles in 1981."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the role of late muramidase in the phage replication cycle?",
    options: [
      "Attachment to the host cell",
      "Injection of nucleic acid",
      "Lysis of the host cell wall",
      "Synthesis of viral components"
    ],
    correct: 2,
    explanation: "The notes specify that late muramidase lyses the host cell wall during the release stage, liberating infectious phage particles."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following viruses is classified as a retrovirus?",
    options: [
      "Ebola virus",
      "HIV",
      "Smallpox virus",
      "Rabies virus"
    ],
    correct: 1,
    explanation: "HIV is classified as a retrovirus under the Retroviridae family, as noted in the acquired immune deficiency syndrome section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary effect of cassava mosaic virus on plants?",
    options: [
      "Stunted growth",
      "Increased fruit production",
      "Enhanced photosynthesis",
      "Root elongation"
    ],
    correct: 0,
    explanation: "The notes indicate that a symptom of viral infection in plants, including cassava mosaic virus, is reduced growth rates leading to dwarfing or stunting."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of viruses outside a host cell?",
    options: [
      "They are metabolically active",
      "They are metabolically inert",
      "They can replicate independently",
      "They produce enzymes"
    ],
    correct: 1,
    explanation: "The notes state that viruses are metabolically inert outside the host cell."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the term for the process by which viruses hijack a host cell's machinery to produce viral proteins?",
    options: [
      "Translation",
      "Transcription",
      "Replication",
      "Assembly"
    ],
    correct: 1,
    explanation: "The notes explain that viruses hijack the host cell's transcription process to produce viral proteins."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following viruses causes yellowish variegated coloration in cassava leaves?",
    options: [
      "Maize streak virus",
      "Tobacco mosaic virus",
      "Cassava mosaic virus",
      "Cucumber mosaic virus"
    ],
    correct: 2,
    explanation: "The notes state that the Begomovirus genus, responsible for cassava mosaic disease, causes yellowish variegated coloration in cassava leaves."
  },
   {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the name of the viral genome integrated into the host DNA during the lysogenic cycle?",
    options: [
      "Virion",
      "Prophage",
      "Capsid",
      "Viroid"
    ],
    correct: 1,
    explanation: "The viral genome integrated into the host DNA during the lysogenic cycle is called a prophage, as per the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which viral disease is caused by the Varicella zoster virus?",
    options: [
      "Smallpox",
      "Chicken pox",
      "Rabies",
      "Ebola"
    ],
    correct: 1,
    explanation: "The notes identify the Varicella zoster virus as the cause of chicken pox."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary mode of transmission for rabies?",
    options: [
      "Contact with infected bodily fluids",
      "Bites from infected animals",
      "Airborne droplets",
      "Contaminated food"
    ],
    correct: 1,
    explanation: "The notes state that rabies is transmitted by bites from infected animals such as bats, foxes, and dogs."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which of the following is a characteristic of viroids?",
    options: [
      "They have a protein capsid",
      "They lack a protein coat",
      "They infect only bacteria",
      "They are metabolically active outside a host"
    ],
    correct: 1,
    explanation: "Viroids are defined in the notes as infective virus particles that do not have protein capsids."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "What is the estimated number of plant diseases caused by viruses?",
    options: [
      "Over 1000",
      "Over 2000",
      "Over 3000",
      "Over 4000"
    ],
    correct: 1,
    explanation: "The notes estimate that over 2000 kinds of plant diseases are caused by 600 different kinds of viruses."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "Which virus is a member of the genus Mastrevirus?",
    options: [
      "Cassava mosaic virus",
      "Maize streak virus",
      "Tobacco mosaic virus",
      "Tomato spotted wilt virus"
    ],
    correct: 1,
    explanation: "The notes classify maize streak virus as a member of the genus Mastrevirus."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary role of the spiral protein sheath in bacteriophages?",
    options: [
      "Protection of the capsid",
      "Retraction to allow nucleic acid injection",
      "Attachment to the host cell",
      "Lysis of the host cell"
    ],
    correct: 1,
    explanation: "The spiral protein sheath retracts to facilitate nucleic acid injection into the host cell, as noted in the structure of viruses section."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a symptom of maize streak virus infection?",
    options: [
      "Yellowing of roots",
      "Elongated colored stripes on leaves",
      "Increased leaf size",
      "Enhanced fruit production"
    ],
    correct: 1,
    explanation: "The notes describe elongated colored stripes on leaves as a symptom of maize streak virus infection."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the term for the empty protein shell left after phage nucleic acid injection?",
    options: [
      "Capsid",
      "Prophage",
      "Protein ghost",
      "Virion"
    ],
    correct: 2,
    explanation: "The empty protein shell remaining after nucleic acid injection is called the protein ghost, as per the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which viral disease is caused by the Filovirus family?",
    options: [
      "Rabies",
      "Ebola",
      "Chicken pox",
      "AIDS"
    ],
    correct: 1,
    explanation: "The notes classify Ebola under the Filoviridae family."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "🟩",
    q: "What is the primary function of the end plate in bacteriophages?",
    options: [
      "Nucleic acid replication",
      "Attachment to the host cell",
      "Protection of the genome",
      "Lysis of the host cell"
    ],
    correct: 1,
    explanation: "The end plate, along with tail fibers, is responsible for attachment to the host cell, as stated in the notes."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following viruses is associated with the genus Begomovirus?",
    options: [
      "Maize streak virus",
      "Tobacco mosaic virus",
      "Cassava mosaic virus",
      "Cucumber mosaic virus"
    ],
    correct: 2,
    explanation: "The notes associate cassava mosaic virus with the genus Begomovirus."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "❗",
    q: "What is the incubation period for Ebola viral disease symptoms to appear?",
    options: [
      "1-10 days",
      "2-21 days",
      "1-3 months",
      "6-12 months"
    ],
    correct: 1,
    explanation: "The notes specify that Ebola symptoms start 2-21 days after contracting the virus. The previous 221 days might have been a typo or specific obscure reference not aligned with general knowledge."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "Which of the following is a characteristic of retroviruses?",
    options: [
      "They contain double-stranded DNA",
      "They use reverse transcriptase to integrate into host DNA",
      "They lack a protein capsid",
      "They are metabolically active outside a host"
    ],
    correct: 1,
    explanation: "The notes describe retroviruses as using reverse transcriptase to convert RNA into DNA for integration into the host's DNA."
  },
  {
    type: "MCQ",
    topic: "Viruses",
    year: "Elevate Your Potential Mentorship - VIRUSES MCQs.pdf",
    tag: "⭐",
    q: "What is the primary effect of viral infection on plant growth?",
    options: [
      "Increased photosynthesis",
      "Dwarfing or stunting",
      "Enhanced root growth",
      "Increased fruit production"
    ],
    correct: 1,
    explanation: "The notes state that a symptom of viral infection in plants is reduced growth rates, leading to dwarfing or stunting."
  },

  // Invertebrates MCQs
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI110 2014-23 Sessional Papers",
    tag: "🟩",
    q: "An animal that is known as a nematode is described as:",
    options: [
      "a vertebrate whose body structure is elongate and non-segmented.",
      "a vertebrate whose body structure is elongate and segmented.",
      "an invertebrate whose body structure is elongate and segmented.",
      "an invertebrate whose body structure is elongate and non-segmented.",
      "I do not know."
    ],
    correct: 3,
    explanation: "Nematodes are unsegmented roundworms belonging to the phylum Nematoda, which are invertebrates. Their bodies are typically elongate and cylindrical, lacking internal segmentation."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "🟩",
    q: "An organism characterized with a soft muscular body and foot belongs to one of the invertebrate groups called",
    options: [
      "The Jellyfish",
      "The Flatworms",
      "The Crustaceans",
      "The Molluscs",
      "I do not know."
    ],
    correct: 3,
    explanation: "Molluscs (Phylum Mollusca) are characterized by a soft, unsegmented body, typically with a muscular foot used for locomotion or attachment, and a mantle that secretes a shell (though some, like slugs and octopuses, have reduced or absent shells)."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "🟩",
    q: "Which of the following features are not associated with most insects?",
    options: [
      "Jointed appendages",
      "Thorax",
      "Antennae",
      "Abdomen with three pairs of legs",
      "I do not know."
    ],
    correct: 3,
    explanation: "Insects typically have three pairs of legs (total of 6 legs) attached to the thorax, not the abdomen. Jointed appendages, a distinct thorax, and antennae are all characteristic features of insects."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "⭐",
    q: "A complex non-cellular substance secreted by the epidermis in insects is known as",
    options: [
      "endoskeleton",
      "mucopolysaccharide",
      "cuticle",
      "chitinase",
      "I do not know."
    ],
    correct: 2,
    explanation: "The cuticle is a non-cellular, protective outer layer secreted by the epidermis of insects and other arthropods. It provides structural support and protection, forming the exoskeleton. Chitin is a major component of the cuticle, but the cuticle itself is the substance."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "⭐",
    q: "Which of the following insects is a carrier of the filarid worms known to cause elephantiasis in humans?",
    options: [
      "Anopheles",
      "Culex",
      "Aedes",
      "Musca domestica",
      "I do not know."
    ],
    correct: 1,
    explanation: "Wuchereria bancrofti, the filarial worm that causes elephantiasis, is primarily transmitted by mosquitoes, especially those of the genus Culex. Anopheles is known for malaria, and Aedes for dengue/yellow fever."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "🟩",
    q: "The segment in the earthworm body is known as:",
    options: [
      "clitellum",
      "setae",
      "metamere",
      "nephridium",
      "I do not know."
    ],
    correct: 2,
    explanation: "The body of an earthworm (Annelida) is divided into numerous segments, each called a metamere. The clitellum is a glandular segment involved in reproduction, setae are bristles for movement, and nephridia are excretory organs."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "🟩",
    q: "Which of the following is a characteristic of flatworms?",
    options: [
      "Segmented body",
      "Presence of a coelom",
      "Lack of a body cavity",
      "Complete digestive system",
      "I do not know."
    ],
    correct: 2,
    explanation: "Flatworms (Phylum Platyhelminthes) are acoelomate, meaning they lack a body cavity (coelom). They also lack true segmentation and generally have an incomplete digestive system (a single opening)."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "🟩",
    q: "Insects belong to which class?",
    options: [
      "Arachnida",
      "Crustacea",
      "Insecta",
      "Myriapoda",
      "I do not know."
    ],
    correct: 2,
    explanation: "Insects are classified under the Class Insecta within the Phylum Arthropoda. Arachnida (spiders, scorpions), Crustacea (crabs, lobsters), and Myriapoda (centipedes, millipedes) are other classes within Arthropoda."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI 110 TEST 2 NOV 2013",
    tag: "⭐",
    q: "The body of an insect is typically divided into three main parts: head, thorax, and",
    options: [
      "carapace",
      "abdomen",
      "cephalothorax",
      "segment",
      "I do not know."
    ],
    correct: 1,
    explanation: "The insect body is segmented into three distinct regions: the head (sensory and feeding), the thorax (locomotion with legs and wings), and the abdomen (digestion and reproduction)."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI110 Past Test Papers (2)",
    tag: "🟩",
    q: "Which phylum of invertebrates is characterized by dorsoventrally flattened bodies and a lack of body cavity?",
    options: [
      "Annelida",
      "Nematoda",
      "Platyhelminthes",
      "Mollusca"
    ],
    correct: 2,
    explanation: "Phylum Platyhelminthes, commonly known as flatworms, are characterized by their dorsoventrally flattened bodies and are acoelomate (lack a true body cavity). Examples include planarians, flukes, and tapeworms."
  },
  {
    type: "MCQ",
    topic: "Invertebrates",
    year: "BI110 Past Test Papers (2)",
    tag: "🟩",
    q: "Which class of arthropods typically possesses a hard exoskeleton, gills for respiration, and two pairs of antennae, including crabs and lobsters?",
    options: [
      "Insecta",
      "Arachnida",
      "Myriapoda",
      "Crustacea"
    ],
    correct: 3,
    explanation: "Crustaceans (Class Crustacea) are a large group of arthropods, mostly aquatic, characterized by their hard exoskeletons, gills for breathing, and usually two pairs of antennae. Crabs, lobsters, shrimp, and barnacles are well-known examples."
  }
  //add more questions here 
];


  
  
  
  
  
  
  