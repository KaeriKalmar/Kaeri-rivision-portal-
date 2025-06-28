const shortData = [
  {
    topic: "Fungi",
    year: "2017 Test Q4",
    tag: "⭐🟩",
    q: "Name the polysaccharide found in fungal cell walls.",
    answer: ["chitin"],
    explanation: "Fungal cell walls contain chitin, not cellulose like plants."
  },
  {
    topic: "Protista",
    year: "2019 Test Q2",
    tag: "🟩",
    q: "What organelle is used for movement in Amoeba?",
    answer: ["pseudopodia", "pseudopods"],
    explanation: "Amoeba uses pseudopodia to move and engulf food."
  },
  {
    type: "ShortAnswer",
    topic: "Fungi",
    year: "From the notes",
    tag: "🟩",
    q: "Name the polysaccharide that makes up the cell walls of fungi.",
    answer: ["chitin"],
    explanation: "Chitin is a structural polysaccharide found in the cell walls of fungi."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "From the notes",
    tag: "🔄",
    q: "What organelle do euglena use for locomotion?",
    answer: ["flagellum", "flagella"],
    explanation: "Euglena move using a whip-like structure called a flagellum."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "From the notes",
    tag: "❗",
    q: "What is the highest taxonomic rank in biological classification?",
    answer: ["domain"],
    explanation: "The domain is the highest rank in the modern biological taxonomy hierarchy."
  },
  {
    type: "ShortAnswer",
    topic: "Invertebrates",
    year: "From the notes",
    tag: "⭐🟩",
    q: "Which phylum includes animals with stinging cells called cnidocytes?",
    answer: ["cnidaria"],
    explanation: "Cnidarians such as jellyfish and hydra have specialized stinging cells called cnidocytes."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "From the notes",
    tag: "⭐🔄",
    q: "What type of genetic material do retroviruses contain?",
    answer: ["single-stranded RNA", "ssRNA"],
    explanation: "Retroviruses, such as HIV, contain single-stranded RNA which is reverse transcribed into DNA."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What naming convention requires italics for typed scientific names?",
    answer: ["Binomial nomenclature"],
    explanation: "Binomial nomenclature requires italics for both genus and species names when typed."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What is the science of classifying organisms called?",
    answer: ["Taxonomy"],
    explanation: "Taxonomy involves identification, naming and classification."
  },
  {
    type: "ShortAnswer",
    topic: "Archaea",
    year: "2021 Sessional Q58",
    tag: "⭐",
    q: "Which group of archaea thrive in environments with very high salt concentrations?",
    answer: ["Halophiles"],
    explanation: "Halophiles are archaea (and some bacteria) that thrive in environments with very high salt concentrations. 'Halo' means salt, and 'phile' means loving. Thermophiles love heat, methanogens produce methane, and acidophiles love acidic conditions."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2019 Sessional Q59",
    tag: "⭐",
    q: "What is the protein coat of a virus known as?",
    answer: ["Capsid"],
    explanation: "The capsid is the protective protein shell that encloses the viral genetic material (DNA or RNA)."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2020 Sessional Q60",
    tag: "⭐",
    q: "Malaria is caused by a protist belonging to which genus?",
    answer: ["Plasmodium"],
    explanation: "Malaria is a life-threatening disease caused by parasites of the genus *Plasmodium*."
  },
  {
    type: "ShortAnswer",
    topic: "Evolution",
    year: "Undated",
    tag: "🟩",
    q: "Which postzygotic mechanism results in hybrid offspring that fail to complete development or are very frail?",
    answer: ["Reduced hybrid viability"],
    explanation: "Reduced hybrid viability occurs when hybrid offspring are formed but do not survive long or are frail."
  },
  {
    type: "ShortAnswer",
    topic: "Evolution",
    year: "Undated",
    tag: "🟩",
    q: "Which postzygotic mechanism occurs when first-generation hybrids are fertile, but subsequent generations are sterile or less viable?",
    answer: ["Hybrid breakdown"],
    explanation: "Hybrid breakdown is a postzygotic barrier where first-generation hybrids are viable and fertile, but their offspring (F2 or subsequent generations) suffer from reduced viability or fertility."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "⭐",
    q: "What is the correct order of taxonomic ranks from most to least inclusive?",
    answer: ["Kingdom > Phylum > Class > Order > Family > Genus > Species"],
    explanation: "The standard hierarchy is: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species (DKPCOFGS)."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "⭐",
    q: "Which best defines a species in biological terms?",
    answer: ["Organisms that can interbreed and produce fertile offspring"],
    explanation: "The biological species concept emphasizes reproductive compatibility."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "⭐",
    q: "How should 'Escherichia coli' be written when handwriting?",
    answer: ["Escherichia coli (underlined)"],
    explanation: "Genus capitalized, species lowercase, and underlined."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "⭐",
    q: "What is the plural of 'phylum'?",
    answer: ["Phyla"],
    explanation: "Latin-derived plural: phylum → phyla."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "⭐",
    q: "Which is NOT a kingdom in Whittaker's five-kingdom system?",
    answer: ["Archaea"],
    explanation: "Archaea were later separated from Monera."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "Which scientific name would be considered a tautonym?",
    answer: ["Bison bison"],
    explanation: "A tautonym has identical genus and species names (e.g., Bison bison)."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "What is the primary purpose of a dichotomous key?",
    answer: ["To identify organisms based on characteristics"],
    explanation: "Dichotomous keys use paired statements to identify organisms through observable traits."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "Which taxonomic rank is more specific than Family but more general than Species?",
    answer: ["Genus"],
    explanation: "The sequence is: Family > Genus > Species."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "Which taxonomic rank was added above Kingdom in modern systems?",
    answer: ["Domain"],
    explanation: "The three-domain system (Bacteria, Archaea, Eukarya) sits above Kingdoms."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "What is the primary purpose of binomial nomenclature?",
    answer: ["To provide unique, universal names for species"],
    explanation: "Ensures each species has a standardized two-part name globally."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "What is the term for naming a species after its discoverer?",
    answer: ["Eponym"],
    explanation: "E.g., 'smithii' honors a person named Smith."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "What is true about type specimens?",
    answer: ["They serve as permanent references"],
    explanation: "Preserved specimens anchor the definition of a species name."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "How are hybrid organisms named?",
    answer: ["Adding 'x' before the species name"],
    explanation: "E.g., Quercus × alba for a hybrid oak."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🟩",
    q: "What is the abbreviation for the International Code of Nomenclature for algae, fungi, and plants?",
    answer: ["ICN"],
    explanation: "ICN governs naming for these groups (was ICBN for plants)."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "❗",
    q: "What happens if a scientific name is not underlined when handwritten?",
    answer: ["It violates nomenclature rules"],
    explanation: "Handwritten scientific names must be underlined to substitute for italics."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "❗",
    q: "If two scientists name the same species differently, which name has priority?",
    answer: ["The name published first"],
    explanation: "Principle of priority favors the earliest validly published name."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "❗",
    q: "Which is NOT a requirement for a valid species name?",
    answer: ["Must include the discoverer's name"],
    explanation: "Discoverer names are optional (e.g., in eponyms like 'smithii')."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "❗",
    q: "Why can't viruses be classified in the Linnaean system?",
    answer: ["They lack cellular structure"],
    explanation: "Viruses are non-cellular and excluded from traditional taxonomy."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "❗",
    q: "Which taxonomic level is most inclusive after Domain?",
    answer: ["Kingdom"],
    explanation: "Hierarchy: Domain → Kingdom → Phylum → Class → Order..."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "Which taxonomic tool uses molecular data like DNA sequences?",
    answer: ["Phylogenetic tree"],
    explanation: "Phylogenetic trees visualize evolutionary relationships using genetic data."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What is the main advantage of DNA barcoding?",
    answer: ["Identifying species when morphology is unclear"],
    explanation: "DNA barcoding helps identify species using short genetic markers."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What does a phylogenetic tree's branch length typically represent?",
    answer: ["Evolutionary time or divergence"],
    explanation: "Longer branches indicate greater evolutionary divergence."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "Which tool would you use to identify an unknown plant?",
    answer: ["Dichotomous key"],
    explanation: "Dichotomous keys use paired statements for identification."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "DNA barcoding identifies species using:",
    answer: ["Mitochondrial genes"],
    explanation: "Typically uses CO1 gene in mitochondria for animals."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What does a monophyletic group include?",
    answer: ["All descendants of a common ancestor"],
    explanation: "Also called a clade - a complete evolutionary branch."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "What does a paraphyletic group exclude?",
    answer: ["Some descendants of a common ancestor"],
    explanation: "E.g., Reptilia without birds is paraphyletic."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "Converted from MCQ",
    tag: "🔄",
    q: "Why were Cyanobacteria reclassified from plants to bacteria?",
    answer: ["Prokaryotic cell structure"],
    explanation: "Their prokaryotic nature places them with bacteria."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2023 Test 2 Q1.i",
    tag: "⭐",
    q: "Why are viruses considered nonliving?",
    answer: ["They do not carry out metabolic processes."],
    explanation: "Viruses lack the cellular machinery to perform their own metabolic processes."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2023 Exam Q1",
    tag: "⭐❗",
    q: "Why are viruses considered nonliving?",
    answer: ["They do not carry out metabolic processes."],
    explanation: "Viruses lack the cellular machinery to perform their own metabolic processes."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "2023 Test 2 Q1.x",
    tag: "⭐",
    q: "Into what are families grouped in the current taxonomic system?",
    answer: ["orders"],
    explanation: "The taxonomic hierarchy (from broadest to most specific) is Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species. Therefore, families are grouped into orders."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2015 Sessional Q4",
    tag: "❗",
    q: "Which of the following is not a protist: Paramecium, Plasmodium, Penicillium, Euglena?",
    answer: ["Penicillium"],
    explanation: "Penicillium is a genus of fungi, not a protist."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "2021 Test 1 Q3",
    tag: "⭐",
    q: "Which taxonomic group is the most specific?",
    answer: ["Species"],
    explanation: "In the standard taxonomic hierarchy, 'Species' is the most specific rank."
  },
  {
    type: "ShortAnswer",
    topic: "Bacteria",
    year: "2016 Sessional Q5",
    tag: "🟩🔄",
    q: "What is used to stain bacterial cell walls for classification?",
    answer: ["Gram stain"],
    explanation: "The Gram stain is a differential staining technique used to classify bacteria into two large groups (Gram-positive and Gram-negative) based on their cell wall composition."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2023 Sessional Q6",
    tag: "⭐",
    q: "Viruses are different from living organisms because they lack which essential cellular components?",
    answer: ["ribosomes"],
    explanation: "A defining characteristic of viruses is their acellular nature and lack of ribosomes."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2014 Test 2 Q11",
    tag: "⭐",
    q: "What is a virus that infects bacteria called?",
    answer: ["Bacteriophage"],
    explanation: "A bacteriophage is a type of virus that specifically infects and replicates within bacteria."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2017 Sessional Q4",
    tag: "🟩",
    q: "Which insect transmits Trypanosoma?",
    answer: ["Tsetse fly"],
    explanation: "Trypanosoma brucei, the protist causing African sleeping sickness, is transmitted by the tsetse fly."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2019 Test 1 Q9",
    tag: "❗",
    q: "Which protist shows both plant and animal characteristics?",
    answer: ["Euglena"],
    explanation: "Euglena is unique because it can perform photosynthesis like plants and also ingest food like animals."
  },
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2017 Test 2 Q6",
    tag: "⭐",
    q: "What disease does Plasmodium vivax cause?",
    answer: ["Malaria"],
    explanation: "Plasmodium vivax is one of the protozoan parasites that causes malaria in humans."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "2014 Sessional Q10",
    tag: "⭐",
    q: "Which of the following groups is not a Kingdom in modern classification: Plantae, Monera, Protista, Virus?",
    answer: ["Virus"],
    explanation: "Viruses are not considered a Kingdom because they are non-living entities and lack the cellular structure required for classification within the kingdoms of life."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2021 Sessional Q7",
    tag: "⭐",
    q: "What two core components do all viruses contain?",
    answer: ["DNA or RNA", "protein coat", "capsid"],
    explanation: "The core components of any virus are its genetic material (either DNA or RNA) and a protein coat (capsid) that protects it."
  },
  
  {
    type: "ShortAnswer",
    topic: "Protists",
    year: "2018 Test 2 Q4",
    tag: "🟩",
    q: "Which protozoan is best represented as a ciliate?",
    answer: ["Paramecium"],
    explanation: "Paramecium is the most well-known and classic example of a ciliate."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy",
    year: "2020 Sessional Q9",
    tag: "⭐",
    q: "Which scientist developed the system of binomial nomenclature?",
    answer: ["Linnaeus"],
    explanation: "Carl Linnaeus is known as the 'father of modern taxonomy' for formalizing binomial nomenclature."
  },
  {
    type: "ShortAnswer",
    topic: "Animalia",
    year: "2014 Sessional Q1",
    tag: "⭐",
    q: "Name one correct set of organisms that belong to the Kingdom Animalia.",
    answer: ["amphibians, cockroaches, earthworms, leeches, snails"],
    explanation: "The Kingdom Animalia comprises multicellular, eukaryotic organisms that are heterotrophic."
  },
  {
    type: "ShortAnswer",
    topic: "Annelida",
    year: "New",
    tag: "🟩",
    q: "What substance do leeches secrete to prevent host blood from clotting?",
    answer: ["anticoagulant"],
    explanation: "Leeches secrete an anticoagulant to ensure continuous blood flow from the host."
  },
  {
    type: "ShortAnswer",
    topic: "Nematoda",
    year: "New",
    tag: "🟩❗",
    q: "What is a key characteristic of Phylum Nematoda (roundworms) regarding their body segmentation?",
    answer: ["Unsegmented, cylindrical body"],
    explanation: "Nematodes have a smooth, cylindrical, and unsegmented body."
  },
  {
    type: "ShortAnswer",
    topic: "Platyhelminthes",
    year: "New",
    tag: "🟩",
    q: "What reproductive characteristic is common to most flatworms (Phylum Platyhelminthes)?",
    answer: ["Hermaphroditic"],
    explanation: "Most flatworms are hermaphroditic, possessing both male and female reproductive organs."
  },
  {
    type: "ShortAnswer",
    topic: "Mollusca",
    year: "New",
    tag: "🟩",
    q: "What is the primary material composing the shell of most mollusks?",
    answer: ["Calcium carbonate"],
    explanation: "Molluscan shells are largely made of calcium carbonate."
  },
  {
    type: "ShortAnswer",
    topic: "Arthropoda",
    year: "New",
    tag: "⭐",
    q: "What is the process of shedding the old exoskeleton in arthropods called?",
    answer: ["Moulting", "Ecdysis"],
    explanation: "Moulting, also known as ecdysis, is the physiological process where arthropods periodically shed their rigid exoskeleton to enable larger growth."
  },
  {
    type: "ShortAnswer",
    topic: "Arthropoda",
    year: "New",
    tag: "🟩❗",
    q: "Which arthropod class is characterized by having two pairs of legs per body segment?",
    answer: ["Diplopoda", "millipedes"],
    explanation: "Class Diplopoda, which includes millipedes, is unique for having two pairs of legs on most of its body segments."
  },
  {
    type: "ShortAnswer",
    topic: "Insecta",
    year: "New",
    tag: "🟩",
    q: "Which insect order is known for its members having a proboscis adapted for piercing and sucking?",
    answer: ["Diptera"],
    explanation: "The order Diptera includes flies (like house flies, tsetse flies, mosquitoes) which possess a proboscis, a tube-like mouthpart used for piercing skin and sucking fluids."
  },
  {
    type: "ShortAnswer",
    topic: "Insecta",
    year: "New",
    tag: "🟩",
    q: "The Red Locust, *Nomadacris septemfasciata*, belongs to which insect order?",
    answer: ["Orthoptera"],
    explanation: "Grasshoppers, crickets, and locusts (including the Red Locust) belong to the order Orthoptera."
  },
  {
    type: "ShortAnswer",
    topic: "Arthropoda",
    year: "New",
    tag: "🟩",
    q: "In most crustaceans, the fused head and thorax region is called the...?",
    answer: ["Cephalothorax"],
    explanation: "Crustaceans often have a fused head and thorax region called the cephalothorax."
  },
  {
    type: "ShortAnswer",
    topic: "Annelida",
    year: "New",
    tag: "🟩❗",
    q: "Which specific structures do Polychaeta (bristle worms) possess for locomotion and gas exchange, giving them a 'boat-paddle' appearance?",
    answer: ["Parapodia"],
    explanation: "Polychaeta are distinguished by numerous paddle-like appendages called parapodia."
  },
  {
    type: "ShortAnswer",
    topic: "Mollusca",
    year: "New",
    tag: "🟩",
    q: "What is the specialized rasping, tongue-like organ found in most mollusks, used for feeding?",
    answer: ["Radula"],
    explanation: "The radula is a unique anatomical feature of most mollusks, used for scraping food particles."
  },
  {
    type: "ShortAnswer",
    topic: "Arachnida",
    year: "New",
    tag: "🟩",
    q: "How many pairs of legs characterize most terrestrial arthropods belonging to Class Arachnida (e.g., spiders, scorpions)?",
    answer: ["4 pairs"],
    explanation: "Arachnids (spiders, scorpions, mites, ticks) are typically characterized by having four pairs of legs (8 legs total)."
  },
  {
    type: "ShortAnswer",
    topic: "Insecta",
    year: "New",
    tag: "🟩",
    q: "What hormone is responsible for controlling the process of moulting in insects?",
    answer: ["Ecdysone"],
    explanation: "Ecdysone is the primary hormone that regulates moulting (ecdysis) and metamorphosis in insects and other arthropods."
  },
  {
    type: "ShortAnswer",
    topic: "Insecta",
    year: "New",
    tag: "🟩",
    q: "Which order of insects is known for its members having forewings modified into hard, protective covers called elytra?",
    answer: ["Coleoptera"],
    explanation: "The order Coleoptera consists of beetles, and their most distinctive feature is the presence of hardened forewings called elytra."
  },
  {
    type: "ShortAnswer",
    topic: "Platyhelminthes",
    year: "2023 Q30 (Adapted)",
    tag: "⭐🔄",
    q: "In the life cycle of *Schistosoma*, which stage is released from the snail host and directly penetrates human skin?",
    answer: ["Cercariae"],
    explanation: "After developing inside the snail, *Schistosoma* larvae emerge as free-swimming cercariae, which are the infectious stage that actively penetrates human skin."
  },
  {
    type: "ShortAnswer",
    topic: "Archaea",
    year: "2018 Q23 (Adapted)",
    tag: "⭐",
    q: "Which group of Archaea is primarily found in the guts of termites and ruminants, producing methane as a metabolic byproduct?",
    answer: ["Methanogens"],
    explanation: "Methanogens are anaerobic archaea that produce methane gas and thrive in oxygen-poor environments like the digestive tracts of animals that break down cellulose."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2023 Q25 (Adapted)",
    tag: "🟩",
    q: "What is one primary reason for assigning universal scientific names to organisms?",
    answer: ["To provide a unique and unambiguous reference globally", "To reflect evolutionary relationships and aid classification", "To avoid confusion caused by regional common names"],
    explanation: "The primary reasons for scientific naming (taxonomy) are universal communication, classification, and understanding evolutionary relationships."
  },
  {
    type: "ShortAnswer",
    topic: "Fungi",
    year: "2023 Q27 (Adapted)",
    tag: "🟩",
    q: "In Oomycetes, which structures are involved in sexual reproduction, where the male transfers nuclei to the female?",
    answer: ["Antheridium and oogonium"],
    explanation: "Sexual reproduction in Oomycetes involves specialized gametangia: the male antheridium transfers nuclei to the female oogonium, leading to the formation of oospores."
  },
  {
    type: "ShortAnswer",
    topic: "Bacteria",
    year: "2023 Q28 (Adapted)",
    tag: "🟩",
    q: "The primary standard for classifying bacteria into two major groups (Gram-positive and Gram-negative) is based on what?",
    answer: ["Their cell wall composition"],
    explanation: "Gram staining is a differential staining technique that relies on differences in bacterial cell wall composition, specifically the thickness of the peptidoglycan layer."
  },
  {
    type: "ShortAnswer",
    topic: "Invertebrates",
    year: "2023 Q29 (Adapted)",
    tag: "🟩",
    q: "Name one characteristic that distinguishes Phylum Annelida from Phylum Nematoda.",
    answer: ["Annelida: Segmented bodies; Nematoda: Unsegmented, cylindrical bodies"],
    explanation: "Annelids (like earthworms) are well-known for their segmented bodies, while nematodes (roundworms) have characteristic unsegmented, cylindrical bodies."
  },
  {
    type: "ShortAnswer",
    topic: "Invertebrates",
    year: "2023 Q31 (Adapted)",
    tag: "🟩",
    q: "What is the primary function of the mantle cavity in most mollusks?",
    answer: ["Houses gills for respiration and serves as an exit for wastes"],
    explanation: "The mantle cavity is a specialized space that typically houses the gills (ctenidia) for gas exchange (respiration) and acts as an exit for excretory and digestive wastes."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2022 Q32 (Adapted)",
    tag: "⭐",
    q: "Why are viruses not classified in any of the traditional kingdoms of life?",
    answer: ["They cannot carry out all life processes independently; they require a host cell"],
    explanation: "Viruses are obligate intracellular parasites, meaning they are entirely dependent on a host cell's machinery to replicate and perform metabolic functions."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2022 Q33 (Adapted)",
    tag: "🟩",
    q: "What are the three main groups of viruses based on the nature of their genomes?",
    answer: ["DNA viruses, RNA viruses, Retroviruses"],
    explanation: "Based on their genetic material and replication strategy, viruses are primarily classified into DNA viruses, RNA viruses, and Retroviruses."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2022 Q34 (Adapted)",
    tag: "🟩",
    q: "What is NOT a primary function of a viral protein coat (capsid)?",
    answer: ["Synthesizing viral proteins using its own ribosomes"],
    explanation: "The capsid protects the genome, aids in attachment, and facilitates entry. However, viruses lack their own ribosomes and cannot synthesize proteins independently."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2022 Q35 (Adapted)",
    tag: "❗",
    q: "What is the key difference between Prions and Viroids?",
    answer: ["Prions are infectious proteins; Viroids are infectious RNA molecules without a protein coat"],
    explanation: "Prions are infectious agents composed solely of misfolded proteins, while viroids consist only of a short, naked circular RNA molecule that primarily infects plants."
  },
  {
    type: "ShortAnswer",
    topic: "Viruses",
    year: "2022 Q36 (Adapted)",
    tag: "⭐",
    q: "How does HIV primarily compromise the immune system of an infected person?",
    answer: ["By infecting and destroying CD4+ T helper cells"],
    explanation: "HIV specifically targets and destroys CD4+ T helper cells, which are crucial coordinating cells of the adaptive immune system."
  },
  {
    type: "ShortAnswer",
    topic: "Fungi",
    year: "2022 Q38 (Adapted)",
    tag: "🟩🔄",
    q: "In the sexual reproduction of zygomycetes, what structure is formed when two compatible hyphae fuse, eventually undergoing meiosis to produce spores?",
    answer: ["Zygosporangium"],
    explanation: "In zygomycetes, the fusion of two compatible hyphae leads to the formation of a zygosporangium."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2018-2019 Sessional Q40 (Adapted)",
    tag: "⭐",
    q: "Which limitation prevents the Biological Species Concept from being universally applied to all organisms?",
    answer: ["It does not apply to organisms that reproduce asexually."],
    explanation: "The Biological Species Concept is based on sexual reproduction and reproductive isolation. Therefore, it cannot be applied to organisms that reproduce asexually (like bacteria) or to fossils."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2018-2019 Sessional Q42 (Adapted)",
    tag: "🟩❗",
    q: "Which type of reproductive isolating mechanism involves species breeding at different times?",
    answer: ["Temporal isolation"],
    explanation: "Prezygotic barriers prevent mating or fertilization from occurring. Temporal isolation (breeding at different times) is a prezygotic barrier."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2018-2019 Sessional Q43 (Adapted)",
    tag: "⭐",
    q: "If a student handwrites the scientific name *Musca domestica*, which rule of binomial nomenclature should they follow to make it correct?",
    answer: ["Underline both Musca and domestica."],
    explanation: "When handwriting a scientific name, both the genus and species epithet must be underlined to indicate that they are scientific names, which would otherwise be italicized in print."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2018-2019 Sessional Q44 (Adapted)",
    tag: "🟩",
    q: "How does binomial nomenclature fundamentally differ from older 'polynomial keys' as a naming system?",
    answer: ["Binomial nomenclature uses two words; polynomial keys used multiple descriptive words."],
    explanation: "Binomial nomenclature uses a concise two-part name (genus and species). Older polynomial systems used long, descriptive phrases with many words."
  },
  {
    type: "ShortAnswer",
    topic: "Taxonomy & Classification",
    year: "2018-2019 Sessional Q45 (Adapted)",
    tag: "⭐",
    q: "Which term refers to the scientific study of how living things are classified, named, and identified?",
    answer: ["Taxonomy"],
    explanation: "Taxonomy is the branch of biology concerned with the classification, naming, and identification of organisms."
  }
];




  