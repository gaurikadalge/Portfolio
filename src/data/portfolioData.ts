export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Software Engineering' | 'AI / ML / LLM' | 'FinTech' | 'Hardware & Robotics' | 'IoT & Research';
  tags: string[];
  metric?: string;
  status?: string;
  problemStatement: string;
  objectives: string[];
  systemArchitecture: string;
  technologiesUsed: {
    domain: string;
    items: string[];
  }[];
  keyFeatures: string[];
  verifiedResults: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageThumbnail: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  association?: string;
  period: string;
  type: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  date: string;
  category: 'Competition' | 'Patent' | 'Certification' | 'Open Source';
  badge: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Gauri Vijay Kadalge",
  brandName: "Gauri.",
  title: "Software & AI Systems Engineer",
  tagline: "Building Intelligent Systems at the Intersection of Software and Hardware.",
  bio: "I'm Gauri Vijay Kadalge, a Computer Science engineering student at VIT Pune passionate about architecting intelligent software systems, multi-agent AI pipelines, and real-world autonomous robotic solutions.",
  statusText: "Available for new opportunities",
  education: {
    institution: "Vishwakarma Institute of Technology, Pune",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
    timeline: "2023 – Present",
    cgpa: "9.2 / 10.0",
    highlights: [
      "Specialized in Artificial Intelligence, Multi-Agent Systems, Autonomous Robotics and Data Engineering",
      "Active leader across campus technical boards, TPO Alumni Council, and Investment Forum",
    ],
    secondaryEducation: [
      {
        school: "Rahul International School, Mumbai",
        level: "Class XII (HSC)",
        score: "82.60%",
      },
      {
        school: "Kendriya Vidyalaya Sangathan",
        level: "Class X (CBSE)",
        score: "94.80%",
      }
    ]
  },
  contact: {
    email: "gaurikadalge02@gmail.com",
    github: "https://github.com/gaurikadalge",
    linkedin: "https://www.linkedin.com/in/gauri-kadalge",
    location: "Pune, Maharashtra, India",
    phone: "+91 8378950406",
  },
  resumes: [
    {
      title: "Comprehensive / AI Systems Resume",
      filename: "Gauri_Vijay_Kadalge_AI_Systems_Resume.pdf",
      path: "/resumes/Gauri_Vijay_Kadalge_AI_Systems_Resume.pdf",
      description: "Focus on LLM Agents, RAG Pipelines, Backend Architectures, and FinTech Systems",
      recommended: true,
    },
    {
      title: "Robotics & Hardware Systems Resume",
      filename: "Gauri_Vijay_Kadalge_Robotics_IoT_Resume.pdf",
      path: "/resumes/Gauri_Vijay_Kadalge_Robotics_IoT_Resume.pdf",
      description: "Focus on ROS2, Sensor Fusion, Embedded Systems, LoRaWAN, and Edge AI",
      recommended: false,
    }
  ],
  stats: [
    { label: "Academic CGPA", value: "9.2" },
    { label: "Patent Pending", value: "1 (CIPC)" },
    { label: "National Finalist", value: "3x" },
    { label: "Public Repositories", value: "20+" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "finbuddy-ai",
    title: "FinBuddy AI — Multi-Agent Financial Assistant",
    shortDescription: "Voice-first financial assistant for India's informal economy with 6 autonomous agents, multi-modal ingestion, and automated GST compliance.",
    fullDescription: "A production-grade financial operating system built specifically for India's informal economy. FinBuddy AI coordinates 6 specialized autonomous agents with multi-modal ingestion (Hindi/English voice, WhatsApp-style natural chat, SMS parser, and OCR receipt scanner) coupled with automated GST threshold tracking and instant PDF invoice generation.",
    category: "FinTech",
    tags: ["FastAPI", "Python", "MongoDB", "Multi-Agent LLMs", "Groq", "Speech-to-Text", "Tesseract OCR"],
    metric: "MumbaiHacks 2025 Finalist",
    status: "Hackathon Finalist",
    problemStatement: "Over 60 million informal merchants and micro-entrepreneurs in India rely on unstructured paper ledgers, fragmented SMS payment alerts, and voice conversations, leaving them excluded from structured credit and exposed to tax compliance errors.",
    objectives: [
      "Orchestrate 6 specialized LLM agents for transaction parsing, ledger reconciliations, and compliance monitoring.",
      "Implement a zero-downtime multi-provider fallback chain (Groq → OpenAI → Gemini → Cohere → Rule Engine).",
      "Provide real-time speech recognition in Indian vernacular (Hindi/English) and instant OCR for paper slips.",
      "Generate compliant GST transaction invoices and ledger summaries in PDF format on-the-fly."
    ],
    systemArchitecture: "Microservice backend built on FastAPI and Async MongoDB. Incoming voice audio is transcribed via Whisper/STT; receipts pass through OpenCV preprocessing and Tesseract OCR; extracted raw text is dispatched to an Agent Orchestrator. The orchestrator delegates tasks across Parser, Compliance, and Ledger agents with automatic fallback failover, streaming real-time analytics to a responsive UI.",
    technologiesUsed: [
      { domain: "Multi-Agent AI", items: ["Autonomous LLM Agents", "Groq API", "OpenAI GPT-4o", "Google Gemini", "Cohere"] },
      { domain: "Backend & Storage", items: ["FastAPI", "Async MongoDB", "Pydantic V2", "Motor"] },
      { domain: "Perception & Audio", items: ["SpeechRecognition", "Tesseract OCR", "OpenCV", "ReportLab PDF"] },
    ],
    keyFeatures: [
      "6 Specialized Autonomous Agents for bookkeeping, auditing, compliance, voice synthesis, and OCR.",
      "Robust LLM Provider Fallback Chain eliminating API rate limit disruptions.",
      "Real-time GST threshold monitoring with alert thresholds for small businesses.",
      "Vernacular voice input (Hindi & English code-switching supported).",
      "Automated PDF tax invoice and transaction receipt generation."
    ],
    verifiedResults: [
      "Selected as Top Finalist at MumbaiHacks 2025 among thousands of competing teams.",
      "Validated end-to-end receipt parsing pipeline across complex crumpled paper bills with high entity precision.",
      "Achieved sub-second response times using Groq LPU inference for real-time customer voice queries."
    ],
    githubUrl: "https://github.com/gaurikadalge/FinBuddy-MumbaiHacks2025",
    imageThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "multimodal-rag",
    title: "Multimodal RAG Research Assistant",
    shortDescription: "High-accuracy hybrid retrieval engine combining dense embeddings, sparse BM25, Reciprocal Rank Fusion, and Cross-Encoder reranking.",
    fullDescription: "An advanced Retrieval-Augmented Generation (RAG) platform designed to eliminate hallucinations in technical research papers. Combines dense semantic vectors with lexical BM25 search through Reciprocal Rank Fusion, followed by a heavy Cross-Encoder reranker, citation validation, and dynamic LLM fallbacks.",
    category: "AI / ML / LLM",
    tags: ["Python", "FastAPI", "FAISS", "BM25", "Sentence Transformers", "Cross-Encoder", "Pydantic"],
    metric: "Recall@5: 0.86 → 0.94 (+9.3%)",
    status: "Verified Benchmark",
    problemStatement: "Traditional dense vector embeddings struggle with technical vocabulary, acronyms, and exact chemical/mathematical nomenclature, while standard sparse search fails on semantic phrasing. In research domains, hallucinations and unsourced claims invalidate LLM outputs.",
    objectives: [
      "Build a dual-channel retrieval pipeline marrying lexical BM25 precision with dense semantic embeddings.",
      "Implement Reciprocal Rank Fusion (RRF) to merge non-linear rank distributions.",
      "Deploy cross-encoder neural rerankers to evaluate full query-passage cross-attention.",
      "Implement automated citation verification ensuring every statement maps to exact text spans."
    ],
    systemArchitecture: "FastAPI server ingests PDFs and segments text into token-bounded semantic chunks. The indexing layer creates parallel BM25 sparse indexes and FAISS dense vector spaces using Sentence Transformers. At query time, top-K candidates from both streams are fused using RRF, scored with a Cross-Encoder, verified for citation attribution, and synthesized by the reasoning model.",
    technologiesUsed: [
      { domain: "Retrieval & Ranking", items: ["FAISS Vector Index", "BM25Okapi", "Reciprocal Rank Fusion", "Cross-Encoder (MS-MARCO)"] },
      { domain: "Embeddings & NLP", items: ["Sentence-Transformers", "PyPDF", "LangChain Core", "Tiktoken"] },
      { domain: "Backend Architecture", items: ["FastAPI", "Pydantic", "Uvicorn", "Python 3.11"] },
    ],
    keyFeatures: [
      "Hybrid retrieval architecture combining dense vector semantic match with sparse lexical accuracy.",
      "Reciprocal Rank Fusion algorithm dynamically balancing vocabulary-heavy and conceptual queries.",
      "Cross-encoder reranking pass re-evaluating top candidates with deep cross-attention.",
      "Strict citation validator highlighting exact ground-truth source passages.",
      "Multi-provider LLM fallback chain preventing inference interruption."
    ],
    verifiedResults: [
      "Multi-passage Recall@5 improved from 0.86 (pure dense) to 0.94 (hybrid + reranked) across academic benchmark benchmarks.",
      "Verified citation grounding eliminated hallucinated paper references in user evaluation queries."
    ],
    imageThumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "offair-sovereign-ai",
    title: "OFFAIR — Sovereign AI Local Workbench (SIH 2026)",
    shortDescription: "Completely air-gapped sovereign AI workbench running local multi-model LLM routing, ChromaDB RAG, and isolated Docker code execution.",
    fullDescription: "Developed as the prototype for Smart India Hackathon 2026 under the mantra 'Private Data. Local Intelligence. Real Work.' OFFAIR is a completely air-gapped sovereign AI system that runs exclusively on local hardware with zero external API calls, providing document OCR, multimodal vision, vector RAG, and sandboxed Docker Python code execution.",
    category: "AI / ML / LLM",
    tags: ["Ollama", "ChromaDB", "Docker", "Streamlit", "Python", "LLaVA", "Air-Gapped"],
    metric: "100% Air-Gapped | Zero External Calls",
    status: "SIH 2026 Prototype",
    problemStatement: "Defense departments, intelligence agencies, and regulated financial entities cannot expose their proprietary documents or internal data to public cloud LLMs due to data sovereignty laws, corporate secrecy, and cyber attack vectors.",
    objectives: [
      "Deliver a zero-leakage, 100% offline intelligence workbench running on local workstation hardware.",
      "Implement dynamic task-based model routing (e.g., CodeLlama for programming, Mistral for reasoning, LLaVA for vision).",
      "Run an autonomous multi-step execution loop: Plan → Extract → Reason → Generate → Verify.",
      "Execute untrusted generated Python scripts inside a network-disabled, ephemeral Docker container."
    ],
    systemArchitecture: "Frontend developed in Streamlit communicates with a custom local Python orchestration engine. Local LLMs run via Ollama. Embedded documents are indexed into an offline ChromaDB instance. OCR processing operates via local Tesseract. Arbitrary code executions are spawned inside isolated, network-disabled Docker containers with hardware resource caps and verifiable audit logs.",
    technologiesUsed: [
      { domain: "Local Inference", items: ["Ollama", "Mistral-7B", "CodeLlama", "LLaVA (Multimodal Vision)"] },
      { domain: "Storage & Vector", items: ["ChromaDB", "Local HuggingFace Embeddings", "SQLite"] },
      { domain: "Security & Sandbox", items: ["Docker Isolated Containers (No Network)", "Tesseract OCR", "Streamlit"] },
    ],
    keyFeatures: [
      "Zero Cloud Dependencies: Operates completely offline with physically disconnected network interfaces.",
      "Dynamic Multi-Model Routing: Automatically maps task requirements to specialized local open-weight weights.",
      "Sandboxed Docker Execution: Runs generated code in locked-down, transient containers with zero internet access.",
      "Local Multimodal Vision: Analyzes visual diagrams and scanned documents using local LLaVA weights.",
      "Verifiable Security Dashboard & Cryptographic Audit Logs proving zero external network telemetry."
    ],
    verifiedResults: [
      "Full offline execution verified with network interfaces disabled; zero dropped packets or failed calls.",
      "Successfully processed scanned multi-page government documents through local OCR into structured DOCX reports."
    ],
    githubUrl: "https://github.com/gaurikadalge/OFFAIR",
    imageThumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "autonomous-navigation-robot",
    title: "Autonomous Navigation Robot — MAHE Mobility Challenge",
    shortDescription: "Modular ROS2 autonomous navigation robot with LiDAR and computer vision multi-sensor fusion for dynamic obstacle avoidance and SLAM.",
    fullDescription: "Engineered for the national MAHE Mobility Challenge, this autonomous mobile robot utilizes a modular ROS2 Humble architecture. It fuses 2D LiDAR planar scans with monocular visual odometry via an Extended Kalman Filter (EKF), executing real-time Simultaneous Localization and Mapping (SLAM) and adaptive path planning.",
    category: "Hardware & Robotics",
    tags: ["ROS2", "LiDAR", "Computer Vision", "Sensor Fusion", "Nav2", "SLAM", "Python/C++"],
    metric: "2nd Runner Up — MAHE Mobility Challenge",
    status: "National 2nd Runner Up",
    problemStatement: "Autonomous navigation in unstructured, dynamic environments suffers from sensor drift, wheel slip, and sudden blind-spot obstructions when relying on single-modality sensors.",
    objectives: [
      "Architect a distributed ROS2 node architecture separating hardware drivers, perception, localization, and control.",
      "Implement multi-sensor fusion using Extended Kalman Filtering to combine wheel encoders, IMU, and LiDAR scans.",
      "Configure Nav2 costmaps with dynamic obstacle inflation for real-time path replanning.",
      "Deliver sub-50ms control loop latency to motor controllers under high sensor ingress."
    ],
    systemArchitecture: "Hardware layer interfaces with motor encoders and LiDAR via micro-ROS. Perception nodes process point clouds and camera feeds, feeding into an EKF state estimator. Nav2 planner generates global paths using A*, while DWB local planner computes twist commands for obstacle avoidance, streamed over DDS.",
    technologiesUsed: [
      { domain: "Robotics Stack", items: ["ROS2 Humble", "Nav2 Navigation Stack", "SLAM Toolbox", "Gazebo Simulator"] },
      { domain: "Sensors & Perception", items: ["2D LiDAR", "Depth / Monocular Vision", "IMU 9-DOF", "Sensor Fusion (EKF)"] },
      { domain: "Languages & Tools", items: ["C++17", "Python", "rviz2", "Linux Ubuntu Server"] },
    ],
    keyFeatures: [
      "Real-time SLAM generating high-precision 2D occupancy grid maps of unknown indoor arenas.",
      "Adaptive obstacle inflation costmaps preventing robot collision with moving human obstacles.",
      "Sensor fusion pipeline maintaining centimeter-level localization accuracy despite wheel slippage.",
      "Recovery behaviors enabling autonomous un-trapping and path renegotiation."
    ],
    verifiedResults: [
      "Awarded 2nd Runner Up at the MAHE Mobility Challenge (April 2026).",
      "Successfully executed complex track navigation with zero collisions in high-density dynamic obstacle trials."
    ],
    imageThumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "iot-disaster-management",
    title: "IoT-Based Disaster Management System (Patent Pending)",
    shortDescription: "Decentralized disaster prediction and emergency telemetry system using LoRa mesh networks and Edge AI risk prediction during infrastructure collapse.",
    fullDescription: "A patented distributed environmental monitoring and disaster risk mitigation architecture. The system establishes a self-healing LoRa mesh network that operates when standard telecommunications, cellular towers, and power grids fail, running quantized Edge AI risk prediction on distributed microcontrollers.",
    category: "IoT & Research",
    tags: ["IoT", "LoRa Mesh", "Edge AI", "Distributed Sensors", "ESP32", "Python", "Patent Pending"],
    metric: "South African Patent Application No. 2026/05095",
    status: "Patent Pending (CIPC)",
    problemStatement: "During catastrophic floods, landslides, and storms, cellular networks and electrical power grids collapse first, leaving municipal rescue authorities and isolated citizens without communication or environmental alerts.",
    objectives: [
      "Engineer a self-healing decentralized LoRa mesh topology transmitting telemetry up to 10km without cellular towers.",
      "Deploy low-power TinyML models onto ESP32 nodes to predict flash flood and landslide risk locally at the sensor edge.",
      "Build a fault-tolerant gateway and real-time incident mapping dashboard for first responders."
    ],
    systemArchitecture: "Sensor nodes equipped with water level, soil moisture, barometric, and meteorological sensors sample environmental metrics. Quantized TinyML models evaluate flash disaster probability. Alert packets hop node-to-node across a dynamic LoRa mesh to an emergency command node with offline map caching.",
    technologiesUsed: [
      { domain: "Hardware & Edge", items: ["ESP32 Microcontrollers", "SX1278 LoRa Modules", "TinyML (TensorFlow Lite Micro)", "Sensors"] },
      { domain: "Networking & Protocol", items: ["LoRa Mesh Routing", "UART / SPI", "Low-Power Duty Cycling"] },
      { domain: "Command & Control", items: ["Python Dashboard", "FastAPI", "Leaflet Maps", "Time-Series Logging"] },
    ],
    keyFeatures: [
      "Autonomous mesh relay: Messages route dynamically across intermediate nodes if any node is submerged or destroyed.",
      "Edge AI inference: Risk scoring computed locally in sub-10 milliseconds without cloud connectivity.",
      "Ultra-low power operation: Deep-sleep hardware duty cycling enabling multi-month battery endurance.",
      "Comprehensive telemetry dashboard displaying live nodal topology and disaster vector heatmaps."
    ],
    verifiedResults: [
      "Granted South African Patent Pending status: Patent Application No. 2026/05095 (CIPC).",
      "Demonstrated multi-kilometer packet transmission resilience across mesh hops in terrain simulation."
    ],
    githubUrl: "https://github.com/gaurikadalge/iot-mesh-dashboard",
    imageThumbnail: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "neurosense-ai",
    title: "NeuroSense AI — Interpretable Alzheimer's Detection",
    shortDescription: "Clinical machine learning system for early Alzheimer's disease risk prediction achieving 96% accuracy with SHAP explainability on longitudinal MRI data.",
    fullDescription: "A machine learning diagnosis engine built for early risk detection of Alzheimer's Disease using clinical and longitudinal MRI data from the OASIS dataset. Employs a Soft Voting Ensemble of Random Forest and Support Vector Machines, providing transparent clinical explanations through SHAP feature importance.",
    category: "AI / ML / LLM",
    tags: ["Python", "scikit-learn", "Ensemble Learning", "SVM", "Random Forest", "SHAP", "MRI Data"],
    metric: "96.00% Ensemble Accuracy | 0.9629 Precision",
    status: "Academic Flagship Project",
    problemStatement: "Complex clinical neural networks frequently face rejection by neurologists because predictions lack explainability. Medical professionals require high accuracy coupled with transparent, quantifiable biomarker attribution.",
    objectives: [
      "Evaluate classical and ensemble ML algorithms on the longitudinal OASIS clinical MRI cohort.",
      "Eliminate overfitting and handle missing clinical data through robust statistical preprocessing and cross-validation.",
      "Deliver an ensemble model exceeding 95% accuracy while maintaining strict clinical interpretability."
    ],
    systemArchitecture: "Data pipeline cleans and normalizes longitudinal patient features (CDR, MMSE, eTIV, nWBV, normalized brain volume). Implements 5-fold stratified cross-validation across Linear SVM, RBF SVM, Random Forest, and a Soft Voting Ensemble. Integrated SHAP explainer generates individualized patient attribution waterfalls.",
    technologiesUsed: [
      { domain: "Machine Learning", items: ["scikit-learn", "Soft Voting Ensemble", "Support Vector Machines", "Random Forest"] },
      { domain: "Explainability & Stats", items: ["SHAP (SHapley Additive exPlanations)", "Pandas", "NumPy", "Matplotlib"] },
    ],
    keyFeatures: [
      "Soft Voting Ensemble combining non-linear decision forests and optimal hyperplane margins.",
      "SHAP explainability engine detailing exact clinical biomarker contributions for every prediction.",
      "Comprehensive 5-fold cross-validation preventing data leakage on longitudinal patient records.",
      "Interactive Streamlit clinical dashboard for neurologist exploration."
    ],
    verifiedResults: [
      "Achieved 96.00% accuracy, 0.9629 precision, 0.9600 recall, and 0.9599 F1-Score on OASIS MRI test data.",
      "Outperformed standalone Random Forest (94.67%) and SVM (94.67%) models."
    ],
    githubUrl: "https://github.com/gaurikadalge/NeuroSense-AI",
    imageThumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    id: "nxp-cup-autonomous-buggy",
    title: "Autonomous Medical Response Buggy — NXP Cup India 2026",
    shortDescription: "High-speed autonomous vehicle simulation and hardware track navigation with real-time sign recognition, lane detection, and patient QR tracking.",
    fullDescription: "Competed in NXP Cup India 2026: Autonomous Medical Response Challenge. Developed the perception and decision-making system enabling the NXP buggy to traverse simulated smart city road networks, interpret traffic guidance signs, identify emergency patients via QR scanning, and autonomously route to designated hospitals.",
    category: "Hardware & Robotics",
    tags: ["Autonomous Driving", "OpenCV", "QR Detection", "Sign Classification", "C++", "Python"],
    metric: "NXP Cup India 2026 Regional Finalist",
    status: "Regional Finalist",
    problemStatement: "Emergency response in congested urban tracks requires autonomous vehicles to rapidly decode optical markers, read instructional traffic signs, and navigate narrow lanes without GPS.",
    objectives: [
      "Build real-time lane tracking with adaptive thresholding robust to track shadow and glare.",
      "Implement sign detection and rapid QR code decoding modules.",
      "Design an autonomous finite-state machine (FSM) coordinating vehicle mission stages."
    ],
    systemArchitecture: "Monocular camera feed is split into lane tracking and sign detection pipelines. Perspective transform extracts bird's-eye view lane geometry. Haar cascades / lightweight CNN classifies street signs, while pyzbar extracts patient data from QR markers. The state machine issues throttle and steering angles via PID control.",
    technologiesUsed: [
      { domain: "Perception", items: ["OpenCV", "Pyzbar", "Color Space Transformation (HSV/LAB)", "Canny/Hough"] },
      { domain: "Control & Vehicle", items: ["PID Steering Control", "Finite State Machine", "NXP Simulation Stack"] },
    ],
    keyFeatures: [
      "High-speed QR code scanning module for instant patient identification and routing dispatch.",
      "Real-time traffic sign detection enabling autonomous stop, yield, and directional turn decisions.",
      "Robust polynomial lane fitting operating reliably under dynamic ambient lighting."
    ],
    verifiedResults: [
      "Selected as NXP Cup India 2026 Regional Finalist.",
      "Maintained zero track deviations across high-speed test laps with 100% sign recognition accuracy."
    ],
    githubUrl: "https://github.com/gaurikadalge/NXP_CUP_INDIA_2026",
    imageThumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "finance-reconciliation-pipeline",
    title: "Finance Reconciliation Pipeline",
    shortDescription: "Tiered raw-to-curated ELT data reconciliation engine processing 100K+ bank transactions with data quality gates and GitHub Actions CI.",
    fullDescription: "A financial data engineering pipeline designed with layered architecture (Raw → Staging → Curated). Ingests general ledger and bank statement records, performing tiered reconciliation (exact matching, fuzzy window matching, and duplicate detection) while flagging discrepancies into exceptions tables with audit controls.",
    category: "FinTech",
    tags: ["Python", "SQL", "Snowflake", "GitHub Actions", "pytest", "ETL/ELT"],
    metric: "100K+ Transactions Reconciled | Idempotent Loads",
    status: "Production Architecture",
    problemStatement: "Enterprise finance departments lose hundreds of auditing hours reconciling mismatched general ledger entries against bank settlement statements, with high risk of silent duplicate data insertion.",
    objectives: [
      "Implement an idempotent raw → staging → curated ELT reconciliation pipeline.",
      "Enforce data quality gates (null checks, duplicate detection, referential integrity).",
      "Attach mandatory audit metadata (batch ID, source file, timestamp) to every record.",
      "Automate end-to-end integration testing with pytest in GitHub Actions CI."
    ],
    systemArchitecture: "Python pipeline ingests transaction feeds into raw staging tables. SQL transformations execute multi-pass joins and window functions: Pass 1 matches exact transaction IDs; Pass 2 applies fuzzy matching on date windows and amounts; Pass 3 isolates un-reconciled rows into an exceptions audit table.",
    technologiesUsed: [
      { domain: "Data Engineering", items: ["Python (Pandas, Polars)", "SQL (CTEs, Window Functions)", "Snowflake", "PostgreSQL"] },
      { domain: "Quality & CI", items: ["pytest", "GitHub Actions", "Schema Validation", "Audit Logging"] },
    ],
    keyFeatures: [
      "Idempotent ingestion guarantees: Re-running batches produces zero duplicated records.",
      "Tiered reconciliation algorithm categorizing matched, fuzzy-matched, and anomaly entries.",
      "Row-count controls and automated data-quality assertions at each pipeline layer.",
      "Comprehensive test suite executed automatically on every GitHub push."
    ],
    verifiedResults: [
      "Successfully reconciled 100,000+ synthetic and real-world transaction logs.",
      "Detected 100% of injected transaction discrepancies into the designated exceptions table."
    ],
    imageThumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "gesture-controlled-rover",
    title: "AI-Powered Gesture Controlled 4WD Rover",
    shortDescription: "Edge-AI robotic rover controlled through real-time hand gesture recognition using MediaPipe, OpenCV, and ESP32 wireless telemetry.",
    fullDescription: "An interactive robotics platform demonstrating human-machine vision interfaces. A host vision node tracks hand skeleton landmarks via Google MediaPipe, translates gestures into direction and speed vectors, and broadcasts low-latency control packets to an onboard ESP32 microcontroller.",
    category: "Hardware & Robotics",
    tags: ["ESP32", "MediaPipe", "OpenCV", "Python", "Deep Learning", "Arduino"],
    metric: "Sub-50ms Real-Time Vision Teleoperation",
    status: "Hardware Deployed",
    problemStatement: "Industrial and search-and-rescue rovers operating in contaminated or hazardous environments require intuitive hands-free teleoperation without physical joysticks.",
    objectives: [
      "Implement real-time 21-point hand landmark tracking at 30+ FPS.",
      "Classify gestures (forward, reverse, turn, spin, emergency brake) with zero false triggers.",
      "Transmit telemetry over Wi-Fi/UDP to an ESP32 motor controller."
    ],
    systemArchitecture: "OpenCV camera capture feeds MediaPipe Hands pipeline. Landmark vector geometry determines finger extensions and wrist orientation. A state manager maps gestures to motor PWM values, transmitting via UDP sockets to an ESP32 running FreeRTOS and controlling an L298N dual H-bridge motor driver.",
    technologiesUsed: [
      { domain: "Computer Vision", items: ["Google MediaPipe", "OpenCV", "Python 3.10"] },
      { domain: "Embedded Hardware", items: ["ESP32 Microcontroller", "4WD Chassis", "L298N Motor Driver", "Arduino C++"] },
    ],
    keyFeatures: [
      "Touchless vision teleoperation using natural hand poses.",
      "Sub-50ms roundtrip control latency over local wireless connection.",
      "Failsafe emergency halt triggering automatically whenever hands leave the camera frame."
    ],
    verifiedResults: [
      "Demonstrated smooth continuous 4WD navigation in indoor testing grounds.",
      "Achieved 98% gesture classification accuracy across varied illumination."
    ],
    imageThumbnail: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "cultural-heritage-polyglot",
    title: "Heritage Knowledge Agent & Polyglot Persistence",
    shortDescription: "Multi-model database and tool-using RAG agent combining PostgreSQL, MongoDB, and pgvector for structured and narrative cultural heritage retrieval.",
    fullDescription: "A polyglot persistence system and agentic knowledge retrieval engine built for cultural heritage management. Harmonizes structured archaeological site data with polymorphic oral folklore and vector embeddings for semantic, cited search.",
    category: "Software Engineering",
    tags: ["PostgreSQL", "MongoDB", "pgvector", "Python", "FastAPI", "Hybrid Search"],
    metric: "Dual Schema Optimization | Sub-millisecond Queries",
    status: "Completed System",
    problemStatement: "Cultural preservation requires managing both structured spatial and chronological catalogs (dynasties, coordinates, artifact classifications) and unstructured, variable storytelling narratives that don't fit into rigid relational schemas.",
    objectives: [
      "Design a normalized relational schema in PostgreSQL for sites, artifacts, and temporal eras.",
      "Store unstructured oral histories, interview transcripts, and media metadata in MongoDB.",
      "Deploy pgvector for semantic search over historical texts with cross-database joins."
    ],
    systemArchitecture: "FastAPI gateway exposes unified search endpoints. Relational queries hit PostgreSQL; document queries hit MongoDB; vector embeddings search through pgvector index. An agent synthesizes answers citing primary archival sources.",
    technologiesUsed: [
      { domain: "Databases", items: ["PostgreSQL", "MongoDB", "pgvector", "SQLAlchemy"] },
      { domain: "API & Search", items: ["FastAPI", "Pydantic", "Semantic Embeddings", "RRF Ranking"] },
    ],
    keyFeatures: [
      "Polyglot database design eliminating impedance mismatch between tabular and narrative historical data.",
      "Vector search over historic texts integrated directly within PostgreSQL via pgvector extension.",
      "Context-aware citation engine linking returned narrative excerpts directly to archival records."
    ],
    verifiedResults: [
      "Accelerated complex queries across archaeological sites and folklore records with indexed execution times under 15ms."
    ],
    githubUrl: "https://github.com/gaurikadalge/Cultural-Heritage-site",
    imageThumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "spamlyser-pro",
    title: "Spamlyser Pro — Real-time SMS Threat Detection",
    shortDescription: "Transformer-backed SMS spam classification and risk visualizer with 4 custom-trained LLM backbones (DistilBERT, BERT, RoBERTa, ALBERT).",
    fullDescription: "A natural language processing platform providing real-time SMS spam detection. Backed by 4 custom fine-tuned transformer models, offering live inference, token importance attribution, and a visual dashboard for SMS threat vectors.",
    category: "AI / ML / LLM",
    tags: ["Streamlit", "Transformers", "DistilBERT", "RoBERTa", "BERT", "NLP"],
    metric: "4 Custom-Trained LLM Backbones",
    status: "Open Source Platform",
    problemStatement: "Modern SMS phishing campaigns leverage adversarial misspellings, homoglyphs, and obfuscated URLs that easily bypass legacy keyword filters.",
    objectives: [
      "Fine-tune 4 transformer architectures on spam classification datasets.",
      "Benchmark inference latency versus classification accuracy across mobile and server deployments.",
      "Provide an intuitive Streamlit interface visualizing spam distributions and risk features."
    ],
    systemArchitecture: "Hugging Face transformer backbones loaded into a streamlined inference engine. Input SMS text is tokenized, scored across all models, and rendered in an interactive Streamlit UI with confidence meters and feature heatmaps.",
    technologiesUsed: [
      { domain: "NLP Backbones", items: ["DistilBERT", "BERT-Base", "RoBERTa", "ALBERT", "Hugging Face"] },
      { domain: "App & UI", items: ["Streamlit", "PyTorch", "Plotly", "Python"] },
    ],
    keyFeatures: [
      "Side-by-side model comparison across 4 distinct transformer architectures.",
      "Visual keyword threat density and risk factor indicators.",
      "Zero-latency interactive Streamlit UI for user experimentation."
    ],
    verifiedResults: [
      "DistilBERT model achieved over 98% test accuracy while maintaining 3x faster inference speeds than BERT-Base."
    ],
    githubUrl: "https://github.com/gaurikadalge/Spamlyser",
    imageThumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "intelligent-ds-optimizer",
    title: "Intelligent Data Structure Optimizer",
    shortDescription: "C++ implementation of high-performance search trees integrated with ML models predicting the optimal data structure based on workload properties.",
    fullDescription: "An intelligent systems tool combining robust C++ implementations of self-balancing search trees (BST, AVL Tree, Red-Black Tree, B-Tree) with a Python machine learning model that analyzes dataset characteristics to recommend the most optimal data structure.",
    category: "Software Engineering",
    tags: ["C++", "Python", "Machine Learning", "Data Structures", "Benchmarking"],
    metric: "Automated Data Structure Recommendation via ML",
    status: "Completed System",
    problemStatement: "Selecting the correct data structure requires analyzing access ratios (read vs insert vs delete intensity) and memory limits—decisions often miscalculated in software engineering.",
    objectives: [
      "Implement verified C++ templates for BST, AVL, Red-Black, and B-Trees with microsecond benchmarking.",
      "Train a supervised machine learning classifier on synthetic and real access workloads.",
      "Generate automated performance charts and recommendation rationale."
    ],
    systemArchitecture: "C++ benchmarking harness runs operational workloads across data structures and outputs structured metrics (execution time, branch mispredictions, memory footprint). A Python scikit-learn model learns optimal mappings and predicts best structure for unseen workloads.",
    technologiesUsed: [
      { domain: "Core Engine", items: ["C++17", "STL", "Gnuplot / Matplotlib", "Custom Benchmarking"] },
      { domain: "ML Predictor", items: ["Python", "scikit-learn", "Pandas"] },
    ],
    keyFeatures: [
      "Complete C++ implementations of AVL, Red-Black, and multi-key B-Trees.",
      "Workload analysis engine evaluating read-heavy, write-heavy, and balanced distributions.",
      "Automated visualization of benchmark curves."
    ],
    verifiedResults: [
      "Accurately predicted optimal data structure in over 92% of benchmarked workload evaluations."
    ],
    githubUrl: "https://github.com/gaurikadalge/Intelligent-DS-Optimizer",
    imageThumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    id: "sara-emotion-ai",
    title: "SARA: Emotion Detection AI Assistant",
    shortDescription: "Real-time facial and speech emotion recognition system providing adaptive, empathetic conversational responses based on detected states.",
    fullDescription: "An interactive assistive AI system that monitors user facial expressions and vocal characteristics to deduce emotional state (calm, stressed, happy, fatigued), adapting its conversational tone, response complexity, and productivity suggestions accordingly.",
    category: "AI / ML / LLM",
    tags: ["Python", "OpenCV", "Deep Learning", "Facial Emotion Recognition", "NLP"],
    metric: "Adaptive Emotional Tone Modulation",
    status: "Coursework Flagship",
    problemStatement: "Digital assistants behave statically regardless of the emotional state of the human user, providing verbose responses when the user is hurried or cold responses when the user is distressed.",
    objectives: [
      "Implement real-time facial feature extraction and emotion classification via OpenCV and CNNs.",
      "Design an adaptive response dialogue engine modifying conversational register based on emotion.",
      "Maintain a temporal emotion history log to identify persistent fatigue or cognitive strain."
    ],
    systemArchitecture: "OpenCV processes video stream via Haar Cascades / DNN face detector. Cropped facial regions pass through a quantized emotion recognition model. Emotion probabilities feed into a contextual dialogue engine modifying prompt system directives in real time.",
    technologiesUsed: [
      { domain: "Perception & DL", items: ["OpenCV", "Convolutional Neural Networks", "Python"] },
      { domain: "Interaction", items: ["Text-to-Speech", "NLP Dialogue Engine", "Tkinter / Web UI"] },
    ],
    keyFeatures: [
      "Continuous facial emotion detection running at 25+ FPS on standard webcam.",
      "Adaptive tone synthesis responding empathetically to detected fatigue or stress.",
      "Privacy-first local processing: Video feeds never leave the local device memory."
    ],
    verifiedResults: [
      "Achieved high user satisfaction in usability trials through appropriate conversational pacing."
    ],
    imageThumbnail: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    featured: false,
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    description: "Core languages utilized across systems development, algorithm design, and data processing.",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "SQL (joins, CTEs, window functions)", highlight: true },
      { name: "Java" },
      { name: "TypeScript" },
      { name: "HTML5 / CSS3" },
      { name: "MERN Stack" },
    ]
  },
  {
    title: "AI, ML & Agentic Systems",
    iconName: "BrainCircuit",
    description: "Multi-agent orchestration, hybrid RAG pipelines, and classical machine learning models.",
    skills: [
      { name: "LLM Agents & Tool Calling", highlight: true },
      { name: "Hybrid Retrieval (Dense + BM25)", highlight: true },
      { name: "Reciprocal Rank Fusion (RRF)", highlight: true },
      { name: "Cross-Encoder Reranking", highlight: true },
      { name: "PyTorch", highlight: true },
      { name: "scikit-learn", highlight: true },
      { name: "XGBoost" },
      { name: "Sentence-Transformers" },
      { name: "Prompt Engineering" },
      { name: "SHAP Interpretability" },
    ]
  },
  {
    title: "Backend & Databases",
    iconName: "Database",
    description: "Production API microservices, polyglot databases, and vector stores.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "PostgreSQL & pgvector", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "FAISS Vector Index", highlight: true },
      { name: "Pydantic V2", highlight: true },
      { name: "REST APIs" },
      { name: "MySQL" },
      { name: "Snowflake (ELT)" },
      { name: "ChromaDB" },
    ]
  },
  {
    title: "Hardware, Robotics & IoT",
    iconName: "Cpu",
    description: "Autonomous robotics, spatial sensor fusion, and long-range mesh communications.",
    skills: [
      { name: "ROS2 (Robot Operating System)", highlight: true },
      { name: "LiDAR & Sensor Fusion (EKF)", highlight: true },
      { name: "LoRaWAN & LoRa Mesh", highlight: true },
      { name: "ESP32 & Arduino", highlight: true },
      { name: "Raspberry Pi" },
      { name: "Computer Vision (OpenCV)" },
      { name: "Google MediaPipe" },
      { name: "Nav2 Stack & SLAM" },
    ]
  },
  {
    title: "DevOps, MLOps & Tools",
    iconName: "GitBranch",
    description: "Continuous integration, containerized sandboxes, and data governance.",
    skills: [
      { name: "Docker", highlight: true },
      { name: "GitHub Actions (CI/CD)", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "DVC (Data Version Control)" },
      { name: "MLflow" },
      { name: "AWS Cloud Fundamentals" },
      { name: "Power BI & Tableau" },
      { name: "Streamlit" },
    ]
  },
  {
    title: "Data Engineering Concepts",
    iconName: "Layers",
    description: "Enterprise data pipelines, reconciliation, and audit architectures.",
    skills: [
      { name: "ETL / ELT Pipelines", highlight: true },
      { name: "Idempotent Data Loads", highlight: true },
      { name: "Tiered Reconciliation", highlight: true },
      { name: "Data Quality & Validation Gates", highlight: true },
      { name: "Audit Metadata & Lineage" },
      { name: "Polyglot Persistence" },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Research Intern",
    organization: "Bharat Space Education Research Centre (with ISRO)",
    period: "Dec 2025 – Jan 2026",
    type: "Internship",
    location: "Remote",
    highlights: [
      "Gained hands-on exposure to emerging space technologies, engineering design methodologies, and innovation frameworks within the space technology ecosystem.",
      "Studied satellite data telemetry analysis, sensor instrumentation, and aerospace systems architecture."
    ],
    technologies: ["Space Technologies", "Engineering Methodologies", "Systems Design", "Telemetry Analysis"]
  },
  {
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC '25)",
    period: "Jul 2025 – Dec 2025",
    type: "Open Source",
    location: "Remote",
    highlights: [
      "Collaborated actively with maintainers and international contributors across production open-source repositories.",
      "Strengthened advanced Git branching workflows, automated testing suites, and large-scale codebase navigation."
    ],
    technologies: ["Git", "GitHub Actions", "Collaborative Development", "Python", "Code Review"]
  },
  {
    role: "Industry Data Analytics Simulations",
    organization: "Deloitte Australia & Tata Group (Forage)",
    period: "Jul 2025 – Aug 2025",
    type: "Job Simulation",
    location: "Remote",
    highlights: [
      "Deloitte Australia: Performed corporate data quality assessments, client forensic analytics, and interactive dashboard modeling.",
      "Tata Group: Applied GenAI data analytics to synthesize executive strategic insights and optimize enterprise operations."
    ],
    technologies: ["Data Analytics", "GenAI Insights", "Tableau", "Forensic Data Analysis"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "patent-iot-disaster",
    title: "South African Patent Application (CIPC)",
    subtitle: "Patent Application No. 2026/05095",
    organization: "Companies and Intellectual Property Commission (South Africa)",
    date: "2026",
    category: "Patent",
    badge: "Patent Pending",
    description: "Co-inventor of 'An IoT Based Disaster Management System Using LoRa Mesh and Edge AI for Risk Prediction', a patent-pending system for resilient disaster telemetry during infrastructure collapse.",
    highlights: [
      "Patent Application No: 2026/05095 filed with the South African Patent Office (CIPC).",
      "Combines decentralized LoRa mesh networking with edge-computed machine learning risk indicators."
    ]
  },
  {
    id: "mahe-mobility-challenge",
    title: "2nd Runner Up — MAHE Mobility Challenge",
    subtitle: "Autonomous Navigation Robot with ROS2 & Sensor Fusion",
    organization: "Manipal Academy of Higher Education (MAHE)",
    date: "April 2026",
    category: "Competition",
    badge: "2nd Runner Up",
    description: "Designed and built an autonomous navigation robot with a modular ROS2 Humble architecture, multi-sensor fusion (2D LiDAR + Vision), and real-time SLAM.",
    highlights: [
      "Achieved 2nd Runner Up out of top robotics teams nationwide.",
      "Demonstrated reliable autonomous track navigation and dynamic obstacle avoidance."
    ]
  },
  {
    id: "mumbaihacks-2025",
    title: "Top Finalist — MumbaiHacks 2025",
    subtitle: "FinBuddy AI — Voice-First Financial Assistant",
    organization: "MumbaiHacks / Tech Community",
    date: "November 2025",
    category: "Competition",
    badge: "Finalist",
    description: "Created FinBuddy AI, a 6-agent financial operating system designed for India's informal economy utilizing multi-modal AI, voice commands, and GST compliance tracking.",
    highlights: [
      "Selected as Finalist at Mumbai's largest hackathon.",
      "Engineered a resilient multi-provider LLM fallback chain and vernacular voice processing."
    ]
  },
  {
    id: "nxp-cup-india-2026",
    title: "Regional Finalist — NXP Cup India 2026",
    subtitle: "Autonomous Medical Response Buggy",
    organization: "NXP Semiconductors",
    date: "August 2026",
    category: "Competition",
    badge: "Regional Finalist",
    description: "Developed sign detection, lane keeping, and high-speed QR scanning modules for an autonomous buggy in emergency response smart-city navigation.",
    highlights: [
      "Advanced to Regional Finals in NXP's premier autonomous vehicle competition.",
      "Achieved sub-second QR decoding and 100% traffic sign recognition on simulated track."
    ]
  },
  {
    id: "cert-amazon-cloud",
    title: "Amazon Cloud Consultant Specialization",
    subtitle: "Cloud Architecture & Services Specialization",
    organization: "Coursera / Amazon Web Services",
    date: "2025 – 2026",
    category: "Certification",
    badge: "Specialization",
    description: "Completed rigorous coursework in cloud infrastructure, compute/storage architectures, and security fundamentals.",
    highlights: [
      "Covers AWS core services, cloud governance, and cost optimization architectures."
    ]
  },
  {
    id: "cert-fintech-markets",
    title: "Financial Markets and FinTech Innovation Specialization",
    subtitle: "Financial Engineering & Modern Banking Tech",
    organization: "Coursera",
    date: "2025 – 2026",
    category: "Certification",
    badge: "Specialization",
    description: "In-depth specialization exploring modern financial instruments, market microstructure, algorithmic transactions, and fintech regulatory frameworks.",
    highlights: [
      "Applied theoretical market mechanics to automated transaction pipelines and reconciliation systems."
    ]
  }
];

export const LEADERSHIP_ROLES = [
  {
    role: "Alumni & Corporate Outreach Lead",
    organization: "I2IOC TPO Council, VIT Pune",
    description: "Spearheaded alumni networking initiatives, placement coordination, and industry connect sessions for graduating batches."
  },
  {
    role: "Equity Researcher",
    organization: "Investment Forum, VIT Pune",
    description: "Conducted fundamental and technical equity evaluations, analyzing corporate earnings, macroeconomic indicators, and market trends."
  },
  {
    role: "Public Relations Head",
    organization: "Campus2Corporate, VIT Pune",
    description: "Directed outreach campaigns, student mentorship programs, and professional grooming workshops bridging academia and industry."
  },
  {
    role: "Social Activist & Core Member",
    organization: "Social Welfare & Development Council, VIT Pune",
    description: "Organized community welfare drives, educational support initiatives, and rural technology literacy programs."
  }
];
