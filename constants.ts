import { Experience, Honor, Project, Publication } from './types';

// NOTE: Please ensure you create an 'assets' folder in your project root 
// and place the corresponding images/videos there with these filenames.
export const IMAGES = {
  profile: 'assets/profile.jpg',
  
  // Publications
  pub1: 'assets/pub_combustion.jpg',
  pub2: 'assets/pub_znfe_cocr.jpg',
  pub3: 'assets/pub_bi_nife.jpg',
  pub4: 'assets/pub_fingerprint.jpg',
  
  // Projects
  projXrd: 'assets/proj_xrd_gui.jpg',
  projStoePoster: 'assets/proj_stoe_machine.jpg', // Used as video poster
  projLiquidSetup: 'assets/proj_liquid_diagram.jpg',
  projLiquidResult: 'assets/proj_liquid_spiral.jpg',
  projGui: 'assets/proj_liquid_gui.jpg',
  
  // Certificates
  certNvidia: 'assets/cert_nvidia.jpg',
  certActInSpace: 'assets/cert_actinspace.jpg',
  certIpas: 'assets/cert_ipas.jpg',
};

export const SKILLS = [
  'Python', 'PyQt5', 'YOLOv8', 'Arduino', 'Marlin FW', 
  'Solidworks', 'Fusion360', 'ImageJ', 'FullProf', 'Dectris API'
];

export const TOP_PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    year: '2024',
    journal: 'Materials Today Chemistry (IF: 7.6)',
    title: 'Advancing Humidity Sensing and Magnetocaloric Properties of Spinel Structural CoCr₂O₄ Nanoparticles Achieved via Innovative Bismuth Doping by Combustion Synthesis',
    authors: 'Ming-Kang Ho (First Author), et al.',
    highlight: '開發新型鉍摻雜燃燒合成法，顯著提升濕度感測靈敏度與磁熱效應。',
    image: IMAGES.pub1,
    styleColor: 'primary'
  },
  {
    id: 'p2',
    year: '2025',
    journal: 'Journal of Electronic Materials',
    title: 'Study of Crystal Structure, Morphology, Magnetic and Electronic Structure of ZnFe₂O₄/CoCr₂O₄ Nanocomposites',
    authors: 'K. Manjunatha, ..., Ming-Kang Ho, et al.',
    highlight: '深入探討 ZnFe₂O₄/CoCr₂O₄ 奈米複合材料的晶體結構、形貌、磁性與電子結構特性。',
    image: IMAGES.pub2,
    styleColor: 'purple'
  },
  {
    id: 'p3',
    year: '2025',
    journal: 'ACS Applied Electronic Materials',
    title: 'High-Performance Bi-Doped NiFe₂O₄ Nanoparticles for Advanced Supercapacitors and Room Temperature Magnetic Memory Applications',
    authors: 'Tsu-En Hsu, ..., Ming-Kang Ho, et al.',
    highlight: '研究高效能 Bi 摻雜 NiFe₂O₄ 奈米粒子，應用於先進超級電容器及室溫磁記憶體。',
    image: IMAGES.pub3,
    styleColor: 'red'
  },
  {
    id: 'p4',
    year: '2024',
    journal: 'Materials Today Sustainability (IF: 7.8)',
    title: 'Investigating Fe-doped Yttrium Oxide nanophosphors for enhanced latent fingerprint visualization and deep learning analysis',
    authors: 'D. R. Lavanya, ..., Ming-Kang Ho, et al.',
    highlight: '結合 YOLOv8 深度學習模型，自動識別並標註指紋特徵點，提升鑑識科學自動化程度。',
    image: IMAGES.pub4,
    styleColor: 'green'
  }
];

export const MORE_PUBLICATIONS: Publication[] = [
  { id: 'm1', year: '2025', journal: 'Sensors and Actuators B: Chemical', title: 'Bismuth-doping Induced Enhanced Humidity Sensing Properties of Spinel NiFe₂O₄ Nanoparticles', authors: '' },
  { id: 'm2', year: '2024', journal: 'Journal of Energy Storage', title: 'Magnetic Transition Magnetocaloric and Supercapacitor Behavior in Synthesized Sn0.6Mn0.1Ge0.3Te Alloys', authors: '' },
  { id: 'm3', year: '2024', journal: 'Materials Today Chemistry', title: 'Manipulating and Investigating the Room-Temperature Magnetic Memory Phenomenon: The Impact of Rare-Earth Ion Doping on Nickel Oxide Nanoparticles', authors: '' },
  { id: 'm4', year: '2024', journal: 'ACS Applied Optical Materials', title: 'Enhanced down-conversion emission, high-level security, and advanced latent fingerprint visualization in La₂Zr₂O₇:Er³⁺ nanophosphor through surface modification and deep learning analysis', authors: '' },
  { id: 'm5', year: '2024', journal: 'Sustainable Materials and Technologies', title: 'Sustainable Latent Fingerprint Enhancement with Ink-Free Printing and Shape Memory Behavior Using Parthenium Hysterophorus-derived Carbon Dots', authors: '' },
  { id: 'm6', year: '2024', journal: 'Journal of Solid State Chemistry', title: 'Study of structural, X-ray photoelectron spectroscopy, Raman and temperature-dependent magnetic studies of NiFe₂O₄/CoCr₂O₄ nanocomposites', authors: '' },
  { id: 'm7', year: '2024', journal: 'Journal of Materials Science: Materials in Electronics', title: 'Structure, Microstructure and Enhanced Sensing Behavior of Nickle ferrite-Cobalt Chromate for Humidity Sensor Applications', authors: '' },
  { id: 'm8', year: '2024', journal: 'Journal of Inorganic and Organometallic Polymers and Materials', title: 'X-ray photoelectron spectroscopy, Raman and humidity sensing properties of Sm³⁺ doped CoCr₂O₄ for humidity sensor applications', authors: '' },
  { id: 'm9', year: '2023', journal: 'ACS Applied Nano Materials', title: 'Orange-Red Emitting Sr₉Al₆O₁₈:Pr³⁺ Nanophosphors for Advanced Latent Fingerprints and Security Ink', authors: '' },
  { id: 'm10', year: '2023', journal: 'Materials Today Sustainability', title: 'Optimized Tb³⁺-activated Highly Efficient Green-emanating BaLa₂ZnO₅ nanophosphors in PDMS Matrix for Flexible Display, Anti-Counterfeiting, and Dermatoglyphics Applications', authors: '' },
  { id: 'm11', year: '2023', journal: 'Biomaterials Advances', title: 'Potential applications of Fe³⁺-activated Sr₉Al₆O₁₈ nanophosphors for fingerprint detection, oxidative stress, and thrombosis treatment', authors: '' },
  { id: 'm12', year: '2023', journal: 'The Journal of Physics Chemistry C', title: 'Magnetic Memory and Promising Magnetocaloric Effect of Sn0.6Cr0.1Ge0.3Te Solid Solution Synthesized by Sealed Tube Solid-State Reaction', authors: '' },
  { id: 'm13', year: '2023', journal: 'ACS Applied Nano Materials', title: 'Mg-Doped CoCr₂O₄ Nanoparticles: Implications for Magnetic Memory and Magnetocaloric Effect', authors: '' },
  { id: 'm14', year: '2023', journal: 'Colloids and Surfaces A', title: 'Stimuli-responsive color-tunable BaLa₂ZnO₅:Bi³⁺ phosphor for the encryption and authentication of security patterns and latent fingerprint detection', authors: '' },
  { id: 'm15', year: '2022', journal: 'International Journal of Molecular Science', title: 'Precise Sn-Doping Modulation for Optimizing CdWO₄ Nanorod Photoluminescence', authors: '' },
  { id: 'm16', year: '2022', journal: 'ACS Applied Nano Materials', title: 'Modulation of Magnetic and Luminescence Properties via Control Cu Doped in CdWO₄ Nanorods for Photocatalytic Applications', authors: '' },
  { id: 'm17', year: '2022', journal: 'Applied Surface Science', title: 'Antiferromagnetic spin correlations above the bulk ordering temperature in NiO nanoparticles: Effect of extrinsic factors', authors: '' },
  { id: 'm18', year: '2021', journal: 'ACS Applied Nano Materials', title: 'Sm-Doped NiO Nanoparticles for Magnetic Memory at Room Temperature', authors: '' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    period: '2024 - Present',
    role: '博士級研究員 (研發替代役)',
    organization: '財團法人國家同步輻射研究中心 (NSRRC) - TPS 15A',
    description: '負責 TPS 15A1 光束線（微米單晶 X 光繞射）的建置、維運及用戶服務。並且有 TLS 03A1, 20A1, 17C1 及 TPS 23A1 光束線使用的用戶經驗。',
    type: 'work'
  },
  {
    id: 'edu1',
    period: '2018 - 2024',
    role: '物理系 博士',
    organization: '國立東華大學 (畢業於 2024/07)',
    description: '專攻磁性材料、奈米科技與 X 光頻譜分析。指導教授：吳勝允教授 (Modern NanoMag Lab)。',
    type: 'education'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: '高壓單晶 X 光繞射控制系統',
    category: 'Instrument Control',
    description: '為了應對高壓結晶學對精確對光與快速數據收集的需求，開發了整合馬達控制與偵測器讀取的 Master GUI。此系統大幅減少了人工操作的時間與誤差。',
    features: [
      '直觀操作：使用 PyQt5 (Qt Designer) 打造完整控制面板，整合馬達狀態、影像顯示與掃描參數設定。',
      '硬體串接：透過 API 連結 Dectris 9M 偵測器，即時獲取並解析晶體繞射點 (Diffraction Spots) 數據。',
      '即時擬合：實現 Real-time Fitting (Gaussian/Lorentzian)，自動計算 Peak Center 並驅動馬達校正晶體位置。',
      '自動化流程：支援多軸掃描 (Scan)、自動置中 (Auto Center) 與數據存檔功能。'
    ],
    mainImage: IMAGES.projXrd,
    layout: 'left'
  },
  {
    id: 'proj2',
    title: 'TPS 15A1 實驗儀器實作紀錄',
    category: 'Experiment Setup',
    description: '紀錄於 TPS 15A1 線站進行的實驗儀器架設、調校與實際運作過程。展現面對複雜實驗環境時，解決現場問題與精準操作的實力證明。',
    features: [
      '光束線站架設',
      '精密儀器調校',
      '真空系統操作'
    ],
    mainImage: IMAGES.projStoePoster, // Using the image as poster
    video: 'assets/stoe_video.mp4', 
    layout: 'center'
  },
  {
    id: 'proj3',
    title: '自動化液體螺旋觀測設備',
    category: 'Full-Stack Hardware',
    description: '針對流體力學中的 "Teapot Effect" 與 3D 列印噴頭阻塞問題，開發了一套自動化觀測系統。解決了傳統手動實驗無法精確控制流速與角度的痛點。',
    features: [
      '機構設計：使用 Tinkercad 與 Solidworks 設計垂直圓柱與噴頭固定座，並以 3D 列印製作。',
      '韌體控制：整合 Arduino 與 Marlin Firmware，精確控制步進馬達擠出量。',
      '軟體介面：開發 Python PyQt5 GUI，即時調整參數 (Speed, Angle, Extrusion) 並生成 G-code 控制機器。',
      '數據分析：使用 ImageJ 分析影像，驗證 Weber Number 與偏轉角度的理論關係。'
    ],
    mainImage: IMAGES.projLiquidSetup,
    subImages: [
      { src: IMAGES.projLiquidResult, label: '實驗觀測影像' },
      { src: IMAGES.projGui, label: '自製 GUI 介面' }
    ],
    layout: 'right'
  }
];

export const HONORS: Honor[] = [
  {
    id: 'nvidia',
    title: 'NVIDIA DLI Certificate',
    subtitle: 'Fundamentals of Accelerated Data Science',
    meta: 'Issued: 2025/12',
    iconClass: 'fa-microchip',
    iconColorClass: 'text-[#76b900]',
    image: IMAGES.certNvidia
  },
  {
    id: 'actinspace',
    title: 'Merit Award',
    subtitle: 'ActInSpace 2018',
    meta: 'Taiwan-France Space Innovation Hackathon',
    iconClass: 'fa-trophy',
    iconColorClass: 'text-yellow-500',
    image: IMAGES.certActInSpace
  },
  {
    id: 'ipas',
    title: 'IPAS Certified',
    subtitle: '經濟部產業人才能力鑑定',
    meta: '3D列印積層製造工程師 - 初級',
    iconClass: 'fa-certificate',
    iconColorClass: 'text-blue-500',
    image: IMAGES.certIpas
  }
];